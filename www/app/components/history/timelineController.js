angular.module('ioncurrency.controllers')

  .controller('TimelineCtrl',['$scope', 'ConversionManager', function(scope, manager) {

    scope.conversions = manager.getConversions();

  }]);
