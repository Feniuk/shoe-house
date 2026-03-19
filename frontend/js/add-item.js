const form = document.getElementById("add-form");
form.addEventListener("submit", formSubmitHandler);

function formSubmitHandler(event) {
  event.preventDefault();
  const title = document.getElementById("shoe-title").value;
  const price = document.getElementById("shoe-price").value;
  const description = document.getElementById("shoe-description").value;
  const image = document.getElementById("shoe-image").value;
  const newShoe = {
    title,
    price: parseFloat(price),
    description,
    image,
  };

  fetch("http://localhost:5000/shoes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newShoe),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to add shoe");
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
      alert("Shoe added successfully!");
      window.location.href = "/frontend/shoes.html";
    })
    .catch((error) => {
      console.error(error);
      alert("Error adding shoe");
    });
}
