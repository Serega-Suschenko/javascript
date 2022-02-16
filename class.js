class Animal {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.eat = true;
    this.move = true;
  }
 
}

class Lion extends Animal {
  constructor(name, color) {
    super(name, color);
  }
  getVoice(){
    return "рык"
  }
}

class Snake extends Animal {
  constructor(name, color, lengthSnake) {
    super(name, color,);
    this.lengthSnake = lengthSnake;
  }
  getVoice(){
    return "shhhhhhh"
  }
}

class Trainer {
  constructor(name) {
    this.name = name;
  }
  commandVoice(animal){
    return animal.getVoice;
  };
}

const lion = new Lion("sharik", "black");
const trainer = new Trainer("Gari");
const snake = new Snake("Billy", "green", 18);
