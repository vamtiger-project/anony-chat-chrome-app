class GetWindowPort {
    main(port) {
        var windowPort = !vamtiger._windowPort ? port : vamtiger._windowPort;

        return windowPort;
    }
}

var getWindowPort = new GetWindowPort();

export default getWindowPort.main;
