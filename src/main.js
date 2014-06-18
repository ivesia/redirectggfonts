/* global chrome */
"use strict";
(function (chrome) {
    chrome.webRequest.onBeforeRequest.addListener(function (details) {
        var redirectUrl = '';
        if (details.url.indexOf('fonts.googleapis.com') !== -1) {
            redirectUrl = details.url.replace(/\/\/fonts\.googleapis\.com/, '//fonts.useso.com');
            return {redirectUrl: redirectUrl};
        }
        if (details.url.indexOf('ajax.googleapis.com') !== -1) {
            redirectUrl = details.url.replace(/\/\/ajax\.googleapis\.com/, '//ajax.useso.com');
            return {redirectUrl: redirectUrl};
        }
        if (details.url.indexOf('themes.googleusercontent.com') !== -1) {
            redirectUrl = details.url.replace(/\/\/themes\.googleusercontent\.com/, '//fontscontent.useso.com');
            return {redirectUrl: redirectUrl};
        }
    },
    {
        /* useso 暂时只支持 http 协议，所以这里先做 http 协议的 */
        urls: [
            'http://fonts.googleapis.com/*',
            'http://ajax.googleapis.com/*',
            'http://themes.googleusercontent.com/static/fonts/*'
        ]
    },
    ['blocking']);
}(chrome));
