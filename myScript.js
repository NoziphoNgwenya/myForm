const form = document.getElementById('form');
const name = document.getElementById('username');
const surname = document.getElementById('sname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

console.log(surname);


form.addEventListener('submit', (e) => {e.preventDefault();
checkInputs();
});

function checkInputs(){
    //getting values
    const nameValue = myname.value.trim();
    const surnameValue=surname.value.trim();
    const emailValue= email.value.trim();
    const passwordValue =password.value.trim();
    const password2Value =password2.value.trim();

    //validating name
    if(nameValue === '')
    {
setErrorFor(myname,"Name cannot be blank");
    }
    else{
setSuccessful(myname);
    }


    //validating surname

    if(surnameValue === '')
    {
setErrorFor(sname,"Name cannot be blank");
    }
    else{
setSuccessful(sname);
    }
//validating email
if(emailValue==='')
{
    setErrorFor(email,"email cannot be blank");
}else if (!isEmail(emailValue))
{
    setErrorFor(email,"Invalid email");
}  else{
    setSuccessful(email);
        }

//validating passsword




}

function setErrorFor(input,message)
{
const formControl= input.parentElement;
const small= formControl.querySelector("small");
// adding an error message
small.innerText= message;

//adding error class
formControl.className ='form-control error';
}

function setSuccessful(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
