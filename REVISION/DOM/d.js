// let abcd=  document.getElementById("abcd");

// console.log(abcd);
// console.dir(abcd);


// let abcd = document.getElementsByClassName("abcd");
// console.log(abcd);


//  let h1 = document.querySelector("h1");
//  h1.innerText="sab kuch sahi hoga";
// h1.textContent="thoda time lagega";

// h1.innerHTML="<i>hey</i>";


// let a = document.querySelector("a");
// a.setAttribute("href","https://www.google.com");


// let img = document.querySelector("img");
// img.setAttribute(
//     "src",
//     "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
// );



// let a = document.querySelector("a");
//  console.log(a.getAttribute("href"));


// let a = document.querySelector("a");
// console.log(a.removeAttribute("href"));


// let h1= document.createElement("h1");
// h1.textContent="hello shab";
// document.body.appendChild(h1);
// console.log(h1);





// let h1=document.querySelector("h1");
// h1.style.color="red";
// // console.dir(h1);
// h1.style.backgroundColor="blue";



// let h1 = document.querySelector("#h1");
// h1.classList.add("hulu")


//  let heading = document.querySelector("#heading");
//  heading.textContent="welcome to sheriyans!";





// select all <li> elements and prit their text using a loop
// let lis = document.querySelectorAll("li");
// lis.forEach(function(val){
//     console.log(val.textContent);
// });


// for( let i=0;i<lis.length;i++){
//     console.log(lis[i].textContent);
// }



//select a pragraph and replace its content with:

// let p = document.querySelector("p");
// p.innerHTML="<b>update</b> by java script";





// add a title attrinut to a div dynamically.
// let div = document.querySelector("div");
// div.setAttribute("title","some info");


// let btn = document.querySelector("button");
// btn.removeAttribute("disabled");




// let ul= document.querySelector("ul");
// let li = document.createElement("li");
// li.textContent="new task";

// ul.appendChild(li);



let li = document.querySelectorAll("ul li:nth-child(2n)");
li.forEach(function(ele){
    ele.classList.add("highlight");
});