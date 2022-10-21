let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let extensiones = ['.es','.com', '.net', '.org'];

let lenPronoun = pronoun.length;
let lenAdj = adj.length;
let lenNoun = noun.length;

console.log("-----------  For Tradicional  ---------------------");    
for(x= 0; x<lenPronoun; x++){
    for (y=0; y<lenAdj; y++){
        for(z=0; z<lenNoun; z++){
            console.log(pronoun[x]+adj[y]+noun[z]+".com");
        }
    }
}

console.log("-----------  ForEach y extensiones  ----------------");    
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

console.log("-----------  For Tradicional  ---------------------");    


