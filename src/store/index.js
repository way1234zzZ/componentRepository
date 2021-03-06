import Vue from 'vue'
import Vuex from 'vuex'
import { publicPath } from '../../vue.config'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // points: [
    //   { value: [118.8062, 31.9208], itemStyle: { color: '#4ab2e5' } }
    //   , { value: [127.9688, 45.368], itemStyle: { color: '#4fb6d2' } }
    //   , { value: [110.3467, 41.4899], itemStyle: { color: '#52b9c7' } }
    //   , { value: [125.8154, 44.2584], itemStyle: { color: '#5abead' } }
    //   , { value: [116.4551, 40.2539], itemStyle: { color: '#f34e2b' } }
    //   , { value: [123.1238, 42.1216], itemStyle: { color: '#f56321' } }
    //   , { value: [114.4995, 38.1006], itemStyle: { color: '#f56f1c' } }
    //   , { value: [117.4219, 39.4189], itemStyle: { color: '#f58414' } }
    //   , { value: [112.3352, 37.9413], itemStyle: { color: '#f58f0e' } }
    //   , { value: [109.1162, 34.2004], itemStyle: { color: '#f5a305' } }
    //   , { value: [103.5901, 36.3043], itemStyle: { color: '#e7ab0b' } }
    //   , { value: [106.3586, 38.1775], itemStyle: { color: '#dfae10' } }
    //   , { value: [101.4038, 36.8207], itemStyle: { color: '#d5b314' } }
    //   , { value: [103.9526, 30.7617], itemStyle: { color: '#c1bb1f' } }
    //   , { value: [108.384366, 30.439702], itemStyle: { color: '#b9be23' } }
    //   , { value: [113.0823, 28.2568], itemStyle: { color: '#a6c62c' } }
    //   , { value: [102.9199, 25.46639], itemStyle: { color: '#96cc34' } }
    //   , { value: [119.4543, 25.9222] }
    // ],
    points: [
      { value: [-73.866552, 40.853295], itemStyle: { color: '#4ab2e5' } }
      , { value: [-77.039171, 38.915951], itemStyle: { color: '#4fb6d2' } }
      , { value: [-118.24647, 34.062821], itemStyle: { color: '#52b9c7' } }
      , { value: [-96.794976, 32.779335], itemStyle: { color: '#5abead' } }
      , { value: [-95.372728, 29.770234], itemStyle: { color: '#f34e2b' } }
      , { value: [-98.497078, 29.42689], itemStyle: { color: '#f56321' } }
      , { value: [-98.497078, 29.42689], itemStyle: { color: '#f56f1c' } }
      , { value: [-119.410746, 36.792366], itemStyle: { color: '#f58414' } }
      , { value: [-155.584507, 19.90302], itemStyle: { color: '#f58f0e' } }
      , { value: [-87.652985, 41.894438], itemStyle: { color: '#f5a305' } }
      , { value: [-122.350287, 47.616058], itemStyle: { color: '#e7ab0b' } }
      , { value: [-122.350287, 47.616058], itemStyle: { color: '#dfae10' } }
      , { value: [-112.084595, 33.459164], itemStyle: { color: '#d5b314' } }
      , { value: [-101.726917, 27.027303], itemStyle: { color: '#c1bb1f' } }
      , { value: [-94.607163, 39.100146], itemStyle: { color: '#b9be23' } }
      , { value: [-89.400728, 43.065577], itemStyle: { color: '#a6c62c' } }
      , { value: [-87.919746, 43.058832], itemStyle: { color: '#96cc34' } }
      , { value: [-151.611187, 66.623693] }
    ],
    lines: [
      { coords: [[118.8062, 31.9208], [119.4543, 25.9222]], lineStyle: { color: '#4ab2e5' } }
      , { coords: [[127.9688, 45.368], [119.4543, 25.9222]], lineStyle: { color: '#4fb6d2' } }
      , { coords: [[110.3467, 41.4899], [119.4543, 25.9222]], lineStyle: { color: '#52b9c7' } }
      , { coords: [[125.8154, 44.2584], [119.4543, 25.9222]], lineStyle: { color: '#5abead' } }
      , { coords: [[116.4551, 40.2539], [119.4543, 25.9222]], lineStyle: { color: '#f34e2b' } }
      , { coords: [[123.1238, 42.1216], [119.4543, 25.9222]], lineStyle: { color: '#f56321' } }
      , { coords: [[114.4995, 38.1006], [119.4543, 25.9222]], lineStyle: { color: '#f56f1c' } }
      , { coords: [[117.4219, 39.4189], [119.4543, 25.9222]], lineStyle: { color: '#f58414' } }
      , { coords: [[112.3352, 37.9413], [119.4543, 25.9222]], lineStyle: { color: '#f58f0e' } }
      , { coords: [[109.1162, 34.2004], [119.4543, 25.9222]], lineStyle: { color: '#f5a305' } }
      , { coords: [[103.5901, 36.3043], [119.4543, 25.9222]], lineStyle: { color: '#e7ab0b' } }
      , { coords: [[106.3586, 38.1775], [119.4543, 25.9222]], lineStyle: { color: '#dfae10' } }
      , { coords: [[101.4038, 36.8207], [119.4543, 25.9222]], lineStyle: { color: '#d5b314' } }
      , { coords: [[103.9526, 30.7617], [119.4543, 25.9222]], lineStyle: { color: '#c1bb1f' } }
      , { coords: [[108.384366, 30.439702], [119.4543, 25.9222]], lineStyle: { color: '#b9be23' } }
      , { coords: [[113.0823, 28.2568], [119.4543, 25.9222]], lineStyle: { color: '#a6c62c' } }
      , { coords: [[102.9199, 25.46639], [119.4543, 25.9222]], lineStyle: { color: '#96cc34' } }
    ],
    option: {
      //backgroundColor: 'rgb(11,244,77)',
      geo: {
        map: 'cn',
        aspectScale: 0.75, //长宽比
        zoom: 1.1,
        roam: false,
        itemStyle: {
          normal: {
            areaColor: '#013C62',
            shadowColor: '#182f68',
            shadowOffsetX: 0,
            shadowOffsetY: 25
          },
          emphasis: {
            areaColor: '#2AB8FF',
            borderWidth: 0,
            color: 'green',
            label: {
              show: false
            }
          }
        }
      },
      series: [{
        type: 'map',
        //roam: true,
        label: {
          normal: {
            show: false,
            textStyle: {
              color: '#fff'
            }
          },
          emphasis: {
            textStyle: {
              color: '#fff'
            }
          }
        },

        itemStyle: {
          normal: {
            borderColor: '#2ab8ff',
            borderWidth: 1.5,
            areaColor: '#12235c'
          },
          emphasis: {
            areaColor: '#2AB8FF',
            borderWidth: 0,
            color: 'green'
          }
        },
        zoom: 1.1,
        roam: false,
        map: 'cn' //使用
        // data: this.difficultData //热力图数据   不同区域 不同的底色
      },
      {
        type: 'scatter',
        coordinateSystem: 'geo',
        symbol: 'pin',
        showEffectOn: 'render',
        symbolSize: [20, 20],
        rippleEffect: {
          period: 15,
          scale: 4,
          brushType: 'fill'
        },
        hoverAnimation: true,
        itemStyle: {
          normal: {
            color: '#ffff',
            shadowBlur: 10,
            shadowColor: '#333'
          }
        },
        data: ''
      }
      ]
    },
    area: '美国',
    cnmap: '/chinaMap.json',
    usmap: `${publicPath}USA.json`,
    bjmap: '/beijing.json',
    xjmap: '/xinjiang.json',
    gsmap: '/gansu.json',
    nmgmap: '/neimeng.json',
    hljmap: '/heilongjiang.json'
  },
  mutations: {
    setArea: function (state, value) {
      state.area = value
    },
    setPoints: function (state) {
      state.option.series[1].data = state.points
    },
    cancelPoints: function (state) {
      state.option.series[1].data = 'null'
    }
  },
  actions: {
  },
  modules: {
  }
})
