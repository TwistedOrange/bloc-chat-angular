(function() {
  function HomeCtrl(Room, Message, $uibModal, $scope) {

    console.log('in controller HomeCtrl() as "home"');
    console.log('Firebase Room obj:', Room.all);

    // Now visible in view due to $scope ('this.').
    this.listOfRooms = Room.all;

    //this.chosenRoom = '"test"';      // holds name of room user clicked

    // one of the rooms was clicked, name in $scope
    this.showRoomMessages = function(roomObj) {
      this.chosenRoom = roomObj.name;

      console.log('room clicked =', this.chosenRoom);

      // call func in Room service to fetch messages
      Room.listMessages(roomObj);
    };

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
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', 'Message', '$uibModal','$scope', HomeCtrl]);
})();
