(function () {
'use strict';

angular.module('NameCalculator', [])

.controller('NameCaculatorController', function ($scope) {
  $scope.name = "";
  $scope.totalValue = '';
  $scope.dis=function(){
  $scope.state="pass";
  var words= $scope.name.split(",");
  var len=words.length;
  var flag=true;
      /**
      ** Logic for handling an empty item, i.e., , ,"
      **/
      for(var i = 0; i < words.length; i++){
         if(words[i]=='' && words.length !=1)
           {
    
            $scope.totalValue = "please enter item at location:" + i;
            flag=false;
            return;
    
          }
         console.log(words[i]);
       }
  
    if(words=="" && flag){
    $scope.totalValue="Please enter data!";
    $scope.state="error";
    }

    else if (len <=3 && flag) {
      $scope.totalValue="Enjoy!";
      $scope.state="pass";
    }
    else if (flag) {
        $scope.totalValue="Too Much!";
        $scope.state="pass";
    }
  }

  $scope.displayNumeric = function () {
    var totalNameValue = calculatNumericForString($scope.name);
    $scope.totalValue = totalNameValue;
  };


  function calculatNumericForString(string) {
    var totalStringValue = 0;
    for (var i = 0; i < string.length; i++) {
      totalStringValue += string.charCodeAt(i);
    }

    return totalStringValue;
  }

});


})();
