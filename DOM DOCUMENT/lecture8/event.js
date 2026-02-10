let btn1 = document.querySelector("#btn1");

//  btn1.onclick =(event)=>{
//     console.log(event);
//     // let a =25;
//     // a++;
//     console.log(a);
// }






// btn1.addEventListener("click",(evt)=>{
//     console.log("button  was clicked");
//     ccnsole.log(evt);
// });

// btn1.addEventListener("click",()=>{
//     console.log("button  was clicked");
// });



let modebtn = document.querySelector("#mode");
let body =document.querySelector("body");
let currmode ="light";

modebtn.addEventListener("click",()=>{
    if(currmode==="light"){
        currmode ="dark";
        // document.querySelector("body").style.backgroundColor="black";
        // document.querySelector("body")
        body.classList.add("dark");
         body.classList.remove("light");
    }else{
        currmode="light";
        // document.querySelector("body").style.backgroundColor="white";
       body .classList.add("light");
        body .classList.remove("dark");
    }
  console.log(currmode);  
});
