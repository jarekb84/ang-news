'use strict';

app.factory('Post', function($resource) {
  return $resource('https://ang-news-jb.firebaseio.com/posts/:id.json');
});