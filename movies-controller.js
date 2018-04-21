
moviesApp.controller("moviesListCtrl", function ($scope, $http) {
  // moviesApp.controller("moviesListCtrl", '$scope', '$http', function ($scope, $http) {
  // moviesApp.controller("moviesListCtrl",  function ($scope, $http, movieService) {
  // moviesApp.controller("moviesListCtrl", '$scope', '$http', function ($scope, $http, movieService) {

  $scope.clock = "12:30";

  // // // file loading with service
  // $scope.movies = [];

  // console.log("arrived to movies controller");
  // actorService.load().then(function () {
  //   $scope.actors = movieService.movies;
  // });
  // console.log("loaded movies");



  //------------------------------------------------

  // file loading plain
  $scope.movies = [];

  $http.get('prj/data/movies.json').then(
    function mySuccess(response) {
      $scope.movies = response.data;
      // console.log("loaded movies");
      // console.log(response.data);
    },
    function myError(response) {
      console.log("Error");
    });


  // Movie Constructor 
  function Movie(plainMovie) {
    this.link = plainMovie.link;
    this.piclink = plainMovie.piclink;
    this.name = plainMovie.name;
    this.length = plainMovie.length;
    // this.length = new Date(1970, 1, 1, plainMovie.length.hr, plainMovie.length.min);
    this.director = plainMovie.director;
    this.actors = plainMovie.actors;
    this.tags = plainMovie.tags;
  };

  // formMovie Constructor 
  function formMovie(link, piclink, name, director, length){
    this.link = link;
    this.piclink = piclink;
    this.name = name;
    this.length = length;
    // this.length = new Date(1970, 1, 1, plainMovie.length.hr, plainMovie.length.min);
    this.director = director;
    // this.actors = actors;
    // this.tags = tags;
  };

  // Push new Movie to array
  $scope.addMovie = function (movie) {
    var newMovie = new Movie(movie);
    $scope.movies.push(newMovie);
  };

  $scope.addFormMovie = function (link, piclink, name, director, length) {
    var newMovie = new formMovie(link, piclink, name, director, length);
    $scope.movies.push(newMovie);
  };



  //------------------------------------------------
  //accordion
  // initiate an array to hold all active tabs
  $scope.activeTabs = [];

  // check if the tab is active
  $scope.isOpenTab = function (tab) {
    // check if this tab is already in the activeTabs array
    if ($scope.activeTabs.indexOf(tab) > -1) {
      // if so, return true
      return true;
    } else {
      // if not, return false
      return false;
    }
  }

  // function to 'open' a tab
  $scope.openTab = function (tab) {
    // check if tab is already open
    if ($scope.isOpenTab(tab)) {
      //if it is, remove it from the activeTabs array
      $scope.activeTabs.splice($scope.activeTabs.indexOf(tab), 1);
    } else {
      // if it's not, add it!
      $scope.activeTabs.push(tab);
    }
  }












});











