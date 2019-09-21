(function () {
    'use strict';

    // Define the `knowledgeBaseApp` module
    angular.module('sarmbrecApp', [
        // ...which depends on the `knowledgeBase` module
        'ngRoute',
        'knowledgeBase', // camel case here converts to hypens in html
        'carouselModule',
        'phoneDetail'
    ]);

    // Define the `carouselApp` module
    //angular.module('sarmbrecApp', [
    //    // ...which depends on the `carousel` module
    //    'carousel'
    //]);


})();