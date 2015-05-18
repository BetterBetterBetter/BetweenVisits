'use strict';

angular.module('betweenVisits', [
  'angular-loading-bar',
  'ngRoute',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngAnimate',
  'btford.socket-io',
  'impress',
  'angular.screenmatch',
  'd3',
  'pickadate'
])
  .config(function ($routeProvider, $locationProvider, $httpProvider, screenmatchConfigProvider) {

    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('authInterceptor');

    screenmatchConfigProvider.config.rules = {
      lg: '(min-width: 1200px)',
      md: '(min-width: 992px) and (max-width: 1199px)',
      sm: '(min-width: 768px) and (max-width: 991px)',
      xs: '(max-width: 767px)', 
      xxs: '(max-width: 555px), (max-height:333px)'
     };

  })
  .factory('authInterceptor',
  function ($rootScope, $q, $cookieStore, $location) {
    return {

      request: function (config) {
        config.headers = config.headers || {};
        if ($cookieStore.get('token')) {
          config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
        }
        return config;
      },

      responseError: function (response) {
        if (response.status === 401) {
          $location.path('/login');
          $cookieStore.remove('token');
          return $q.reject(response);
        }
        else {
          return $q.reject(response);
        }
      }

    };
  })

  .run(function ($rootScope, Auth) {

    $rootScope.Auth = Auth;

  });

