(this["webpackJsonpadmin-hire-tool-frontend"]=this["webpackJsonpadmin-hire-tool-frontend"]||[]).push([[43],{1358:function(e,t,a){"use strict";a.r(t);var n=a(51),r=a(52),i=a(60),s=a(59),o=a(1),l=a.n(o),u=a(45),c=a(117),p=a(41),f=a(539),d=a(112),g=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).handlePagination=function(t){e.setState({page:t.selected+1})},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){d.a.pageview(window.location.pathname),this.props.FeatureAction.actionRequest()}},{key:"render",value:function(){var e=this,t=[];return t.push({no:1,pname:"ksjghdj",lname:"ksjfjgkd",patientdob:"hfdbj"}),t.push({no:2,pname:"ksjghdj",lname:"ksjfjgkd",patientdob:"hfdbj"}),l.a.createElement("div",{className:"container my-5"},l.a.createElement("div",null,l.a.createElement(f.a,{data:t,columns:[{Header:"NO",accessor:"no",minWidth:100},{Header:"First Name",accessor:"pname",minWidth:100},{Header:"Last Name",accessor:"lname",minWidth:100},{Header:"Patient DOB",accessor:"patientdob",minWidth:100}],handlePageClick:function(t){e.handlePagination(t)},totalPage:3})))}}]),a}(l.a.Component);t.default=Object(u.b)((function(e){return{FeatureReducer:e.FeatureReducer}}),(function(e){return{FeatureAction:Object(p.b)(c,e)}}))(g)},525:function(e,t,a){(function(t){var n;e.exports=(n=a(1),function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=4)}([function(e,t,a){e.exports=a(2)()},function(e,t){e.exports=n},function(e,t,a){"use strict";var n=a(3);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,a,r,i,s){if(s!==n){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return a.PropTypes=a,a}},function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(0),s=a.n(i);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var l=function(e){var t=e.pageClassName,a=e.pageLinkClassName,n=e.page,i=e.selected,s=e.activeClassName,l=e.activeLinkClassName,u=e.getEventListener,c=e.pageSelectedHandler,p=e.href,f=e.extraAriaContext,d=e.pageLabelBuilder,g=e.ariaLabel||"Page "+n+(f?" "+f:""),b=null;return i&&(b="page",g=e.ariaLabel||"Page "+n+" is your current page",t=void 0!==t?t+" "+s:s,void 0!==a?void 0!==l&&(a=a+" "+l):a=l),r.a.createElement("li",{className:t},r.a.createElement("a",o({role:"button",className:a,href:p,tabIndex:"0","aria-label":g,"aria-current":b,onKeyPress:c},u(c)),d(n)))};l.propTypes={pageSelectedHandler:s.a.func.isRequired,selected:s.a.bool.isRequired,pageClassName:s.a.string,pageLinkClassName:s.a.string,activeClassName:s.a.string,activeLinkClassName:s.a.string,extraAriaContext:s.a.string,href:s.a.string,ariaLabel:s.a.string,page:s.a.number.isRequired,getEventListener:s.a.func.isRequired,pageLabelBuilder:s.a.func.isRequired};var u=l;function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var p=function(e){var t=e.breakLabel,a=e.breakClassName,n=e.breakLinkClassName,i=e.breakHandler,s=e.getEventListener,o=a||"break";return r.a.createElement("li",{className:o},r.a.createElement("a",c({className:n,role:"button",tabIndex:"0",onKeyPress:i},s(i)),t))};p.propTypes={breakLabel:s.a.oneOfType([s.a.string,s.a.node]),breakClassName:s.a.string,breakLinkClassName:s.a.string,breakHandler:s.a.func.isRequired,getEventListener:s.a.func.isRequired};var f=p;function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function b(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?m(e):t}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(i,e);var t,a,n=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=y(e);if(t){var r=y(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return v(this,a)}}(i);function i(e){var t,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),C(m(t=n.call(this,e)),"handlePreviousPage",(function(e){var a=t.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,a>0&&t.handlePageSelected(a-1,e)})),C(m(t),"handleNextPage",(function(e){var a=t.state.selected,n=t.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,a<n-1&&t.handlePageSelected(a+1,e)})),C(m(t),"handlePageSelected",(function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1,t.state.selected!==e?(t.setState({selected:e}),t.callCallback(e)):t.callActiveCallback(e)})),C(m(t),"getEventListener",(function(e){return C({},t.props.eventListener,e)})),C(m(t),"handleBreakClick",(function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1;var n=t.state.selected;t.handlePageSelected(n<e?t.getForwardJump():t.getBackwardJump(),a)})),C(m(t),"callCallback",(function(e){void 0!==t.props.onPageChange&&"function"==typeof t.props.onPageChange&&t.props.onPageChange({selected:e})})),C(m(t),"callActiveCallback",(function(e){void 0!==t.props.onPageActive&&"function"==typeof t.props.onPageActive&&t.props.onPageActive({selected:e})})),C(m(t),"pagination",(function(){var e=[],a=t.props,n=a.pageRangeDisplayed,i=a.pageCount,s=a.marginPagesDisplayed,o=a.breakLabel,l=a.breakClassName,u=a.breakLinkClassName,c=t.state.selected;if(i<=n)for(var p=0;p<i;p++)e.push(t.getPageElement(p));else{var d,g,b,h=n/2,v=n-h;c>i-n/2?h=n-(v=i-c):c<n/2&&(v=n-(h=c));var m=function(e){return t.getPageElement(e)};for(d=0;d<i;d++)(g=d+1)<=s||g>i-s||d>=c-h&&d<=c+v?e.push(m(d)):o&&e[e.length-1]!==b&&(b=r.a.createElement(f,{key:d,breakLabel:o,breakClassName:l,breakLinkClassName:u,breakHandler:t.handleBreakClick.bind(null,d),getEventListener:t.getEventListener}),e.push(b))}return e})),a=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,t.state={selected:a},t}return t=i,(a=[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,a=e.disableInitialCallback,n=e.extraAriaContext;void 0===t||a||this.callCallback(t),n&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.")}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:this.props.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,t=this.props,a=t.pageCount,n=e+t.pageRangeDisplayed;return n>=a?a-1:n}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var t=this.props,a=t.hrefBuilder,n=t.pageCount;if(a&&e!==this.state.selected&&e>=0&&e<n)return a(e+1)}},{key:"ariaLabelBuilder",value:function(e){var t=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var a=this.props.ariaLabelBuilder(e+1,t);return this.props.extraAriaContext&&!t&&(a=a+" "+this.props.extraAriaContext),a}}},{key:"getPageElement",value:function(e){var t=this.state.selected,a=this.props,n=a.pageClassName,i=a.pageLinkClassName,s=a.activeClassName,o=a.activeLinkClassName,l=a.extraAriaContext,c=a.pageLabelBuilder;return r.a.createElement(u,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:t===e,pageClassName:n,pageLinkClassName:i,activeClassName:s,activeLinkClassName:o,extraAriaContext:l,href:this.hrefBuilder(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,pageLabelBuilder:c,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props,t=e.disabledClassName,a=e.pageCount,n=e.containerClassName,i=e.previousLabel,s=e.previousClassName,o=e.previousLinkClassName,l=e.previousAriaLabel,u=e.prevRel,c=e.nextLabel,p=e.nextClassName,f=e.nextLinkClassName,d=e.nextAriaLabel,b=e.nextRel,h=this.state.selected,v=s+(0===h?" ".concat(t):""),m=p+(h===a-1?" ".concat(t):""),y=0===h?"true":"false",C=h===a-1?"true":"false";return r.a.createElement("ul",{className:n},r.a.createElement("li",{className:v},r.a.createElement("a",g({className:o,href:this.hrefBuilder(h-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":y,"aria-label":l,rel:u},this.getEventListener(this.handlePreviousPage)),i)),this.pagination(),r.a.createElement("li",{className:m},r.a.createElement("a",g({className:f,href:this.hrefBuilder(h+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":C,"aria-label":d,rel:b},this.getEventListener(this.handleNextPage)),c)))}}])&&b(t.prototype,a),i}(n.Component);C(P,"propTypes",{pageCount:s.a.number.isRequired,pageRangeDisplayed:s.a.number.isRequired,marginPagesDisplayed:s.a.number.isRequired,previousLabel:s.a.node,previousAriaLabel:s.a.string,prevRel:s.a.string,nextLabel:s.a.node,nextAriaLabel:s.a.string,nextRel:s.a.string,breakLabel:s.a.oneOfType([s.a.string,s.a.node]),hrefBuilder:s.a.func,onPageChange:s.a.func,onPageActive:s.a.func,initialPage:s.a.number,forcePage:s.a.number,disableInitialCallback:s.a.bool,containerClassName:s.a.string,pageClassName:s.a.string,pageLinkClassName:s.a.string,pageLabelBuilder:s.a.func,activeClassName:s.a.string,activeLinkClassName:s.a.string,previousClassName:s.a.string,nextClassName:s.a.string,previousLinkClassName:s.a.string,nextLinkClassName:s.a.string,disabledClassName:s.a.string,breakClassName:s.a.string,breakLinkClassName:s.a.string,extraAriaContext:s.a.string,ariaLabelBuilder:s.a.func,eventListener:s.a.string}),C(P,"defaultProps",{pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextRel:"next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(e){return e},eventListener:"onClick"}),t.default=P}]))}).call(this,a(162))},526:function(e,t,a){},527:function(e,t,a){e.exports=a.p+"static/media/backPagination.5e60bf31.svg"},528:function(e,t,a){e.exports=a.p+"static/media/nextPagination.d6154b17.svg"},529:function(e,t,a){"use strict";var n=a(68),r=a(69);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a(1)),s=(0,n(a(70)).default)(i.createElement("path",{d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"}),"KeyboardArrowLeft");t.default=s},530:function(e,t,a){"use strict";var n=a(68),r=a(69);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a(1)),s=(0,n(a(70)).default)(i.createElement("path",{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}),"KeyboardArrowRight");t.default=s},539:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a(51),r=a(52),i=a(60),s=a(59),o=a(1),l=a.n(o),u=a(325),c=(a(317),a(525)),p=a.n(c),f=(a(526),a(527),a(528),a(530)),d=a.n(f),g=a(529),b=a.n(g),h=(l.a.Component,function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"white-table ".concat(this.props.className)},l.a.createElement(u.a,{style:{width:this.props.width?this.props.width:"",justifyContent:this.props.justifyContent?this.props.justifyContent:""},display:this.props.display,data:this.props.data,columns:this.props.columns,width:this.props.width,sortable:!1,filterable:!1,resizable:!!this.props.resizable&&this.props.resizable,showPagination:!this.props.nopagination,showPageSizeOptions:!0,defaultPageSize:10,noDataText:"No data found",minRows:1,defaultPage:this.props.pageNum?this.props.pageNum:1,getTrProps:this.props.onRowClick,totalPage:void 0===this.props.totalPage?0:this.props.totalPage,justifyContent:this.props.justifyContent,handlePageClick:this.props.handlePageClick}))}}]),a}(o.Component))}}]);
//# sourceMappingURL=43.394f9ef8.chunk.js.map