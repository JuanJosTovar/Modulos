function empleado(servicio) {
    let emp = "";
    if(servicio == "peluqueria"){
        emp= prompt("Ingrese que persona quiere que lo atienda Ana o Claudio");
    }else if(servicio == "baño"){
        emp=prompt("Ingrese que persona quiere que lo atienda Milena, Rosa o Maria");
    }else if(servicio == "veterinaria"){
        emp= prompt("Ingrese la paerosna que quiere qu lo atienda Raul o Laura");
    }
    return emp
}

export{empleado}