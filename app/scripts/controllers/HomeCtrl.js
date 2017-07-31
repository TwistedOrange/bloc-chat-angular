(function() {
  function HomeCtrl() {
    console.log('in HomeCtrl() constructor');
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', [HomeCtrl]);
})();
