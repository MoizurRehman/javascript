var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
function design(){
document.getElementById("password").style.backgroundColor="purple";
}
function design2(){
document.getElementById("password").style.backgroundColor="aqua";
}
function show(){
if(document.getElementById("password").value=="")
{
alert("Please Enter Password");
}
else{
alert("Your Passwor is = "+document.getElementById("password").value);
}
}