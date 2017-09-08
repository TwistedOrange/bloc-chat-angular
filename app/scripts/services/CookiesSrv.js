(function() {
  function BlocChatCookies($cookies, $uibModal) {
    //var Cookies_API = {};
    //var username;      // name user submitted on form

    var currentUser = $cookies.get('blocChatCurrentUser');
    console.log('blocChatCurrentUser cookie =', currentUser);

    // no username set, store new one
    if (!currentUser || currentUser === '') {
      // Do something to allow users to set their username
      $uibModal.open ({
        templateUrl: '/templates/frmUserName.html',
        controller: 'ModalCtrl as modalUser'
      });
    }

    //return Cookies_API;
  }

  // Angular modules have a .run() method that runs code when the app instance is created. Use a .run() block to make sure that a username is set at the time the app is initialized.
  angular
    .module('blocChat')
    .run(['$cookies','$uibModal', BlocChatCookies]);
})();
