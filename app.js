let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let extensiones = ['.es','.com', '.net', '.org'];



console.log("-----------  For Tradicional  ---------------------");    
function dominios1(){
    let dominios = [];
    let lenPronoun = pronoun.length;
    let lenAdj = adj.length;
    let lenNoun = noun.length;
    let lenExt = extensiones.length;

    for(x= 0; x<lenPronoun; x++){
        for (y=0; y<lenAdj; y++){
            for(z=0; z<lenNoun; z++){
                dominios.push(`http://${pronoun[x]}${adj[y]}${noun[z]}.com`);
            }
        }
    }

    return dominios;
}
console.log("-----------  ForEach y extensiones  ----------------");

function dominios2(){
    let dominios = [];
    pronoun.forEach(function(item1){
        adj.forEach(function(item2){
            noun.forEach(function(item3){
                extensiones.forEach(function(item4){
                    dominios.push("http://"+item1+item2+item3+item4);
                });
            });
        });
    });

    return dominios;
}
console.log("----------- Dese APP  ---------------------");    
let dominios = [];
pronoun.forEach(function(item1){
    adj.forEach(function(item2){
        noun.forEach(function(item3){
            dominios.push(item1+item2+item3);
        });
    });
});

dominios.forEach(element => {
    extensiones.forEach(item => {
        console.log(`${element}${item}`);    
    });
});
console.log("-----------  FIN  ---------------------");    


