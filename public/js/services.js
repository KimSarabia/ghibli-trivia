'use strict';

var app = angular.module('routerApp');

app.service('QuestionService', function($http) {

    this.getAll = function() {
        return $http.get('/api/questions');
    };

    this.create = function(question) {
        return $http.post('/api/questions', question);
    };

    this.update = function(questionId, updateObj) {
        return $http.put(`/api/questions/${questionId}`, updateObj);
    };

    this.delete = function(questionId, updateObj) {
        return $http.delete(`/api/questions/${questionId}`, deleteObj);
    };

});
