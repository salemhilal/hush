(function() {
    var app = angular.module('hush', []);

    app.controller('hushController', function ($scope, $window) {
        console.log('Hush is running', $window.apps);
        $scope.apps = $window.apps;
    });

})();
