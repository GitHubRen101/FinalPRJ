var moviesApp = angular.module('moviesApp', ['ngRoute']);

// defining a root controller
moviesApp.controller("appCtrl", '$scope', '$rootScope', '$http', '$location',
    function ($scope, $rootScope, $http, $location) {

        $scope.navigation = true; // default visibility state
        $scope.showNavigation = function (show) {
            $scope.navigation = show;
        };




        // defining local variable (not accessible from outside)
        var someVariable = "You cannot access me from html!"

        // defining variable in scope
        $scope.message = "Hello World!"

        // defining function in scope
        $scope.greet = function () {
            return "Welcome dude!"
        }

    }
);


