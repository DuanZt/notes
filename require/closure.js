// IIFE 写法 (闭包)
(function(){

})()

//闭包可以关联函数运行时的上下文环境里的变量，并保护自身的私有变量
//闭包很有用，因为它允许将函数与其所操作的某些数据（环境）关联起来。这显然类似于面向对象编程。在面向对象编程中，对象允许我们将某些数据（对象的属性）与一个或者多个方法相关联。

//https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures

for (var i = [1,2,3].length - 1; i >= 0; i--) {
  var a = [1,2,3][i];
  (function(){
    var b = 4;
    alert(a); //上下文环境变量
    console.log(b); //私有变量
  })()
}