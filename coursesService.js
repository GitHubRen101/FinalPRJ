moviesApp.factory('courseService', function ($log, $http, $q) {

    var courses = [];
    var wasEverLoaded = false;

    // Lecture Constructor 
    function Course(plainCourse) {
        this.serialNum = plainCourse.serialNum;
        this.courseNum = plainCourse.courseNum;
        this.courseName = plainCourse.courseName;
        this.courseSyllabus = plainCourse.courseSyllabus;
        this.numOfLectures = plainCourse.numOfLectures;
        this.semester = plainCourse.semester;
        this.uni = plainCourse.uni;
        this.logicalDelete = plainCourse.logicalDelete;
    };

    function load(user) {
        var async = $q.defer();

        // Checking if the Course was ever loaded
        if (wasEverLoaded) {
            // Immediatly resolving the promise since lectures is already available
            async.resolve();
        } else {
            // Loading the data from JSON
            $http.get('prj/data/courses.json').then(function (response) {
                // on success
                console.log("courseService response.data:");
                console.log(response.data);
                courses.splice(0, courses.length)
                $log.debug("on success " + "CARAPP: " + JSON.stringify(response));
                for (var i = 0; i < response.data.length; i++) {
                    courses.push(new Course(response.data[i]));
                }
                console.log("courseService courses:");
                console.log(courses);
                wasEverLoaded = true;
                async.resolve();

            }, function (response) {
                // on failure
                $log.error("on failure " + "CARAPP: " + JSON.stringify(response));
                async.reject();
            });
        }

        return async.promise;
    }
    return {

        courses: courses,
        load: load
    }

})