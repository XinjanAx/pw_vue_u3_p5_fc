<template>
  <h1>Componente estudiante</h1>
  <input v-model="id" type="text">
  <button @click="consultarEstudiante()">Consultar</button>
  <label>{{nombre}}</label>
  <button @click="incertarEstudiante()">Incertar</button>
  <input v-model="incertar" type="text">
</template>

<script>
import {consultarFachada,incertarFachada} from "../helpers/clienteEstudiante.js"
export default {
    data(){
        return{
            id:null,
            nombre:null,
            incertar:null
        }
    },
    methods:{
        async consultarEstudiante(){
            const data = await consultarFachada(this.id);
            console.log('componente:');
            console.log(data);
            this.nombre = data.nombre;
            console.log(this.nombre);
        },
        async incertarEstudiante(){
            const estudiante ={
                nombre: "alex",
                apellido: this.incertar,
                cedula: "65858554+",
                genero: "M",
                fechaNacimiento: "2014-01-17T00:00:00",
                sangre: "b+",
                matricula: "pa-vig94614",
                semestre: 7,
                gratuidad: false
            }

           await incertarFachada(estudiante);
        }
    }
    
}
</script>

<style>

</style>