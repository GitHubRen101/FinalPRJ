moviesApp.controller("actorsListCtrl", function($scope, $http, actorService) {
  
   $scope.name = 'actorsListCtrl';

console.log("arrived to actors controller");
  actorService.load().then(function() {
    $scope.actors = actorService.actors;
  });
console.log("loaded actors");


  //Business logics
  $scope.selectedActor = null;
  $scope.setSelected = function(selectedActor) {
    $scope.selectedActor = selectedActor;
  };


  //accordion
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
//------------------------------------------  


 
  
  
  
  
});