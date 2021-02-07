<template>
  <div class="cascader-item" :style="{height:height}">
    <div class="left">
      <div class="label" v-for="(item,index) in items" :key="item+index" @click="leftSelected = item">
        {{item.name}}
        <g-icon v-if="item.children" name="right" class="icon"> </g-icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <g-cascader-item :items="rightItems" :height="height"></g-cascader-item>
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
  //align-items: flex-start;
  justify-content: flex-start;
  .left {
    padding: 0.3em 0;
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