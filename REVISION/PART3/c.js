// function abcd(){
//     let a = 45;
//     let  b=23;
//     var c= 43;
// }


// lexical scope
// function lexical(){
//     let a = 12;
//     function def(){
//         console.log(a);

//     }
// }




//dynamic scoping

// let a =12;
// function abc(){
//     console.log(a);

// }
//   function def(){
//     let a  =13;
//     abc();
//   } 
// def();


// if java script is dynamically scoped the output is 13
// but js is lexical scope so the output is 12


// closure 

// function abcd (){
//     let a =12;
//    return function (){
//     console.log(a);
//     }
// }

// let fnc = abcd();
// fnc();

 


// private counter

// function countForMe(){
//   let c =0;
//   return function(){
//     c++;
//     console.log(c);
//   }
// }

//  let fnc1 = countForMe();
//  fnc1();
//  fnc1();

//  let fnc2= countForMe();
//  fnc2();
//  fnc2();



// encapsulations
function abcd(){
  let a =0;
  return function(){
  
    if(a<5){
        a++;
        console.log("clicked");
    }
    else{
      console.log("error");
    }
    
  }
}

let  fnc =abcd();
fnc();
fnc();
fnc();
fnc();
fnc();



