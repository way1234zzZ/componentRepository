<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'gToast'
}
</script>
<style lang="scss" scoped>
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.toast {
  color: white;
  background: $toast-bg;
  position: fixed;
  border-radius: 4px;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
  left: 50%; //左边线坐50%
  transform: translateX(-50%); //针对这个元素的宽度左移50%
  font-size: $font-size;
  height: $toast-height;
  line-height: 1.8;
  //下面两行应对字体不居中的普遍做法
  display: flex;
  //flex单行居中
  align-items: center;
  //一般为4或者8的倍数
  padding: 0 16px;
}
</style>