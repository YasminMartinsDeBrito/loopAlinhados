const mostrar = document.querySelector('#mostrar')
//buscar 3-em-linha-horizontal.. 
//verificar cada celula dentro do loop 
//aninhado com duas celulas a direita
 let board = [
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,2,0],
    [0,0,0,0,1,1,1],
    [0,0,2,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,2,2,2]
    ]
    
    const edgeX = board[0].length - 2;
    const edgeY = board.length - 2;

    //BUSCA VERTICAL
    //iterando sobre linha do array
    for(let y = 0; y < board.length; y++){

        //iterando sobre cellulas da linhas
        for(let x = 0; x < edgeX; x++){
            let cell = board[y][x];

            //verificando se as cellulas foram preenchidas
            if(cell !== 0){

                //verificando as 2 proximas celulas
                if(cell === board[y][x+1] && cell === board[y][x+2]){
                    console.log("3 sequencias encontradas em " + (x+1) + ":" + (y+1));
                }
            }
        }
    }

    //BUSCA DIAGONAL (DIREITA ABAIXO)
    //itere cada linha
    for(let y = 0; y < edgeY; y++){

        //itere cada celula na linha
        for(let x = 0; x < edgeX; x++){
            cell = board[y][x];

            //checar apenas se as celulas estiverem preenchidas
            if(cell !== 0){

                //checar as proximas duas celulas para o mesmo valor
                if(cell === board[y+1][x+1] && cell === board[y+2][x+2]){
                    console.log('3 em sequencia abaixo-direita encontrados em '+(x+1)+':'+(x+1));

                }
            }
        }
    }

    //BUSCA DIAGONAL(ESQUERDA ABAIXO)
    //itere cada linha
    for(let y = 2; y < board.length;y++){

        //itere cada celula em cada linha
        for(let x = 0; x < edgeX; x++){

            //checar somente se a celula está preenchida
            if(cell !== 0){

                //checar as proximas celulas para o mesmo valor
                if(cell == board[y-1][x+1] && cell === board[y-2][x+2]){
                    console.log('3 em sequencia abaixo esquerda encontrada em '+(x+1)+':'+(y+1));
                }
            }
        }
    }
