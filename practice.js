function multiplyBiggerNumByTwo(num1, num2) {
  if (largerNum (num1, num2)) {
    return num1 * num2;
  } 
  return num2 * 2;
  
}

function divideBiggerNumByThree(num1, num2) {
  if (largerNum(num1, num2)) {
    return num1 / 3;
  }
  return (num2 / 3);
}

function eatMostTacos(sum1, sum2) {
  if (largerNum(sum1, sum2)) {
    return `I ate ${sum1} tacos.`;
  }
    return `I ate ${sum2} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
  if (largerNum(weight1, weight2)) {
    return `I adopted a dog that weighs ${weight2} pounds.`;
  } 
    return `I adopted a dog that weighs ${weight1} pounds.`;
}

function largerNum (x, y) {
  if (x > y) {
    return true;
  }
  return false;
}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};