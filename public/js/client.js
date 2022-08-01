const msgerForm = document.querySelector(".msger-inputarea");
const msgerInput = document.querySelector(".msger-input");
const msgerChat = document.querySelector(".msger-chat");
const msgerUsername = document.querySelector(".msger-header-username");

const socket = io()

const username = prompt("Coloque su nombre de usuario: ");

if (username) {
    socket.emit("set-username", username);
    msgerUsername.innerHTML = `hola <strong>${username}</strong>`
}

// cargar mensajes guardados
// Esto es similar a usar Axios
// fetch("/")
//     .then((res) => res.json())
//     .then((messages) => {
//         messages.forEach(addMessage);
//     });

socket.on("new-message-ok", (payload) => {
    console.log(payload)
    addMessage(payload);
    console.log(payload)
});

function addMessage(payload) {
    const { text, user, createdAt } = payload;
    const isMe = user.username === username
    appendMessage(user.username, isMe ? "right" : "left", text, createdAt);
}

function appendMessage(name, side, text, date) {
    const msgHTML = `
    <div class="msg ${side}-msg">
      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">${name || "Invitado"}</div>
          <div class="msg-info-time" datetime="${date}"></div>
        </div>
        <div class="msg-text">${text}</div>
      </div>
    </div>
  `;

    msgerChat.insertAdjacentHTML("beforeend", msgHTML);
    msgerChat.scrollTop += 500;

    const msgerTime = document.querySelector(".msg-info-time");
    timeago().render(msgerTime, "es")
}

msgerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const msgText = msgerInput.value;
    if (!msgText) return;

    socket.emit("new-message", msgText)

    msgerInput.value = "";
})

