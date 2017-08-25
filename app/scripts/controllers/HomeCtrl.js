(function() {
  function HomeCtrl(Room, $uibModal) {
    console.log('in controller HomeCtrl() as "home"');

    console.log('Firebase Room obj:', Room.all);

    // Now visible in view due to $scope ('this.').
    this.listOfRooms = Room.all;

    this.openForm = function() {
      // https://angular-ui.github.io/bootstrap/versioned-docs/2.5.0/#!#modal
      // The open method returns a modal instance, an object with the following properties:
      //
      // Where is return value from open()?
      // according to docs I need the referenced returned by open() to use the properties such as 'close'.
      //
      // https://angular-ui.github.io/bootstrap/versioned-docs/2.5.0/#!#modal
      //
      // NOT NEED new var modalRef to retain return value of open. Want to save handle t this opened window so can use its methods. Bootstrap provides $uibModalInstance (though not clearly mentioned in docs how to use it) for this purpose.
      // modalRef = $uibModal.open ({
      //   templateUrl: '/templates/frmAddRoom.html',
      //   controller: 'ModalCtrl as modal'
      // });
      $uibModal.open ({
        templateUrl: '/templates/frmAddRoom.html',
        controller: 'ModalCtrl as modal'
      });
    };
  }

  angular
    .module('blocChat')
    // inject dependency of Room service so this controller can make its properties and methods visible via $scope to views
    .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
