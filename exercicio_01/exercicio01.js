function tipoTriangulo()
{
  
  let l1 = parseInt(document.getElementById('a').value);
  let l2 = parseInt(document.getElementById('b').value);
  let l3 = parseInt(document.getElementById('c').value);

  if (l1 == l2 && l3 == l2) {
    alert("Seu triângulo é: equilátero");
  }else if (l1 == l2 || l2 == l3 || l1 == l3) {
    alert("Seu triângulo é: isóceles");
  }else {
    alert("Seu triângulo é: escaleno");
  }

}