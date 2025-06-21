var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Post = /** @class */ (function () {
    function Post(id, title) {
        if (id === void 0) { id = 0; }
        if (title === void 0) { title = ''; }
        this.id = id;
        this.title = title;
    }
    Post.prototype.getPost = function () {
        return "postId ".concat(this.id, ", postTitle: ").concat(this.title);
    };
    return Post;
}());
var PostB = /** @class */ (function (_super) {
    __extends(PostB, _super);
    function PostB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PostB.prototype.getPost = function () {
        return this.id;
    };
    return PostB;
}(Post));
var post = new Post(1, "title 1");
console.log(post.id); // 1
console.log(post.title); // "title 1"
