(function() {
  function HomeCtrl(Room, Message, $uibModal) {

    // Now visible in view due to $scope ('this.').
    this.listOfRooms = Room.all;

    // show this section when chosenRoom has a name (on-click)
    this.chosenRoom;
    this.roomMessages;

    this.newMessage = '';

    /**
     * @function showRoomMessages
     * @desc For given room object, return the messages for that room's ID
     * @param  {[type]} roomObj [description]
     */
    // one of the rooms was clicked, name in $scope
    this.showRoomMessages = function(roomObj) {
      this.chosenRoom = roomObj.name;

      this.roomMessages = Message.getRoomByID(roomObj.$id);
      console.log('Msg for room []', roomObj.name, '] = ', this.roomMessages);
    };

    /**
     * @function openForm()
     * @desc Open the form defined in templateUrl in its own window
     * (modal = force to be on top)
     */
    this.openForm = function() {
      // https://angular-ui.github.io/bootstrap/versioned-docs/2.5.0/#!#modal

      // NOTE: open() makes available a 'hidden' variable  $uibModalInstance which
      // is what's used to reference this newly opened window.
      // To close this window use $uibModalInstance.close().
      $uibModal.open ({
        templateUrl: '/templates/frmAddRoom.html',
        controller: 'ModalCtrl as modal'
      });
    };

    this.send = function() {
      console.log('send the message:', this.newMessage);

      Message.addMessage( {
        roomID: this.chosenRoom,
        content: this.newMessage,
        sentAt: '0:00',
        username: 'snow'
      });
      this.newMessage = '';
    };
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();
