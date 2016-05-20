import setWindowPort from "./SetWindowPort";
import setSocket from "./SetSocket";

class Setter {
    constructor() {
        this.windowPort = this._windowPort;
    }

    get _windowPort() {
        return setWindowPort;
    }

    get socket() {
        return setSocket;
    }
}

export default Setter;
