<template>
  <div id="app">
      <header>
        <nav class="navbar">
            <div>
                <router-link class="navbar-brand" id="header-logo" to="/"><img src="/img/batoiLogicResources/logo.svg" alt="logo"></router-link>
                <div class="d-block d-lg-none" id="nav-button"><span></span><span></span><span></span></div>
                <ul id="main-menu">
                    <li><router-link class="navbar-brand headerLink" to="/">Listado</router-link></li>
                    <li class="push"><span v-if="activeSession" to="/logout">{{ userName }} </span>
                    <router-link class="navbar-brand headerLink" v-if="activeSession" to="/logout">Cierra sesión</router-link>
                    <router-link class="navbar-brand headerLink" v-else to="/login">Inicia sesión</router-link></li>
                </ul>
            </div>
        </nav>
      </header>

      <div id="fullGeneralContent">
        <router-view></router-view>
      </div>

    <footer>

    <div class="row contenido">

        <div class="d-none d-md-block col-12 col-lg-4">

            <img style="width: 258px" src="/img/batoiLogicResources/text-logo.svg" alt="logo">

            <p>
                Batoilogic es una empresa comprometida con sus clientes ofreciendo gran variedad
                de productos de la mejor calidad, supliendo a minoristas y proveedores.
                Actualmente es una de las empresas líderes en Alcoy, donde tiene una presencia directa.
                También hace entrega de productos a clientes internacionales, con tal de suplir la necesidad de sus clientes.
            </p>

        </div>

        <div class="d-none d-md-block col-12 col-md-5"></div>

        <div class="col-12 col-md-5 col-lg-3">

            <h2>Información de contacto</h2>

            <ul>
                <li id="phone">+34 688 888 888</li>
                <li id="mail">soporte@batoilogic.com</li>
            </ul>

            <div class="social-media-icons">
                <a href="#"><img src="https://img.icons8.com/material-sharp/24/ffffff/facebook-f.png" alt="Facebook"></a>
                <a href="#"><img src="https://img.icons8.com/android/24/ffffff/twitter.png" alt="Twitter"></a>
                <a href="#"><img src="https://img.icons8.com/metro/26/ffffff/instagram-new.png" alt="Instagram"></a>
                <a href="#"><img src="https://img.icons8.com/android/24/ffffff/linkedin.png" alt="Linkedin"></a>
                <a href="#"><img src="https://img.icons8.com/metro/26/ffffff/youtube.png" alt="YouTube"></a>
            </div>

        </div>

    </div>
    <div class="row derechos">
        <small><a href="https://icons8.com/" target="_blank">Iconos extraidos de icons8.</a></small>
    </div>

    </footer>

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
    if(localStorage.id){
      this.activeSession=true;
      this.userName = localStorage.name;
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
