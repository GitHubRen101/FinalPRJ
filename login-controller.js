moviesApp.controller('loginCtrl', function ($scope, activeUserService, $log, $location) {


    $scope.invalidCredentails = false;

    $scope.login = function () {
        // TODO: Here you should disable the login button until there is a response from the service

        activeUserService.login($scope.email, $scope.pwd).then(function (successLogin) {
            if (successLogin) {
                $location.path("/main");
            } else {
                // TODO: Missing hadleing of next try
                $scope.invalidCredentails = true;
            }
        })
    }


    $scope.logout = function () {
        // TODO: Here you should disable the login button until there is a response from the service

        $scope.invalidCredentails = true;
        $location.path("/");
    }




});