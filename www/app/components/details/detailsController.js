angular.module('ioncurrency.controllers')

  .controller('DetailsCtrl',['$scope', '$stateParams', 'ConversionManager', function(scope, stateParams, manager) {
    scope.id = stateParams.conversionId;
  }]);
