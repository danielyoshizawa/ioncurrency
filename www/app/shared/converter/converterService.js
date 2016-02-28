angular.module('ioncurrency.services')
  .service('ConverterService', ['$http', '$window', '$rootScope', 'Conversion', function (http, window, rootScope, Conversion) {

    var converter = this;
    converter.query = {};

    this.loadData = function () {
      http({
        method: 'GET',
        url: 'http://api.fixer.io/latest',
        params: {'base': 'USD'}
      }).then(function successCallback(response) {
        converter.query = response.data;
        converter.query.rates['USD'] = 1.0;
        rootScope.$emit('loadData');
        rootScope.$broadcast('scroll.refreshComplete');
      }, function errorCallback(response) {
        window.alert("Not able to get currency list from server.");
      });
    };

    this.loadData();

    this.getListOfCurrencyNames = function () {
      return converter.query.rates;
    };

    this.getConversionValue = function (conversion) {
      return (conversion.amount/converter.query.rates[conversion.from]) * converter.query.rates[conversion.to];
    };

  }]);
