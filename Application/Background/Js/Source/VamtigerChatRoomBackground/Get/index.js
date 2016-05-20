import getWindowPort from "./GetWindowPort";

class Get {
    get appWindow() {
        var appWindow = chrome.app.window.getAll().length ?
            chrome.app.window.getAll()[0] : null;

        return appWindow;
    }

    get windowPort() {
        return getWindowPort;
    }
}

export default Get;
