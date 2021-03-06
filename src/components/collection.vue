<template>
  <div class="Collection-container">
    <div class="chart" id="chart_middle2"></div>
  </div>
</template>

<script>
import '@/assets/js/flexible'
var echarts = require('echarts/lib/echarts');
export default {
  name: 'collection',
  data() {
    return {
      show: false,
      //timer: null
    }
  },
  mounted() {
    //this.getCollection();
    // this.$nextTick(function () {
    //   setTimeout(() => {
    //     this.getCollection();
    //   })
    // })
    this.getCollection();
    this.timer = setInterval(() => {
      this.getCollection();
    }, 5000)
  },
  methods: {
    getCollection() {
      var myChart = echarts.init(document.getElementById('chart_middle2'));
      var option = {
        color: ['#4c9bfd', '#40ff00'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        legend: {
          top: "10%",
          right: "30%",
          itemHeight: 10,
          itemWidth: 10,
          textStyle: {
            color: "rgba(255,255,255,.5)",
            fontSize: "10"
          }

        },
        grid: {
          top: '25%',
          bottom: 0,
          // right: '20',
          containLabel: true
        },
        xAxis: [
          {
            triggerEvent: true,
            axisLabel: {
              textStyle: {
                color: "rgba(255,255,255,.6)",
                fontSize: 11
              }
            },
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.2)",
              },

            },
            axisTick: {
              show: false
            },
            type: 'category',
            data: ['香港', '东京', '纽约', '伦敦', '墨尔本'],
            axisPointer: {
              type: 'shadow'
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
                fontSize: "11"
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
              fontSize: 11
            },

            min: 0,
            max: 250,
          },
          {
            type: 'value',
            name: '采集数量',
            nameTextStyle: {
              color: '#fff',
              fontSize: 11
            },
            min: 0,
            max: 250,
            interval: 50,
            axisTick: {
              show: false
            },
            axisLabel: {
              formatter: '{value} 条',
              textStyle: {
                color: "rgba(255,255,255,.6)",
                fontSize: "11"
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
            name: '采集容量',
            type: 'bar',
            data: [181, 134, 190, 230, 210],
            itemStyle: {
              barBorderRadius: 5,

            },
            barWidth: '50%',
          },
          {
            name: '采集量',
            type: 'line',
            //yAxisIndex: 1,
            data: [105, 102, 120, 162, 170]
          }
        ]
      };


      // 将配置项给实例
      myChart.setOption(option);
      // 坐标轴添加点击事件
      // 图表自适应
      window.addEventListener("resize", function () {
        myChart.resize();
      });

    },
    beforeDestroy() {
      clearInterval(this.timer);
    }
  }
}
</script>

<style scoped>
.chart {
  height: 3.3rem;
}
</style>