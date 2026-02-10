// function hello(){
//     console.log("hello");
// }
// setTimeout(hello,4000);



// function sum(a,b){
//     console.log(a+b);
// }
// function calculator(a,b,sumcallback){
//     sumcallback(a,b);
// }
// calculator(1,2,sum);




//nesting callbacks

// for(let i =0;i<5;i++){
//  let str  ="";
// for(let j=0;j<5;j++){
//   str=str+j;
// }
// console.log(i,str);
// }



//callbacks hell methods

function getData(dataId,getNextData){
    setTimeout(() => {
        console.log("data",dataId);
      if(getNextData){
        getNextData();
      }
    },    2000);
}

getData(1,()=>{
    console.log("getting data2...");
    getData(2,()=>{
        console.log("getting data3....");
        getData(3);
    });
});