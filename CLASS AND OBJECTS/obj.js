// const student={
//     fullname:"lavi",
//     marks:80,
//     printmarks:function(){
//         console.log("marks=",this.marks);
//     },
// }; 



// const employee={
//     calctax(){
//         console.log("tax rate is 10%");
//     },
// };

// const karan={
//     salary:45000,

// };

// karan.__proto__=employee;



class toyotocar{
    constructor(brand){    
        console.log("creating a new onject");
        this.brand= brand;
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    setbrand(brand){
        this.brand=brand;
    }
}


let fortuner= new toyotocar("fortuner");
// fortuner.setbrand("fortuner");