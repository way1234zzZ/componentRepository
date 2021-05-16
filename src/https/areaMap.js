import Vue from 'vue'
const getManpage = {
  getMap(){
    return Vue.$http.get("../../USA.json")
  }
}
export default getManpage