angular.module('ioncurrency.factory')
  .factory('Conversion', ['$window', function (window) {

    function Conversion(conversion) {
      conversion = conversion || {};
      this.amount = conversion.amount;
      this.from = conversion.from;
      this.to = conversion.to;
    }

    return Conversion;
  }]);

