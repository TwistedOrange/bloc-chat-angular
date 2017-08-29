(function() {
  function Message($firebaseArray) {
    var Message_API = {};

    var refMessage = firebase.database().ref().child('messages');
    var refRooms = firebase.database().ref().child('rooms');

    Message_API.fetchMessage = function(roomObj) {
      //var roomID = roomObj.$id;         // "-KsRssb0fvkMSYQa1jbK"

      // Reference: How to query nested data in Firebase
      // https://stackoverflow.com/questions/26910242/querying-nested-data-in-firebase

      var msgList = refMessage.orderByChild(roomObj.$id).equalTo('content');

      console.log('fetchMessage() for ID', roomObj.$id, ': msg=', msgList);

      return msgList;
    };

    return Message_API;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
