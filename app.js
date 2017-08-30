var app = angular.module("todoList", []);

app.controller("todoCtrl", function($scope) {
    // Set up initial todos array
    $scope.todos = [];

    // Event handler for clicking on submit todo button
    $scope.submitTodo = function() {
        // alert("click worked!");
        // Step 1: Take user data from form and add to array of todos
        // Step 2: Bind todos array to the scope

        // Push into the todos array the input from the form which is bound to the scope
        $scope.todos.push($scope.todoInput);
    }
});