// interface IUser {
//     name: string;
//     age: number;
//     address: string;
// }
// type UserKeys = keyof IUser
// "name" | "age" | "address"
var user = {
    name: "John",
    age: 20,
    address: 'seoul'
};
var UserRole;
(function (UserRole) {
    UserRole[UserRole["admin"] = 0] = "admin";
    UserRole[UserRole["manager"] = 1] = "manager";
})(UserRole || (UserRole = {}));
