const userInput = document.getElementById("sp-input");

if (userInput) {
  userInput.addEventListener("input", inputHandler);
}

function inputHandler() {
  const query = userInput.value.toLowerCase();
  const shoes = document.querySelectorAll(".sp-item");

  shoes.forEach((shoe) => {
    const title = shoe
      .querySelector(".sp-item-titel")
      .textContent.toLowerCase();

    if (title.includes(query)) {
      shoe.style.display = "block";
    } else {
      shoe.style.display = "none";
    }
  });
}
