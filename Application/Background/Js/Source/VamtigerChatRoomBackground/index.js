import Handle from "./Handle";
import Get from "./Get";
import Setter from "./Set";
import Regex from "./Regex";
import question from "./Question";
import launch from "./Launch";
import focus from "./Focus";
import maximize from "./Maximize";
import register from "./Register";
import chat from "./Chat";

class VamtigerChatRoomBackground {
    constructor(socketUrl) {
        this.handle = this._handle;
        this.get = this._get;
        this.set = this._set;
        this.regex = this._regex;

        this._windowPort = null;
        this.__socketUrl = null;
        this.__socket = null;

        this._socketUrl = socketUrl;

        chrome.runtime.onInstalled.addListener(this.handle.install);
        chrome.runtime.onConnect.addListener(this.handle.portConnection);
        chrome.app.runtime.onLaunched.addListener(this.handle.launch);
    }

    ignore () {}

    get _handle() {
        return new Handle();
    }

    get _get() {
        return new Get();
    }

    get _set() {
        return new Setter();
    }

    get _regex() {
        return new Regex();
    }

    set _socketUrl(url) {
        this.__socketUrl = url;
    }

    get _socketUrl() {
        return this.__socketUrl;
    }

    set _socket(socket) {
        this.__socket = !this.__socket ? socket : this.__socket;
    }

    get _socket() {
        return this.__socket;
    }

    get question() {
        return question;
    }

    get launch() {
        return launch;
    }

    get focus() {
        return focus;
    }

    get maximize() {
        return maximize;
    }

    get register() {
        return register;
    }

    get chat() {
        return chat;
    }
}

export default VamtigerChatRoomBackground;
