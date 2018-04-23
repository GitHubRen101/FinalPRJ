moviesApp.controller('coursesCtrl', function ($scope, activeUserService, $location, courseService) {

    // This is an authotization check. If the user is not logged going back to the home screen
    if (!activeUserService.isLoggedIn()) {
      $location.path("/");
      return;
    }
  
  
    $scope.courses = [];

    courseService.load(activeUserService.getUser()).then(function () {
      $scope.courses = courseService.courses;
    });

    console.log("$scope.coursess:");
    console.log($scope.courses);
     
    // Push new Course to array
    $scope.addCourse = function(course) {
      var newCourse = new Course(course);
      console.log("var newCourse:");
      console.log(newCourse);
      $scope.courses.push(newCourse);
    };
  
    // Sorting
    $scope.sortProp = "";
    $scope.changeSort = function (propName) {
      $scope.sortProp = propName;
    }
  
  
    // Open Course for update
    $scope.openLecture = function (course) {
      console.log("open new window to update course:");
      // console.log('/main/' + $scope.universities.indexOf(uni));
      // $location.path('/main/' +  $scope.universities.indexOf(uni));
    }
  
  
  
  
  });
  
  
  // moviesApp.controller('TimeCtrl', function ($scope, $interval) {
  //   var tick = function () {
  //     $scope.clock = Date.now();
  //   }
  //   tick();
  //   $interval(tick, 1000);
  // });
  