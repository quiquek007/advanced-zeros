module.exports = function getZerosCount(number, base) {

  let log = console.log;
  let multipliers = [];
  let answer = [];
  let step = 1;

  function getSimpleMultipliers(base){
    let divider = 2;
    let arr = [];
    while(divider <= base) {
      while (base % divider === 0) {
        arr.push(divider);
        base /= divider;
      }
      divider++;
    }
    if (base > 1) arr.push(base);

    return arr;
  }

  multipliers = getSimpleMultipliers(base);

  for(let i = 0; i < multipliers.length; i += step){

    let countOfSameNums = 0;
    let divider = multipliers[i];
    let rez = 0;

    // gets how many the same numbers in a row
    for (let j = i; j < multipliers.length; j++) {
      if (multipliers[i] === multipliers[j]) {
        countOfSameNums++;
      } else {
        step = countOfSameNums;
        break;
      }
    }

    // gets sum of zeros without scale notation
    while(divider < number) {
      rez += (number - number % divider) / divider;
      divider *= multipliers[i];
    }

    // gets sum of zeros with scale notation
    answer.push((rez - rez % countOfSameNums) / countOfSameNums);
  }

  return Math.min.apply(null, answer);
};