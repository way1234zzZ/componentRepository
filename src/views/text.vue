<template>
  <div class="parent">
    <div class="children children1">
      <div class="content">
      </div>
    </div>
    <div class="children children2">
      <div class="content">

      </div>
    </div>
  </div>

</template>
<script>
export default {
  computed: {
    // percentage: function () {
    //   var percentageMonth = new Array(5)
    //   for (let i = 0; i < this.tableData.length; i++) {
    //     percentageMonth = this.tableData[i].monthDone / this.tableData[i].monthTarget
    //   }
    //   return percentageMonth

    // }
  },
  data() {
    return {
      tableData: [{
        server: '香港',
        monthTarget: 8000000,
        monthDone: 4723463,
        //monthPercent: "1500000 / 8000000",
        yearTarget: 20000000,
        yearDone: 17000000,
        //yearPercent: ''
      }, {
        server: '墨尔本',
        monthTarget: 8000000,
        monthDone: 2453345,
        //monthPercent: '',
        yearTarget: 20000000,
        yearDone: 17000000,
        //yearPercent: ''
      }, {
        server: '伦敦',
        monthTarget: 8000000,
        monthDone: 2454671,
        //monthPercent: '',
        yearTarget: 20000000,
        yearDone: 17000000,
        //yearPercent: ''
      }, {
        server: '纽约',
        monthTarget: 8000000,
        monthDone: 2457214,
        //monthPercent: '',
        yearTarget: 20000000,
        yearDone: 17000000,
        //yearPercent: ''
      },
      {
        server: '东京',
        monthTarget: 8000000,
        monthDone: 6575728,
        //monthPercent: '',
        yearTarget: 20000000,
        yearDone: 17000000,
        //yearPercent: ''
      }
      ]
    }
  }
}
</script>
<style scoped>
.parent {
  background: url(../../public/bg.jpg) no-repeat;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.children {
  flex: 1;
  /* overflow: hidden; */
  /* position: relative; */
}

.children2 {
  padding: 20px;
}
.content {
  width: 100%;
  height: 100%;
  /* position: absolute; */
}
</style>
