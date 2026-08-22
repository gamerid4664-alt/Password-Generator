let passOne = document.getElementById("pass1")
let passTwo = document.getElementById("pass2")

let passGenerate = 0

let checkSymbol = document.getElementById("checksymbol")

let checkNumber = document.getElementById("checknumber")

let number_array = [1,2,3,4,5,6,7,8,9]
let symbol_array = ["`","@","#","$","%","^","&","*","(",")","-","_",">","<",",","/",":",";","}","{","]","[","|"]
let passwordArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

console.log(passwordArray)

let numValue = 0

let passwordLength = document.getElementById("pass-length")
let passHandle = document.getElementById("pass-handle")


function firstPassword(){
    let availableCharacters = [...passwordArray]
    if(checkSymbol.checked){
         for(let i = 0; i < symbol_array.length; i++){
            availableCharacters.push(symbol_array[i])
         }}
    if(checkNumber.checked){
         for(let j = 0; j < number_array.length; j++){
            availableCharacters.push(number_array[j])
         }
    }

    if(numValue <1 || numValue > 18){
        passHandle.textContent = "Soory, please give password length under 19!"
        passOne.textContent = " "
        return
    }
    else{
    passOne.textContent = ""
    for(let i = 0; i < numValue; i++){
        passGenerate = Math.floor(Math.random() * availableCharacters.length )
        console.log(availableCharacters[passGenerate])
        passOne.textContent += availableCharacters[passGenerate]
        passHandle.textContent = " "
    }
}
}
function secondPassword(){

    let availableCharacters = [...passwordArray]

   if(checkSymbol.checked){
         for(let i = 0; i < symbol_array.length; i++){
            availableCharacters.push(symbol_array[i])
         }}
    if(checkNumber.checked){
         for(let j = 0; j < number_array.length; j++){
            availableCharacters.push(number_array[j])
         }
    }

    
    if(numValue > 18){
        passHandle.textContent = "Soory, please give password length under 19!"
        passTwo.textContent = " "
    }
    else{
    passTwo.textContent = ""
    for(let i = 0; i < numValue; i++){
        passGenerate = Math.floor(Math.random() * availableCharacters.length )
        console.log(availableCharacters[passGenerate])
        passTwo.textContent += availableCharacters[passGenerate]
        passHandle.textContent = " "
    }
}
}
function GeneratePassword(){

    numValue = Number(passwordLength.value)
    firstPassword();
    secondPassword();
    copyPass_msg.textContent = " "
}

let copyPass_msg = document.getElementById("copy-pass") 
let password = ""

function copyPassword1(){

    password = document.getElementById("pass1").textContent
    navigator.clipboard.writeText(password)

    copyPass_msg.textContent = "password1 copied!"
     

    
}
function copyPassword2(){
    password = document.getElementById("pass2").textContent
    navigator.clipboard.writeText(password)

    copyPass_msg.textContent = "password2 copied!"
}




