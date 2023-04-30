const form = document.querySelector('#contact-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();

  if (nameValue === '' || emailValue === '' || messageValue === '') {
    alert('Please fill in all fields');
    return;
  }

  // Send the form data to a server using AJAX or fetch
  // ...

  // Reset the form
  form.reset();
});