<template>
  <div class="g-slides">
    <div class="g-slides-window">
      <div class="g-slides-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="g-slides-dots">
      <span v-for="n in childrenLength" :key="n" :class="{active: selectedIndex === n-1}" @click="select(n-1)">
        {{n}}
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'gSlides',
  data() {
    return {
      childrenLength: 0,
      lastSelectedIndex: undefined
    }
  },
  computed: {
    selectedIndex() {
      return this.names.indexOf(this.selected) || 0
    },
    names() {
      return this.$children.map(vm => vm.name) || 0
    }
  },
  props: {
    selected: {
      type: String
    },
    autoPlay: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    this.updateChildren()
    this.playAutomatically()
    this.childrenLength = this.$children.length

  },
  updated() {
    this.updateChildren()
  },
  methods: {
    select(index) {
      this.lastSelectedIndex = this.selectedIndex
      this.$emit("update:selected", this.names[index])
    },
    getSelected() {
      let first = this.$children[0]
      let selected = this.selected || first.name
      return selected
    },
    updateChildren() {
      //children找子组件
      this.$children.forEach((vm) => {
        vm.reverse = this.selectedIndex > this.lastSelectedIndex ? false : true
        this.$nextTick(() => {
          vm.selected = this.getSelected()
        })
      })
    },
    playAutomatically() {
      let index = this.names.indexOf(this.getSelected())
      let run = () => {
        let newIndex = index - 1
        if (newIndex === -1) {
          newIndex = this.names.length - 1
        }
        if (newIndex === this.names.length) {
          newIndex = 0
        }
        this.select(newIndex)
        setTimeout(run, 3000)
      }
      console.log(run)
      // setTimeout(run, 3000)
    }
  }
}
</script>
 <style lang="scss" scoped>
.g-slides {
  &-window {
    overflow: hidden;
  }
  &-wrapper {
    position: relative;
  }
  &-dots {
    > span {
      &.active {
        background: red;
      }
    }
  }
}
</style>