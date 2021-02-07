<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      <slot></slot>
    </div>
    <div class="popOver" v-if="popoverVisible">
      <g-cascader-item :items="source" :height="popoverHeight" :selected="selected" @update:selected="onUpdateSelected"></g-cascader-item>
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
    },
    popoverHeight: {
      Type: String,
    },
    selected: {
      type: Array,
      default: () => {
        return []
      }
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
  },
  methods: {
    onUpdateSelected(newSelected) {
      this.$emit('update:selected', newSelected)
    }
  }
}
</script>
<style lang="scss" scoped>
.cascader {
  position: relative;
  .trigger {
    border: 1px solid black;
    height: 32px;
    width: 100px;
  }
  .popOver {
    position: absolute;
    top: 100%;
    //弹出窗加颜色盖住原本的字体 不然弹出窗的内容与本来的重叠
    background: white;
    left: 0;
    display: flex;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }
}
</style>