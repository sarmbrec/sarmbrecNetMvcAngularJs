(function () {
    'use strict';
    // set knowledgeBaseApp
    //angular.module('knowledgeBaseApp', []);
    // get knowledgeBaseAppApp
    //angular.module('app', [
        // Angular modules 
        //'ngRoute'
        // Custom modules 
        // 3rd Party Modules
    //]);
    angular.
        module('sarmbrecApp').
        config(['$routeProvider', '$locationProvider',
            function config($routeProvider, $locationProvider) {
                    $routeProvider.
                    when('/home', {
                        template: '<carousel-module></carousel-module><knowledge-base></knowledge-base>'
                    }).
                    when('/kb', {
                        template: '<knowledge-base></knowledge-base>'
                    }).
                    //when('/ci/:phoneId', {
                    when('/ci', {                        
                        template: '<carousel-module></carousel-module>'
                    }).
                    otherwise('/home');

                    // use the HTML5 History API
                    $locationProvider.html5Mode(true);
                }
            ]);
})();