<template>
  <div class="aside-container" style="padding-top:0">
    <div id="top" class="common-color">
      <div id="scrollTitle">
        <span>任务名称</span>
        <span>国家</span>
        <span>采集容量(MB)</span>
        <span>采集数量(个)</span>
      </div>
      <div id="scrollArea">
        <ul class="item" v-if="listData.length <= 16">
          <li :key="item + key" v-for="(item, key) in listData" class="itemLi">
            <span v-text="item.taskName"></span>
            <span v-text="item.terr"></span>
            <span v-text="item.cap"></span>
            <span v-text="item.num"></span>
          </li>
        </ul>
        <vue-seamless-scroll
          :class-option="optionSetting"
          class="seamless-warp-aside"
          :data="listData"
          v-else
        >
          <ul class="item">
            <li
              :key="item + key"
              v-for="(item, key) in listData"
              class="itemLi"
            >
              <span v-text="item.taskName"></span>
              <span v-text="item.terr"></span>
              <span v-text="item.cap"></span>
              <span v-text="item.num"></span>
            </li>
          </ul>
        </vue-seamless-scroll>
      </div>
    </div>
    <div id="bottom" class="common-color">
      <el-row>
        <el-col :span="8">
          <div id="probe" class="circles"></div>
          <div class="midAligned">探针数</div>
        </el-col>
        <el-col :span="8">
          <div id="activeTask" class="circles"></div>
          <div class="midAligned">正在运行任务数</div>
        </el-col>
        <el-col :span="8">
          <div id="task" class="circles"></div>
          <div class="midAligned">任务数</div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
