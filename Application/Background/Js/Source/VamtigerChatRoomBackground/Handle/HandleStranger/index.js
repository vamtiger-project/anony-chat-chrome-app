class HandleStranger {
    main(data) {
        vamtiger._windowPort.postMessage({
            action: "update.stranger",
            data
        });
    }
}

var handleStranger = new HandleStranger();

export default handleStranger.main;
