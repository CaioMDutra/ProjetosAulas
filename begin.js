const lista = [3,1,5,2,77,9,32,4];

function comparaNumeros(a,b){
    if(a==b) return 0; if (a<0) return -1; if(a>0) return 1;

}

lista.sort(comparaNumeros);

console.log(lista)