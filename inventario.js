class Inventario{
    constructor(){
        this.datos=[];
    }
    agregar(nuevo){
        this.datos.push(nuevo);
    }
    listar(){
        let res='';
        for(let i=0;i<this.datos.length;i++){
            res+=this.datos[i].infoHtml() + '<br>';
        }
        return res;
    }
    buscar(id){
        for(let i=0;i<this.datos.length;i++){
            if (this.datos[i].id===id)
                return this.datos[i];
        }
        return null;
    }
    eliminar(id){
        for(let i=0;i<this.datos.length;i++){
            if (this.datos[i].id===id)
                return this.datos.splice(i);
        }
        return null;
    }
}