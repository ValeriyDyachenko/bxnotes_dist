(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"8MEG":function(e,t,n){"use strict";var r=n("2OiF"),o=n("0/R4"),c=n("MfQN"),a=[].slice,i={},u=function(e,t,n){if(!(t in i)){for(var r=[],o=0;o<t;o++)r[o]="a["+o+"]";i[t]=Function("F,a","return new F("+r.join(",")+")")}return i[t](e,n)};e.exports=Function.bind||function(e){var t=r(this),n=a.call(arguments,1),i=function(){var r=n.concat(a.call(arguments));return this instanceof i?u(t,r.length,r):c(t,r,e)};return o(t.prototype)&&(i.prototype=t.prototype),i}},"A2+M":function(e,t,n){var r=n("X8hv");e.exports={MDXRenderer:r}},I5cv:function(e,t,n){var r=n("XKFU"),o=n("Kuth"),c=n("2OiF"),a=n("y3w9"),i=n("0/R4"),u=n("eeVq"),l=n("8MEG"),f=(n("dyZX").Reflect||{}).construct,p=u((function(){function e(){}return!(f((function(){}),[],e)instanceof e)})),s=!u((function(){f((function(){}))}));r(r.S+r.F*(p||s),"Reflect",{construct:function(e,t){c(e),a(t);var n=arguments.length<3?e:c(arguments[2]);if(s&&!p)return f(e,t,n);if(e==n){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var r=[null];return r.push.apply(r,t),new(l.apply(e,r))}var u=n.prototype,d=o(i(u)?u:Object.prototype),m=Function.apply.call(e,d,t);return i(m)?m:d}})},X8hv:function(e,t,n){function r(e,t,n){return(r=o()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&c(o,n.prototype),o}).apply(null,arguments)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n("jm62"),n("yt8O"),n("RW0V"),n("rGqo"),n("rE2o"),n("ioFf"),n("XfO3"),n("HEwt"),n("f3/d"),n("a1Th"),n("Btvt"),n("I5cv"),n("I5cv"),n("f3/d"),n("a1Th"),n("XfO3"),n("HEwt"),n("rE2o"),n("jm62"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var p=n("q1tI"),s=n("7ljp"),d=s.useMDXComponents,m=s.mdx,y=n("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,n=e.components,o=e.children,c=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["scope","components","children"]),i=d(n),u=y(t),f=p.useMemo((function(){if(!o)return null;var e=l({React:p,mdx:m},u),t=Object.keys(e),n=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(a(t),[""+o])).apply(void 0,[{}].concat(a(n)))}),[o,t]);return p.createElement(f,l({components:i},c))}},hpdF:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),c=n("A2+M"),a=n("qhky"),i=(n("xfY5"),n("pIFo"),n("WFMo")),u=n("vOnD"),l=n("4IjA"),f=n("oDdI"),p=n("6bCp"),s=u.default.div.withConfig({displayName:"articleInfo__AdditionalInfo",componentId:"gbeo3j-0"})(["display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between;align-items:center;order:1;"]),d=u.default.div.withConfig({displayName:"articleInfo__OriginWrapper",componentId:"gbeo3j-1"})(["width:238px;margin-top:20px;flex-grow:1;margin:"," ",";"],Object(f.a)(.5),Object(f.a)(.5)),m=u.default.div.withConfig({displayName:"articleInfo__Origin",componentId:"gbeo3j-2"})(["display:flex;align-items:center;font-weight:300;border-right:2px solid ",";padding:0 24px 0 0;margin-left:-24px;text-align:right;height:44px;justify-content:flex-end;& a{font-weight:300;display:contents;}"],(function(e){return e.theme.global.hover})),y=function(e){var t=e.slug,n=e.origin,r=e.date;if(!Object(l.e)(t))return null;var c=("https://github.com/ValeriyDyachenko/bxnotes/blob/master"+t.replace(/^\/conspect\//,"/content/")).replace(/\/$/,".md");return o.a.createElement(s,null,o.a.createElement(p.a,{href:c,size:"md",view:"outline"},o.a.createElement(i.b,null),"   редактировать статью"),o.a.createElement(d,null,n&&o.a.createElement(m,{dangerouslySetInnerHTML:{__html:"Источник &mdash;&nbsp;"+n}}),r&&o.a.createElement(m,null,"обновлено"," ",new Date(Number(r)).toLocaleString("ru",{year:"numeric",month:"long",day:"numeric"}))))},b=u.default.hr.withConfig({displayName:"conspect__StyledHr",componentId:"sc-1rxagvt-0"})(["margin:-"," 0 ",";"],Object(f.a)(.5),Object(f.a)(1.75));t.default=function(e){var t=e.location,n=e.pageContext,r=n.body,i=n.title,u=n.description,l=n.keywords,f=n.origin,p=n.date,s=decodeURI(t.pathname);return o.a.createElement(o.a.Fragment,null,o.a.createElement(a.a,null,o.a.createElement("title",null,i," | bxnotes"),o.a.createElement("meta",{name:"description",content:u}),o.a.createElement("meta",{name:"keywords",content:l})),o.a.createElement("h1",null,i),o.a.createElement(b,null),o.a.createElement(c.MDXRenderer,null,r),o.a.createElement(y,{slug:s,origin:f,date:p}))}}}]);
//# sourceMappingURL=component---src-layout-conspect-tsx-edfaad18d1741e3aa1e6.js.map