<template>
  <div class="root">
    <div class="head">
      <img src="../../public/top_title.png" />
    </div>
    <div class="firstRow">
      <el-row :gutter="20">
        <el-col :span="7">
          <div class="content"></div>
        </el-col>
        <el-col :span="10">
          <div class="content"></div>
        </el-col>
        <el-col :span="7">
          <div class="content"></div>
        </el-col>
      </el-row>
    </div>
    <div class="secondRow">
      <el-row :gutter="20">
        <el-col :span="6" class="divided">
          <el-row>
            <el-col>
              <div class="content"></div>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <div class="content"></div>
            </el-col>
          </el-row>
        </el-col>

        <el-col :span="12">
          <div class="content"></div>
        </el-col>

        <el-col :span="6" class="divided">
          <el-row>
            <el-col>
              <div class="content"></div>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <div class="content"></div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  computed: {},
  data() {
    return {};
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.root {
  height: 100vh;
  width: 100vw;
  background: url(../../public/bgg.jpg) no-repeat 100%;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
}
.head {
  height: 1.1rem;
  flex-grow: 0;
  > img {
    width: 100%;
    padding-top: 0.1rem;
  }
}
.firstRow {
  flex: 1;
  > .el-row {
    height: 100%;
    width: 100%;
    margin: 0 !important;
    > .el-col {
      height: 100%;
      display: flex;
      flex-direction: column;
      > .content {
        flex: 1;
      }
    }
  }
}
.secondRow {
  flex: 1;
  > .el-row {
    height: 100%;
    width: 100%;
    margin: 0 !important;
    > .el-col {
      height: 100%;
      display: flex;
      flex-direction: column;
      > .content {
        flex: 1;
        margin-top: 0.125rem;
      }
    }
  }
}
.divided {
  > .el-row {
    > .el-col {
      height: 100%;
      display: flex;
      flex-direction: column;
      > .content {
        flex: 1;
        margin-top: 0.125rem;
      }
    }
  }
  > .el-row:nth-child(1) {
    flex: 1.2;
  }
  > .el-row:nth-child(2) {
    flex: 1;
  }
}
.content {
  border: 1px solid rgba(25, 186, 139, 0.17);
  background: rgba(255, 255, 255, 0.04);
}
</style>
