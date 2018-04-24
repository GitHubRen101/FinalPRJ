moviesApp.factory('lectureService', function ($log, $http, $q) {

    var lectures = [];
    var wasEverLoaded = false;


    console.log("lectureService");
    // Lecture Constructor 
    function Lecture(plainLecture) {
        this.serialNum = plainLecture.serialNum;
        this.lectureTitle = plainLecture.lectureTitle;
        this.lectureNum = plainLecture.lectureNum;
        this.lectureName = plainLecture.lectureName;
        // this.semester = plainLecture.semester;
        // this.length = new Date(1970, 1, 1, plainMovie.length.hr, plainMovie.length.min);
        this.lectureDate = plainLecture.lectureDate;
        this.about = plainLecture.about;
        this.course = plainLecture.course;
        this.filmCuts = plainLecture.filmCuts;
    };

    function load(user) {
        var async = $q.defer();

        // Checking if the Lecture was ever loaded
        if (wasEverLoaded) {
            // Immediatly resolving the promise since lectures is already available
            async.resolve();
        } else {
            // Loading the data from JSON
            $http.get('prj/data/lectures.json').then(function (response) {
                // on success
                lectures.splice(0, lectures.length)
                $log.debug("CARAPP: " + JSON.stringify(response));
                for (var i = 0; i < response.data.length; i++) {
                    lectures.push(new Lecture(response.data[i]));
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
        lectures: lectures,
        load: load
    }

})