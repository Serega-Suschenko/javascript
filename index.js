"use strict";

function MyArray() {
  this.length = 0;
  function isMyArray(argument) {
    return argument instanceof MyArray;
  }
}

function ArrPtototype() {
  this.push = function (value) {
    this[this.length] = value;

    this.length++;

    return this.length;
  };
  this.pop = function () {
    let del = this[this.length - 1];

    delete this[this.length - 1];

    this.length--;

    return del;
  };
  this.forEach = function () {};
}

MyArray.prototype = new ArrPtototype();
