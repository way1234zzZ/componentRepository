<template>
  <!-- <div>
    <h1>子页</h1>
  </div> -->
  <el-container id="way">
    <el-header>
      <h2>区域地图</h2>
    </el-header>
    <el-container id="mainbox">
      <el-aside id="left">
        <div class="panel top">
          <h2 class="head">资源类</h2>
          <lifetime />
        </div>
        <div class="panel">
          <!-- <h2>服务器采集容量和数量</h2> -->
          <collection />
        </div>
        <div class="panel">
          <dataType />
        </div>
      </el-aside>
      <el-main>
        <el-row>
          <el-col :span="14">
            <div id="map">
              <div class="title">区域：{{$store.state.area}}</div>
              <div ref="myEchart" id="myEchart">
                <div class="back" v-if="display" ref="back" @click.stop="backTo">返回全国</div>
              </div>
              <div class="summary">
                <el-table class="table" :data="tableData" :header-cell-style="{backgroundColor:'#3f5c6d2c',color:'#ffffff',textAlign:'center'}" :cell-style="{color: '#fff',backgroundColor:'#3f5c6d2c',textAlign:'center'}"
                  :row-style="{color: '#fff',backgroundColor:'transparent',textAlign:'center'}">
                  <el-table-column prop="ipNum" label="IP数">
                  </el-table-column>
                  <el-table-column prop="needle" label="探针数">
                  </el-table-column>
                  <el-table-column prop="taskNum" label="任务数">
                  </el-table-column>
                  <el-table-column prop="dkTimes" label="DK成功次数">
                  </el-table-column>
                  <el-table-column prop="capacity" label="采集容量">
                  </el-table-column>
                  <el-table-column prop="taken" label="采集数量">
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="main right">
              <div class="panel top">
                <h2 class="head">目标类</h2>
                <targetCapacity />
              </div>
              <div class="panel">
                <areadata />
              </div>
              <div class="panel">
                <scroll />
              </div>
            </div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </el-container>
  <!-- <div id="map">
    <div ref="myEchart" id="myEchart"></div>
    <div class="back" v-if="display" ref="back" @click.stop="backTo">返回全国</div>
  </div> -->

</template>

<script>
import echarts from 'echarts'
//import jquery from 'jquery'
import axios from 'axios'

import lifetime from '@/components/lifetime.vue'
import collection from '@/components/collection.vue'
import targetCapacity from '@/components/targetCapacity.vue'
import scroll from '@/components/scroll.vue'
import areadata from '@/components/areadata.vue'
import dataType from '@/components/dataType.vue'
//import { mapState } from 'vuex'
//import chinaJson from '../../node_modules/echarts/map/json/china.json'
export default {
  data() {
    return {
      myChart: '',
      mapname: '',
      display: false,
      tableData: [{
        ipNum: 2457,
        needle: 2173,
        taskNum: 14,
        dkTimes: 145,
        capacity: 5345,
        taken: 4565
      }
      ]
    }
  },
  components: {
    lifetime,
    collection,
    targetCapacity,
    scroll,
    areadata,
    dataType
  },
  methods: {
    // getRowClass({ rowIndex }) {
    //   if (rowIndex != null) {
    //     return "background:#3f5c6d2c;";
    //   }

    // },
    showMap() {
      this.myChart = echarts.init(this.$refs.myEchart);
      //var uploadedDataURL = "../../public/data-1528971808162-BkOXf61WX.json";
      // var uploadedDataURL = "/asset/get/s/data-1482909892121-BJ3auk-Se.json";
      this.myChart.showLoading();
      // jquery.get(uploadedDataURL, (geoJson) => {
      //   echarts.registerMap('china', geoJson);
      //   myChart.hideLoading();
      //   myChart.setOption(this.option);
      //   window.onresize = myChart.resize;
      // });

      // axios.get(uploadedDataURL).then(geoJson => {
      //   echarts.registerMap('china', geoJson.data);
      //   myChart.hideLoading();
      //   myChart.setOption(this.option);
      //   window.onresize = myChart.resize;
      // })

      //本地获取
      // axios.get('/chinaMap.json').then(geoJson => {
      //   echarts.registerMap('china', geoJson.data);
      //   myChart.hideLoading();
      //   myChart.setOption(this.option);
      //   window.onresize = myChart.resize;
      // })
      this.mapname = this.$store.state.usmap
      var mapJson = [
        {
          name: "北京",
          json: this.$store.state.bjmap
        },
        {
          name: "新疆",
          json: this.$store.state.xjmap
        },
        {
          name: "甘肃",
          json: this.$store.state.gsmap
        },
        {
          name: "内蒙古",
          json: this.$store.state.nmgmap
        },
        {
          name: "黑龙江",
          json: this.$store.state.hljmap
        },
      ]
      this.$store.commit('setPoints')
      this.mapInit();
      let _this = this
      this.myChart.on('click', function (e) {
        // console.log(this)
        // console.log(_this)
        _this.display = true;
        _this.$store.commit('setArea', e.name)
        _this.$store.commit('cancelPoints')
        //console.log(e.name)
        var chooseName = mapJson.filter(item => {
          return item.name == e.name
        })
        //console.log(chooseName)
        _this.mapname = chooseName[0].json
        //console.log(_this.mapname, '选择地图')
        _this.mapInit();
      })
    },
    backTo() {
      this.mapname = this.$store.state.cnmap
      this.display = false
      this.$store.commit('setArea', '中国')
      this.$store.commit('setPoints');
      this.mapInit();
    },
    mapInit() {
      axios.get(this.mapname).then((geoJson) => {
        echarts.registerMap('cn', geoJson.data);
        this.myChart.hideLoading();
        this.myChart.setOption(this.$store.state.option);
        window.onresize = this.myChart.resize;
      })
    },


  },
  mounted() {
    this.$nextTick(() => {
      this.showMap();
    })

    // setTimeout(() => {
    //   this.showMap();
    // }, 20)
  }

}
</script>

