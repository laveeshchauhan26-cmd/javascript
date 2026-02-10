let data ="seret information";
class user{
    constructor(name,email){

        this.name=name;
        this.email=email;

    }
    viewData(){
        console.log("data=",data);

    }  
}

class admin extends user{
    constructor(name,email){
        super(name,email);
    }
    editdata(){
        data="some new value";
    }
}

let student1= new user("lavi","lavi@email.com");
let student2=new user("aman","aman@email.com");

let admin = new admin("admin","admin@gmail.com");




