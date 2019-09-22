(function () {
    'use strict';

    // Register `carousel` component, along with its associated controller and template
    angular.
        module('headerModule').
        component('headerModule', {            
            templateUrl: '/Scripts/angularJsApp/header/header.template.html',
            controller: ['$http',
                function CarouselComponentController($http) {
                    //var self = this;
                    //self.orderProp = 'category';

                    //$http.get('/Content/json/carousel.json').then(function (response) {
                    //    self.carousel = response.data;

                    //});

                    //$('.carousel').carousel({
                    //    interval: false,
                    //    pause: 'hover',
                    //    wrap: true
                    //});

                }

            ]
        });
})();