<template>
  <div style="overflow:hidden;padding:200px">
    <g-pop-over position="right" trigger="hover">
      <template slot="content">
        <div>popOver内容</div>
      </template>
      <g-button>点我</g-button>
    </g-pop-over>
    <g-pop-over position="right">
      <template slot="content">
        <div>popOver内容</div>
      </template>
      <g-button>点我</g-button>
    </g-pop-over>
  </div>
</template>
<script>
import gButton from '@/components/button.vue'
import gPopOver from '@/components/popOver.vue'
export default {
  name: 'testPopOver',
  components: {
    gPopOver,
    gButton
  },
  methods: {

  }
}
</script>