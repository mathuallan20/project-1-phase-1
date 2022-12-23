let image = document.querySelector("#image")
let preparationTime = document.querySelector("#preparation_Time");
let description = document.querySelector("#description");
let div = document.querySelector("#title");
let openingHours = document.querySelector("#opening_Hours");
let ordersSold = document.querySelector("#orders_Sold")

function getTitles() {
  fetch("https://api.npoint.io/1533c95cd54ab2e26a81/coffee/")
    .then((res) => res.json())
    .then((coffee) => {
      const ul = document.getElementById("coffee");
  //fetch the data and iterate
      for (const item of coffee) {
          //create a li element
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(item.title));
        li.id = item.id;
        li.classList.add("coffee", "item")
        li.addEventListener("click", function(e) {
            getMovieData(item.id)
    
        })
        ul.appendChild(li);
      }
    })
    .catch((error) => console.warn(error));
}
getTitles();

 function coffeeClick(coffee_id) {
   getCoffeeData(coffee_id)
 }


function getCoffeeData(coffee_id) {
    fetch("https://api.npoint.io/1533c95cd54ab2e26a81/coffee/" + coffee_id)
      .then((res) => res.json())
      .then((jsondata) => {
        image.src = jsondata.coffeehttps;
        div.innerText = jsondata.title;
        preparationTime.innerText = jsondata.preparation_Time
        description.innerText = jsondata.description;
        openingHours.innerText = jsondata.opening_Hours;
        ordersSold.innerText = jsondata.capacity - jsondata.orders_Sold;

      })
      .catch((error) => console.log(error));
  }
  getMovieData(1)

  function coffeeClick(coffee_id){
   getCoffeeData(coffee_id)
  }
 

const button = document.getElementById('place_order')

        button.addEventListener('click', function(e){
            let remCoffee = document.querySelector('#coffee-num').textContent
            e.preventDefault()
            if(remCoffee > 0){
                document.querySelector('#coffee-num').textContent  = remCoffee-1
               
            }else {
                (parseInt(remCoffee, 10)===0)
                button.textContent = 'Sold Out'
                

            }
    })