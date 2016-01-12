var RS = RS || {} ;

// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
RS.main = angular.module('main', ['ionic', 'starter.controllers', "Browse", "ServerManager", "Welcome",
  "Tutorial", "Settings", "About", "MonthSaveCalculator"])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('welcome', {
    url: '/welcome',
    templateUrl: 'templates/welcome.html',
    controller: 'WelcomeController'
  })

  .state('tutorial', {
    url: '/tutorial',
    templateUrl: 'templates/tutorial.html',
    controller: 'TutorialController'
  })

  .state('app.browse', {
    url: '/browse',
    views: {
      'menuContent': {
        controller : "BrowseController",
        templateUrl: 'templates/browse.html'
      }
    }
  })

  .state('app.about', {
    url: '/about',
    views: {
      'menuContent': {
        controller : "AboutController",
        templateUrl: 'templates/about.html'
      }
    }
  })

    .state('app.monthSaveCalculator', {
      url: '/monthSaveCalculator',
      views: {
        'menuContent': {
          controller : "MonthSaveCalculatorController",
          templateUrl: 'templates/monthSaveCalculator.html'
        }
      }
    })

  .state('app.settings', {
    url: '/settings',
    views: {
      'menuContent': {
        controller : "SettingsController",
        templateUrl: 'templates/settings.html'
      }
    }
  })
;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/welcome');
});
