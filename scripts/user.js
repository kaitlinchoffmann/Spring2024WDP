let regForm = document.getElementById("regForm")

regForm.addEventListener('submit', register)

function register(e) {
  e.preventDefault()

  let username = document.getElementById("username").value
  let password = document.getElementById("password").value
  let cPassword = document.getElementById("cPassword").value

  if(password !== cPassword) {
    document.querySelector(".error").innerText = "Passwords Must Match!"
    document.getElementById("password").value = ""
    document.getElementById("cPassword").value = ""
  } else {
    const user = {
      uName: username,
      pword: password
    }
    document.getElementById("welcome").innerText = `Welcome ${username}!`
  }
  
}

// code to add event listener to login form
function login(e) {
  // your code to read in login form
}

// code to add event listener to third form of some kind
function someOtherFunction(e) {
  // your code to read in your third form
}