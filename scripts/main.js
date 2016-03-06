require.config({
    baseUrl: 'scripts',
    paths: {
        'util': 'helper/util',
        'mylib': 'mylib'
    }
});

require(['util'], function (util) {
    alert(util.add(1, 1));
});