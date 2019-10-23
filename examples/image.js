const { openBrowser, goto, image, click, press, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser();
        await goto('https://en.wikipedia.org/wiki/Taiko');
        await click(image('Photo of a barrel-shaped chū-daiko, with a fastened cloth hanging down from the drum head.'));
        await press('Escape');
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
