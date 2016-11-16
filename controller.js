angular.module('userProfiles').controller('MainController', function($scope, mainService) {

  $scope.currentPage = 2;

  $scope.getUsers = function() {
  	var promise = mainService.getUsers($scope.currentPage)

    promise.then(function(response) {
       $scope.users = response.data.data;
       $scope.totalPages = response.data.total_pages
    })
  }
  $scope.getUsers();

  $scope.next= function () {
    if($scope.totalPages > $scope.currentPage){
      $scope.currentPage++;
      $scope.getUsers();
    }
  }
  $scope.back= function () {
    if($scope.currentPage > 1){
      $scope.currentPage--;
      $scope.getUsers();
    }
  }

});
