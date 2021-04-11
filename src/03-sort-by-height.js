/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const sortedArr = arr.filter((item) => item !== -1).sort((a, b) => a - b);
  if (sortedArr.length === 0) {
    return arr;
  }
  const result = [];
  for (let i = 0; i < arr.length;) {
    for (let j = 0; j < sortedArr.length;) {
      if (arr[i] === -1) {
        result.push(arr[i]);
        ++i;
      } else if (arr[i] !== sortedArr[j]) {
        result.push(sortedArr[j]);
        ++i;
        ++j;
      } else if (arr[i] === sortedArr[j]) {
        result.push(arr[i]);
        ++i;
        ++j;
      }
    }
  }
  return result;
}

module.exports = sortByHeight;
