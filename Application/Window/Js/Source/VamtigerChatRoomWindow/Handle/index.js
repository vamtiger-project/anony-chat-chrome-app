import handleLoad from "./HandleLoad";
import handlePortMessage from "./HandlePortMessage";
import handleKeyDown from "./HandleKeyDown";

class Handle {
    get load() {
        return handleLoad;
    }

    get portMessage() {
        return handlePortMessage
    }

    get  keyDown() {
        return handleKeyDown;
    }
}

export default Handle;
