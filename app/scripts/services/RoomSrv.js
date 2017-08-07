(function() {
  function Room($firebaseArray) {
    var Room_API = {};

    // empty room object
    Room_API.roomObj = {};

    console.log('in service Room');

    // Firebase database object is 'rooms'
    var ref = firebase.database().ref().child('rooms');
    // Use Firebase's child() method to either query an existing set of data or reference one you intend to populate with data in the future.

    var rooms = $firebaseArray(ref);

    // Expose variable to controllers who use this service (Ex: Room.all since 'Room' is the name of the service (see IIFE function() above))
    Room_API.all = rooms;

    // Creates a new record in the database and adds the record to our local synchronized array.
    //
    // This method returns a promise which is resolved after data has been saved to the server. The promise resolves to the Firebase reference for the newly added record, providing easy access to its key.
    //
    // var list = $firebaseArray(ref);
    // list.$add({ foo: "bar" }).then(function(ref) {
    //   var id = ref.key;
    //   console.log("added record with id " + id);
    //   list.$indexFor(id); // returns location in the array
    // });

    Room_API.add = function(roomObj) {
      console.log('in service: Room add(), add room ', roomObj);

      rooms.$add( roomObj ).then(function(ref) {
        // var id = ref.key;
        // console.log('added record id ' + id + ", newRoom = " + roomObj;

        // return location in array of added room
        // rooms.$indexFor(id);
      });
    };

    return Room_API;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
