foodBtn = document.getElementById("getFood")
foodBtn.addEventListener('click', getFood)

function getFood() {
  fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")
  .then(response => response.json())
  .then(data => {
    let food = document.getElementById("food")

    data.forEach(item => {
      food.innerHTML += `
        <a href="">Name: ${item.name}</a>
        <div>Price: ${item.price}</div>
        <br>
      `
    })

  })
}