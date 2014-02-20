'use strict';

app.controller('PostsCtrl', function ($scope, $location, Post) {
  if ($location.path() === '/') {
    $scope.posts = Post.all;
  }
  $scope.post = {url: 'http://'};

  $scope.deletePost = function (postId){
    Post.delete(postId);
  };
});