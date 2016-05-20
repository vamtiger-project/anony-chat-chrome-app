class BackgroundPort {
    main() {
        vamtiger._backgroundPort = vamtiger.get.backgroundPort();

        vamtiger._backgroundPort.onMessage.addListener(
            vamtiger.handle.portMessage);

        vamtiger._backgroundPort.postMessage({
            action: "set.socket"
        });
    }
}

var backgroundPort = new BackgroundPort;

export default backgroundPort.main;
