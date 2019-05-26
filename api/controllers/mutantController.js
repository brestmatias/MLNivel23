var mutantService=require('../services/mutantService');
var mongoose = require('mongoose'),
  DNAModel = mongoose.model('DNA');

exports.checkMutant = function(req, res) {
        const dnaReq=req.body.dna;
        const mutant=mutantService.isMutant(dnaReq);
        
        let query = {
            dna:dnaReq
        };
        DNAModel.findOne(query,function (err, doc) {
            if(doc==null){
                var newDNA=new DNAModel({
                    dna:dnaReq,
                    mutant:mutant
                });
                newDNA.save();
            }
        });


        mutant? res.status(200).send() : res.status(403).send();

  };    