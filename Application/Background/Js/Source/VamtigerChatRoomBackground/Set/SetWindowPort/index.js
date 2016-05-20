class SetWindowPort {
    main(port) {
        vamtiger._windowPort = vamtiger.get.windowPort(port);

        vamtiger._windowPort.onMessage.addListener(vamtiger.handle.portMessage);
    }
}

var setWindowPort = new SetWindowPort();

export default setWindowPort.main;
