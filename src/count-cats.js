const { NotImplementedError } = require('../lib');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
    const cat = '^^';
    let sumOfCats = 0;

    for (let i = 0; i < matrix.length; i++) {
        let arr = matrix[i];
        
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === cat) {
                sumOfCats += 1;
            }
        }
    }
    return sumOfCats;
}

module.exports = {
  countCats
};
