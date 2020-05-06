const path = require("path");
 
module.exports={
  mode: "production",
  entry: "./src/index.js",
  output:{
    filename: "library.js",
    path: path.resolve(__dirname, "dist"),
    library: "library", // 在全局变量中增加一个library变量
    libraryTarget: "umd" // export to AMD, CommonJS, or window
  }
}