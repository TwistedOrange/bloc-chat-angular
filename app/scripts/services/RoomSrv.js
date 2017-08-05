(function() {
  function Room($firebaseArray) {
    var Room_API = {};

    console.log('in service Room');
    
    // Firebase database object is 'rooms'
    var ref = firebase.database().ref().child('rooms');
    // Use Firebase's child() method to either query an existing set of data or reference one you intend to populate with data in the future.

    var rooms = $firebaseArray(ref);

    // Expose variable to controllers who use this service (example: Room.all since 'Room' is the name of the service (see IIFE function() above))
    Room_API.all = rooms;

    return Room_API;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
