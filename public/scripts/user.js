// Fetch method implementation:
async function fetchData(route = '', data = {}, methodType) {
  const response = await fetch(`http://localhost:3000${route}`, {
    method: methodType, // *POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  if (response.ok) {
    return await response.json(); // parses JSON response into native JavaScript objects
  } else {
    throw await response.json();
  }
}

let regForm = document.getElementById("regForm")

if(regForm) regForm.addEventListener('submit', register)

function register(e) {
  e.preventDefault()

  let username = document.getElementById("username").value
  let password = document.getElementById("password").value
  let cPassword = document.getElementById("cPassword").value
  let email = document.getElementById("email").value

  if (password !== cPassword) {
    document.querySelector(".error").innerText = "Passwords Must Match!"
    document.getElementById("password").value = ""
    document.getElementById("cPassword").value = ""
  } else {
    const user = {
      Username: username,
      Password: password,
      Email: email
    }
    // make a call to the server
    fetchData('/users/register', user, 'POST')
      .then(data => {
        if (!data.message) {
          window.location.href = "index.html"
        }
      })
      .catch(err => {
        let error = document.querySelector(".error")
        error.innerHTML = `${err.message}`
      })

    document.getElementById("welcome").innerText = `Welcome ${username}!`
  }

}

let logForm = document.getElementById("logForm")

if(logForm) logForm.addEventListener('submit', login)

function login(e) {
  e.preventDefault()

  let username = document.getElementById("username").value
  let password = document.getElementById("password").value

  const user = {
    Username: username,
    Password: password
  }
  // make a call to the server
  fetchData('/users/login', user, 'POST')
    .then(data => {
      if (!data.message) {
        localStorage.setItem('user', JSON.stringify(data))
        window.location.href = "index.html"
      }
    })
    .catch(err => {
      let error = document.querySelector(".error")
      error.innerHTML = `${err.message}`
    })

  document.getElementById("welcome").innerText = `Welcome ${username}!`
}

// code to add event listener to third form of some kind
function someOtherFunction(e) {
  // your code to read in your third form
}

// configuring local storage