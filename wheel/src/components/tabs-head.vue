<template>
  <div class="tabs-head">
    <slot></slot>
    <!-- slot上不能加class -->
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'gTabsHead',
  inject: ['eventBus'],
  created() {
    // console.log('爷爷给爸爸的eventbus')
    // console.log(this.eventBus)
    //vue的事件系统不会冒泡 不会触发父级tab组件的update事件
    this.$emit('update:selected', '这是this $emit出来的数据')
  }
}
</script>
<style lang="scss" scoped>
$tab-height: 40px;
.tabs-head {
  display: flex;
  height: $tab-height;
  justify-content: flex-start;

  border: 1px solid red;
  > .actions-wrapper {
    //前面三个item都是flex往左，这里加left auto就能实现在右边的效果
    margin-left: auto;
  }
}
</style>