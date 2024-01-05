//const container = document.getElementById('container');
//const registerBtn = document.getElementById('register');
//const loginBtn = document.getElementById('login');

//registerBtn.addEventListener('click', () => {
    //container.classList.add("active");
//});

//loginBtn.addEventListener('click', () => {
    //container.classList.remove("active");
//});

function CalcularPromedio(){

    tarifa_aerea = 8
    tarifa_maritima = 29
    minimo_maritimo = 29


    var altura = Number(document.getElementById("n1").value);
    var anchura = Number(document.getElementById("n2").value);
    var largo = Number(document.getElementById("n3").value);
    var peso = Number(document.getElementById("n4").value);
    var precio = Number(document.getElementById("n5").value);
    var v6 = Number(document.getElementById("n6").value);
    var v7 = Number(document.getElementById("n7").value);
    
    
    

    var mar = Math.round((largo * anchura * altura) / 1728 *29)
    document.getElementById("maritimo").innerHTML = mar;

    var env = (Math.round(peso))*8;
    document.getElementById("aereo").innerHTML = env;

    var seg = (Math.round(precio))*5 /100;
    document.getElementById("seguro").innerHTML = seg;
    var tar = (Math.round(precio))*8 /100;
    document.getElementById("tarifa").innerHTML = tar;
    var imp = (Math.round(precio))*12 /100;
    document.getElementById("impuesto").innerHTML = imp;

    var fee = Math.round((precio + seg + tar + imp + mar));
    document.getElementById("total").innerHTML = fee;

    var aer = Math.round((precio + seg + tar + imp + env));
    document.getElementById("total2").innerHTML = aer;

}


