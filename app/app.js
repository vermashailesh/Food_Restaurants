'use strict';

// Declare app level module which depends on views, and components
angular.module('foodieJournal', [
  'ngRoute',
  'foodieJournal.main',
  'foodieJournal.home',
  'foodieJournal.public',
  'foodieJournal.culinaris',
  'foodieJournal.journey'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when('/',{
          templateUrl:'main/partials/_home.html',
          controller: 'HomeController'
      })
      .when('/welcomehome',{
          templateUrl: 'home/view/home.html',
          controller: 'WelcomeHomeController'
      })
      .when('/culinaris',{
          templateUrl:'culinaris/partials/_culinaryJourney.html',
          controller: 'CulinarisController'
      })
      .when('/culinaris_photos',{
          templateUrl:'culinaris/partials/_culinaryPhotos.html',
          controller: 'CulinarisController'
      })
      .when('/journey',{
          templateUrl: 'journey/view/Journey.html',
          controller: 'JourneyController'
      })
      .when('/journeynew',{
          templateUrl: 'journey/view/Journey_Generic.html',
          controller: 'JourneyController'
      })
      .when('/journey/view/',{
          templateUrl: 'journey/view/JourneyStarted.html',
          controller: 'JourneyController'
      })
      .when('/journey/view/journeycompleted/',{
          templateUrl: 'journey/view/JourneyCompleted.html',
          controller: 'JourneyController'
      })
      .when('/journey/view/providereason/',{
          templateUrl: 'journey/view/JourneyReason.html',
          controller: 'JourneyController'
      })
      .when('/viewImages',{
          templateUrl: 'journey/view/ViewImages.html',
          controller: 'JourneyController'
      })
      .otherwise({redirectTo: '/'});
}]);


