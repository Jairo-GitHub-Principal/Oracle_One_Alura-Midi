// function ton(){
//     let keyq = document.querySelector('#som_tecla_pom');
//     return keyq.play();
// }
// document.querySelector('.tecla_pom').onclick = ton;



// function clp(){
//     let keyw = document.querySelector('#som_tecla_clap'); // funçã seleciona a tag que tem o audio do arquivo keyw que 
//                                                           // é o som "clap" e retorna um play no audio
//     return keyw.play();
// }

// const tecla_clap = document.querySelector('.tecla_clap'); // seleciona a tecla_clap e add na const clap

// tecla_clap.addEventListener('click',clp);// quando hover alguma ação na tecla_clap, o ouvinte addEventListener 
// implementa o evento onClick na tecla_clap e chama a função clp


function tocarSom(idAudio) { // vamos receber o seletor por parametro
    
        let keyw = document.querySelector(idAudio); // funçã seleciona a tag que tem o audio do arquivo keyw que 
        return keyw.play();                                                   // é o som "clap" e retorna um play no audio
       
    }

    const listaTeclas = document.querySelectorAll('.tecla');
   
    let contador = 0;
    while(contador < listaTeclas.length){

        // selecionar em um lista de  classe que esta em uma tecla 
        const tecla = listaTeclas[contador];
        const instrumento = tecla.classList[1]; // retorn a clsse de indice 1  
        // montar o nome da classe que sera acessada na tag audio, pegaremos um nome de classe da tag button, e concatenaremos 
        // com um nome constante, que ao juntarmos teremos um nome especifica de uma classe existente na tag audio, 
        // possibilitando assim que nos acessemos a tag que queremos para executar o arquivo de audi que esta nela, e assim
        //  teremos os id="" dinamicos

        const idAudio = `#som_${instrumento}`;
        console.log(idAudio);

        
        tecla.addEventListener('click',()=>{
            tocarSom(idAudio);
        });
           
            
       

        contador++;
        console.log(contador)
    }