(function() {
  function HomeCtrl(Room) {
    console.log('in HomeCtrl()');

    // Now visible in view due to $scope ('this.').
    this.listOfRooms = Room.all;

    // Reference variable outside of this controller with its controller-as name.X
  }

  angular
    .module('blocChat')
    // inject dependency of Room service so this controller can make its properties and methods visible via $scope to views
    .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
