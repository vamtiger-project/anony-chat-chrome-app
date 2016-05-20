class Select {
    get strangers() {
        return Array.from(document.querySelectorAll(".stranger > button"));
    }

    get strangerSection() {
        return document.querySelector(".stranger");
    }

    get inputText() {
        return document.querySelector(".chatInput");
    }

    newElement(innerHtml) {
        var elementCreator = document.createElement("div");

        elementCreator.innerHTML = innerHtml;

        return elementCreator.firstElementChild;
    }
}

export default Select;
