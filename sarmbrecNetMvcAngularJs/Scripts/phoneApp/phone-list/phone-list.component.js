(function () {
    'use strict';
    // Register `phoneList` component, along with its associated controller and template
    angular.
        module('phoneList').
        component('phoneList', {            
            templateUrl: '/Scripts/phoneApp/phone-list/phone-list.template.html',
            controller: function PhoneListController() {

                //TODO: make ajax request


                this.phones = [
                    {
                        "category": "Front end technology",
                        "title": "HTML 5",
                        "subTitle": "Hypertext Markup Language",
                        "text": "A software solution stack that defines the properties and behaviors of web page content by implementing a markup based pattern to it.",
                        "links": [
                            {
                                "title": "Semantic HTML Validator",
                                "url": "https://validator.w3.org/nu/#textarea"
                            },
                            {
                                "title": "Semantic HTML Guide",
                                "url": "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
                            },
                            {
                                "title": "Bootstrap 3",
                                "url": "https://getbootstrap.com/docs/3.3/"
                            },
                            {
                                "title": "Bootstrap 4",
                                "url": "https://getbootstrap.com/docs/4.3/"
                            },
                            {
                                "title": "Material Design Lite",
                                "url": "https://getmdl.io/"
                            }
                        ]
                    },
                    {
                        "category": "Front end technology",
                        "title": "SASS",
                        "subTitle": "Syntactically Awesome Style Sheets",
                        "text": "Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.",
                        "links": [
                            {
                                "title": "Sass",
                                "url": "https://sass-lang.com/"
                            }
                        ]
                    },
                    {
                        "category": "Front end technology",
                        "title": "CSS3",
                        "subTitle": "Cascading Style Sheets",
                        "text": "The latest evolution of the Cascading Style Sheets language and aims at extending CSS2.1",
                        "links": [
                            {
                                "title": "All CSS specifications",
                                "url": "https://www.w3.org/Style/CSS/specs.en.html"
                            }
                        ]
                    },
                    {
                        "category": "Front end technology",
                        "title": "JavaScript",
                        "subTitle": "Fun on a bun",
                        "text": "A lightweight, interpreted, or just-in-time compiled programming language with first-class functions.",
                        "links": [
                            {
                                "title": "JavaScript MDN",
                                "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                            }
                        ]
                    },
                    {
                        "category": "Front end technology",
                        "title": "jQuery",
                        "subTitle": "Fun on a bun",
                        "text": "A JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax.",
                        "links": [
                            {
                                "title": "Documentation",
                                "url": "https://jquery.com/"
                            },
                            {
                                "title": "API Documentation",
                                "url": "https://api.jquery.com/"
                            }
                        ]
                    },
                    {
                        "category": "Front end technology",
                        "title": "Angular JS",
                        "subTitle": "Superheroic JavaScript MVW Framework",
                        "text": "",
                        "links": [
                            {
                                "title": "Styleguide",
                                "url": "https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md"
                            }, {
                                "title": "Documentation",
                                "url": "https://angularjs.org/"
                            },
                            {
                                "title": "Tutorial",
                                "url": "https://docs.angularjs.org/tutorial"
                            }
                        ]
                    },
                    {
                        "category": "Front end technology",
                        "title": "TypeScript",
                        "subTitle": "Designed for development of large applications",
                        "text": "An open-source programming language developed and maintained by Microsoft.",
                        "links": [
                            {
                                "title": "Javascript that scales",
                                "url": "https://www.typescriptlang.org/"
                            },
                            {
                                "title": "TypeScript in 5 minutes",
                                "url": "https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html"
                            }
                        ]
                    },
                    {
                        "category": "Front end technology",
                        "title": "Angular",
                        "subTitle": "One framework, mobile &amp; desktop",
                        "text": "Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target.",
                        "links": [
                            {
                                "title": "Documentation",
                                "url": "https://angular.io/"
                            },
                            {
                                "title": "Tutorial",
                                "url": "https://angular.io/start"
                            }
                        ]
                    },
                    {
                        "category": "Front end technology",
                        "title": "Accessablity",
                        "subTitle": "ADA Compliancy",
                        "text": "Following these guidelines will make content accessible to a wider range of people with disabilities, including blindness and low vision, deafness and hearing loss, learning disabilities, cognitive limitations, limited movement, speech disabilities, photosensitivity and combinations of these.",
                        "links": [
                            {
                                "title": "Web Content Accessibility Guidelines (WCAG) 2.0",
                                "url": "https://www.w3.org/TR/WCAG20/"
                            },
                            {
                                "title": "Aria W3C",
                                "url": "https://www.w3.org/WAI/standards-guidelines/aria/"
                            },
                            {
                                "title": "Aria MDN",
                                "url": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA"
                            },
                            {
                                "title": "Lighthouse Web",
                                "url": "https://web.dev/measure?gclid=CjwKCAjwwvfrBRBIEiwA2nFiPVs_xUQP_D_Jz2L3f3R61vGvRbTg2kP4d-Ra3LGqL3k57MrLgnivtBoCdEsQAvD_BwE"
                            },
                            {
                                "title": "Lighthouse Chrome Dev Tools",
                                "url": "https://developers.google.com/web/tools/lighthouse/"
                            },
                            {
                                "title": "Axe Deque",
                                "url": "https://www.deque.com/axe/"
                            },
                            {
                                "title": "Axe Chrome Store",
                                "url": "https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US"
                            }
                        ]
                    },
                    {
                        "category": "Source Control",
                        "title": "GitHub",
                        "subTitle": "How people build software",
                        "text": "Brings together the world's largest community of developers to discover, share, and build better software.",
                        "links": [
                            {
                                "title": "My Repositories",
                                "url": "https://github.com/sarmbrec"
                            },
                            {
                                "title": "GitHub",
                                "url": "https://github.com/"
                            }
                        ]
                    },
                    {
                        "category": "Server side technology",
                        "title": "ASP.NET",
                        "subTitle": "Free. Cross-platform. Open source.",
                        "text": "A framework for building web apps and services with .NET and C#.",
                        "links": [
                            {
                                "title": "Microsoft",
                                "url": "https://dotnet.microsoft.com/apps/aspnet"
                            },
                            {
                                "title": "ASP.NET",
                                "url": "https://asp.net/"
                            }
                        ]
                    },
                    {
                        "category": "Server side technology",
                        "title": "SQL Server",
                        "subTitle": "Intelligence and security are built in",
                        "text": "A relational database management system (RDBMS) developed and marketed by Microsoft. As a database server, the primary function of the SQL Server is to store and retrieve data used by other applications.",
                        "links": [
                            {
                                "title": "SQL Server - Microsoft",
                                "url": "https://www.microsoft.com/en-us/sql-server/default.aspx"
                            },
                            {
                                "title": "ASP.NET MVC - Databases",
                                "url": "https://www.tutorialspoint.com/asp.net_mvc/asp.net_mvc_databases.htm"
                            }
                        ]
                    }
                ];
            }
        });
})();