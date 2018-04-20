
moviesApp.directive('actors', function() {
  return {
    templateUrl: 'actorsdirective.html',
    controller: "actorsListCtrl"
  };
});

// moviesApp.directive('movies', function() {
//   return {
//     templateUrl: 'moviesdirective.html',
//     controller: 'moviesListCtrl'   
//   };
// });

moviesApp.directive('navbar', function() {
  return {
      templateUrl: 'navbar.html',
      controller: 'navbarCtrl'
  };
}); 


        //   moviesApp.directive('forminput', function() {
        //   return {
        //     restrict: 'E',
        //     compile: function(element, attrs) {
        //       var type = attrs.type || 'text';
        //       var required = attrs.hasOwnProperty('required') ? "required='required'" : "";
        //       var htmlText = '<div class="control-group">' +
        //         '<label class="control-label" for="' + attrs.formId + '">' + attrs.label + '</label>' +
        //         '<div class="controls">' +
        //         '<input type="' + type + '" class="input-xlarge" id="' + attrs.formId + '" name="' + attrs.formId + '" ' + required + '>' +
        //         '</div>' +
        //         '</div>';
        //       element.replaceWith(htmlText);
        //     }
        //   };
        // });



       












        // <div class="control-group">
        //       <label class="control-label" for="nameInput"> Name </label>
        //       <div class="controls">
        //         <input type="text" class="input-xlarge" id="nameInput" name="nameInput">
        //       </div>
        // </div>