moviesApp.controller("contactCtrl", function ($scope, activeUserService, $location, lectureService) {

    // This is an authotization check. If the user is not logged going back to the home screen
  if (!activeUserService.isLoggedIn()) {
    $location.path("/");
    return;
  }


});


