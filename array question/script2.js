// How to Sort Numeric Array using JavaScript

// first solution
function sortArray(array) {
  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}
sortArray([5, 4, 3, 7, 1, 2, 8, 9, 4]);
// output: [1, 2, 3, 4, 4, 5, 7, 8, 9];


// second solution
// second solution
function sortArray(array) {
  let result = array.sort((a, b) => {
    return a - b;
  });
  return result;
}

sortArray([5, 4, 3, 7, 1, 2, 8, 9, 4]);
// output: [1, 2, 3, 4, 4, 5, 7, 8, 9];
