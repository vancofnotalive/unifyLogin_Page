function inputChange(element) {
    
    let parents  = document.querySelectorAll("._email");
    parents.forEach(p => {
       let icon = p.querySelector("i");
     let inputType = p.getAttribute("data-inputType");
    let input = p.querySelector("input")
    let inputText = p.querySelector("._input-text");
    if (inputType == "both") {
        p.setAttribute("data-inputType" , "username");
        icon.className = "fa-solid fa-signature"
        input.setAttribute("placeholder" , "Username")
        if (inputText) {
            inputText.innerText = "Username"
        }
    }
    else if (inputType == "username") {
        p.setAttribute("data-inputType" , "email");
        icon.className = "fa-solid fa-envelope"
        input.setAttribute("placeholder" , "Email address")
        if (inputText) {
            inputText.innerText = "Email address"
        }
    }
    else {
      p.setAttribute("data-inputType" , "both");
        icon.className = "fa-solid fa-user"
        input.setAttribute("placeholder" , "Email address or username")  
        if (inputText) {
            inputText.innerText = "Email address or username"
        }
    }
   })
}

function showError(inputName , errorText) {
    document.querySelectorAll("._" + inputName).forEach(inp => {
       let errorContainer = inp.querySelector("._error-container")
       let errorTextElement = errorContainer.querySelector("._error-text");
       errorTextElement.innerText = errorText;
       errorContainer.className = "_error-container _error-container-none";
       setTimeout(() => {

           errorContainer.className = "_error-container _error-container-active";
        }, 1)
    })
}

function removeError(inputName) {
      document.querySelectorAll("._" + inputName).forEach(inp => {
       let errorContainer = inp.querySelector("._error-container")
       let errorTextElement = errorContainer.querySelector("._error-text");
       errorTextElement.innerText = "";
       errorContainer.className = "_error-container _error-container-none";
    })
}
function removeAllErrors() {
       document.querySelectorAll("._email").forEach(inp => {
       let errorContainer = inp.querySelector("._error-container")
       let errorTextElement = errorContainer.querySelector("._error-text");
       errorTextElement.innerText = "";
       errorContainer.className = "_error-container _error-container-none";
    })
       document.querySelectorAll("._password").forEach(inp => {
       let errorContainer = inp.querySelector("._error-container")
       let errorTextElement = errorContainer.querySelector("._error-text");
       errorTextElement.innerText = "";
       errorContainer.className = "_error-container _error-container-none";
    })
}
function loginButtonState(loading = false) {
    if (loading) {
        document.querySelectorAll("._login-btn").forEach(lbtn => {
            lbtn.classList.remove("_login-btn-normal")
            lbtn.classList.add("_login-btn-loading")
            lbtn.setAttribute("onclick" , "");
            login();
        })
        return;
    }
    document.querySelectorAll("._login-btn").forEach(lbtn => {
            lbtn.classList.remove("_login-btn-loading")
            lbtn.classList.add("_login-btn-normal")
            lbtn.setAttribute("onclick" , "loginButtonState(true)");
        })
        return;
}

function login() {
    // replace this with actual ajax when ready
    setTimeout(() => {
        // on success of the ajax:
        loginButtonState();
        
    }, 3000)
}

function getFormData() {
   let emails = Array.from(document.querySelectorAll("._email input")).map(x => x.value.trim());
   let passwords = Array.from(document.querySelectorAll("._password input")).map(x => x.value.trim());
   let data = {};
   if (emails[1] && emails[0] != emails[1]) {
   let device = getCurrentDeviceType();
   if (device == "phone") {
data.email = emails[1];
   }
   }
   else {
    data.email = emails[0];
   }
   
   if (passwords[1] && passwords[0] != passwords[1]) {
   let device = getCurrentDeviceType();
   if (device == "phone") {
data.password = passwords[1];
   }
   }
   else {
    data.password = passwords[0];
   }
return data;
}

function loginWithGoogle() {

}
function loginWithFacebook() {

}
document.querySelectorAll("._login-google").forEach(ele => ele.addEventListener("click" , loginWithGoogle))
document.querySelectorAll("._login-facebook").forEach(ele => ele.addEventListener("click" , loginWithFacebook))


function validateLogin() {
   let data = getFormData();
   if (data.email == "" || data.email == undefined || data.email == null) {
    showError("email" , "Email cannoot be empty");
   }
   
   if (data.password == "" || data.password == undefined || data.password == null) {
    showError("password" , "Email cannoot be empty");
   }
   
}