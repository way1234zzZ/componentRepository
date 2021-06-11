<template>
  <div id="main">
    <div class="panel left">
      <div class="chart-title">当前任务数</div>
      <div id="task-num" class="chart-content" ref="tasknum"></div>
    </div>
    <div class="panel right">
      <div class="chart-title">采集数量与容量</div>
      <div id="collection" class="chart-content"></div>
    </div>
    <div class="panel left">
      <div class="chart-title">探针状态</div>
      <div id="probe1" class="chart-content"></div>
    </div>
    <div class="panel right">
      <div class="chart-title">服务器采集数量与容量</div>
      <div id="ser-cap-num" class="chart-content"></div>
    </div>
    <div class="panel left">
      <div id="ipt-title">
        <span>ip</span>
        <span>探针数(个)</span>
        <span>任务数(个)</span>
      </div>
      <div id="ipt-rotation">
        <vue-seamless-scroll
          :data="listData"
          :class-option="optionSetting"
          class="seamless-warp-main"
        >
          <ul class="item">
            <li
              :key="item + index"
              v-for="(item, index) in listData"
              class="itemLi"
            >
              <span v-text="item.ip"></span>
              <span v-text="item.probe"></span>
              <span v-text="item.task"></span>
            </li>
          </ul>
        </vue-seamless-scroll>
      </div>
    </div>
    <div class="panel right">
      <div class="chart-title">对抗验证码成功趋势</div>
      <div id="combat" class="chart-content"></div>
    </div>
  </div>
</template>

