class HandleSocketConnection {
    main(event) {
        vamtiger.question("Is this app registered?")
            .then(vamtiger.chat)
            .catch(vamtiger.register);
    }
}

var handleSocketConnection = new HandleSocketConnection();

export default handleSocketConnection.main;
