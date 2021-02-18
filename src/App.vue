<template>
  <div id="app">
      <div id="nav">
        <router-link to="/">Listado</router-link> |
        <span v-if="activeSession" class="push" to="/logout">{{ userName }} </span>
        <router-link v-if="activeSession" to="/logout">Logout</router-link>
        <router-link v-else to="/login">Login</router-link>
        
      </div>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return {
      activeSession:false,
      userName:""
    }
  },
  created(){
    if(localStorage.token){
      this.activeSession=true;
      this.userName = localStorage.token;
    }else{
      this.activeSession=false;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
