

moviesApp.config(function ($routeProvider) {

  $routeProvider
    .when("/", {
      templateUrl: "prj/home/home.html",
      controller: 'homeCtrl'
    })
    // .when("/home", {
    //   templateUrl : "prj/home/home.html",
    //   controller: 'homeCtrl'
    // })
    .when("/", {
      templateUrl: "prj/home/home.html"
    })
    // .when("/index", {
    //   templateUrl : "prj/home/home.html"
    // })
    .when("/login", {
      templateUrl: "prj/login/login.html",
      controller: 'loginCtrl'
    })
    // .when("/main", {
    //   templateUrl: "prj/main/maindirective.html",
    //   controller: "mainCtrl"
    // })
    // .when('/main', {
    //   templateUrl : "prj/cars/cars.html",
    //   controller: 'carsCtrl'
    // })
    .when("/main", {
      templateUrl: "prj/main/maindirective.html",
      controller: "mainCtrl"
    })
    .when("/main/:index", {   
      templateUrl: "prj/main/lectureDetails.html",
      controller: "mainLectureDetailsCtrl"
    })
    .when("/about", {
      templateUrl: "prj/about/about.html",
      controller: "aboutCtrl"
    })
    .when("/contact", {
      templateUrl: "prj/contact/contact.html",
      controller: "contactCtrl"
    })
    .when("/movies", {
      templateUrl: "prj/movies/moviesdirective.html",
      controller: "moviesListCtrl"
    })
    .when("/lectures", {
      templateUrl: "prj/lectures/lecturesdirective.html",
      controller: "lecturesCtrl"
    })
    .otherwise({
      redirectTo: "/"
    });
});


