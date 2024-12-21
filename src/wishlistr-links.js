// ==UserScript==
// @name         Wishlistr Links
// @namespace    http://tampermonkey.net/
// @version      2024-12-21
// @description  Replace Wishlistr wishlist link hrefs with the direct link URL
// @author       lucidmachine
// @match        https://www.wishlistr.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=wishlistr.com
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  document
    .querySelectorAll('.item-link a')
    .forEach(link => { link.href = link.title; });
})();
