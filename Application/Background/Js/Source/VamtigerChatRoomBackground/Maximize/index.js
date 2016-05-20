class Maximize {
    main() {
        vamtiger.get.appWindow ? vamtiger.get.appWindow.maximize() :
            vamtiger.ignore();
    }
}

var maximize = new Maximize();

export default maximize.main;
