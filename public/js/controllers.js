'use strict';

var app = angular.module('routerApp');

app.controller('homeCtrl', function($scope, QuestionService) {
    console.log('homeCtrl!');

    QuestionService.getAll()
        .then(function(res) {
            $scope.questions = res.data;
        }, function(err) {
            console.error('err:', err);
        });

});

app.controller('dashCtrl', function($scope) {
    console.log('dashCtrl!');

});
