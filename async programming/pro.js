//  let promise=new Promise((resolve,reject)=>{
//     console.log("i am a promise");
//  });



function getData(dataId,getNextData){
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        console.log("data",dataId);
        resolve("success");
    //   if(getNextData){
    //        getNextData();
    //     }

      }, 3000);

    });

}

// getData(11).then((res)=>{
//     console.log(res);
//     getData(22).then((res)=>{
//         console.log(res);
//     });
// });





// promise chain

getData(1)
.then((res)=>{
    return getData(2);
})
.then((res)=>{
    return getData(3);
}).then((res)=>{
    console.log(res);
}); 





// promises method

// const getpromise =()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("i am a promise");
//         resolve("success");

//     });
// };


// let promise =getpromise()
// promise.then(()=>{
//     console.log("promise fulfilled");
// });




// function asyncfunc(){
//     return new Promise((resolve,reject )=>{
//         setTimeout(() => {
//             console.log("some data1");
//             resolve("success");
//         } ,4000);
//     });
// };
 

// console.log("fetching the data1");
// let p1 =asyncfunc();
// p1.then((res)=>{
//     console.log(res);
// })

