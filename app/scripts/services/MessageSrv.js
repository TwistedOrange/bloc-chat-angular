(function() {
  function Message($firebaseArray) {

    // Msg_API.msgObj = {
    //   username: 'name of person who sent message',
    //   content: 'content of message',
    //   sentAt: 'message time stamp',
    //   roomID: 'room UID e.g., -KsM68BMQiqxuLAfbHH3'
    // };

    var Message = {};
    var ref = firebase.database().ref().child("messages");

    // TBD - fetch room ID somewhere from service Room
    var roomID = "-KsRssb0fvkMSYQa1jbK"
    var oneMsg = ref.orderByChild(roomID);

    console.log('getMessages, oneMsg = ', oneMsg);

    Message.username = oneMsg.username;
    Message.content = oneMsg.content;
    Message.sentAt = oneMsg.sentAt;
    Message.roomID = oneMsg.roomID;

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
