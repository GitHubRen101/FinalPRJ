moviesApp.factory('uniService', function ($log, $http, $q) {

    var universities = [];
    var wasEverLoaded = false;


    // Lecture Constructor 
    function Uni(plainUni) {
        this.serialNum = plainUni.serialNum;
        this.uniName = plainUni.uniName;
        this.uniAddress = plainUni.uniAddress;
        this.logicalDelete = plainUni.logicalDelete;
    };

    function load(user) {
        var async = $q.defer();

        // Checking if the Lecture was ever loaded
        if (wasEverLoaded) {
            // Immediatly resolving the promise since lectures is already available
            async.resolve();
        } else {
            // Loading the data from JSON
            $http.get('prj/data/unis.json').then(function (response) {
                // on success
                console.log("uniService response.data:");
                console.log(response.data);
                universities.splice(0, universities.length)
                $log.debug("on success " + "CARAPP: " + JSON.stringify(response));
                for (var i = 0; i < response.data.length; i++) {
                    universities.push(new Uni(response.data[i]));
                }
                console.log("uniService universities:");
                console.log(universities);
                wasEverLoaded = true;
                async.resolve();

            }, function (response) {
                // on failure
                $log.error("on failure " +"CARAPP: " + JSON.stringify(response));
                async.reject();
            });
        }

        return async.promise;
    }
    return {

        universities: universities,
        load: load
    }

})