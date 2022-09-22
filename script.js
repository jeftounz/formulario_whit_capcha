// document.querySelector() is used to select an element from the document using its ID
let captchaText = document.querySelector('#captcha');
var ctx = captchaText.getContext("2d");
let userText = document.querySelector('#textBox');
let output = document.querySelector('#output');

let phone_number=document.querySelector('#phone');
let phone_label=document.querySelector('#tlf');

ctx.font = "30px Roboto";
ctx.fillStyle = "#08e5ff";



// alphaNums contains the characters with which you want to create the CAPTCHA
let alphaNums = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let emptyArr = [];
// This loop generates a random string of 7 characters using alphaNums
// Further this string is displayed as a CAPTCHA
for (let i = 1; i <= 7; i++) {
    emptyArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
}
var c = emptyArr.join('');
ctx.fillText(emptyArr.join(''),captchaText.width/4, captchaText.height/2);




function validate()
{

let response,c1,c2;  
let ph_number= Number(phone_number.value);
let control=phone_number.value.indexOf(".");
let control2=phone_number.value.indexOf(",");



//We ask that the phone introduced was a number 
if(isNaN(ph_number)===true || (control>0 || control2>0) )
{
c1=false;
phone_label.style.color="Red";
phone_label.innerHTML = "Error, el telefono tiene que ser un numero entero";
}else
{
c1=true;
phone_label.style.color="#7FFF00";
phone_label.innerHTML = "!Correcto¡";
}

//We ask for the capcha introduced
 if (userText.value === c) {
        output.classList.add("correctCaptcha");
        output.innerHTML = "!Correcto¡";
        c2=true;
    } else {
        output.classList.add("incorrectCaptcha");
        output.innerHTML = "Error, introduzca bien el capcha";
        c2=false;
    }

//Once all the data is ok , we make a final decision
if(c1==true && c2==true)
{

response=true;

}else
{

response=false;
}

console.log("la respuesta es:"+response);



return response;
}




/* Cambios realizados 20-09-2022 , 7:28 pm 

1)Eliminacion de los botones y eventos que tiene el capcha al presionar enter
2)



*/ 