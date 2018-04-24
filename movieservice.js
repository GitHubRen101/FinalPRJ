moviesApp.factory('movieService', function ($log, $http, $q) {

  var movies = [];
  var wasEverLoaded = false;


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
  }



  // // Push new Movie to array
  // $scope.addMovie = function(link, piclink, name, length, director, actors) {
  //   var newMovie = new Movie(link, piclink, name, length, director, actors);
  //   $scope.movies.push(newMovie);
  // };


  // load from Jason
  function load() {
    var async = $q.defer();

    // Checking if the movie was ever loaded
    if (wasEverLoaded) {
      // Immediatly resolving the promise since movie is already available
      async.resolve();
    } else {
      // Loading the data from JSON
      $http.get('prj/data/movies.json').then(function (response) {
        // on success
        console.log(response);
        movies.splice(0, movies.length);
        // $log.debug("CARAPP: " +console.log(response); JSON.stringify(response));
        for (var i = 0; i < response.data.length; i++) {
          movies.push(new Movie(response.data[i]));
        }
        wasEverLoaded = true;
        async.resolve();

      }, function (response) {
        // on failure
        $log.error("CARAPP: " + JSON.stringify(response));
        async.reject();
      });
    }

    return async.promise;
  }


  return {
    movies: movies,
    load: load

  };


})