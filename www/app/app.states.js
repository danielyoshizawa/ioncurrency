angular.module('ioncurrency')

  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'app/components/main/tabs.html'
      })

      .state('tab.conversion', {
        url: '/conversion',
        views: {
          'tab-conversion': {
            templateUrl: 'app/components/currency/conversion.html',
            controller: 'ConversionCtrl'
          }
        }
      })

      .state('tab.history', {
        url: '/history',
        views: {
          'tab-history': {
            templateUrl: 'app/components/history/timeline.html',
            controller: 'TimelineCtrl'
          }
        }
      })
      .state('tab.detail', {
        url: '/history/:conversionId',
        views: {
          'tab-history': {
            templateUrl: 'app/components/details/details.html',
            controller: 'DetailsCtrl'
          }
        }
      })
    ;

    $urlRouterProvider.otherwise('/tab/conversion');

  });
