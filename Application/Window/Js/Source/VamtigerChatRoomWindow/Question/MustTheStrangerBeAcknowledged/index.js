class Answer {
    static main(data, resolve, reject) {
        var answer = resolve;

        vamtiger.select.strangers.forEach((button) => {
            if (button.innerHTML===data.stranger) answer = reject;
        });
        
        answer(data.stranger);
    }
}

export default Answer.main;
