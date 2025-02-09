var cartItems = JSON.parse(localStorage.getItem("cartItems"));

var div = document.querySelector(".container");
var totalPriceHeading = document.querySelector("#totalPrice");

function saveCartToLocalStorage() {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

function renderItems() {
  div.innerHTML = "";
  var totalPrice = 0;

  for (let i = 0; i < cartItems.length; i++) {
    totalPrice += cartItems[i].price * cartItems[i].quantity;

    div.innerHTML += `
      <div class="card">
        <div class="card-body">
          <img src="${cartItems[i].image}" alt="${cartItems[i].brand} ${
      cartItems[i].model
    }" />
          <h5 class="card-title">${cartItems[i].brand}</h5>
          <h6 class="card-subtitle">${cartItems[i].model}</h6>
          <h6 class="card-subtitle">Quantity<button onclick="addQuantity(${i})">+</button>${
      cartItems[i].quantity
    }<button class="less-btn" onclick="lessQuantity(${i}, this)">-</button></h6>
          <h3>$${cartItems[i].price * cartItems[i].quantity}</h3>
          <button onclick="deleteItem(${i})" class="delete-btn">Delete</button>
        </div>
      </div>
    `;
  }

  totalPriceHeading.innerHTML = `Total Price: $${totalPrice}`;

  const lessButtons = document.querySelectorAll(".less-btn");
  lessButtons.forEach((button, index) => {
    if (cartItems[index].quantity === 1) {
      button.style.backgroundColor = "#dc3545";
    } else {
      button.style.backgroundColor = "";
    }
  });
}

renderItems();

function addQuantity(index) {
  cartItems[index].quantity += 1;
  saveCartToLocalStorage();
  renderItems();
}

function lessQuantity(index) {
  if (cartItems[index].quantity === 1) {
    cartItems.splice(index, 1);
    saveCartToLocalStorage();
    renderItems();
  } else {
    cartItems[index].quantity -= 1;
    saveCartToLocalStorage();
    renderItems();
  }
}

function goToHome() {
  window.location.href = "index.html";
}

function deleteItem(index) {
  cartItems.splice(index, 1);
  saveCartToLocalStorage();
  renderItems();
}

function updateCartUI() {
  const container = document.querySelector(".container");
  container.innerHTML = "";
  document.getElementById("totalPrice").innerText = " $ 0";
}

function deleteAllItems() {
  Swal.fire({
    title: "Are you sure?",
    text: "You want to delete all items from the cart!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, delete all!",
  }).then((result) => {
    if (result.isConfirmed) {
      cartItems = [];
      saveCartToLocalStorage();
      updateCartUI();
      Swal.fire("Deleted!", "Your cart is now empty.", "success").then(() => {
        window.location = "index.html";
      });
    }
  });
}
