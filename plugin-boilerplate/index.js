export const ID = "auth";

let _username, _password;
let _goto, _write, _below, _textBox;

export function init(taiko, eventEmitter) {
  _goto = taiko.goto;
  _write = taiko.write;
  _below = taiko.below;
  _textBox = taiko.textBox;
}

export async function goto(url) {
  await _goto(url);
  await fillForm();
}

function fillForm() {
  await _write(_username, _textBox(_below('Username')))
  await _write(_password, _textBox(_below('Password')))
}

export function credentials(username, password) {
  _username = username;
  _password = password;
}