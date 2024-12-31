// Find the lowest value in the Array
const findMinValue = (array) => {
  let min = array[0];

  for (let el of array) {
    if (el < min) {
      min = el;
    }
  }

  return min;
};

console.log(findMinValue([8, 10, 5, 3, 90, 18]));
