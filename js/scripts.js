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

function UserConstructor(firstName, lastName, phoneNumber, address, city, state, zipcode) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  this.address = address;
  this.city = city;
  this.state = state;
  this.zipcode = zipcode;
}

var cost = 0

PizzaConstructor.prototype.pizzaCost = function (){
  if (this.size === "1"){
    cost += 14
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

  if (this.crust === "1"){
    cost += 0
  }
  else if (this.crust === "2"){
    cost += 0
  }
  else if (this.crust === "3"){
    cost += 2
  }
  else if (this.crust === "4"){
    cost += 2
  }
  else if (this.crust === "5"){
    cost += 8
  }
  else if (this.crust === "6"){
    cost += 9
  }

  if (this.sauce === "1"){
    cost += 0
  }
  else if (this.sauce === "2"){
    cost += 3
  }
  else if (this.sauce === "3"){
    cost += 2
  }
  else if (this.sauce === "4"){
    cost += 0
  }
  else {
    cost += 0
  }

  if (this.cheese === "1"){
    cost += 0
  }
  else if (this.cheese === "2"){
    cost += 1.5
  }
  else if (this.cheese === "3"){
    cost += 0
  }
  else if (this.cheese === "4"){
    cost -= 1
  }
  else {
    cost += 0
  }

  if (this.meat1 === "1"){
    cost += 0
  }
  else if (this.meat1 === "2"){
    cost += 1.5
  }
  else if (this.meat1 === "3"){
    cost += 1.5
  }
  else if (this.meat1 === "4"){
    cost += 1.5
  }
  else if (this.meat1 === "5"){
    cost += 1.5
  }
  else if (this.meat1 === "6"){
    cost += 1.5
  }

  if (this.meat2 === "1"){
    cost += 0
  }
  else if (this.meat2 === "2"){
    cost += 1.5
  }
  else if (this.meat2 === "3"){
    cost += 1.5
  }
  else if (this.meat2 === "4"){
    cost += 1.5
  }
  else if (this.meat2 === "5"){
    cost += 1.5
  }
  else if (this.meat2 === "6"){
    cost += 1.5
  }

  if (this.meat3 === "1"){
    cost += 0
  }
  else if (this.meat3 === "2"){
    cost += 1.5
  }
  else if (this.meat3 === "3"){
    cost += 1.5
  }
  else if (this.meat3 === "4"){
    cost += 1.5
  }
  else if (this.meat3 === "5"){
    cost += 1.5
  }
  else if (this.meat3 === "6"){
    cost += 1.5
  }

  if (this.topping1 === "1"){
    cost += 0
  }
  else if (this.topping1 === "2"){
    cost += .5
  }
  else if (this.topping1 === "3"){
    cost += .5
  }
  else if (this.topping1 === "4"){
    cost += .5
  }
  else if (this.topping1 === "5"){
    cost += .5
  }
  else if (this.topping1 === "6"){
    cost += .5
  }
  else if (this.topping1 === "7"){
    cost += .5
  }

  if (this.topping2 === "1"){
    cost += 0
  }
  else if (this.topping2 === "2"){
    cost += .5
  }
  else if (this.topping2 === "3"){
    cost += .5
  }
  else if (this.topping2 === "4"){
    cost +=.5
  }
  else if (this.topping2 === "5"){
    cost += .5
  }
  else if (this.topping2 === "6"){
    cost += .5
  }
  else if (this.topping1 === "7"){
    cost += .5
  }

  if (this.topping3 === "1"){
    cost += 0
  }
  else if (this.topping3 === "2"){
    cost += .5
  }
  else if (this.topping3 === "3"){
    cost += .5
  }
  else if (this.topping3 === "4"){
    cost += .5
  }
  else if (this.topping3 === "5"){
    cost += .5
  }
  else if (this.topping3 === "6"){
    cost += .5
  }
  else if (this.topping1 === "7"){
    cost += .5
  }
}

displayPrice = function(){
  $("#finalPrice").show();
  $("#priceSpan").text(cost);
  $(".pizzaFormContainer").fadeToggle();
}
var pizza = new PizzaConstructor();

var showPizzaCustomizer = function (){
  $(".pizzaFormContainer").fadeToggle();
  $("#deliveryOrCarryout").fadeToggle();
}
var showAddressForm = function (){
  $(".customerInformationForm").fadeToggle();
}
var hideAddressForm = function(){
  $(".customerInformationForm").fadeToggle();
}
var hideDeliveryorCheckout = function() {
  $("#deliveryOrCarryout").fadeToggle();
}
// var showUserConfirmation = function() {
//   $("#userFirstName").text(firstNameF);
//   $("#userLastName").text(lastNameF);
//   $("#userAddress").text(addressF);
//   $("#userCity").text(cityF);
//   $("#userState").text(stateF);
//   $("#userZipcode").text(zipcodeF);
//   $("#userPhoneNumber").text(phoneNumberF);
//   $("#deliveryConfirmation").fadeToggle();
// }

$(document).ready(function () {
  $("#deliveryButton").click(function(event){
    showAddressForm();
    hideDeliveryorCheckout();
    event.preventDefault();
  })
  $("#carryOutButton").click(function(event){
    showPizzaCustomizer();
    event.preventDefault();
  })
  $("#customerInformationSubmitButton").click(function(event){
    event.preventDefault();
    showPizzaCustomizer();
    hideAddressForm();
    hideDeliveryorCheckout();
    var firstNameF = $("#firstName").val();
    var lastNameF = $("#lastName").val();
    var phoneNumberF = $("#phoneNumber").val();
    var addressF = $("#address").val();
    var cityF = $("#city").val();
    var stateF = $("#state").val();
    var zipcodeF = $("#zipcode").val();
    var user = new UserConstructor (firstNameF, lastNameF, phoneNumberF, addressF, cityF, stateF, zipcodeF);
  $("#userFirstName").text(firstNameF);
  $("#userLastName").text(lastNameF);
  $("#userAddress").text(addressF);
  $("#userCity").text(cityF);
  $("#userState").text(stateF);
  $("#userZipcode").text(zipcodeF);
  $("#userPhoneNumber").text(phoneNumberF);
  $("#deliveryConfirmation").fadeToggle();
    // showUserConfirmation();

  });

  
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
    pizza.pizzaCost();
    displayPrice();
    cost = 0;

  });
  });
