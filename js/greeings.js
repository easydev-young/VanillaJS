const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logingBox = document.querySelector(".todoMain__loging");
const greetingBox = document.querySelector(".todoMain__greeting");


const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoingSubmit(event) {
    event.preventDefault();

    logingBox.classList.add(HIDDEN_CLASSNAME);

    const username = loginInput.value;

    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings() {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`;
    greetingBox.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    logingBox.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoingSubmit);
} else {
    paintGreetings();
}