class Launch {
    main() {
        !vamtiger.get.appWindow ?
            chrome.app.window.create("Application/Window/index.html",
            vamtiger.maximize)
            :
            vamtiger.focus();
    }
}

var launch = new Launch();

export default launch.main;
