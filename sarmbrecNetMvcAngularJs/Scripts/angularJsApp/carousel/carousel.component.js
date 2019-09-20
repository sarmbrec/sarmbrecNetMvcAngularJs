(function () {
    'use strict';

    // Register `carousel` component, along with its associated controller and template
    angular.
        module('carouselModule').
        component('carouselModule', {            
            templateUrl: '/Scripts/angularJsApp/carousel/carousel.template.html',
            controller: ['$http',
                function CarouselComponentController($http) {
                    var self = this;
                    self.orderProp = 'category';
                    $http.get('/Content/json/carousel.json').then(function (response) {

                        //console.log('hello')
                        self.carousel = response.data;

                        //console.log('carousel = ', self.carousel);

                    });
                }
            ]
        });
})();