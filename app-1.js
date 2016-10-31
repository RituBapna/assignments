(function () {
'use strict';

angular.module('NameCalculator', [])

.controller('NameCaculatorController', function ($scope) {
  $scope.name = "";
  $scope.totalValue = '';
  $scope.dis=function(){
  $scope.state="pass";
    var total= $scope.name.split(",");
    var len=total.length;

    // if( total.length>1)
    // {
    //   for(var i = 0; i < total.length; i++)
    //   {
    //     if(total[i]=='')
    //       {
    //
    //        $scope.totalValue = "please enter item at location:" + i;
    //        temp=i;
    //
    //      }
    //     console.log(total[i]);
    //   }
    //   //$scope.totalValue = "please enter item at location:" + temp
    // }
    if(total==""){
    $scope.totalValue="Please enter data!";
    $scope.state="error";
    }

    else if (len <=3) {
      $scope.totalValue="Enjoy!";
      $scope.state="pass";
    }
    else {
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
