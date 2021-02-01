<template>
  <div class="popOver" @click.stop="xxx">
    <!-- 防止冒泡 点content不会取消 content之外的document才行 -->
    <div class="content-wrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <slot></slot>
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
    xxx() {
      this.visible = !this.visible
      if (this.visible) {
        //点击后再监听document的事件
        this.$nextTick(() => {
          let eventHandler = () => {
            this.visible = false
            console.log('document隐藏popOver')
            document.removeEventListener('click', eventHandler)
          }
          //不用body是因为不知道body的大小
          document.addEventListener('click', eventHandler)
        })
      } else {
        //用.stop解决vm和document同时生效即冒泡
        console.log('vm（就是button)隐藏popOver')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.popOver {
  display: inline-block;
  position: relative;
}
.content-wrapper {
  position: absolute;
  bottom: 100%;
  left: 0;
  border: 1px solid red;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.75);
}
</style>