(function() {
  function Room($firebaseArray) {
    var Room_API = {};

    // Room_API.msgObj = {
    //   username: 'username-here',
    //   content: 'content of message here',
    //   sentAt: 'time message sent',
    //   roomID: 'room UID here e.g., -KsM68BMQiqxuLAfbHH3'
    // };

    console.log('in service Room');

    // Firebase database object is 'rooms'
    var roomsRef = firebase.database().ref().child('rooms');
    // Use Firebase's child() method to  query an existing set of data or reference one you intend to populate with data.

    var roomsDB = $firebaseArray(roomsRef);

    // Firebase database object that holds messages sent to rooms
    var msgRef = firebase.database().ref().child('messages');



    // Expose variable to controllers who use this service (Ex: Room.all since 'Room' is the name of the service (see IIFE function() above))
    Room_API.all = roomsDB;

    // Creates a new record in the database and adds the record to our local synchronized array.

    Room_API.addRoom = function(roomObj) {
      console.log('in service: Room $add(), add room ', roomObj);

      // Firebase database named 'rooms', use $add to create new entry
      roomsDB.$add( roomObj );
    };

    // for given room name, display its messages
    Room_API.listMessages = function(chosenRoom) {
      console.log('inside Room.listMessages, room = ', chosenRoom);
    };


    // replaced with HomeCtrl version
    Room_API.closeModal = function() {
      console.log('in service Room, close this form.');
      home.closeModal(roomsRef);
    };

    return Room_API;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
