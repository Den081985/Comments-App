//модуль реализации функций для авторизации
//рендеринг модального окна авторизации
export function getAuthForm() {
  return `
        <form class="mui-form" id="auth-form">
        <div class="mui-textfield mui-textfield--float-label">
          <input type="text" id="name" required>
          <label for="name">ФИО</label>
        </div>
        <div class="mui-textfield mui-textfield--float-label">
          <input type="email" id="email" required>
          <label for="email">EMAIL</label>
        </div>
        <div class="mui-textfield mui-textfield--float-label">
          <input type="password" id="password"required>
          <label for="password">ПАРОЛЬ</label>
        </div>
        <button type="submit" class="mui-btn mui-btn--raised">Отправить</button>
        </form>
    
    `;
}

//рендеринг модального окна входа

export function enterAuthForm() {
  return `
  <form class="mui-form" id="enter-form">
    <div class="mui-textfield mui-textfield--float-label">
      <input type="email" id="email" required>
      <label for="email">EMAIL</label>
    </div>
    <div class="mui-textfield mui-textfield--float-label">
      <input type="password" id="password"required>
      <label for="password">ПАРОЛЬ</label>
    </div>
    <button type="submit" class="mui-btn mui-btn--raised">Войти</button>
  </form>
  
  `;
}

export function enterWithEmailAndPassword(email, password) {
  const apiKey = "AIzaSyCoTMEZUBN6EV8wj8oOGwZkzwyydXR8P0Q";
  return fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
    {
      method: "POST",
      body: JSON.stringify({ email, password, returnSecureToken: true }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => data.idToken);
}
