(function() {
  function ModalCtrl(uibModal), Room) {

    // https://angular-ui.github.io/bootstrap/versioned-docs/2.5.0/#!#modal

    this.open = function() {
      console.log('in model open');
    };

    this.close = function() {

    };

    this.cancel = function() {

    };

    this.submit = function() {
      console.log('model submit');
    };
  }

  angular
    .module('blocChat')
    .controller('ModalCtrl', ['uibModal', 'Room', ModalCtrl]);
})();
