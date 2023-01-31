document.body.innerHTML += "";
//alert("Hello dat.js");
console.log("Hello Dat.js");
console.log("hej");
console.log("min første app");

function sayHello() {
  document.querySelector("h3").textContent =
    "Hej " + document.querySelector("input").value;
}
document.querySelector("button").addEventListener("click", sayHello);
