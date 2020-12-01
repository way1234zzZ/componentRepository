<template>
  <svg class="g-icon">
    <use :xlink:href="`#i-${icon}`"></use>
  </svg>
</template>
<script>
export default {
  name: 'gIcon',
  props: {
    icon: {
      default: '',
      type: String
    }
  }
}
</script>
<style lang="scss" scoped>
.g-icon {
  width: 1em;
  height: 1em;
}
</style>