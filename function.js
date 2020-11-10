const promiseA = new Promise(myExecutorFunc);
const promiseB = promiseA.then(handleFulFilled1, handleReject1);
const promiseC = promiseA.then(handleFulFilled2, handleReject2);

new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000);
}).then(function(result){
  alert(result);
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(result * 2), 1000)
  });
}).then(function(result) {
  alert(result);
  return new Promise((resolve, reject) =>{
    setTimeout(() => resolve(result * 2), 1000);
  });
}).then(function(result) {
  alert(result);
});
/*
const promise = new
Promise((resolve, reject) => {
const randomNumber =
Math.random();
setTimeout(() => {
if(randomNumber < ) {
resolve ("Sta resiti");

} else {
reject ("Sta nije ok");
}
}, broj milisekundi);
});
 */
