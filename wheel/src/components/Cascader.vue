<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      {{result || '请选择'}}
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
    result() {
      return this.selected.map((item) => item.name).join('/')
    }
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
    border: 1px solid #ddd;
    height: 32px;
    min-width: 10em;
    display: inline-flex;
    align-items: center;
    padding: 0 1em;
    border-radius: 4px;
  }
  .popOver {
    position: absolute;
    top: 100%;
    margin-top: 4px;
    //弹出窗加颜色盖住原本的字体 不然弹出窗的内容与本来的重叠
    background: white;
    left: 0;
    display: flex;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }
}
</style>