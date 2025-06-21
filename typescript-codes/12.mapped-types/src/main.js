[1, 2, 3].map(function (value) { return value.toString(); });
// ["1", "2", "3"]
// type Users = 'John' | 'Han' | 'Kim';
// // type UserFirstNames = { [K in Users]: string };
// const userFirstNameInfo: UserFirstNames = {
//     John: 'Doe',
//     Han: "Ho",  
//     Kim: "jun",
// }
// type UserFirstNames = {
//     John: string,
//     Han: string,
//     Kim: string,
// }
// type Users = 'John' | 'Han' | 'Kim';
// // type UserAge = { [K in Users]: number };
// const userAgeInfo: UserAge = {
//     John: 10,
//     Han: 20,
//     Kim: 30,
// }
// type UserAge = {
//     John: number,
//     Han: number,
//     Kim: number,
// }
// type DeviceFormatter<T> = {
//     [K in keyof T]: T[K];
// }
// type Device = {
//     manufacturer: string;
//     price: number;
// };
var iphone = { manufacturer: 'apple', price: 100 };
var priceOnly = { price: 23 };
var manufacturerOnly = { manufacturer: 'apple' };
var empty = {};
