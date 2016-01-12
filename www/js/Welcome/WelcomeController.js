RS.Welcome.controller("WelcomeController", function($scope, $state){
    console.log("WelcomeController is here");

    $scope.go = go;

    $scope.model = {
        salary : ""
    };

    function go(){
        console.log("go");

        localStorage.setItem('salary', $scope.model.salary);

        $state.go("tutorial");
    }
});

