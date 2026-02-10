// let p = document.querySelector("p");
// p.addEventListener("click",function(){
//     p.style.color ="green";

// });



// function dblclick(){
//     p.style.color ="yellow";
// }

// p.addEventListener("dblclick",dblclick);
// p.removeEventListener("dblclick",dblclick);


// let input = document.querySelector("input");
// input.addEventListener("input",function( data){
//     // console.log("type");
//        console.log(data);
// });

// input.addEventListener("input",function(dets){
//     if(dets.data!==null){
//         console.log(dets.data);
//     }
// });



// let sel = document.querySelector("select");
// let device= document.querySelector("#device");

// sel.addEventListener("change",function(dets){
//     // console.log(dets.target.value);
//     device.textContent =`${dets.target.value} Device Selected`;
// });






// let h1=document.querySelector("h1");
// window.addEventListener("keydown",function(dets){
//     // console.log(dets.key);
//     if(dets.key===" "){
//         h1.textContent="SPC";
//     }else{
//         h1.textContent = dets.key;
//     }
    
// });





// let btn = document.querySelector("#btn");
// let fileinp=document.querySelector("#fileinp")
// btn.addEventListener("click",function(){
//     fileinp.click();
    

// });
// fileinp.addEventListener("change",function(dets){
//     // btn.textContent=dets.target.files[0].name;
//     const file=dets.target.files[0];
//     if(file){
//         btn.textContent = file.name;
//     }
// });



//submit event 

let form = document.querySelector("form");
let inputs=document.querySelectorAll("input");
let main=document.querySelector("#main");


form.addEventListener("submit",function(dets){
    dets.preventDefault(); 

   let card=document.createElement("div");
   card.classList.add("card");

   let profile =document.createElement("div");
   profile.classList.add("profile");

   let img = document.createElement("img");
   img.setAttribute("src",inputs[0].value);

    let h3 = document.createElement("h3");
    h3.textContent =  inputs[1].value;
    let h5 = document.createElement("h5");
    h5.textContent =  inputs[2].value;
    let p = document.createElement("p");
    p.textContent = inputs[3].value;

    profile.appendChild(img);
    card.appendChild(profile);

   card.appendChild(h3);
   card.appendChild(h5);
   card.appendChild(p);

   main.appendChild(card);


   inputs.forEach(function(inp){
    if(inp.type!=="submit"){
        inp.value="";
    }
   });
});






