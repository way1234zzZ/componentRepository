<template>
  <div class="cascader-item">
    <div class="left">
      <div class="label" v-for="(item,index) in items" :key="item+index" @click="leftSelected = item">
        {{item.name}}
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <g-cascader-item :items="rightItems"></g-cascader-item>
    </div>
  </div>
</template>
<script>
export default {
  name: 'gCascaderItem',
  props: {
    items: {
      type: Array
    }
  },
  data() {
    return {
      leftSelected: null
    }
  },
  computed: {
    rightItems() {
      if (this.leftSelected && this.leftSelected.children) {
        return this.leftSelected.children
      } else {
        return null
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.cascader-item {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  .left {
    border: 1px solid red;
  }
  .right {
    margin-top: -1px;
  }
}
</style>