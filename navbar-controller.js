

moviesApp.controller('navbarCtrl', function ($scope, activeUserService, $location) {

        
    $scope.name = activeUserService.getUser();
    
    var showNav = activeUserService.isLoggedIn();
    $scope.showNav = showNav;
    // console.log("activeUserService.isLoggedIn()=");
    // console.log(showNav);
    // console.log("$scope.showNav=");
    // console.log($scope.showNav);

    //   // This is an authotization check. If the user is not logged going back to the home screen
    //   if (!activeUserService.isLoggedIn()) {
    //     $location.path("/");
    //     return;
    //   }

    $scope.logout = function () {
        activeUserService.logout();
        $scope.invalidCredentails = true;
        $location.path('/');
    }

})
