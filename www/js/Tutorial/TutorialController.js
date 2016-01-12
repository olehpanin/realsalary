RS.Tutorial.controller("TutorialController", function($scope, $state){
    $scope.goToNextPage = goToNextPage;

    function goToNextPage(){
        $state.go("app.browse");
    }
});