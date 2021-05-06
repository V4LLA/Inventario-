class Inventario{
    constructor(){
        this.inicio= null; 
    }
    agregar(nuevo){
        if(this.inicio=== null)
            this.inicio= nuevo; 
        else
            this.agregate(nuevo,this.inicio)
        }
        agregate(nuevo,ultimo){
          if(ultimo.siguiente== null)
          ultimo.siguiente= nuevo;
          else
          this.agregate(nuevo,ultimo.siguiente)
        }
    listar(){
        let t= this.inicio;
        let res='';
        while (t!= null){
            res += t.info() + " ::: " 
            t= t.siguiente;
        }
        return res;
    }

    buscar(id){
            let t=this.inicio;
            while(t!=null){
              if (id==t.id)
                return t;
              else
                t=t.siguiente;
            }
            return null;
          }
        
    eliminar(id){
           //destructores
      if (this.inicio!=null){
        if (this.inicio.id==id)
          this.inicio=this.inicio.siguiente;
        else{
          let t=this.inicio;
          while( t.siguiente!=null){
            if (t.siguiente.id==id){
              t.siguiente=t.siguiente.siguiente;
              return true;
            }
            else
              t=t.siguiente;
          }
          return false;
        }
    }
}
}
