<template>
  <div style="padding-top : 100px;padding-left:100px">
    <div style="padding:5px" @click="xxx2">
      <g-pop-over>
        <template slot="content">
          <div>popOver内容</div>
        </template>
        <button>点我</button>
      </g-pop-over>
    </div>
  </div>
</template>
<script>
import gPopOver from '@/components/popOver.vue'
export default {
  name: 'testPopOver',
  components: {
    gPopOver
  },
  methods: {
    xxx2() {
      console.log('xxx')
    }
  }
}
</script>