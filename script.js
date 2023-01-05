const toggleButton = document.querySelector("#toggle-button");
const password = document.querySelector("#password");

toggleButton.addEventListener("click", function () {
  if (password.type === "password") {
    password.type = "text";
    toggleButton.innerText = "Hide Password";
    document.title = "Shown Password!";
  } else {
    password.type = "password";
    toggleButton.innerText = "Show Password";
    document.title = "Ok - SAVE!";
  }
});
