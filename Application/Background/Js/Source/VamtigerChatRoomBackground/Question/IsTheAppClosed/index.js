class Answer {
    static main(data, resolve, reject) {
        var answer = resolve;

        if (vamtiger.get.appWindow)
            answer = reject;

        answer();
    }
}

export default Answer.main;
