# MLNivel23
Repo para código Nivel2 y Nivel3
Autor: Matias Brest

1 - Clonado y ejecución local

    a-  Necesario nodejs, git y tener acceso (Gateway/proxy habilitado) a mlab.com puerto 61626
    b-  Clonar o descargar repositorio  https://github.com/brestmatias/MLNivel23.git
    c-  Entrar al directorio clonado y ejecutar:
            npm install
            npm test
            npm start
    d-  Url local de acceso:
            http://localhost:3000
        
2 - Test - Codecoverage

    Framework utilizado mocha + istambul
    a- Las pruebas unitarias corren con:
        npm test
    b- UnitTest + CodeCoverage
       npm run test-with-coverage
    
3 - Instrucciones para ejecutar API

    La API se encuentra hosteada en heroku, integrada directamente con el repositorio actual.
    Cualquier cambio sobre el master del repo desata la compilación y despliegue del la misma.

    URL: https://app-mutantchecker.herokuapp.com/

    a-  Servicio /mutant
    
        Permite detectar si un humano es mutante enviando en el cuerpo del HTTP POST
        un JSON con el formato:
            {"dna":["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]}

        URL: https://app-mutantchecker.herokuapp.com/mutant [POST]

        *En el caso de no recibir array de dna en el body el servicio responde con HTTO 500 
        (No DNA secuence detected!').
    
    b-  Servicio /stats
    
        Devuelve un JSON indicando cantidad de adns humanos y mutantes consultados,
        además de un ratio mutante/humanos
        
        URL: https://app-mutantchecker.herokuapp.com/stats  [GET]
        JSON Response:
        {
           "count_mutant_dna": 2,
            "count_human_dna": 2,
            "ratio": 1
        } 

    

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


BDD 

    mongodb://magneto:magneto1@ds261626.mlab.com:61626/mutantchecher

TDD coverage

    framework utilizado mocha - istambul
    para Visual studio code instalar mocha toolbar
    si no correr npm test para ejecutar las pruebas
    
    Codecoverage output
    
    -------------------|----------|----------|----------|----------|-------------------|
    File               |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
    -------------------|----------|----------|----------|----------|-------------------|
    All files          |      100 |    95.45 |      100 |      100 |                   |
     helpers           |      100 |      100 |      100 |      100 |                   |
      matrixHelper.js  |      100 |      100 |      100 |      100 |                   |
     services          |      100 |    83.33 |      100 |      100 |                   |
      mutantService.js |      100 |    83.33 |      100 |      100 |                10 |
    -------------------|----------|----------|----------|----------|-------------------

Frameworks modules libraries

    mocha   npm i mocha --save-dev
    mongoose
    nodemon
    express
    istambul npm i nyc --save-dev
