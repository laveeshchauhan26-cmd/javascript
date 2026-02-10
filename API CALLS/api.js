const url ="https://cat-fact.herokuapp.com/facts";
const factpara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getfacts =async()=>{
    console.log("getting data");
    let response= await fetch (url);
    console.log(response);
    let data =await response.json();
    factpara.innertext= data[1].text;

} ;
btn.addEventListener("click",getfacts);
