class MyArray {
  constructor() {
    this.length = 0;
  }
  push = function (value) {
    this[this.length] = value;
    
    this.length++;
    
    return this.length;
  };
  pop = function () {
    let del = this[this.length - 1];
    
    delete this[this.length - 1];
    
    this.length--;
    
    return del;
  };
  forEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  };
  
  map = function (callback) {
    let result = new MyArray();
    for (let i = 0; i < this.length; i++) {
      let current = callback(this[i], i, this);
      result.push(current);
    }
    return result;
  };
}
