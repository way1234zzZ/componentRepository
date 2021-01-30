<template>
  <div class="toast" ref="toast" :class="toastClasses">
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default[0]"></div>
    </div>
    <div class="line" ref="line"></div>
    <span v-if="closeButton" class="close" @click="onClickClose">
      {{closeButton.text}}
    </span>
  </div>
</template>
<script>
//export的是构造组件的选项
export default {
  name: 'gToast',
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: Number,
      default: 5
    },
    closeButton: {
      type: Object,
      //Object的默认值不能是一个对象，必须是一个函数return一个对象
      //如果有两个相同的组件，一个改了，另一个也跟着改（浅拷贝）
      default: () => {
        return {
          text: '关闭',
          callBack: undefined
        }
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'top',
      validator(value) {
        //includes可能浏览器不支持
        //return ['top', 'bottom', 'middle'].includes(value)
        return ['top', 'bottom', 'middle'].indexOf(value) >= 0
      }
    }
  },
  created() {
    //console.log(this.closeButton)
  },
  mounted() {
    this.executeAutoClose();
    this.updateStyle();
  },
  computed: {
    toastClasses() {
      return {
        [`position-${this.position}`]: true
      }
    }
  },
  methods: {
    //style只获取内联元素，不获取css元素
    //plugin.js里先mount再加入到body中
    updateStyle() {
      this.$nextTick(() => {
        this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`
      })
    },
    executeAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        }, this.autoCloseDelay * 1000)
      }
    },
    close() {
      //把元素从body里拿出来
      this.$el.remove()
      this.$emit('beforeClose')
      this.$destroy()
    },
    onClickClose() {
      this.close();
      if (this.closeButton && typeof this.closeButton.callBack === 'function') {
        this.closeButton.callBack(this);//this：toast实例
      }
    },
    log() {
      console.log("测试")
    }
  }
}
</script>
<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
.toast {
  animation: fade-in 1s;
  color: white;
  background: $toast-bg;
  position: fixed;
  border-radius: 4px;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
  left: 50%; //左边线坐50%
  font-size: $font-size;
  min-height: $toast-min-height;
  line-height: 1.8;
  //下面两行应对字体不居中的普遍做法
  display: flex;
  //flex单行居中
  align-items: center;
  //一般为4或者8的倍数
  padding: 0 16px;
  .close {
    //border: 1px solid red;
    padding-left: 16px;
    //防止span内换行
    flex-shrink: 0;
  }
  .line {
    //父元素高度改为最小高度，子元素100%不生效，
    // height: 100%;
    border: 1px solid #666;
    margin-left: 16px;
  }
  .message {
    padding: 8px 0;
  }
  &.position-top {
    top: 0;
    transform: translateX(-50%); //针对这个元素的宽度左移50%
  }
  &.position-bottom {
    bottom: 0;
    transform: translateX(-50%); //针对这个元素的宽度左移50%
  }
  &.position-middle {
    top: 50%;
    transform: translate(-50%, -50%); //针对这个元素的宽度左移50%
  }
}
</style>