let image = document.querySelector("#poster")
let Preparationtime = document.querySelector("#runtime");
let description = document.querySelector("#coffee-info");
let div = document.querySelector("#title");
let openingHours = document.querySelector("#showtime");
let remainingCoffee = document.querySelector("#coffee-num")

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
            getCoffeeData(item.id)
    
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


function getMovieData(movie_id) {
    fetch("https://api.npoint.io/1533c95cd54ab2e26a81/coffee/" + coffee_id)
      .then((res) => res.json())
      .then((jsondata) => {
        image.src = jsondata.cofeehttps;
        div.innerText = jsondata.title;
        Preparationtime.innerText = jsondata.Preparationtime
        description.innerText = jsondata.description;
        openingHours.innerText = jsondata.openinghours;
        remainingCoffee.innerText = jsondata.available_orders - jsondata.orders_sold;

      })
      .catch((error) => console.log(error));
  }
  getCoffeeData(1)

  function coffeeClick(coffee_id){
   getCoffeeData(coffee_id)
  }
 

const button = document.getElementById('buy-coffee')

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