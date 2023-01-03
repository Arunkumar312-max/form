function validate(){
var username=document.getElementById("username").value;

var password=document.getElementById("password").value;
if(username="admin" && password=="user"){
    alert("The login success");
    return false;
}
if(!isNaN (username)){
    alert("Enter alphabets only")
}
if(password<6){
    alert("enter atleast 6 charecter")
}
 else{
   alert("the login failed");
}
}
