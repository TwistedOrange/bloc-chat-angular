(function() {
  function config($locationProvider, $stateProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
    });

    $stateProvider
      .state('home', {
        url: '/',
        controller: 'HomeCtrl as home',
        templateUrl: '/templates/home.html'
      });
      // .state('form', {
      //   url: '/form',
      //   controller: 'ModalCtrl as modal',
      //   templateUrl: '/templates/form.html'
      // });
 }

  angular
    // adding ui.router and firebase as dependencies
    .module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap'])
    .config(config);
})();
