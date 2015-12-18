// JavaScript Document
var firstapp = angular.module('firstapp', [
  'ui.router',
  'phonecatControllers',
  'templateservicemod',
  'navigationservice'
]);

firstapp.config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {

  // for http request with session
  $httpProvider.defaults.withCredentials = true;

  $stateProvider

    .state('home', {
      url: "/home",
      templateUrl: "views/template.html",
      controller: 'HomeController'
    })
    .state('home2', {
      url: "/home/:name",
      templateUrl: "views/template.html",
      controller: 'HomeController'
    })
    .state('eventdetail', {
      url: "/eventdetail",
      templateUrl: "views/template-content.html",
      controller: 'EventDetailController'
    })

  $urlRouterProvider.otherwise("/home");
  // $locationProvider.html5Mode(true).hashPrefix('!');

});

firstapp.directive('img', function($compile, $parse) {
  return {
    restrict: 'E',
    replace: false,
    link: function($scope, element, attrs) {
      var $element = $(element);
      if (!attrs.noloading) {
        $element.after("<img src='img/loading.gif' class='loading' />");
        var $loading = $element.next(".loading");
        $element.load(function() {
          $loading.remove();
          $(this).addClass("doneLoading");
        });
      } else {
        $($element).addClass("doneLoading");
      }
    }
  };
});

firstapp.directive('autoHeight', function($compile, $parse) {
  return {
    restrict: 'EA',
    replace: false,
    link: function($scope, element, attrs) {
      var $element = $(element);
      var windowHeight = $(window).height();
      setTimeout(function() {
        $element.css("height", windowHeight);
      }, 1000);
    }
  };
});
