class Answer {
    static main(data, resolve, reject) {
        var answer = reject;

        if (vamtiger.get.appWindow)
            answer = reject;

        chrome.storage.local.get("appId", (record) => {
            if (record.appId) answer = resolve;

            answer(record.appId);
        });
    }
}

export default Answer.main;
