(function () {
    'use strict';

    angular.module('sarmbrecApp', [
        'ngRoute',
        'headerModule',
        'knowledgeBase', // camel case here converts to hypens in html
        'carouselModule',
        'techStackAngularjs'
    ]);

})();