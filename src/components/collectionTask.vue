<template>
  <div id="scrollArea" class="block">
    <div class="title">
      <h2>采集任务（个）：{{ dataNums.task }}</h2>
      <span>正在运行的任务数：{{ this.activeCount }}个</span>
      <el-switch
        v-model="activeTask"
        active-text="正在运行的任务"
        active-color="#13ce66"
        @change="showActiveTask"
      >
      </el-switch>
    </div>
    <div id="scrollFlow" ref="scrollFlow">
      <div class="demonstration" ref="demonstration">
        <span v-for="(item, index) in title" :key="index" class="titles">{{
          item
        }}</span>
      </div>
      <div class="seamless-warp">
        <ul class="item" v-if="!activeTask && rightContents.length <= 6">
          <li
            v-for="(item, index) in rightContents"
            :key="index"
            class="itemLi"
          >
            <span v-text="item.taskName"></span>
            <span v-text="item.projectName"></span>
            <span v-text="item.dataCapacity"></span>
            <span v-text="item.dataNum"></span>
          </li>
        </ul>
        <vue-seamless-scroll
          :data="rightContents"
          :class-option="optionSetting"
          class="rightContents"
          ref="seamless"
          v-if="!activeTask && rightContents.length > 6"
        >
          <ul class="item">
            <li
              v-for="(item, index) in rightContents"
              :key="index"
              class="itemLi"
            >
              <span v-text="item.taskName"></span>
              <span v-text="item.projectName"></span>
              <span v-text="item.dataCapacity"></span>
              <span v-text="item.dataNum"></span>
            </li>
          </ul>
        </vue-seamless-scroll>
        <ul class="item active" v-if="activeTask && activeTasks.length <= 6">
          <li v-for="(item, index) in activeTasks" :key="index" class="itemLi">
            <span v-text="item.taskName"></span>
            <span v-text="item.projectName"></span>
            <span v-text="item.cap"></span>
            <span v-text="item.num"></span>
          </li>
        </ul>
        <vue-seamless-scroll
          :data="rightContents"
          :class-option="optionSetting"
          class="rightContents"
          ref="seamless"
          v-if="activeTask && activeTasks.length > 6"
        >
          <ul class="item active">
            <li
              v-for="(item, index) in activeTasks"
              :key="index"
              class="itemLi"
            >
              <span v-text="item.taskName"></span>
              <span v-text="item.projectName"></span>
              <span v-text="item.dataCapacity"></span>
              <span v-text="item.dataNum"></span>
            </li>
          </ul>
        </vue-seamless-scroll>
      </div>
    </div>
  </div>
</template>

<script>
import vueSeamlessScroll from "vue-seamless-scroll";
import getMainpage from "@/https/mainPage.js";
import countryMap from "@/assets/json/countryMap.json";
export default {
  computed: {
    optionSetting() {
      return {
        step: 0.1, // 数值越大速度滚动越快
        limitMoveNum: 2, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 0, // 单步运动停止的时间(默认值1000ms)
      };
    },
    computedSelected() {
      return this.selected();
    },
  },
  inject: ["selected"],
  data() {
    return {
      activeTask: false,
      activeCount: undefined,
      dataNums: [],
      title: ["任务名称", "目标系统", "数据容量(MB)", "数据数量(条)"],
      numTemp: {
        全球: 455221,
        美国: 74574,
        日本: 45585,
        英国: 15523,
        澳大利亚: 55540,
        中国: 74553,
      },
      rightContents: [],
      activeTasks: [],
    };
  },
  methods: {
    async showActiveTask() {
      if (this.activeTask) {
        let res = await getMainpage.getRunningTask(
          countryMap[this.selected()],
          ""
        );
        this.activeTasks = res.data;
      } else {
        this.initChart();
      }
    },
    initChart() {
      getMainpage.getTasks(countryMap[this.selected()]).then((response) => {
        this.rightContents = response.data;
      });
      getMainpage
        .getNumCapTask(countryMap[this.selected()])
        .then((response) => {
          this.dataNums = response.data;
        });
    },
  },
  // components: {
  //   vueSeamlessScroll,
  // },
  async mounted() {
    this.initChart();
  },
  async created() {
    let res = await getMainpage.getRunningCount(
      countryMap[this.selected()],
      ""
    );
    this.activeCount = res.data.cou;
  },
  watch: {
    computedSelected() {
      this.initChart();
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  //padding-top: 0.05rem;
  color: #fff;
  .el-switch /deep/ .el-switch__label * {
    color: #fff;
  }
}
h2 {
  position: relative;
  left: 0.2rem;
  line-height: 0.5rem;
  color: #fff;
  font-size: 0.25rem;
  font-weight: 400;
}
#scrollArea {
  height: 100%;
  display: flex;
  flex-direction: column;
}
#scrollFlow {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.demonstration {
  display: flex;
  justify-content: center;
  align-items: center;
}
.titles {
  flex: 1;
  text-align: center;
  color: #fff;
  padding-top: 5px;
  font-size: 16px;
  font-family: "KaiTi";
}

.titles:nth-child(1) {
  flex: 2;
}
.titles:nth-child(1),
.titles:nth-child(2) {
  text-align: left;
}
.seamless-warp {
  flex: 1;
}
.rightContents {
  height: 3.12rem;
  line-height: 0.3rem;
  overflow: hidden;
}
.itemLi {
  display: flex;
}
.itemLi span {
  flex: 1;
  color: #fff;
  padding-top: 0.1875rem;
  font-size: 15px;
  line-height: 0.3rem;
  text-align: center;
  font-family: "YouYuan";
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.itemLi span:nth-child(1) {
  flex: 2;
}
.itemLi span:nth-child(1),
.itemLi span:nth-child(2) {
  text-align: left;
}
</style>
