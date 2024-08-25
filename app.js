
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add("hidden");
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(USERNAME){
    greeting.innerText = "Hello " + USERNAME; 
    greeting.classList.remove("hidden");
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", onLoginSubmit);
    
} else {
    paintGreetings(username);
}
