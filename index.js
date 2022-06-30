// se inicializan variables
let total = 0;
let productoFromUser;
let saludoInicial = alert('Bienvenido! Gracias por visitar Gemini :)'); 
prompt(calcularTotal());
let saludoFinal = alert('Gracias por comprar en Gemini');


// funcion para seleccionar un producto
  function seleccionarProducto() {
    const productos = [];
    productos.push({nombre: 'calza', precio: 3000});
    productos.push({nombre: 'buzo', precio: 5500});
    productos.push({nombre: 'top', precio: 2000});
    productos.forEach(x=> alert(x.nombre + '' + x.precio))
    const productoFromUser = prompt('Ingrese el nombre del producto a adquirir: ').toLowerCase();
    return(productoFromUser);
  }
  
// funcion para calcular el total de los productos seleccionados
function calcularTotal(){
    let opcionSeleccionada = seleccionarProducto();

    const PRECIO0 = 3500;
    const PRECIO1 = 2000;
    const PRECIO2 = 5500;

        if(!isNaN(opcionSeleccionada !== "")){
            let cantidadProducto = prompt('Ingrese la cantidad de producto que desea adquirir: ')
            alert('Opcion seleccionada: ' + opcionSeleccionada + ' Cantidad: ' + cantidadProducto);
            switch(opcionSeleccionada){
                case 'calza':
                    total = PRECIO0 * cantidadProducto;
                    console.log(total);
                    break;
                case 'cuzo':
                    total = PRECIO1 * cantidadProducto;
                    console.log(total);
                    break;
                case 'top':
                    total = PRECIO2 * cantidadProducto;
                    console.log(total);
                    break;
                default:
                    alert('Ingrese una opcion válida');
                    break;    
            }
        }else{
            alert('Seleccione una opción válida')
        }
        alert('Total: ' + total)
    }
