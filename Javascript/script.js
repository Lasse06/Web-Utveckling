let firstName=document.getElementById("firstname")
let lastName=document.getElementById("lastname")
let result=document.getElementById("email-result")

function generateEmail(){
    result.innerHTML=firstName.value + "." + lastName.value + "@gmail.com"

}