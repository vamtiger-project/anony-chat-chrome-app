class Focus {
    main() {
        chrome.app.window.getAll()[0].focus();
    }
}

var focus = new Focus();

export default focus.main;
