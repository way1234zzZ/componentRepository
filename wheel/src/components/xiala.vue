<template>
  <div class="wrapper">
    <div class="button">
      点击
    </div>
    <div class="content" v-if="show">
      <span v-for="(item,index) in lists" :key="index + item"></span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      lists: []
    }
  }
}
</script>
<style >
.wrapper {
  display: flex;
}
</style>