<template>
  <div class="container">
      <h1>Login</h1>
      <form>
        <div class="form-group">
          <input type="email" class="form-control" name="email" placeholder="Correo" v-model="credentials.email" required/>
        </div>
        <div class="form-group">
          <input type="password" class="form-control" name="password" placeholder="Contraseña" v-model="credentials.password" required/>
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
      credentials: {
        email:"",
        password:""
      }      
    }
  },
  methods:{
    login(){
      APIaxios.login(this.credentials)
      .then((response)=>{
        /*if(response.data==='correcto'){
          console.log('Mike tiene papitas');
        }else{
          console.log('Mike no tiene papitas');
        }*/
        console.log(response);
      });

      /*APIaxios.getUserLocal(this.email)
      .then((response)=>{
        if(this.email==response.data[0].email){
          if(this.password==response.data[0].password){
            //alert('inicio de sesión correcto')
            localStorage.token=response.data[0].token;
            localStorage.id=response.data[0].id;
            localStorage.name=response.data[0].name;
            this.$router.push({ name: 'Listado'});
            location.reload();
          }else{
            //alert('Contraseña incorrecta')
          }
        }else{
          //alert('Correo no registrado')
        }
      });*/
    }
  },
  created(){
      if(localStorage.token){
         this.$router.push({ name: 'Logout'})
      }
    }
}
</script>