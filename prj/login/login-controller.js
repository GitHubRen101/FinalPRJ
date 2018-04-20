app.controller('loginCtrl', function($scope, activeUserService, $log, $location) {

    $scope.invalidCredentails = false;
    // $scope.showNavigation(false);

    $scope.login = function() {
        // TODO: Here you should disable the login button until there is a response from the service

        activeUserService.login($scope.email, $scope.pwd).then(function(successLogin) {
            if (successLogin) {
                control.log("ok login");
                // $scope.showNavigation(true);
                $location.path("/main");
            } else {
                // TODO: Missing hadleing of next try
                $scope.invalidCredentails = true;
            }
        })
    }
});


// app.controller('loginCtrl', function($scope, activeUserService, $log, $location) {

//     $scope.invalidCredentails = false;

//     $scope.login = function() {
//         // TODO: Here you should disable the login button until there is a response from the service

//         activeUserService.login($scope.email, $scope.pwd).then(function(successLogin) {
//             if (successLogin) {
//                 $location.path("/cars");
//             } else {
//                 // TODO: Missing hadleing of next try
//                 $scope.invalidCredentails = true;
//             }
//         })
//     }
// });