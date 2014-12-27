/*** Created by zhixiong on 12/19/14.*/
/***Mobile module.*/

'use strict';

define([
    'angular',
    'angularRoute',
    'controllers'
], function (angular) {
    var mobile =angular.module('mobile', ['ngRoute','mobile.controllers']);
    return mobile;
});