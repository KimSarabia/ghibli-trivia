'use strict';

var app = angular.module('routerApp');

app.controller('homeCtrl', function($scope) {
    console.log('homeCtrl!');
});

app.controller('listCtrl', function($scope, $state) {
  console.log('listCtrl!');

});

app.controller('detailCtrl', function($scope, $state){
  console.log('detailCtrl');

})
