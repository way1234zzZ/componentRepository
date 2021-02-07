<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      <slot></slot>
    </div>
    <div class="popOver" v-if="popoverVisible">
      <g-cascader-item :items="source"></g-cascader-item>
    </div>
  </div>
</template>
<script>
import gCascaderItem from './cascader-item'
export default {
  name: 'gCascader',
  props: {
    source: {
      type: Array
    }
  },
  data() {
    return {
      popoverVisible: false
    }
  },
  computed: {
  },
  components: {
    gCascaderItem
  }
}
</script>
<style lang="scss" scoped>
.cascader {
  .trigger {
    border: 1px solid red;
    height: 32px;
    width: 100px;
  }
  .popOver {
    border: 2px solid green;
    height: 200px;
    display: flex;
    .label {
      //不要换行
      white-space: nowrap;
    }
  }
}
</style>