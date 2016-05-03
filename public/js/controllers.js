'use strict';

var app = angular.module('routerApp');

app.controller('homeCtrl', function($scope) {
    console.log('homeCtrl!');
});

app.controller('dashCtrl', function($scope, $state) {
  console.log('dashCtrl!');

});
