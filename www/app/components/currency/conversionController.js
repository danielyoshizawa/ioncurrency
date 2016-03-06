angular.module('ioncurrency.controllers')

  .controller('ConversionCtrl', ['$scope', 'ConverterService', '$rootScope', 'Conversion', 'ConversionManager',
    function (scope, converterService, rootScope, Conversion, manager) {

      scope.conversionList = [];

      rootScope.$on('loadData', function () {
        scope.currencies = converterService.getListOfCurrencyNames();
        scope.$apply();
      });

      rootScope.$on('Conversion', function (event, data) {
        window.alert(data);
      });

      scope.convert = function (conversion) {
        if (!conversion.from)
          conversion.from = "USD";

        conversion.amountConverted = converterService.getConversionValue(conversion);
        manager.addConversion(conversion);
        scope.conversionList.unshift(angular.copy(conversion));
      };

      scope.doRefresh = function () {
        converterService.loadData();
        scope.$apply();
      };

    }]);
