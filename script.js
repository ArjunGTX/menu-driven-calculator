let flag =0;

const addBtn = document.getElementById('addBtn');
const subtractBtn = document.getElementById('subtractBtn');
const multiplyBtn = document.getElementById('multiplyBtn');
const divideBtn = document.getElementById('divideBtn');
const clearBtn = document.getElementById('clear');

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);
clearBtn.addEventListener('click',clear);

function validate(input1,input2) {
    
    if(isNaN(input1) || isNaN(input2) ){
        alert("Please enter an integer value");
        clear();
    }
    else{
        let number1 = Number(input1);
        let number2 = Number(input2);
        if(Number.isInteger(number1) && Number.isInteger(number2)){
            return 1;
        }
        else{
            alert("Please enter an integer value");
            clear();
        }
    }
    
}

function clear(){
    document.getElementById('number1').value = "";
    document.getElementById('number2').value = "";
    document.getElementById('result').value = "";
}

function add(){
    if(input1 == "" || input2 == ""){
        document.getElementById('result').value = "";
    }
    let number1 = document.getElementById('number1').value;
    let number2 = document.getElementById('number2').value;
    let test = validate(number1,number2);
    if(test){
        let sum = Number(number1) + Number(number2);
        document.getElementById('result').value = sum;
    }
}
function subtract(){
    if(input1 == "" || input2 == ""){
        document.getElementById('result').value = "";
    }
    let number1 = document.getElementById('number1').value;
    let number2 = document.getElementById('number2').value;
    let test = validate(number1,number2);
    if(test){
        let difference = Number(number1) - Number(number2);
        document.getElementById('result').value = difference;
    }
}
function multiply(){
    if(input1 == "" || input2 == ""){
        document.getElementById('result').value = "";
    }
    let number1 = document.getElementById('number1').value;
    let number2 = document.getElementById('number2').value;
    let test = validate(number1,number2);
    if(test){
        let product = Number(number1) * Number(number2);
        document.getElementById('result').value = product;
    }
}
function divide(){
    if(input1 == "" || input2 == ""){
        document.getElementById('result').value = "";
    }
    let number1 = document.getElementById('number1').value;
    let number2 = document.getElementById('number2').value;
    let test = validate(number1,number2);
    if(test){
        let quotient = Number(number1) / Number(number2);
        document.getElementById('result').value = quotient.toFixed(10);
    }
}