const arr =[1,2,3,4,5,6];

const intialvaue =0;
const sumwithintial= arr.reduce(
    (accumalator, currentvalue)=> accumalator +currentvalue,
    intialvaue,
);
console.log(sumwithintial);