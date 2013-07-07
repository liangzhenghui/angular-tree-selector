var app = angular.module('myApp', [
    'controller.feedback',
    'components.treeSelector',
  ]);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/createFeedbackRequests', {
    templateUrl: 'partials/create-feedback-requests',
    controller: 'viewCtrl1'
  });

  $locationProvider.html5Mode(true);
});