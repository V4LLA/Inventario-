class Producto{
    constructor(id,nombre,cantidad,precio){
        this.id=id;
        this.nombre=nombre;
        this.cantidad=cantidad;
        this.precio=precio;
    }
    info(){  
        return this.id + this.nombre + this.cantidad + this.precio;
    }
    infoHtml(){
        return `<div>
                    <h2>ID:${this.id}</h2>
                    <p>Nombre:${this.nombre}</p>
                    <p>Cantidad:${this.cantidad}</p>
                    <p>Precio:${this.precio}</p>
                </div>`;
    }
}