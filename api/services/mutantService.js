var matrixHelper=require('../helpers/matrixHelper');

function checkMutant(secuence){
    let regex = /([ATGC])\1{3,4}/;
    return regex.test(secuence);
}

this.isMutant = function (matrix) {
    let count=0;

    matrixHelper.getAllDiags(matrix).forEach(element => {
        if(checkMutant(element))
            count++;
    });

    matrix.forEach(element => {
        if(checkMutant(element))
            count++
    });
    matrixHelper.getTanspose(matrix).forEach(element => {
        if(checkMutant(element))
            count++;
    });
    return count>1;
  };