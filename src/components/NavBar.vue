<template>
  <div class="nav">
    <router-link to="/consultar">Consultar</router-link>
    <router-link to="/guardar">Guardar</router-link>
    <router-link to="/actualizar">Actualizar</router-link>
    <router-link to="/eliminar">Eliminar</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.nav a{
  color: rgb(0, 0, 0);
  margin: 0 20px;
  font-weight: bold;
  border: solid;
  padding: 10px;
  border-radius: 10px;

}
.router-link-exact-active{
    background: rgba(137, 43, 226, 0.362);
}

</style>