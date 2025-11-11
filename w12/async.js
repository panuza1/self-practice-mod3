// async 
// console.log("starting...")
// setTimeout(() => console.log("working..."), 5000)
// console.log("ending...")

// test 
async function doSM(hasProblem) {
    return new Promise((resolve, reject) => {
        setTimeout(() => 
            hasProblem ? reject("Fail Working") : resolve("Fully Complete"), 5000
        ) 
    })
}
console.log("Starting...")
const workingStatus = doSM(false) 
console.log(workingStatus)
console.log("ending...")

// 1) using .then().catch()
doSM(true).then((workingStatus) => {
    console.log(workingStatus)
    console.log("ending...")
}).catch((reason)=>{
    console.log(reason)
}).finally((info)=> console.log("All DONE"))


// 2) async-await 
async function runWorking() {
    try{
        const workingStatus = await doSM(true)
        console.log(workingStatus)
        console.log("ending...")
    }catch(err){
        console.log(err)
    } finally {
        console.log("all done")
    }
}
runWorking()