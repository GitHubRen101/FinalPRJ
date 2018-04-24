

moviesApp.controller('navbarCtrl', function ($scope, activeUserService, $location) {

    // // This is an authotization check. If the user is not logged going back to the home screen
    // if (!activeUserService.isLoggedIn()) {
    //     $location.path("/");
    //     return;
    // }

    $scope.name = activeUserService.getUser();
    // console.log("activeUserService.isLoggedIn()=");
    // console.log(showNav);
    // console.log("$scope.showNav=");
    // console.log($scope.showNav);
    var showNav = activeUserService.isLoggedIn();
    $scope.showNav = showNav;




    $scope.logout = function () {
        activeUserService.logout();
        $scope.invalidCredentails = true;
        $location.path('/');
    }

})
