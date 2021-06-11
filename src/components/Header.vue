<template>
  <div id="header">
    <span id="pageName">当前目标系统:{{ $route.params.project }}</span>
    <span id="showTime">
      <em class="el-icon-time"></em>
      {{ currenttTime }}
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 对象格式
      targetSystem: "facebook",
      preUrl: "/icon/",
      addUrl: ".png",
      currenttTime: new Date(),
    };
  },
  mounted() {
    let _this = this; // 声明一个变量指向Vue实例this，保证作用域一致
    this.timer = setInterval(() => {
      _this.currenttTime = new Date(); // 修改数据date
    }, 1000);
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer); // 在Vue实例销毁前，清除定时器
    }
  },
};
</script>

<style>
#header {
  height: 80px;
  /* 使行高等于dom元素高度以实现垂直居中 */
  line-height: 80px;
  border-bottom: 5px solid rgba(102, 153, 153, 0.6);
}
#pageName {
  float: left;
  color: rgb(255, 255, 255);
  font-size: 30px;
}
#aimIcon {
  float: left;
  height: 90%;
  padding: 0.0625rem 0 0 0.125rem;
}
#aimIcon img {
  width: 50px;
  margin-top: 12px;
}
#switchAim {
  float: left;
  padding-left: 30px;
}
#showTime {
  color: rgb(255, 255, 255);
  float: right;
}
#showTime em {
  font-size: 15px;
}
</style>
