<template>
    <div class="contenedor">
        <div id="div_id" class="form">
            <h2>Consultar</h2>
            <p type="ID:"><input v-model="id" type="number"></p>
            <button class="btn" @click="consultarEstudiante()">Consultar</button>
        </div>
        <form v-if="show" class="form" action="https://miapli.com/procesarEstudiante" method="post">
            <h2>Estudiente</h2>
            <p type="Nombre:">{{estudiante.nombre}}</p>
            <p type="Apellido:">{{estudiante.apellido}}</p>
            <p type="CI:">{{estudiante.cedula}}</p>
            <p type="Genero:">{{estudiante.genero}}</p>
            <p type="Fecha:">{{estudiante.fechaNacimiento}}</p>
            <p type="Tipo Sangre:">{{estudiante.sangre}}</p>
            <p type="Matricula:">{{estudiante.matricula}}</p>
            <p type="Semestre:">{{estudiante.semestre}}</p>
            <p type="Gratuidad:">{{estudiante.gratuidad}}</p>
        </form>
    </div>
</template>

<script>
import {consultarFachada} from "../helpers/clienteEstudiante.js"


export default {
    created(){
        console.log(this.$route)
        console.log(this.$route.params.id)
        console.log(this.$route.query)
        console.log(this.$route.query.anio)
        console.log(this.$route.query.edad)
    },
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
                gratuidad: null
            },
            show: false
        }
    },
    methods:{
        async consultarEstudiante(){
            this.estudiante = await consultarFachada(this.id);
            this.show=true;
            console.log(this.estudiante);
        },
        consultar(){

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
#div_id{
    margin: 20px;
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
.id_update{
    background-color: #ffffff;
    border-radius: 5px;
    padding: 5px;
}
</style>