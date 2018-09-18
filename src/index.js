module.exports = function getZerosCount(number, base) {

  let log = console.log;
  let multipliers = [];
  let answer = [];

  function getSimpleMultipliers(base){
    let divider = 2;
    let arr = [];
    while(divider <= base) {
      if (base % divider === 0) {
        arr.push(divider);
        base /= divider++;
      } else {
        divider++;
      }
    }
    return arr;
  }

  multipliers = getSimpleMultipliers(base);

  for(let i=0;i<multipliers.length;i++){
    let divider = multipliers[i];
    let rez = 0;
    while(divider < number) {
      rez += Math.floor(number / divider);
      divider *= multipliers[i];
    }
    answer.push(rez);
  }

  return Math.min.apply(null, answer);
}