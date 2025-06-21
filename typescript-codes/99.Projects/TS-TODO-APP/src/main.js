"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var List_1 = require("./models/List");
var ListItem_1 = require("./models/ListItem");
var ListTemplate_1 = require("./templates/ListTemplate");
var initApp = function () {
    console.log('init!');
    var listInstance = List_1.default.instance;
    var listTemplateInstance = ListTemplate_1.default.instance;
    var itemForm = document.getElementById('form');
    itemForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // 새 item Text 
        var inputEl = document.getElementById('item-input');
        var newText = inputEl.value.trim();
        if (!newText.length)
            return;
        inputEl.value = '';
        // 새 item ID
        var itemId = listInstance.list.length
            ? parseInt(listInstance.list[listInstance.list.length - 1].id) + 1
            : 1;
        // new Item 생성하기
        var newItem = new ListItem_1.default(itemId.toString(), newText);
        // list에 new item 넣기
        listInstance.addItem(newItem);
        listTemplateInstance.render(listInstance);
    });
    var clearItemsEl = document.getElementById('clear-items-btn');
    clearItemsEl.addEventListener('click', function () {
        listInstance.clearList();
        listTemplateInstance.clear();
    });
    // 초기 데이터를 load 하기
    listInstance.load();
    // 생성된 데이터를 이용해서 화면에서 보여주기
    listTemplateInstance.render(listInstance);
};
initApp();
