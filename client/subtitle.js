UnderTheBus.controller('subtitle', ['$scope', function($scope){

  $scope.test = "testing!";

  $scope.list = {
  1: "Where bus data goes to be visualized.",
  2: "Keep your eyes on the bus." ,
  3: "Your heard it here first! Your bus is almost there..." ,
  4: "If your bus arrives as expected, give us a good rating!",
  5: "We\'d never throw you under the bus.",
  6: "The bus app that cares.",
  7: "Bus-ted."
};

  $scope.randomize = function(){
    var random = Math.floor(Math.random() * 7) + 1;
    $scope.test = $scope.list[random];
  };

  $scope.randomize();


}]);
