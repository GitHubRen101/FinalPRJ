moviesApp.controller("lecturesCtrl", function ($scope, $http) {

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