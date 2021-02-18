<template>
  <div class="container">
      <h1>Editar estado del pedido con id {{this.$route.params.order.id}}</h1>
      <form>
        <div class="form-group">
        <select v-model="estado">
          <option value="0">Preparado</option>
          <option value="1">En ruta</option>
          <option value="2">Entregado</option>
          <option value="3">No entregado</option>
        </select>
        </div>
        <button type="submit" class="btn btn-primary" @click.prevent="changeState">Cambiar estado de pedido</button>
      </form>
  </div>
</template>

<script>
import APIaxios from '../APIaxios.js';

export default {
    name:'edit-order',
    data() {
      return {
        estado:this.$route.params.order.state
      }
    },
    methods: {
      changeState(){
        this.$route.params.order.state=this.estado;
        APIaxios.editOrder(this.$route.params.order)
        .then(() => {
          alert('Estado de pedido editado correctamente')
          this.$router.push({ name: 'Listado'})
        })
        .catch(() => {
          alert('Error al editar el estado del pedido')
        })
      }
    },
    created(){
      if(!localStorage.token){
         this.$router.push({ name: 'Login'})
      }
    }
}
</script>