<template>
  <div id="scrollArea" class="block">
    <div id="scrollFlow" ref="scrollFlow">
      <div class="demonstration" ref="demonstration">
        <span v-for="(item, index) in title" :key="index">{{ item }}</span>
      </div>
      <div class="seamless-warp">
        <vue-seamless-scroll
          :data="rightContents"
          :class-option="optionSetting"
          class="scroll"
          ref="seamless"
        >
          <ul class="item">
            <li v-for="(item, index) in rightContents" :key="index">
              <span v-text="item.name"></span>
              <span v-text="item.aim"></span>
              <span v-text="item.count"></span>
              <span v-text="item.num"></span>
            </li>
          </ul>
        </vue-seamless-scroll>
      </div>
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
      title: ["任务名称", "目标系统", "数据容量(TB)", "数据数量(条)"],
      numTemp: {
        全球: 455221,
        美国: 74574,
        日本: 45585,
        英国: 15523,
        澳大利亚: 55540,
        中国: 74553,
      },
      rightContents: [
        {
          name: "a3123",
          aim: "instagram",
          count: "4545",
          num: "45462",
        },
        {
          name: "v4562",
          aim: "weibo",
          count: "343",
          num: "32",
        },
        {
          name: "f7548",
          aim: "youtube",
          count: "233",
          num: "5462",
        },
        {
          name: "s1477",
          aim: "zhihu",
          count: "34553",
          num: "12544",
        },
        {
          name: "z4552",
          aim: "instagram",
          count: "7411",
          num: "1457",
        },
        {
          name: "p6564",
          aim: "tiktok",
          count: "45455",
          num: "145",
        },
        {
          name: "q4155",
          aim: "google",
          count: "74",
          num: "4152",
        },
        {
          name: "p1123",
          aim: "weibo",
          count: "3743",
          num: "342",
        },
      ],
    };
  },
  // components: {
  //   vueSeamlessScroll,
  // },
};
</script>

<style scoped>
#scrollArea {
  height: 100%;
}
#scrollFlow {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.scrollTitle {
  color: white;
  font-size: 0.2rem;
  letter-spacing: 0.05rem;
}
.scrollTitle span {
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
  width: 25%;
}
.demonstration span:nth-child(2) {
  height: 100%;
  width: 25%;
}
.demonstration span:nth-child(3) {
  height: 100%;
  width: 25%;
}
.demonstration span:nth-child(4) {
  height: 100%;
  width: 25%;
}
.rightContents {
  /* flex: 1; */
  height: 2.4125rem;
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
  overflow: hidden;
  text-overflow: ellipsis;
}
.item span:nth-child(1) {
  width: 25%;
}
.item span:nth-child(2) {
  width: 25%;
}
.item span:nth-child(3) {
  width: 25%;
}
.item span:nth-child(4) {
  width: 25%;
}
.seamless-warp {
  flex: 1;
  overflow: hidden;
}
.scroll {
  height: 2.5rem;
}
</style>
