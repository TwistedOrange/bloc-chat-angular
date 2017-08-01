(function() {
  function HomeCtrl(Room) {
    console.log('in controller HomeCtrl() as "home"');

    console.log('Firebase Room obj:', Room.all);

    // Now visible in view due to $scope ('this.').
    this.listOfRooms = Room.all;

    this.oneRoom = Room.add( {room123: 'debS'} );

    // Reference variable outside of this controller with its controller-as name.X
  }

  angular
    .module('blocChat')
    // inject dependency of Room service so this controller can make its properties and methods visible via $scope to views
    .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
