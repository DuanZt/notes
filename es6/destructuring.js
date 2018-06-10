// ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。

let a = 1;
let b = 2;
let c = 3;

// <=>

let [a, b, c] = [1, 2, 3];

//本质上，这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。

let [foo, [[bar], baz]] = [1, [[2], 3]];
foo // 1
bar // 2
baz // 3


// 另一种情况是不完全解构，即等号左边的模式，只匹配一部分的等号右边的数组。

let [x, y] = [1, 2, 3];
x // 1
y // 2



// 解构赋值允许指定默认值。

let [foo = true] = [];
foo // true

let [x, y = 'b'] = ['a']; // x='a', y='b'
let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'

//只有当一个数组成员严格等于undefined，默认值才会生效。




//对象的解构与数组有一个重要的不同。
//数组的元素是按次序排列的，变量的取值由它的位置决定；
//而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。

let { bar, foo } = { foo: "aaa", bar: "bbb" };
foo // "aaa"
bar // "bbb"

let { baz } = { foo: "aaa", bar: "bbb" };
baz // undefined


//对象的解构也可以指定默认值。
//默认值生效的条件是，对象的属性值严格等于undefined。

var {x = 3} = {};
x // 3


//对象的解构赋值，可以很方便地将现有对象的方法，赋值到某个变量。
let { log, sin, cos } = Math;

//上面代码将Math对象的对数、正弦、余弦三个方法，赋值到对应的变量上，使用起来就会方便很多。





//变量的解构赋值用途很多。

//（1）交换变量的值
let x = 1;
let y = 2;

[x, y] = [y, x];

//（2）从函数返回多个值
// 函数只能返回一个值，如果要返回多个值，只能将它们放在数组或对象里返回。有了解构赋值，取出这些值就非常方便。

//（3）函数参数的定义
//解构赋值可以方便地将一组参数与变量名对应起来。

//（4）提取 JSON 数据
//解构赋值对提取 JSON 对象中的数据，尤其有用。

//5）函数参数的默认值

jQuery.ajax = function (url, {
  async = true,
  beforeSend = function () {},
  cache = true,
  complete = function () {},
  crossDomain = false,
  global = true,
  // ... more config
} = {}) {
  // ... do stuff
};

//指定参数的默认值，就避免了在函数体内部再写var foo = config.foo || 'default foo';这样的语句。

/*
（6）遍历 Map 结构

任何部署了 Iterator 接口的对象，都可以用for...of循环遍历。Map 结构原生支持 Iterator 接口，配合变量的解构赋值，获取键名和键值就非常方便。

（7）输入模块的指定方法

加载模块时，往往需要指定输入哪些方法。解构赋值使得输入语句非常清晰。*/

const { SourceMapConsumer, SourceNode } = require("source-map");









//http://es6.ruanyifeng.com/#docs/destructuring