moviesApp.controller('mainCtrl', function ($scope, activeUserService, $location, lectureService) {



  // This is an authotization check. If the user is not logged going back to the home screen
  if (!activeUserService.isLoggedIn()) {
    $location.path("/");
    return;
  }


  $scope.lectures = [];
  lectureService.load(activeUserService.getUser()).then(function () {
    $scope.lectures = lectureService.lectures;
  });


  // $scope.clock = Date.now();

  // var tick = function () {
  //   $scope.clock = Date.now();
  // }
  // tick();
  // $interval(tick, 1000);

  // // function TimeCtrl($scope, $timeout) {
  //   $scope.clock = "loading clock..."; // initialise the time variable
  //   $scope.tickInterval = 1000 //ms

  //   var tick = function () {
  //     $scope.clock = Date.now() // get the current time
  //     $timeout(tick, $scope.tickInterval); // reset the timer
  //   }

  //   // Start the timer
  //   $timeout(tick, $scope.tickInterval);
  // // }


  // Push new Lecture to array
  $scope.addLecture = function (lecture) {
    var newLecture = new Lecture(lecture);
    console.log("var newLecture:");
    console.log(newLecture);
    $scope.lectures.push(newLecture);
  };

  // Sorting
  $scope.sortProp = "";
  $scope.changeSort = function (propName) {
    $scope.sortProp = propName;
  }


  // Open lecture details
  $scope.openLecture = function (lecture) {
    console.log("go to path:");
    console.log('/main/' + $scope.lectures.indexOf(lecture));
    $location.path('/main/' + $scope.lectures.indexOf(lecture));
  }




});


// moviesApp.controller('TimeCtrl', function ($scope, $interval) {
//   var tick = function () {
//     $scope.clock = Date.now();
//   }
//   tick();
//   $interval(tick, 1000);
// });
