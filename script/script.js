import { openBrowser, closeBrowser, goto, button, click } from "taiko";
import { options, validatePassword } from 'taiko-auth'

(async function(){
  options({ minLength: 6, errorMessage: 'Password must be longer than 6 characters' });

  await openBrowser({ headless: false });

  await goto('http://localhost:3000');

  await validatePassword()

  await closeBrowser();
})()
