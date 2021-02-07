<template>
  <div class="cascader-item" :style="{height:height}">
    <div class="left">
      <div class="label" v-for="(item,index) in items" :key="item+index" @click="onClickLabel(item)">
        {{item.name}}
        <g-icon v-if="item.children" name="right" class="icon"> </g-icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <g-cascader-item :items="rightItems" :height="height" :level="level+1" :selected="selected" @update:selected="onUpdateSelected"></g-cascader-item>
    </div>
  </div>
</template>
<script>
import gIcon from "./icon.vue"
export default {
  name: 'gCascaderItem',
  components: {
    gIcon
  },
  props: {
    items: {
      type: Array
    },
    height: {
      Type: String,
    },
    selected: {
      type: Array,
      default: () => {
        return []
      }
    },
    level: {
      type: Number,
      default: 0
    }
  },
  computed: {
    rightItems() {
      let currentSelected = this.selected[this.level]
      if (currentSelected && currentSelected.children) {
        return currentSelected.children
      } else {
        return null
      }
    }
  },
  methods: {
    onClickLabel(item) {
      //object key value
      //this.$set(this.selected, this.level, item)
      let copy = JSON.parse(JSON.stringify(this.selected))
      copy[this.level] = item
      //把level之后的值删掉 实现重新点击后面的隐藏
      copy.splice(this.level + 1)
      this.$emit('update:selected', copy)
    },
    onUpdateSelected(newSelected) {
      this.$emit('update:selected', newSelected)
    }
  }
}
</script>
<style lang="scss" scoped>
.cascader-item {
  display: flex;
  //align-items: flex-start;
  justify-content: flex-start;
  .left {
    padding: 0.3em 0;
    overflow: auto;
  }
  .right {
    //margin-top: -1px;
    border-left: 1px solid #ddd;
  }
  .label {
    padding: 0.3em 1em;
    display: flex;
    align-items: center;
  }
  .icon {
    margin-left: 1em;
    //缩小0.5
    transform: scale(0.5);
  }
}
</style>