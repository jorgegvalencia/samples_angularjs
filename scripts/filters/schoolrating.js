angular.module("moviedb").filter("schoolrating", [function() {
    return function(rating, mode) {
        if (rating <= 10 && rating >= 9) {
            return (mode == "US") ? "A" : "SB";
        } else if (rating < 9 && rating >= 7) {
            return (mode == "US") ? "B" : "NT";
        } else if (rating < 7 && rating >= 6) {
            return (mode == "US") ? "C" : "BN";
        } else if (rating < 6 && rating >= 5) {
            return (mode == "US") ? "D" : "SF";
        } else if (rating < 5) {
            return (mode == "US") ? "E" : "IN";
        }
    }
}]);