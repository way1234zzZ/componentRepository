<template>
  <div id="app">
    <g-button>
      按钮
    </g-button>
    <g-button icon="settings">
      按钮
    </g-button>
    <g-button icon="loading" iconPosition="right">
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
    }
  }
}
</script>
<style scoped>
#app {
  margin: 20px;
}
</style>
