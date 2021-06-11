import Vue from 'vue'
import qs from 'querystring'
const getMainpage = {
  getProjects(params){
    return Vue.$http.get('/getProjects?terr='+params)
  },
  getAccount(){
    return Vue.$http.get('/getAccount')
  },
  getLiveTime(){
    return Vue.$http.get('/getLiveTime')
  },
  getTasks(params){
    return Vue.$http.get('/getTasks?terr='+params)
  },
  getData(country){
    return Vue.$http.post('/getData',qs.stringify({"terr":country}))
  },
  getNumCapTask(params){
    return Vue.$http.get('/getNumCapTask?terr='+params)
  }
}
export default getMainpage