"use strict";
///////////////////////////////////////////
const arrNumber1 = [1, 2, 3];
const arrNumber2 = [4, 5, 6];
//
const arrNumberConcat = arrNumber1.concat(arrNumber2);
// 
const arrNumberReversed = arrNumber1.reverse();
// 
const arrNumberPush = arrNumber1.push(4, 5, 6);
const arrNumberUnshift = arrNumber1.unshift(4, 5, 6);
/////////////////////////////////////////// 




///////////////////////////////////////////
const fileExtension = ["js", "css", "jq"];
const fileExtensionShift = fileExtension.shift();
const fileExtensionPop = fileExtension.pop();
///////////////////////////////////////////



///////////////////////////////////////////
const numForSlice = [1, 2, 3, 4, 5];
//
const slice1 = numForSlice.slice(0, 3);
//
const slice2 = numForSlice.slice(-2);
///////////////////////////////////////////



///////////////////////////////////////////
const numForSplice1 = [1, 2, 3, 4, 5];
numForSplice1.splice(1, 2);
//

const numForSplice2 = [1, 2, 3, 4, 5];
const splice = numForSplice2.splice(1, 3);
//
const numForSplice3 = [1, 2, 3, 4, 5];
numForSplice3.splice(3, 0, "a", "b", "c");
//
const numForSplice4 = [1, 2, 3, 4, 5];
numForSplice4.splice(1,0,"a","b");
numForSplice4.splice(-1, 0, "c");
numForSplice4.splice(8, 0, "e");
///////////////////////////////////////////



///////////////////////////////////////////
const numForSortArr = [3, 4, 1, 2, 7];
numForSortArr.sort();
///////////////////////////////////////////



///////////////////////////////////////////

const arrWithObject = [
  { firstName: "Test", lastName: "Testovich", age: 42, gender: "male" },
  { firstName: "User", lastName: "Userovich", age: 12, gender: "male" },
  { firstName: "Test`ya", lastName: "Testovna", age: 16, gender: "female" },
  { firstName: "Logina", lastName: "Consol`evna", age: 42, gender: "female" },
];
arrWithObject.forEach(function callback(currentName) {
  console.log(
    `Пользователь ${currentName.firstName} ${currentName.lastName} являеться ${currentName.gender} и ему сейчас ${currentName.age} лет`
  );
});
////////////////////////////////////////////
  
const telephoneNumber  = arrWithObject.map(function callbackMap (currentName) {
    if (currentName) {
      return {...currentName, telephone: "0506666666"}
    }
  });

  
  
  
  const arrFilter = [
    { firstName: 'Test', lastName: 'Testovich', age: 27, gender: 'male' },
    { firstName: 'User', lastName: 'Userovich', age: 12, gender: 'male' },
    { firstName: 'Test`ya', lastName: 'Testovna', age: 16, gender: 'female' },
    { firstName: 'Logina', lastName: 'Consol`evna', age: 42, gender: 'female' },
    { firstName: 'Undefined', lastName: 'Undefinovich', age: 99 },
    { firstName: 'Null', lastName: 'Nullovich', gender: 'male' }
  ]
  
  const FilterUsers = arrFilter.filter(function callbackFilter(currentName) {
    if (currentName.age >= 18 && currentName.gender === "female") {
      return currentName;
    }
  });

  const arrFlat = [1,2,3, [10,20,30, [100,200,300, [1000, 2000, 3000]]]];
  const arrFlatNoArr = arrFlat.flat(Infinity);

  



  
  
  
  
