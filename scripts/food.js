foodBtn = document.getElementById("getFood")
foodBtn.addEventListener('click', getFood)

function getFood() {
  fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")
  .then(response => response.json())
  .then(data => {
    let food = document.getElementById("food")

    data.forEach(item => {
      food.innerHTML += `
        <div>Name: ${item.name}</div>
        <div>Price: ${item.price}</div>
        <br>
      `
    })

  })
}