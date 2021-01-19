<template>
  <div class="row">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'gRow'
}
</script>
<style lang="scss" scoped>
.row {
  //flex默认 nowrap不换行 所以默认col里默认50%在遇到三列的情况下会更新
  //shrink:noshrink不收缩 三个50%
  display: flex;
}
</style>