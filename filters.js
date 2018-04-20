 //lengthFilter

 moviesApp.filter("lengthFilter", function() {
   return function(minutes) {
     return Math.floor(minutes / 60) + " hr " + minutes % 60 + " min ";
   }
 })