
moviesApp.controller("mainLectureDetailsCtrl", function ($scope, $routeParams, lectureService, activeUserService, $location, movieService) {

    // moviesApp.controller("mainLectureDetailsCtrl", function ($scope, $routeParams, carService, activeUserService, $location) {

    // // This is an authotization check. If the user is not logged going back to the home screen
    // if (!activeUserService.isLoggedIn()) {
    //     $location.path("/");
    //     return;
    // }

    var indexToDisplay = parseInt($routeParams.index);
    $scope.showForm = false;

    lectureService.load(activeUserService.getUser()).then(function () {
        $scope.lecture = lectureService.lectures[indexToDisplay];
    })

    $scope.movies = [];
    movieService.load(activeUserService.getUser()).then(function () {
        $scope.movies = movieService.movies;
    });

    console.log("$scope.movies:");
    console.log($scope.movies);
    
    
    // filmCuts Constructor 
    function FilmCut(movie, filmTheme, filmCutStartHours, filmCutStartMinutes, filmCutStartSeconds, filmCutEndHours, filmCutEndMinutes, filmCutEndSeconds) {
        this.filmName = movie.name;
        this.theme = filmTheme;
        this.startHours = filmCutStartHours;
        this.startMinutes = filmCutStartMinutes;
        this.startSeconds = filmCutStartSeconds;
        this.endHours = filmCutEndHours;
        this.endMinutes = filmCutEndMinutes;
        this.endSeconds = filmCutEndSeconds;
        this.serialNum = 99999999;
        this.logicalDelete = false;
    };

    $scope.updateFilmCuts = function (movie, filmTheme, filmCutStartHours, filmCutStartMinutes, filmCutStartSeconds, filmCutEndHours, filmCutEndMinutes, filmCutEndSeconds) {
        var indx;
        indx = $scope.lecture.filmCuts.length - 1;
        var val;
        val = $scope.lecture.filmCuts[indx].serialNum;
        var newFilmCut = new FilmCut(movie, filmTheme, filmCutStartHours, filmCutStartMinutes, filmCutStartSeconds, filmCutEndHours, filmCutEndMinutes, filmCutEndSeconds);
        newFilmCut.serialNum = val + 1;
        $scope.lecture.filmCuts.push(newFilmCut);
    };


   


    });