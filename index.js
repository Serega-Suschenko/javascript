// const even = function(num){
//  if (num % 2 === 0){
//    return 'even'
//  } else { return 'odd'}
//}
//const n = +prompt("Введите целое число.");
//alert(even(n));
//
//
//
//const two = function(num1 , num2){
//  if (num1 <= num2){return num1} else {return num2}
//}
//const x = +prompt("Введите число")
//const y = +prompt ("Введите второе число")
//alert (two(x,y))
//
//
//
//const money = function(num1 , num2){
//  if (num1 >= num2){return 'Денег хватает'} else {return 'Денег мало'}
//}
//const x1 = +prompt("Количество денег")
//const y2 = +prompt ("Введите сумму")
//alert (money(x1,y2))

function trafficlights(trafficcolor) {
  const red = "red";
  const yellow = "yellow";
  const green = "green";
  if (trafficcolor === red) {
    return "Стоп";
  } else if (trafficcolor === yellow) {
    return "Приготовились";
  } else if (trafficcolor === green) {
    return "Гоу";
  }
}

//let num1 = Number(prompt("первое число"));
//let num2 = Number(prompt("второе число"));
//let operator = prompt("напиши оператор(/,+,*, -)");
//function calc(num1, num2, operator) {
//  let result;
//  switch (operator) {
//    case "-":
//      result = num1 - num2;
//      break;
//    case "+":
//      result = num1 + num2;
//      break;
//    case "*":
//      result = num1 * num2;
//      break;
//    case "/":
//      result = num1 / num2;
//      break;
//    default:
//      alert("Такого оператора нет");
//  }
//  alert(result);
//}
//const result = calc(num1,num2,operator);

function month(num) {
  switch (num) {
    case "12":
    case "1":
    case "2": {
      console.log("Зима");
      break;
    }
    case "3":
    case "4":
    case "5": {
      console.log("Весна");
      break;
    }
    case "6":
    case "7":
    case "8": {
      console.log("Лето");
      break;
    }
    case "9":
    case "10":
    case "11": {
      console.log("Осень");
      break;
    }
    default:{
      console.log("Такого месяца нет")
    }
  }
};
