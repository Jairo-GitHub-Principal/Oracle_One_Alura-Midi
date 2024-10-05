# projeto Alura Midi

## trata-se de um tecla onde cada tecla tem um som especifico.
## a interface foi criada com html e css, e a interação foi feita em js

##codigo js

function tocarSom(idAudio) { // vamos receber o seletor por parametro
![imagem teclado midi](https://github.com/Jairo-GitHub-Principal/Oracle_One_Alura-Midi/blob/master/images/Screenshot_1.png?raw=true" alt="imgem do teclado mid" width="300px" height="300px)

    <img src="https://github.com/Jairo-GitHub-Principal/Oracle_One_Alura-Midi/blob/master/images/Screenshot_1.png?raw=true" alt="imgem do teclado mid" width="300px" height="300px">
    
       # let keyw = document.querySelector(idAudio); // funçã seleciona a tag que tem o audio do arquivo keyw que 
        # return keyw.play();                                                   // é o som "clap" e retorna um play no audio
       #}
    #   const listaTeclas = document.querySelectorAll('.tecla');
   
    # let contador = 0;
    # while(contador < listaTeclas.length){
      #   // selecionar em um lista de  classe que esta em uma tecla 
        # const tecla = listaTeclas[contador];
        # const instrumento = tecla.classList[1]; // retorn a clsse de indice 1  
        ## // montar o nome da classe que sera acessada na tag audio, pegaremos um nome de classe da tag button, e concatenaremos 
        ## // com um nome constante, que ao juntarmos teremos um nome especifica de uma classe existente na tag audio, 
        ## // possibilitando assim que nos acessemos a tag que queremos para executar o arquivo de audi que esta nela, e assim
        ## //  teremos os id="" dinamicos
        # const idAudio = `#som_${instrumento}`;
        # console.log(idAudio);
        
        # tecla.addEventListener('click',()=>{
          #  tocarSom(idAudio);
        # });
           
            
       
        # contador++;
        # console.log(contador)
    # }
