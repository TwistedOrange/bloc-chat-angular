(function() {
  function ModalCtrl(Room, $uibModalInstance, $uibModal) {

    // referenced as modal.roomObj in form by directive ng-model
    this.roomObj = '';

    // https://angular-ui.github.io/bootstrap/versioned-docs/2.5.0/#!#modal

    /**
     * addRoom - add new record to Firebase database if type {name: XYZ} Where
     * XYZ is the name provided the form entry.
     */
    this.addRoom = function() {
      // where is new name stored? - stored in variable tied to ng-model in form
      console.log('Modal - addRoom', this.roomObj);

      // object that contains name/value pair to match Firebase DB
      var newRoom = { name: this.roomObj };
      Room.addRoom(newRoom);

      // $uibModalInstance came into existance when $uibModal.open() was called.
      // It's used to reference the modal window and to use the window's methods.
      $uibModalInstance.close();
    };

    // Comments on using dismiss() v. close()
    // After looking into dismiss vs close I think it has to do with Javascript promises. I won't go into it here but to use dismiss we'd need to add some additional code to the open method to handle it. close seems to work fine so I'd suggest using that on line 34 of ModalCtrl to get rid of the error when the user click to close the modal.
    this.cancel = function() {
      console.log('Modal - cancel form');
      $uibModalInstance.close();
    };
  }

  angular
    .module('blocChat')
    // add Bootstrap's $uibModalInstance to reference open window
    .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();
