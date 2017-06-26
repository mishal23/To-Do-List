/**
 * Created by mishal23 on 26/6/17.
 */
var app=angular.module('todo',[]);

app.controller('DisplayList',function($scope) {

   $scope.saved=localStorage.getItem('lists');
   $scope.lists=(localStorage.getItem('lists')!==null)?JSON.parse($scope.saved):[{text:'First Task',done:'false'}];
   localStorage.setItem('lists',JSON.stringify($scope.lists));

   //$scope.lists=[{text:'First Task',done:false}];

   $scope.add=function () {
       if($scope.addedTask==='')
       {
           window.alert("Task cannot be empty");
       }
       else {
           $scope.lists.push({text: $scope.addedTask,done:false});

           $scope.addedTask='';
       }

       localStorage.setItem('lists',JSON.stringify($scope.lists));

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
    }

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

