'use strict';

var app = angular.module('routerApp', ['ui.router', 'oitozero.ngSweetAlert']);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/html/home.html',
      controller: 'homeCtrl'
    })
    .state('dashboard', {
      url: '/detail/dashboard',
      templateUrl: '/html/dashboard.html',
      controller: 'dashCtrl'
    })
  $urlRouterProvider.otherwise('/');
});
