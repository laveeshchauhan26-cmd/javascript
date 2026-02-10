let email = document .querySelector("#email");
let password = document .querySelector("#password");
let form = document .querySelector("form");

form.addEventListener("submit",function(dets){
    dets.preventDefault();

    document.querySelector("#email-error").textContent="";
    document.querySelector("#password-error").textContent="";

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = 
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let emailans = emailRegex.test(email.value);
    let passwordans = passwordRegex.test(password.value);

    let isvalid = true;

    if(!emailans){
        document.querySelector("#email-error").textContent="Email is incorrect";
        document.querySelector("#email-error").Style.display="initial";
        isvalid= false;
    }

    if(!passwordans){
        document.querySelector("#password-error").textContent=
         "password is incorrect";
          document.querySelector("#password-error").Style.display="initial";
          isvalid= false;
    }

    if(isvalid){
        document.querySelector("#resultmessge").textContent=
        "Everything is correct";
    }
});




// let nm = document .querySelector("#name");
// let form = document.querySelector("form");

// form.addEventListener("submit",function(dets){
//     dets.preventDefault();

//     if(nm.value.length<=2){
//         document.querySelector("#hide").style.display="initial";
//     }else{
//         document.querySelector("#hide").style.display="none";
//     }
// });