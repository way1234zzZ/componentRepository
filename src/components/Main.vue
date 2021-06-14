<template>
  <div id="main">
    <div class="top">
      <div class="left topWrapper">
        <div class="title1">近七天采集数量</div>
        <div class="chart1" ref="taskNum"></div>
      </div>
    </div>
    <div class="bottom">
      <div class="title">14天内新增任务</div>
      <div class="chart" ref="tasks"></div>
    </div>
  </div>
</template>

<script>
var echarts = require("echarts");
import getTarget from "@/https/target.js";
export default {
  data() {
    return {
      date: [],
      count: [],
      sevenDate: [],
      sevenDate1: [],
      capData: [],
      taskNum: [],
      option1: {
        xAxis: {
          type: "category",
          axisTick: {
            interval: 0,
            alignWithLabel: true,
          },
          axisLine: {
            lineStyle: {
              color: "#ffffff",
            },
          },
          data: [],
        },
        grid: {
          top: "30%",
          bottom: 30,
        },
        yAxis: {
          type: "value",
          scale: true,
          splitLine: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              color: "#ffffff",
            },
          },
        },
        series: [
          {
            lineStyle: {
              color: "rgb(51, 153, 255)",
              width: 4,
            },
            data: [],
            smooth: 0.8,
            type: "line",
          },
        ],
      },
      option3: {
        color: ["#ff8000", "#999966"],
        itemStyle: {
          barBorderRadius: 3,
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
          },
        },
        grid: {
          right: "10%",
          top: "30%",
          bottom: 40,
        },
        xAxis: {
          type: "category",
          axisTick: {
            show: true,
            alignWithLabel: true,
            interval: 0,
          },
          axisLine: {
            lineStyle: {
              color: "#ffffff",
            },
          },
          data: [],
        },

        yAxis: {
          scale: true,
          type: "value",
          name: "采集数量(条)",
          position: "left",
          axisLine: {
            lineStyle: {
              color: "#ffffff",
            },
          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            fontsize: 10,
            formatter: "{value}",
          },
        },

        series: [
          {
            name: "数据量",
            type: "bar",
            barWidth: "50%",
            data: [],
            itemStyle: {
              color: "rgba(236, 126, 48 ,1)",
              barBorderRadius: [7, 7, 0, 0],
            },
          },
        ],
      },
    };
  },
  methods: {},
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
  },
  mounted() {
    var myChart1 = echarts.init(this.$refs.tasks);
    getTarget
      .getNewTask(this.$route.params.country, this.$route.params.project)
      .then((res) => {
        res.data.forEach((item) => {
          this.date.push(item.sDate);
          this.count.push(item.count);
        });
        this.date.reverse();
        this.count.reverse();
        this.$set(this.option1.xAxis, "data", this.date);
        this.$set(this.option1.series[0], "data", this.count);
        myChart1.setOption(this.option1);
        window.addEventListener("resize", function() {
          myChart1.resize();
        });
      });
    var myChart3 = echarts.init(this.$refs.taskNum);
    getTarget
      .getCollectionNum(this.$route.params.country, this.$route.params.project)
      .then((res) => {
        res.data.forEach((item) => {
          this.taskNum.push(item.num);
          this.sevenDate1.push(item.sDate);
        });
        this.taskNum.reverse();
        this.sevenDate1.reverse();
        this.$set(this.option3.series[0], "data", this.taskNum);
        this.$set(this.option3.xAxis, "data", this.sevenDate1);
        myChart3.setOption(this.option3);
        window.addEventListener("resize", function() {
          myChart3.resize();
        });
      });
  },
};
</script>

<style lang="scss" scoped>
#main {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  .top {
    flex: 1;
    display: flex;
    gap: 5px;
    .topWrapper {
      position: relative;
      .chart1 {
        height: 100%;
      }
      .title1 {
        position: absolute;
        font-size: 23px;
        height: 0.25rem;
        color: #fff;
        display: flex;
        align-items: center;
        right: 0.25rem;
        top: 0.3125rem;
      }
    }
    .left {
      flex: 1;
      border: 2px solid rgba(20, 20, 20, 1);
    }
  }
  .bottom {
    flex: 1;
    border: 2px solid rgba(20, 20, 20, 1);
    position: relative;
    .chart {
      height: 95%;
    }
    .title {
      position: absolute;
      font-size: 25px;
      height: 0.25rem;
      color: #fff;
      display: flex;
      align-items: center;
      right: 0.25rem;
      top: 0.3125rem;
    }
  }
}
</style>
