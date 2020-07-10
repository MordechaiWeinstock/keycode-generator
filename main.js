const key = document.getElementById("key"),
      keyCode = document.getElementById("key-code"),
      code = document.getElementById("code");


window.addEventListener("keydown", (event) => {
    key.textContent = event.key;
    keyCode.textContent = event.keyCode;
    code.textContent = event.code;
});