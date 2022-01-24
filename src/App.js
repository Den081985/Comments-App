import "./styles.css";
import { Comments } from "./Comments";
import { isValid, activateModal, AuthActivate } from "./Utils";
import {
  getAuthForm,
  enterAuthForm,
  enterWithEmailAndPassword,
  authWithEmailAndPassword,
} from "./Auth";

const form = document.getElementById("comment-form");
const input = form.querySelector("#comment-input");
const submitBtn = form.querySelector("#comment-btn");
const commentArea = form.querySelector("#comment-area");
const modalBtn1 = document.getElementById("modalBtn1");
const modalBtn2 = document.getElementById("modalBtn2");

form.addEventListener("submit", submitForm);
//валидация textarea
commentArea.addEventListener("input", () => {
  submitBtn.disabled = !isValid(commentArea.value);
});

modalBtn1.addEventListener("click", openModal);

modalBtn2.addEventListener("click", enterModal);

window.addEventListener("load", Comments.render);

function submitForm(event) {
  event.preventDefault();

  if (isValid(commentArea.value)) {
    const comment = {
      theme: input.value.trim(),
      comment: commentArea.value.trim(),
      date: new Date().toJSON(),
    };
    submitBtn.disabled = true;

    Comments.create(comment).then(() => {
      input.value = "";
      input.className = "";
      commentArea.value = "";
      commentArea.className = "";
      submitBtn.disabled = false;
    });
  }
}
//функция рендеринга модального окна авторизации
function openModal() {
  activateModal("АВТОРИЗАЦИЯ", getAuthForm());
  document
    .getElementById("auth-form")
    .addEventListener("submit", authFormHandler, { once: true });
}

//функция рендеринга модального окна входа

function enterModal() {
  activateModal("ВХОД", enterAuthForm());
  document
    .getElementById("enter-form")
    .addEventListener("submit", enterFormHandler);
}
//функция для работы с данными регистрации
function authFormHandler(e) {
  e.preventDefault();

  const email = e.target.querySelector("#email").value;
  const password = e.target.querySelector("#password").value;
  const name = e.target.querySelector("#name").value;
  const btn = e.target.querySelector("button");

  btn.disabled = true;

  authWithEmailAndPassword(email, password, name)
    .then(AuthActivate)
    .then(() => (btn.disabled = false));
}

//функция для работы с данными входа

function enterFormHandler(e) {
  e.preventDefault();

  const email = e.target.querySelector("#email").value;
  const password = e.target.querySelector("#password").value;
  const btn = e.target.querySelector("button");

  btn.disabled = true;

  enterWithEmailAndPassword(email, password)
    .then(Comments.fetch)
    .then(renderModalAfterAuth)
    .then(() => (btn.disabled = false));
}

function renderModalAfterAuth(content) {
  if (typeof content === "string") {
    activateModal("ОШИБКА", content);
  } else {
    activateModal("КОММЕНТАРИИ", Comments.listHTML(content));
  }
}
