(function() {
  function Message($firebaseArray) {

    var Message = {};
    var roomMsg = {};
    var ref = firebase.database().ref().child("messages");

    this.fetchMessage = function(roomObj) {
      // TBD - fetch room ID somewhere from service Room
      var roomID = roomObj.$id;         // "-KsRssb0fvkMSYQa1jbK"
      var oneMsg = ref.orderByChild(roomID);

      console.log('fetchMessage() for room', roomObj.name, ': msg=', oneMsg);

      roomMsg.username = oneMsg.username;
      roomMsg.content = oneMsg.content;
      roomMsg.sentAt = oneMsg.sentAt;
      roomMsg.roomID = oneMsg.roomID;

      return roomMsg;
    };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
