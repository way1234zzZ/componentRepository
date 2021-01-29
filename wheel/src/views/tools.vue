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

      <div style="border: 1px solid black">
        <g-row>
          <!-- span="2"此处的2是字符串不是数字 -->
          <g-col span="2">1</g-col>
          <!--外面的引号是css的引号，里面的单引号是js的引号，这里的2就是字符串 也可以双引号在里面，单引号在外面或者用反引号-->
          <!-- <g-col ：span="'2'"></g-col> -->
          <g-col span="20" :offset="2">2</g-col>
        </g-row>
        <g-row>
          <g-col span="4">3</g-col>
        </g-row>
        <g-row gutter="20">
          <!-- 默认phone样式 -->
          <g-col span="24" :pc="{span:4}" :narrowPc="{span:2}" :widePc="{span:1}">1</g-col>
          <g-col span="24" :pc="{span:20}" :narrowPc="{span:22}" :widePc="{span:23}">2</g-col>
        </g-row>
        <g-row gutter="20">
          <g-col>1</g-col>
          <g-col>2</g-col>
        </g-row>
      </div>

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
    <button @click="showToast">click</button>
    <router-view />
  </div>

</template>

<script>
import gButton from '@/components/button.vue'
import buttonGroup from '@/components/button-group.vue'
import gInput from '@/components/input.vue'
import gRow from '@/components/row.vue'
import gCol from '@/components/col.vue'
//import gToast from '@/components/toast.vue'
export default {
  name: 'tools',
  components: {
    gButton,
    buttonGroup,
    gInput,
    gRow,
    gCol,
    //gToast
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
  created() {
    // this.$toast("我是message")
  },
  methods: {
    //xy说明形参可以随便取
    // inputchange(xxxxx, yyyyy) {
    //   console.log(xxxxx.target.value);
    //   console.log(yyyyy)

    // }

    showToast() {
      this.$toast("<strong>当前功能不稳定</strong>", {
        enableHtml: true,
        position: 'bottom',
        autoClose: false,
        closeButton: {
          text: '知道了',
          callBack: () => {
            console.log('用户说他知道了')
          }
        }
      })
    }
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
