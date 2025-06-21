"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ListTemplate = /** @class */ (function () {
    function ListTemplate() {
        this.ul = document.getElementById('list');
    }
    ListTemplate.prototype.clear = function () {
        this.ul.innerHTML = '';
    };
    ListTemplate.prototype.render = function (fullList) {
        var _this = this;
        this.clear();
        fullList.list.forEach(function (item) {
            var liEl = document.createElement('li');
            liEl.className = 'item';
            var checkEl = document.createElement('input');
            checkEl.type = 'checkbox';
            checkEl.id = item.id;
            checkEl.checked = item.checked;
            liEl.append(checkEl);
            checkEl.addEventListener('change', function () {
                item.checked = !item.checked;
                fullList.save();
            });
            var labelEl = document.createElement('label');
            labelEl.htmlFor = item.id;
            labelEl.textContent = item.item;
            liEl.append(labelEl);
            var buttonEl = document.createElement('button');
            buttonEl.className = 'button';
            buttonEl.textContent = 'X';
            liEl.append(buttonEl);
            buttonEl.addEventListener('click', function () {
                fullList.removeItem(item.id);
                _this.render(fullList);
            });
            _this.ul.append(liEl);
        });
    };
    ListTemplate.instance = new ListTemplate();
    return ListTemplate;
}());
exports.default = ListTemplate;
