
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (typeof (matrix) == 'undefined') { return [] };
  const arr = [...matrix];
  matrix.forEach((element, index) => {
    if (index % 2 != 0) {
      element.reverse();
    }
  });
  return arr.flat();
}


