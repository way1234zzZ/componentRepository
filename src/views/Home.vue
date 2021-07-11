<template>
  <el-container id="mainpage">
    <el-header>
      <img src="../../public/top_title.png" />
    </el-header>
    <el-container class="mainbox">
      <el-aside>
        <div id="earth"></div>
        <div id="selections">
          <el-select v-model="value" placeholder="全球" @change="selectBox">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div id="lineSwitch">
          <label @click.stop>
            <el-switch
              v-model="switchLine"
              active-text="飞线开关"
              active-color="#00e600"
              inactive-color="#d1e0e0"
              @change="switchLines"
            >
            </el-switch>
          </label>
        </div>
        <targetScroll />
      </el-aside>
      <el-main>
        <div class="panel paneltop">
          <data-size />
        </div>
        <div class="panel panelmid">
          <needle />
        </div>
        <div class="panel panelbottom">
          <collection-task />
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
var echarts = require("echarts/lib/echarts");
import "echarts-gl";
import "echarts/map/js/world.js";
import { heightTextureImg } from "@/assets/js/variables.js";
import regions from "@/assets/json/regions.json";
import world from "@/assets/json/world.json";
import HongKong from "@/assets/json/HongKong.json";
import London from "@/assets/json/London.json";
import Melbourne from "@/assets/json/Melbourne.json";
import NewYork from "@/assets/json/NewYork.json";
import Tokyo from "@/assets/json/Tokyo.json";
import geoCoordMap from "@/assets/json/geoCoordMap.json";
import nameMap from "@/assets/json/nameMap.json";
import targetScroll from "@/components/targetScroll.vue";
import worldGeoCoordMap from "@/assets/json/worldGeoCoordMap.json";
import dataSize from "@/components/dataSize.vue";
import needle from "@/components/needle.vue";
import collectionTask from "@/components/collectionTask.vue";
import getMainpage from "@/https/mainPage.js";

