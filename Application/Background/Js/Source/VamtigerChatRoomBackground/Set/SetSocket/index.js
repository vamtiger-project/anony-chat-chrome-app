class SetSocket {
    main(data) {
        if (!vamtiger._socket) {
            vamtiger._socket = io.connect(vamtiger._socketUrl);

            vamtiger._socket.on("connect", vamtiger.handle.socketConnection);
            vamtiger._socket.on("disconnect", vamtiger.handle.socketDisconnection);
            vamtiger._socket.on("registration", vamtiger.handle.socketRegistration);
            vamtiger._socket.on("stranger", vamtiger.handle.stranger);
        }
    }
}

var setSocket = new SetSocket();

export default setSocket.main;
