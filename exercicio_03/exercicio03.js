function Arredondamento() {

    let val1 = parseFloat(document.getElementById("val1").value);
    let val2 = val1
    let auxmin = 0;
    let auxmax = 0;
    let minval1;
    let maxval2;

    if (val1 < 38) {     
        alert("Aluno reprovado");
    } else if (val1 % 5 == 0) {
        alert("Aprovado, sua nota é: " + val1);
    } else if (val1 % 5 != 0) {

        while (val1 % 5 != 0) {
            auxmin = auxmin + 1;
            val1 = val1 - 1;
            minval1 = val1;
        }

        while (val2 % 5 != 0) {
            auxmax = auxmax + 1;
            val2 = val2 + 1;
            maxval2 = val2;
        }

        if (auxmin < 3) {
            alert("Aprovado, sua nota é: " + minval1);
        } else {
            alert("Aprovado, sua nota é: " + maxval2);
        }
    }
}