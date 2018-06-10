//async函数返回一个 Promise 对象，可以使用then方法添加回调函数。当函数执行的时候，一旦遇到await就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。

async function getStockPriceByName(name) {
  const symbol = await getStockSymbol(name); //同generator yield 中断去执行异步操作，然后返回结果共后续调用；
  const stockPrice = await getStockPrice(symbol); //同generator yield 中断去执行异步操作，然后返回结果共后续调用；
  return stockPrice;
}

getStockPriceByName('goog').then(function (result) {
  console.log(result);
});