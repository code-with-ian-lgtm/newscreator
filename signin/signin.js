
let signupBtn = document.getElementById("signupBtn")
let signinBtn = document.getElementById("signinBtn")
let namefield = document.getElementById("namefield")
let title = document.getElementById("title")


signinBtn.onclick = function(){
    namefield.style.maxHeight = "0"
    title.innerHTML = "Sign In"
    signupBtn.classList.add("disable")
    signinBtn.classList.remove("disable")
    window.alert("signIn successful!")

}
signupBtn.onclick = function(){
    namefield.style.maxHeight = "60px"
    title.innerHTML = "Sign Up"
    signupBtn.classList.remove("disable")
    signinBtn.classList.add("disable")
    window.alert("signUp successful!")
}

// function myFunction(){
//     var un = document.forms["myForm"]["Uname"].value;
//     var pw = document.forms["myForm"]["pass"].value;
//     if(un=="student" && pw=="1234"){
//         window.location.href="index.html"
//     }
//     else{
//         alert("Invalid ")
//     }
// }