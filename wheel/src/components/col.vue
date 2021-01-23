<template>
  <!-- 如果有offset -->
  <div class="col" :class="colClasses" :style="colStyle">
    <!-- <div style="border:1px solid green;height:100px"> -->
    <slot></slot>
    <!-- </div> -->
  </div>
</template>
<script>
export default {
  name: 'gCol',
  data() {
    return {
      gutter: 0,

    }
  },
  computed: {
    colClasses() {
      //解构，快速获取this对象中的span offset
      let { span, offset } = this
      return [
        span && `col-${span}`,
        offset && `offset-${offset}`
      ]
      //return [this.span && `col-${this.span}`, this.offset && `offset-${this.offset}`]

    },
    colStyle() {
      return {
        paddingLeft: this.gutter / 2 + 'px',
        paddingRight: this.gutter / 2 + 'px'
      }
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