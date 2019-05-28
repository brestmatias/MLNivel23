var assert = require('assert');
var matrixHelper = require('../api/helpers/matrixHelper');

var matrix1=["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"];
console.log(matrixHelper.getRight2Diagonal(matrix1));

console.log(matrixHelper.getAllDiags(matrix1));

describe('MatrixHelper', function() {
  describe('#getLeftDiag', function() {
    it('should return matrix left diag', function() {
        var matrix=["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"];
      assert.equal(matrixHelper.getLeftDiag(matrix), "AAAATG");
    });
  });
describe('#getRightDiag', function() {
    it('should return matrix rigt diagonal', function() {
        var matrix=["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"];
      assert.equal(matrixHelper.getRightDiag(matrix), "AGTACT");
    });
  });

  describe('#getTanspose', function() {
    it('should return matrix trasposed', function() {
        var matrix=["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"];
        var trasposed=[ 'ACTACT', 'TATGCC', 'GGAACA', 'CTTACC', 'GGGGTT', 'ACTGAG' ];
        assert.deepEqual(matrixHelper.getTanspose(matrix), trasposed);
    });
  });
});
