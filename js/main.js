(function() {
    var app = angular.module('hush', []);
    $(window).load(function () {
        $('.apps-container').fadeIn();
    });

    app.controller('hushController', function ($scope, $window) {
        console.log('Hush is running', $window.apps);
        $scope.apps = $window.apps;

        $scope.modalApp = $scope.apps[0];

        $scope.showModal = function(app) {
            $scope.modalApp = app;
            $('body').addClass('freeze');
            $('.overlay').fadeIn();
            $('.modal').animate({marginTop: '60px'});
        };

        $scope.hideModal = function() {
            $('.overlay').fadeOut();
            $('.modal').animate({marginTop: '30px'});
            $('body').removeClass('freeze');
        };
    });

})();
