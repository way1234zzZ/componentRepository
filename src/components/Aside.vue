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
        <ul class="item .noscroll" v-if="listData.length <= 16">
          <li :key="item + key" v-for="(item, key) in listData" class="itemLi">
            <span v-text="item.taskName"></span>
            <span v-text="item.terr"></span>
            <span v-text="item.cap"></span>
            <span v-text="item.num"></span>
          </li>
        </ul>
        <vue-seamless-scroll :class-option="optionSetting" class="seamless-warp-aside" :data="listData" v-else>
          <ul class="item">
            <li :key="item + key" v-for="(item, key) in listData" class="itemLi">
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
          <div id="probe" ref="probe" class="circles">{{ballData.accounts}}</div>
          <div class="midAligned">探针数</div>
        </el-col>
        <el-col :span="8">
          <div id="activeTask" ref="activeTask" class="circles">{{cou}}</div>
          <div class="midAligned">正在运行任务数</div>
        </el-col>
        <el-col :span="8">
          <div id="task" ref="task" class="circles">{{ballData.tasks}}</div>
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
      ballData: {},
      cou: null,
      interval: null,
      myChart1: null,
      myChart2: null,
      myChart3: null

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

  },
  created() {

    getTarget
      .getPageTask(this.$route.params.country, this.$route.params.project)
      .then((data1) => {
        this.listData = data1.data;
      });
    getTarget
      .getAITC(this.$route.params.country, this.$route.params.project)
      .then((data2) => {
        this.ballData = data2.data;
      })
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
  padding: 0.2rem 0;
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
.itemLi span:nth-child(1) {
  text-align: left;
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
    display: flex;
    align-items: center;
    justify-content: center;
    color: #d35161;
    flex-basis: 1.975rem;
    font-size: 1.125rem;
    font-family: electronicFont;
  }
  .midAligned {
    height: 22px;
  }
}
</style>
