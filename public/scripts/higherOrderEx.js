let followers = [
  {
    username: "cathy123",
    userId: 123,
    email: "c@gmail.com"
  },
  {
    username: "cathyiscool",
    userId: 555,
    email: "c1@gmail.com"
  },
  {
    username: "bobby",
    userId: 333,
    email: "b@gmail.com"
  }
]

let users = followers.filter(f => f.username.includes("cathy"))
.map(f => f.userId)

console.log(users)