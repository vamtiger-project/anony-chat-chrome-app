class HandleSocketDisconnection {
    main(event) {
        console.log(">> Disconnected!");
        console.log(event);
    }
}

var handleSocketDisconnection = new HandleSocketDisconnection();

export default handleSocketDisconnection.main;
