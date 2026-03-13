const form = document.getElementById("add-form");
form.addEventListener("submit", formSubmitHandler);

function formSubmitHandler(event) {
  event.preventDefault();

  const title = document.getElementById("shoe-title");
  const price = document.getElementById("shoe-price");
  const description = document.getElementById("shoe-description");
  const image = document.getElementById("shoe-image");

  const newShoe = {
    title: title,
    price: price,
    description: description,
    img: image,
  };

  console.log(newShoe);
  form.reset();
  alert("Shoe added successfully!");
  window.location.href = "/frontend/shoes.html";
}
