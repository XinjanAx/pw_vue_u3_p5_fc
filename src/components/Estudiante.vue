<template>
  <h1>Componente estudiante</h1>
  <div class="contenedor">
    <div id="insertar">
        <input v-model="buscar" type="text">
        <button @click="consultarEstudiante()">Consultar</button>
    </div>

    <form class="form" action="https://miapli.com/procesarEstudiante" method="post">
            
        <h2>Estudiente</h2>
        <p type="Nombre:">{{estudiante.nombre}}</p>
        <p type="Apellido">{{estudiante.apellido}}</p>
        <p type="CI:">{{estudiante.cedula}}</p>
        <p type="Genero:">{{estudiante.genero}}</p>
        <p type="Fecha:">{{estudiante.fechaNacimiento}}</p>
        <p type="Tipo Sangre:">{{estudiante.sangre}}</p>
        <p type="Matricula:">{{estudiante.matricula}}</p>
        <p type="Semestre:">{{estudiante.semestre}}</p>
        <p type="Gratuidad:">{{estudiante.gratuidad}}</p>
    </form>
  </div>
  <div class="contenedor">
    <form class="form" action="https://miapli.com/procesarEstudiante" method="post">
        <h2>Nuevo estudiante</h2>
        <p type="Nombre:"><input v-model="nombre" type="text"></p>
        <p type="Apellido"><input v-model="apellido" type="text"></p>
        <p type="CI:"><input v-model="ci" type="text"></p>
        <p type="Genero:"><input v-model="genero" type="text"></p>
        <p type="Fecha:"><input v-model="fechaNacimiento" type="datetime-local"></p>
        <p type="Tipo Sangre:"><input type="text"></p>
        <p type="Matricula:"><input v-model="matricula" type="text"></p>
        <p type="Semestre:"><input v-model="semestre" type="number"></p>
        <p type="Gratuidad:"><input v-model="gratuidad" type="checkbox"></p>       
    </form>
    <button @click="insertarEstudiante()" class="btn">Guardar</button>
  </div>
  <div>

  </div>
  <!-- 
  <div>
    <input v-model="borrar" type="text">
    <button @click="borrarEstudiante()">borrar</button>
  </div>
  -->
  <div>

  </div>
  
  

</template>

<script>
import {consultarFachada,insertarFachada} from "../helpers/clienteEstudiante.js"
export default {
    data(){
        return{
            buscar:null,
            estudiante:{
                id:null,
                nombre: null,
                apellido: null,
                cedula: null,
                genero: null,
                fechaNacimiento: null,
                sangre: null,
                matricula: null,
                semestre: null,
                gratuidad: null
            },


            nombre:null,
            apellido:null,
            ci:null,
            genero:null,
            fechaNacimiento:null,
            TipoSangle:null,
            matricula: null,
            semestre: null,
            gratuidad: null,

            borrar:null,
        }
    },
    methods:{
        async consultarEstudiante(){
            const data = await consultarFachada(this.buscar);
            console.log(this.borrar);
            console.log(data);
            this.estudiante = data;
            console.log(this.estudiante);
        },
        async insertarEstudiante(){
            const incertar ={
                nombre: this.nombre,
                apellido: this.apellido,
                cedula: this.cedula,
                genero: this.genero,
                fechaNacimiento: this.fechaNacimiento,
                sangre: this.sangre,
                matricula: this.matricula,
                semestre: this.semestre,
                gratuidad: this.gratuidad
            }
           await insertarFachada(incertar);
        },
        async borrarEstudiante(){
            await borrarFachada(this.borrar);
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
    width: 180px;
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
#id_insertar{
    width: 250 px;
}
#div_btn{

   text-align: center;
}
.btn{
    font-size: 20px;
    border-radius: 7px;
    border: groove;
    margin: 30px 0;
}
.btn:hover{
    background-color: rgb(188, 237, 255);
    
}
</style>