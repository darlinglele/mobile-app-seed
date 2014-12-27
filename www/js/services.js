/**
 * Created by zhixiong on 12/23/14.
 */
/***App level services define by angular js*/

define(['angular', 'angularResource'], function (angular) {
    var mobileServices = angular.module('mobile.services', ['ngResource']);

    mobileServices.factory('reports', ['$resource', function ($resource) {
        return $resource('reports/:id.json', {}, {
                query: {method: 'GET', params: {id: 'reports'}, isArray: true}
            }
        );
    }]);

    mobileServices.factory('categories', ['$resource', function ($resource) {
        return $resource('reports/categories.json', {}, {
                query: {method: 'GET', params: {id: 'categories'}, isArray: true}
            }
        );
    }]);
    return mobileServices;
});

