'use strict';

var app = angular.module('routerApp');

app.service('Pokemon', function($http) {

this.getPokedex = () => {
  return $http({
    method: 'GET',
    url: 'http://pokeapi.co/api/v2/pokedex/1/',
    cache: true
  });
};

this.getById = id => {
  return $http({
    method: 'GET',
    url: `http://pokeapi.co/api/v2/pokemon/${id}/`,
    cache: true
  });
};

});
