<template>
    <div class="contenedor">
        <div class="form">
            <h2>Eliminar</h2>
            <p type="ID:"><input v-model="id" type="number"></p>
            <button class="btn" @click="borrarEstudiante()">Eliminar</button>
            <p v-if="show">Se elimino exitosamente</p>
        </div>
    </div>
</template>

<script>
import {borrarFachada} from "../helpers/clienteEstudiante.js"


export default {
    data(){
        return{
            id:null,
            show:false
        }
    },
    methods:{
        async borrarEstudiante(){
            await borrarFachada(this.id);
            this.show=true;
            setTimeout(() => {this.show = false}, 3000);
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