//====================== TUTORIAL ===================================
// let firstName = document.getElementById("inp");
// let storage = document.getElementById("storage");
// let saveName = localStorage.getItem("name");
// function saveN() {
//     localStorage.setItem("name", firstName.value);
// }
// window.addEventListener('load',function(){
//     storage.textContent = this.localStorage.getItem('name')
// })
// function saveN() {
//     localStorage.setItem("name", firstName.value);
// }

// window.addEventListener('load',()=>{
//     let colorName = localStorage.getItem('name')
//     document.body.style.backgroundColor = colorName
// })
//====================== EXERSICE ===================================
let inputProductName = document.getElementById("productName");
let inputPriceProduct = document.getElementById("priceProduct");
let inputInventoryCount = document.getElementById("inventoryCount");
let btnAdd = document.getElementById("btnAdd");
let alertForm = document.getElementById("alert");
let containerProduct = document.getElementById("containerProduct");
let products = JSON.parse(localStorage.getItem("products")) || [];
products.forEach((product) => {
  containerProduct.innerHTML += `<div class="box p-3 rounded-5">
      <h2>${product.nameProduct}</h2>
      <p>price: ${product.priceProduct}</p>
      <p>count inventory: ${product.inventoryCount}</p>
  </div>`;
});
btnAdd.addEventListener("click", function () {
  if (
    inputInventoryCount.value == "" ||
    inputPriceProduct.value == "" ||
    inputProductName.value == ""
  ) {
    timerError();
    alertForm.textContent = "error:your data has problem";
    alertForm.style.opacity = "1";
    alertForm.style.backgroundColor = "#ff525296";
    alertForm.style.top = "40%";
    return false;
  } else {
    timerError();
    alertForm.textContent = "success: added your item";
    alertForm.style.opacity = "1";
    alertForm.style.backgroundColor = "#2e7d328b";
    alertForm.style.top = "40%";
    let newProduct = {
      nameProduct: inputProductName.value,
      priceProduct: inputPriceProduct.value,
      inventoryCount: inputInventoryCount.value,
    };
    products.push(newProduct);
    localStorage.setItem("products", JSON.stringify(products));
    console.log(products);
    let localProduct = JSON.parse(localStorage.getItem("products")) || [];
    containerProduct.innerHTML += `      
      <div class="box p-3 rounded-5">
        <h2>${newProduct.nameProduct}</h2>
        <p>price: ${newProduct.priceProduct}</p>
        <p>count inventory: ${newProduct.inventoryCount}</p>
      </div>`;
  }
  inputInventoryCount.value = "";
  inputPriceProduct.value = "";
  inputProductName.value = "";
});
function timerError() {
  setTimeout(() => {
    alertForm.style.top = "10%";
    alertForm.style.opacity = "0";
  }, 3000);
}
