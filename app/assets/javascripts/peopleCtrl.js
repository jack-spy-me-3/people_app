/* global angular */
(function() {
  "use strict";

  angular.module("app").controller("peopleCtrl", function($scope, $http) {
    $scope.setup = function() {    
      $http.get("/api/v1/people.json").then(function(response) {
        $scope.people = response.data;
      });
    };

    $scope.addPerson = function(newName, newBio) {
      var personParams = {name: newName, bio: newBio};
      $http.post("/api/v1/people.json", personParams).then(function(response) {
        $scope.people.push(response.data);
        $scope.inputName = null;
        $scope.inputBio = null;
        $scope.errors = null;
      }, function(error) {
        $scope.errors = error.data.errors;
      });
      
    };

    $scope.toggleBio = function(person) {
      person.bioVisible = !person.bioVisible;
    };

    $scope.killPerson = function(index) {
      $scope.people.splice(index, 1);
    };
    
    window.$scope = $scope;
  });

})();