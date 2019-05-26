
exports.getLeftDiag=function (matrix){
    var diag = [];
    for(var i in matrix){
        var row=matrix[i];
        diag.push(row[i]);
    }
    return diag.join("");
};

exports.getRightDiag=function(matrix){
    var diag = [];
    for(var i=0;i<matrix.length;i++){
        var row=matrix[i];
        diag.push(row[matrix.length-(i+1)]);
    }
    return diag.join("");
};

exports.getTanspose=function(matrix){
    var transpose=[];
    for(var row in matrix){
        var splited=matrix[row].split("");
        for(var c in splited){
            if(transpose[c]==undefined)
            {
                transpose[c]=splited[c];
            }else{
                transpose[c]+=splited[c];
            }
        }

    }
    return transpose;
};