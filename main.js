// form validation 
let btn = document.getElementById("submit");
let email = document.getElementById("email");
let error = document.getElementById("error");
let regex = /^\w+\.*\w*\@\w+\.\w{2,4}$/;

let img = document.createElement("img");
img.src = "images/icon-error.svg"
img.alt = "validation error"
btn.addEventListener("click",(e)=>{
    if(!regex.test(email.value)){
        e.preventDefault();
        error.innerHTML = "Please provide a valid Email"
        error.style.cssText = "text-align:left;margin-left:15px;color:hsl(0, 93%, 68%);"
        let errImg = document.querySelector("form > div").insertBefore(img,btn)
        errImg.style.cssText = "position:absolute;right:70px;top:8px;"
    }
})