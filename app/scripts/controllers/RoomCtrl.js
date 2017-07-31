(function() {
  function RoomCtrl() {
    this.allRooms = {roomA: 'deb', roomB: 'mike', roomC: 'lucy'};
    this.Deb = "deb is here";

    console.log('in RoomCtrl() constructor');
  }

  angular
    .module('blocChat')
    .controller('RoomCtrl', RoomCtrl);
})();
