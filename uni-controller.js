moviesApp.controller('uniCtrl', function ($scope, activeUserService, $location, uniService) {

    // // This is an authotization check. If the user is not logged going back to the home screen
    // if (!activeUserService.isLoggedIn()) {
    //   $location.path("/");
    //   return;
    // }
  
  
    // $scope.universities = [];
    // uniService.load(activeUserService.getUser()).then(function () {
    //   $scope.universities = uniService.universities;
    // });
  
  
     
    // // Push new Lecture to array
    // $scope.addUni = function (uni) {
    //   var newUni = new Uni(uni);
    //   console.log("var newUni:");
    //   console.log(newUni);
    //   $scope.universities.push(newUni);
    // };
  
    // // Sorting
    // $scope.sortProp = "";
    // $scope.changeSort = function (propName) {
    //   $scope.sortProp = propName;
    // }
  
  
    // // Open lecture details
    // $scope.openLecture = function (uni) {
    //   console.log("go to path:");
    //   console.log('/main/' + $scope.universities.indexOf(uni));
    //   $location.path('/main/' +  $scope.universities.indexOf(uni));
    // }
  
  
  
  
  });
  
  
  // moviesApp.controller('TimeCtrl', function ($scope, $interval) {
  //   var tick = function () {
  //     $scope.clock = Date.now();
  //   }
  //   tick();
  //   $interval(tick, 1000);
  // });
  