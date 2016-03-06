define(['mylib'], function (mylib) {
    var add = function (x, y) {
        mylib.say();
        return x + y;
    };
    return {
        add: add
    };
});