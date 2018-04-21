moviesApp.controller("_mainCtrl", $scope, function ($scope, $route, $interval) {
  $scope.clock = Date.now();

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


  $scope.lectures = [];

  $http.get('prj/data/lectures.json').then(
    function mySuccess(response) {
      $scope.lectures = response.data;
      // console.log("loaded");
      // console.log(response.data);
    },
    function myError(response) {
      console.log("Error");
    });


  // Lecture Constructor 
  function Lecture(plainLecture) {
    this.serialNum = plainLecture.serialNum;
    this.lectureTitle = plainLecture.lectureTitle;
    this.lectureNum = plainLecture.lectureNum;
    this.lectureName = plainLecture.lectureName;
    this.semester = plainLecture.semester;
    // this.length = new Date(1970, 1, 1, plainMovie.length.hr, plainMovie.length.min);
    this.lectureDate = plainLecture.lectureDate;
    this.about = plainLecture.about;
    this.course = plainLecture.course;
    this.filmCuts = plainLecture.filmCuts;
  };

  // Push new Lecture to array
  $scope.addLecture = function (lecture) {
    var newLecture = new Lecture(lecture);
    $scope.lectures.push(newLecture);
  };




});


moviesApp.controller('TimeCtrl', function ($scope, $interval) {
  var tick = function () {
    $scope.clock = Date.now();
  }
  tick();
  $interval(tick, 1000);
});
