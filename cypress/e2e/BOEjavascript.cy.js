// settimeout;

// console.log("hello")
// setTimeout(()=>{
//     console.log("lokesh!");
// },4000)

// console.log("today class at 1pm");
// setTimeout(()=>{
//     console.log("dont miss the class")
    
// },2000)

// callback;

// function preproduction(callback){
//     setTimeout(() => {
//         console.log("pre-production work started ")
//         callback()
//     },1000)
// }

// function movieshooting(callback){
//     setTimeout(() => {
//         console.log("shooting work started")
//         callback()
//     },4000)
// }

// function postproduction(callback){
//     setTimeout(() => {
//         console.log("post-production work started")
//         callback()
//     }, 3000)
// }

// preproduction(()=>{
//     movieshooting(()=>{
//         postproduction(()=>{
//             console.log("movie ready to release")
//         })
//     })
// })

// promise
//  function preproduction(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("pre production work started")
//         }, 1000);
//     })
//  }

//  function movieshooting(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("shooting work started")
//         }, 4000);
//     })
//  }

//  function postproduction(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("post production work started")  
//         }, 3000);
//     })
//  }

//  preproduction()
//  .then(data=>{console.log(data);return movieshooting()})
//  .then(data=>{console.log(data);return postproduction()})
//  .then(data=>{console.log(data);console.log("movie ready to release")})

// if else condition(catch(error))method

// function preproduction(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let preproduction = true;
//             if(preproduction){
//                 resolve("preproduction work started")
//             }else
//             reject("movie drropped initially")
//         },1000);
//     })
// }

// function movieshooting(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let movieshooting = false;
//             if(movieshooting){
//                 resolve("shooting work started")
//             }else
//             reject("movie dropped during shooting")
//         }, 4000);
//     })
// }

// function postproduction(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let postproduction = true;
//             if(postproduction){
//                 resolve("post-production started")
//             }else
//             reject("movie delayed due to postproduction issues")
//         }, 3000);
//     })
// }
// preproduction()
// .then(data=>{console.log(data);return movieshooting()})
// .then(data=>{console.log(data);return postproduction()})
// .then(data=>{console.log(data);console.log("movie ready to release")}).catch((error)=>{console.error(error)
// })

// async and await

// async function movie() {
//     try{
//         const preproduction=await preproduction()
//         console.log(preproduction);
//         const movieshooting=await movieshooting()
//         console.log(movieshooting);
//         const postproduction=await postproduction()
//         console.log(postproduction);
//         console.log("movie released");
//     }
//     catch(error){
//         console.error(error);
//     }
// }
// movie()

// charcount

// function charcount(str){
//     let charcount={};
//     for(let i=0;i<str.length;i++){
//         let char = str[i]
//         if(charcount[char]){
//             charcount[char]++
//         }else{
//             charcount[char]=1
//         }
//     }
//     for(let char in charcount){
//         console.log(`${char}occurs${charcount[char]}${charcount[char]>1?'times':time}`)
//     }
// }
// let str= "rajaram"
// charcount(str)