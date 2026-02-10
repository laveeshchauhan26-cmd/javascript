// let obj ={
//     name:"lavi",
//     age:22

// }; 

// let aa="name"


// nesting and deep access
// const user={
//     name:"lavi",
//     address:{
//         city:'dhampur',
//         pin:246762,
//         location:{
//             lat:23.2,
//             lng:77.4,
//         },
//     },
// };


// user.address.location.lng;



// for(let key in obj){
//     console.log(key,obj[key]);
// }


// Object.keys(obj);


//  let obj2={...obj};

//  let obj3= Object.assign({},obj);


//  JSON.stringify(obj);
//   JSON.parse()



// create an object for a student with name,age, and isenrolled
let obj={
    name:"lavi",
    age:22,
    isenrolled: true,
};


// given a dynamic key let key="age ,how will you access user[key]"

let key ="age";
const user={
    age:45,
};

user[key]


// destructure the key "first name " as a variable called firstname.

const user1={
    "first-name":"harsh",
};


let {"first-name":firstname}=user;








const course={
    title:"javascript",
    duration:"4 weeks",
};

Object.entries(course).foreach(function(val){
    consol.log(val[0]+ ": "+val[1]);

});

// use a variable to dynamically assign a property

const key1 ="role";
let obj3= {
    name : "lavi",
    [key]:"admin"
};