angular.module("app").filter("ageFilter", [function() {
  return function(array) {
    if (array) {
      var children = [];
      for (var i = 0; i < array.length; i++) {
        if (array[i].age < 18) {
          children.push(array[i]);
        }
      }
      return children;
    }
  };
}]);