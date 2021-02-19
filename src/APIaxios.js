import axios from 'axios';
const baseURLlocal = 'http://localhost:3000/';
const baseURL = 'http://batoilogic.my/api/';

export default {
  getOrders() {
    //return axios.get(baseURL+'orders')
    return axios.get(baseURL+'orders/')
  },
  getUserLocal(email){
    return axios.get(baseURLlocal+'users?email='+ email)
  },
  editOrder(order){
    return axios.put(baseURLlocal+'orders/'+ order.id, order)
  },
  login() {
    return axios.get(baseURL+'login/')
  },
  // Intento de realitzar el login en Laravel
  /*login(credentials){
    //return axios.get(baseURL+'login/'+ credentials);
    axios.post(baseURL+'login/', {
      email: credentials.email,
      password: credentials.password
    })
    .then(function (response) {
      console.log("error")
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }*/
}