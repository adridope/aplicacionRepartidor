import axios from 'axios';
const baseURLlocal = 'http://localhost:3000/';
//const baseURL = 'http://http://batoilogic.my/api/';
const baseURL = 'http://batoilogic.my/api/';

export default {
  getOrders() {
    //return axios.get(baseURL+'orders')
    return axios.get(baseURL+'orders/')
  },
  getState(id) {
    return axios.get(baseURLlocal+'states/'+ id)
  },
  getUser(email){
    return axios.get(baseURLlocal+'users?email='+ email)
  },
  editOrder(order){
    return axios.put(baseURLlocal+'orders/'+ order.id, order)
  }
}

/*import axios from 'axios';
const baseURL = 'http://batoilogic.my/api/productos/';

export default {
  getProducts() {
    return axios.get(baseURL)
  },
  getProduct(product) {
    return axios.get(baseURL+product)
  }
}*/