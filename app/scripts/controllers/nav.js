'use strict';

angular.module('angNewsApp')
  .controller('NavCtrl', function($scope, $location, Post, Auth) {
    $scope.post = {url: 'http://'};

    $scope.submitPost = function() {
      Post.create($scope.post).then(function(postId) {
        $scope.post = {url: 'http://', title:''};
        $location.path('/posts/' + postId);
      });
    };

    $scope.logout = function(){
      Auth.logout();
    };
  });