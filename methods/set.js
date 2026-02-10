let array =[1,2,3,4,5,6,7];


// array.forEach((array)=>{
//     console.log(array*array);
// });

// let calsquare=(array)=>{
//     console.log(array**2);
// };

// array.forEach(calsquare);



// let newarr = array.map((val)=>{
//     return val*val;

// });
// console.log(newarr);

// let calcsquare =(array)=>{
//     console.log(array**2);;
// };


let evenarr = array.filter((val)=>{
    return val%2===0;

});

console.log(evenarr);
