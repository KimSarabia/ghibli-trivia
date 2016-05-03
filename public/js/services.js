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

    this.update = (editQuestion) => {
        $http.put(`/api/questions/${editQuestion.id}`, editQuestion).then(res => {
            console.log("success");
        }, err => {
            if (err) {
                console.log(err);
            }
        });
    };

    this.delete = (deleteQuestion) => {
        $http.put(`/api/questions/${deleteTransaction.id}`, deleteTransaction).then(res => {
            console.log("success");
        }, err => {
            if (err) {
                console.log(err);
            }
        });
    };

});
