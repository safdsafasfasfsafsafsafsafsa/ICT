var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Singleton.getInstance = function () {
        if (this.instance)
            return this.instance;
        this.instance = new Singleton();
        return this.instance;
    };
    return Singleton;
}());
var singleton = Singleton.getInstance();
