angular.module("moviedb").service("MovieService", ["$q", "$timeout", function($q, $timeout) {

    var movies = [{
        "title": "Deadpool",
        "poster_url": "https://image.tmdb.org/t/p/w185/kS3pI9nSLZuX8CAzaQOBF6mQ3uX.jpg",
        "rating": 7.2,
        "release_date": "2016-02-19"
    }, {
        "title": "Los juegos del hambre: Sinsajo. Parte 2 ",
        "poster_url": "https://image.tmdb.org/t/p/w185/sv4UUyQxP3qCp7kArPhZk1JlAj8.jpg",
        "rating": 6.8,
        "release_date": " 2015-11-27"
    }, {
        "title": "Zootropolis",
        "poster_url": "https://image.tmdb.org/t/p/w185/sM33SANp9z6rXW8Itn7NnG1GOEs.jpg",
        "rating": 7.4,
        "release_date": "2016-02-12"
    }, {
        "title": "Batman v Superman: El Amanecer de la Justicia",
        "poster_url": "https://image.tmdb.org/t/p/w185/6bCplVkhowCjTHXWv49UjRPn0eK.jpg",
        "rating": 5.1,
        "release_date": "2016-03-23"
    }, {
        "title": "Mad Max: Fury Road",
        "poster_url": "https://image.tmdb.org/t/p/w185/kqjL17yufvn9OVLyXYpvtyrFfak.jpg",
        "rating": 7.4,
        "release_date": "2015-05-15"
    }];

    this.getMovies = function() {
        // creamos el objeto diferido
        var deferred = $q.defer();
        // asincronia
        $timeout(function() {
                if (Math.random() > 0.5) {
                    deferred.resolve(movies);
                } else {
                    deferred.reject({ error: "Forbidden" });
                }
            }, 500)
        // resolvemos la promesa

        // rechazamos la promesa

        // devolvemos la promesa del objeto diferido
        return deferred.promise;
    }
}])