<style scoped>
#way {
  min-height: 100vh;
  background: url(../../public/bg.jpg) no-repeat #000;
  background-size: cover;
}
.el-header {
  height: 1rem !important;
  /* background-color: #b3c0d1; */
  text-align: center;
  background: url(../../public/head_bg.png) no-repeat top center;
  background-size: 100% 100%;
}
h2 {
  color: #7ef0ff;
  font-size: 0.625rem;
  text-align: center;
  line-height: 0.7rem;
  letter-spacing: 0.0125rem;
}
#mainbox {
  display: flex;
}
.el-aside {
  flex: 1;
  margin: 0.125rem 0.0625rem;
  box-shadow: inset 0 0 0.0625rem 0.0125rem rgb(20, 74, 122);
}
#map {
  height: 98%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.summary /deep/ .el-table,
.el-table__expanded-cell {
  background-color: transparent;
}

.summary /deep/ .el-table tr {
  background-color: transparent !important;
}
.summary /deep/ .el-table--enable-row-transition .el-table__body td,
.el-table .cell {
  background-color: transparent;
}

/* .el-table__row {
  border: none !important;
} */
.el-table::before {
  height: 0px;
}
.el-main {
  flex: 3;
  margin: 0.125rem 0.0625rem;
}
#left {
  display: flex;
  flex-direction: column;
}
.panel {
  width: 98%;
  flex: 1;
}
.top {
  display: flex;
  flex-direction: column;
}
.el-row,
.el-col {
  height: 100%;
}
.main {
  box-shadow: inset 0 0 0.0625rem 0.0125rem rgb(20, 74, 122);
  height: 100%;
  margin: 0 0.0625rem;
  display: flex;
  flex-direction: column;
}
.title {
  height: 10%;
  width: 40%;
  color: #fff;
  text-align: center;
  font-size: 0.375rem;
  padding-top: 0.25rem;
  margin: 0 auto;
  background: transparent;
}
.summary {
  height: 15%;
}

.back {
  position: absolute;
  left: 0.2125rem;
  top: 0.3125rem;
  color: rgb(222, 222, 222);
  font-size: 0.1875rem;
  cursor: pointer;
  z-index: 100;
}
#myEchart {
  position: relative;
  width: 95%;
  height: 70%;
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}
.el-main {
  padding: 0;
}
.head {
  color: #fff;
  line-height: 0.5rem;
  font-size: 0.375rem;
  text-align: center;
}
</style>
