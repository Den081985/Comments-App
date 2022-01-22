import "./styles.css";
import { Comments } from "./Comments";
import { isValid, activateModal } from "./Utils";
import { getAuthForm } from "./Auth";

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

function authFormHandler(e) {
  e.preventDefault();

  const email = e.target.querySelector("email").value;
  const password = e.target.querySelector("password").value;
  const name = e.target.querySelector("name").value;
}
