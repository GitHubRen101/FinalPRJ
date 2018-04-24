moviesApp.controller("lecturesDispCtrl", function ($scope, activeUserService, $location, lectureService, courseService) {

  console.log("lectures Disp controller");
  // This is an authotization check. If the user is not logged going back to the home screen
  if (!activeUserService.isLoggedIn()) {
    $location.path("/");
    return;
  }

  $scope.courses = [];
  courseService.load(activeUserService.getUser()).then(function () {
    $scope.courses = courseService.courses;
  });

  console.log("courses:");
  console.log($scope.courses);

  $scope.lectures = [];
  lectureService.load(activeUserService.getUser()).then(function () {
    $scope.lectures = lectureService.lectures;
  });

  console.log("lectures:");
  console.log($scope.lectures);

  // // Open Lecture for update
  // $scope.openLecture = function (lecture)
  //  {
  //   console.log("open new window to update lecture:");
  //   // console.log('/main/' + $scope.universities.indexOf(uni));
  //   // $location.path('/main/' +  $scope.universities.indexOf(uni));
  // }



  // Sorting
  $scope.sortProp = "";
  $scope.changeSort = function (propName) {
    $scope.sortProp = propName;
  }


  // Open lecture details
  $scope.openLecture = function (lecture) {
    console.log("go to path:");
    console.log('/lecture/' + $scope.lectures.indexOf(lecture));
    $location.path('/lecture/' + $scope.lectures.indexOf(lecture));
  }


});
