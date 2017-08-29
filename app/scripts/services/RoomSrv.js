(function() {
  function Room($firebaseArray) {
    var Room_API = {};

    console.log('in service Room');

    // Firebase object 'rooms' holds room IDs and name
    var roomsRef = firebase.database().ref().child('rooms');
    // Use Firebase's child() method to  query an existing set of data or reference one you intend to populate with data.

    var roomsDB = $firebaseArray(roomsRef);

    // Expose variable to controllers who use this service
    // (Ex: Room.all since 'Room' is the name of the service
    // (see IIFE function() above))
    Room_API.all = roomsDB;

    // Creates a new record in the database and adds the record to our local synchronized array.

    Room_API.addRoom = function(roomObj) {
      console.log('in service: Room $add(), add room ', roomObj);

      // Firebase database named 'rooms', use $add to create new entry
      roomsDB.$add( roomObj );
    };

    // getRoomID - for given room name, query Firebase for unique ID
    Room_API.getRoomID = function(roomName) {

      console.log('The ID of room ', roomName, ' is: ', roomName.$id)
      // TBD. need to get roomName from $scope, not sure how yet
      return "-KsRssb0fvkMSYQa1jbK";
    };

    // for given room name, display its messages
    Room_API.listMessages = function(chosenRoom) {
      console.log('inside Room.listMessages, room = ', chosenRoom);
    };

    // replaced with HomeCtrl version
    Room_API.closeModal = function() {
      //console.log('in service Room, close this form.');
      home.closeModal(roomsRef);
    };

    return Room_API;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
