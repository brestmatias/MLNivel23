var matrixHelper=require('../helpers/matrixHelper');

function checkMutant(secuence){
    let regex = /([ATGC])\1{3,4}/;
    return regex.test(secuence);
}

this.isMutant = function (matrix) {
    let count=0;

    if(checkMutant(matrixHelper.getLeftDiag(matrix)))
        count++;

    if(checkMutant(matrixHelper.getRightDiag(matrix)))
        count++;

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