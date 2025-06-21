var Car = /** @class */ (function () {
    function Car() {
        this.mileage = 0;
        this.price = 100;
        this.color = 'white';
    }
    Car.prototype.drive = function () {
        return 'drive!';
    };
    Car.prototype.brake = function () {
        return 'brake!';
    };
    return Car;
}());
var Ford = /** @class */ (function () {
    function Ford() {
        this.mileage = 1;
        this.price = 2;
        this.color = 'white';
        this.seats = 2;
        this.tire = 3;
    }
    Ford.prototype.drive = function () {
        return 'drive!';
    };
    Ford.prototype.brake = function () {
        return 'brake!';
    };
    return Ford;
}());
var myFordCar = new Ford();
var user = {
    name: 'john',
    age: 20,
    address: 'seoul'
};
