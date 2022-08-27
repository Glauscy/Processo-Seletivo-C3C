function Bhaskara () {

    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);
    let delta = (b*b) -4*a*c;
    
    
    if (delta == 0) {
        x1 = (-b + Math.sqrt(delta) )/(2*a);
        x2 = (-b - Math.sqrt(delta) )/(2*a);
        alert ("S = { " + x1 + ", " + x2 + " }");
    }else if (delta < 0) {
        alert ("Delta negativo");
    }else {
        x1 = (-b + Math.sqrt(delta) )/(2*a);
        x2 = (-b - Math.sqrt(delta) )/(2*a);
        alert ("S = { " + x1 + ", " + x2 + " }");
    }
}




