/**
 * Obtiene la traspuesta de la matriz pasada por parámetro
 */
exports.getTranspose=function(matrix){
    return matrix.map((col, c) => matrix.map((row, r) => matrix[r][c]).join(""));
};

/**
 * Obtine diagonal desde la fila y columna indicada 
 * en la direccion= \
 * @param {*} matrix 
 * @param {*} col 
 * @param {*} row 
 */
function getDiagFromRightUper(matrix,col,row){
    var diag=[];
    var c=col;
    for(var r=row;r<matrix.length;r++){
        diag.push(matrix[r][c]);
        c++;
    }
    return diag.join("");
}
/**
 * Obtine diagonal desde la fila y columna indicada 
 * en la direccion= /
 * @param {*} matrix 
 * @param {*} col 
 * @param {*} row 
 */
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
 * Obtiene todas las diagonales de la matriz 
 * que producen secuencia mayor a 4
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
        var diag=getDiagFromLeftUpper(matrix,col,row)
        if(diag.length>=4)
            allDiag.push(diag);      
        (col<matrix.length)?col++:row++;
    }
    return allDiag;
};