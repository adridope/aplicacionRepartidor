<template>
  <div class="container">
      <h1>Login</h1>
      <form>
        <div class="form-group">
          <input type="email" class="form-control" placeholder="Correo" v-model="email" required/>
        </div>
        <div class="form-group">
          <input type="password" class="form-control" placeholder="Contraseña" v-model="password" required/>
        </div>
        <button type="submit" class="btn btn-primary" @click.prevent="login">Iniciar Sesión</button>
      </form>
  </div>
</template>

<script>
import APIaxios from '../APIaxios.js';

export default {
  name: 'Login',
  data(){
    return{
      email:"",
      password:""
    }
  },
  methods:{
    login(){
      APIaxios.getUser(this.email)
      .then((response)=>{
        if(this.email==response.data.email){
          if(this.password==response.data.password){
            //alert('inicio de sesión correcto')
            localStorage.token=response.data.token;
            localStorage.id=response.data.id;
            localStorage.name=response.data.name;
            this.$router.push({ name: 'Listado'});
            location.reload();
          }else{
            //alert('Contraseña incorrecta')
          }
        }else{
          //alert('Correo no registrado')
        }
      })
    }
  },
  created(){
      if(localStorage.token){
         this.$router.push({ name: 'Logout'})
      }
    }
}
</script>