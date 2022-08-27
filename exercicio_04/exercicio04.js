function Contagem() {

    let endPoint = parseInt(document.getElementById("val").value);
    let sequencia = [];

    for (let i = 1; i <= endPoint; i ++) {
        if ((i % 9 == 0) && (i % 5 == 0)){
            sequencia.push("LuidyMoura");
        }else if (i % 5 == 0){
            sequencia.push("Luidy");
        }else if (i % 9 == 0){
            sequencia.push("Moura");
        }else{
            sequencia.push(i);
        }
    }
    alert(sequencia);
}