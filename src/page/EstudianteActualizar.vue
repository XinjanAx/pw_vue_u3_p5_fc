<template>
  <div class="contenedor">
    <form class="form" action="https://miapli.com/procesarEstudiante" method="post">
        <h2>Actualizar Estudiante</h2>
        <input class="id_update" type="text" v-model="id" placeholder="ID para actualizar">
        
        <p type="Nombre:"><input v-model="estudiante.nombre" type="text"></p>
        <p type="Apellido"><input v-model="estudiante.apellido" type="text"></p>
        <p type="CI:"><input v-model="estudiante.cedula" type="text"></p>
        <p type="Genero:"><input v-model="estudiante.genero" type="text"></p>
        <p type="Fecha:"><input v-model="estudiante.fechaNacimiento" type="datetime-local"></p>
        <p type="Tipo Sangre:"><input v-model="estudiante.sangle" type="text"></p>
        <p type="Matricula:"><input v-model="estudiante.matricula" type="text"></p>
        <p type="Semestre:"><input v-model="estudiante.semestre" type="number"></p>
        <p type="Gratuidad:"><input v-model="estudiante.gratuidad" type="checkbox"></p>
        
        <p v-if="show">Se Actualizo exitosamente</p>
    </form>
    <button @click="actualizarEstudiante()" class="btn">Actualizar</button>
  </div>

</template>

<script>
import {actualizarFachada} from "../helpers/clienteEstudiante.js"


export default {
    data(){
        return{
            id:null,
            estudiante:{
                nombre: null,
                apellido: null,
                cedula: null,
                genero: null,
                fechaNacimiento: null,
                sangre: null,
                matricula: null,
                semestre: null,
                gratuidad: false
            }
        }
    },
    methods:{
       async actualizarEstudiante(){
            await actualizarFachada(this.id,this.estudiante);
        }
    }

}
</script>

<style>
.contenedor{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
}
.form{
    width: 340px;
    height: auto;
    background-color: #e6e6e6;
    border-radius: 10px;
    padding: 20px 30px;
    font-family: 'Times New Roman', Times, serif;
    box-shadow: 20px 20px 20px -10px;
}
h2{
    margin: 10px 0;
    padding-bottom: 20px;
    width: 100%;
    color: #585870;
    border-bottom: 3px solid #78788c;
}
p:before{
    content: attr(type);
    display: block;
    margin: 5px 2px;
    font-family: 'Courier New', Courier, monospace;
    color: #5a5a5a; 
}
input{
    width: 100%;
    border: 0;
    border-bottom: 2px solid #bebed2;
    background: none;
}
input:focus{
    outline: none;
    border-bottom: 2px solid #78788c;
}
.btn{
    font-size: 20px;
    border-radius: 7px;
    border: groove;
    margin: 10px 0;
}
.btn:hover{
    background-color: rgb(188, 237, 255);
    
}
.id_update{
    background-color: #ffffff;
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 10px;
}
</style>