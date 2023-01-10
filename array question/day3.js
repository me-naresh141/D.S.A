// Find the minmum value in array

function minmumvalue(array) {
  if (array.length == 1) {
    return array[0];
  } else {
    let result = array[0];
    for (let i = 1; i < array.length; i++) {
      if (result > array[i]) {
        [result, array[i]] = [array[i], result];
      }
    }
    return result; // output 2
  }
}

minmumvalue([4, 5, 7, 6, 2, 3, 9, 8]);

// 2 solution
// 2 solution
function minmumvalue(array) {
  let result = array.sort((a, b) => {
    return a - b;
  });
  return result[0]; // output 2
}
minmumvalue([4, 5, 7, 6, 2, 3, 9, 8]);
