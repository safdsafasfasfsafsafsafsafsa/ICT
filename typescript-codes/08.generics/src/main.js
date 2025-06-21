// // function getArrayLength(arr: number[] | string[] | boolean[]): number {
// //     return arr.length;
// // }
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// function getArrayLength<T>(arr: T[]): number {
//     return arr.length;
// }
// const array1 = [1, 2, 3];
// const array2 = ["a", "b", "c"];
// const array3 = [true, false, true];
// getArrayLength<number>(array1);
// getArrayLength<string>(array2);
// getArrayLength<boolean>(array3);
// interface Vehicle<T> {
//     name: string;
//     color: string;
//     option: T;
// }
// const car: Vehicle<{ price: number }> = {
//     name: 'Car',
//     color: 'red',
//     option: {
//         price: 1000
//     }
// }
// const bike: Vehicle<boolean> = {
//     name: 'Bike',
//     color: 'green',
//     option: true
// }
var makeArr = function (x, y) {
    return [x, y];
};
var array = makeArr(4, 5);
var array = makeArr("a", "b");
var makeArr1 = function (x, y) {
    return [x, y];
};
var array1 = makeArr1("a", "b");
var makeFullName = function (obj) {
    return __assign(__assign({}, obj), { fullName: obj.firstName + " " + obj.lastName });
};
makeFullName({ firstName: "John", lastName: "Doe", location: 'Seoul' });
makeFullName({ firstName: "John", lastName: "Doe", hello: 'Greeting' });
