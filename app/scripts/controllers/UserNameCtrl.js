(function() {
  function UserNameCtrl($cookies, $uibModalInstance) {

    this.setUserName = function() {
      console.log('in  UserNameCtrlsetUserName', this.userName);

      if ( this.userName ) {
        $uibModalInstance.close( this.userName );
        $cookies.put('blocChatCurrentUser', this.userName);
      }
    };
  }

  angular
    .module('blocChat')
    .controller('UserNameCtrl', ['$cookies', '$uibModalInstance', UserNameCtrl]);
})();
