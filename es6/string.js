//ES6 为字符串添加了遍历器接口（详见《Iterator》一章），使得字符串可以被for...of循环遍历。

for (let codePoint of 'foo') {
  console.log(codePoint)
}
// "f"
// "o"
// "o"

//at()

'abc'.at(0) // "a"
'𠮷'.at(0) // "𠮷"

//includes(str,n), startsWith(str,n), endsWith(str,n)  n表示查询str的前n个字符
/*
includes()：返回布尔值，表示是否找到了参数字符串。
startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。
*/

let s = 'Hello world!';

s.startsWith('Hello') // true
s.endsWith('!') // true
s.includes('o') // true


// repeat(n) 将字符串重复n次
'x'.repeat(3) // "xxx"
'hello'.repeat(2) // "hellohello"
'na'.repeat(0) // ""


//模板字符串 `str`  用  " ` " 符号包裹的字符串
//使用 ${a} 在模板字符串中嵌入a变量 、、大括号内部可以放入任意的 JavaScript 表达式，可以进行运算，以及引用对象属性。 
`
  There are <b>${basket.count}</b> items
   in your basket, <em>${basket.onSale}</em>
  are on sale!
`
