// class 

// class CreatePencil{
//     constructor(name,company,price,color){
//         this.name=name;
//         this.company=company;
//         this.price=price;
//         this.color=color;

//     }

//     erase(){
//         document.body.querySelectorAll("h1").forEach((elem)=>{
//             if(elem.style.color=== this.color){
//                  elem.remove();

//             }
           
//         })
//     }
    // class ke andr method
//     write(text){
//         let h1= document.createElement("h1");
//         h1.textContent = text;
//         h1.style.color = this.color;
//         document.body.appendChild(h1);
                
//     }
// }
// let p1 = new CreatePencil("doms","doms",10,"black");
// let p2 = new CreatePencil("apsara","apsara",10,"blue");

// extends
class User {
    constructor(name, address, username, email) {
        this.name = name;
        this.address = address;
        this.username = username;
        this.email = email;
        this.role = "user";
    }
     checkRole(){
        // if(show){
        //     let h2=document.createElement("h2");
        //     h2.textContent=`you are a ${this.role}`;
        //     document.body.appendChild(h2);
        // }
        return (`you are a ${this.role} `);
        
     }

    write(text) {
        let h1 = document.createElement("h1");
        h1.textContent = `${this.name}: ${text}`;
        document.body.appendChild(h1);
    }
}

class Admin extends User {
    constructor(name, address, username, email) {
        super(name, address, username, email);
        this.role = "admin";
    }

    remove() {
        document.querySelectorAll("h1").forEach(function(elem) {
            elem.remove();
        });
    }
}

let u1 = new User("laveesh", "dhampur", "lavi2610", "laveesh@26gmail.com");
let u2 = new User("aditya", "benipur", "aadi0707", "harshit@26gmail.com");
let u3 = new User("nikhil", "ramo-roopur", "nikku18", "nikhil@26gmail.com");
let a1 = new Admin("kanika", "moradabad", "kanu1702", "kanikaaa@26gmail.com");

// u1.checkRole();
// a1.checkRole();



let coffee = {
    color:"dark",
    drink:function(){
        console.log("very nice");

    },
};

let chocolateCoffee= Object.create(coffee);
// console.log(chocolateCoffee);
chocolateCoffee.taste="bitter";
chocolateCoffee.drink();