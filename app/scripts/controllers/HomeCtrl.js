(function() {
  function HomeCtrl(Room, $uibModal) {
    console.log('in controller HomeCtrl() as "home"');

    console.log('Firebase Room obj:', Room.all);

    // Now visible in view due to $scope ('this.').
    this.listOfRooms = Room.all;

    this.openForm = function() {
      // https://angular-ui.github.io/bootstrap/versioned-docs/2.5.0/#!#modal
      //
      // Confusion - Notes.  Where is return value from open()?
      // According to docs I need to reference something returned by open() to use the properties such as 'close', yet when I tried the first version below (creating variable 'modalRef' to hold a return handle), close failed.
      //
      // NOT NEED new var modalRef to retain return value of open. Want to save handle t this opened window so can use its methods. Bootstrap provides $uibModalInstance (though not clearly mentioned in docs how to use it) for this purpose.
      // ------------------------------------------------
      // modalRef = $uibModal.open ({
      //   templateUrl: '/templates/frmAddRoom.html',
      //   controller: 'ModalCtrl as modal'
      // });

      // NOTE: This call of open() makes available a 'hidden' variable called $uibModalInstance which is what's used to reference this newly opened window. To close this window use $uibModalInstance.close().
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
