(function () {
    'use strict';
    // Register `angularjs` component, along with its associated controller and template
    angular.
        module('techStackAngularjs').
        component('techStackAngularjs', {            
            templateUrl: '/Scripts/angularJsApp/knowledge-base/tech-stack/angularjs/angularjs.template.html',
            controller: ['$http',
                function TechStackAngularjsController($http) {
                    var self = this;
                    self.orderProp = 'category';
                    $http.get('/Content/json/knowledge-base.json').then(function (response) {
                        self.knowledgeBase = $.grep(response.data, function (b) {
                            return b.title === "AngularJS";
                        });
                    });
                    $http.get('/Content/json/knowledge-base-angularjs.json').then(function (response) {
                        self.techStackAngularjs = response.data;
                    });
                }
            ]
        });
})();