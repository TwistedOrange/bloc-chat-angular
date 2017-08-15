(function() {
  function ModalCtrl($uibModal, Room) {

    // https://angular-ui.github.io/bootstrap/versioned-docs/2.5.0/#!#modal

    this.addRoom = function() {
      // where is new name stored?
      console.log('Modal - addRoom');

    };

    // this.close = function() {
    //   console.log('Modal - close form');
    //   $uibModal.close();
    // };

    this.cancel = function() {
      console.log('Modal - cancel form');
      $uibModal.close();
    };

    this.submit = function() {
      // where is new name stored?
      console.log('Modal - submit new room to Firebase');
    };
  }

  angular
    .module('blocChat')
    .controller('ModalCtrl', ['Room', ModalCtrl]);
})();
