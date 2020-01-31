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

var pizza = new PizzaConstructor ();



$(document).ready(function () {
  $("form#pizzaForm").submit(function (event) {
    event.preventDefault();

    var size = $("#size").val();
    var crust = $("#crust").val();
    var sauce = $("#sauce").val();
    var cheese = $("#cheese").val();
    var meat1 = $("#meat1").val();
    var meat2 = $("#meat2").val();
    var meat3 = $("#meat3").val();
    var topping1 = $("#topping1").val();
    var topping2 = $("#topping2").val();
    var topping3 = $("#topping3").val();
    console.log(size, crust, sauce, cheese, meat1, meat2, meat3, topping1, topping2, topping3);
  });
  });
