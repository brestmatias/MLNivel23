var assert = require('assert');
var matrixHelper = require('../api/helpers/matrixHelper');
var mutantService= require('../api/services/mutantService')

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

describe('MutantService', function() {
    describe('#isMutant', function() {
      it('Checking mutant secuence, should return TRUE', function() {
          var matrix=["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"];
        assert.equal(mutantService.isMutant(matrix),true);
      });
      it('Checking human secuence, should return FALSE', function() {
        var matrix=["GTGCGA","CAGTGC","TTATGT","AGAAGG","CCTCTA","TCACTG"];
      assert.equal(mutantService.isMutant(matrix),false);
        });
    });

  });