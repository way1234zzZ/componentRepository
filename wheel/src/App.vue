<template>
  <div id="app">
    <g-button>
      按钮
    </g-button>
    <g-button icon="settings">
      按钮
    </g-button>
    <g-button :loading="flag" icon="download" iconPosition="right" @click="flag = !flag">
      按钮
    </g-button>
    <button-group>

      <g-button icon="left">
        上一页
      </g-button>

      <g-button>
        更多
      </g-button>
      <g-button icon="right" iconPosition="right">
        下一页
      </g-button>
    </button-group>
  </div>
</template>

<script>
import gButton from '@/components/button.vue'
import buttonGroup from '@/components/button-group.vue'
export default {
  components: {
    gButton,
    buttonGroup
  },
  data() {
    return {
      // iconName: 'settings'
      flag: true
    }
  },
  mounted() {
    //防止用户在button外面包了div button-group的css选择器不起效
    for (let node of this.$el.children) {
      //nodeName都是大写
      //console.log(node.nodeName)
      if (node.nodeName.toLowerCase() !== 'button') {
        console.warn(`g-button-group的子元素应该全是g-button，但是你写的是${node.nodeName.toLowerCase()}`)
      }
    }
  }
}
</script>
<style scoped>
#app {
  margin: 20px;
}
</style>
