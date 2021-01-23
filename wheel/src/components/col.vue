<template>
  <!-- 如果有offset -->
  <div class="col" :class="[span && `col-${span}`, offset && `offset-${offset}`]" :style="{paddingLeft:gutter/2+'px',paddingRight:gutter/2+'px'}">
    <div style="border:1px solid green;height:100px">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'gCol',
  data() {
    return {
      gutter: 0
    }
  },
  props: {
    span: {
      //既可以传number，也可以传string
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    },
  },
  created() {
    console.log('col created');
  },
  //相当于document.body.appendChild
  mounted() {
    console.log('col mounted');
  }
}
</script>
<style lang="scss" scoped>
.col {
  // height: 100px;
  // background: grey;
  // border: 1px solid red;
  width: 50%;
  $class-prefix: col-;

  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }

  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
}
</style>