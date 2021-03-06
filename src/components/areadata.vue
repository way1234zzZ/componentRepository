<template>
  <div class="areadata-container">
    <div class="chart" id="chart_right3"></div>
    <el-button type="primary" id="button" size="mini">数据筛选</el-button>
  </div>
</template>

<script>
import '@/assets/js/flexible'
var echarts = require('echarts/lib/echarts');
export default {
  name: 'areadata',
  data() {
    return {
      areaChart: null
    }
  },
  mounted() {
    // setTimeout(() => {
    //   this.getTargetCapacity();
    // }, 20)
    this.getAreaData();
    // this.timer = setInterval(() => {
    //   this.getTargetCapacity();
    // }, 5000)
    // this.areadata.resize();

    // this.$nextTick(function () {
    //   setTimeout(() => {
    //     this.getTargetCapacity();
    //   })
    // })
    //this.$nextTick(() => { this.areadata = resolve => require(['@/components/targetCapacity.vue'], resolve) });
  },
  methods: {
    getAreaData() {
      this.areaChart = echarts.init(document.getElementById("chart_right3"));
      var areaOption = {
        tooltip: { //提示框组件
          trigger: 'axis',
          formatter: '{b}<br />{a0}: {c0}<br />{a1}: {c1}',
          axisPointer: {
            type: 'shadow',
            label: {
              backgroundColor: '#6a7985'
            }
          },
          textStyle: {
            color: '#fff',
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 15,
          }
        },
        grid: {
          left: '5%',
          right: '5%',
          bottom: '5%',
          top: '30%',
          //	padding:'0 0 10 0',
          containLabel: true,
        },
        legend: {//图例组件，颜色和名字
          right: '30%',
          top: '10%',
          itemGap: 5,
          itemWidth: 5,
          itemHeight: 5,
          data: [{
            name: '数据容量',
            //icon:'image://../wwwroot/js/url2.png', //路径
          },
          {
            name: '数据数量',
          }],
          textStyle: {
            color: '#a8aab0',
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 15,
          }
        },
        xAxis: [
          {
            type: 'category',
            triggerEvent: true,
            //	boundaryGap: true,//坐标轴两边留白
            data: ['东京', '洛杉矶', '温哥华', '新德里', '伦敦', '柏林'],
            axisLabel: { //坐标轴刻度标签的相关设置。
              //		interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
              //	margin:15,
              textStyle: {
                color: 'white',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 12,
              },
              rotate: 0,
            },
            axisTick: {//坐标轴刻度相关设置。
              show: false,
            },
            axisLine: {//坐标轴轴线相关设置
              lineStyle: {
                color: '#fff',
                opacity: 0.2
              }
            },
            splitLine: { //坐标轴在 grid 区域中的分隔线。
              show: false,
            }
          }
        ],
        yAxis: [
          {
            axisTick: {
              show: false
            },
            axisLabel: {
              formatter: '{value} MB',
              textStyle: {
                color: "rgba(255,255,255,.6)",
                fontSize: "12"
              }
            },
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)",

              }
            },
            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)"
              }
            },
            type: 'value',
            name: '采集容量',
            nameTextStyle: {
              color: '#fff',
              fontSize: 15
            },

            min: 0,
            max: 250,
          },
          {
            type: 'value',
            name: '采集数量',
            nameTextStyle: {
              color: '#fff',
              fontSize: 15
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
                fontSize: "8"
              }
            },
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)"
              }
            },
            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)"
              }
            },
          }
        ],
        series: [
          {
            name: '数据容量',
            type: 'bar',
            data: [100, 150, 165, 170, 200, 230],
            barWidth: 10,
            barGap: 10,//柱间距离
            // label: {//图形上的文本标签
            //     normal: {
            //       show: true,
            //       position: 'top',
            //       textStyle: {
            //           color: '#a8aab0',
            //           fontStyle: 'normal',
            //           fontFamily: '微软雅黑',
            //           fontSize: 12,   
            //       },
            //     },
            // },
            itemStyle: {
              normal: {
                show: true,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#5768EF'
                }, {
                  offset: 1,
                  color: '#5768EF'
                }]),
                barBorderRadius: 50,
                borderWidth: 0,
              }
            },
          },
          {
            name: '数据数量',
            type: 'bar',
            data: [80, 150, 250, 300, 350, 450],
            barWidth: 10,
            barGap: 0,//柱间距离
            // label: {//图形上的文本标签
            //     normal: {
            //       show: true,
            //       position: 'top',
            //       textStyle: {
            //           color: '#a8aab0',
            //           fontStyle: 'normal',
            //           fontFamily: '微软雅黑',
            //           fontSize: 12,   
            //       },
            //     },
            // },
            itemStyle: {
              normal: {
                show: true,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#69CBF2'
                }, {
                  offset: 1,
                  color: '#69CBF2'
                }]),
                barBorderRadius: 50,
                borderWidth: 0,
              }
            },
          }
        ]
      };
      this.areaChart.setOption(areaOption, true);
      window.addEventListener("resize", () => {
        this.areaChart.resize();
      });
    },
  }
}
</script>

<style scoped>
.areadata-container {
  position: relative;
}
.chart {
  /* position: relative; */
  height: 3.5rem;
  /* width: 5rem; */
  /* padding-left: 1.125rem; */
}
#button {
  position: absolute;
  right: 0;
  top: 0;
}
</style>