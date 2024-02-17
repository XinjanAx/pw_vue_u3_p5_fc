import axios from "axios";

const consultar = async(id)=>{
    const data = axios.get("http://localhost:8081/API/v1.0/Matricula/estudiantes10/"+id).then(ret => ret.data);
    console.log(id);
    console.log(data.nombre);
    return data;
}

const incertar = async(body)=>{
    axios.post("http://localhost:8081/API/v1.0/Matricula/estudiantes10",body).then(ret => ret.data);
}

const actualizar = async(id,body)=>{
    axios.put("http://localhost:8081/API/v1.0/Matricula/estudiantes10/"+id, body).then(ret => ret.data);

}

const borrar = async(id)=>{
    axios.delete("http://localhost:8081/API/v1.0/Matricula/estudiantes10/"+id).then(ret => ret.data);

}

/*
const consultarTodos = async()=>{
    const data = axios.get("http://localhost:8080/API/v1.0/Matricula/estudiantes10").then(ret => ret.data);
    console.log(data);
}



*/

export const consultarFachada = async(id)=>{
    return await consultar(id);
}

export const insertarFachada = async(body)=>{
    await incertar(body);
}
export const actualizarFachada = async(id,body)=>{
    return await actualizar(id,body);
}
export const borrarFachada = async(id)=>{
    return await borrar(id);
}
/*
export const consultarTodosFachada = async(id)=>{
    return await consultarTodos();
}


*/