class MyArray {
  constructor() {
    this.length = 0;
  }
  push (value) {
    this[this.length] = value;
    
    this.length++;
    
    return this.length;
  };
  pop () {
    let del = this[this.length - 1];
    
    delete this[this.length - 1];
    
    this.length--;
    
    return del;
  };
  forEach (callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  };
  
  map (callback) {
    let result = new MyArray();
    for (let i = 0; i < this.length; i++) {
      let current = callback(this[i], i, this);
      result.push(current);
    }
    return result;
  };
}