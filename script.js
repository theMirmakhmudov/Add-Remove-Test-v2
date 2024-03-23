const demo = document.getElementById("demo");
const add = document.getElementById("add");
const remove = document.getElementById("remove");

add.addEventListener("click", function() {
  let person = prompt("Enter add data", "Example");
      let h1 = document.createElement("h1");
      h1.innerHTML = "Hello " + person + "! How are you today?";
});




