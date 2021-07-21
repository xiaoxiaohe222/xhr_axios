let promise = new Promise((resolve, reject)=>{

    setTimeout(()=>{
        resolve("111");
        console.log(promise);
    },1000)
})

console.log(promise);
promise.then(
    (value)=>{console.log(value)},
    (reason)=>{console.log(reason)}
    )

console.log("主线程的代码");