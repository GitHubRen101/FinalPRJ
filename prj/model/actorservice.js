moviesApp.factory('actorService', function($log, $http, $q) {

  var actors = [];
  var wasEverLoaded = false;

  
  // Actor Constructor 
  function Actor(plainActor) {
    this.link = plainActor.link;
    this.firstName = plainActor.firstName;
    this.lastName = plainActor.lastName;
    this.testDate = new Date(plainActor.birthDate);
    this.about = plainActor.about;
    this.pageLink = plainActor.pageLink;
  }


  // load from Jason
  function load() {
    var async = $q.defer();

    // Checking if the actor was ever loaded
    if (wasEverLoaded) {
      // Immediatly resolving the promise since actor is already available
      async.resolve();
    } else {
      // Loading the data from JSON
      $http.get('prj/data/actors.json').then(function(response) {
        // on success
        // console.log(response);
        actors.splice(0, actors.length);
        // $log.debug("CARAPP: " + JSON.stringify(response));
        for (var i = 0; i < response.data.length; i++) {
          actors.push(new Actor(response.data[i]));
        }
        // console.log(actors);
        wasEverLoaded = true;
        async.resolve();

      }, function(response) {
        // on failure
        $log.error("CARAPP: " + JSON.stringify(response));
        async.reject();
      });
    }

    return async.promise;
  }
  return {
    actors: actors,
    load: load,
   
  };
  
  
  // ----------------------------------









})