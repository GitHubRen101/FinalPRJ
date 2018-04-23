moviesApp.controller('mainCtrl', function ($scope, activeUserService, $location, lectureService) {


  console.log("main controller");
  // This is an authotization check. If the user is not logged going back to the home screen
  if (!activeUserService.isLoggedIn()) {
    $location.path("/");
    return;
  }
  
  console.log("main controller: passed here");

  


 



});


// moviesApp.controller('TimeCtrl', function ($scope, $interval) {
//   var tick = function () {
//     $scope.clock = Date.now();
//   }
//   tick();
//   $interval(tick, 1000);
// });
