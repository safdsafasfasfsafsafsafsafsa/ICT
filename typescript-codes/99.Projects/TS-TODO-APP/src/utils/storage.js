"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var storage = {
    set: function (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    get: function (key, defaultValue) {
        var value = localStorage.getItem(key);
        return (value ? JSON.parse(value) : defaultValue);
    },
    remove: function (key) {
        localStorage.removeItem(key);
    }
};
exports.default = storage;
