(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"+LeE":function(e,t,a){"use strict";a.r(t);var n=a("MVZn"),s=a.n(n),r=a("o0o1"),c=a.n(r),o=a("dCQc");t["default"]={namespace:"monitor",state:{tags:[]},effects:{fetchTags:c.a.mark(function e(t,a){var n,s,r;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.call,s=a.put,e.next=3,n(o["o"]);case 3:return r=e.sent,e.next=6,s({type:"saveTags",payload:r.list});case 6:case"end":return e.stop()}},e,this)})},reducers:{saveTags:function(e,t){return s()({},e,{tags:t.payload})}}}}}]);