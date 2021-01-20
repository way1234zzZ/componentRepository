<template>
  <div class="box">
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

      <g-row>
        <!-- span="2"此处的2是字符串不是数字 -->
        <g-col span="2"></g-col>
        <!--外面的引号是css的引号，里面的单引号是js的引号，这里的2就是字符串 也可以双引号在里面，单引号在外面或者用反引号-->
        <!-- <g-col ：span="'2'"></g-col> -->
        <g-col span="20" :offset="2"></g-col>
      </g-row>
    </div>

    <div class="box">
      <g-input value="王" v-model="message"></g-input>
      <p>{{message}}</p>
      <button @click="message+=1">+1</button>
    </div>
    <div class="box">
      <g-input value="张三"></g-input>
      <!-- 如果不加冒号 disabled绑定的是字符串不是变量 -->
      <g-input value="李四" :disabled="true" :readonly="true"></g-input>
      <g-input value="李四" readonly></g-input>
      <g-input value="李四" disabled></g-input>
    </div>
  </div>

</template>

<script>
import gButton from '@/components/button.vue'
import buttonGroup from '@/components/button-group.vue'
import gInput from '@/components/input.vue'
import gRow from '@/components/row.vue'
import gCol from '@/components/col.vue'
export default {
  components: {
    gButton,
    buttonGroup,
    gInput,
    gRow,
    gCol
  },
  data() {
    return {
      // iconName: 'settings'
      flag: true,
      message: 'hi'
    }
  },
  mounted() {
    // console.log(this.$el.children)
    //防止用户在button外面包了div button-group的css选择器不起效
    for (let node of this.$el.children) {
      //nodeName都是大写
      //console.log(node.nodeName)
      if (node.nodeName.toLowerCase() !== 'button') {
        console.warn(`g-button-group的子元素应该全是g-button，但是你写的是${node.nodeName.toLowerCase()}`)
      }
    }
  },
  methods: {
    //xy说明形参可以随便取
    // inputchange(xxxxx, yyyyy) {
    //   console.log(xxxxx.target.value);
    //   console.log(yyyyy)

    // }
  }
}
</script>
<style scoped>
#app {
  margin: 20px;
}
.box {
  margin: 20px;
}
</style>
