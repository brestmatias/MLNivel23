# MLNivel23
Repo para código Nivel2 y Nivel3

--Web API utilizando:
    -Node
    -Express
    -Nodemon
    npm install mongoose --save

--HOSTEADO:
    https://app-mutantchecker.herokuapp.com/

--LOCAL:
    1- Descargar Repo
    2-npm start
    http://localhost:3000

    

--TEST POSTMAN:
    URL: https://app-mutantchecker.herokuapp.com/mutant/
    URL: http://localhost:3000/mutant
    POST
        Body: RAW JSON
        {"dna":["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]}

        Ejemplos:
        --mutante-- Rta 200
        {"dna":["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]};
        --mutante-- Rta 200
        {"dna":["TTGCGA","CAGTGC","TTATGT","AGAAGG","CCCCAA","TCACTG"]};
        --mutante-- Rta 200
        {"dna":["TTGCGA","CGGTGC","TTATGT","AGAAGG","CCCCAA","TCACTG"]};
        --mutante-- Rta 200
        {"dna":["ACTACT","TATGCC","GGAACA","CTTACC","GGGGTT","ACTGAG"]};
        --humano-- Rta 403
        {"dna":["TTGCGA","CTGTGC","TTATGT","AGAAGG","TCCCAA","TCACTG"]};
        --humano-- Rta 403
        {"dna":["ATGCGA","CAGTGC","TTATTT","AGACGG","GCGTCA","TCACTG"]};


---BDD 
    mongodb://magneto:magneto1@ds261626.mlab.com:61626/mutantchecher
