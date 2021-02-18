<template>
  <div class="container">
      <h1>Logout</h1>
        <button type="submit" class="btn btn-danger" @click.prevent="close">Cerrar sesión</button>
  </div>
</template>

<script>
export default {
    methods: {
      close(){
         if(confirm('¿Estas seguro que quieres cerrar sesión?')){
             localStorage.clear();
             this.$router.push({ name: 'Login'});
         }
      }
    },
    created(){
      if(!localStorage.token){
         this.$router.push({ name: 'Login'})
      }
    }
}
</script>