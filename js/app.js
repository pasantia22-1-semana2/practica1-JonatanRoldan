const ingresos = {
    new Ingreso('salario', 200),
    new Ingreso('venta coche',1500)
};

const egresos = {
    new Egreso('renta',500),
    new Egreso('ropa', 200)
};

let cargarApp= ()=>{
    cargarhead();
    cargarIngresos();
    cargarEgresoso();
}

let totalIngresos = ()=>{
    let totalIngreso = 0;
    for(let ingreso of ingresos){
        totalIngreso += ingreso.valor;
    }
    return totalIngreso;
}

let totalEgresos = ()=>{
    let totalEgresos = 0;
    for(let egreso of egresos){
        totalEgresos += egreso.valor;
    }
    return totalEgresos;
}

cargarhead = () => (valor)=>{
    let preupuesto = totalIngresos()-totalEgresos();
    let porcentaje = totalEgresos()/totalIngresos();
    document.getElementById('presupuesto').innerHTML=preupuesto;
    document.getElementById('porcentaje').innerHTML=porcentaje;
    document.getElementById('ingresos').innerHTML=totalIngresos();
    document.getElementById('Egresos').innerHTML=totalEgresos();
}
const crearIngresoHTML = (ingreso)=>{
    
}