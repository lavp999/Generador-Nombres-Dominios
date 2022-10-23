
window.onload = function() {
    /*
    const  aleatorio = (max) => { 
      return Math.round(Math.random() * (max-1));
    };
    
    const componer = (parte) => {
      const arr = {"who" :['the dog','my granma','his turtle','my bird'],
                   "what":['eat','pissed','crushed','broked'],
                   "when":['before the class','right in time','when I finished','during my lunch','while I was praying']
                  };
  
      return arr[parte][aleatorio(arr[parte].length)];
    };
  
    const valor = window.document.querySelector("#excuse");
    let texto = '<h2>' + componer('who')  +' '+ 
                         componer('what') +' '+ 
                         componer('when') +' '+ 
                '</h2>';
  */

    const valor = window.document.querySelector("#generador");
    let cadena = (arr) => {
        let miHTML = "<h1>";
        arr.forEach(elemento => {
            miHTML = miHTML + elemento + "<br>";
        });
        return miHTML+"</h1>";
    };

    let texto = cadena(dominios2());
    
    console.log(cadena(dominios1()));
    console.log("-----------------------   ON LOAD  --------------------------------------");
    console.log(texto);

    valor.innerHTML = texto;
    //valor.textContent = cadena(dominios1());
  };