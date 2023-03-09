let listaR=[];
//rioI es donde va a ir toda la informaciòn de un rio.
let rioI=[];
//ingreso de la región del rio(ingresoRU),
let ingresoReR,nombreR="";
//ingreso de la profundidad del rio.
let ingresoPR,menu,submenu, cantidadR= Number;
let inicio,inicioSub1,inicioSub2=String
inicio=true
inicioSub1=true
while(inicio==true){
    alert("Gracias por ingresar a nuestra pag de gestion de riesgos, revisa nuestro menú para que selecciones lo que deseas hacer en nuestra pag.");
    menu=parseInt(prompt("1.Registro de datos.\n2.Información acerca de los rios de Colombia.\n3.Salir."));
    switch(menu){
        case 1:
            while(inicioSub1==true){
            menu=parseInt(prompt("1.Registro de datos.\n2.Actualizar información.\n3.Salir."));
            switch(submenu){        
                case 1:
                    while(inicioSub==true){
                        cantidadR=parseInt(prompt("¿Cuántos Rios desea Ingresar?"))
                        alert("A continuación tendra que llenar toda la información del rio para nosotros poder guardarlo en nuestra base de datos.")
                        for(i=1;i<=cantidadR;i++){
                            
                            nombreR=prompt("Ingrese el nombre del rio:");
                            ingresoPR=prompt("Ingrese la profundidad del rio en (m)metros.");
                            ingresoReR=prompt("Ingrese la región en la que se encuentra el rio.")
                            
                            alert("Registro exitoso.");
                        }
                        alert("Registro finalizado")
                        inicioSub=true;
                    }
                break;
            
                case 2:
                    
                break;
                case 3:
                break;
            }
        case 2:
            inicio=true;
        break;
        case 3:
            inicio=false;
        break;
    }

}