const button = document.querySelector('#create-account');

const form = document.querySelector('form');

button.addEventListener("click", () => checkPasswords());

function checkPasswords(event) {
    const password = document.querySelector("#password");
    const conpassword = document.querySelector('#con_password');
    const passworddiv = document.querySelector('#password-div');
    if(password.value !== con_password.value) {
      password.classList.add("error");
      conpassword.classList.add("error");
      const text = document.createElement("p");
      text.textContent = "*Passwords do not match";
      text.setAttribute("id", "error-text");
      passworddiv.appendChild(text);  
      password.setCustomValidity("Passwords do not match");
      event.preventDefault();
    }
}