var echarts = require("echarts");
import getTarget from "@/https/target.js";
export default {
  data() {
    return {
      listData: [],
      ballData: null,
      cou: null,
    };
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
    let res = await getTarget.getRunningCount(
      this.$route.params.country,
      this.$route.params.project
    );
    this.cou = res.data.cou;
    /* Echarts脚本 */
    /**********************探针数*****************************/
    getTarget
      .getAITC(this.$route.params.country, this.$route.params.project)
      .then((data2) => {
        this.ballData = data2.data;
        var myChart1 = echarts.init(document.querySelector("#probe"));
        let angle = 0; //角度，用来做简单的动画效果的
        let value1 = this.ballData.accounts;
        let option1 = {
          // backgroundColor:"#061740",
          title: {
            text: "{a|" + value1 + "}",
            x: "center",
            y: "center",
            textStyle: {
              rich: {
                a: {
                  fontSize: 30,
                  color: "#d35161",
                },

                c: {
                  fontSize: 20,
                  color: "#d35161",
                  // padding: [5,0]
                },
              },
            },
          },
          series: [
            {
              name: "ring5",
              type: "custom",
              coordinateSystem: "none",
              renderItem: function(params, api) {
                return {
                  type: "arc",
                  shape: {
                    cx: api.getWidth() / 2,
                    cy: api.getHeight() / 2,
                    r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.7,
                    startAngle: ((5 + angle) * Math.PI) / 180,
                    endAngle: ((175 + angle) * Math.PI) / 180,
                  },
                  style: {
                    stroke: "#d35161",
                    fill: "transparent",
                    lineWidth: 1.5,
                  },
                  silent: true,
                };
              },
              data: [0],
            },
            {
              name: "ring5",
              type: "custom",
              coordinateSystem: "none",
              renderItem: function(params, api) {
                return {
                  type: "arc",
                  shape: {
                    cx: api.getWidth() / 2,
                    cy: api.getHeight() / 2,
                    r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.7,
                    startAngle: ((185 + angle) * Math.PI) / 180,
                    endAngle: ((355 + angle) * Math.PI) / 180,
                  },
                  style: {
                    stroke: "#d35161",
                    fill: "transparent",
                    lineWidth: 1.5,
                  },
                  silent: true,
                };
              },
              data: [0],
            },
            {
              name: "ring5",
              type: "custom",
              coordinateSystem: "none",
              renderItem: function(params, api) {
                return {
                  type: "arc",
                  shape: {
                    cx: api.getWidth() / 2,
                    cy: api.getHeight() / 2,
                    r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65,
                    startAngle: ((275 + -angle) * Math.PI) / 180,
                    endAngle: ((-5 + -angle) * Math.PI) / 180,
                  },
                  style: {
                    stroke: "#84888a",
                    fill: "transparent",
                    lineWidth: 1.5,
                  },
                  silent: true,
                };
              },
              data: [0],
            },
            {
              name: "ring5",
              type: "custom",
              coordinateSystem: "none",
              renderItem: function(params, api) {
                return {
                  type: "arc",
                  shape: {
                    cx: api.getWidth() / 2,
                    cy: api.getHeight() / 2,
                    r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65,
                    startAngle: ((5 + -angle) * Math.PI) / 180,
                    endAngle: ((85 + -angle) * Math.PI) / 180,
                  },
                  style: {
                    stroke: "#84888a",
                    fill: "transparent",
                    lineWidth: 1.5,
                  },
                  silent: true,
                };
              },
              data: [0],
            },
            {
              name: "ring5",
              type: "custom",
              coordinateSystem: "none",
              renderItem: function(params, api) {
                return {
                  type: "arc",
                  shape: {
                    cx: api.getWidth() / 2,
                    cy: api.getHeight() / 2,
                    r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65,
                    startAngle: ((95 + -angle) * Math.PI) / 180,
                    endAngle: ((175 + -angle) * Math.PI) / 180,
                  },
                  style: {
                    stroke: "#84888a",
                    fill: "transparent",
                    lineWidth: 1.5,
                  },
                  silent: true,
                };
              },
              data: [0],
            },
            {
              name: "ring5",
              type: "custom",
              coordinateSystem: "none",
              renderItem: function(params, api) {
                return {
                  type: "arc",
                  shape: {
                    cx: api.getWidth() / 2,
                    cy: api.getHeight() / 2,
                    r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65,
                    startAngle: ((185 + -angle) * Math.PI) / 180,
                    endAngle: ((265 + -angle) * Math.PI) / 180,
                  },
                  style: {
                    stroke: "#84888a",
                    fill: "transparent",
                    lineWidth: 1.5,
                  },
                  silent: true,
                };
              },
              data: [0],
            },
            {
              name: "ring5",
              type: "custom",
              coordinateSystem: "none",
              renderItem: function(params, api) {
                let x0 = api.getWidth() / 2;
                let y0 = api.getHeight() / 2.05;
                let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65;
                let point = getCirlPoint(x0, y0, r, 85 + -angle);
                return {
                  type: "rect",
                  shape: {
                    x: point.x,
                    y: point.y,
                    width: 3,
                    height: 10,
                  },
                  style: {
                    stroke: "#84888a", //粉
                    fill: "#84888a",
                  },
                  silent: true,
                };
              },
              data: [0],
            },
            {
              name: "ring5",
              type: "custom",
              coordinateSystem: "none",
              renderItem: function(params, api) {
                let x0 = api.getWidth() / 2;
                let y0 = api.getHeight() / 2.05;
                let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65;
                let point = getCirlPoint(x0, y0, r, 95.5 + -angle);
                return {
                  type: "rect",
                  shape: {
                    x: point.x,
                    y: point.y,
                    width: 3,
                    height: 10,
                  },
                  style: {
                    stroke: "#84888a", //粉
                    fill: "#84888a",
                  },
                  silent: true,
                };
              },
              data: [0],
            },
            {
              name: "ring5", //绿点
              type: "custom",
              coordinateSystem: "none",
              renderItem: function(params, api) {
                let x0 = api.getWidth() / 2;
                let y0 = api.getHeight() / 2;
                let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65;
                let point = getCirlPoint(x0, y0, r, 275 + -angle);
                return {
                  type: "rect",
                  shape: {
                    x: point.x,
                    y: point.y,
                    width: 3,
                    height: 10,
                  },
                  style: {
                    stroke: "#84888a", //绿
                    fill: "#84888a",
                  },
                  silent: true,
                };
              },
              data: [0],
            },
            {
              name: "ring5", //绿点
              type: "custom",
              coordinateSystem: "none",
              renderItem: function(params, api) {
                let x0 = api.getWidth() / 2;
                let y0 = api.getHeight() / 2;
                let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65;
                let point = getCirlPoint(x0, y0, r, 265 + -angle);
                return {
                  type: "rect",
                  shape: {
                    x: point.x,
                    y: point.y,
                    width: 3,
                    height: 10,
                  },
                  style: {
                    stroke: "#84888a", //绿
                    fill: "#84888a",
                  },
                  silent: true,
                };
              },
              data: [0],
            },
            {
              name: "攻击次数",
              type: "pie",
              radius: ["58%", "45%"],
              silent: true,
              clockwise: true,
              startAngle: 90,
              z: 0,
              zlevel: 0,
              label: {
                normal: {
                  position: "center",
                },
              },
              data: [
                {
                  value1: value1,
                  name: "",
                  itemStyle: {
                    normal: {
                      color: "#373a41",
                    },
                  },
                },
                {
                  value1: 100000 - value1,
                  name: "",
                  label: {
                    normal: {
                      show: false,
                    },
                  },
                  itemStyle: {
                    normal: {
                      color: "#373a41",
                    },
                  },
                },
              ],
            },
          ],
        };
        //获取圆上面某点的坐标(x0,y0表示坐标，r半径，angle角度)
        function getCirlPoint(x0, y0, r, angle) {
          let x1 = x0 + r * Math.cos((angle * Math.PI) / 180);
          let y1 = y0 + r * Math.sin((angle * Math.PI) / 180);
          return {
            x: x1,
            y: y1,
          };
        }
        function draw(myChart, option) {
          angle = angle + 3;
          myChart.setOption(option, true);
          //window.requestAnimationFrame(draw);
        }
        window.addEventListener("resize", function() {
          myChart1.resize();
        });
        /******************IP数************************/
        var myChart2 = echarts.init(document.querySelector("#task"));
        let value2 = this.ballData.tasks;
        let option2 = {
          title: {
            text: "{a|" + value2 + "}",
            x: "center",
            y: "center",
            textStyle: {
              rich: {
                a: {
                  fontSize: 30,
                  color: "#d35161",
                },

                c: {
                  fontSize: 20,
                  color: "#d35161",
                  // padding: [5,0]
                },
              },
            },
          },
          series: [
            {
              name: "ring5",
              type: "custom",
              coordinateSystem: "none",
              renderItem: function(params, api) {
                return {
                  type: "arc",
                  shape: {
                    cx: api.getWidth() / 2,
                    cy: api.getHeight() / 2,
                    r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.7,
                    startAngle: ((5 + angle) * Math.PI) / 180,
                    endAngle: ((175 + angle) * Math.PI) / 180,
                  },
                  style: {
                    stroke: "#d35161",
                    fill: "transparent",
                    lineWidth: 1.5,
                  },
                  silent: true,
                };
              },
              data: [0],
            },
            {
              name: "ring5",
              type: "custom",
              coordinateSystem: "none",
              renderItem: function(params, api) {
                return {
                  type: "arc",
                  shape: {
                    cx: api.getWidth() / 2,
                    cy: api.getHeight() / 2,
                    r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.7,
                    startAngle: ((185 + angle) * Math.PI) / 180,
                    endAngle: ((355 + angle) * Math.PI) / 180,
                  },
                  style: {
                    stroke: "#d35161",
                    fill: "transparent",
                    lineWidth: 1.5,
                  },
                  silent: true,
                };
              },
              data: [0],
            },
            {
              name: "ring5",
              type: "custom",
              coordinateSystem: "none",
              renderItem: function(params, api) {
                return {
                  type: "arc",
                  shape: {
                    cx: api.getWidth() / 2,
                    cy: api.getHeight() / 2,
                    r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65,
                    startAngle: ((275 + -angle) * Math.PI) / 180,
                    endAngle: ((-5 + -angle) * Math.PI) / 180,
                  },
                  style: {
                    stroke: "#84888a",
                    fill: "transparent",
                    lineWidth: 1.5,
                  },
                  silent: true,
                };
              },
              data: [0],
            },
            {
              name: "ring5",
              type: "custom",
              coordinateSystem: "none",
              renderItem: function(params, api) {
                return {
                  type: "arc",
                  shape: {
                    cx: api.getWidth() / 2,
                    cy: api.getHeight() / 2,
                    r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65,
                    startAngle: ((5 + -angle) * Math.PI) / 180,
                    endAngle: ((85 + -angle) * Math.PI) / 180,
                  },
                  style: {
                    stroke: "#84888a",
                    fill: "transparent",
                    lineWidth: 1.5,
                  },
                  silent: true,
                };
              },
              data: [0],
            },
            {
              name: "ring5",
              type: "custom",
              coordinateSystem: "none",
              renderItem: function(params, api) {
                return {
                  type: "arc",
                  shape: {
                    cx: api.getWidth() / 2,
                    cy: api.getHeight() / 2,
                    r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65,
                    startAngle: ((95 + -angle) * Math.PI) / 180,
                    endAngle: ((175 + -angle) * Math.PI) / 180,
                  },
                  style: {
                    stroke: "#84888a",
                    fill: "transparent",
                    lineWidth: 1.5,
                  },
                  silent: true,
                };
              },
              data: [0],
            },
            {
              name: "ring5",
              type: "custom",
              coordinateSystem: "none",
              renderItem: function(params, api) {
                return {
                  type: "arc",
                  shape: {
                    cx: api.getWidth() / 2,
                    cy: api.getHeight() / 2,
                    r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65,
                    startAngle: ((185 + -angle) * Math.PI) / 180,
                    endAngle: ((265 + -angle) * Math.PI) / 180,
                  },
                  style: {
                    stroke: "#84888a",
                    fill: "transparent",
                    lineWidth: 1.5,
                  },
                  silent: true,
                };
              },
              data: [0],
            },
            {
              name: "ring5",
              type: "custom",
              coordinateSystem: "none",
              renderItem: function(params, api) {
                let x0 = api.getWidth() / 2;
                let y0 = api.getHeight() / 2.05;
                let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65;
                let point = getCirlPoint(x0, y0, r, 85 + -angle);
                return {
                  type: "rect",
                  shape: {
                    x: point.x,
                    y: point.y,
                    width: 3,
                    height: 10,
                  },
                  style: {
                    stroke: "#84888a", //粉
                    fill: "#84888a",
                  },
                  silent: true,
                };
              },
              data: [0],
            },
            {
              name: "ring5",
              type: "custom",
              coordinateSystem: "none",
              renderItem: function(params, api) {
                let x0 = api.getWidth() / 2;
                let y0 = api.getHeight() / 2.05;
                let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65;
                let point = getCirlPoint(x0, y0, r, 95.5 + -angle);
                return {
                  type: "rect",
                  shape: {
                    x: point.x,
                    y: point.y,
                    width: 3,
                    height: 10,
                  },
                  style: {
                    stroke: "#84888a", //粉
                    fill: "#84888a",
                  },
                  silent: true,
                };
              },
              data: [0],
            },
            {
              name: "ring5", //绿点
              type: "custom",
              coordinateSystem: "none",
              renderItem: function(params, api) {
                let x0 = api.getWidth() / 2;
                let y0 = api.getHeight() / 2;
                let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65;
                let point = getCirlPoint(x0, y0, r, 275 + -angle);
                return {
                  type: "rect",
                  shape: {
                    x: point.x,
                    y: point.y,
                    width: 3,
                    height: 10,
                  },
                  style: {
                    stroke: "#84888a", //绿
                    fill: "#84888a",
                  },
                  silent: true,
                };
              },
              data: [0],
            },
            {
              name: "ring5", //绿点
              type: "custom",
              coordinateSystem: "none",
              renderItem: function(params, api) {
                let x0 = api.getWidth() / 2;
                let y0 = api.getHeight() / 2;
                let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65;
                let point = getCirlPoint(x0, y0, r, 265 + -angle);
                return {
                  type: "rect",
                  shape: {
                    x: point.x,
                    y: point.y,
                    width: 3,
                    height: 10,
                  },
                  style: {
                    stroke: "#84888a", //绿
                    fill: "#84888a",
                  },
                  silent: true,
                };
              },
              data: [0],
            },
            {
              name: "攻击次数",
              type: "pie",
              radius: ["58%", "45%"],
              silent: true,
              clockwise: true,
              startAngle: 90,
              z: 0,
              zlevel: 0,
              label: {
                normal: {
                  position: "center",
                },
              },
              data: [
                {
                  value2: value2,
                  name: "",
                  itemStyle: {
                    normal: {
                      color: "#373a41",
                    },
                  },
                },
                {
                  value2: 100000 - value2,
                  name: "",
                  label: {
                    normal: {
                      show: false,
                    },
                  },
                  itemStyle: {
                    normal: {
                      color: "#373a41",
                    },
                  },
                },
              ],
            },
          ],
        };
        var myChart3 = echarts.init(document.querySelector("#activeTask"));
        let value3 = this.cou;
        let option3 = {
          title: {
            text: "{a|" + value3 + "}",
            x: "center",
            y: "center",
            textStyle: {
              rich: {
                a: {
                  fontSize: 30,
                  color: "#d35161",
                },

                c: {
                  fontSize: 20,
                  color: "#d35161",
                  // padding: [5,0]
                },
              },
            },
          },
          series: [
            {
              name: "ring5",
              type: "custom",
              coordinateSystem: "none",
              renderItem: function(params, api) {
                return {
                  type: "arc",
                  shape: {
                    cx: api.getWidth() / 2,
                    cy: api.getHeight() / 2,
                    r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.7,
                    startAngle: ((5 + angle) * Math.PI) / 180,
                    endAngle: ((175 + angle) * Math.PI) / 180,
                  },
                  style: {
                    stroke: "#d35161",
                    fill: "transparent",
                    lineWidth: 1.5,
                  },
                  silent: true,
                };
              },
              data: [0],
            },
            {
              name: "ring5",
              type: "custom",
              coordinateSystem: "none",
              renderItem: function(params, api) {
                return {
                  type: "arc",
                  shape: {
                    cx: api.getWidth() / 2,
                    cy: api.getHeight() / 2,
                    r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.7,
                    startAngle: ((185 + angle) * Math.PI) / 180,
                    endAngle: ((355 + angle) * Math.PI) / 180,
                  },
                  style: {
                    stroke: "#d35161",
                    fill: "transparent",
                    lineWidth: 1.5,
                  },
                  silent: true,
                };
              },
              data: [0],
            },
            {
              name: "ring5",
              type: "custom",
              coordinateSystem: "none",
              renderItem: function(params, api) {
                return {
                  type: "arc",
                  shape: {
                    cx: api.getWidth() / 2,
                    cy: api.getHeight() / 2,
                    r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65,
                    startAngle: ((275 + -angle) * Math.PI) / 180,
                    endAngle: ((-5 + -angle) * Math.PI) / 180,
                  },
                  style: {
                    stroke: "#84888a",
                    fill: "transparent",
                    lineWidth: 1.5,
                  },
                  silent: true,
                };
              },
              data: [0],
            },
            {
              name: "ring5",
              type: "custom",
              coordinateSystem: "none",
              renderItem: function(params, api) {
                return {
                  type: "arc",
                  shape: {
                    cx: api.getWidth() / 2,
                    cy: api.getHeight() / 2,
                    r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65,
                    startAngle: ((5 + -angle) * Math.PI) / 180,
                    endAngle: ((85 + -angle) * Math.PI) / 180,
                  },
                  style: {
                    stroke: "#84888a",
                    fill: "transparent",
                    lineWidth: 1.5,
                  },
                  silent: true,
                };
              },
              data: [0],
            },
            {
              name: "ring5",
              type: "custom",
              coordinateSystem: "none",
              renderItem: function(params, api) {
                return {
                  type: "arc",
                  shape: {
                    cx: api.getWidth() / 2,
                    cy: api.getHeight() / 2,
                    r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65,
                    startAngle: ((95 + -angle) * Math.PI) / 180,
                    endAngle: ((175 + -angle) * Math.PI) / 180,
                  },
                  style: {
                    stroke: "#84888a",
                    fill: "transparent",
                    lineWidth: 1.5,
                  },
                  silent: true,
                };
              },
              data: [0],
            },
            {
              name: "ring5",
              type: "custom",
              coordinateSystem: "none",
              renderItem: function(params, api) {
                return {
                  type: "arc",
                  shape: {
                    cx: api.getWidth() / 2,
                    cy: api.getHeight() / 2,
                    r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65,
                    startAngle: ((185 + -angle) * Math.PI) / 180,
                    endAngle: ((265 + -angle) * Math.PI) / 180,
                  },
                  style: {
                    stroke: "#84888a",
                    fill: "transparent",
                    lineWidth: 1.5,
                  },
                  silent: true,
                };
              },
              data: [0],
            },
            {
              name: "ring5",
              type: "custom",
              coordinateSystem: "none",
              renderItem: function(params, api) {
                let x0 = api.getWidth() / 2;
                let y0 = api.getHeight() / 2.05;
                let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65;
                let point = getCirlPoint(x0, y0, r, 85 + -angle);
                return {
                  type: "rect",
                  shape: {
                    x: point.x,
                    y: point.y,
                    width: 3,
                    height: 10,
                  },
                  style: {
                    stroke: "#84888a", //粉
                    fill: "#84888a",
                  },
                  silent: true,
                };
              },
              data: [0],
            },
            {
              name: "ring5",
              type: "custom",
              coordinateSystem: "none",
              renderItem: function(params, api) {
                let x0 = api.getWidth() / 2;
                let y0 = api.getHeight() / 2.05;
                let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65;
                let point = getCirlPoint(x0, y0, r, 95.5 + -angle);
                return {
                  type: "rect",
                  shape: {
                    x: point.x,
                    y: point.y,
                    width: 3,
                    height: 10,
                  },
                  style: {
                    stroke: "#84888a", //粉
                    fill: "#84888a",
                  },
                  silent: true,
                };
              },
              data: [0],
            },
            {
              name: "ring5", //绿点
              type: "custom",
              coordinateSystem: "none",
              renderItem: function(params, api) {
                let x0 = api.getWidth() / 2;
                let y0 = api.getHeight() / 2;
                let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65;
                let point = getCirlPoint(x0, y0, r, 275 + -angle);
                return {
                  type: "rect",
                  shape: {
                    x: point.x,
                    y: point.y,
                    width: 3,
                    height: 10,
                  },
                  style: {
                    stroke: "#84888a", //绿
                    fill: "#84888a",
                  },
                  silent: true,
                };
              },
              data: [0],
            },
            {
              name: "ring5", //绿点
              type: "custom",
              coordinateSystem: "none",
              renderItem: function(params, api) {
                let x0 = api.getWidth() / 2;
                let y0 = api.getHeight() / 2;
                let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65;
                let point = getCirlPoint(x0, y0, r, 265 + -angle);
                return {
                  type: "rect",
                  shape: {
                    x: point.x,
                    y: point.y,
                    width: 3,
                    height: 10,
                  },
                  style: {
                    stroke: "#84888a", //绿
                    fill: "#84888a",
                  },
                  silent: true,
                };
              },
              data: [0],
            },
            {
              name: "攻击次数",
              type: "pie",
              radius: ["58%", "45%"],
              silent: true,
              clockwise: true,
              startAngle: 90,
              z: 0,
              zlevel: 0,
              label: {
                normal: {
                  position: "center",
                },
              },
              data: [
                {
                  value3: value3,
                  name: "",
                  itemStyle: {
                    normal: {
                      color: "#373a41",
                    },
                  },
                },
                {
                  value3: 100000 - value3,
                  name: "",
                  label: {
                    normal: {
                      show: false,
                    },
                  },
                  itemStyle: {
                    normal: {
                      color: "#373a41",
                    },
                  },
                },
              ],
            },
          ],
        };
        setInterval(function() {
          //用setInterval做动画感觉有问题
          draw(myChart1, option1);
          draw(myChart2, option2);
          draw(myChart3, option3);
        }, 100);
        window.addEventListener("resize", function() {
          myChart2.resize();
        });
        window.addEventListener("resize", function() {
          myChart3.resize();
        });
      });
  },
  created() {
    getTarget
      .getPageTask(this.$route.params.country, this.$route.params.project)
      .then((data1) => {
        this.listData = data1.data;
      });
  },
};
</script>

<style lang="scss" scoped>
.aside-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}
#top {
  border: 2px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 0.1875rem;
  flex: 3;
  display: flex;
  flex-direction: column;
  padding: 0.25rem 0;
}
#scrollTitle {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;
  font-family: "KaiTi";
}
#scrollTitle span {
  flex: 1;
  color: #33ccff;
  font-size: 20px;
}
#scrollArea {
  flex: 1;
  font-size: 0.3125rem;
  font-family: "YouYuan";
  .seamless-warp-aside {
    height: 7.897625rem;
    overflow: hidden;
    line-height: 0.3rem;
  }
}
.itemLi {
  display: flex;
}
.itemLi span {
  flex: 1;
  color: #fff;
  padding-top: 0.1875rem;
  font-size: 17px;
  text-align: center;
  font-family: "YouYuan";
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
#bottom {
  border: 2px solid rgba(255, 255, 255, 0.2);
  font-size: 19px;
  color: aliceblue;
  flex: 1;
  padding-bottom: 0.1875rem;
}
.el-row {
  height: 100%;
}
.el-col {
  display: flex;
  height: 100%;
  flex-direction: column;
  .circles {
    flex: 1;
  }
  .midAligned {
    height: 22px;
  }
}
</style>
