angular.module('ioncurrency.controllers')

  .controller('ConversionCtrl', ['$scope', 'ConverterService', '$rootScope', 'Conversion', 'ConversionManager', '$state', '$location',
    function (scope, converterService, rootScope, Conversion, manager, state, location) {

      rootScope.$on('loadData', function () {
        scope.currencies = converterService.getListOfCurrencyNames();
        scope.$apply();
      });

      rootScope.$on('Conversion', function (event, data) {
        window.alert(data);
      });

      scope.convert = function (conversion) {
        conversion.amountConverted = converterService.getConversionValue(conversion);
        manager.addConversion(conversion);
        state.go('tab.detail', {'conversionId': conversion.id});
        location.search('conversionId', null);
      };

      scope.doRefresh = function () {
        converterService.loadData();
        scope.$apply();
      };

    }]);
