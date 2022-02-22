function factorial(number) {
  if (number === 1) {
    return number;
  } else if (number < 0) {
    throw new Error("number равен минусовому значению");
  }
  return number * factorial(n - 1);
}

function toPower(number = 5, exp = 2) {
  if (exp === 1) {
    return number;
  } else if (exp > 1) {
    return number * toPower(number, exp - 1);
  } else if (exp < 1) {
    return 1 / (number / toPower(number, exp + 1));
  }
}
