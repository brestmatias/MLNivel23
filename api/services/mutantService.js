var matrixHelper=require('../helpers/matrixHelper');

function checkMutant(secuence){
    let regex = /([ATGC])\1{3,4}/;
    return regex.test(secuence);
}

this.isMutant = function (matrix) {
    let count=0;
    return((count+=matrix.map((val)=>checkMutant(val)).filter(x => x).length)>1)? true:
    ((count+=matrixHelper.getAllDiags(matrix).map((val)=>checkMutant(val)).filter(x => x).length)>1)?true:
    ((count+=matrixHelper.getTranspose(matrix).map((val)=>checkMutant(val)).filter(x => x).length)>1)?true:false;
  };