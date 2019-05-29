var assert = require('assert');
var mutantService= require('../api/services/mutantService');

describe('MutantService', function() {
    describe('#isMutant', function() {
      it('Checking mutant secuence 1 6X6, should return TRUE', function() {
        var matrix=["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"];
        assert.equal(mutantService.isMutant(matrix),true);
      });
    
      it('Checking mutant secuence 2 8X8, should return TRUE', function() {
          var matrix=["AGAGAGAG","TCACACGA","AACACGAC","TCATGTCT","AACGTATA","TCGTCTCT","AGACACAC","TATTTTTT"];
        assert.equal(mutantService.isMutant(matrix),true);
      });

      it('Checking mutant secuence 3 6X6, should return TRUE', function() {
        var matrix=["ACTACT","TATGCC","GGAACA","CTTACC","GGGGTT","ACTGAG"];
        assert.equal(mutantService.isMutant(matrix),true);
      });

      it('Checking mutant secuence 4 6X6, should return TRUE', function() {
        var matrix=["AGCGCG","ACGCTC","AGCTCG","ACGCGG","TGCGCG","GCGCGG"];
        assert.equal(mutantService.isMutant(matrix),true);
      });

      it('Checking mutant secuence 5 6X6, TWO DIAGONALS, should return TRUE', function() {
        var matrix=["AATGCT","TAGCTG","TAATAT","ATTGGG","AGTGCT","CGTTCG"];
        assert.equal(mutantService.isMutant(matrix),true);
      });

      it('Checking mutant secuence 6 6X6, should return TRUE', function() {
        var matrix=["ATCGAT","ATCGAT","ATCGAT","ATCGAT","ATCGAT","ATCGAT"];
        assert.equal(mutantService.isMutant(matrix),true);
      });

      it('Checking mutant secuence 7 6X6, should return TRUE', function() {
        var matrix=["AAAAAA","TTTTTT","ATCGAT","ATCGAT","ATCGAT","ATCGAT"];
        assert.equal(mutantService.isMutant(matrix),true);
      });

      it('Checking human secuence, should return FALSE', function() {
        var matrix=["GTGCGA","CAGTGC","TTATGT","AGAAGG","CCTCTA","TCACTG"];
        assert.equal(mutantService.isMutant(matrix),false);
        });
    });

  });