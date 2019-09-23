
DROP TABLE users;
DROP TABLE questions; 
DROP TABLE question_follows;
DROP TABLE replies;
DROP TABLE question_likes;

PRAGMA foreign_keys = ON;

CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  fname VARCHAR(255),
  lname VARCHAR(255)
);

CREATE TABLE questions (
  id INTEGER PRIMARY KEY,
  title VARCHAR(255),
  body VARCHAR(255),
  user_id INTEGER,

  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE question_follows (
  id INTEGER PRIMARY KEY,
  user_id INTEGER,
  question_id INTEGER,

  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY  (question_id) REFERENCES questions(id)
);

CREATE TABLE replies (
  id INTEGER PRIMARY KEY,
  question_id INTEGER,
  parent_reply_id INTEGER,
  user_id INTEGER,
  body VARCHAR(255),

  FOREIGN KEY (question_id) REFERENCES questions(id),
  FOREIGN KEY (parent_reply_id) REFERENCES replies(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE question_likes (
  id INTEGER PRIMARY KEY,
  user_id INTEGER,
  question_id INTEGER,

  FOREIGN KEY (question_id) REFERENCES questions(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO 
  users (fname, lname)
VALUES
  ('Tony', 'Ng'),
  ('Brennan', 'Flood'),
  ('Joe', 'Smith');

INSERT INTO 
  questions (title, body, user_id)
VALUES
  ('food', 'what is your favorite food?', 1),
  ('coding', 'how do you code?', 2),
  ('color', 'what is your favorite color?', 3);

INSERT INTO
  question_follows(user_id, question_id)
VALUES
  (1, 2),
  (2, 1),
  (1, 3);

INSERT INTO 
  replies (question_id, parent_reply_id, user_id, body)
VALUES
  (1, NULL, 3, 'cheeseburger'),
  (2, NULL, 1, 'study'),
  (1, 1, 2, 'No, pizza is better');

INSERT INTO 
  question_likes(user_id, question_id)
VALUES
  (1, 3),
  (2, 1),
  (3, 1);


