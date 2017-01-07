(function() {
  'use strict'
  var myApp = angular.module("module1",[]);
  myApp.controller("controller",controller);
  controller.$inject = ['$scope']
  function controller($scope) {
    $scope.inputText ="test";
    $scope.showMessage = function () {
      var value = $scope.inputText;
        var values =value.split(",");
        $scope.wordCount = values.length;
        var emptyCount = removeEmptyValues(values);
        $scope.wordCount = $scope.wordCount - emptyCount;
        console.log("size",values.length);
        if ($scope.wordCount ==0) {
          $scope.message ="Please enter the data!"
        }
        else if ($scope.wordCount <=3) {
          $scope.message = "Enjoy";
        }
        else  {
          $scope.message = "Too much!";
        }
          console.log($scope.wordCount);
      }
      $scope.getFontColor = function(){
        console.log("getFontColor");
        if($scope.wordCount == undefined){
          return "";
        }
        var colors = ['Red','Green','Green','Green']
        if($scope.wordCount > 3){
          //$scope.color= "Red";
          return "Red";
        }
        console.log('colors[$scope.wordCount]',colors[$scope.wordCount]);
        $scope.color = colors[$scope.wordCount];
        return colors[$scope.wordCount];
      };
      //var array = value.spilt(",")
    }
    function removeEmptyValues(values) {
      var count =0;
      for (var i = 0; i < values.length; i++) {
        if(values[i] ===undefined || values[i]  == null || values[i] == ''){
          count++;
        }
      }
      return count;
    }
})();
