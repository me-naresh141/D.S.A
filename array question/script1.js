// Program to print the duplicate elements of an array using for loop.

function duplicateNumber(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] == array[j]) {
        result.push(arr[i]);
      }
    }
  }
  return result;
}

duplicateNumber([2, 3, 4, 5, 6, 3, 9, 8, 8, 5]);

// output [3,5,8]
