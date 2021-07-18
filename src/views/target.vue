<template>
  <el-container direction="vertical" id="el-container">
    <el-header style="height:80px">
      <Header />
    </el-header>
    <el-container id="main">
      <el-aside id="aside">
        <Aside />
      </el-aside>
      <el-main>
        <Main />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import Aside from "@/components/Aside";
import Header from "@/components/Header";
import Main from "@/components/Main";

export default {
  name: "App",
  components: {
    Aside,
    Header,
    Main,
  },
};
</script>

<style lang="scss" scoped>
#el-container {
  position: relative;
  min-height: 100vh;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: url(../../public/bgg.jpg) no-repeat 100%;
  background-size: 100% 100%;
  #main {
    flex: 1;
  }
}
#aside {
  width: 8rem !important;
}
.el-main {
  padding: 0 5px;
}
</style>
