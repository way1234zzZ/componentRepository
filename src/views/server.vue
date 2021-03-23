<template>
  <el-container>
    <el-header>
      <div class="headers"></div>
      <div class="headers">
        <targetCapacity />
      </div>
    </el-header>
    <el-main>
      <div class="table">
        <el-table :data="tableData" border ref="table">
          <el-table-column prop="server" label="服务器">
          </el-table-column>
          <el-table-column prop="monthTarget" label="当月目标">
          </el-table-column>
          <el-table-column prop="monthDone" label="当月实际完成">
          </el-table-column>

          <el-table-column label="当月完成率">
            <template slot-scope="scope">
              <el-progress :percentage="Math.ceil(scope.row.monthDone/scope.row.monthTarget*100)"></el-progress>
            </template>
          </el-table-column>

          <el-table-column prop="yearTarget" label="年度计划目标">
          </el-table-column>
          <el-table-column prop="yearDone" label="年度实际完成">
          </el-table-column>
          <el-table-column label="年度达成率">
            <el-progress :percentage="50"></el-progress>
          </el-table-column>
        </el-table>
      </div>

    </el-main>
  </el-container>
</template>

<script>
import targetCapacity from '@/components/targetCapacity.vue'
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
      ],
      tableheight: 0
    }
  },
  components: {
    targetCapacity
  }
  // mounted() {
  //   this.$nextTick(function () {
  //     console.log(this.$refs.table.$el.offsetTop)
  //     this.tableheight = this.$refs.table.$el.offsetTop - 50;
  //   })

  // }
}
</script>

<style scoped>
.el-container {
  background: url(../../public/bg.jpg) no-repeat;
  background-size: cover;
  min-height: 100vh;
}
.el-header {
  display: flex;
  height: 50vh !important;
}

.headers {
  flex: 1;
  margin: 0.25rem 0.375rem;
  display: flex;
}

.el-main {
  flex: 1;
  color: skyblue;
  /* font-size: 0.25rem; */
  /* position: relative;
  overflow: hidden; */
  /* position: relative; */
  /* 这个200px会被flex自动放大 所以是不是随便设？ */
  height: 2.5rem;
}

.table {
  height: 100%;
  width: 100%;
  position: relative;
}

.table /deep/ .el-table {
  font-size: 0.25rem;
  bottom: 0;
  left: 0;
  position: absolute;
}

.table /deep/ .el-table,
.el-table__expanded-cell {
  background-color: transparent;
}

.table /deep/ .el-table tr,
.table /deep/ .el-table th {
  background-color: transparent !important;
  padding: 0.25rem;
}

.table /deep/ .el-table td {
  padding: 0.25rem;
}

/* .el-row,
.el-col {
  height: 100%;
  display: flex;
} */
/* .header {
  margin: 0.25rem 0.25rem;
  flex: 1;
  border: 1px solid skyblue;
  display: flex;
} */

/* 为什么要flex下的margin：auto才有效 */
/* .introduction {
  color: skyblue;
  font-size: 0.375rem;
  margin: auto;
} */
</style>