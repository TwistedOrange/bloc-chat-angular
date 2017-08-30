(function() {
  function Message($firebaseArray) {
    var Message_API = {};

    var refMessage = firebase.database().ref().child('messages');
    var refRooms = firebase.database().ref().child('rooms');

    Message_API.fetchMessage = function(roomObj) {
      //var roomID = roomObj.$id;         // "-KsRssb0fvkMSYQa1jbK"

      // Reference: How to query nested data in Firebase
      // https://stackoverflow.com/questions/26910242/querying-nested-data-in-firebase

      //var msgList = refMessage.orderByChild(roomObj.$id).equalTo('content');

      var msgList = $firebaseArray(refMessage);

      console.log('fetchMessage() for ID', roomObj.$id, ': msg =', msgList);

      /**
       * @function getRoomByID
       * @desc For given room object, return messages for a given room ID
       * @param  {[object]} roomID [description]
       * @return {[object]} msgList - object (with many $ and $$ methods), plus elements ordered by ID holding rooms with messages.
       */
      Message_API.getRoomByID = function(roomObj) {
        var roomMsgs = $firebaseArray(refMessage.orderByChild('roomID').equalTo(roomObj.$id));

        return roomMsgs;
      };

      return msgList;
    };

    return Message_API;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
