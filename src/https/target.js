import Vue from 'vue'
import qs from 'querystring'
const getTarget = {
  getAITC(country,project){
    return Vue.$http.get('/getAITC',{
      params:{
        'terr':country,
        'project':project
      }
    })
  },
  getPageTask(country,project){
   return Vue.$http.get('/getPageTask',{
      params:{
        'terr':country,
        'project':project
      }
    })
  }
}
export default getTarget