var assert = require('assert');
var mutantService= require('../api/services/mutantService');

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