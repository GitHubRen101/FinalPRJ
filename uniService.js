moviesApp.factory('uniService', function ($log, $http, $q) {

    var universities = [];
    var wasEverLoaded = false;


    
    console.log("uniService");
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
                universities.splice(0, universities.length)
                $log.debug("CARAPP: " + JSON.stringify(response));
                for (var i = 0; i < response.data.length; i++) {
                    universities.push(new Uni(response.data[i]));
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

        universities: universities,
        load: load
    }

})