document.body.innerHTML += "";
//alert("Hello dat.js");
console.log("Hello Dat.js");
console.log("hej");
console.log("min første app");

function sayhello() {
  document.querySelector("h3").textContent =
    "Mit navn er " + document.querySelector("#name").value;

  document.querySelector("h3").textContent +=
    " min alder er " + document.querySelector("#age").value;

  document.querySelector("h3").textContent +=
    " år og jeg bor i " + document.querySelector("#by").value;
}
document.querySelector("button").addEventListener("click", sayhello);
