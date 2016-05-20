class HandlePortMessage {
    main(message) {
        var messageAction = message.action.split(vamtiger.regex.dot).reduce(
            (recursiveAction, action) => recursiveAction[action], vamtiger);

        messageAction(message);
    }
}

var handlePortMessage = new HandlePortMessage();

export default handlePortMessage.main;
