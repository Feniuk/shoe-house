const URL = "https://online-shoe-house.onrender.com";
const trendingWrapper = document.getElementById("trending-product-wrapper");

async function loadTrendingShoes() {
  if (!trendingWrapper) {
    return;
  }

  try {
    const res = await fetch(`${URL}/shoes`);

    if (!res.ok) {
      throw new Error(`Failed to load trending shoes (${res.status})`);
    }

    const shoes = await res.json();
    const trendingShoes = shoes.slice(0, 4);

    trendingWrapper.innerHTML = trendingShoes
      .map(
        (shoe) => `
          <div class="trending-shoe">
            <img src="${shoe.image}" alt="${shoe.title}" />
            <h3>${shoe.title}</h3>
            <p>${parseFloat(shoe.price)}€</p>
            <a href="/frontend/shoe.html?id=${shoe._id}" class="trending-view-btn">
              View Product
            </a>
          </div>
        `,
      )
      .join("");
  } catch (error) {
    console.error("Error loading trending shoes:", error);
    trendingWrapper.innerHTML =
      "<p>Trending shoes are unavailable right now.</p>";
  }
}

loadTrendingShoes();
