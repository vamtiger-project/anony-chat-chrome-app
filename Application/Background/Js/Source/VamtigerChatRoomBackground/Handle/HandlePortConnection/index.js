class PortConnection {
    main(port) {
        vamtiger.set.windowPort(port);
    }
}

var portConnection = new PortConnection();

export default portConnection.main;
