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
    </g-button> |
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
  }
}
</script>
<style scoped>
#app {
  margin: 20px;
}
</style>
