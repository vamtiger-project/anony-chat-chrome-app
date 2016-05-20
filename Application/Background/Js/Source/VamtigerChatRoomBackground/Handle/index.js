import handleInstall from "./HandleInstall";
import handleLaunch from "./HandleLaunch";
import handlePortConnection from "./HandlePortConnection";
import handlePortMessage from "./HandlePortMessage";
import handleSocketConnection from "./HandleSocketConnection";
import handleSocketDisconnection from "./HandleSocketDisconnection";
import handleSocketRegistration from "./HandleSocketRegistration";
import handleStranger from "./HandleStranger";

class Handle {
    get install() {
        return handleInstall;
    }

    get launch() {
        return handleLaunch;
    }

    get portConnection() {
        return handlePortConnection;
    }

    get portMessage() {
        return handlePortMessage;
    }

    get socketConnection() {
        return handleSocketConnection;
    }

    get socketDisconnection() {
        return handleSocketDisconnection;
    }

    get socketRegistration() {
        return handleSocketRegistration;
    }

    get stranger() {
        return handleStranger;
    }
}

export default Handle
