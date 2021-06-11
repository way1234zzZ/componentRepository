import axios from 'axios'
var instance = axios.create({
  timeout: 300000,
  //baseURL: "/api",
  baseURL: process.env.NODE_ENV === 'production' ?'/':"/api",
});
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
export default {
  install(Vue) {
      Vue.$http = instance
  }
}