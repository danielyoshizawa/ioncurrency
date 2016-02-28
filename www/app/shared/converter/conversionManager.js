angular.module('ioncurrency.services')
  .service('ConversionManager', ['$window', function (window) {

    var manager = this;
    manager.conversions = [];

    manager.addConversion = function (conversion) {
      conversion.id = manager.conversions.length;
      manager.conversions.append(conversion);
    }

  }]);
