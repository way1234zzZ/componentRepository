<template>
  <div class="popOver" @click="onClick">
    <!-- 防止冒泡 点content不会取消 content之外的document才行 -->
    <!-- v-show只改变样式 v-if改变是否存在在dom树中 -->
    <div ref="contentWrapper" class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" class="triggerWrapper">
      <slot></slot>
    </span>
  </div>
</template>
<script>
export default {
  name: 'gPopOver',
  data() {
    return {
      visible: false
    }
  },
  methods: {
    postionContent() {
      //把contentWrapper放到body的最后，解决父元素overflow:hidden的问题
      document.body.appendChild(this.$refs.contentWrapper)
      let { top, left } = this.$refs.triggerWrapper.getBoundingClientRect()
      //console.log(height, width, top, left)
      this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
      //window.scrollY是滚动时滚完的部分
      this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
    },
    listenDocument() {
      //绑定事件名称，不然如果卸载add remove内部类里，虽然同名 但是每次的都不一样
      let eventHandler = (e) => {
        if (this.$refs.triggerWrapper.contains(e.target)) {
          //console.log('阻止button')
          //不加这个多次点击再点击document取消 是同时remove多个eventListener 所以在button取消后就要取消
          document.removeEventListener('click', eventHandler)
        } else if (this.visible && this.$refs.contentWrapper.contains(e.target)) {
          return
        } else {
          this.visible = false
          //console.log('document隐藏popOver')
          //不remove 每次都会创建一个eventlistener
          //console.log('销毁eventListener')
          document.removeEventListener('click', eventHandler)
        }
      }
      //不用body是因为不知道body的大小
      //console.log('添加eventListener')
      document.addEventListener('click', eventHandler)
    },
    onClick(event) {
      //contains只能判断dom关系
      if (this.$refs.triggerWrapper.contains(event.target)) {
        console.log('button')
        this.visible = !this.visible
        //console.log(this.visible)
        if (this.visible === true) {
          //点击后再监听document的事件 不然一出来就没了
          setTimeout(() => {
            //console.log('hiTimenout')
            this.postionContent();
            this.listenDocument();
          })
        } else {
          //console.log('button取消显示')
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
$border-color: #333;
$border-radiius: 4px;
.popOver {
  display: inline-block;
  position: relative;
  vertical-align: top;
}
.content-wrapper {
  position: absolute;
  border: 1px solid $border-color;
  border-radius: $border-radiius;
  // box-shadow: 0 0 3px rgba(0, 0, 0, 0.75);
  //解决三角形没有阴影的问题
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.75));
  background: white;
  transform: translateY(-100%);
  margin-top: -10px;
  padding: 0.5em 1em;
  max-width: 20em;
  //一大串的英文识别为单词 换行
  word-break: break-all;
  &::before,
  &::after {
    content: "";
    display: block;
    border: 10px solid transparent;
    border-bottom-color: transparent;
    border-right-color: transparent;
    border-left-color: transparent;
    width: 0;
    height: 0;
    position: absolute;
    left: 10px;
  }
  &::before {
    border-top-color: black;
    top: 100%;
  }
  &::after {
    border-top-color: white;
    //一定要有空格 100% - 1px
    top: calc(100% - 1px);
  }
}
.triggerWrapper {
  //解决button比span高 inline-flex兼容性会差一点
  display: inline-block;
}
</style>