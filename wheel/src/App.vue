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
  </div>
</template>

<script>
import gButton from '@/components/button.vue'
export default {
  components: {
    gButton,
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
