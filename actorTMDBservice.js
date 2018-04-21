moviesApp.factory('actorTMDBService', function($log, $http, $q) {

$scope.favActors = [];
$scope.searchResults = [];
$scope.queryText = "";


// //Constructor
// function tmdbActor(tmdbActorObject) {
//   this.name = tmdbActorObject.name;
//   this.birthday = new Date(tmdbActorObject.birthday);
//   this.imageUrl = "https://image.tmdb.org/t/p/w500" + tmdbActorObject.profile_path;
//   this.imdbUrl = "http://www.imdb.com/name/" + tmdbActorObject.imdb_id;
// }


// $scope.searchChange = function() {
//   if ($scope.queryText) {
//     $http.get("https://api.themoviedb.org/3/search/person?api_key=53d2ee2137cf3228aefae083c8158855&query=" + $scope.queryText)
//       .then(function(response) {
//         $scope.searchResults = response.data.results;
//       }, function(response) {
//         alert("error: " + response);
//       });

//   } else {
//     $scope.searchResults = [];
//   }
// };
































  

})