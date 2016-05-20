class HandleLaunch {
    constructor() {
        HandleLaunch.bindInstanceMethods(this);
    }

    ignore () {}

    main(event) {
        vamtiger.question("Is the app closed?")
            .then(vamtiger.launch)
            .catch(vamtiger.focus);
    }

    static bindInstanceMethods(instance) {
        var propertyNames = Object.getOwnPropertyNames(this.prototype);

        HandleLaunch.regex = HandleLaunch._regex;

        propertyNames.forEach((properyName) => {
            if (!HandleLaunch.regex.ignoreBind.test(properyName))
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

var handleLaunch = new HandleLaunch();

export default handleLaunch.main;
