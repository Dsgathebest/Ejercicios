const origen = "palma";
let destino, origenU, compra,menu= "";
let viaje= Number;
let inicio1, inicio=true;
let listaF="";
let descuento=Number;

viaje=50
listaF=[]


alert("Gracias por ingresar a nuestra pag de viajes, revisa nuestro menú para que selecciones lo que deseas hacer con nosotros");
menu=parseInt(prompt("1. Averiguar precios con descuento.\n2. Consultar compras realizadas."));
switch(menu){
    case 1:
        while (inicio==true){
        origenU=prompt("Ingrece la ciudad de la que quiere agenciar el viaje:");
            if (origen==origenU){
                if (inicio==true){
                    alert("Ingrese el numero de referencia de la ciudad a la que quiere viajar:");
                    destino=parseInt(prompt("1. Barcelona:\n2. Madrid:\n3. Valencia:"));
                        switch(destino){
                            case 1:
                                descuento=viaje*0.95
                                alert(`El precio del valor del viaje a barcelona es de € ${viaje} euros.\n Y con un descuento del 5% el valor total del viaje le queda en € ${descuento} euros.`);
                                compra=prompt("Digite (y) para yes y enter para no");
                                    if (compra=="y"){
                                            alert("Gracias por su compra.");
                                            listaF[0]=descuento;
                                            break;
                                    }
                                break;
                            case 2:
                                descuento=viaje*0.9;
                                alert(`El precio del valor del viaje a Madrid es de € ${viaje} euros.\n Y con un descuento del 10% el valor total del viaje le queda en € ${descuento} euros.`);
                                compra=prompt("Digite (y) para yes y enter para no");
                                if (compra=="y"){
                                    alert("Gracias por su compra.");
                                    listaF[1]=descuento;
                                    break;
                                }
                                break;
                            case 3:
                                descuento=viaje*0.85;
                                alert(`El precio del valor del viaje a Valencia es de € ${viaje} euros.\n Y con un descuento del 15% el valor total del viaje le queda en € ${descuento} euros.`);
                                compra=prompt("Digite (y) para yes y enter para no");
                                if (compra=="y"){
                                    alert("Gracias por su compra.");
                                    listaF[2]=descuento;
                                    break;
                                }
                                break;
                    }
                    
                }
            }
            inicio=false
        }
        break;
    case 2:
        alert(listaF)
}

