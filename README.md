# MLNivel23
Repo para código Nivel2 y Nivel3

1 - Test - Codecoverage

    Framework utilizado mocha + istambul
    las pruebas unitarias corren con:
        npm test
    si se desea prueba + code coverage
       npm run test-with-coverage
    
    o instalar mocha toolbar en vscode
    
2 - Instrucciones para ejecutar API:
    La API se encuentra hosteada en heroku, integrada directamente con el repositorio actual.
    Cualquier cambio sobre el master del repo desata la compilación y despliegue del la misma.

    URL: https://app-mutantchecker.herokuapp.com/

    a-Servicio /mutant: 
        permite detectar si un humano es mutante enviando en el cuerpo del HTTP POST
        un JSON con el formato:
            {"dna":["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]}

        URL: https://app-mutantchecker.herokuapp.com/mutant [POST]
    
    b-Servicio /stats:
        devuelve un JSON indicando cantidad de adns humanos y mutantes, además de un ratio mutante/humanos
        
        URL: https://app-mutantchecker.herokuapp.com/stats  [GET]
        JSON Response:
        {
           "count_mutant_dna": 2,
            "count_human_dna": 2,
            "ratio": 1
        } 

    
--LOCAL:
    1- Descargar Repo
    2-npm start
    http://localhost:3000

    

--TEST POSTMAN:
    a- Servicio /mutant:
        URL: https://app-mutantchecker.herokuapp.com/mutant/
        URL: http://localhost:3000/mutant
        [POST]
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

--TDD coverage
    framework utilizado mocha - istambul
    para Visual studio code instalar mocha toolbar
    si no correr npm test para ejecutar las pruebas

Frameworks modules libraries
    mocha   npm i mocha --save-dev
    mongoose
    nodemon
    express
    istambul npm i nyc --save-dev