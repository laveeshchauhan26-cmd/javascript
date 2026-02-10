// async function hello(){
//     console.log("heello");
// }


// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("weather information");
//         resolve(200);
//         },3000);
        
//     });
// }
// async function getweatherdata(){
//     await api();
//     await api();
// }
 




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



//async-await

async  function getallData(){
    await getData(1);
    await getData(2);
    await getData(3);
}


///IIFE function
(async  function (){
    await getData(1);
    await getData(2);
    await getData(3);
}) ();