export default {
  data() {
    return {
      mapData: [],
      scatterData: [],
      dser: [],
      mapChart: "",
      myChart: "",
      switchLine: true,
      options: [
        {
          value: "全球",
          label: "全球",
        },
        {
          value: "Mongolia",
          label: "G国",
        },
      ],
      attackMap: {
        中国: HongKong,
        英国: London,
        美国: NewYork,
        日本: Tokyo,
        澳大利亚: Melbourne,
        全球: world,
      },
      value: "全球",
      flag:
        "path://M169.06,27.19c-37.81-13.75-61.87-8.44-85-3.13l-3.44.63c-17.61,3.82-30-.92-35.82-4.1a11.08,11.08,0,1,0-8.86,1V200h6.25V104.69c11.87,7.5,31.25,7.81,58.12,1.56,30.94-7.19,65.94,9.06,66.25,9.06l4.38,2.19V27.81l-1.88-.62Zm-3.75,80.93H165c-10.63-4.37-39.06-14.06-65.94-7.81-28.44,6.56-46.87,5.63-56.56-3.44V26.25C49.37,30,63.12,35,82.19,30.62L85.62,30c22.82-5,44.69-10,79.69,2.19v75.93Z,M85.62,30l-3.43.63C63.12,35,49.37,30,42.5,26.25V96.88c9.69,9.06,28.12,10,56.56,3.43,26.88-6.25,55.32,3.44,65.94,7.81h.31V32.19C130.31,20,108.44,25,85.62,30Z",
      earthOption: {
        globe: {
          bottom: "10%",
          left: "5%",
          baseTexture: "",
          heightTexture: heightTextureImg,
          displacementScale: 0.04,
          shading: "lambert",
          //environment: environmentImg,
          realisticMaterial: {
            roughness: 0.9,
          },
          light: {
            // 光照阴影
            main: {
              color: "#fff", // 光照颜色
              intensity: 0.8, // 光照强度
              // shadowQuality: 'high', //阴影亮度
              shadow: true, // 是否显示阴影
              alpha: 40,
              beta: -30,
            },
            ambient: {
              intensity: 0.5,
            },
          },
          viewControl: {
            alpha: 30,
            beta: 160,
            targetCoord: [104.195397, 35.86166],
            autoRotate: true,
            distance: 200,
            autoRotateAfterStill: 3,
            autoRotateSpeed: 5,
          },
        },
        series: "",
      },
      pOp: {
        backgroundColor: "rgba(0, 0, 33, 0.6)",
        geo: {
          regions: [],
          map: "world",
          roam: "scale",
          zoom: 1,
          label: {
            fontSize: 12,
          },
          itemStyle: {
            areaColor: "rgba(23, 72, 113,0.3)",
            borderColor: "#00FDFF",
          },
          emphasis: {
            itemStyle: {
              areaColor: "rgba(255, 214, 51,0.2)",
            },
          },

          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          boundingCoords: [
            [-180, 90],
            [180, -90],
          ],
        },

        series: "",
      },
    };
  },
  provide() {
    return {
      selected: () => this.value,
    };
  },
  components: {
    targetScroll,
    dataSize,
    needle,
    collectionTask,
  },
  methods: {
    putScatters() {
      this.dser.push({
        // 散点效果
        type: "effectScatter",
        //type: 'scatter',
        coordinateSystem: "geo", // 表示使用的坐标系为地理坐标系
        // rippleEffect: {
        // 	brushType: 'stroke' // 波纹绘制效果
        // },
        label: {
          normal: {
            // 默认的文本标签显示样式
            show: true,
            position: "left", // 标签显示的位置
            formatter: "{b}", // 标签内容格式器
          },
        },
        itemStyle: {
          normal: {
            color: "#fff",
          },
        },
        data: this.mapData,
      });
    },
    putFlags() {
      this.dser.push({
        type: "scatter",
        coordinateSystem: "geo",
        // zlevel: 3,
        rippleEffect: {
          brushType: "stroke",
        },
        label: {
          normal: {
            show: true,
            //position: 'left',
            formatter: "{b}",
          },
        },
        symbol: this.flag,
        symbolSize: 25,
        itemStyle: {
          normal: {
            color: "red",
          },
        },
        data: [
          {
            name: "北京",
            value: [116.404844, 39.913385],
            label: {
              normal: {
                position: "right",
                color: "red",
              },
            },
          },
        ],
      });
    },
    initMap() {
      let canvas = document.createElement("canvas");
      this.mapChart = echarts.init(canvas, null, {
        width: 4096,
        height: 2048,
      });
      this.pOp.series = this.dser;
      this.mapChart.setOption(this.pOp);
    },
    initBall() {
      this.myChart = echarts.init(document.getElementById("earth"));
      this.earthOption.globe.baseTexture = this.mapChart;
      this.myChart.setOption(this.earthOption, true);
      window.addEventListener("resize", () => {
        this.myChart.resize();
      });
    },
    convertData(mapData) {
      var res = [];
      for (var i = 0; i < mapData.length; i++) {
        var fromCoord = mapData[i].value;
        var toCoord = [116.415687, 39.91026];
        if (fromCoord && toCoord) {
          res.push({
            fromName: mapData[i].name,
            toName: "北京",
            coords: [fromCoord, toCoord],
            value: 30,
          });
        }
      }
      return res;
    },
    initEarth() {
      this.putScatters();
      this.putFlags();
      this.initMap();
      this.initBall();
      this.switchLines();
    },
    switchLines() {
      let series = [];
      if (this.switchLine) {
        series = [];
        series.push({
          type: "lines3D",
          effect: {
            show: true,
            period: 3, //速度
            trailLength: 0.1, //尾部阴影
          },
          lineStyle: {
            //航线的视图效果
            show: true,
            color: "#fff",
            width: 1,
            opacity: 0.6,
          },
          data: this.convertData(this.mapData), // 特效的起始、终点位置，一个二维数组，相当于coords: convertData(item[1])
        });
        this.$set(this.earthOption, "series", series);
        if (this.value === "全球") {
          this.earthOption.globe.viewControl = {
            autoRotate: false,
            targetCoord: [104.195397, 35.86166],
            distance: 200,
            autoRotateSpeed: 0,
          };
        } else {
          this.earthOption.globe.viewControl = {
            autoRotate: false,
            targetCoord: worldGeoCoordMap[nameMap[this.value]],
            distance: 150,
            autoRotateSpeed: 0,
          };
        }
        //this.earthOption.series = series;
      } else {
        this.$set(this.earthOption, "series", []);
        //this.earthOption.series = [];
        if (this.value === "全球") {
          this.earthOption.globe.viewControl = {
            autoRotate: true,
            targetCoord: [104.195397, 35.86166],
            distance: 200,
            autoRotateSpeed: 5,
          };
        } else {
          this.earthOption.globe.viewControl = {
            autoRotate: false,
            targetCoord: worldGeoCoordMap[nameMap[this.value]],
            distance: 150,
            autoRotateSpeed: 0,
          };
        }
      }

      this.myChart.clear();
      this.myChart.setOption(this.earthOption, true);
    },
    selectBox() {
      if (this.value !== "全球") {
        this.$set(this.pOp.geo, "regions", [
          {
            name: this.value,
            itemStyle: {
              areaColor: "rgb(255, 203, 0)",
            },
            label: {
              show: true,
              color: "red",
            },
          },
        ]);
        this.earthOption.globe.viewControl = {
          autoRotate: false,
          targetCoord: worldGeoCoordMap[nameMap[this.value]],
          distance: 150,
          autoRotateSpeed: 0,
        };
      } else {
        this.$set(this.pOp.geo, "regions", []);
        if (this.switchLine) {
          this.earthOption.globe.viewControl = {
            autoRotate: false,
            targetCoord: [104.195397, 35.86166],
            distance: 200,
            autoRotateSpeed: 0,
          };
        } else {
          this.earthOption.globe.viewControl = {
            autoRotate: true,
            targetCoord: [104.195397, 35.86166],
            distance: 200,
            autoRotateSpeed: 5,
          };
        }
      }
      this.mapChart.setOption(this.pOp, true);
      this.myChart.setOption(this.earthOption, true);
    },
  },
  created() {},
  async mounted() {
    let res = await getMainpage.getIps();
    this.mapData = res.data;
    this.mapData.map((item) => {
      return {
        name: item.name,
        value: item.value.reverse(),
      };
    });
    this.initEarth();
  },
};
</script>
<style scoped>
#mainpage {
  min-height: 100vh;
  background: url(../../public/bgg.jpg) no-repeat 100%;
  background-size: 100% 100%;
}
.el-header {
  height: 1.3125rem !important;
  padding: 0 !important;
}
.el-header img {
  width: 100%;
  padding-top: 0.25rem;
}
.el-aside {
  position: relative;
  flex: 2;
  margin: 0.125rem 0.0625rem;
}
#selections {
  position: absolute;
  top: 0%;
  left: 5%;
}
#lineSwitch {
  position: absolute;
  right: 5%;
  top: 2%;
}
.el-switch /deep/ .el-switch__label * {
  color: #fff;
}
#selections /deep/ .el-input__inner {
  border: 1px solid rgba(25, 186, 139, 0.17);
  background: rgba(255, 255, 255, 0.04);
  color: #fff;
}
.el-main {
  flex: 1;
  /* height: 100%; */
  padding: 0 !important;
  display: flex !important;
  flex-direction: column;
}
.panel {
  margin: 0.0625rem auto;
  flex: 1;
  /* height: 0.0125rem; */
  width: 98%;
  background: rgba(255, 255, 255, 0.04);
  background-size: 100% auto;
  border: 0.0125rem solid rgba(25, 186, 139, 0.17);
  position: relative;
}
.panel::before {
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  width: 0.375rem;
  height: 0.1875rem;
  border-top: 0.025rem solid #5d99c4;
  border-left: 0.025rem solid #5d99c4;
}
.panel::after {
  position: absolute;
  bottom: 0;
  right: 0;
  content: "";
  width: 0.375rem;
  height: 0.1875rem;
  border-bottom: 0.025rem solid #5d99c4;
  border-right: 0.025rem solid #5d99c4;
}
#earth {
  height: 98%;
  width: 98%;
  margin: 0.0625rem;
  /* background-color: pink; */
}
</style>
