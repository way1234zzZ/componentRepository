<template>
  <div id="chart1" class="chart">
    <h2>探针</h2>
    <div class="topBox">
      <div id="neddleNums">
        <span id="neddleNumsTitle">
          探针数量（个）
        </span>
        <span id="neddleNumber">{{ accountData.accountNum }}</span>
      </div>
      <div id="IpNums">
        <span id="IpTitle">
          IP数量（个）：
        </span>
        <span id="IpNumber">{{ accountData.ipNum }}</span>
      </div>
    </div>
    <div id="state"></div>
    <div id="hiddenDom">
      <span
        style="color: aliceblue; height: 0.22rem; margin-left: 0.2rem; font-size: 0.25rem;"
        >{{ `平均存活时长：${lifeTime}h` }}</span
      >
      <!-- <i
        class="el-icon-top"
        style="color: red;font-size: 0.3rem; font-weight: bolder;"
        onclick="trend1()"
      ></i> -->
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
import getMainpage from "@/https/mainPage.js";
export default {
  data() {
    return {
      accountData: {},
      lifeTime: 0,
      myChart: "",
      needleOption: {
        animation: true,
        series: [
          {
            type: "pie",
            center: ["50%", "35%"],
            radius: ["40%", "53%"],
            color: [
              "#F76F01",
              "#00FFFF",
              "#00FFA8",
              "#9F17FF",
              "#FFE400",
              "#F76F01",
              "#01A4F7",
              "#FE2C8A",
            ],
            startAngle: 150,
            labelLine: {
              normal: {
                length: 10,
              },
            },
            label: {
              normal: {
                formatter: "{b|{b}: }  {per|{d}%} ",
                backgroundColor: "rgba(255, 147, 38, 0)",
                borderColor: "transparent",
                borderRadius: 4,
                rich: {
                  a: {
                    color: "#999",
                    lineHeight: 22,
                    align: "center",
                  },
                  hr: {
                    borderColor: "#aaa",
                    width: "100%",
                    borderWidth: 1,
                    height: 0,
                  },
                  b: {
                    color: "#b3e5ff",
                    fontSize: 16,
                    lineHeight: 33,
                  },
                  c: {
                    fontSize: 14,
                    color: "#eee",
                  },
                  per: {
                    color: "#FDF44E",
                    fontSize: 14,
                    padding: [5, 8],
                    borderRadius: 2,
                  },
                },
                textStyle: {
                  color: "#fff",
                  fontSize: 16,
                },
              },
            },
            emphasis: {
              label: {
                show: true,
                formatter: "{b|{b}:}  {per|{d}%}  ",
                backgroundColor: "rgba(255, 147, 38, 0)",
                borderColor: "transparent",
                borderRadius: 4,
                rich: {
                  a: {
                    color: "#999",
                    lineHeight: 22,
                    align: "center",
                  },
                  hr: {
                    borderColor: "#aaa",
                    width: "100%",
                    borderWidth: 1,
                    height: 0,
                  },
                  b: {
                    color: "#fff",
                    fontSize: 18,
                    lineHeight: 33,
                  },
                  c: {
                    fontSize: 14,
                    color: "#eee",
                  },
                  per: {
                    color: "#FDF44E",
                    fontSize: 25,
                    padding: [5, 6],
                    borderRadius: 2,
                  },
                },
              },
            },
            data: [],
          },
          {
            type: "pie",
            center: ["50%", "35%"],
            radius: ["33%", "34%"],
            label: {
              show: false,
            },
            data: [
              {
                value: 78,
                name: "实例1",
                itemStyle: {
                  normal: {
                    color: {
                      x: 0,
                      y: 0,
                      x2: 1,
                      y2: 0,
                      type: "linear",
                      global: false,
                      colorStops: [
                        {
                          offset: 0,
                          color: "#9F17FF",
                        },
                        {
                          offset: 0.2,
                          color: "#01A4F7",
                        },
                        {
                          offset: 0.5,
                          color: "#FE2C8A",
                        },
                        {
                          offset: 0.8,
                          color: "#FEE449",
                        },
                        {
                          offset: 1,
                          color: "#00FFA8",
                        },
                      ],
                    },
                  },
                },
              },
            ],
          },
        ],
      },
    };
  },
  methods: {
    initChart() {
      getMainpage.getAccount().then((response) => {
        this.accountData = response.data;
        this.$set(this.needleOption.series[0], "data", [
          {
            name: "活跃探针",
            value: this.accountData.activeAccount,
          },
          {
            name: "失效探针",
            value: this.accountData.invalidAccount,
          },
        ]);
        this.myChart = echarts.init(document.getElementById("state"));
        this.myChart.setOption(this.needleOption);
        window.addEventListener("resize", () => {
          this.myChart.resize();
        });
      });
    },
  },
  mounted() {
    this.initChart();
    getMainpage.getLiveTime().then((response) => {
      this.lifeTime = response.data.liveTime;
    });
  },
  created() {},
};
</script>

<style scoped>
.chart {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
#neddleNums {
  margin: 0.125rem 0.0625rem;
  flex: 1;
}
#neddleNumber {
  color: white;
  font-size: 0.2rem;
  letter-spacing: 0.05rem;
}
#neddleNumsTitle {
  color: white;
  font-size: 0.2rem;
  letter-spacing: 0.05rem;
  padding-left: 10%;
}
#state {
  color: white;
  font-size: 0.2rem;
  letter-spacing: 0.05rem;
}
#IpNums {
  flex: 1;
  margin: 0.125rem 0.0625rem;
}
#IpTitle {
  color: white;
  font-size: 0.2rem;
  letter-spacing: 0.05rem;
  padding-left: 10%;
}
#IpNumber {
  color: white;
  font-size: 0.2rem;
  letter-spacing: 0.05rem;
}
#state {
  flex: 1;
  width: 100%;
  position: relative;
}
#hiddenDom {
  position: absolute;
  bottom: 5%;
  right: 3%;
}
</style>
