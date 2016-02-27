angular.module('ioncurrency.controllers')

  .controller('ConversionCtrl',['$scope', 'ConverterService', '$rootScope', function(scope, converterService, rootScope) {

    rootScope.$on('loadData', function(){
      scope.currencies = converterService.getListOfCurrencies();
      scope.$apply();
    });
}]);
