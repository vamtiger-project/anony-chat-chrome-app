class HandleSocketRegistration {
    main(appId) {
        chrome.storage.local.set({appId}, vamtiger.chat);
    }
}

var handleSocketRegistration = new HandleSocketRegistration();

export default handleSocketRegistration.main;
