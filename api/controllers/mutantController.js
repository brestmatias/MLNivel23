var mutantService=require('../services/mutantService');
exports.checkMutant = function(req, res) {
        console.log("Checking DNA:" + req.body.dna);
        if(mutantService.isMutant(req.body.dna)){
            res.status(200).send();
        }else{
            res.status(403).send();
            }
  
  };    