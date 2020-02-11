function PizzaConstructor(size, crust, sauce, cheese, meat1, meat2, meat3, topping1, topping2, topping3, price) {
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
  this.price = price;
}

PizzaConstructor.prototype.addSize = function () {
  this.size = $("#size").val();
}
PizzaConstructor.prototype.addCrust = function () {
  this.crust = $("#crust").val();
}
PizzaConstructor.prototype.addSauce = function () {
  this.sauce = $("#sauce").val();
}
PizzaConstructor.prototype.addCheese = function () {
  this.cheese = $("#cheese").val();
}
PizzaConstructor.prototype.addMeat = function () {
  this.meat1 = $("#meat1").val();
  this.meat2 = $("#meat2").val();
  this.meat3 = $("#meat3").val();
}
PizzaConstructor.prototype.addToppings = function () {
  this.topping1 = $("#topping1").val();
  this.topping2 = $("#topping2").val();
  this.topping3 = $("#topping3").val();
}
PizzaConstructor.prototype.addCost = function () {
  this.price = 0;
}
PizzaConstructor.prototype.pizzaCost = function (){
  this.price === 0;
  if (this.size === "1"){
    this.price += 14
  }
  else if (this.size === "2"){
    this.price += 10
  }
  else if (this.size === "3"){
    this.price += 8
  }
  else if (this.size === "4"){
    this.price += 6
  }
  else {
    this.price += 4
  }

  if (this.crust === "1"){
    this.price += 0
  }
  else if (this.crust === "2"){
    this.price += 0
  }
  else if (this.crust === "3"){
    this.price += 2
  }
  else if (this.crust === "4"){
    this.price += 2
  }
  else if (this.crust === "5"){
    this.price += 8
  }
  else if (this.crust === "6"){
    this.price += 9
  }

  if (this.sauce === "1"){
    this.price += 0
  }
  else if (this.sauce === "2"){
    this.price += 3
  }
  else if (this.sauce === "3"){
    this.price += 2
  }
  else if (this.sauce === "4"){
    this.price += 0
  }
  else {
    this.price += 0
  }

  if (this.cheese === "1"){
    this.price += 0
  }
  else if (this.cheese === "2"){
    this.price += 1.5
  }
  else if (this.cheese === "3"){
    this.price += 0
  }
  else if (this.cheese === "4"){
    this.price -= 1
  }
  else {
    this.price += 0
  }

  if (this.meat1 === "1"){
    this.price += 0
  }
  else if (this.meat1 === "2"){
    this.price += 1.5
  }
  else if (this.meat1 === "3"){
    this.price += 1.5
  }
  else if (this.meat1 === "4"){
    this.price += 1.5
  }
  else if (this.meat1 === "5"){
    this.price += 1.5
  }
  else if (this.meat1 === "6"){
    this.price += 1.5
  }

  if (this.meat2 === "1"){
    this.price += 0
  }
  else if (this.meat2 === "2"){
    this.price += 1.5
  }
  else if (this.meat2 === "3"){
    this.price += 1.5
  }
  else if (this.meat2 === "4"){
    this.price += 1.5
  }
  else if (this.meat2 === "5"){
    this.price += 1.5
  }
  else if (this.meat2 === "6"){
    this.price += 1.5
  }

  if (this.meat3 === "1"){
    this.price += 0
  }
  else if (this.meat3 === "2"){
    this.price += 1.5
  }
  else if (this.meat3 === "3"){
    this.price += 1.5
  }
  else if (this.meat3 === "4"){
    this.price += 1.5
  }
  else if (this.meat3 === "5"){
    this.price += 1.5
  }
  else if (this.meat3 === "6"){
    this.price += 1.5
  }

  if (this.topping1 === "1"){
    this.price += 0
  }
  else if (this.topping1 === "2"){
    this.price += .5
  }
  else if (this.topping1 === "3"){
    this.price += .5
  }
  else if (this.topping1 === "4"){
    this.price += .5
  }
  else if (this.topping1 === "5"){
    this.price += .5
  }
  else if (this.topping1 === "6"){
    this.price += .5
  }
  else if (this.topping1 === "7"){
    this.price += .5
  }

  if (this.topping2 === "1"){
    this.price += 0
  }
  else if (this.topping2 === "2"){
    this.price += .5
  }
  else if (this.topping2 === "3"){
    this.price += .5
  }
  else if (this.topping2 === "4"){
    this.price +=.5
  }
  else if (this.topping2 === "5"){
    this.price += .5
  }
  else if (this.topping2 === "6"){
    this.price += .5
  }
  else if (this.topping1 === "7"){
    this.price += .5
  }

  if (this.topping3 === "1"){
    this.price += 0
  }
  else if (this.topping3 === "2"){
    this.price += .5
  }
  else if (this.topping3 === "3"){
    this.price += .5
  }
  else if (this.topping3 === "4"){
    this.price += .5
  }
  else if (this.topping3 === "5"){
    this.price += .5
  }
  else if (this.topping3 === "6"){
    this.price += .5
  }
  else if (this.topping1 === "7"){
    this.price += .5
  }
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

UserConstructor.prototype.addFirstName = function () {
  this.firstName = $("#firstName").val();
}
UserConstructor.prototype.addLastName = function () {
  this.lastName = $("#lastName").val();
}
UserConstructor.prototype.addPhoneNumber = function () {
  this.phoneNumber = $("#phoneNumber").val();
}
UserConstructor.prototype.addAddress = function () {
  this.address = $("#address").val();
}
UserConstructor.prototype.addCity = function () {
  this.city = $("#city").val();
}
UserConstructor.prototype.addState = function () {
  this.state = $("#state").val();
}
UserConstructor.prototype.addZipCode = function () {
  this.zipcode = $("#zipcode").val();
}




displayPrice = function(){
  $("#finalPrice").show();
  $("#priceSpan").text(pizza.price);
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
    var user = new UserConstructor ("","","","","","","")
    user.addFirstName();
    user.addLastName();
    user.addPhoneNumber();
    user.addAddress();
    user.addCity();
    user.addState();
    user.addZipCode();

    showPizzaCustomizer();
    hideAddressForm();
    hideDeliveryorCheckout();
  $("#userFirstName").text(user.firstName);
  $("#userLastName").text(user.lastName);
  $("#userAddress").text(user.address);
  $("#userCity").text(user.city);
  $("#userState").text(user.state);
  $("#userZipcode").text(user.zipcode);
  $("#userPhoneNumber").text(user.phoneNumber);
  $("#deliveryConfirmation").fadeToggle();
    // showUserConfirmation();
  });
  
  $("form#pizzaForm").submit(function (event) {
    event.preventDefault();
    var pizza = new PizzaConstructor("","","","","","","","","");
    pizza.addSize();
    pizza.addCrust();
    pizza.addSauce();
    pizza.addCheese();
    pizza.addMeat();
    pizza.addToppings();
    pizza.addCost();
    pizza.pizzaCost();
    displayPrice();
    $("#priceSpan").text(pizza.price);
  });
  });
