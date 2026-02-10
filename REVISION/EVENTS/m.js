// let abcd = document.querySelector("#abcd");
// abcd.addEventListener("mouseover",function(){
//     abcd.style.backgroundColor="yellow";
// });


// abcd.addEventListener("mouseout",function(){
//     abcd.style.backgroundColor="red";
// });




//  mousemove

// let abcd = document.querySelector("#abcd");


// window.addEventListener("mousemove",function(dets){
//     abcd.style.top =dets.clientY+"px";

//     abcd.style.left =dets.clientX+"px";
// })



// event object

// let abcd = document.querySelector("#abcd");
// abcd.addEventListener("click",function(dets){
//     console.log(dets);

// });



//event bubbling



// document.querySelector("#nav").addEventListener("click",function(){
//     alert("clicked");
// })







// delegation id todod on list 

//  let ul = document.querySelector("ul");

//  ul.addEventListener("click",function(dets){
//     // alert("clicked");
//     // dets.target.style.textDecoration ="line-through"
    
//         dets.target.classList.toggle("lt");   
// });    





// let a = document.querySelector(".a");
// let b = document.querySelector(".b");
// let c = document.querySelector(".c");

// let btn = document.querySelector("button");

// btn.addEventListener("click",function(){
//     console.log("button clicked");
// },true);

// c.addEventListener("click",function(){
//     console.log("c clicked");
// });

// b.addEventListener("click",function(){
//     console.log("b clicked");
// });

// a.addEventListener("click",function(){
//     console.log("a clicked");
// },true);




let inp = document.querySelector("input");
let span = document.querySelector("span");
inp.addEventListener("input",function(){
    // console.log("input");
    // console.log(inp.value.length);
   let left = 20-inp.value.length;
   span.textContent = left;
   if(left<0){
    span.style.color = "red";
   }
   else{
    span.style.color = "white";
   }
});



