class Register {
    main() {
        vamtiger._socket.emit("register");
    }
}

var register = new Register();

export default register.main;
