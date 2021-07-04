import Vue from 'vue'
import qs from 'querystring'
const getMainpage = {
  getProjects(country,project){
    return Vue.$http.get('/getProjects?terr='+country+'&project='+project)
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
  },
  getIps(){
    return Vue.$http.get('/getIps?')
  },
  getProjectList(params){
    return Vue.$http.get('/getProjectList?terr='+params)
  },
  getRunningTask(terr,project){
    return Vue.$http.get('/getRunningTask?terr='+terr+'&project='+project)
  },
  getRunningCount(terr,project){
    return Vue.$http.get('/getRunningCount?terr='+terr+'&project='+project)
  },
}
export default getMainpage