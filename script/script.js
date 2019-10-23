import {
  openBrowser,
  closeBrowser,
  goto,
  button,
  click,
  client,
  reload,
  write,
  below,
  textBox,
  waitFor
} from "taiko";
import { credentials } from "taiko-auth";

(async function() {
  const BASE_URL = "http://localhost:8080";

  credentials("test", "test");

  await openBrowser({ headless: false });

  await goto(BASE_URL + "/register");
  await write("x", textBox(below("First Name")));
  await write("y", textBox(below("Last Name")));
  await write("test", textBox(below("Username")));
  await write("test", textBox(below("Password")));
  await click(button("Register"));

  // await goto(BASE_URL);

  await waitFor(10000);
  // await click(button("Login"));
  // await waitFor("You're logged in with React!!")

  // await (await client()).Storage.clearDataForOrigin({
  //   storageTypes: "local_storage",
  //   origin: "localhost:8080"
  // });

  // await reload();

  // await click(button("Login"), { waitForStart: 5000 });

  await goto(BASE_URL + "/register");

  await goto(BASE_URL + "/login");
  await waitFor(10000);

  // await waitFor("You're logged in with React!!")

  await closeBrowser();
})();
