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
      $('.fullpage').fullpage({
        afterLoad: function(anchorLink, index) {
          if (index == 2) {
            $('#cheer').trigger("play");
          } else {
            $('#cheer').each(function() {
              this.pause(); // Stop playing
              this.currentTime = 0; // Reset time
            });
          }

          if (index == 7) {
            $('#ring').trigger("play");
          } else {
            $('#ring').each(function() {
              this.pause(); // Stop playing
              this.currentTime = 0; // Reset time
            });
          }
        }
      });


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
  $scope.menutitle = NavigationService.makeactive("Some Stories");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  TemplateService.header = "views/header-others.html";
  $scope.cast = [
    {
      img: "img/eventdetail/naseeruddinshah.jpg",
      alt: "Naseeruddin Shah",
      name: "Naseeruddin Shah",
      descp: "Naseeruddin Shah (born 20 July 1949 or 16 August 1950) is an Indian film and stage actor and director, and a prominent figure in Indian parallel cinema. Shah has won numerous awards in his career, including three National Film Awards, three Flimfare awards and an award at the Venice Film Festival. The government of India has honored him with the Padman Shri and the Padma Bushan awards for his contributions to Indian cinema."
    },
    {
      img: "img/eventdetail/ratnapathakshah.jpg",
      alt: "Ratna Pathak Shah",
      name: "Ratna Pathak Shah",
      descp: "Ratna Pathak Shah is an Indian actress best known for her portrayal of Maya Sarabhai in Sarabhai vs Sarabhai, as a major supporting mother in Jaane Tu Ya Jaane Na, Golmaal 3 and also in Khoobsurat. She has been married to Naseeruddin Shah since April 1, 1982. They have three children."
    },
    {
      img: "img/eventdetail/yashpalsharma.jpg",
      alt: "Yashpal Sharma",
      name: "Yashpal Sharma",
      descp: "Yashpal Sharma is an Indian Bollywood actor and theatre artist.[1] He is best known for his role as Randhir Singh in Sudhir Mishra's 2003 Hindi movie Hazaaron Khwaishein Aisi, apart from Lagaan (2001), Gangaajal (2003), Ab Tak Chhappan (2004), Apaharan (2005), Singh is Kinng (2008), Arakshan (2011) and Rowdy Rathore (2012). He played Kuwar Singh in Zee's Mera Naam Karegi Roshan. Yashpal is also a stage actor and appears in live plays. He formerly starred in Zee's Neeli Chhatri Waale."
    },
    {
      img: "img/eventdetail/manojpahwa.jpg",
      alt: "Manoj Pahwa",
      name: "Manoj Pahwa",
      descp: "Manoj Pahwa (born 1 September 1963) is an Indian film and television actor who is noted for his role as Bhatia in the comedy series Office Office (2001). He has acted in over 45 films as a character actor, including 7½ Phere (2005), Being Cyrus (2005), Singh Is Kinng (2008), Dabangg 2 (2012) and Jolly LLB (2013)."
    },
    {
      img: "img/eventdetail/seemapahwa.jpg",
      alt: "Seema Pahwa",
      name: "Seema Pahwa",
      descp: "Seema Bhargav Pahwa is a veteran Indian film, television & theatre actress, who became a household name with her on-screen character Badki in 'Hum Log' (1984-1985). She also played Maasi on 'Kasamh Se' (2006-2009), a popular Zee TV soap opera by Ekta Kapoor. In 2014, she received acclaimed for experiential theatre performance of Bhisham Sahni’s Saag Meat, where she cooked during the performance, and the food was served to the audience. She won an Award for Best Supporting Actress at the 2015 Screen Awards for  'Ankhon Dekhi'."
    }
  ];
})

.controller('HeaderController', function($scope, TemplateService) {
  $scope.template = TemplateService;
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    console.log(fromState);
    console.log("fromState");
    if(toState.url == "/home" && fromState.url != "^")
    {
      location.reload();
    }
    $(window).scrollTop(0);
    $("body > .loader").hide();
    $("body > .loadedContent").fadeIn(1000);
    $("body").css("overflow", "scroll");
  });
})


;
