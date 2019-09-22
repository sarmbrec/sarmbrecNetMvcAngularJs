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
                    when('/', {
                        //template: '<carousel-module></carousel-module><knowledge-base></knowledge-base>'
                        templateUrl: '/Scripts/angularJsApp/views/homepage.html'
                        //controller: 'knowledgeBase',
                        //controllerAs: 'inbox'
                    }).                    
                    when('/angularjs', {
                        //templateUrl: '/Scripts/angularJsApp/views/homepage.html'
                        template: '<tech-stack-angularjs></tech-stack-angularjs>'
                    }).
                    when('/kb', {
                        template: '<knowledge-base></knowledge-base>'
                    }).
                    //when('/ci/:phoneId', {
                    when('/ci', {                        
                        template: '<carousel-module></carousel-module>'
                    }).                    
                    otherwise('/');

                    // use the HTML5 History API
                    //$locationProvider.html5Mode(true);
                }
            ]);
})();