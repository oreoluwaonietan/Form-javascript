function displayUserDetails(){
let fullname = prompt ("Enter your Fullname")

while (validateFullname(fullname) == false) {
    fullname = prompt ("Fullname must have more than 2 characters.Please enter a valid fullname")
}

if(fullname == null){
    return
}

//Enter Email
let emailname = prompt ("Enter your Email")

while (validateEmail(emailname) == false) {
    emailname = prompt ("Email is invalid.Please enter a valid email")
}

if(emailname == null){
    return
}
//enter password
let password = prompt ("Enter your password")

while (validatePassword(password) == false) {
    password = prompt ("password is invalid.Please enter a valid password")
}

if(password == null){
    return
}
//confirm password
let passwordconfirm = prompt ("Confirm your password")
while (passwordconfirm !== password){
    passwordconfirm = prompt ("password incorrect.Confirm your password again!")
}

if(passwordconfirm == null){
    return
}

//Age
let age = prompt ("insert your age")
while (age <= 17){
    age = alert ("You cannot register,You are Underage ")
}

if (age >= 18){
    age = alert("Registration Successful!!")
}
if(age == null){
    return
}
console.log (fullname,emailname,password,passwordconfirm,age)

}
displayUserDetails()
alert ("You have come to the end of this program!! Goodbye")


function validateFullname(fullname) {
    if (fullname == null) {
        return true
    }
    if (fullname. length <= 2) {
        return false
    } else {
        return true
    }
}

function validateEmail(emailname) {
    if (emailname == null) {
        return true
    }
    if (!emailname.includes("@")){
        return false
    }
  else {
        return true
    }
}

function validatePassword(password) {
    if (!password) return true;

    return (
        password.length >= 8 &&
        /[A-Z]/.test(password) &&
        /[0-9]/.test(password) &&
        /[^a-zA-Z0-9]/.test(password)
    );
}




