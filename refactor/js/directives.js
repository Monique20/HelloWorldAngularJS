(function () {
    'use strict';
    angular
        .module("demoApp")
        .directive("sayHello", mainDirective);

    function mainDirective() {
        return {
            scope: false,
            link: function ($scope, element, attrs) {
                $scope.message = attrs.message;
            },
            template: "<h1>{{[message, user.firstName, user.lastName].join(' ')}}!</h1>"
        };
    }
})();