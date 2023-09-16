const fnAsync=()=>{
  return new Promise((resolve,reject)=>{
 (true)
      ? setTimeout(()=>{
        resolve("async")
      },2000): reject(new Error("error"))
    
  })
}
const anotherFn=async ()=>{
  const data=await fnAsync()
  console.log(data)
  console.log("hello")
}
anotherFn()
  console.log("hello")
