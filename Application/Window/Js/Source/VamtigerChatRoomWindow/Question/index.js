import mustTheStrangerBeAcknowledged from "./MustTheStrangerBeAcknowledged";

class Question {
    constructor() {
        Question.bindInstanceMethods(this);
    }

    main(question, data) {
        return new Promise((resolve, reject) => {
            this[question](data, resolve, reject);
        });
    }

    "Must the stranger be acknowledged?"(data, resolve, reject) {
        return mustTheStrangerBeAcknowledged(data, resolve, reject);
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
