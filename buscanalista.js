const son = ["Caio", "Cassio", "Carina", "Carin"];

const yearOld = [31,30,28,25];

let list = [son, yearOld]

const showData = (names) => {
    if (son[0].includes(names)){
        let indice = list[0].indexOf
        (names)

        return list[0][indice] + " " + list[1][indice]
    }else{
        return "Não encontrado"
    }
}

console.log(showData("Luana"))