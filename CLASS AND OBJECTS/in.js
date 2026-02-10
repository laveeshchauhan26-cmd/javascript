// class parent {
//     hello(){
//         console.log("hello");
//     }
// }

// class child extends parent{
    
// }

// let obj = new child();

class person{
    eat(){
        console.log("eat");

    }
    sleep(){
        console.log("sleep");
    }
}

class engineer extends person{
    constructor(branch){
        super();
        this.branch=branch;
    }
    work(){
        console.log("solve the problem");
    }
}

let mohan=new engineer("computer science");