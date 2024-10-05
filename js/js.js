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


function tocarSom(seletorAudio) { // vamos receber o seletor por parametro
    
        const elemento = document.querySelector(seletorAudio); // funçã seleciona a tag que tem o audio do arquivo keyw que 
       if(elemento != null   && elemento.localName ==='audio'){
           
                elemento.play();           
        }else{
            alert('elemento de audio não encontrado');
        }
       
    }

    const listaTeclas = document.querySelectorAll('.tecla');
   
    let contador = 0;
    while(contador < listaTeclas.length){

        // selecionar em um lista de  classe que esta em uma tecla 
        const tecla = listaTeclas[contador];
        const instrumento = tecla.classList[1]; // retorn a clsse de indice 1 obs: aqui o valor definido pela let contador, é substituido por 1
        // montar o nome da classe que sera acessada na tag audio, pegaremos um nome de classe da tag button, e concatenaremos 
        // com um nome constante, que ao juntarmos teremos um nome especifica de uma classe existente na tag audio, 
        // possibilitando assim que nos acessemos a tag que queremos para executar o arquivo de audi que esta nela, e assim
        //  teremos os id="" dinamicos

        const idAudio = `#som_${instrumento}`;
        console.log(idAudio);

        
        tecla.addEventListener('click',()=>{ //ouvinte identifica  um evento de click em uma tecla, sera chamado a função tocarSom();
            tocarSom(idAudio);
           
        });



        // ouvinte identifica um evente de tecla pressionada e adiciona a classe "ativa" para o elemento html que esta selecionado e armazenado na variavel tecla 
        tecla.addEventListener('keydown',function(event){ // o parametro passado para a função ela armazena as propriedades do evento que esta sendo ouvido nessa função 
            console.log(event.code); // o event.code traz o atributo code, que por debaixo dos panos esta contido na evento de teclado keydown
            if(event.code == 'Space'||event.code =='Enter'){
            tecla.classList.add('ativa');
            }
        });
        // ouvinte identifica um evente de tecla desapertada e remove a classe "ativa" para o elemento html que esta selecionado e armazenado na variavel tecla 
        tecla.addEventListener('keyup',function(event){
            console.log(event);
            if(event.code == 'Space'||event.code =='Enter'){
            tecla.classList.remove('ativa');
            }
        });

       

        //ou assim
        /**
         *  tecla.addEventListener('click',function(){
            tocarSom(idAudio);
        });
         */
           
            
        // efeito active nas teclas 

        

        contador++;
        console.log(contador)
    }


    // teste de evento de click do mause
    document.querySelector('.tecla').addEventListener('click', function(event) {
        console.log(event); // Aqui 'event' contém todas as informações do evento de clique
      });
    