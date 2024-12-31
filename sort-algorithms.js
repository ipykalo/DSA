// Bubble Sorting
const bubbleSort = (array) => {
  let n = array.length - 1;

  for (let i = 0; i < n; i++) {
    let swapped = false;

    for (let j = 0; j < n - i; j++) {
      let current = array[j];
      let next = array[j + 1];

      if (current > next) {
        [array[j], array[j + 1]] = [next, current];
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }
};
