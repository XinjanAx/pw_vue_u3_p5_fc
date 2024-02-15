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

export const consultarFachada = async(id)=>{
    return await consultar(id);
}

export const incertarFachada = async(body)=>{
    await incertar(body);
}
