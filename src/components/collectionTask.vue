<template>
  <div id="scrollArea" class="block">
    <h2>采集任务（个）：{{ dataNums.task }}</h2>
    <div id="scrollFlow" ref="scrollFlow">
      <div class="demonstration" ref="demonstration">
        <span v-for="(item, index) in title" :key="index" class="titles">{{
          item
        }}</span>
      </div>
      <div class="seamless-warp">
        <vue-seamless-scroll
          :data="rightContents"
          :class-option="optionSetting"
          class="rightContents"
          ref="seamless"
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
    };
  },
  methods: {
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
  mounted() {
    this.initChart();
  },
  watch: {
    computedSelected() {
      this.initChart();
    },
  },
};
</script>

<style scoped>
h2 {
  position: relative;
  height: 0.5rem;
  top: 0.05rem;
  left: 0.2rem;
  line-height: 0.5rem;
  color: #fff;
  font-size: 0.25rem;
  font-weight: 400;
  width: 50%;
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
.titles:nth-child(1),
.titles:nth-child(2) {
  text-align: left;
}
.seamless-warp {
  flex: 1;
}
.rightContents {
  height: 3.125rem;
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
  font-size: 0.1875rem;
  text-align: center;
  font-family: "YouYuan";
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.itemLi span:nth-child(1),
.itemLi span:nth-child(2) {
  text-align: left;
}
</style>
