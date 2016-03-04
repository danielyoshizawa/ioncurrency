angular.module('ioncurrency', ['ionic', 'ioncurrency.controllers', 'ioncurrency.services', 'ioncurrency.factory', 'ngCordova']);
angular.module('ioncurrency.controllers', ['ioncurrency.services', 'ioncurrency.factory']);
angular.module('ioncurrency.services', ['ioncurrency.factory']);
angular.module('ioncurrency.factory', []);

