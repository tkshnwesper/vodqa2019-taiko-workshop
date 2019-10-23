const { openBrowser, waitFor, goto, mouseAction, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser({ headless: false });
        await goto("http://www.htmlcanvasstudio.com/");
        await mouseAction('press', {x: 200, y: 250});
        await waitFor(1000);
        await mouseAction('move', {x: 150, y: 200});
        await waitFor(1000);
        await mouseAction('move', {x: 160, y: 220});
        await waitFor(1000);
        await mouseAction('move', {x: 170, y: 230});
        await waitFor(1000);
        await mouseAction('move', {x: 180, y: 270});
        await waitFor(1000);
        await mouseAction('move', {x: 190, y: 300});
        await waitFor(1000);
        await mouseAction('release', {x: 200, y: 350});
        await waitFor(1000);
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
