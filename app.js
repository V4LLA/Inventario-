//controlador de lo que ocurre con el usuario y todo el proceso de trabajo
//Clase Inventario
//Clase Producto

let miTienda=new Inventario();
 
let btnAgregar=document.getElementById('btnAdd');
btnAgregar.addEventListener('click',()=>{
    let id, nombre, cantidad, precio;
    id=document.getElementById('txtid').value;
    nombre=document.getElementById('txtnombre').value;
    cantidad=document.getElementById('txtcantidad').value;
    precio=document.getElementById('txtprecio').value;
    let nuevo=new Producto(id,nombre,cantidad,precio);
    miTienda.agregar(nuevo);
    document.getElementById('datos'). innerHTML += nuevo.infoHtml();
})
 
let btnListar=document.getElementById('btnList');
btnListar.addEventListener('click',()=>{
    let res=document.getElementById('datos');
    res.innerHTML+="<h2>Lista</h2>" + miTienda.listar();  
})

let btnBuscar=document.getElementById('btnSearch');
btnBuscar.addEventListener('click',()=>{
    let id=document.getElementById('txtid').value;
    let resultado=miTienda.buscar(id);
    let datos=document.getElementById('datos');
    if (resultado==null){
        datos.innerHTML += `<br>
            <h3>No se encontro</h3>`;  
    }
    else{
        datos.innerHTML += '<h3>Se encontro<h3>';
        datos.innerHTML += resultado.infoHtml();
    }
})

let btnEliminar=document.getElementById('btnDelete');
btnEliminar.addEventListener('click',()=>{
    let id=document.getElementById('txtid').value;
    let resultado=miTienda.eliminar(id);
    let datos=document.getElementById('datos');
    if (resultado==null){
        datos.innerHTML += `<br>
            <h3>No hay</h3>`;  
    }
    else{
        datos.innerHTML += '<h3>Eliminado<h3>';
    }
})