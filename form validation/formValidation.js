
function validate(){
    
let firstName = document.getElementById('firstName').value;
let lastName = document.getElementById('lastName').value;
let Email = document.getElementById('Emailid').value;
let mobile = document.getElementById('PhoneNo').value;
let state = document.getElementById('StateName').value;
let code = document.getElementById('Pincode').value;

let tnc = document.getElementById("tncheck").checked;

if(firstName === ''){
    document.getElementById("firstNameInvalid").style.display = 'block'
    document.getElementById("firstNameValid").style.display = 'none'
}
else{
    document.getElementById("firstNameValid").style.display = 'block'
    document.getElementById("firstNameInvalid").style.display = 'none'
}

if(lastName === ''){
    document.getElementById("lastNameInvalid").style.display = 'block'
    document.getElementById("lastNameValid").style.display = 'none'
}
else{
    document.getElementById("lastNameValid").style.display = 'block'
    document.getElementById("lastNameInvalid").style.display = 'none'
    
}

if(Email === '' || !Email.includes('@') || Email.startsWith('@') || !Email.includes('.') || Email.slice(Email.lastIndexOf('.')).length < 3){
    document.getElementById("emailInvalid").style.display = 'block'
    document.getElementById("emailValid").style.display = 'none'
}
else{
    document.getElementById("emailValid").style.display = 'block'
    document.getElementById("emailInvalid").style.display = 'none'
    
}

if(mobile==='' || mobile.length!=10 || Number(mobile[0]) < 6){
    document.getElementById("phoneInvalid").style.display = 'block'
    document.getElementById("phoneValid").style.display = 'none'
}
else{
    document.getElementById("phoneValid").style.display = 'block'
    document.getElementById("phoneInvalid").style.display = 'none'
}

if(code==='' || code.length!=6){
    document.getElementById("zipInvalid").style.display = 'block'
    document.getElementById("zipValid").style.display = 'none'
}
else{
    document.getElementById("zipValid").style.display = 'block'
    document.getElementById("zipInvalid").style.display = 'none'
}

if(!tnc){
    document.getElementById("tncinvalid").style.display = 'block'
}
else{
    document.getElementById("tncinvalid").style.display = 'none'
}

if(state===''){
    document.getElementById("stateInvalid").style.display = 'block'
    document.getElementById("stateValid").style.display = 'none'
}
else{
    document.getElementById("stateValid").style.display = 'block'
    document.getElementById("stateInvalid").style.display = 'none'
}
}

