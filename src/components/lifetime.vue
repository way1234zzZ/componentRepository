<template>
  <div class="lifetime-container">
    <div class="chart" id="chart_middle1"></div>
    <div class="bottom">
      <span style="color: aliceblue; height: 0.22rem; margin-left: 0.2rem; font-size: 0.25rem;">平均存活时长：20h</span>
      <i class="el-icon-top" style="color: red;font-size: 0.3rem; font-weight: bolder;" @click="trend"></i>
    </div>
    <div id="trend" v-show="show"></div>
  </div>
</template>

<script>
// import '@/assets/js/flexible'
var echarts = require('echarts/lib/echarts');
export default {
  name: 'lifetime',
  data() {
    return {
      show: false,
      timer: null
    }
  },
  mounted() {
    // setTimeout(() => {
    //   this.getLifetime();
    //   this.showTrend();
    // }, 20)

    this.getLifetime();
    this.showTrend();
    this.timer = setInterval(() => {
      this.getLifetime();

    }, 5000)
    this.timer = setInterval(() => {
      this.showTrend();

    }, 5000)


    // this.timer = setInterval(() => {
    //   this.getLifetime();
    // }, 5000)
  },
  methods: {
    getLifetime() {
      var myChart = echarts.init(document.getElementById("chart_middle1"));
      var color = ['#FC4567', '#2F8DF4', '#C25EC4']
      let option = {
        color: color,
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          right: "0",
          bottom: "0",
          itemHeight: 15,
          itemWidth: 15,
          textStyle: {
            color: "white",
            fontSize: "10"
          }
        },
        // grid: {

        // },
        series: [{
          type: 'pie',
          roseType: 'radius',
          radius: ['30%', '60%'],
          data: [{
            value: 220,
            name: '活跃探针'
          }, {
            value: 120,
            name: '空闲探针'
          },
          {
            value: 189,
            name: '失效探针',
          }
          ],
          label: {
            normal: {
              formatter: '{font|{c}}\n{hr|}\n{font|{d}%}',
              rich: {
                font: {
                  fontSize: 9,
                  padding: [5, 0],
                  color: '#fff'
                },
                hr: {
                  height: 0,
                  borderWidth: 1,
                  width: '100%',
                  borderColor: '#fff'
                }
              }
            },
          },
          labelLine: {
            lineStyle: {
              color: '#fff'
            }
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0,0,0,0.5)'
            }
          }
        }]
      };
      myChart.setOption(option, true);
      window.addEventListener('resize', () => {
        myChart.resize();
      });
    },
    showTrend() {
      var myChart1 = echarts.init(document.getElementById("trend"));
      var option1 = {
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          top: "0%",
          textStyle: {
            color: "rgba(255,255,255,.5)",
            fontSize: "12"
          }

        },
        grid: {
          left: '10',
          top: "50",
          right: '40',
          bottom: '20',
          containLabel: true
        },
        xAxis: [{
          name: '日期',
          nameTextStyle: {
            color: '#fff'
          },
          type: 'category',
          boundaryGap: false,
          data: ['7月1日', '7月2日', '7月3日', '7月4日', '7月5日', '7月6日', '7月7日'],
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: "rgba(255,255,255,.6)"
            }
          },
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,.2)"
            }
          },
        }],
        yAxis: [{
          name: '存活时长',
          nameLocation: 'end',
          nameTextStyle: {
            color: '#fff'
          },
          type: 'value',
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: "12"
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
          }
        }],
        series: [{
          smooth: true,
          name: '存活时长(h)',
          type: 'line',
          stack: '总量',
          //填充区域
          areaStyle: {
            //渐变色
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [{
                offset: 0,
                color: "rgba(1, 132, 213, 0.4)" //起始颜色
              },
              {
                offset: 0.8,
                color: "rgba(1, 132, 213, 0.1)" //结束颜色
              }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          },
          //拐点 小圆点
          symbol: "circle",
          symbolSize: 8,
          //开始不显示拐点，鼠标经过显示
          showSymbol: false,
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
        },]
      };

      myChart1.setOption(option1, true);
      window.addEventListener("resize", function () {
        myChart1.resize();
      })
    },
    trend() {
      this.show = !this.show
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
}
</script>

<style scoped>
.lifetime-container {
  flex: 1;
  position: relative;
}
.bottom {
  position: absolute;
  bottom: 0;
}
.chart {
  height: 100%;
}
.el-icon-top {
  position: relative;
}
#trend {
  position: absolute;
  width: 6rem;
  height: 4rem;
  background-color: rgba(54, 54, 54, 0.9);
  left: 2.9rem;
  top: 1rem;
  z-index: 2;
}
</style>