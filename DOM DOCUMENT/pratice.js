// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText=h2.innerText+"from apna collage students";




let div = document.querySelectorAll(".box");
let idx =1;
for(div of div ){
    div.innerText = `new unique value ${idx}`;
    idx++;
} 