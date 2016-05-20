class BackgroundPort {
    constructor() {
        BackgroundPort.bindInstanceMethods(this);

        this.name = this._name;
        this.config = this._config;
    }

    main() {
        var backgroundPortConnection = !vamtiger._backgroundPort ?
            chrome.runtime.connect(this.config) : vamtiger._backgroundPort;

        return backgroundPortConnection;
    }

    get _name() {
        var name = "vamtiger";

        return name;
    }

    get _config() {
        var config = {
            name: this.name
        };

        return config;
    }

    static bindInstanceMethods(instance) {
        var propertyNames = Object.getOwnPropertyNames(this.prototype);

        BackgroundPort.regex = BackgroundPort._regex;

        propertyNames.forEach((properyName) => {
            if (!BackgroundPort.regex.ignoreBind.test(properyName))
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

var backgroundPort = new BackgroundPort();

export default backgroundPort.main;
