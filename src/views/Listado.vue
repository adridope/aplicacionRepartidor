<template>
  <div class="container">
    <h1>Listado de pedidos</h1>
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-12" id="almacen">
            <table class="table table-striped table-hover">
              <thead class="thead-dark bg-primary">
                <tr>
                <th>Id</th>
                <th>Dirección</th>
                <th>Estado</th>
                <th>Fecha</th>
                <th>Editar estado de pedido</th>
                </tr>
              </thead>
              <tbody>
                <order v-for="(order, index) in orders"
                :key="index"
                :order="order"></order>
              </tbody>
            </table>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <button type="submit" class="btn btn-primary" @click.prevent="reparto">Empezar reparto</button>
        </div>
      </div>
      
  </div>
</template>

<script>
import Order from '../components/Order.vue'

export default {
  name: 'Listado',
  components: {
    Order
  },
  methods: {
      getData() {
        this.$store.dispatch('loadAll')
      },
      reparto(){
        this.orders.forEach(element => {
          element.state = 1;
          this.$store.dispatch('changeAll',element);
        });
      }
  },
  mounted() {
    this.getData();
  },
  created(){
    if(localStorage.token){
        this.getData();
    }else{
      this.$router.push({ name: 'Login'})
    }
  },
  computed:{
    orders() {
      return this.$store.state.orders
    }
  }
}
</script>