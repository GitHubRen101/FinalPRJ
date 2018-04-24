moviesApp.controller('coursesCtrl', function ($scope, activeUserService, $location, courseService, uniService) {

  // This is an authotization check. If the user is not logged going back to the home screen
  if (!activeUserService.isLoggedIn()) {
    $location.path("/");
    return;
  }


  $scope.courses = [];
  courseService.load(activeUserService.getUser()).then(function () {
    $scope.courses = courseService.courses;
  });


  $scope.universities = [];
  uniService.load(activeUserService.getUser()).then(function () {
    $scope.universities = uniService.universities;
  });




  // Sorting
  $scope.sortProp = "";
  $scope.changeSort = function (propName) {
    $scope.sortProp = propName;
  }


  // Open Course for update
  $scope.openCourse = function (course) {
    console.log("open new window to update course:");
    // console.log('/main/' + $scope.universities.indexOf(uni));
    // $location.path('/main/' +  $scope.universities.indexOf(uni));
  }


  // formCourse Constructor 
  function formCourse(courseNum, courseName, courseSyllabus, numOfLectures, semester, uni) {
    this.courseNum = courseNum;
    this.courseName = courseName;
    this.courseSyllabus = courseSyllabus;
    this.numOfLectures = numOfLectures;
    this.semester = semester;
    this.uni = uni;
    this.serialNum = 99999999;
    this.logicalDelete = false;
  };


  $scope.addFormCourse = function (courseNum, courseName, courseSyllabus, numOfLectures, semester, uni) {
    console.log("uni:");
    console.log(uni);
    console.log("Before Courses:");
    console.log($scope.courses);
    var indx;
    indx = $scope.courses.length - 1;
    var val;
    val = $scope.courses[indx].serialNum;
    var newFormCourse = new formCourse(courseNum, courseName, courseSyllabus, numOfLectures, semester, uni);
    console.log("var newCourse:");
    console.log(newFormCourse);
    newFormCourse.serialNum = val + 1;
    console.log("After Courses:");
    console.log($scope.courses);
    $scope.courses.push(newFormCourse);
  };









});


  // moviesApp.controller('TimeCtrl', function ($scope, $interval) {
  //   var tick = function () {
  //     $scope.clock = Date.now();
  //   }
  //   tick();
  //   $interval(tick, 1000);
  // });
