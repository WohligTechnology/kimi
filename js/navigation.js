var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function() {
  var navigation = [{
    name: "About Us",
    classis: "active",
    link: "about",
    fullno: 2,
    subnav: []
  },{
    name: "Services",
    classis: "active",
    link: "services",
    fullno: 3,
    subnav: []
  },{
    name: "Events",
    classis: "active",
    link: "events",
    fullno: 4,
    subnav: []
  },{
    name: "Media Corner",
    classis: "active",
    link: "media",
    fullno: 5,
    subnav: []
  },{
    name: "Careers",
    classis: "active",
    link: "careers",
    fullno: 6,
    subnav: []
  },{
    name: "Contact Us",
    classis: "active",
    link: "contact",
    fullno: 7,
    subnav: []
  }];

  return {
    getnav: function() {
      return navigation;
    },
    makeactive: function(menuname) {
      for (var i = 0; i < navigation.length; i++) {
        if (navigation[i].name == menuname) {
          navigation[i].classis = "active";
        } else {
          navigation[i].classis = "";
        }
      }
      return menuname;
    },

  }
});
