angular.module('ioncurrency', ['ionic', 'ioncurrency.controllers', 'ioncurrency.services', 'ioncurrency.factory', 'ngCordova', 'ui.utils.masks']);
angular.module('ioncurrency.controllers', ['ioncurrency.services', 'ioncurrency.factory']);
angular.module('ioncurrency.services', ['ioncurrency.factory']);
angular.module('ioncurrency.factory', []);

