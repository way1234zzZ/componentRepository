<template>
  <div class="tabs-head">
    <slot></slot>
    <slot name="actions"></slot>
  </div>
</template>
<script>
export default {
  name: 'gTabsHead',
  props: {
    selected: {
      type: String,
      required: true//必须要这个属性
    },
    direction: {
      type: String,
      default: 'horizontal',//横向，
      validator(value) {
        return ['horizontal', 'vertical'].indexOf(value) >= 0
      }
    }
  },
  created() {
    //this.$emit('update:selected','xxx')
  }
}
</script>
<style scoped>
</style>