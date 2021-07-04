<template>
  <div id="main">
    <div class="top wrapper">
      <div class="title">
        <span>采集数量趋势</span>
        <el-date-picker
          v-model="value1"
          type="daterange"
          align="right"
          unlink-panels
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :picker-options="pickerOptions"
          @change="getCollectionNum"
        >
        </el-date-picker>
      </div>
      <div class="chart" ref="taskNum"></div>
    </div>
    <div class="bottom wrapper">
      <div class="title">
        <span>累计采集数量</span>
        <el-date-picker
          v-model="value2"
          type="daterange"
          align="right"
          unlink-panels
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :picker-options="pickerOptions"
          @change="getTotalCollectionNum"
        >
        </el-date-picker>
      </div>
      <div class="chart" ref="totalTasks"></div>
    </div>
  </div>
</template>

<script>
var echarts = require("echarts");
import getTarget from "@/https/target.js";
export default {
  data() {
    return {
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      value1: "",
      value2: "",
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
        tooltip: {
          trigger: "axis",
          axisPointer: {
            label: {
              show: false,
            },
            type: "cross",
          },
        },
        grid: {
          top: "10%",
          bottom: 30,
        },
        yAxis: {
          type: "value",
          name: "采集数量(条)",
          minInterval: 1,
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
            smooth: true,
            smoothMonotone: "x",
            type: "line",
          },
        ],
      },
      option2: {
        color: ["#ff8000", "#999966"],
        itemStyle: {
          barBorderRadius: 3,
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            label: {
              show: false,
            },
            type: "cross",
          },
        },
        grid: {
          right: "10%",
          top: "10%",
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
          name: "累计采集数量(条)",
          scale: true,
          type: "value",
          minInterval: 1,
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
  methods: {
    async getCollectionNum() {
      this.taskNum = [];
      this.sevenDate1 = [];
      this.initLineChart(
        this.$moment(this.value1[0]).format("YYYY-MM-DD"),
        this.$moment(this.value1[1]).format("YYYY-MM-DD"),
        this.$route.params.country,
        this.$route.params.project
      );
    },
    getTotalCollectionNum() {
      this.date = [];
      this.count = [];
      this.initBarChart(
        this.$moment(this.value2[0]).format("YYYY-MM-DD"),
        this.$moment(this.value2[1]).format("YYYY-MM-DD"),
        this.$route.params.country,
        this.$route.params.project
      );
    },
    async initLineChart(from, to, terr, project) {
      var myChart = echarts.init(this.$refs.taskNum);
      let res = await getTarget.getCollectionNum(from, to, terr, project);
      res.data.forEach((item) => {
        this.taskNum.push(item.num);
        this.sevenDate1.push(
          this.$moment(item.createtime).format("YYYY-MM-DD")
        );
      });
      this.$set(this.option1.series[0], "data", this.taskNum);
      this.$set(this.option1.xAxis, "data", this.sevenDate1);
      myChart.setOption(this.option1);
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    },
    async initBarChart(from, to, terr, project) {
      var myChart = echarts.init(this.$refs.totalTasks);
      let res = await getTarget.getSumCollectionNum(from, to, terr, project);
      res.data.forEach((item) => {
        this.count.push(item.num);
        this.date.push(this.$moment(item.createtime).format("YYYY-MM-DD"));
      });
      this.$set(this.option2.xAxis, "data", this.date);
      this.$set(this.option2.series[0], "data", this.count);
      myChart.setOption(this.option2);
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    },
  },
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
  async mounted() {
    this.initLineChart(
      "",
      "",
      this.$route.params.country,
      this.$route.params.project
    );
    this.initBarChart(
      "",
      "",
      this.$route.params.country,
      this.$route.params.project
    );
  },
};
</script>

<style lang="scss" scoped>
.el-date-editor /deep/ .el-range-separator {
  width: 10% !important;
}
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.0625rem;
  .chart {
    flex: 4;
  }
  .title {
    flex: 1;
    font-size: 25px;
    color: #fff;
    display: flex;
    gap: 0.1875rem;
    align-items: center;
  }
}
#main {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;

  .wrapper {
    flex: 1;
    border: 2px solid rgba(255, 255, 255, 0.2);
  }
}
</style>
