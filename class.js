class User {
  constructor(name, surname, age){
    this.name = name;
    this.surname = surname;
    this.age = age;
  }
getFullName () {
  return `${this.name} ${this.surname}`
}
}


class Moder{
constructor(name, surname, age, email){
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.email = email;
}
getFullName () {
  return `${this.name} ${this.surname}`
};
createMessage(){
  return "Какието строки"
};

deleteMessage(){
  return "удалено"
};
get name(){
return this._name
};

set name (newName){
if (typeof newName !== 'string'){
  throw new TypeError('Имя не строка')
};
if (newName.trim() === ''){
  throw new Error('Имя пустая строка');

};
this._name =newName;
};
get surname(){
  return this._surname
  };
  
  set surname (newSurname){
  if (typeof newSurname !== 'string'){
    throw new TypeError('Фамилия не строка')
  };
  if (newSurname.trim() === ''){
    throw new Error('Фамилия пустая строка');
  
  };
  this._surname =newSurname;
};
 get age (){
  return this._get
  };
  
  set age (newAge){
  if (typeof newAge !== 'number'){
    throw new TypeError('Возраст не цыфра')
  };
  this._age = newAge;
  };
  get email(){
    return this._email
    };
    
    set email (newEmail){
    if (typeof newEmail !== 'string'){
      throw new TypeError('email не строка')
    };
    if (newEmail.trim() === ''){
      throw new Error('email пустая строка');
    
    };
    this._email =newEmail;
};
}
