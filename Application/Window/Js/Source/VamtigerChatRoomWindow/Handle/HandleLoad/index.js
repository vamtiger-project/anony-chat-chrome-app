class HandleLoad {
    constructor() {
        HandleLoad.bindInstanceMethods(this);
    }

    main(event) {
        vamtiger.set.backgroundPort();
    }

    static bindInstanceMethods(instance) {
        var propertyNames = Object.getOwnPropertyNames(this.prototype);

        HandleLoad.regex = HandleLoad._regex;

        propertyNames.forEach((properyName) => {
            if (!HandleLoad.regex.ignoreBind.test(properyName))
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

var handleLoad = new HandleLoad();

export default handleLoad.main;
