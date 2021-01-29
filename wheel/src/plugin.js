import Toast from './components/toast'
export default {
  install(Vue) {
    Vue.prototype.$toast = function (message, toastOptions) {
      // console.log('I am a toast')
      // alert(message)
      let Constructor = Vue.extend(Toast)
      let toast = new Constructor({
        propsData:
          //放到tools.vue里调用传了
          // closeButton: {
          //   text: '知道了',
          //   callBack: () => {
          //     console.log('用户说他知道了')
          //   }
          // }
          toastOptions

      })
      toast.$slots.default = [message]
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}