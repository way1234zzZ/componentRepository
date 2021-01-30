<template>
  <div class="tabs-item">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'gTabsItem',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style scoped>
</style>