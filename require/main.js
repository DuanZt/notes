//使用require.config()方法，我们可以对模块的加载行为进行自定义。require.config()就写在主模块（main.js）的头部。参数就是一个对象，这个对象的paths属性指定各个模块的加载路径。
require.config({
  //  baseUrl: "js/lib",//模块加载路径
  baseUrl: "", //模块加载路径
  paths: { //定义模块
    "jquery": "jquery",
    "underscore": "underscore",
    "math": "moduleA"
  },
  //加载不支持AMD规范的模块
  shim: {
    'underscore': {　　　　　　
      exports: '_'　　　　
    },
    'jquery.scroll': {　　　　
      deps: ['jquery'], //模块依赖，选填
      exports: 'jQuery.fn.scroll' //输出变量名，供共后续使用　
    }
  }
});


　　
require(['math'], function(math) {

  　　　　
  alert(math.add(1, 1));

  　　
});
　　
