(function() {
    var app = angular.module('hush', ['firebase']);
    $(window).load(function () {
        $('.apps-container').fadeIn();
    });

    app.controller('hushController', function ($scope, $window, $firebaseObject) {
        console.log('Hush is now running.');

        // Initialize firebase
        var ref = new Firebase("https://salem.firebaseio.com");
        var syncObject = $firebaseObject(ref);
        syncObject.$bindTo($scope, "viewCount");

        // Get app data
        $scope.apps = $window.apps;
        $scope.modalApp = $scope.apps[0] || {};

        // Modal show/hide functions
        $scope.showModal = function(app) {
            if ($scope.viewCount[app.name]) {
                $scope.viewCount[app.name]++;
            } else {
                $scope.viewCount[app.name] = 1;
            }
            console.log('incrementing views for', app.name, 'to', $scope.viewCount[app.name]);
            $scope.modalApp = app;
            $('.app-overlay').fadeIn();
            $('.modal').animate({marginTop: '60px'});
        };

        $scope.hideModal = function() {
            $('.overlay').fadeOut();
            $('.modal').animate({marginTop: '30px'});
        };

        $scope.whatIsThis = function() {
            $('.whatis-overlay').fadeIn();
            $('.modal').animate({marginTop: '60px'});
        };
    });

})();
