angular.module('ioncurrency.controllers')

  .controller('DetailsCtrl',['$scope', '$stateParams', 'ConversionManager', function(scope, stateParams, manager) {
    var id = stateParams.conversionId;

    scope.conversion = manager.getConversionAt(id);

  }]);
