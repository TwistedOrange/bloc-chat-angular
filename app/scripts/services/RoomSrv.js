(function() {
  function Room($firebaseArray) {
    var Room_API = {};

    console.log('in RoomSrv.js');

    // DB object is 'rooms'
    var ref = firebase.database().ref().child('rooms');
    // Use Firebase's child() method to either query an existing set of data or
    // reference one you intend to populate with data in the future.

    var rooms = $firebaseArray(ref);

    Room_API.all = rooms;

    return Room_API;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
