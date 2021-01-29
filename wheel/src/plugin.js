import Toast from './components/toast'
export default {
  install(Vue) {
    Vue.prototype.$toast = function (message) {
      // console.log('I am a toast')
      // alert(message)
      let Constructor = Vue.extend(Toast)
      let toast = new Constructor()
      toast.$slots.default = [message]
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}