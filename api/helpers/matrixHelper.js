
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

function getDiagFromRightUper(matrix,col,row){
    var diag=[];
    var c=col;
    for(var r=row;r<matrix.length;r++){
        diag.push(matrix[r][c]);
        c++;
    }
    return diag.join("");
}
function getDiagFromLeftUpper(matrix,col,row){
    var diag=[];
    var c=col;
    var r=row;
    while(r<matrix.length && c>=0){
        diag.push(matrix[r][c]);
        c--;
        r++;
    }
    return diag.join("");
}
/**
 * Obtiene todas las diagonales de la matriz que producen secuencia mayor a 4
 * 
 */
exports.getAllDiags=function (matrix){
    var allDiag=[];

    // esquina derecha superior ==>> esquina derecha inferior
    var col=matrix.length;
    var row=0;
    while(col>=0 && row<matrix.length){
        if(matrix.length-col>=4 && matrix.length-row>=4 ){
            allDiag.push(getDiagFromRightUper(matrix,col,row));
        }
        (col>0)?col--:row++;
    }
    //izquierda superior==>> derecha inferior
    col=0;
    row=0;
    while(col<matrix.length || row<matrix.length-1){
        allDiag.push(getDiagFromLeftUpper(matrix,col,row));
        (col<matrix.length)?col++:row++;
    }

    
    return allDiag;
};

exports.getRight2Diagonal =function(m) {
	var s, x, y, d,
	o = [];
	for (s = 0; s < m.length; s++) {
	  d = [];
	  for(y = s, x = 0; y >= 0; y--, x++)
		d.push(m[y][x]);
	  o.push(d);
	}
	for (s = 1; s < m[0].length; s++) {
	  d = [];
	  for(y = m.length - 1, x = s; x < m[0].length; y--, x++)
		d.push(m[y][x]);
	  o.push(d);
	}
	return o.map((array) => {
      return array.join('');
    });
  }