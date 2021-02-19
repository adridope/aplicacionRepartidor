<template>
  <tr v-if="order.customerId == idCustomer">
    <td>{{order.id}}</td>
    <td>{{order.address}}</td>
    <td>{{orders}}</td>
    <td>{{order.created_at}}</td>
    <td>{{order.updated_at}}</td>
    <td><button class="btn btn-dark" @click="editOrder">
        <span class="material-icons edit">edit</span>
        </button>
    </td>
  </tr>
</template>

<script>

export default {
    name:'order',
    props: ["order"],
    data() {
      return {
        estado:"",
        idCustomer:"",
      }
    },
    created(){
      this.idCustomer = localStorage.id;
    },
    methods: {
      editOrder() {
        this.$router.push({ name: 'EditOrder', params: { order: this.order }})
      },
      state(){
        switch(this.order.state) {
          case "0":
            this.estado = "EN PREPARACIÓN";
            break;
          case "1":
            this.estado = "LISTO";
            break;
          case "2":
            this.estado = "EN RUTA";
            break;
          case "3":
            this.estado = "ENTREGADO";
            break;
          case "4":
            this.estado = "NO ENTREGADO";
            break;
        }
      }
    },
    computed:{
      orders() {
        this.state();
        return this.estado;
      }
  }
}
</script>