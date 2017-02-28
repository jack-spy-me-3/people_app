/* global angular */
(function() {
  "use strict";

  angular.module("app").controller("peopleCtrl", function($scope, $http) {
    $scope.setup = function() {    
      $http.get("/api/v1/people.json").then(function(response) {
        $scope.people = response.data;
      });
    };

    $scope.toggleBio = function(person) {
      person.bioVisible = !person.bioVisible;
    };

    $scope.addPerson = function(newName, newBio) {
      var person = {name: newName, bio: newBio, bioVisible: false};
      if (newName && newBio) {
        $scope.people.push(person);
        $scope.inputName = null;
        $scope.inputBio = null;
      }
    };

    $scope.purpleHippo = function() {
      var count = 0;

      return count;
    };

    $scope.killPerson = function(index) {
      $scope.people.splice(index, 1);
    };
    
    window.$scope = $scope;
  });

})();