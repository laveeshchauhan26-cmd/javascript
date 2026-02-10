// console.log("hello world");
// console.log("hello shree");
// let a =5;
// let b=2;
// console.log("a+b=",a+b);
// console.log("a*b=",a*b);
// let number=prompt("enter a no.");
// if(number%5===0){
//     console.log("multiple of 5");
// }
// else{
//     console.log("not a multiple of 5");
// }
let score= prompt("enter the score:");
let grade;
if(score>=80&& score<=100){
    grade="A"

}
    else if(score>=70&& score<=89){
     grade="B"
}
else if(score>=60&& score<=69){
    grade="C"
}
else if(score>=50&& score<=59){
    grade="D"
}
else{
   grade="F"
}
console.log(grade);