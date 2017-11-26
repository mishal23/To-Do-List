/**
 * Created by mishal23 on 26/6/17.
 */
/** Updated by mishal23 on 26/11/17. ...*/

var app=angular.module('todo',[]);

app.controller('DisplayList',function($scope,$timeout) {

   $scope.success=false;
   $scope.fail=false;

   $scope.saved=localStorage.getItem('lists');
   $scope.lists=(localStorage.getItem('lists')!==null)?JSON.parse($scope.saved):[{title:'First',text:'First Task',done:'false'}];
   localStorage.setItem('lists',JSON.stringify($scope.lists));

   $scope.add=function () {

       if($scope.addtitle===undefined && $scope.addMemo===undefined)
       {
           $scope.fail=true;
           $scope.success=false;
           $timeout(function () {
               $scope.fail=false;
           },1000);
       }
       else {
           $scope.lists.push({title: $scope.addTitle, text: $scope.addMemo, done:false});
           $scope.fail=false;
           $scope.success=true;
           $scope.addTitle='';
           $scope.addMemo='';
           $timeout(function () {
               $scope.success=false;
           },1500);
       }

       localStorage.setItem('lists',JSON.stringify($scope.lists));

       $scope.display = function() {
           $scope.fail = true;
           $timeout(function() {
               $scope.fail = false;
           }, 1500)
       };
   };

    $scope.left=function () {
        var count_left = 0;
        angular.forEach($scope.lists, function (todo) {
            if (todo.done) {
                count_left += 0;
            }
            else {
                count_left += 1;
            }
        });
        return count_left;
    };

    $scope.remove=function () {

        var oldList=$scope.lists;
        $scope.lists=[];
        angular.forEach(oldList,function (todo){
            if (!todo.done) {
                $scope.lists.push(todo);
            }
        });

        localStorage.setItem('lists',JSON.stringify($scope.lists));
        };
});

