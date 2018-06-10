
function *show(){
  let a = 1;

  let data1 = yield $.ajax('a.json'); //yield 中断执行异步操作，并返回

  let b = 3;

  let data2 = yield $.ajax('a.json'); //yield 中断执行异步操作，并返回

  return a+b;
}