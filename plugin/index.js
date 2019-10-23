export const ID = "auth";

let _goto, _below, _textBox, _write;
let _username, _password;

export function init(taiko, eventEmitter) {
  const { goto, below, textBox, write } = taiko;
  _goto = goto;
  _below = below;
  _textBox = textBox;
  _write = write;
}

export function credentials(username, password) {
  _username = username;
  _password = password;
}

export async function goto(url) {
  await _goto(url);
  if (String(url).endsWith("/login")) {
    await fillForm();
  }
}

async function fillForm() {
  await _write(_username, _textBox(_below("Username")));
  await _write(_password, _textBox(_below("Password")));
}
