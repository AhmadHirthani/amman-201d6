'use strict';




// Cart constructor.
var Cart = function (items) {
  // this.items is an array of CartItem instances.
  this.items = items;
};

Cart.prototype.addItem = function (product, quantity) {
  // TODO: Fill in this instance method to create a new CartItem and add it to this.items
};

Cart.prototype.saveToLocalStorage = function () {
  // TODO: Fill in this instance method to save the contents of the cart to localStorage
};

Cart.prototype.removeItem = function (item) {
  // TODO: Fill in this instance method to remove one item from the cart.
  // Note: You will have to decide what kind of parameter to pass in here!
};

var CartItem = function (product, quantity) {
  this.product = product;
  this.quantity = quantity;
};

// Product contructor.
var Product = function (filePath, name) {
  this.filePath = filePath;
  this.name = name;
  Product.allProducts.push(this);
};
Product.allProducts = [];

function generateCatalog() {
  new Product('assets/bag.jpg', 'Bag');
  new Product('assets/banana.jpg', 'Banana');
  new Product('assets/bathroom.jpg', 'Bathroom');
  new Product('assets/boots.jpg', 'Boots');
  new Product('assets/breakfast.jpg', 'Breakfast');
  new Product('assets/bubblegum.jpg', 'Bubblegum');
  new Product('assets/chair.jpg', 'Chair');
  new Product('assets/cthulhu.jpg', 'Cthulhu');
  new Product('assets/dog-duck.jpg', 'Dog-Duck');
  new Product('assets/dragon.jpg', 'Dragon');
  new Product('assets/pen.jpg', 'Pen');
  new Product('assets/pet-sweep.jpg', 'Pet Sweep');
  new Product('assets/scissors.jpg', 'Scissors');
  new Product('assets/shark.jpg', 'Shark');
  new Product('assets/sweep.png', 'Sweep');
  new Product('assets/tauntaun.jpg', 'Taun-Taun');
  new Product('assets/unicorn.jpg', 'Unicorn');
  new Product('assets/usb.gif', 'USB');
  new Product('assets/water-can.jpg', 'Water Can');
  new Product('assets/wine-glass.jpg', 'Wine Glass');
}

// Initialize the app by creating the big list of products with images and names
generateCatalog();



var dropDownList = document.getElementById('items');
var listItem;
//console.log(Product.allProducts);

for (var i = 0; i < Product.allProducts.length; i++) {
  listItem = document.createElement('option');
  listItem.textContent = Product.allProducts[i].name;
  dropDownList.appendChild(listItem);

}



var divCard=document.getElementById('cartContents');
var divList=document.createElement('ul');
var divlistHeader=document.createElement('li');
divlistHeader.textContent='Product              '+'............................'+'Quantity';
divCard.appendChild(divList);
divList.appendChild(divlistHeader);






document.getElementById("catalog").addEventListener("submit", function (event) {
  event.preventDefault();
  //var selectedQuantity=event.target()
  var selectedQuantity =document.getElementById('quantity').value;
  //event.target().value;
  var selectedItem = document.getElementById("items");
  var selectedProductName = selectedItem.options[selectedItem.selectedIndex].value;  
  
if(selectedQuantity){
  localStorage.setItem(selectedProductName,selectedQuantity);
  var divlistItem=document.createElement('li');
  divlistItem.textContent=selectedProductName+'............................'+selectedQuantity;
  divList.appendChild(divlistItem);
}

  


});
// localStorage.clear();

catalogRender()


function catalogRender(){

  
for(var i=0;i<localStorage.length;i++){
  var key=localStorage.key(i);
  var value=localStorage.getItem(key);
  // console.log('key: ',key);
  // console.log('value: ',value);
  var divlistItem=document.createElement('li');
divlistItem.textContent=key+'............................'+value;
divList.appendChild(divlistItem);
}

}


// var back = document.getElementsByTagName('body');
// var div = document.createElement('div');
// var cloud = document.createElement('img');
// cloud.id('cloud');
// cloud.src("cloud2.jpg");
// div.appendChild(cloud);
// back.appendChild(div);










