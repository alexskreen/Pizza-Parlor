function PizzaConstructor(size, crust, sauce, cheese, meat1, meat2, meat3, topping1, topping2, topping3) {
  this.size = size;
  this.crust = crust;
  this.sauce = sauce;
  this.cheese = cheese;
  this.meat1 = meat1;
  this.meat2 = meat2;
  this.meat3 = meat3;
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
}

var cost = 0

PizzaConstructor.prototype.pizzaCost = function (){
  if (this.size === "1"){
    cost += 15
  }
  else if (this.size === "2"){
    cost += 10
  }
  else if (this.size === "3"){
    cost += 8
  }
  else if (this.size === "4"){
    cost += 6
  }
  else {
    cost += 4
  }
}

var pizza = new PizzaConstructor();


$(document).ready(function () {
  $("form#pizzaForm").submit(function (event) {
    event.preventDefault();

    var sizeF = $("#size").val();
    var crustF = $("#crust").val();
    var sauceF = $("#sauce").val();
    var cheeseF = $("#cheese").val();
    var meat1F = $("#meat1").val();
    var meat2F = $("#meat2").val();
    var meat3F = $("#meat3").val();
    var topping1F = $("#topping1").val();
    var topping2F = $("#topping2").val();
    var topping3F = $("#topping3").val();
    var pizza = new PizzaConstructor (sizeF, crustF, sauceF, cheeseF, meat1F, meat2F, meat3F, topping1F, topping2F, topping3F);
    console.log(pizza.size);

    pizza.pizzaCost();
    console.log(cost);

  });
  });
