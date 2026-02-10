// // QUES-1
// abcd();   //this is hoisting
// function abcd(){
//     console.log("hii");

// }


// let abcd=function(){         // this is not hoisting
//     console.log("hii");
// }



// //   QUES-2
// greet()

// function greet(){
//     console.log("hello!");
// }




// ques-3

// let mul=(a,b)=>{
//     return a*b;
// };
// mul()





// Ques-4

// function getscore(...scores){
//     let total=0;
//     scores.forEach( function(val){
//         total+=val;
        

//     });
//     return total;


// }
//  console.log(getscore(10,12,14,16));




//pass a function into another function and then call it 
// function abcd(val){
//     val();

// }
// val(function(){
//     console.log("hey");
// });



// greet()

// var greet= function(){
//     console.log("hii");
// }


//write a bmi calculator
// function bmi(weight ,height){
//     return weight/(height*height);
// }

//console.log(bmi(55,5.4).toFixed());





function discountCalculator(discount){
    return function(){
        return  price-price*(discount/100);

    };
}

let discounter = discountCalculator(10)
console.log(discounter(200));