import axios from 'axios';
const baseURL = 'http://localhost:3000/';
/*const config = {
  headers: {
    'Authorization' : 'Bearer ' + localStorage.token
  }
}*/

export default {
  getOrders() {
    return axios.get(baseURL+'orders')
  },
  getState(id) {
    return axios.get(baseURL+'states/'+ id)
  },
  getUser(email){
    return axios.get(baseURL+'users?email='+ email)
  },
  editOrder(order){
    return axios.put(baseURL+'orders/'+ order.id, order)
  }
}