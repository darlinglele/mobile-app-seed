/*** Created by zhixiong on 12/19/14.*/
/***All that awesome start here*/

require.config({
    paths: {
        angular: "../bower_components/angular/angular.min",
        angularRoute: '../bower_components/angular-route/angular-route.min',
        angularResource: '../bower_components/angular-resource/angular-resource.min',
        jquery: "../bower_components/jquery/dist/jquery.min",
        framework7: "../bower_components/framework7/dist/js/framework7.min"
    },
    shim: {
        'angular': {'exports': 'angular'},
        'angularRoute': ['angular'],
        'angularResource': ['angular'],
        'jquery': {'exports': 'jquery'},
        'framework7': {'exports': 'Framework7'}
    },
    priority: [
        "angular"
    ]
});

window.name = "NG_DEFER_BOOTSTRAP!";

require(['jquery', 'angular', 'framework7', 'mobile'], function ($, angular, framework7, mobile) {
    $(document).ready(function () {
        //Compile template by angular manual, visit github wiki to see why.
        angular.bootstrap(this, [mobile['name']]);

        //Create framework app ;
        var framework = new framework7();
        framework.addView('.view-main', {});

        //Load and compile report angular template before animation dynamically
        framework.onPageBeforeAnimation('report', function (page) {
            angular.module('mobile.controllers').controller('ReportDetailController', ['$scope', 'reports', function ($scope, reports) {
                $scope.report = reports.get({id: page.query.id % 2});
            }]);
            var reportPage = $('[data-page=report].page');
            var injector = angular.injector(['mobile']);
            var $compile = injector.get('$compile');
            var template = reportPage.html();
            reportPage.empty();
            var linkFn = $compile(template);
            var $rootScope = injector.get('$rootScope');
            var elem = linkFn($rootScope);
            $rootScope.$digest();
            reportPage.append(elem);
        });

        //Slide the report content
        framework.onPageAfterAnimation('report', function (page) {
            framework.slider('.slider-container', {
                pagination: '.slider-pagination',
                direction: 'vertical',
                paginationHide: false
            });
        });
    });
});
