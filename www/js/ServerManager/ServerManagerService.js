RS.ServerManager.service("ServerManagerService", function($http){
  console.log("service is here");

  this.getData = function(){
    return $http.get("http://localhost:9999/api", function( data ){
      console.log(data);
    })
  }

});
