let weightInput = document.querySelector("#weight");
let heightInput = document.querySelector("#height");
let submit = document.querySelector("#calculateBMI");
let result = document.querySelector("#result");
let statement = document.querySelector("#result-statement");
let BMI, height, weight;

submit.addEventListener("click", () => {

    height = heightInput.value;
    weight = weightInput.value;
    BMI = weight/(height/100)**2;
    result.innerText = BMI;

    if (BMI<=18.5){
        statement.innerHTML = "Your BMI is " + BMI + " which means You are <b>Underweight</b>"
    } else if((BMI>18.5) && (BMI<=24.9)) {
        statement.innerHTML = "Your BMI is " + BMI + " which means You are <b>Normal weight</b>"
    } else if((BMI>24.9) && (BMI<=29.9)) {
        statement.innerHTML = "Your BMI is " + BMI + " which means You are <b>Overweight</b>"
    } else if(BMI>29.9) {
        statement.innerHTML = "Your BMI is " + BMI + " which means You are <b>Obesity</b>"
    } 

})