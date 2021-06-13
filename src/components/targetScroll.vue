<template>
  <div id="scrollArea">
    <div id="scrollFlow">
      <div class="scrollTitle">
        <span>目标系统</span>
      </div>
      <ul class="demonstration">
        <span v-for="(item, index) in title" :key="index">{{ item }}</span>
      </ul>
      <vue-seamless-scroll
        :data="leftContents"
        class="leftContents"
        :class-option="optionSetting"
      >
        <ul class="item">
          <li v-for="(item, index) in leftContents" :key="index" class="itemLi">
            <span v-text="item.projectname" @click="goToTarget(item)"></span>
            <span v-text="item.capacity"></span>
            <span v-text="item.num"></span>
            <span v-text="item.count_account"></span>
            <span v-text="item.count_task"></span>
          </li>
        </ul>
      </vue-seamless-scroll>
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
      title: [
        "目标系统",
        "采集容量(MB)",
        "采集数量(条)",
        "探针数(个)",
        "当前任务数(个)",
      ],
      leftContents: [],
    };
  },
  components: {
    vueSeamlessScroll,
  },
  methods: {
    initChart() {
      getMainpage
        .getProjects(countryMap[this.selected()])
        .then((response) => {
          this.leftContents = response.data;
        })
        .catch(() => {
          console.log("error");
        });
    },
    goToTarget(item) {
      this.$router.push(
        `/target/${countryMap[this.selected()]}/${item.projectname}`
      );
    },
  },
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
#scrollArea {
  position: absolute;
  height: 2.375rem;
  width: 90%;
  bottom: 2%;
  margin-left: 0.6875rem;
  margin-right: auto;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(25, 186, 139, 0.17);
}
#scrollArea::before {
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  width: 0.375rem;
  height: 0.1875rem;
  border-top: 0.025rem solid #5d99c4;
  border-left: 0.025rem solid #5d99c4;
}
#scrollArea::after {
  position: absolute;
  bottom: 0;
  right: 0;
  content: "";
  width: 0.375rem;
  height: 0.1875rem;
  border-bottom: 0.025rem solid #5d99c4;
  border-right: 0.025rem solid #5d99c4;
}
.scrollTitle {
  padding-top: 0.125rem;
  padding-left: 0.1875rem;
}
.scrollTitle span {
  font-size: 0.3125rem;
  font-weight: bold;
  color: #fff;
  letter-spacing: 0.0625rem;
}
.demonstration {
  height: 0.35rem;
  display: flex;
  margin-top: 0.1875rem;
}
.demonstration span {
  flex: 1;
  color: #fff;
  padding-top: 5px;
  font-size: 16px;
  text-align: center;
  font-family: "KaiTi";
}
.leftContents {
  height: 1.3rem;
  line-height: 0.3rem;
  overflow: hidden;
}
.itemLi {
  display: flex;
}
.item span {
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
</style>
