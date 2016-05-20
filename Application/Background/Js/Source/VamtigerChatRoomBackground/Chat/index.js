class Chat {
    main() {
        chrome.storage.local.get("appId", (record) => {
            vamtiger._socket.emit("chat", record.appId);
        })
    }
}

var chat = new Chat();

export default chat.main;
