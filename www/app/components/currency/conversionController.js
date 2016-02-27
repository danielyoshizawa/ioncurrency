angular.module('ioncurrency.controllers')

  .controller('ConversionCtrl',['$scope', 'ConverterService', '$rootScope', function(scope, converterService, rootScope) {

    rootScope.$on('loadData', function(){
      //var currencies = converterService.getListOfCurrencies();
      //scope.feed = Object.keys(currencies)[0];
      scope.feed = converterService.getListOfCurrencies();
    });


}]);
