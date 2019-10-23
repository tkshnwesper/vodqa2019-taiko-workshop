export const ID = "auth";

let _goto, _below, _textBox, _write, _click, _button;
let _username, _password;

export function init(taiko, eventEmitter) {
  const { goto, below, textBox, write, currentURL, click, button } = taiko;
  _goto = goto;
  _below = below;
  _textBox = textBox;
  _write = write;
  _click = click;
  _button = button;

  eventEmitter.on("firstMeaningfulPaint", async () => {
    (await currentURL()).endsWith("/login") && (await fillForm());
  });
}

export function credentials(username, password) {
  _username = username;
  _password = password;
}

// export async function goto(url) {
//   await _goto(url);
//   if (String(url).endsWith("/login")) {
//     await fillForm();
//   }
// }

async function fillForm() {
  await _write(_username, _textBox(_below("Username")));
  await _write(_password, _textBox(_below("Password")));
  await _click(_button("Login"));
}
