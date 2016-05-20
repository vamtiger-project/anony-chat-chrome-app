import Handle from "./Handle";
import Setter from "./Set";
import Get from "./Get";
import Regex from "./Regex";
import Update from "./Update";
import Select from "./Select";
import question from "./Question";

class VamtigerChatRoomWindow {
    constructor() {
        this.handle = this._handle;
        this.set = this._set;
        this.get = this._get;
        this.regex = this._regex;
        this.update = this._update;
        this.select = this._select;

        this._backgroundPort = null;

        addEventListener("load", this.handle.load);
        addEventListener("keydown", this.handle.keyDown);
    }

    ignore() {}

    get _handle() {
        return new Handle();
    }

    get _set() {
        return new Setter();
    }

    get _get() {
        return new Get();
    }

    get _regex() {
        return new Regex();
    }

    get _update() {
        return new Update();
    }

    get _select() {
        return new Select();
    }

    get question() {
        return question;
    }
}

export default VamtigerChatRoomWindow;
