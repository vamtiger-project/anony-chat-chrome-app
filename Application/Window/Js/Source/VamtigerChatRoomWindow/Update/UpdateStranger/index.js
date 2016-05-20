class UpdateStranger {
    main(message) {
        vamtiger.question("Must the stranger be acknowledged?", message.data)
            .then(vamtiger.get.strangerButton)
            .then((strangerButton) =>
                vamtiger.select.strangerSection.appendChild(strangerButton))
            .catch(vamtiger.ignore);
    }
}

var updatStranger = new UpdateStranger();

export default updatStranger.main;
