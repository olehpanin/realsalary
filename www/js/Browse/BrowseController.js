RS.Browse.controller("BrowseController", function(ServerManagerService, $scope){
  console.log("hello hello");

  update();

  function initModel( data ){
    $scope.model = {
      blackMarketSell : data.blackMarket.sell,
      interbankMarketBuy : data.interbankMarket.buy,
      salary : localStorage.getItem('salary')
    };
  }

  $scope.onModelChange = onModelChange;

  function onModelChange(){
    calculate();
  }

  function calculate(){
    $scope.realSalary = getFormattedNumber( $scope.model.salary * $scope.model.interbankMarketBuy / $scope.model.blackMarketSell );
    $scope.moneyExchangeLost = getFormattedNumber( $scope.model.salary - $scope.realSalary );
    $scope.moneyExchangeLostPercent = ( $scope.moneyExchangeLost / parseInt($scope.model.salary) ) * 100;
    $scope.exchangeDifference = getFormattedNumber( $scope.model.blackMarketSell - $scope.model.interbankMarketBuy );
  }

  function getFormattedNumber( number ){
    return Math.ceil( number * 10 ) / 10;
  }

  $scope.update = update;

  function update(){
    ServerManagerService.getData().then(function( response ){

      $scope.dataUpdatedAt = new Date();

      console.log( response );
      initModel( response.data );
      calculate();
    }, function( response ){
      console.error( response );
    });
  }
});
