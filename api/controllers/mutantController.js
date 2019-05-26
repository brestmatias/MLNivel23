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

exports.stats=function(req,res){
    let mutants=0;
    let humans=0;
    let ratio=0;

    DNAModel.aggregate([{$group:{ _id: "$mutant", count: { $sum: 1 } }}]).exec(
        function (err, result) {
            result.forEach(element => {
                if(element._id)
                    mutants=element.count;
                else
                    humans=element.count;
            });
            if(humans>0)
                ratio=mutants/humans;
            
            res.status(200).jsonp({
                count_mutant_dna:mutants,
                count_human_dna:humans,
                ratio:ratio
            });
        }
    );
    
}