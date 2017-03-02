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
        console.log(error);
        $scope.errors = error.data.errors;
      });
      
    };

    $scope.updatePerson = function(updatedName, updatedBio, person) {
      var personParams = {name: updatedName, bio: updatedBio};
      $http.patch("/api/v1/people/" + person.id + ".json", personParams).then(function(response) {
        var index = $scope.people.indexOf(person);
        $scope.people[index] = response.data;
        $scope.updateName = null;
        $scope.updateBio = null;
        $scope.errors = null;
      }, function(error) {
        console.log(error);
        $scope.errors = error.data.errors;
      });
      
    };

    $scope.toggleBio = function(person) {
      person.bioVisible = !person.bioVisible;
    };

    $scope.killPerson = function(person) {
      var index = $scope.people.indexOf(person);
      $http.delete("/api/v1/people/" + person.id + ".json").then(function(response) {
        $scope.errors = null;
        $scope.people.splice(index, 1);
      }, function(error) {
        console.log(error);
        $scope.errors = error.data.errors;
      });
    };

    $scope.toggleOrder = function(attribute) {
      if (attribute !== $scope.orderAttribute) {
        $scope.isDescending = false;
      } else {
        $scope.isDescending = !$scope.isDescending;
      }
      $scope.orderAttribute = attribute;
    };

    $scope.sortArrow = function(attribute) {
      if (attribute === $scope.orderAttribute) {
        return $scope.isDescending ? 'v' :  '^';
      } else {
        return '';
      }
    };
    
    window.$scope = $scope;
  });

})();

peopleCtrl.$inject = ['$scope'];