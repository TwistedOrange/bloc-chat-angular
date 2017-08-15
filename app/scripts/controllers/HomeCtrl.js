(function() {
  function HomeCtrl(Room, $uibModal) {
    console.log('in controller HomeCtrl() as "home"');

    console.log('Firebase Room obj:', Room.all);

    this.openForm = function() {
      // https://angular-ui.github.io/bootstrap/versioned-docs/2.5.0/#!#modal
      // The open method returns a modal instance, an object with the following properties:
      // Where is return value from open()?
      $uibModal.open ({
        templateUrl: '/templates/frmAddRoom.html',
        controller: 'ModalCtrl as modal'
      });
    }

    // Now visible in view due to $scope ('this.').
    this.listOfRooms = Room.all;

    // this.addRoom = function() {
    //   console.log('show popup to get new room');
    //   Room.add(roomObj);
    // };

    // Reference variable outside of this controller with its controller-as name.X
  }

  angular
    .module('blocChat')
    // inject dependency of Room service so this controller can make its properties and methods visible via $scope to views
    .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
