(function() {
  function ModalCtrl(Room, $uibModalInstance, $cookies) {
    // referenced as modal.roomObj in form by directive ng-model
    this.roomObj = '';

    // hold user's message
    //this.messageObj = {content: 'doggieMsg', username: 'snow'};

    // https://angular-ui.github.io/bootstrap/versioned-docs/2.5.0/#!#modal

    /**
     * addRoom - add new record to Firebase database of type {name: XYZ} Where
     * XYZ is the name provided the entry form.
     */
    this.addRoom = function() {
      // where is new name stored? - stored in variable tied to ng-model in form
      console.log('Modal - addRoom', this.roomObj);

      // object that contains name/value pair to match Firebase DB
      var newRoom = { name: this.roomObj };
      Room.addRoom(newRoom);

      // $uibModalInstance came into existance when $uibModal.open() was called.
      // It's used to reference the modal window and to call the window's methods.
      $uibModalInstance.close();
    };

    this.closeWindow = function() {
      //console.log('modal.closeWindow - close form');
      $uibModalInstance.close();
    };

    /**
     * @function setUsername()
     * @desc Stores username into cookie from form
     */
    // "this" is same as $scope, and $scope doesn't need to be injected since we use controller-as syntax
    this.setUserName = function() {
     console.log('write name ', this.username, ' to cookie blocChatCurrentUser');
     //console.log($cookies);

     if ( this.username ) {
       $cookies.put('blocChatCurrentUser', this.username);

       // $uibModalInstance comes into existance with $uibModal.open(), it references the modal window and gives access to its methods.
       $uibModalInstance.close();
     }
   };
  }

  angular
    .module('blocChat')
    // add Bootstrap's $uibModalInstance to reference open window
    .controller('ModalCtrl', ['Room', '$uibModalInstance', '$cookies', ModalCtrl]);
})();
