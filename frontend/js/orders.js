// const container = document.getElementById("orders-container");
// container.addEventListener("click", detectDelete);

// let orders = JSON.parse(localStorage.getItem("orders")) || [];

// if (orders.length === 0) {
//   container.innerHTML = `
//     <p style="text-align:center; opacity:0.7; color:red">
//       You have no orders yet. 😪
//     </p>
//   `;
// }

// orders.forEach((order, index) => {
//   const card = `
//     <div class="order-card">
//     <img src="${order.productImage}" alt="${order.productTitle}" class="order-img"/>
//       <span class="order-title">${order.productTitle}</span>
//       <span class="order-price">${order.productPrise}</span>
//       <button class="delete-btn" data-index="${index}">🗑️</button>
//     </div>
//   `;
//   container.innerHTML += card;
// });

// function detectDelete(event) {
//   if (!event.target.classList.contains("delete-btn")) {
//     return;
//   }
//   const index = event.target.dataset.index;
//   deleteOrder(index);
// }

// function deleteOrder(index) {
//   let orders = JSON.parse(localStorage.getItem("orders")) || [];
//   orders.splice(index, 1);
//   localStorage.setItem("orders", JSON.stringify(orders));
//   location.reload();
// }

// const payButton = document.getElementById("paypal");
// payButton.addEventListener("click", payPalPay);

// function payPalPay() {
//   let orders = JSON.parse(localStorage.getItem("orders")) || [];

//   if (orders.length === 0) {
//     alert("You have no orders!");
//     return;
//   }

//   window.location.href = "/frontend/payment.html";
// }

const container = document.getElementById("orders-container");
container.addEventListener("click", detectDelete);

async function orderParser() {
  const res = await fetch("http://localhost:5000/orders");
  const orders = await res.json();

  if (orders.length === 0) {
    container.innerHTML = `
        <p style="text-align:center; opacity:0.7; color:red">
          You have no orders yet. 😪
        </p>
      `;
    return;
  }

  container.innerHTML = "";

  orders.forEach((order) => {
    const card = `
        <div class="order-card">
          <img src="${order.productImage}" class="order-img"/>
          <span class="order-title">${order.productTitle}</span>
          <span class="order-price">${order.productPrice}€</span>
          <button class="delete-btn" data-id="${order._id}">🗑️</button>
        </div>
      `;

    container.innerHTML += card;
  });
}

async function detectDelete(event) {
  if (!event.target.classList.contains("delete-btn")) return;

  const id = event.target.dataset.id;

  await fetch(`https://online-shoe-house.onrender.com/${id}`, {
    method: "DELETE",
  });

  orderParser();
}

const payButton = document.getElementById("paypal");
payButton.addEventListener("click", payPalPay);

function payPalPay() {
  window.location.href = "/frontend/payment.html";
}

orderParser();
