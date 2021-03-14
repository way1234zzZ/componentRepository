<template>
  <div class="target-container">
    <div class="chart" id="chart_right1"></div>
    <el-button type="primary" id="button" size="mini">数据筛选</el-button>
  </div>
</template>

<script>
import '@/assets/js/flexible'
var echarts = require('echarts/lib/echarts');
export default {
  name: 'targetCapacity',
  data() {
    return {
      //show: false,
      //timer: null,  
      targetChart: null
    }
  },
  mounted() {
    // setTimeout(() => {
    //   this.getTargetCapacity();
    // }, 20)
    this.getTargetCapacity();
    // this.timer = setInterval(() => {
    //   this.getTargetCapacity();
    // }, 5000)
    // this.targetChart.resize();

    // this.$nextTick(function () {
    //   setTimeout(() => {
    //     this.getTargetCapacity();
    //   })
    // })
    //this.$nextTick(() => { this.targetChart = resolve => require(['@/components/targetCapacity.vue'], resolve) });
  },
  methods: {
    getTargetCapacity() {
      this.targetChart = echarts.init(document.getElementById("chart_right1"));
      // this.$nextTick(() => {
      //   this.targetChart.resize();
      // })
      var targetOption = {
        tooltip: {
          trigger: 'axis',
        },
        grid: {
          top: "20%",
          left: "12%",
          right: "12%",
          bottom: "0%",
          containLabel: true
        },
        legend: {
          top: "0%",
          right: "30%",
          itemHeight: 10,
          itemWidth: 10,
          textStyle: {
            color: "rgba(255,255,255,.5)",
            fontSize: "10"
          }
        },
        xAxis: [
          {
            type: 'category',
            triggerEvent: true,
            boundaryGap: true,
            data: ['Tiktok', 'Twitter', 'Insgram', 'Weibo', 'Youtube'],
            axisTick: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: "rgba(255,255,255,.6)",
                fontSize: 10
              }
            },
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.2)"
              }
            },
          }
        ],
        yAxis: [
          {
            name: '采集容量',
            nameLocation: 'end',
            min: 0,
            max: 300,
            nameTextStyle: {
              color: '#fff',
              fontSize: 10
            },
            type: 'value',
            axisTick: {
              show: false
            },
            axisLabel: {
              formatter: '{value}MB',
              textStyle: {
                color: "rgba(255,255,255,.6)",
                fontSize: 10
              }
            },
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)"
              }
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: "rgba(255,255,255,.1)"
              }
            }
          },
          {
            type: 'value',
            name: '采集数量',
            nameTextStyle: {
              color: '#fff',
              fontSize: 10
            },
            min: 0,
            max: 500,
            interval: 50,
            axisTick: {
              show: false
            },
            axisLabel: {
              formatter: '{value} 条',
              textStyle: {
                color: "rgba(255,255,255,.6)",
                fontSize: "10"
              }
            },
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)"
              }
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: "rgba(255,255,255,.1)"
              }
            },
          }
        ],
        series: [
          {
            smooth: true,
            name: '采集容量(MB)',
            type: 'line',
            stack: '总量',
            //填充区域
            areaStyle: {
              //渐变色
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                1,
                2,
                [
                  {
                    offset: 0,
                    color: "rgba(1, 132, 213, 0.4)"//起始颜色
                  },
                  {
                    offset: 0.8,
                    color: "rgba(1, 132, 213, 0.1)"//结束颜色
                  }
                ],
                false
              ),
              shadowColor: "rgba(0, 0, 0, 0.3)"
            },
            //拐点 小圆点
            symbol: "circle",
            symbolSize: 8,
            //开始不显示拐点，鼠标经过显示
            showSymbol: true,
            //设置拐点颜色以及边框
            itemStyle: {
              color: '#0184d5',
              borderColor: "rgba(221, 220, 107, 0.1)",
              borderWidth: 12
            },
            data: [120, 132, 101, 134, 90, 230, 210],
            //单独修改当前线条的样式
            lineStyle: {
              normal: {
                color: "#084d5",
                width: "2"
              }
            }
          },
          {
            name: '采集量',
            type: 'bar',
            data: [181, 134, 190, 230, 210, 234, 245],
            itemStyle: {
              barBorderRadius: 5,
              color: "green"

            },
            barWidth: '30%',
          },
        ]
      };

      this.targetChart.setOption(targetOption, true);
      window.addEventListener('resize', () => {
        this.targetChart.resize();
      });
    },
    beforeDestroy() {
      clearInterval(this.timer);
    }
  }
}
</script>

<style scoped>
.target-container {
  position: relative;
  flex: 1;
}
.chart {
  /* position: relative; */
  height: 100%;
  /* width: 5rem; */
  /* padding-left: 1.125rem; */
}
#button {
  position: absolute;
  right: 0;
  top: 0;
}
</style>