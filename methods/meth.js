// function abc(){
//     console.log("hello");
// }


// function myfunc(abc){
//     return abc;
// }



let array=["delhi","mumbai","haryana"];

// array.forEach( (val)=>{
//     console.log(val);
// });


array.forEach((val,idx,array)=>{
    console.log(val.toUpperCase(),idx,array);
});