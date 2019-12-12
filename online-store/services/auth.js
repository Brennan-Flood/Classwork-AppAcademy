const validateRegisterInput = require("../server/validation/register");
const validateLoginInput = require("../server/validation/login");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../server/models/User");
const keys = require("../config/keys");

const register = async data => {
  try {
    const { message, isValid } = validateRegisterInput(data);

    if (!isValid) {
      throw new Error(message);
    }

    const { name, email, password } = data;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new Error("This user already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User(
      {
        name,
        email,
        password: hashedPassword
      },
      err => {
        if (err) throw err;
      }
    );

    user.save();
    // we'll create a token for the user
    const token = jwt.sign({ id: user._id }, keys.secretOrKey);

    // then return our created token, set loggedIn to be true, null their password, and send the rest of the user
    return { token, loggedIn: true, ...user._doc, password: null };
  } catch (err) {
    throw err;
  }
};

const logout = async data => {

  const { _id } = data;
  const user = User.findById({ _id });
  const token = "";

  return { token, loggedIn: false, ...user._doc };
};

const login = async data => {
  try {
    // use our other validator we wrote to validate this data
    const { message, isValid } = validateLoginInput(data);

    if (!isValid) {
      throw new Error(message);
    }

    const user = await User.findOne({email: data.email});
    if (!user) throw new Error("User doesn't exist");

    const password = data.password;
    const validPass = await bcrypt.compareSync(password, user.password);
    if (!validPass) {
      throw new Error("Password is invalid")
    }
    const token = jwt.sign({ id: user._id}, keys.secretOrKey)

    return { token, loggedIn: true, ...user._doc, password: null };
  } catch (err) {
    throw err;
  }

  
};

const verifyUser = async data => {
  try {
    // we take in the token from our mutation
    const { token } = data;
    // we decode the token using our secret password to get the
    // user's id
    const decoded = jwt.verify(token, keys.secretOrKey);
    const { id } = decoded;

    // then we try to use the User with the id we just decoded
    // making sure we await the response
    const loggedIn = await User.findById(id).then(user => {
      return user ? true : false;
    });

    return { loggedIn };
  } catch (err) {
    return { loggedIn: false };
  }
};

module.exports = { register, logout, login, verifyUser };