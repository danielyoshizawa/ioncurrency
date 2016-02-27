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
      .state('tab.chat-detail', {
        url: '/chats/:chatId',
        views: {
          'tab-chats': {
            templateUrl: 'templates/chat-detail.html',
            controller: 'ChatDetailCtrl'
          }
        }
      })

      .state('tab.account', {
        url: '/account',
        views: {
          'tab-account': {
            templateUrl: 'templates/tab-account.html',
            controller: 'AccountCtrl'
          }
        }
      });

    $urlRouterProvider.otherwise('/tab/conversion');

  });
