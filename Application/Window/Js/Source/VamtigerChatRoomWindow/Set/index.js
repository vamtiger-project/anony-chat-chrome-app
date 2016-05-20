import backgroundPort from "./BackgroundPort";

class Setter {
    constructor() {
        this.backgroundPort = this._backgroundPort;
    }

    get _backgroundPort() {
        return backgroundPort;
    }
}

export default Setter;
