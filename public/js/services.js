'use strict';

var app = angular.module('routerApp');

app.service('QuestionService', function($http) {

    this.getAll = function() {
        return $http.get('/api/questions');
    };

    this.create = (newQuestion) => {
        $http.post('/api/questions', newQuestion).then(res => {
            console.log("success");
        }, err => {
            if (err) {
                console.log(err);
            }
        });
    };

    this.update = function(questionId, updateObj) {
        return $http.put(`/api/questions/${questionId}`, updateObj);
    };

    this.delete = function(questionId, updateObj) {
        return $http.delete(`/api/questions/${questionId}`, deleteObj);
    };

});
