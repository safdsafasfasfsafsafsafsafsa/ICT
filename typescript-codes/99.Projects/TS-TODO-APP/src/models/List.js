"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var storage_1 = require("../utils/storage");
var ListItem_1 = require("./ListItem");
var List = /** @class */ (function () {
    function List(_list) {
        if (_list === void 0) { _list = []; }
        this._list = _list;
    }
    Object.defineProperty(List.prototype, "list", {
        get: function () {
            return this._list;
        },
        enumerable: false,
        configurable: true
    });
    List.prototype.load = function () {
        // const storedList: string | null = localStorage.getItem('myList');
        // if (typeof storedList !== 'string') return;
        // const parsedList: {
        //     _id: string,
        //     _item: string,
        //     _checked: boolean
        // }[] = JSON.parse(storedList);
        var parsedList = storage_1.default.get('myList');
        // listItem  인스턴스 객체 생성  => list  인스턴스 객체에 넣어주기   
        parsedList.forEach(function (itemObj) {
            var newListItem = new ListItem_1.default(itemObj._id, itemObj._item, itemObj._checked);
            List.instance.addItem(newListItem);
        });
    };
    List.prototype.save = function () {
        storage_1.default.set('myList', this._list);
        // localStorage.setItem('myList', JSON.stringify(this._list));
    };
    List.prototype.clearList = function () {
        this._list = [];
        this.save();
    };
    List.prototype.addItem = function (itemObj) {
        this._list.push(itemObj);
        this.save();
    };
    List.prototype.removeItem = function (id) {
        this._list = this._list.filter(function (item) { return item.id !== id; });
        this.save();
    };
    List.instance = new List();
    return List;
}());
exports.default = List;
