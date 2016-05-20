import backgroundPort from "./BackgroundPort";
import strangerButton from "./StrangerButton";

class Get {
    constructor() {
        this.backgroundPort = this._backgroundPort;
    }

    get _backgroundPort() {
        return backgroundPort;
    }

    get strangerButton() {
        return strangerButton;
    }

    get activeStranger() {
        console.log(">> To be continued!");
    }
}

export default Get;
