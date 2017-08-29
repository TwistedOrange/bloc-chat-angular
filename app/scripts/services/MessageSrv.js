(function() {
  function Message($firebaseArray) {
    var Message_API = {};

    var ref = firebase.database().ref().child("messages");

    Message_API.fetchMessage = function(roomID) {
      //var roomID = roomObj.$id;         // "-KsRssb0fvkMSYQa1jbK"

      var msgList = ref.orderByChild(roomID);

      console.log('fetchMessage() for ID', roomID, ': msg=', msgList);

      return msgList;
    };

    return Message_API;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
