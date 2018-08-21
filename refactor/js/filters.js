(function () {
    'use strict';
    angular
        .module("demoApp")
        .filter('sortByFirstName', mainFilter);

    function mainFilter() {
        return function (array) {
            function compare(a, b) {
                return a.firstName.localeCompare(b.firstName)
            }
            return array.sort(compare);
        }
    }
})();