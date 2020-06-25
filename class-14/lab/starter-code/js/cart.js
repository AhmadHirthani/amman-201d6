/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() { }

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();




var tbody = document.getElementsByTagName('tbody')[0];
var reomveCell;

cartRender()


function cartRender() {
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
    var row = document.createElement('tr');
    reomveCell = document.createElement('td');
    var image = document.createElement('img');
    image.id = 'deleteIcon';
    image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHAVa2BhzbQFRH8L-FE7Kfkn6unL-E-uNfpg&usqp=CAU';
    reomveCell.appendChild(image);
    var keyCell = document.createElement('td');
    var ValueCell = document.createElement('td');
    keyCell.textContent = key;
    ValueCell.textContent = value;
    row.appendChild(reomveCell);
    row.appendChild(keyCell);
    row.appendChild(ValueCell);
    tbody.appendChild(row);
  }
}

var cells = tbody.getElementsByTagName("img");
for (var i = 0; i < cells.length; i++) {
  cells[i].onclick = function (e) {
    var keyForDelete = e.currentTarget.parentNode.parentNode.childNodes[1].textContent;
    tbody.removeChild(e.currentTarget.parentNode.parentNode);
    localStorage.removeItem(keyForDelete);
  }
}
