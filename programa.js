let listaR=[];
//rioI es donde va a ir toda la informaciòn de un rio.
let rioInf;
//ingreso de la región del rio(ingresoRU),
let ingresoReR,nombreR="";
//ingreso de la profundidad del rio.
let ingresoPR,menu,submenu, cantidadR= Number;
let inicio,inicioSub1,inicioSub2=String
inicio=true
inicioSub1=true
inicioSub2=true
// Esta funcion tiene que extraer el nùmero de cantidad de elementos que tiene una lista, cuando tiene el nùmero lo usara como nùmero para iteracion de un proceso, en el que ira sacando elemento por elemento y lo ira clasificando y el resultado sera agregado en una variable donde luego la sumara a la lista original.
function extraccion(){

};
    
// intentosP=(prompt(`Introduce una letra para que se llene el recuadro ${espacios}.\n ${mensaje}`))
//     newP=palabra.indexOf(intentosP)
//     confirmacion=palabra.includes(intentosP)
//     if(confirmacion==true){
                
//         espacios[newP]=intentosP
//         mensaje="Felicidades, acertastes."

//     }

alert("Gracias por ingresar a nuestra pag de gestion de riesgos, revisa nuestro menú para que selecciones lo que deseas hacer en nuestra pag.");

while(inicio==true){
    menu=parseInt(prompt("1.Ingreso de información.\n2.Información acerca de los rios de Colombia.\n3.Salir."));
    inicioSub1=true;
    switch(menu){
        case 1:
            while(inicioSub1==true){
            submenu=parseInt(prompt("1.Registro de datos.\n2.Actualizar información.\n3.Salir."));
            inicioSub2=true;
            switch(submenu){       
                case 1:
                    while(inicioSub2==true){
                        cantidadR=parseInt(prompt("¿Cuántos Rios desea Ingresar?"))
                        alert("A continuación tendra que llenar toda la información del rio para nosotros poder guardarlo en nuestra base de datos.")
                        for(i=0;i<cantidadR;i++){
                            
                            nombreR=prompt("Ingrese el nombre del rio:");
                            ingresoPR=parseInt(prompt("Ingrese la profundidad del rio en (m)metros."));
                            ingresoReR=prompt("Ingrese la región en la que se encuentra el rio.")
                            rioInf=[{1:nombreR,2:ingresoPR,3:ingresoReR}];
                            listaR[i]=(rioInf);
                            alert("Registro exitoso.");
                            
                        }
                        alert("Registro finalizado");
                        inicioSub2=false;
                    }
                break;


                case 2:
                    // alert(listaR);
                    console.table(listaR)
                    inicioSub1=true;
                    break;
                case 3:
                    inicioSub1=false;
                break;
            }
        
            }
        case 2:
            console.table(listaR)
            inicio=true;
        break;
        case 3:
            inicio=false;
        break;
    }
    
}
