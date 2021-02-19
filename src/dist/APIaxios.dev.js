"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var baseURLlocal = 'http://localhost:3000/';
var baseURL = 'http://batoilogic.my/api/';
var _default = {
  getOrders: function getOrders() {
    //return axios.get(baseURL+'orders')
    return _axios["default"].get(baseURL + 'orders/');
  },
  getUserLocal: function getUserLocal(email) {
    return _axios["default"].get(baseURLlocal + 'users?email=' + email);
  },
  editOrder: function editOrder(order) {
    return _axios["default"].put(baseURLlocal + 'orders/' + order.id, order);
  },
  login: function login() {
    return _axios["default"].get(baseURL + 'login/');
  } // Intento de realitzar el login en Laravel

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

};
exports["default"] = _default;