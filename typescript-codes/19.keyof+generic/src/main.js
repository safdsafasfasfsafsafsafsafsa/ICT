var person = {
    name: 'John',
    age: 30,
    address: 'Seoul'
};
var age = getProperty(person, 'age'); //30
// const name = getProperty(person, 'name');  //John
// const invalid = getProperty(person, 'invalid');  //Error
function getProperty(obj, key) {
    return obj[key];
}
