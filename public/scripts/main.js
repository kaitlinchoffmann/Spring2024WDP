let getUsers = document.getElementById("getUsers")
getUsers.addEventListener('click', getAllUsers)

function getAllUsers() {
  fetch("http://localhost:3000/users/getUsers")
  .then(res => res.json())
  .then(data => {
    console.log(data)
  })
}