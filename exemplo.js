const str = "Hoje a noite não tem luar eu estou sem ela seu allstar azul combina com meu preto de cano alto"


function quarta (str){
    let element = str.split(" ");
    let a = [];
    for(let i = 0; i < element.length; i+=4){
        a.push(element[i]);
    }
    return a;
}

quarta(str)


function menorPalavra (str) {
    let arr = str.split(" ")
    let newStr = str
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length < newStr.length) {
            newStr = arr[i]
        }
    }

    return newStr.length
}

menorPalavra(str)