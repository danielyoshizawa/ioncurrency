angular.module('ioncurrency.services')
  .service('ConverterService', ['$http', '$window', '$rootScope', function (http, window, rootScope) {

    var converter = this;
    converter.query = {};

    this.loadData = function () {
      http({
        method: 'GET',
        url: 'http://apilayer.net/api/list',
        params: {
          'access_key': '5a177c77d751e9087779d8efcffbe7bd'
          , 'prettyprint': 1
        }
      }).then(function successCallback(response) {
        converter.query = response.data;
        rootScope.$emit('loadData');
      }, function errorCallback(response) {
        window.alert("Not able to get currency list from server.");
      });
    };

    this.loadData();

    this.getListOfCurrencies = function () {
      return converter.query.currencies;
    };


  }]);
