/* global angular */
(function() {
  "use strict";

  angular.module("app").controller("peopleCtrl", function($scope) {
    $scope.people = [{name: "Steve Harvey", bio: "always screws up", bioVisible: false},
                      {name: "Oscar", bio: "Awards guy", bioVisible: false},
                      {name: "Lala Land", bio: "Not the winner. Also not winter.", bioVisible: false}];

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

    $scope.killPerson = function(index) {
      $scope.people.splice(index, 1);
    };
    
    window.$scope = $scope;
  });

})();