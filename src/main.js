/* global chrome */
"use strict";
(function (chrome) {
    chrome.webRequest.onBeforeRequest.addListener(function (details) {
        var redirectUrl = '';
        if (details.url.indexOf('fonts.googleapis.com') !== -1) {
            redirectUrl = details.url.replace(/\/\/fonts\.googleapis\.com/, '//fonts.lug.ustc.edu.cn');
            return {redirectUrl: redirectUrl};
        }
        if (details.url.indexOf('ajax.googleapis.com') !== -1) {
            redirectUrl = details.url.replace(/\/\/ajax\.googleapis\.com/, '//ajax.lug.ustc.edu.cn');
            return {redirectUrl: redirectUrl};
        }
        if (details.url.indexOf('themes.googleusercontent.com') !== -1) {
            redirectUrl = details.url.replace(/\/\/themes\.googleusercontent\.com/, '//google-themes.lug.ustc.edu.cn');
            return {redirectUrl: redirectUrl};
        }
        if (details.url.indexOf('fonts.gstatic.com') !== -1) {
            redirectUrl = details.url.replace(/\/\/fonts\.gstatic\.com/, '//fonts-gstatic.lug.ustc.edu.cn');
            return {redirectUrl: redirectUrl};
        }
    },
    {
        /* useso 暂时只支持 http 协议，所以这里先做 http 协议的 */
        urls: [
            '*://fonts.googleapis.com/*',
            '*://ajax.googleapis.com/*',
            '*://themes.googleusercontent.com/static/fonts/*',
            '*://fonts.gstatic.com/*',
        ]
    },
    ['blocking']);
}(chrome));
