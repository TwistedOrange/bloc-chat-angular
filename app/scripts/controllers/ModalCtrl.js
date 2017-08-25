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

    // this.close = function() {
    //   console.log('Modal - close form');
    //   $uibModalInstance.dismiss();
    // };

    this.cancel = function() {
      console.log('Modal - cancel form');
      //Room.closeModal();
      $uibModalInstance.dismiss();
    };
  }

  angular
    .module('blocChat')
    // add Bootstrap's $uibModalInstance to reference open window
    .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();
