class HandleInstall {
    constructor() {
        HandleInstall.bindInstanceMethods(this);
    }

    main(event) {
        var respondToInstallReason = {
            install: this.firstInstall
        };

        respondToInstallReason[event.reason] ?
            respondToInstallReason[event.reason]() : vamtiger.ignore();
    }

    firstInstall() {
        vamtiger.launch();
    }

    static bindInstanceMethods(instance) {
        var propertyNames = Object.getOwnPropertyNames(this.prototype);

        HandleInstall.regex = HandleInstall._regex;

        propertyNames.forEach((properyName) => {
            if (!HandleInstall.regex.ignoreBind.test(properyName))
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

var handleInstall = new HandleInstall()

export default handleInstall.main;
