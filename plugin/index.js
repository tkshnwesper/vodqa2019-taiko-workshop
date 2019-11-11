import assert from 'assert'

export const ID = "password"

let _textBox, _write, _click, _text, _reload
let _errorMessage, _minLength

export function init(taiko, eventEmitter) {
  const { textBox, write, click, text, reload } = taiko
  _textBox = textBox
  _write = write
  _click = click
  _text = text
  _reload = reload
}

export function options({ minLength, errorMessage }) {
  _minLength = minLength
  _errorMessage = errorMessage
}

export async function validatePassword() {
  let belowLimit = ""
  for (let i = 1; i < _minLength; i++) {
    belowLimit += i.toString()
  }
  await _write(belowLimit, _textBox('Password:'))
  await _click('Submit')
  assert (await _text(_errorMessage).exists())

  await _reload()

  let aboveLimit = ""
  for (let i = 1; i < _minLength + 5; i++) {
    aboveLimit += i.toString()
  }
  await _write(aboveLimit, _textBox('Password:'))
  await _click('Submit')
  assert (!(await _text(_errorMessage).exists()))
}