<script>
var echarts = require("echarts");
export default {
  data() {
    return {
      listData: [
        {
          ip: "147.154.3.5",
          probe: 4145,
          task: 1012,
        },
        {
          ip: "158.14.31.52",
          probe: 345,
          task: 412,
        },
        {
          ip: "198.164.3.5",
          probe: 46545,
          task: 1612,
        },
        {
          ip: "66.154.35.50",
          probe: 4145,
          task: 1012,
        },
        {
          ip: "234.5.3.5",
          probe: 65,
          task: 11,
        },
        {
          ip: "77.15.54.22",
          probe: 55,
          task: 412,
        },
        {
          ip: "6.54.3.5",
          probe: 455,
          task: 512,
        },
        {
          ip: "89.154.3.5",
          probe: 77,
          task: 2,
        },
        {
          ip: "78.10.3.5",
          probe: 4534,
          task: 112,
        },
        {
          ip: "98.154.3.5",
          probe: 545,
          task: 133,
        },
        {
          ip: "76.14.3.5",
          probe: 90,
          task: 65,
        },
        {
          ip: "62.154.5.5",
          probe: 555,
          task: 33,
        },
        {
          ip: "255.154.3.5",
          probe: 5,
          task: 52,
        },
      ],
      option1: {
        xAxis: {
          type: "category",
          axisLine: {
            lineStyle: {
              color: "#ffffff",
            },
          },
          data: ["一月", "二月", "三月", "四月", "五月", "六月", "七月"],
        },
        grid: {
          top: 20,
          bottom: 30,
        },
        yAxis: {
          type: "value",
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
              color: "#4dd2ff",
              width: 3,
            },
            data: [
              452,
              932,
              901,
              934,
              6224,
              1330,
              1320,
              456,
              441,
              985,
              301,
              1411,
            ],
            smooth: 0.8,
            type: "line",
          },
        ],
      },
      option2: {
        color: ["#00ccff", "#009933"],
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
          top: 30,
          bottom: 30,
        },
        legend: {
          data: ["采集容量", "采集数量"],
          top: 2,
          textStyle: {
            color: "#ffffff",
          },
        },
        xAxis: [
          {
            type: "category",
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              lineStyle: {
                color: "#ffffff",
              },
            },
            data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "采集容量(TB)",
            min: 0,
            max: 250,
            position: "left",
            axisLine: {
              lineStyle: {
                color: "#00ccff",
              },
            },
            axisLabel: {
              fontsize: 10,
              formatter: "{value}",
            },
          },
          {
            type: "value",
            name: "采集数量(条)",
            min: 0,
            max: 250,
            position: "right",
            axisLine: {
              lineStyle: {
                color: "#009933",
              },
            },
            axisLabel: {
              fontsize: 10,
              formatter: "{value}",
            },
          },
        ],
        series: [
          {
            name: "采集容量",
            type: "bar",
            data: [54, 35, 15, 200, 21, 74, 40, 44, 45, 47, 225, 90],
          },
          {
            name: "采集数量",
            type: "bar",
            yAxisIndex: 1,
            data: [50, 114, 44, 202, 246, 77, 144, 174, 145, 41, 64, 44],
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
          top: 30,
          bottom: 30,
        },
        legend: {
          data: ["数据量", "数据容量"],
          top: 2,
          textStyle: {
            color: "#ffffff",
          },
        },
        xAxis: [
          {
            type: "category",
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              lineStyle: {
                color: "#ffffff",
              },
            },
            data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "数据量(条)",
            min: 0,
            max: 250,
            position: "left",
            axisLine: {
              lineStyle: {
                color: "#ff8000",
              },
            },
            axisLabel: {
              fontsize: 10,
              formatter: "{value}",
            },
          },
          {
            type: "value",
            name: "数据容量(TB)",
            min: 0,
            max: 250,
            position: "right",
            axisLine: {
              lineStyle: {
                color: "#999966",
              },
            },
            axisLabel: {
              fontsize: 10,
              formatter: "{value}",
            },
          },
        ],
        series: [
          {
            name: "数据量",
            type: "bar",
            data: [
              5.0,
              4.9,
              117.0,
              23.2,
              25.6,
              76.7,
              135.6,
              162.2,
              32.6,
              20.0,
              6.4,
              3.3,
            ],
          },
          {
            name: "数据容量",
            type: "bar",
            yAxisIndex: 1,
            data: [
              412.6,
              115.9,
              9.0,
              26.4,
              28.7,
              70.7,
              175.6,
              182.2,
              48.7,
              18.8,
              16.0,
              42.3,
            ],
          },
        ],
      },
      option4: {
        title: {
          x: "center",
          y: "center",
          textStyle: {
            color: "#fff",
          },
        },
        tooltip: {
          trigger: "item",
          borderColor: "rgba(255,255,255,.3)",
          // backgroundColor: "rgba(13,5,30,.6)",
          borderWidth: 1,
          padding: 5,
          formatter: function(parms) {
            var str =
              parms.marker +
              "" +
              parms.data.name +
              "</br>" +
              "数量：" +
              parms.data.value +
              "个</br>" +
              "占比：" +
              parms.percent +
              "%";
            return str;
          },
        },
        series: [
          {
            type: "pie",
            z: 3,
            center: ["50%", "50%"],
            radius: ["45%", "75%"],
            clockwise: true,
            avoidLabelOverlap: true,
            hoverOffset: 15,
            itemStyle: {
              normal: {
                color: function(params) {
                  let colorList = ["green", "red", "#33ccff"];
                  return colorList[params.dataIndex];
                },
              },
            },
            label: {
              show: true,
              position: "outside",
              formatter: "{a|{b}：{d}%}\n{hr|}",
              rich: {
                hr: {
                  backgroundColor: "t",
                  borderRadius: 3,
                  width: 3,
                  height: 3,
                  padding: [3, 3, 0, -12],
                },
                a: {
                  padding: [-30, 15, -20, 15],
                },
              },
            },
            labelLine: {
              normal: {
                length: 20,
                length2: 30,
                lineStyle: {
                  width: 1,
                },
              },
            },
            data: [
              {
                name: "空闲",
                value: "800",
              },
              {
                name: "失效",
                value: "3650",
              },
              {
                name: "活跃",
                value: "10000",
              },
            ],
          },
          {
            name: "第一层环",
            type: "pie",
            z: 2,
            tooltip: {
              show: false,
            },
            center: ["50%", "50%"],
            radius: ["45%", "58%"],
            hoverAnimation: false,
            clockWise: false,
            itemStyle: {
              normal: {
                // shadowBlur: 40,
                // shadowColor: 'rgba(0, 255, 255,.3)',
                color: "rgba(1,15,80,.4)",
              },
              emphasis: {
                color: "rgba(1,15,80,.4)",
              },
            },
            label: {
              show: false,
            },
            data: [100],
          },
          {
            name: "第二层环",
            type: "pie",
            z: 1,
            tooltip: {
              show: false,
            },
            center: ["50%", "50%"],
            radius: ["58%", "76%"],
            hoverAnimation: false,
            clockWise: false,
            itemStyle: {
              normal: {
                // shadowBlur: 40,
                // shadowColor: 'rgba(0, 255, 255,.3)',
                color: "rgba(0,15,69,.2)",
              },
              emphasis: {
                color: "rgba(0,15,69,.2)",
              },
            },
            label: {
              show: false,
            },
            data: [100],
          },
        ],
      },
      option5: {
        color: ["#00ffff", "#ffff1a"],
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
          top: 30,
          bottom: 30,
        },
        legend: {
          data: ["对抗成功", "对抗失败"],
          top: 2,
          textStyle: {
            color: "#ffffff",
          },
        },
        xAxis: [
          {
            type: "category",
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              lineStyle: {
                color: "#ffffff",
              },
            },
            data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "对抗成功(次)",
            min: 0,
            max: 250,
            position: "left",
            axisLine: {
              lineStyle: {
                color: "#00ffff",
              },
            },
            axisLabel: {
              fontsize: 10,
              formatter: "{value}",
            },
          },
          {
            type: "value",
            name: "对抗失败(次)",
            min: 0,
            max: 250,
            position: "right",
            axisLine: {
              lineStyle: {
                color: "#ffff1a",
              },
            },
            axisLabel: {
              fontsize: 10,
              formatter: "{value}",
            },
          },
        ],
        series: [
          {
            name: "对抗成功",
            type: "bar",
            data: [
              2.0,
              4.9,
              7.0,
              23.2,
              25.6,
              76.7,
              135.6,
              162.2,
              32.6,
              20.0,
              6.4,
              3.3,
            ],
          },
          {
            name: "对抗失败",
            type: "bar",
            yAxisIndex: 1,
            data: [
              2.6,
              5.9,
              9.0,
              26.4,
              28.7,
              70.7,
              175.6,
              182.2,
              48.7,
              18.8,
              6.0,
              2.3,
            ],
          },
        ],
      },
    };
  },
  methods: {
    initChart(chart, option) {
      chart.setOption(option);
      window.addEventListener("resize", function() {
        chart.resize();
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
  mounted() {
    this.$nextTick(() => {
      /*******************当前任务数*******************/
      var myChart1 = echarts.init(this.$refs.tasknum);
      this.initChart(myChart1, this.option1);
      /********************时间维度的采集容量和数量****************************/
      var myChart2 = echarts.init(document.querySelector("#collection"));
      this.initChart(myChart2, this.option2);
      /***********************服务器数据量服务器数据容量*************************/
      var myChart3 = echarts.init(document.querySelector("#ser-cap-num"));
      this.initChart(myChart3, this.option3);
      /******************************探针情况********************************/
      var myChart4 = echarts.init(document.querySelector("#probe1"));
      this.initChart(myChart4, this.option4);
      /*************************对抗成功失败数量************************/
      var myChart5 = echarts.init(document.querySelector("#combat"));
      this.initChart(myChart5, this.option5);
    });
  },
};
</script>

<style lang="scss" scoped>
#main {
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-row-gap: 5px;
  grid-column-gap: 5px;
  .panel {
    display: flex;
    flex-direction: column;
    border: 2px solid rgba(20, 20, 20, 1);
    .chart-title {
      flex: 1;
      display: flex;
      justify-content: felx-s;
      align-items: center;
      color: #d9d9d9;
      font-size: 18px;
    }
    .chart-content {
      flex: 6;
    }
    #ipt-title {
      flex: 1;
      font-size: 16px;
      color: #33ccff;
      display: flex;
      align-items: center;
      > span {
        flex: 1;
      }
    }
    #ipt-rotation {
      flex: 6;
      .seamless-warp-main {
        height: 2.98rem;
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
    }
  }
}
</style>
