(function () {
    'use strict';
    // Register `knowledgeBase` component, along with its associated controller and template
    angular.
        module('knowledgeBase').
        component('knowledgeBase', {            
            templateUrl: '/Scripts/angularJsApp/knowledge-base/knowledge-base.template.html',
            controller: ['$http',
                function KnowledgeBaseController($http) {
                    var self = this;
                    self.orderProp = 'category';
                    $http.get('/Content/json/knowledge-base.json').then(function (response) {
                        self.knowledgeBase = response.data;
                    });
                }
            ]
        });
})();