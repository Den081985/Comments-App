//Класс для группировки методов для работы с комментариями

export class Comments {
  //метод для запросов на сервер
  static create(comment) {
    //comments.json-добавляется для создания коллекции в базе данных
    return fetch(
      "https://comments-app-1bb46-default-rtdb.firebaseio.com/comments.json",
      {
        method: "POST",
        body: JSON.stringify(comment),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        //поле name получаем с ответом с сервера
        comment.id = response.name;
        return comment;
      })
      .then(putCommentToStorage)
      .then(Comments.render);
  }
  //метод для рендеринга комментариев
  static render() {
    const comments = getCommentFromStorage();
    const html = comments.length
      ? comments.map(renderComment).join("")
      : `<div class="mui--text-dark-secondary mui--text-body2">
        НЕТ КОММЕНТАРИЕВ
      </div>`;
    const list = document.getElementById("comment-list");
    list.innerHTML = html;
  }
  //метод для работы с idToken,полученным с сервера
  static fetch(token) {
    if (!token) {
      return Promise.resolve(
        "<p class='comment-error'>Отсутствует Авторизация</p>"
      );
    }
    return fetch(
      `https://comments-app-1bb46-default-rtdb.firebaseio.com/comments.json?auth=${token}`
    )
      .then((response) => response.json())
      .then((content) => {
        if (content && content.error) {
          return `<p class='comment-error'>${content.error}</p>`;
        }
        return content
          ? Object.keys(content).map((key) => ({
              ...content[key],
              id: key,
            }))
          : [];
      });
  }
  //метод для рендериноа списка комментариев
  static listHTML(comments) {
    return comments.length
      ? `<ul>${comments
          .map((comment) => `<li>${comment.comment}</li>`)
          .join("")}</ul>`
      : "<p>КОММЕНТАРИЕВ НЕТ</p>";
  }
}

//функция для добавления комментариев из LocalStorage
function putCommentToStorage(comment) {
  const comments = getCommentFromStorage();
  comments.push(comment);
  localStorage.setItem("comments", JSON.stringify(comments));
}

//функция для получения комментариев из LocalStorage

function getCommentFromStorage() {
  return JSON.parse(localStorage.getItem("comments") || "[]");
}

//функция для рендеринга комментариев

function renderComment(comment) {
  return `
    <div class="mui--text-headline">${comment.theme}</div>
    <div class="mui--text-dark-secondary">
        ${new Date(comment.date).toLocaleDateString()}
        ${new Date(comment.date).toLocaleTimeString()}
    </div>
    <div>${comment.comment}</div>
    
    `;
}
