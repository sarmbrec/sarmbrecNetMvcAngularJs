(function () {
    'use strict';
    // Register `angularjs` component, along with its associated controller and template
    angular.
        module('techStackAngularjs').
        component('techStackAngularjs', {            
            templateUrl: '/Scripts/angularJsApp/knowledge-base/tech-stack/angularjs/angularjs.template.html',
            controller: ['$http',
                function TechStackAngularjsController($http) {
                    // scope to self
                    var self = this;

                    //orderBy
                    self.orderProp = 'category';

                    // set the default value of our number
                    //self.myNumber = 0;
                    
                    // function to evaluate if a number is even
                    //self.isEven = function (value) {
                    //    if (value % 2 === 0)
                    //        return true;
                    //    else
                    //        return false;
                    //};

                    self.showAngularJSTab = 'sarmbrec';
                    self.ShowHideAngularJSTab = function (event) {
                        //console.log('event.target.getAttribute = ', event.target.getAttribute('data-category'))
                        self.showAngularJSTab = event.target.getAttribute('data-category');
                    };

                    self.showTab = 'getting-started';
                    self.ShowHideTab = function (event) {
                        //console.log('event.target.getAttribute = ', event.target.getAttribute('data-category'))
                        self.showTab = event.target.getAttribute('data-category');
                    };
                


                    // get knowledge base object
                    $http.get('/Content/json/knowledge-base.json').then(function (response) {
                        self.knowledgeBase = $.grep(response.data, function (b) {
                            return b.title === "AngularJS";
                        });
                    });

                    // get knowledge base for angularjs techstack object
                    $http.get('/Content/json/knowledge-base-angularjs.json').then(function (response) {
                        self.techStackAngularjs = response.data;
                    });
                                                          


                }
            ]
        });
})();