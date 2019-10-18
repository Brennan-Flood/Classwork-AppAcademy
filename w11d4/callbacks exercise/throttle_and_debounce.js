

Function.prototype.myThrottle = function (interval) {
  let tooSoon = false;
  let that = this;
  
  return function () {
    if (tooSoon === false) {
      tooSoon = true;
      setTimeout(function () { tooSoon = false }, interval);
      return that();
    }
  }
};

// search(string);
// const mythrottledsearch = search.myThrottle(5000)
// mythrottledsearch(string)

// class Neuron {
//   fire() {
//     console.log("Firing!");
//   }
// }


// class Neuron {
//   constructor() {
//     this.fire = this.fire.myThrottle(500);
//   }

//   fire() {
//     console.log("Firing!");
//   }
// }

// const neuron = new Neuron();

// neuron.fire = neuron.fire.myThrottle(500);

// const interval = setInterval(() => {
//   neuron.fire();
// }, 10);



Function.prototype.myDebounce = function(interval) {
  let timeout;

  return () => {
    const func = () => {
      this();
    }
    clearTimeout(timeout);
    timeout = setTimeout(func(), interval);
  }
};



class SearchBar {
  constructor() {
    this.query = "";

    this.type = this.type.bind(this);
    this.search = this.search.bind(this);
  }

  type(letter) {
    this.query += letter;
    this.search();
  }

  search() {
    console.log(`searching for ${this.query}`);
  }
}


const searchBar = new SearchBar();

const queryForHelloWorld = () => {
  searchBar.type("h");
  searchBar.type("e");
  searchBar.type("l");
  searchBar.type("l");
  searchBar.type("o");
  searchBar.type(" ");
  searchBar.type("w");
  searchBar.type("o");
  searchBar.type("r");
  searchBar.type("l");
  searchBar.type("d");
};



searchBar.search = searchBar.search.myDebounce(2000);
searchBar.search();

queryForHelloWorld();
