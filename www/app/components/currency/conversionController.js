angular.module('ioncurrency.controllers')

  .controller('ConversionCtrl', ['$scope', 'ConverterService', '$rootScope', 'Conversion', 'ConversionManager',
    function (scope, converterService, rootScope, Conversion, manager) {

      rootScope.$on('loadData', function () {
        scope.currencies = converterService.getListOfCurrencyNames();
        scope.$apply();
      });

      rootScope.$on('Conversion', function (event, data) {
        window.alert(data);
      });

      scope.convert = function (conversion) {
        scope.amountConverted = converterService.getConversionValue(conversion);
        conversion.amountConverted = scope.amountConverted;
        manager.addConversion(conversion);
      };

      scope.doRefresh = function () {
        converterService.loadData();
        scope.$apply();
      };

    }]);
