

moviesApp.controller('navbarCtrl', function ($scope, activeUserService, $location) {

    $scope.name = 'navbarCtrl';

    $scope.logout = function () {
        activeUserService.logout();
        // $scope.invalidCredentails = true;
        $location.path('/');
    }

})

