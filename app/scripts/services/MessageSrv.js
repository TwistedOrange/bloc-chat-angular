(function() {
  function Message($firebaseArray, $cookies) {
    var Message_API = {};

    var refMessage = firebase.database().ref().child('messages');
    var refRooms = firebase.database().ref().child('rooms');

    //https://firebase.google.com/docs/reference/js/firebase.database.ServerValue#.TIMESTAMP
    var sessionsRef = firebase.database().ref("sessions");

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

    Message_API.addMessage = function(msgObj) {
        console.log('send msg to Firebase', msgObj);

        // msgObj.sentAt = sessionsRef.push({
        //   startedAt: firebase.database.ServerValue.TIMESTAMP
        // });

        var tm = sessionsRef.push({
          startedAt: firebase.database.ServerValue.TIMESTAMP
        });

        msgObj.sentAt = tm;

        console.log('send msg to Firebase', msgObj);

        //refMessage.$add(msgObj);
    };

    return Message_API;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();
