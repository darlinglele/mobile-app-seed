/*** Created by zhixiong on 12/19/14.*/
/***App level controllers by angular js*/

define(['app.config', 'angular', 'services'], function (config, angular, services) {

    var mobileAppControllers = angular.module('mobile.controllers', ['mobile.services']);

    mobileAppControllers.controller('InitializationController', ['$scope', function ($scope) {
        $scope.appName =config.appName;
    }]);

    mobileAppControllers.controller('ReportListController', ['$scope', 'reports', 'categories', function ($scope, reports, categories) {
        $scope.appHeader = config.appHeader;
        $scope.categories = categories.query();
    }]);

    return mobileAppControllers;
});

