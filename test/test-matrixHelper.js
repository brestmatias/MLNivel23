var assert = require('assert');
var matrixHelper = require('../api/helpers/matrixHelper');

describe('MatrixHelper', function() {

  describe('#getAllDiags', function() {
    it('should return all matrix diagonals 6x6', function() {
        var matrix=["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"];
        var response=[ 'GTGG','TGTGA','AAAATG','CTACT','TGCC','CGTA','GTAGC','AGTACT','CGACC','TGCA' ]
      assert.deepEqual(matrixHelper.getAllDiags(matrix), response);
    });
    it('should return all matrix diagonals 8x8', function() {
      var matrix=["AGAGAGAG","TCACACGA","AACACGAC","TCATGTCT","AACGTATA","TCGTCTCT","AGACACAC","TATTTTTT"];
      var response=['ACAT','GAGCA','ACCTTT','GAAGACC','ACCTTTAT','TAAGCCT','ACCTAT','TAGCT','ACAT',
      'GAAT','ACCCA','GAAAAT','ACCTCCA','GGGGGGGT','AATTTAA','CCACCT','TTTAT','ACCT' ]
    assert.deepEqual(matrixHelper.getAllDiags(matrix), response);
  });
  });

  describe('#getTanspose', function() {
    it('Should return matrix trasposed', function() {
        var matrix=["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"];
        var trasposed=[ 'ACTACT', 'TATGCC', 'GGAACA', 'CTTACC', 'GGGGTT', 'ACTGAG' ];
        assert.deepEqual(matrixHelper.getTranspose(matrix), trasposed);
    });
    it('Transpose X2 should return original matrix', function() {
      var matrix=["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"];
      assert.deepEqual(matrixHelper.getTranspose(matrixHelper.getTranspose(matrix)), matrix);
    });
  });
});
