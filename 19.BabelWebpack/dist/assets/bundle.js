"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var greet = function greet(name) {
  console.log("hello ".concat(name));
};

greet("gon");

var Gon = function Gon() {
  _classCallCheck(this, Gon);

  this.name = "gon";
};

var gon = new Gon();
console.log(gon);
