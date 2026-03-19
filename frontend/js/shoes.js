const wrapper = document.getElementById("sp-wrapper");

async function loadShoes() {
  try {
    const res = await fetch("http://localhost:5000/shoes");
    const shoes = await res.json();

    wrapper.innerHTML = "";

    shoes.forEach((shoe) => {
      const card = `
        <div class="sp-item">
          <img src="${shoe.image}" class="sp-item-img" />
          <h3 class="sp-item-titel">${shoe.title}</h3>
          <p class="sp-item-price">${shoe.price}€</p>
          <a href="/frontend/shoe.html?id=${shoe._id}" class="view-btn">
            View Product
          </a>
        </div>
      `;

      wrapper.innerHTML += card;
    });
  } catch (error) {
    console.error("Loading products error:", error);
  }
}

loadShoes();
