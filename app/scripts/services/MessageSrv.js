(function() {
  function Message($firebaseArray) {
    var Message_API = {};

    var refMessage = firebase.database().ref().child('messages');
    var refRooms = firebase.database().ref().child('rooms');

    /**
     * @function getRoomByID
     * @desc For given room object, return messages for a given room ID
     * @param  {[object]} roomID [description]
     * @return {[object]} msgList - object (with many $ and $$ methods), plus elements ordered by ID holding rooms with messages.
     */
    Message_API.getRoomByID = function(roomID) {
      var roomMsgs = $firebaseArray(refMessage.orderByChild('roomID').equalTo(roomID));

      return roomMsgs;
    };

    return Message_API;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
