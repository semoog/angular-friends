angular.module('angularFriends')
  .controller('friendController', function($scope, $http) {
    // $scope.friends = $http.get('friend-data.json');
    $http.get('friend-data.json').success(function(data) {
      $scope.friends = data.records;
    });

    for (var key in $scope.friends) {
        if ($scope.friends[key].current_location === null) {
          $scope.friends[key].current_location = {name: ''};
        }
    }

  });
