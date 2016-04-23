angular.module('songhop.services', [])
  .factory('User', function() { 

      var o = {
        favorites: []
      }

      return o;
  });

o.addSongToFavorites = function(song, index) {
    //make sure there's a song to add
    if (!song) return false;

    //add to favorites array
    o.favorites.splice(index, 1);
}

