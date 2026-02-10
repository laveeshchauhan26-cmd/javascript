// console.log("hii1");
// console.log("hi2");
// setTimeout(()=>{
//     console.log("hello");
// },2000);
// console.log("hey"); 


// function abcd(fnc){
//     setTimeout(fnc,Math.floor(Math.random()*10)*1000);

// }
// abcd(function(){
//     console.log("hey");
// });




//callbacks



// function profile(name,cb){
//     console.log("fetching the profile data...")
//     setTimeout(()=>{
//         cb({_id:121,name,age:26});      
//     },2000);
// }

// function posts(id,cb){
//     console.log("fetching all post data...");
//     setTimeout(()=>{
//         cb({_id:id,posts:["hello","hey"] });

//     },3000);
// }
// function saved(id,cb){
//     console.log("fetching saaved posts..")

//     setTimeout(()=>{
//         cb({_id:id,saved:[1,2,3,]});

//     },3000)

// }
 
// callback hell
// profile("harsh",function(data){
//     console.log(data);
//     posts(data._id,function(posts){
//         console.log(posts);
//         saved(data._id,function(saved){
//             console.log(saved);

//         });
//     });
   
// });


// let pr=new promise(function(res,rej){
//     setTimeout(()=>{
//         let rn= Math.floor(Math.random()*10);
//         if(rn>5) res("resolved with"+rn);
//             else rej("rejected with "+rn);
//     },3000);

// });

// pr
// .then(function(val){
//     console.log(val);
// })
// .catch(function(val){
//     console.log(val);
// })




//async /await


let pr=new promise(function(res,rej){
    setTimeout(()=>{
        let rn= Math.floor(Math.random()*10);
        if(rn>5) res("resolved with"+rn);
            else rej("rejected with "+rn);
    },3000);

});
 async function abcd (){
    try{
        let val = await pr ;
        console.log(val);
    } 
    catch(err){
        console.log(err);

    }  
}
abcd();