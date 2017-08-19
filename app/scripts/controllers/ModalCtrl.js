(function() {
  function ModalCtrl($uibModal, Room) {

    this.roomObj = '';    // or {}; ??

    // https://angular-ui.github.io/bootstrap/versioned-docs/2.5.0/#!#modal

    // this.addRoom = function() {
    //   // where is new name stored?
    //   console.log('Modal - addRoom');
    //
    // };

    // this.close = function() {
    //   console.log('Modal - close form');
    //   modal.close();
    // };

    this.cancel = function() {
      console.log('Modal - cancel form');
      Room.closeModal();
      //$uibModal.close();
    };

    this.submit = function() {
      console.log('Modal - submit new room to Firebase', this.roomObj);
      //$uibModal.
    };
  }

  angular
    .module('blocChat')
    .controller('ModalCtrl', ['Room', ModalCtrl]);
})();
