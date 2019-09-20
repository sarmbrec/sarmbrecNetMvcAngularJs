(function () {
    'use strict';

    // Define the `knowledgeBaseApp` module
    angular.module('sarmbrecApp', [
        // ...which depends on the `knowledgeBase` module
        'knowledgeBase', // camel case here converts to hypens in html
        'carouselModule'
    ]);

    // Define the `carouselApp` module
    //angular.module('sarmbrecApp', [
    //    // ...which depends on the `carousel` module
    //    'carousel'
    //]);


})();