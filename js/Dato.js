class Dato{
    constructor(descripcion,valor){
        this._descripcion = descripcion;
        this._valor=valor;
    }
    get descripcion(){
        return this._descripcion;
    }
    set descripcion(descrip){
        this._descripcion=descrip;
    }
    get valor(){
        return this._valor;
    }
    set valor(valor){
        this._valor=valor;
    }
}