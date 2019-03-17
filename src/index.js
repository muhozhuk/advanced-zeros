module.exports = function getZerosCount(number, base) {
  var
    factorialZeros = [],
    i = 0,
    k = 1,
    n = 0,
    divisor = 2,
    factors = [],
    repeats = {},
    dividend = base,
    result = 0;

  while (divisor <= base) {
    if (dividend % divisor == 0) {
      dividend = dividend / divisor;
      factors[i] = divisor;
      if (!(repeats[factors[i]] in repeats)) { //если такое свойство нет
        repeats[factors[i]] = 1; //количество повторений данного множителя
      }
      if (divisor == factors[i - 1]) { //если множитель повторяется
        repeats[factors[i]]++; // то увеличиваем значение свойства объекта повторений на 1
      }
      i++;
    } else {
      divisor++;
    }
  }
  factors = Object.keys(repeats);

  while (n < factors.length) {
    factorialZeros[n] = 0;
    while (number >= Math.pow(factors[n], k)) {
      factorialZeros[n] = factorialZeros[n] + Math.floor(number / Math.pow(factors[n], k));
      k++;
    }

    factorialZeros[n] = factorialZeros[n] / repeats[factors[n]];
    n++;
    k = 1;
  }
  k = 1;
  result = factorialZeros[0];
  while (k <= factorialZeros.length) {
    if (factorialZeros[k] < factorialZeros[k - 1]) {
      result = factorialZeros[k];
    }
    k++;
  }
  result = Math.floor(result);
  return result;
}
