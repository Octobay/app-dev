(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{885:function(t,e,r){"use strict";r.r(e);var n=r(1),o=r(14);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={mixins:[r(46).a],data:function(){return{targetNetworkId:"42"}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)(["networkId"]))},f=r(11),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card bg-primary border-0 text-white shadow-sm d-flex flex-column",on:{click:function(t){t.stopPropagation()}}},[r("div",{staticClass:"card-body"},[r("h5",{staticClass:"text-center mb-3"},[r("font-awesome-icon",{attrs:{icon:["fas","exclamation-triangle"]}}),t._v("\n      Wrong Network!\n    ")],1),t._v(" "),r("p",{staticClass:"m-0"},[t._v("\n      You are not connected to the expected network. Please connect to\n      "+t._s(t.networkName(t.targetNetworkId))+".\n    ")])])])}),[],!1,null,null,null);e.default=component.exports}}]);