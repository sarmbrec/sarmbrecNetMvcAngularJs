﻿using System.Web;
using System.Web.Optimization;

namespace sarmbrecNetMvcAngularJs
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery-validate/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            //bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
            //            "~/Scripts/modernizr-*"));


            bundles.Add(new ScriptBundle("~/bundles/material-design-lite").Include(
                      "~/Scripts/material-design-lite/material-min.js"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap3/bootstrap.js"));

            bundles.Add(new ScriptBundle("~/bundles/angularJS").Include(
                "~/Scripts/angularjs/angular.js",
                "~/Scripts/angularjs/angular-route.js",
                "~/Scripts/angularJsApp/app.module.js",
                "~/Scripts/angularJsApp/app.config.js"
                ));

            bundles.Add(new ScriptBundle("~/bundles/knowledgeBase").Include(
                "~/Scripts/angularJsApp/knowledge-base/knowledge-base.module.js",
                "~/Scripts/angularJsApp/knowledge-base/knowledge-base.component.js",

                "~/Scripts/angularJsApp/knowledge-base/tech-stack/angularjs/angularjs.module.js",
                "~/Scripts/angularJsApp/knowledge-base/tech-stack/angularjs/angularjs.component.js"

            ));

            bundles.Add(new ScriptBundle("~/bundles/phoneDetail").Include(
                "~/Scripts/angularJsApp/phone-detail/phone-detail.module.js",
                "~/Scripts/angularJsApp/phone-detail/phone-detail.component.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/header").Include(
                "~/Scripts/angularJsApp/header/header.module.js",
                "~/Scripts/angularJsApp/header/header.component.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/carousel").Include(
                "~/Scripts/angularJsApp/carousel/carousel.module.js",
                "~/Scripts/angularJsApp/carousel/carousel.component.js"
            ));


            //bundles.Add(new StyleBundle("~/Content/material-design-lite").Include(
            //        "~/Content/material-design-lite/material.min.css"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                    //"~/Content/bootstrap.css",
                    //"~/Content/site.css"));
                    "~/Content/sarmbrec.min.css"));
        }
    }
}
