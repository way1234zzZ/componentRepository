<template>
  <div class="popOver" @click="xxx">
    <div class="content-wrapper" v-if="visible">
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