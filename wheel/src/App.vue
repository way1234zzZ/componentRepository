<template>
  <div id="app">
    <g-button>
      按钮
    </g-button>
    <g-button icon="settings">
      按钮
    </g-button>
    <g-button icon="download" iconPosition="right">
      按钮
    </g-button>
    <g-icon icon="download"></g-icon>
  </div>
</template>

<script>
import gButton from '@/components/button.vue'
import gIcon from '@/components/icon.vue'
export default {
  components: {
    gButton,
    gIcon
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
