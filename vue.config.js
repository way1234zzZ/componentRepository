module.exports = {
  // 部署应用包时的基本 URL
  publicPath: '/',
  filenameHashing: false,
  devServer: {
    host: '10.1.1.157',
   // host: 'localhost',
    port:'8080',
    proxy: {
      "/api": {
        target: "http://10.10.11.163:8080/",
        changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
        pathRewrite: {
          "^/api": ""
        }
      },
    }
  }
}