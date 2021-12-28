 let userName=document.getElementById("txtUserName");
 let email=document.getElementById("txtEmail");
 let password=document.getElementById("txtPassword");
 let confirmPassword=document.getElementById("txtConfirmPassword");
 let form=document.querySelector("form");

 function validateInput(params) {
    //  console.log("validate input")

    // CHECK USERNAME IS EMPTY
    if(userName.value.trim()===""){
        // let parent=userName.parentElement;
        // let messageEle=parent.querySelector("small");
        // messageEle.style.visibility="visible";
        // messageEle.innerText="User Name cannot be empty";

        onError(userName, "user name can not be empty");
    }

    else{
            // let parent=userName.parentElement;
            // let messageEle=parent.querySelector("small");
            // messageEle.style.visibility="hidden";
            // messageEle.innerText="";

        onSuccess(userName);
        }

        // CHECK FOR EMAIL IS EMPTY

    if(email.value.trim()===""){
        onError(email, "email can not be empty");
        }
    
    else{
        onSuccess(email);
            }    

             // CHECK FOR PASSWORD IS EMPTY

    if(password.value.trim()===""){
        onError(password, "Password can not be empty");
            }
        
    else{
        onSuccess(password);
                }         

                 // CHECK FOR CONFIRM-PASSWORD IS EMPTY

    if(confirmPassword.value.trim()===""){
        onError(confirmPassword, "Confirm Password can not be empty");
            }
        
    else{
        if(password.value.trim()!==confirmPassword.value.trim()){
            onError(confirmPassword, "password are not matching");}
        
        
           onSuccess(confirmPassword);}
                }         

    
        

 document.querySelector("button")
 .addEventListener("click",(event)=>{
     event.preventDefault();
     validateInput();
});

function onSuccess(input,message) {
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="hidden";
    parent.classList.remove("error");
    parent.classList.add("success");
    messageEle.innerText="";
}

function onError(input,message) {
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="visible";
    messageEle.innerText=message;
    parent.classList.add("error");
    parent.classList.remove("success");
}



