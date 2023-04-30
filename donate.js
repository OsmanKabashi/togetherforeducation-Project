const form = document.getElementById("donation-form");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const amount = document.getElementById("amount").value;
  const bankDetails = document.getElementById("bank-details").value;

  // send donation information to server using fetch API
  fetch("/donate", {
    method: "POST",
    body: JSON.stringify({ name, amount, bankDetails }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        successMessage.innerHTML = "Donacioni u krye me sukses! Faleminderit për ndihmën tuaj.";
        successMessage.style.display = "block";
        setTimeout(() => {
          successMessage.style.display = "none";
        }, 2000);
      }
      


      const form = document.getElementById("donation-form");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", (event) => {
event.preventDefault();
const name = document.getElementById("name").value;
const amount = document.getElementById("amount").value;
const bankDetails = document.getElementById("bank-details").value;

// send donation information to server using fetch API
fetch("/donate", {
method: "POST",
body: JSON.stringify({ name, amount, bankDetails }),
headers: { "Content-Type": "application/json" },
})
.then((response) => response.json())
.then((data) => {
if (data.success) {
  successMessage.innerHTML = "Donacioni u krye me sukses! Faleminderit për ndihmën tuaj.";
  successMessage.style.display = "block";
  setTimeout(() => {
    successMessage.style.display = "none";
  }, 2000);
}
});
});
