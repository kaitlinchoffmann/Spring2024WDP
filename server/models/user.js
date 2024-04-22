// user table will eventually go here
const users = [
  {
    userId: 12345,
    userName: "cathy1234",
    password: "badpassword"
  },
  {
    userId: 55555,
    userName: "bobby",
    password: "password"
  },
  {
    userId: 33333,
    userName: "fred",
    password: "goodpassword"
  }
]

// CRUD functions will go here 
//R for READ -- get all users
let  getAllUsers = () => users;

function getAllUsers2() {
  return users;
}

module.exports = { getAllUsers, getAllUsers2 }
