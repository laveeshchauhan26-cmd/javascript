// let arr =[65,89,90,95,92,101];
//  let  array = arr.filter((val)=>{
//    return val>90;
//  })

//  console.log(array);



let n =prompt("enter the array no.:");
let a=[];
for(let i=1;i<=n;i++){
   a[i-1] = i;
}
console.log(a);

let sum = a.reduce((res,curr)=>{
   return res+curr;

});

console.log(sum);


let product = a.reduce((res,curr )=>{
   return res*curr;
});

console.log("product=",product)