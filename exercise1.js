let bmiForm = document.getElementById("bmiForm")
bmiForm.addEventListener("submit", calculateBMI)

function calculateBMI(e) {
  e.preventDefault()
  console.log(bmiForm)
  let height = document.getElementById("height").value
  let weight = document.getElementById("weight").value
  let bmi = (weight * 703) / (height**2)
  let healthState
  
  if(bmi < 18.5) {
    healthState = "underweight"
  } else if(bmi <= 25) {
    healthState = "normal"
  } else if(bmi <= 30) {
    healthState = "overweight"
  } else {
    healthState = "obese"
  }
 
  let result = document.getElementById("result")
  result.innerHTML = `BMI = ${bmi.toFixed(2)}. Health State = ${healthState}.`
  
}
