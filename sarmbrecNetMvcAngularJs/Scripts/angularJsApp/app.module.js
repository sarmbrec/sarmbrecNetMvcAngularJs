(function () {
    'use strict';

    // Define the `knowledgeBaseApp` module
    angular.module('sarmbrecApp', [
        // ...which depends on the `knowledgeBase` module
        'ngRoute',
        'headerModule',
        'knowledgeBase', // camel case here converts to hypens in html
        'carouselModule',
        'techStackAngularjs',
        'phoneDetail'
    ]);

    // Define the `carouselApp` module
    //angular.module('sarmbrecApp', [
    //    // ...which depends on the `carousel` module
    //    'carousel'
    //]);


})();