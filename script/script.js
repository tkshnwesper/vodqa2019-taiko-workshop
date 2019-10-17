import { openBrowser, closeBrowser, goto, button, click } from "taiko";
import { credentials } from 'taiko-auth'

(async function(){
  const BASE_URL = 'http://localhost:8080'

  credentials("test", "test");

  await openBrowser({ headless: false });

  await goto(BASE_URL + "/login");

  await click(button('Login'));

  await goto(BASE_URL + '/register')

  await goto(BASE_URL + "/login");

  await closeBrowser();
})()
