/*!
 * jQuery Style Listener
 * http://techfoobar.com/jquery-style-listener/
 * 
 * Copyright (c) 2013 Vijayakrishnan Krishnan
 * Released under the MIT License
 * http://techfoobar.com/jquery-style-listener/LICENSE.MIT
 */
(function(c){c.fn.styleListener=function(f){if(typeof f=="object"){var g=(f.styles!=undefined&&c.isArray(f.styles))?f.styles:[],h=(f.changed!=undefined&&typeof f.changed=="function")?f.changed:function(){},e=f.interval!=undefined?f.interval:250;this.each(function(){var i=c(this);b(i,g);d(i,g,h,e)})}else{if(typeof f=="string"){switch(f){case"destroy":this.each(function(){var i=c(this);if(i.data("stlI")!=undefined){i.removeData("stlI")}if(i.data("stliT")!=undefined){clearInterval(i.data("stliT"));i.removeData("stliT")}});break}}}};function b(f,g){var h={},e;for(e=0;e<g.length;e++){h[g[e]]=a(f.get(0))[g[e]]}f.data("stlI",h)}function d(f,g,i,e){var h=setInterval(function(){var j="not-set",k,l="";for(k=0;k<g.length;k++){l=f.data("stlI")[g[k]];j=a(f.get(0))[g[k]];if(l!==j){i(g[k],j,l,f)}f.data("stlI")[g[k]]=j}},e);f.data("stliT",h)}function a(e){var f=null;if(window.getComputedStyle&&typeof window.getComputedStyle=="function"){f=window.getComputedStyle(e)}else{if(e.currentStyle){f=e.currentStyle}}return f}})(jQuery);