//promise 的本质是一个回调函数

function ajax(url){
  return new Promise(function(resolve,reject){
    $.get(url,function(res){
      resolve(res);
    },function(e){
      reject(e);
    },'json')
  });
}


var a = ajax("a.json");
var b = ajax("a.json");
var c = ajax("a.json");

a.then(function(data){
  console.log(data);
}).catch(function(err){
  console.log(err);
});


Promise.all([a,b,c]).then(function(data){
  console.log(data);
});