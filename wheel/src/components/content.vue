<template>
  <div class="content">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "gContent"
}
</script>
<style lang="scss" scoped>
.content {
  flex: 1;
}
</style>