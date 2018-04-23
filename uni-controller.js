moviesApp.controller('uniCtrl', function ($scope, activeUserService, $location, uniService) {

  // // This is an authotization check. If the user is not logged going back to the home screen
  // if (!activeUserService.isLoggedIn()) {
  //   $location.path("/");
  //   return;
  // }


  $scope.universities = [];
  uniService.load(activeUserService.getUser()).then(function () {
    $scope.universities = uniService.universities;
  });

  console.log("$scope.universities:");
  console.log($scope.universities);

  // Push new Lecture to array
  // $scope.addFormUni = function (uni) {
  //   var newUni = new Uni(uni);
  //   console.log("var newUni:");
  //   console.log(newUni);
  //   $scope.universities.push(newUni);
  // };


  // formUni Constructor 
  function formUni(name, address) {
    this.uniName = name;
    this.uniAddress = address;
    this.serialNum = 99999999;
    this.logicalDelete = false;
  };


  $scope.addFormUni = function (name, address) {
    var indx;
    indx = $scope.universities.length - 1;
    var val;
    val = $scope.universities[indx].serialNum;

    console.log("val:");
    console.log(val);


    var newFormUni = new formUni(name, address);

    newFormUni.serialNum = val + 1;
    console.log(newFormUni);
    $scope.universities.push(newFormUni);
  };





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
