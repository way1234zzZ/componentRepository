import axios from 'axios'
var instance = axios.create({
  timeout: 30000,
  baseURL: "/api",
  //baseURL: process.env.NODE_ENV === 'production' ?'/':"/api",
});
export default {
  install(Vue) {
      Vue.$http = instance
  }
}