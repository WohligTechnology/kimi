var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function() {
  var navigation = [{
    name: "About Us",
    classis: "active",
    link: "#/about",
    subnav: []
  },{
    name: "Events",
    classis: "active",
    link: "#/events",
    subnav: []
  },{
    name: "Media Corner",
    classis: "active",
    link: "#/media",
    subnav: []
  },{
    name: "Contact Us",
    classis: "active",
    link: "#/contact",
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
