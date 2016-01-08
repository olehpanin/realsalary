RS.Browse.controller("BrowseController", function(ServerManagerService, $scope){
  console.log("hello hello");

  ServerManagerService.getData().then(function( response ){
    initModel( response.data );
    calculate();
  }, function( response ){
    console.error( response );
  });

  function initModel( data ){
    $scope.model = {
      blackMarketSell : data.blackMarket.sell,
      interbankMarketBuy : data.interbankMarket.buy,
      salary : 1000
    };
  }

  $scope.onModelChange = onModelChange;

  function onModelChange(){
    calculate();
  }

  function calculate(){
    $scope.realSalary = getFormattedNumber( $scope.model.salary * $scope.model.interbankMarketBuy / $scope.model.blackMarketSell );
    $scope.moneyExchangeLost = getFormattedNumber( $scope.model.salary - $scope.realSalary );
    $scope.exchangeDifference = getFormattedNumber( $scope.model.blackMarketSell - $scope.model.interbankMarketBuy );
  }

  function getFormattedNumber( number ){
    return Math.ceil( number * 10 ) / 10;
  }
});
