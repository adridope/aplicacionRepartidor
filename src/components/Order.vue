<template>
  <tr>
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
import APIaxios from '../APIaxios.js';

export default {
    name:'order',
    props: ["order"],
    data() {
      return {
        estado:"",
      }
    },
    methods: {
      editOrder() {
        this.$router.push({ name: 'EditOrder', params: { order: this.order }})
      },
      state(){
        APIaxios.getState(this.order.state)
          .then((response) => {
            console.log(response);
            this.estado=response.data.name;
        })
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