<template>
  <div id="scrollArea" class="block">
    <div id="scrollFlow">
      <div class="scrollTitle">
        <!-- <div class="title">
          目标系统
        </div> -->
      </div>
      <ul class="demonstration">
        <span v-for="(item,index) in title" :key="index">{{ item }}</span>
      </ul>
      <vue-seamless-scroll :data="listData" class="seamless-warp" :class-option="classOption">
        <ul class="item">
          <li v-for="(item,index) in listData" :key="index">
            <span v-text="item.aim"></span>
            <span v-text="item.type"></span>
            <span v-text="item.capacity"></span>
            <span v-text="item.number"></span>
            <span v-text="item.probe"></span>
            <span v-text="item.task"></span>
          </li>
        </ul>
      </vue-seamless-scroll>
    </div>
  </div>
</template>

<script>
import vueSeamlessScroll from 'vue-seamless-scroll'
export default {
  computed: {

    classOption() {
      return {
        step: 1, // 数值越大速度滚动越快
        limitMoveNum: 2, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 0 // 单步运动停止的时间(默认值1000ms)
      }
    }
  },
  components: {
    vueSeamlessScroll
  },
  data() {
    return {
      title: ['目标系统', '类型', '采集容量(MB)', '采集数量(条)', '探针数(个)', '当前任务数(个)'],
      listData: [
        {
          aim: 'Twitter',
          type: '应用',
          capacity: 78,
          number: 546,
          probe: 45,
          task: 74
        },
        {
          aim: 'YouTube',
          type: 'B/S',
          capacity: 43,
          number: 664,
          probe: 23,
          task: 6
        },
        {
          aim: 'Google',
          type: 'B/S',
          capacity: 34,
          number: 654,
          probe: 99,
          task: 90
        },
        {
          aim: 'TikTok',
          type: '应用',
          capacity: 32,
          number: 53,
          probe: 12,
          task: 4
        },
        {
          aim: 'instagram',
          type: 'B/S',
          capacity: 5654,
          number: 4565,
          probe: 6644,
          task: 568
        },
        {
          aim: 'weibo',
          type: 'B/S',
          capacity: 43,
          number: 55,
          probe: 48,
          task: 208
        },
        {
          aim: 'Twitter',
          type: '应用',
          capacity: 78,
          number: 546,
          probe: 45,
          task: 74
        },
        {
          aim: 'YouTube',
          type: 'B/S',
          capacity: 43,
          number: 664,
          probe: 23,
          task: 6
        },
        {
          aim: 'Google',
          type: 'B/S',
          capacity: 34,
          number: 654,
          probe: 99,
          task: 90
        },
        {
          aim: 'TikTok',
          type: '应用',
          capacity: 32,
          number: 53,
          probe: 12,
          task: 4
        },
        {
          aim: 'instagram',
          type: 'B/S',
          capacity: 5654,
          number: 4565,
          probe: 6644,
          task: 568
        },
        {
          aim: 'Twitter',
          type: '应用',
          capacity: 78,
          number: 546,
          probe: 45,
          task: 74
        },
        {
          aim: 'YouTube',
          type: 'B/S',
          capacity: 43,
          number: 664,
          probe: 23,
          task: 6
        },
        {
          aim: 'Google',
          type: 'B/S',
          capacity: 34,
          number: 654,
          probe: 99,
          task: 90
        },
        {
          aim: 'TikTok',
          type: '应用',
          capacity: 32,
          number: 53,
          probe: 12,
          task: 4
        },
        {
          aim: 'instagram',
          type: 'B/S',
          capacity: 5654,
          number: 4565,
          probe: 6644,
          task: 568
        },
        {
          aim: 'weibo',
          type: 'B/S',
          capacity: 43,
          number: 55,
          probe: 48,
          task: 208
        },
        {
          aim: 'Twitter',
          type: '应用',
          capacity: 78,
          number: 546,
          probe: 45,
          task: 74
        },
        {
          aim: 'YouTube',
          type: 'B/S',
          capacity: 43,
          number: 664,
          probe: 23,
          task: 6
        },
        {
          aim: 'Google',
          type: 'B/S',
          capacity: 34,
          number: 654,
          probe: 99,
          task: 90
        },
        {
          aim: 'TikTok',
          type: '应用',
          capacity: 32,
          number: 53,
          probe: 12,
          task: 4
        },
        {
          aim: 'instagram',
          type: 'B/S',
          capacity: 5654,
          number: 4565,
          probe: 6644,
          task: 568
        },
      ],
    }
  }
}
</script>

<style scoped>
#scrollArea {
  /* height: 100%; */
}
.demonstration {
  height: 0.35rem;
  width: 100%;
  margin-top: 0.1875rem;
  display: flex;
  justify-content: space-between;
}
.demonstration span {
  color: red;
  padding: 0.125rem 0.05rem 0;
  font-size: 0.2rem;
  text-align: center;
  font-family: "KaiTi";
}
.item span {
  /* color: #fff;
  padding: 0.0625rem 0.05rem 0;
  font-size: 0.1875rem;
  text-align: center;
  font-family: "YouYuan"; */
  height: 100%;
  float: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  padding-left: 0rem;
}
.item span:nth-child(1) {
  width: 14%;
}
.item span:nth-child(2) {
  width: 7%;
}
.item span:nth-child(3) {
  width: 18%;
}
.item span:nth-child(4) {
  width: 22%;
}
.item span:nth-child(5) {
  width: 15%;
}
.item span:nth-child(6) {
  width: 24%;
}
.seamless-warp {
  height: 2.8rem;
  overflow: hidden;
  color: #fff;
  margin-top: 0.25rem;
}
</style>