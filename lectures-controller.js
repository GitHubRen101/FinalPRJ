moviesApp.controller("lecturesCtrl", function ($scope, activeUserService, $location, lectureService, courseService) {

  console.log("lectures controller");
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


  // // Push new Lecture to array
  // $scope.addLecture = function (lecture) {
  //   var newLecture = new Lecture(lecture);
  //   console.log("var newLecture:");
  //   console.log(newLecture);
  //   $scope.lectures.push(newLecture);
  // };

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

  // formCourse Constructor 
  function formLecture(lectureTitle, lectureNum, lectureDate, about, course) {
    this.lectureTitle = lectureTitle;
    this.lectureNum = lectureNum;
    this.lectureDate = lectureDate;
    this.about = about;
    this.course = course;
    this.serialNum = 99999999;
    this.logicalDelete = false;
  };


  $scope.addFormLecture = function (lectureTitle, lectureNum, lectureDate, about, course) {
    console.log("course:");
    console.log(course);
    console.log("Before :");
    console.log($scope.lectures);
    var indx;
    indx = $scope.lectures.length - 1;
    var val;
    val = $scope.lectures[indx].serialNum;
    var newFormLecture = new formLecture(lectureTitle, lectureNum, lectureDate, about, course);
    console.log("var newLecture:");
    console.log(newFormLecture);
    newFormLecture.serialNum = val + 1;
    console.log("After lectures:");
    console.log($scope.lectures);
    $scope.lectures.push(newFormLecture);
  };



});
