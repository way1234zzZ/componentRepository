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
  },
  getCollectionNum(from,to,terr,project){
    return Vue.$http.get('/getCollectionNum',{
      params:{
        'from':from,
        'to':to,
        'terr':terr,
        'project':project
      }
    })
  },
  getSumCollectionNum(from,to,terr,project){
    return Vue.$http.get('/getSumCollectionNum',{
      params:{
        'from':from,
        'to':to,
        'terr':terr,
        'project':project
      }
    })
  },
  getCollectionCap(country,project){
    return Vue.$http.get('/getCollectionCap',{
      params:{
        'terr':country,
        'project':project
      }
    })
  },

  getRunningCount(country,project){
    return Vue.$http.get('/getRunningCount',{
      params:{
        'terr':country,
        'project':project
      }
    })
  },
}
export default getTarget