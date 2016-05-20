class HandleKeyDown {
    main(event) {
        if (event.which === 13)
            vamtiger._socket.emit("directMessage", {
                message: vamtiger.select.inputText,
                recipient: vamtiger.get.activeStranger
            });
    }
}

var handleKeyDown = new HandleKeyDown();

export default handleKeyDown.main;
