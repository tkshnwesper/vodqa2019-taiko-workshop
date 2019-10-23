const { openBrowser, goto, image, title, waitFor, click, press, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser({ headless: false });
        await goto('https://en.wikipedia.org/wiki/Taiko');
        await click(image('Photo of a barrel-shaped chū-daiko, with a fastened cloth hanging down from the drum head.'));
        await waitFor(2000);
        await press('Escape');
        await waitFor(async () => await title() == 'Taiko - Wikipedia');
        await waitFor(2000);
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
