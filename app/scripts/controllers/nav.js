'use strict';

angular.module('angNewsApp')
  .controller('NavCtrl', function($scope, $location, Post, Auth) {
    $scope.post = {url: 'http://'};

    $scope.submitPost = function() {
      Post.create($scope.post).then(function(ref) {
        $location.path('/posts/' + ref.name());
      });
    };

    $scope.logout = function(){
      Auth.logout();
    };
  });