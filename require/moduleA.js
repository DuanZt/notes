//require.js加载的模块，采用AMD规范。也就是说，模块必须按照AMD的规定来写。

　　define(['underscore'],function (us){ //定义依赖

　　　　var add = function (x,y){
          console.log(us);
　　　　　　return x+y;

　　　　};

　　　　return {
　　　　　　add: add
　　　　}; //返回模块公用方法

　　});