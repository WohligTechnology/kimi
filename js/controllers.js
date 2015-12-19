angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngSanitize', 'angular-flexslider'])

.controller('HomeController', function($scope, TemplateService, NavigationService, $timeout, $stateParams) {
  //Used to name the .html file

  $scope.template = TemplateService.changecontent("home");
  $scope.menutitle = NavigationService.makeactive("Home");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  $scope.changeFullPage = function(no) {
    console.log(no);
    $.fn.fullpage.moveTo(no);
  };

  $scope.section = {
    one: "views/section/section1.html",
    two: "views/section/section2.html",
    three: "views/section/section3.html",
    four: "views/section/section4.html",
    five: "views/section/section5.html",
    six: "views/section/section6.html",
    seven: "views/section/section7.html",
  };


  $scope.$on('$viewContentLoaded', function() {
    $timeout(function() {
      $('.scene').parallax();
      $('.fullpage').fullpage();


      console.log($stateParams.name);
      $scope.homeval = $stateParams.name;
      switch ($scope.homeval) {
        case "contact":
          $.fn.fullpage.moveTo(7);
          break;
        case "careers":
          $.fn.fullpage.moveTo(6);
          break;
        case "media":
          $.fn.fullpage.moveTo(5);
          break;
        case "events":
          $.fn.fullpage.moveTo(4);
          break;
        case "services":
          $.fn.fullpage.moveTo(3);
          break;
        case "about":
          $.fn.fullpage.moveTo(2);
          break;
        case "home":
          $.fn.fullpage.moveTo(1);
          break;
        default:
          $.fn.fullpage.moveTo(1);
          break;
      }
    }, 1000);
  });

  $scope.wedo = [{
    id: 1,
    title: 'Musicals',
    src: 'img/musical.jpg'
  }, {
    id: 2,
    title: 'Theatre',
    src: 'img/theatre.jpg'
  }, {
    id: 3,
    title: 'Concerts',
    src: 'img/concerts.jpg'
  }];

})

.controller('EventDetailController', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("eventdetail");
  $scope.menutitle = NavigationService.makeactive("Humsafar");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  TemplateService.header = "views/header-others.html";
})

.controller('HeaderController', function($scope, TemplateService) {
  $scope.template = TemplateService;
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    $(window).scrollTop(0);
    $("body").css("overflow", "scroll");
  });
})


;
