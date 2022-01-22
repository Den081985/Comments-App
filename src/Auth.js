//модуль реализации функций для авторизации
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
        <button type="submit" class="mui-btn mui-btn--raised">Регистрация</button>
        </form>
    
    `;
}
