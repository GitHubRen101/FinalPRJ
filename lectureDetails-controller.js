
moviesApp.controller("mainLectureDetailsCtrl", function ($scope, $routeParams, lectureService, activeUserService, $location, movieService) {

    // moviesApp.controller("mainLectureDetailsCtrl", function ($scope, $routeParams, carService, activeUserService, $location) {

    // // This is an authotization check. If the user is not logged going back to the home screen
    // if (!activeUserService.isLoggedIn()) {
    //     $location.path("/");
    //     return;
    // }

    var indexToDisplay = parseInt($routeParams.index);

    lectureService.load(activeUserService.getUser()).then(function () {
        $scope.lecture = lectureService.lectures[indexToDisplay];
    })

    $scope.movies = [];
    movieService.load(activeUserService.getUser()).then(function () {
        $scope.movies = movieService.movies;
    });

    // filmCuts Constructor 
    function FilmCut(filmName, filmTheme, filmCutStartHours, filmCutStartMinutes, filmCutStartSeconds, filmCutEndHours, filmCutEndMinutes, filmCutEndSeconds) {
        this.filmCuts.filmName = filmName;
        this.filmCuts.theme = filmTheme;
        this.filmCuts.start.hours = filmCutStartHours;
        this.filmCuts.start.minutes = filmCutStartMinutes;
        this.filmCuts.start.seconds = filmCutStartSeconds;
        this.filmCuts.end.hours = filmCutEndHours;
        this.filmCuts.end.minutes = filmCutEndMinutes;
        this.filmCuts.end.seconds = filmCutEndSeconds;
        this.serialNum = 99999999;
        this.logicalDelete = false;
    };

    $scope.updateFilmCuts = function (filmName, filmTheme, filmCutStartHours, filmCutStartMinutes, filmCutStartSeconds, filmCutEndHours, filmCutEndMinutes, filmCutEndSeconds) {
        var indx;
        indx = $scope.lecture.filmCuts.length - 1;
        var val;
        val = $scope.lecture.filmCuts[indx].serialNum;
        var newFilmCut = new FilmCut(filmName, filmTheme, filmCutStartHours, filmCutStartMinutes, filmCutStartSeconds, filmCutEndHours, filmCutEndMinutes, filmCutEndSeconds);
        newFilmCut.serialNum = val + 1;
        $scope.lecture.filmCuts.push(newFilmCut);
    };
});