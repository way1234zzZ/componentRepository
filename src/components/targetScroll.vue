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
          <li v-for="(item, index) in leftContents" :key="index">
            <span v-text="item.aim"></span>
            <span v-text="item.type"></span>
            <span v-text="item.capacity"></span>
            <span v-text="item.number"></span>
            <span v-text="item.probe"></span>
            <span v-text="item.task"></span>
          </li>
        </ul>
      </vue-seamless-scroll>
    </div>
  </div>
</template>

<script>
import vueSeamlessScroll from "vue-seamless-scroll";
export default {
  computed: {
    optionSetting() {
      return {
        step: 1, // 数值越大速度滚动越快
        limitMoveNum: 2, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 0, // 单步运动停止的时间(默认值1000ms)
      };
    },
  },
  data() {
    return {
      title: [
        "目标系统",
        "类型",
        "采集容量(MB)",
        "采集数量(条)",
        "探针数(个)",
        "当前任务数(个)",
      ],
      leftContents: [
        {
          aim: "Twitter",
          type: "应用",
          capacity: 78,
          number: 546,
          probe: 45,
          task: 74,
        },
        {
          aim: "YouTube",
          type: "B/S",
          capacity: 43,
          number: 664,
          probe: 23,
          task: 6,
        },
        {
          aim: "Google",
          type: "B/S",
          capacity: 34,
          number: 654,
          probe: 99,
          task: 90,
        },
        {
          aim: "TikTok",
          type: "应用",
          capacity: 32,
          number: 53,
          probe: 12,
          task: 4,
        },
        {
          aim: "instagram",
          type: "B/S",
          capacity: 5654,
          number: 4565,
          probe: 6644,
          task: 568,
        },
        {
          aim: "weibo",
          type: "B/S",
          capacity: 43,
          number: 55,
          probe: 48,
          task: 208,
        },
      ],
    };
  },
  components: {
    vueSeamlessScroll,
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
  margin-top: 0.1875rem;
}
.demonstration span {
  float: left;
  color: #fff;
  padding-top: 5px;
  font-size: 16px;
  text-align: center;
  font-family: "KaiTi";
}
.demonstration span:nth-child(1) {
  height: 100%;
  width: 17%;
}
.demonstration span:nth-child(2) {
  height: 100%;
  width: 16%;
}
.demonstration span:nth-child(3) {
  height: 100%;
  width: 17%;
}
.demonstration span:nth-child(4) {
  height: 100%;
  width: 16%;
}
.demonstration span:nth-child(5) {
  height: 100%;
  width: 17%;
}
.demonstration span:nth-child(6) {
  height: 100%;
  width: 17%;
}
.leftContents {
  height: 1.3rem;
  line-height: 0.3rem;
  overflow: hidden;
}
.item span {
  float: left;
  color: #fff;
  padding-top: 0.1875rem;
  font-size: 0.1875rem;
  text-align: center;
  font-family: "YouYuan";
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item span:nth-child(1) {
  width: 17%;
}
.item span:nth-child(2) {
  width: 16%;
}
.item span:nth-child(3) {
  width: 17%;
}
.item span:nth-child(4) {
  width: 16%;
}
.item span:nth-child(5) {
  width: 17%;
}
.item span:nth-child(6) {
  width: 17%;
}
</style>
