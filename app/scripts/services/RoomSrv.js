(function() {
  function Room($firebaseArray) {
    var Room_API = {};

    // Firebase object 'rooms' holds room IDs and name
    var refRooms = firebase.database().ref().child('rooms');
    // Use Firebase's child() method to  query an existing set of data or reference one you intend to populate with data.

    var roomsDB = $firebaseArray(refRooms);

    // Expose variable to controllers who use this service
    // (Ex: Room.all since 'Room' is the name of the service
    // (see IIFE function() above)
    Room_API.all = roomsDB;

    // Creates a new record in the database and adds the record to our local synchronized array.

    Room_API.addRoom = function(roomObj) {
      console.log('in service: Room $add(), add room ', roomObj);

      // Firebase database named 'rooms', use $add to create new entry
      roomsDB.$add( roomObj );
    };

    // replaced with HomeCtrl version
    Room_API.closeModal = function() {
      //console.log('in service Room, close this form.');
      home.closeModal(refRooms);
    };

    return Room_API;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
