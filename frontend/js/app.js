const product_id = getProductId(window.location.href);

function getProductId(url) {
  let splitted_url = url.split("?");
  let id = splitted_url[1].split("=")[1];
  return id;
}

console.log(product_id);
