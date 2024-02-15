import axios from "axios";

const consultar = async(id)=>{
    const data = axios.get("http://localhost:8080/API/v1.0/Matricula/estudiantes10/"+id).then(ret => ret.data);
    console.log(data);
    return data;
}

const incertar = async(body)=>{
    const data = axios.post("http://localhost:8080/API/v1.0/Matricula/estudiantes10",body).then(ret => ret.data);
    console.log(data);
}

/*
const consultarTodos = async()=>{
    const data = axios.get("http://localhost:8080/API/v1.0/Matricula/estudiantes10").then(ret => ret.data);
    console.log(data);
}

const actualizar = async(body)=>{
    const data = await axios.put("http://localhost:8080/API/v1.0/Matricula/estudiantes10/", body);
    console.log(data);
}


const borrar = async(body)=>{
    const data = axios.delete("http://localhost:8080/API/v1.0/Matricula/estudiantes10"+id).then(ret => ret.data);
    console.log(data);
}

*/

export const consultarFachada = async(id)=>{
    return await consultar(id);
}

export const insertarFachada = async(body)=>{
    await incertar(body);
}
/*
export const consultarTodosFachada = async(id)=>{
    return await consultarTodos();
}
export const actualizarFachada = async(body)=>{
    return await actualizar(body);
}
export const borrarFachada = async(id)=>{
    return await borrar(id);
}
*/