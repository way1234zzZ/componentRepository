import Vue from 'vue'
const getManpage = {
  getProjects(params){
    return Vue.$http.post('/getProjects',params)
  },
  getAccount(){
    return Vue.$http.get('/getAccount')
  }
}
export default getManpage