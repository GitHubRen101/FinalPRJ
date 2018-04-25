
moviesApp.controller("moviesListCtrl", function ($scope, activeUserService, $location, movieService) {
  // moviesApp.controller("moviesListCtrl", '$scope', '$http', function ($scope, $http) {
  // moviesApp.controller("moviesListCtrl",  function ($scope, $http, movieService) {
  // moviesApp.controller("moviesListCtrl", '$scope', '$http', function ($scope, $http, movieService) {

  // This is an authotization check. If the user is not logged going back to the home screen
  if (!activeUserService.isLoggedIn()) {
    $location.path("/");
    return;
  }

  $scope.movies = [];
  movieService.load(activeUserService.getUser()).then(function () {
    $scope.movies = movieService.movies;
  });

  console.log("movies:");
  console.log($scope.movies);



  //------------------------------------------------



  // // file loading plain
  // $scope.movies = [];

  // $http.get('prj/data/movies.json').then(
  //   function mySuccess(response) {
  //     $scope.movies = response.data;
  //     // console.log("loaded movies");
  //     // console.log(response.data);
  //   },
  //   function myError(response) {
  //     console.log("Error");
  //   });


  // // Movie Constructor 
  // function Movie(plainMovie) {
  //   this.link = plainMovie.link;
  //   this.piclink = plainMovie.piclink;
  //   this.name = plainMovie.name;
  //   this.length = plainMovie.length;
  //   // this.length = new Date(1970, 1, 1, plainMovie.length.hr, plainMovie.length.min);
  //   this.director = plainMovie.director;
  //   this.actors = plainMovie.actors;
  //   this.tags = plainMovie.tags;
  // };


  // // Push new Movie to array
  // $scope.addMovie = function (movie) {
  //   var newMovie = new Movie(movie);
  //   $scope.movies.push(newMovie);
  // };


  // formMovie Constructor 
  function formMovie(link, piclink, movieName, director, length) {
    this.link = link;
    this.piclink = piclink;
    this.name = movieName;
    this.length = length;
    // this.length = new Date(1970, 1, 1, plainMovie.length.hr, plainMovie.length.min);
    this.director = director;
    // this.actors = actors;
    // this.tags = tags;
    this.serialNum = 99999999;
    this.logicalDelete = false;
  };


  $scope.addFormMovie = function (link, piclink, movieName, director, length) {
    var indx;
    indx = $scope.movies.length - 1;
    var val;
    val = $scope.movies[indx].serialNum;
    var newMovie  = new formMovie(link, piclink, movieName, director, length);
    console.log("newMovie:");
    console.log(newMovie);
    newMovie.serialNum = val + 1;
    $scope.movies.push(newMovie);
  };

 // Sorting
 $scope.sortProp = "";
 $scope.changeSort = function (propName) {
   $scope.sortProp = propName;
 }


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











