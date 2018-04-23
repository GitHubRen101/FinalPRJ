

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
    .when('/lecture/:index', {
      templateUrl: "prj/main/lectureDetails.html",
      controller: 'mainLectureDetailsCtrl'
    })
    // .when("/main", {
    //   templateUrl: "prj/main/maindirective.html",
    //   controller: "mainCtrl"
    // })
    .when("/main", {
      templateUrl: "prj/main/maindirective.html"
    })
    .when("/unis", {
      templateUrl: "prj/universities/uni.html",
      controller: "uniCtrl"
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


