import isTheAppClosed from "./IsTheAppClosed";
import isThisAppRegistered from "./IsThisAppRegistered";

class Question {
    constructor() {
        Question.bindInstanceMethods(this);
    }

    main(question, data) {
        return new Promise((resolve, reject) => {
            this[question](data, resolve, reject);
        });
    }

    "Is the app closed?"(data, resolve, reject) {
        return isTheAppClosed(data, resolve, reject);
    }

    "Is this app registered?"(data, resolve, reject) {
        return isThisAppRegistered(data, resolve, reject);
    }

    static bindInstanceMethods(instance) {
        var propertyNames = Object.getOwnPropertyNames(this.prototype);

        Question.regex = Question._regex;

        propertyNames.forEach((properyName) => {
            if (!Question.regex.ignoreBind.test(properyName))
                this.prototype[properyName] =
                    instance[properyName].bind(instance);
        });
    }

    static get _regex() {
        var regex = {
            ignoreBind: /^(?:bindInstanceMethods|_\w+)$/
        };

        return regex;
    }
}

var question = new Question();

export default question.main;
