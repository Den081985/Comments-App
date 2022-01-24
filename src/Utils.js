export function isValid(value) {
  return value.length >= 4;
}

export function activateModal(title, content) {
  let modal = document.createElement("div");
  modal.classList.add("modal");

  const html = `
    <div class = "modal-title">${title}</div>
    <div class = "modal-content">${content}</div>
  
  `;
  modal.innerHTML = html;

  mui.overlay("on", modal);
}

export function AuthActivate(localId) {
  let auth = document.createElement("div");

  auth.classList.add("modal");

  const html = `
  <div class = "modal-title">ПОЗДРАВЛЯЕМ! ВЫ ЗАРЕГИСТРИРОВАНЫ!</div>
  <div class = "modal-content">Ваш Uid: ${localId}</div>
  `;

  auth.innerHTML = html;

  mui.overlay("on", auth);
}
