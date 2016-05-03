'use strict';

var app = angular.module('routerApp');

app.controller('homeCtrl', function($scope, QuestionService) {
    console.log('homeCtrl!');

    QuestionService.getAll()
        .then(function(res) {
            $scope.questions = res.data;
            console.log('$scope.questions:', $scope.questions);
        }, function(err) {
            console.error('err:', err);
        });

});

app.controller('dashCtrl', function($scope, QuestionService) {
    console.log('dashCtrl!');
    $scope.addNewQuestion = function(input) {
        QuestionService.create(input);
        QuestionService.getAll();
    }

});
