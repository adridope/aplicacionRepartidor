import Vue from 'vue'
import Vuex from 'vuex'
import APIaxios from '../APIaxios.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orders:[]
  },
  mutations: {
    loadAll(state,response){
      state.orders.splice(0,state.orders.length);
        response.forEach(element => {
          state.orders.push(element);
        });
    }
  },
  actions: {
    loadAll(context) {
      APIaxios.getOrders()
      .then((response) => {
        context.commit('loadAll', response.data);
       })
    },
    changeAll(context,element){
      APIaxios.editOrder(element)
      .then(() => {})
    }
  },
  modules: {
  }
})
