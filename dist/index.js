'use strict';var React=require('react'),material=require('@mui/material'),compare=require('@pdg/compare'),formatting=require('@pdg/formatting'),reactComponent=require('@pdg/react-component'),reactForm=require('@pdg/react-form'),reactHook=require('@pdg/react-hook'),core=require('@dnd-kit/core'),sortable=require('@dnd-kit/sortable'),uuid=require('uuid'),reactIntersectionObserver=require('react-intersection-observer');function _interopNamespaceDefault(e){var n=Object.create(null);if(e){Object.keys(e).forEach(function(k){if(k!=='default'){var d=Object.getOwnPropertyDescriptor(e,k);Object.defineProperty(n,k,d.get?d:{enumerable:true,get:function(){return e[k]}});}})}n.default=e;return Object.freeze(n)}var React__namespace=/*#__PURE__*/_interopNamespaceDefault(React);function insertStyle(css) {
    if (typeof window === 'undefined')
        return;
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}insertStyle(".simplebar-track.simplebar-vertical{width:8px !important}.simplebar-track.simplebar-vertical .simplebar-scrollbar.simplebar-visible:before{opacity:.3 !important}.PTable .PTableHead .PTableHeadRow th{position:relative;transform:translateY(-100%)}.PTable.sticky-header .PTableHead .PTableHeadRow th{position:sticky;transform:none}");/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


var __assign$2 = function() {
    __assign$2 = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign$2.apply(this, arguments);
};

function __rest$1(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}
typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}var classnames = {exports: {}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

var hasRequiredClassnames;

function requireClassnames () {
	if (hasRequiredClassnames) return classnames.exports;
	hasRequiredClassnames = 1;
	(function (module) {
		/* global define */

		(function () {

			var hasOwn = {}.hasOwnProperty;

			function classNames () {
				var classes = '';

				for (var i = 0; i < arguments.length; i++) {
					var arg = arguments[i];
					if (arg) {
						classes = appendClass(classes, parseValue(arg));
					}
				}

				return classes;
			}

			function parseValue (arg) {
				if (typeof arg === 'string' || typeof arg === 'number') {
					return arg;
				}

				if (typeof arg !== 'object') {
					return '';
				}

				if (Array.isArray(arg)) {
					return classNames.apply(null, arg);
				}

				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					return arg.toString();
				}

				var classes = '';

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes = appendClass(classes, key);
					}
				}

				return classes;
			}

			function appendClass (value, newClass) {
				if (!newClass) {
					return value;
				}
			
				if (value) {
					return value + ' ' + newClass;
				}
			
				return value + newClass;
			}

			if (module.exports) {
				classNames.default = classNames;
				module.exports = classNames;
			} else {
				window.classNames = classNames;
			}
		}()); 
	} (classnames));
	return classnames.exports;
}var classnamesExports = requireClassnames();
var classNames = /*@__PURE__*/getDefaultExportFromCjs(classnamesExports);var Label = material.styled(material.Box)(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  font-size: 12px;\n  font-weight: bold;\n"], ["\n  font-size: 12px;\n  font-weight: bold;\n"])));
var ValueWrap = material.styled(material.Box)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-top: 3px;\n  position: relative;\n  display: flex;\n  flex-direction: row;\n"], ["\n  margin-top: 3px;\n  position: relative;\n  display: flex;\n  flex-direction: row;\n"])));
var Value = material.styled('div')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  flex: 1;\n"], ["\n  flex: 1;\n"])));
var ValueEllipsis = material.styled('div')(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  flex: 1;\n  position: relative;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"], ["\n  flex: 1;\n  position: relative;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"])));
var ValueClipboard = material.styled('div')(templateObject_5 || (templateObject_5 = __makeTemplateObject([""], [""])));
var ClipboardIconButton = material.styled(material.IconButton)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  margin-top: -10px;\n  margin-bottom: -10px;\n"], ["\n  margin-top: -10px;\n  margin-bottom: -10px;\n"])));
var Line = material.styled('div')(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  border-top: 1px solid #efefef;\n  height: 1px;\n  flex: 1;\n"], ["\n  border-top: 1px solid #efefef;\n  height: 1px;\n  flex: 1;\n"])));
var templateObject_1$4, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;function getTableColumnAlign(column, defaultAlign) {
    switch (column.type) {
        case 'number':
            return column.align ? column.align : 'right';
        default:
            return column.align || defaultAlign;
    }
}
function combineSx() {
    var sx = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sx[_i] = arguments[_i];
    }
    var finalSx = [];
    if (Array.isArray(finalSx)) {
        sx.forEach(function (v) { return v && finalSx.push.apply(finalSx, (Array.isArray(v) ? v : [v])); });
    }
    return finalSx;
}
function typographyColorToSxColor(color) {
    if (typeof color === 'string') {
        if (['primary', 'secondary', 'info', 'warning', 'error'].includes(color)) {
            return "".concat(color, ".main");
        }
        else if (color === 'text') {
            return 'text.primary';
        }
        else {
            return color;
        }
    }
    else {
        return color;
    }
}var dayjs_min$1 = {exports: {}};var dayjs_min = dayjs_min$1.exports;

var hasRequiredDayjs_min;

function requireDayjs_min () {
	if (hasRequiredDayjs_min) return dayjs_min$1.exports;
	hasRequiredDayjs_min = 1;
	(function (module, exports) {
		!function(t,e){module.exports=e();}(dayjs_min,(function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",c="month",f="quarter",h="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return "["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return !r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return (e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return -t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,u=e.clone().add(r+(s?-1:1),c);return +(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return {M:c,y:h,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",D={};D[g]=M;var p="$isDayjsObject",S=function(t){return t instanceof _||!(!t||!t[p])},w=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else {var a=e.name;D[a]=e,i=a;}return !r&&i&&(g=i),i||!r&&g},O=function(t,e){if(S(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},b=v;b.l=w,b.i=S,b.w=function(t,e){return O(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=w(t.locale,null,true),this.parse(t),this.$x=this.$x||t.x||{},this[p]=true;}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.init();},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds();},m.$utils=function(){return b},m.isValid=function(){return !(this.$d.toString()===l)},m.isSame=function(t,e){var n=O(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return O(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<O(t)},m.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!b.u(e)||e,f=b.p(t),l=function(t,e){var i=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return b.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(f){case h:return r?l(1,0):l(31,11);case c:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,false)},m.$set=function(t,e){var n,o=b.p(t),f="set"+(this.$u?"UTC":""),l=(n={},n[a]=f+"Date",n[d]=f+"Date",n[c]=f+"Month",n[h]=f+"FullYear",n[u]=f+"Hours",n[s]=f+"Minutes",n[i]=f+"Seconds",n[r]=f+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===c||o===h){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d;}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[b.p(t)]()},m.add=function(r,f){var d,l=this;r=Number(r);var $=b.p(f),y=function(t){var e=O(l);return b.w(e.date(e.date()+Math.round(t*r)),l)};if($===c)return this.set(c,this.$M+r);if($===h)return this.set(h,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return b.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=b.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,c=n.months,f=n.meridiem,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return b.s(s%12||12,t,"0")},$=f||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(y,(function(t,r){return r||function(t){switch(t){case "YY":return String(e.$y).slice(-2);case "YYYY":return b.s(e.$y,4,"0");case "M":return a+1;case "MM":return b.s(a+1,2,"0");case "MMM":return h(n.monthsShort,a,c,3);case "MMMM":return h(c,a);case "D":return e.$D;case "DD":return b.s(e.$D,2,"0");case "d":return String(e.$W);case "dd":return h(n.weekdaysMin,e.$W,o,2);case "ddd":return h(n.weekdaysShort,e.$W,o,3);case "dddd":return o[e.$W];case "H":return String(s);case "HH":return b.s(s,2,"0");case "h":return d(1);case "hh":return d(2);case "a":return $(s,u,true);case "A":return $(s,u,false);case "m":return String(u);case "mm":return b.s(u,2,"0");case "s":return String(e.$s);case "ss":return b.s(e.$s,2,"0");case "SSS":return b.s(e.$ms,3,"0");case "Z":return i}return null}(t)||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=this,M=b.p(d),m=O(r),v=(m.utcOffset()-this.utcOffset())*e,g=this-m,D=function(){return b.m(y,m)};switch(M){case h:$=D()/12;break;case c:$=D();break;case f:$=D()/3;break;case o:$=(g-v)/6048e5;break;case a:$=(g-v)/864e5;break;case u:$=g/n;break;case s:$=g/e;break;case i:$=g/t;break;default:$=g;}return l?$:b.a($)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=w(t,e,true);return r&&(n.$L=r),n},m.clone=function(){return b.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),k=_.prototype;return O.prototype=k,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",c],["$y",h],["$D",d]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])};})),O.extend=function(t,e){return t.$i||(t(e,_,O),t.$i=true),O},O.locale=w,O.isDayjs=S,O.unix=function(t){return O(1e3*t)},O.en=D[g],O.Ls=D,O.p={},O})); 
	} (dayjs_min$1));
	return dayjs_min$1.exports;
}var dayjs_minExports = requireDayjs_min();
var dayjs = /*@__PURE__*/getDefaultExportFromCjs(dayjs_minExports);var PInfoTable = function (_a) {
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var cols = _a.cols, _b = _a.spacing, spacing = _b === void 0 ? 2 : _b, columnSpacing = _a.columnSpacing, _c = _a.rowSpacing, rowSpacing = _c === void 0 ? 3 : _c, className = _a.className, style = _a.style, sx = _a.sx, labelClassName = _a.labelClassName, _d = _a.labelColor, labelColor = _d === void 0 ? 'primary' : _d, labelStyle = _a.labelStyle, labelSx = _a.labelSx, _e = _a.dividerColor, dividerColor = _e === void 0 ? 'gray' : _e, valueClassName = _a.valueClassName, valueStyle = _a.valueStyle, valueSx = _a.valueSx, ellipsis = _a.ellipsis, valueUnderline = _a.valueUnderline, info = _a.info, items = _a.items, onCopyToClipboard = _a.onCopyToClipboard;
    var renderItems = React.useMemo(function () {
        return items.filter(function (item) { return !!item && (!item.onHide || !item.onHide(info)); }).map(function (item) {
            /** data */
            var data = undefined;
            if (item.name !== undefined) {
                if (info[item.name] !== undefined) {
                    if (info[item.name] instanceof Date) {
                        data = dayjs(info[item.name]).format('YYYY-MM-DD HH:mm:ss');
                    }
                    else if (info[item.name] instanceof dayjs) {
                        data = info[item.name].format('YYYY-MM-DD HH:mm:ss');
                    }
                    else {
                        data = info[item.name];
                    }
                }
            }
            if (item.onRender) {
                data = item.onRender(info);
            }
            else if (compare.notEmpty(data)) {
                switch (item.type) {
                    case 'number':
                        if (typeof data === 'string' || typeof data === 'number') {
                            data = formatting.formatNumber(data);
                            if (item.numberPrefix) {
                                data = (React.createElement(React.Fragment, null,
                                    React.createElement("span", { style: { opacity: 0.5, marginRight: 2 } }, item.numberPrefix),
                                    data));
                            }
                            if (item.numberSuffix) {
                                data = (React.createElement(React.Fragment, null,
                                    data,
                                    React.createElement("span", { style: { opacity: 0.5, marginLeft: 2 } }, item.numberSuffix)));
                            }
                        }
                        break;
                    case 'tel':
                        if (typeof data === 'string') {
                            data = formatting.formatTelNo(data);
                        }
                        break;
                    case 'email':
                        if (typeof data === 'string') {
                            data = (React.createElement(React.Fragment, null,
                                React.createElement("a", { href: "mailto:".concat(data) }, data)));
                        }
                        break;
                    case 'url':
                        if (typeof data === 'string' && data.toLowerCase().startsWith('http')) {
                            data = (React.createElement(React.Fragment, null,
                                React.createElement("a", { href: data, target: '_blank' }, data)));
                        }
                        break;
                    case 'business_no':
                        if (typeof data === 'string') {
                            data = formatting.formatBusinessNo(data);
                        }
                        break;
                    case 'personal_no':
                        if (typeof data === 'string') {
                            data = formatting.formatPersonalNo(data);
                        }
                        break;
                    case 'date':
                        if (typeof data === 'string' || typeof data === 'number') {
                            data = dayjs(data, item.dateFormat).format('YYYY-MM-DD');
                        }
                        break;
                    case 'datetime':
                        if (typeof data === 'string' || typeof data === 'number') {
                            var dt = dayjs(data, item.dateFormat);
                            data = (React.createElement(React.Fragment, null,
                                React.createElement("span", null, dt.format('YYYY-MM-DD')),
                                item.dateTwoLine ? React.createElement("br", null) : ' ',
                                React.createElement("span", { style: { opacity: 0.5 } }, dt.format('HH:mm:ss'))));
                        }
                        break;
                    case 'date-hour':
                        if (typeof data === 'string' || typeof data === 'number') {
                            var dt = dayjs(data, item.dateFormat);
                            data = (React.createElement(React.Fragment, null,
                                React.createElement("span", null, dt.format('YYYY-MM-DD')),
                                item.dateTwoLine ? React.createElement("br", null) : ' ',
                                React.createElement("span", { style: { opacity: 0.5 } }, dt.format('HH시'))));
                        }
                        break;
                    case 'date-minute':
                        if (typeof data === 'string' || typeof data === 'number') {
                            var dt = dayjs(data, item.dateFormat);
                            data = (React.createElement(React.Fragment, null,
                                React.createElement("span", null, dt.format('YYYY-MM-DD')),
                                item.dateTwoLine ? React.createElement("br", null) : ' ',
                                React.createElement("span", { style: { opacity: 0.5 } }, dt.format('HH시 MM분'))));
                        }
                        break;
                }
            }
            if (compare.empty(data))
                data = item.onRenderEmpty ? item.onRenderEmpty(info) : React.createElement(React.Fragment, null, "\u00A0");
            /** copyToClipboardText */
            var copyToClipboardText = item.clipboardText || (typeof data === 'string' ? data : typeof data === 'number' ? data.toString() : '');
            /** sizeProps */
            var sizeProps = {};
            if (typeof cols === 'number') {
                sizeProps.xs = 12 / cols;
            }
            else {
                if (cols.xs)
                    sizeProps.xs = 12 / cols.xs;
                if (cols.sm)
                    sizeProps.sm = 12 / cols.sm;
                if (cols.md)
                    sizeProps.md = 12 / cols.md;
                if (cols.lg)
                    sizeProps.lg = 12 / cols.lg;
                if (cols.xl)
                    sizeProps.xl = 12 / cols.xl;
            }
            if (item.xs)
                sizeProps.xs = item.xs;
            if (item.sm)
                sizeProps.sm = item.sm;
            if (item.md)
                sizeProps.md = item.md;
            if (item.lg)
                sizeProps.lg = item.lg;
            if (item.xl)
                sizeProps.xl = item.xl;
            if (item.onXs)
                sizeProps.xs = item.onXs(info);
            if (item.onSm)
                sizeProps.sm = item.onSm(info);
            if (item.onMd)
                sizeProps.md = item.onMd(info);
            if (item.onLg)
                sizeProps.lg = item.onLg(info);
            if (item.onXl)
                sizeProps.xl = item.onXl(info);
            return { item: item, data: data, copyToClipboardText: copyToClipboardText, sizeProps: sizeProps };
        });
    }, [info, items, cols]);
    var content = React.useMemo(function () {
        return renderItems.map(function (_a, idx) {
            var item = _a.item, data = _a.data, copyToClipboardText = _a.copyToClipboardText, sizeProps = _a.sizeProps;
            var finalLabelColor = typographyColorToSxColor(item.type === 'divider' ? item.dividerColor || dividerColor : item.labelColor || labelColor);
            var finalLabelSx = combineSx(labelSx, item.labelSx, !!finalLabelColor && { color: finalLabelColor });
            var finalValueSx = combineSx(valueSx, item.valueSx);
            var valueUnderlineStyle = valueUnderline
                ? { borderBottom: '1px solid #efefef', paddingBottom: 5 }
                : undefined;
            return item.type === 'divider' ? (React.createElement(material.Grid, { key: idx, size: { xs: 12 } },
                React.createElement(material.Stack, { direction: 'row', spacing: 0.5, alignItems: 'center' },
                    item.icon && (React.createElement(reactComponent.PIcon, { sx: { color: item.dividerColor || dividerColor }, size: 'small' }, item.icon)),
                    item.label && (React.createElement(Label, { className: classNames(labelClassName, item.labelClassName), style: __assign$2(__assign$2({}, item.labelStyle), labelStyle), sx: finalLabelSx }, item.label)),
                    item.dividerLine && (React.createElement(React.Fragment, null, item.icon || item.label ? (React.createElement("div", { style: { flex: 1, paddingLeft: 5 } },
                        React.createElement(Line, null))) : (React.createElement(Line, null))))))) : (React.createElement(material.Grid, { key: idx, size: sizeProps, className: item.className, style: item.style, sx: item.sx },
                React.createElement(material.Stack, { direction: 'row', spacing: 0.5, alignItems: 'center' },
                    item.icon && (React.createElement(reactComponent.PIcon, { sx: { color: finalLabelColor }, size: 'small' }, "CalendarMonth")),
                    React.createElement(Label, { className: classNames(labelClassName, item.labelClassName), style: __assign$2(__assign$2({}, item.labelStyle), labelStyle), sx: finalLabelSx }, item.label)),
                React.createElement(ValueWrap, { className: classNames(valueClassName, item.valueClassName), style: __assign$2(__assign$2(__assign$2({}, valueStyle), item.valueStyle), valueUnderlineStyle), sx: finalValueSx },
                    item.ellipsis || ellipsis ? React.createElement(ValueEllipsis, null, data) : React.createElement(Value, null, data),
                    item.clipboard && compare.notEmpty(copyToClipboardText) && (React.createElement(ValueClipboard, null,
                        React.createElement(reactComponent.PCopyToClipboard, { text: copyToClipboardText, onCopy: onCopyToClipboard ? function () { return onCopyToClipboard(item, copyToClipboardText); } : undefined },
                            React.createElement(ClipboardIconButton, __assign$2({ size: 'small', color: 'primary' }, item.clipboardProps),
                                React.createElement(reactComponent.PIcon, null, item.clipboardIcon || 'ContentPaste'))))))));
        });
    }, [
        dividerColor,
        ellipsis,
        labelClassName,
        labelColor,
        labelStyle,
        labelSx,
        onCopyToClipboard,
        renderItems,
        valueClassName,
        valueStyle,
        valueSx,
        valueUnderline,
    ]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(material.Grid, { container: true, spacing: spacing, columnSpacing: columnSpacing, rowSpacing: rowSpacing, className: classNames('PInfoTable', className), style: style, sx: sx }, content));
};/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */

var isObject_1;
var hasRequiredIsObject;

function requireIsObject () {
	if (hasRequiredIsObject) return isObject_1;
	hasRequiredIsObject = 1;
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	isObject_1 = isObject;
	return isObject_1;
}/** Detect free variable `global` from Node.js. */

var _freeGlobal;
var hasRequired_freeGlobal;

function require_freeGlobal () {
	if (hasRequired_freeGlobal) return _freeGlobal;
	hasRequired_freeGlobal = 1;
	var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

	_freeGlobal = freeGlobal;
	return _freeGlobal;
}var _root;
var hasRequired_root;

function require_root () {
	if (hasRequired_root) return _root;
	hasRequired_root = 1;
	var freeGlobal = require_freeGlobal();

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	_root = root;
	return _root;
}var now_1;
var hasRequiredNow;

function requireNow () {
	if (hasRequiredNow) return now_1;
	hasRequiredNow = 1;
	var root = require_root();

	/**
	 * Gets the timestamp of the number of milliseconds that have elapsed since
	 * the Unix epoch (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Date
	 * @returns {number} Returns the timestamp.
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => Logs the number of milliseconds it took for the deferred invocation.
	 */
	var now = function() {
	  return root.Date.now();
	};

	now_1 = now;
	return now_1;
}/** Used to match a single whitespace character. */

var _trimmedEndIndex;
var hasRequired_trimmedEndIndex;

function require_trimmedEndIndex () {
	if (hasRequired_trimmedEndIndex) return _trimmedEndIndex;
	hasRequired_trimmedEndIndex = 1;
	var reWhitespace = /\s/;

	/**
	 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
	 * character of `string`.
	 *
	 * @private
	 * @param {string} string The string to inspect.
	 * @returns {number} Returns the index of the last non-whitespace character.
	 */
	function trimmedEndIndex(string) {
	  var index = string.length;

	  while (index-- && reWhitespace.test(string.charAt(index))) {}
	  return index;
	}

	_trimmedEndIndex = trimmedEndIndex;
	return _trimmedEndIndex;
}var _baseTrim;
var hasRequired_baseTrim;

function require_baseTrim () {
	if (hasRequired_baseTrim) return _baseTrim;
	hasRequired_baseTrim = 1;
	var trimmedEndIndex = require_trimmedEndIndex();

	/** Used to match leading whitespace. */
	var reTrimStart = /^\s+/;

	/**
	 * The base implementation of `_.trim`.
	 *
	 * @private
	 * @param {string} string The string to trim.
	 * @returns {string} Returns the trimmed string.
	 */
	function baseTrim(string) {
	  return string
	    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
	    : string;
	}

	_baseTrim = baseTrim;
	return _baseTrim;
}var _Symbol;
var hasRequired_Symbol;

function require_Symbol () {
	if (hasRequired_Symbol) return _Symbol;
	hasRequired_Symbol = 1;
	var root = require_root();

	/** Built-in value references. */
	var Symbol = root.Symbol;

	_Symbol = Symbol;
	return _Symbol;
}var _getRawTag;
var hasRequired_getRawTag;

function require_getRawTag () {
	if (hasRequired_getRawTag) return _getRawTag;
	hasRequired_getRawTag = 1;
	var Symbol = require_Symbol();

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	_getRawTag = getRawTag;
	return _getRawTag;
}/** Used for built-in method references. */

var _objectToString;
var hasRequired_objectToString;

function require_objectToString () {
	if (hasRequired_objectToString) return _objectToString;
	hasRequired_objectToString = 1;
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	_objectToString = objectToString;
	return _objectToString;
}var _baseGetTag;
var hasRequired_baseGetTag;

function require_baseGetTag () {
	if (hasRequired_baseGetTag) return _baseGetTag;
	hasRequired_baseGetTag = 1;
	var Symbol = require_Symbol(),
	    getRawTag = require_getRawTag(),
	    objectToString = require_objectToString();

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}

	_baseGetTag = baseGetTag;
	return _baseGetTag;
}/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */

var isObjectLike_1;
var hasRequiredIsObjectLike;

function requireIsObjectLike () {
	if (hasRequiredIsObjectLike) return isObjectLike_1;
	hasRequiredIsObjectLike = 1;
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	isObjectLike_1 = isObjectLike;
	return isObjectLike_1;
}var isSymbol_1;
var hasRequiredIsSymbol;

function requireIsSymbol () {
	if (hasRequiredIsSymbol) return isSymbol_1;
	hasRequiredIsSymbol = 1;
	var baseGetTag = require_baseGetTag(),
	    isObjectLike = requireIsObjectLike();

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && baseGetTag(value) == symbolTag);
	}

	isSymbol_1 = isSymbol;
	return isSymbol_1;
}var toNumber_1;
var hasRequiredToNumber;

function requireToNumber () {
	if (hasRequiredToNumber) return toNumber_1;
	hasRequiredToNumber = 1;
	var baseTrim = require_baseTrim(),
	    isObject = requireIsObject(),
	    isSymbol = requireIsSymbol();

	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = baseTrim(value);
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	toNumber_1 = toNumber;
	return toNumber_1;
}var debounce_1;
var hasRequiredDebounce;

function requireDebounce () {
	if (hasRequiredDebounce) return debounce_1;
	hasRequiredDebounce = 1;
	var isObject = requireIsObject(),
	    now = requireNow(),
	    toNumber = requireToNumber();

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeMin = Math.min;

	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed `func` invocations and a `flush` method to immediately invoke them.
	 * Provide `options` to indicate whether `func` should be invoked on the
	 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	 * with the last arguments provided to the debounced function. Subsequent
	 * calls to the debounced function return the result of the last `func`
	 * invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the debounced function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=false]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {number} [options.maxWait]
	 *  The maximum time `func` is allowed to be delayed before it's invoked.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // Avoid costly calculations while the window size is in flux.
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	 * jQuery(element).on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', debounced);
	 *
	 * // Cancel the trailing debounced invocation.
	 * jQuery(window).on('popstate', debounced.cancel);
	 */
	function debounce(func, wait, options) {
	  var lastArgs,
	      lastThis,
	      maxWait,
	      result,
	      timerId,
	      lastCallTime,
	      lastInvokeTime = 0,
	      leading = false,
	      maxing = false,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = toNumber(wait) || 0;
	  if (isObject(options)) {
	    leading = !!options.leading;
	    maxing = 'maxWait' in options;
	    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }

	  function invokeFunc(time) {
	    var args = lastArgs,
	        thisArg = lastThis;

	    lastArgs = lastThis = undefined;
	    lastInvokeTime = time;
	    result = func.apply(thisArg, args);
	    return result;
	  }

	  function leadingEdge(time) {
	    // Reset any `maxWait` timer.
	    lastInvokeTime = time;
	    // Start the timer for the trailing edge.
	    timerId = setTimeout(timerExpired, wait);
	    // Invoke the leading edge.
	    return leading ? invokeFunc(time) : result;
	  }

	  function remainingWait(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime,
	        timeWaiting = wait - timeSinceLastCall;

	    return maxing
	      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
	      : timeWaiting;
	  }

	  function shouldInvoke(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime;

	    // Either this is the first call, activity has stopped and we're at the
	    // trailing edge, the system time has gone backwards and we're treating
	    // it as the trailing edge, or we've hit the `maxWait` limit.
	    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
	      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
	  }

	  function timerExpired() {
	    var time = now();
	    if (shouldInvoke(time)) {
	      return trailingEdge(time);
	    }
	    // Restart the timer.
	    timerId = setTimeout(timerExpired, remainingWait(time));
	  }

	  function trailingEdge(time) {
	    timerId = undefined;

	    // Only invoke if we have `lastArgs` which means `func` has been
	    // debounced at least once.
	    if (trailing && lastArgs) {
	      return invokeFunc(time);
	    }
	    lastArgs = lastThis = undefined;
	    return result;
	  }

	  function cancel() {
	    if (timerId !== undefined) {
	      clearTimeout(timerId);
	    }
	    lastInvokeTime = 0;
	    lastArgs = lastCallTime = lastThis = timerId = undefined;
	  }

	  function flush() {
	    return timerId === undefined ? result : trailingEdge(now());
	  }

	  function debounced() {
	    var time = now(),
	        isInvoking = shouldInvoke(time);

	    lastArgs = arguments;
	    lastThis = this;
	    lastCallTime = time;

	    if (isInvoking) {
	      if (timerId === undefined) {
	        return leadingEdge(lastCallTime);
	      }
	      if (maxing) {
	        // Handle invocations in a tight loop.
	        clearTimeout(timerId);
	        timerId = setTimeout(timerExpired, wait);
	        return invokeFunc(lastCallTime);
	      }
	    }
	    if (timerId === undefined) {
	      timerId = setTimeout(timerExpired, wait);
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  debounced.flush = flush;
	  return debounced;
	}

	debounce_1 = debounce;
	return debounce_1;
}var debounceExports = requireDebounce();
var debounce$1 = /*@__PURE__*/getDefaultExportFromCjs(debounceExports);var throttle_1;
var hasRequiredThrottle;

function requireThrottle () {
	if (hasRequiredThrottle) return throttle_1;
	hasRequiredThrottle = 1;
	var debounce = requireDebounce(),
	    isObject = requireIsObject();

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a throttled function that only invokes `func` at most once per
	 * every `wait` milliseconds. The throttled function comes with a `cancel`
	 * method to cancel delayed `func` invocations and a `flush` method to
	 * immediately invoke them. Provide `options` to indicate whether `func`
	 * should be invoked on the leading and/or trailing edge of the `wait`
	 * timeout. The `func` is invoked with the last arguments provided to the
	 * throttled function. Subsequent calls to the throttled function return the
	 * result of the last `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the throttled function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.throttle` and `_.debounce`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to throttle.
	 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=true]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new throttled function.
	 * @example
	 *
	 * // Avoid excessively updating the position while scrolling.
	 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	 *
	 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
	 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
	 * jQuery(element).on('click', throttled);
	 *
	 * // Cancel the trailing throttled invocation.
	 * jQuery(window).on('popstate', throttled.cancel);
	 */
	function throttle(func, wait, options) {
	  var leading = true,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  if (isObject(options)) {
	    leading = 'leading' in options ? !!options.leading : leading;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	  return debounce(func, wait, {
	    'leading': leading,
	    'maxWait': wait,
	    'trailing': trailing
	  });
	}

	throttle_1 = throttle;
	return throttle_1;
}var throttleExports = requireThrottle();
var throttle$1 = /*@__PURE__*/getDefaultExportFromCjs(throttleExports);/**
 * Wraps the resize callback with a lodash debounce / throttle based on the refresh mode
 */
const patchResizeCallback = (resizeCallback, refreshMode, refreshRate, refreshOptions) => {
    switch (refreshMode) {
        case 'debounce':
            return debounce$1(resizeCallback, refreshRate, refreshOptions);
        case 'throttle':
            return throttle$1(resizeCallback, refreshRate, refreshOptions);
        default:
            return resizeCallback;
    }
};
/**
 * A custom hook that converts a callback to a ref to avoid triggering re-renders when passed as a
 * prop or avoid re-executing effects when passed as a dependency
 */
const useCallbackRef = 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(callback) => {
    const callbackRef = React__namespace.useRef(callback);
    React__namespace.useEffect(() => {
        callbackRef.current = callback;
    });
    return React__namespace.useMemo(() => ((...args) => { var _a; return (_a = callbackRef.current) === null || _a === void 0 ? void 0 : _a.call(callbackRef, ...args); }), []);
};
/** `useRef` hook doesn't handle conditional rendering or dynamic ref changes.
 * This hook creates a proxy that ensures that `refElement` is updated whenever the ref is changed. */
const useRefProxy = 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(targetRef) => {
    // we are going to use this ref to store the last element that was passed to the hook
    const [refElement, setRefElement] = React__namespace.useState((targetRef === null || targetRef === void 0 ? void 0 : targetRef.current) || null);
    // if targetRef is passed, we need to update the refElement
    // we have to use setTimeout because ref get assigned after the hook is called
    // in the future releases we are going to remove targetRef and force users to use ref returned by the hook
    if (targetRef) {
        setTimeout(() => {
            if (targetRef.current !== refElement) {
                setRefElement(targetRef.current);
            }
        }, 0);
    }
    // this is a memo that will be called every time the ref is changed
    // This proxy will properly call setState either when the ref is called as a function or when `.current` is set
    // we call setState inside to trigger rerender
    const refProxy = React__namespace.useMemo(() => new Proxy((node) => {
        if (node !== refElement) {
            setRefElement(node);
        }
    }, {
        get(target, prop) {
            if (prop === 'current') {
                return refElement;
            }
            return target[prop];
        },
        set(target, prop, value) {
            if (prop === 'current') {
                setRefElement(value);
            }
            else {
                target[prop] = value;
            }
            return true;
        },
    }), [refElement]);
    return { refProxy, refElement, setRefElement };
};
/** Calculates the dimensions of the element based on the current box model.
 * @see https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model
 */
const getDimensions = (entry, box) => {
    // Value	          Border	  Padding	  Inner Content
    // ---------------------------------------------------
    // 'border-box'	    Yes	      Yes	      Yes
    // 'content-box'	  No	      No	      Yes
    //  undefined       No	      No?	      Yes
    var _a, _b;
    const borderBox = (_a = entry.borderBoxSize) === null || _a === void 0 ? void 0 : _a[0];
    const contentBox = (_b = entry.contentBoxSize) === null || _b === void 0 ? void 0 : _b[0];
    if (box === 'border-box' && borderBox) {
        return {
            width: borderBox.inlineSize,
            height: borderBox.blockSize,
        };
    }
    if (box === 'content-box' && contentBox) {
        return {
            width: contentBox.inlineSize,
            height: contentBox.blockSize,
        };
    }
    return {
        width: entry.contentRect.width,
        height: entry.contentRect.height,
    };
};// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useResizeDetector({ skipOnMount = false, refreshMode, refreshRate = 1000, refreshOptions, handleWidth = true, handleHeight = true, targetRef, observerOptions, onResize, } = {}) {
    // If `skipOnMount` is enabled, skip the first resize event
    const skipResize = React.useRef(skipOnMount);
    // Wrap the `onResize` callback with a ref to avoid re-renders
    const onResizeRef = useCallbackRef(onResize);
    const [size, setSize] = React.useState({
        width: undefined,
        height: undefined,
    });
    // Create a proxy ref to handle conditional rendering and dynamic ref changes of the target element
    const { refProxy, refElement } = useRefProxy(targetRef);
    const { box } = observerOptions || {};
    const resizeCallback = React.useCallback((entries) => {
        if (!handleWidth && !handleHeight)
            return;
        if (skipResize.current) {
            skipResize.current = false;
            return;
        }
        // Only update the size if one of the observed dimensions has changed
        const shouldSetSize = (prevSize, nextSize) => (handleWidth && prevSize.width !== nextSize.width) || (handleHeight && prevSize.height !== nextSize.height);
        entries.forEach((entry) => {
            const dimensions = getDimensions(entry, box);
            setSize((prevSize) => {
                if (!shouldSetSize(prevSize, dimensions))
                    return prevSize;
                onResizeRef === null || onResizeRef === void 0 ? void 0 : onResizeRef({
                    width: dimensions.width,
                    height: dimensions.height,
                    entry,
                });
                return dimensions;
            });
        });
    }, [handleWidth, handleHeight, skipResize, box]);
    // Throttle/Debounce the resize event if refreshMode is configured
    const resizeHandler = React.useCallback(patchResizeCallback(resizeCallback, refreshMode, refreshRate, refreshOptions), [
        resizeCallback,
        refreshMode,
        refreshRate,
        refreshOptions,
    ]);
    // Attach ResizeObserver to the element
    React.useEffect(() => {
        let resizeObserver;
        if (refElement) {
            try {
                resizeObserver = new window.ResizeObserver(resizeHandler);
                resizeObserver.observe(refElement, observerOptions);
            }
            catch (error) {
                console.warn('ResizeObserver not supported or failed to initialize:', error);
            }
        }
        // If refElement is not available, reset the size
        else if (size.width || size.height) {
            onResizeRef === null || onResizeRef === void 0 ? void 0 : onResizeRef({
                width: null,
                height: null,
                entry: null,
            });
            setSize({ width: undefined, height: undefined });
        }
        // Disconnect the ResizeObserver when the component is unmounted
        return () => {
            var _a, _b, _c;
            (_a = resizeObserver === null || resizeObserver === void 0 ? void 0 : resizeObserver.disconnect) === null || _a === void 0 ? void 0 : _a.call(resizeObserver);
            (_c = (_b = resizeHandler).cancel) === null || _c === void 0 ? void 0 : _c.call(_b);
        };
    }, [resizeHandler, refElement]);
    return Object.assign({ ref: refProxy }, size);
}var StyledBodyRow = material.styled(material.TableRow)(function (_a) {
    var theme = _a.theme;
    return ({
        '&.odd-color:nth-of-type(odd):not(:hover)': {
            backgroundColor: material.lighten(theme.palette.action.hover, 0.4),
        },
        '&.even-color:nth-of-type(even):not(:hover)': {
            backgroundColor: material.lighten(theme.palette.action.hover, 0.4),
        },
    });
});
var StyledNoDataDiv = material.styled('div')(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  text-align: center;\n  padding: 30px 0;\n  font-weight: 500;\n  font-size: 13px;\n  color: #94a0b2;\n  opacity: 0.8;\n\n  .material-icons {\n    font-size: 40px;\n    margin-bottom: 5px;\n  }\n"], ["\n  text-align: center;\n  padding: 30px 0;\n  font-weight: 500;\n  font-size: 13px;\n  color: #94a0b2;\n  opacity: 0.8;\n\n  .material-icons {\n    font-size: 40px;\n    margin-bottom: 5px;\n  }\n"])));
var templateObject_1$3;var PTableContext = React.createContext({});function useTableState() {
    var value = React.useContext(PTableContext);
    if (compare.empty(value)) {
        throw new Error('useFormState should be used within TableContext.Provider');
    }
    return value;
}var StyledTableCell = material.styled(material.TableCell)(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  &.ellipsis {\n    position: relative;\n    max-width: 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n"], ["\n  &.ellipsis {\n    position: relative;\n    max-width: 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n"])));
var PTableCommonCell = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/
    var children = _a.children, initClassName = _a.className, initStyle = _a.style, initSx = _a.sx, type = _a.type, column = _a.column, defaultAlign = _a.defaultAlign, initDefaultEllipsis = _a.defaultEllipsis, index = _a.index, item = _a.item, onClick = _a.onClick;
    var menuOpen = useTableState().menuOpen;
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var _b = React.useMemo(function () {
        var align = getTableColumnAlign(column, defaultAlign);
        var ellipsis = type !== 'head' &&
            (column.ellipsis ||
                (column.type !== 'img' &&
                    column.type !== 'button' &&
                    column.type !== 'buttons' &&
                    (column.ellipsis == null ? !!initDefaultEllipsis : false)));
        return { align: align, ellipsis: ellipsis };
    }, [column, defaultAlign, initDefaultEllipsis, type]), align = _b.align, ellipsis = _b.ellipsis;
    var className = React.useMemo(function () {
        var _a, _b, _c, _d, _e, _f;
        var className;
        var getClassName;
        switch (type) {
            case 'head':
                className = (_a = column.head) === null || _a === void 0 ? void 0 : _a.className;
                getClassName = ((_b = column.head) === null || _b === void 0 ? void 0 : _b.onGetClassName) ? (_c = column.head) === null || _c === void 0 ? void 0 : _c.onGetClassName() : undefined;
                break;
            case 'body':
                className = column.className;
                if (item != null && index != null) {
                    getClassName = column.onGetClassName ? column.onGetClassName(item, index) : undefined;
                }
                break;
            case 'footer':
                className = (_d = column.footer) === null || _d === void 0 ? void 0 : _d.className;
                getClassName = ((_e = column.footer) === null || _e === void 0 ? void 0 : _e.onGetClassName) ? (_f = column.footer) === null || _f === void 0 ? void 0 : _f.onGetClassName() : undefined;
                break;
        }
        if (className || getClassName) {
            return classNames(initClassName, className, getClassName);
        }
        else {
            return initClassName;
        }
    }, [column, index, initClassName, item, type]);
    var style = React.useMemo(function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var style;
        var getStyle;
        switch (type) {
            case 'head':
                style = ((_a = column.head) === null || _a === void 0 ? void 0 : _a.backgroundColor)
                    ? __assign$2(__assign$2({}, (_b = column.head) === null || _b === void 0 ? void 0 : _b.style), { backgroundColor: column.head.backgroundColor }) : (_c = column.head) === null || _c === void 0 ? void 0 : _c.style;
                getStyle = ((_d = column.head) === null || _d === void 0 ? void 0 : _d.onGetStyle) ? (_e = column.head) === null || _e === void 0 ? void 0 : _e.onGetStyle() : undefined;
                break;
            case 'body':
                style = column.backgroundColor ? __assign$2(__assign$2({}, column.style), { backgroundColor: column.backgroundColor }) : column.style;
                if (item != null && index != null) {
                    getStyle = column.onGetStyle ? column.onGetStyle(item, index) : undefined;
                }
                break;
            case 'footer':
                style = ((_f = column.footer) === null || _f === void 0 ? void 0 : _f.backgroundColor)
                    ? __assign$2(__assign$2({}, (_g = column.footer) === null || _g === void 0 ? void 0 : _g.style), { backgroundColor: column.footer.backgroundColor }) : (_h = column.footer) === null || _h === void 0 ? void 0 : _h.style;
                getStyle = ((_j = column.footer) === null || _j === void 0 ? void 0 : _j.onGetStyle) ? (_k = column.footer) === null || _k === void 0 ? void 0 : _k.onGetStyle() : undefined;
                break;
        }
        return __assign$2(__assign$2(__assign$2(__assign$2({}, initStyle), { width: column.width, minWidth: column.minWidth, cursor: type === 'body' && (column.onClick || onClick) ? 'pointer' : undefined, paddingLeft: column.paddingLeft, paddingRight: column.paddingRight }), style), getStyle);
    }, [column, index, initStyle, item, onClick, type]);
    var sx = React.useMemo(function () {
        var _a, _b, _c, _d, _e, _f;
        var sx;
        var getSx;
        var displaySx;
        switch (type) {
            case 'head':
                sx = (_a = column.head) === null || _a === void 0 ? void 0 : _a.sx;
                getSx = ((_b = column.head) === null || _b === void 0 ? void 0 : _b.onGetSx) ? (_c = column.head) === null || _c === void 0 ? void 0 : _c.onGetSx() : undefined;
                break;
            case 'body':
                sx = column.sx;
                if (item != null && index != null) {
                    getSx = column.onGetSx ? column.onGetSx(item, index) : undefined;
                }
                break;
            case 'footer':
                sx = (_d = column.footer) === null || _d === void 0 ? void 0 : _d.sx;
                getSx = ((_e = column.footer) === null || _e === void 0 ? void 0 : _e.onGetSx) ? (_f = column.footer) === null || _f === void 0 ? void 0 : _f.onGetSx() : undefined;
                break;
        }
        if (column.display) {
            var display = {};
            if (column.display.xs !== undefined)
                display.xs = column.display.xs ? 'table-cell' : 'none';
            if (column.display.sm !== undefined)
                display.sm = column.display.sm ? 'table-cell' : 'none';
            if (column.display.md !== undefined)
                display.md = column.display.md ? 'table-cell' : 'none';
            if (column.display.lg !== undefined)
                display.lg = column.display.lg ? 'table-cell' : 'none';
            if (column.display.xl !== undefined)
                display.xl = column.display.xl ? 'table-cell' : 'none';
            displaySx = { display: display };
        }
        var sxList = [];
        if (getSx)
            sxList.push(getSx);
        if (sx)
            sxList.push(sx);
        if (initSx)
            sxList.push(initSx);
        if (displaySx)
            sxList.push(displaySx);
        if (sxList.length > 0) {
            if (sxList.length === 1) {
                return sxList[0];
            }
            else {
                if (!sxList.find(function (sx) { return typeof sx !== 'object'; })) {
                    return sxList.reduce(function (res, sx) {
                        res = __assign$2(__assign$2({}, res), sx);
                        return res;
                    }, {});
                }
            }
        }
    }, [column, index, initSx, item, type]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleClick = React.useCallback(function (e) {
        if (!menuOpen &&
            column.type !== 'check' &&
            column.type !== 'button' &&
            column.type !== 'buttons' &&
            column.type !== 'img') {
            e.stopPropagation();
            if (type === 'body') {
                if (item != null && index != null) {
                    if (column.onClick) {
                        column.onClick(item, index);
                    }
                    else {
                        if (onClick)
                            onClick(item, index);
                    }
                }
            }
        }
    }, [menuOpen, type, item, index, column, onClick]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(StyledTableCell, { ref: ref, align: align, className: classNames(className, 'PTableCommonCell', ellipsis && 'ellipsis', column.type ? "column-type-".concat(column.type) : false), style: style, sx: sx, onClick: type === 'body' ? handleClick : undefined }, children));
});
var templateObject_1$2;var PTableFooterCell = function (_a) {
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var column = _a.column, items = _a.items, defaultAlign = _a.defaultAlign;
    var data = React.useMemo(function () {
        var _a, _b, _c;
        if ((_a = column.footer) === null || _a === void 0 ? void 0 : _a.onRender) {
            return (_b = column.footer) === null || _b === void 0 ? void 0 : _b.onRender(items);
        }
        else {
            return (_c = column.footer) === null || _c === void 0 ? void 0 : _c.value;
        }
    }, [column.footer, items]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(PTableCommonCell, { type: 'head', className: 'PTableFooterCell', column: column, defaultAlign: defaultAlign }, data));
};var PTablePagination = function (_a) {
    var className = _a.className, style = _a.style, sx = _a.sx, paging = _a.paging, align = _a.align, onChange = _a.onChange;
    return (React.createElement(material.Stack, { alignItems: align },
        React.createElement(material.Pagination, { count: paging.last_page, page: paging.current_page, color: 'primary', className: classNames('PTablePagination', className), style: style, sx: sx, onChange: function (e, page) {
                if (onChange)
                    onChange(page);
            } })));
};var PTableContextProvider = function (_a) {
    var children = _a.children, value = _a.value;
    return React.createElement(PTableContext.Provider, { value: value }, children);
};var PTableTopHeadCaptionRow = material.styled(material.TableRow)(function (_a) {
    var theme = _a.theme;
    return ({
        '> th': {
            backgroundColor: theme.palette.grey.A100,
            textAlign: 'center',
            fontWeight: 700,
        },
    });
});var PTableHeadCell = function (_a) {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/
    var column = _a.column, items = _a.items, defaultAlign = _a.defaultAlign, top = _a.top, onCheckChange = _a.onCheckChange;
    var _b = useTableState(), setHeadColumnChecked = _b.setHeadColumnChecked, setHeadColumnCommands = _b.setHeadColumnCommands;
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _c = React.useState(false), checked = _c[0], setChecked = _c[1];
    var _d = React.useState(false), checkDisabled = _d[0], setCheckDisabled = _d[1];
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    React.useEffect(function () {
        if (column.type === 'check') {
            setHeadColumnChecked(column, checked);
        }
    }, [column, checked, setHeadColumnChecked]);
    React.useEffect(function () {
        setHeadColumnCommands(column, {
            setChecked: function (checked) {
                if (column.type === 'check') {
                    setChecked(checked);
                }
            },
            setCheckDisabled: function (checkDisabled) {
                if (column.type === 'check') {
                    setCheckDisabled(checkDisabled);
                }
            },
        });
    }, [setHeadColumnCommands, column]);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var data = React.useMemo(function () {
        var _a, _b, _c, _d;
        if (column.type === 'check') {
            if (column.hideAllCheck) {
                if ((_a = column.head) === null || _a === void 0 ? void 0 : _a.onRender) {
                    return (_b = column.head) === null || _b === void 0 ? void 0 : _b.onRender(items);
                }
                else {
                    if (typeof column.label === 'string') {
                        return React.createElement("div", { dangerouslySetInnerHTML: { __html: column.label } });
                    }
                    else {
                        return column.label;
                    }
                }
            }
            else {
                return (React.createElement(material.Checkbox, { checked: checked, disabled: checkDisabled, onChange: function (e, newChecked) {
                        setChecked(newChecked);
                        onCheckChange && onCheckChange(column, newChecked);
                    } }));
            }
        }
        else {
            if ((_c = column.head) === null || _c === void 0 ? void 0 : _c.onRender) {
                return (_d = column.head) === null || _d === void 0 ? void 0 : _d.onRender(items);
            }
            else {
                if (typeof column.label === 'string') {
                    return React.createElement("div", { dangerouslySetInnerHTML: { __html: column.label } });
                }
                else {
                    return column.label;
                }
            }
        }
    }, [checkDisabled, checked, column, items, onCheckChange]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(PTableCommonCell, { type: 'head', className: 'PTableHeadCell', style: top !== undefined ? { top: top } : undefined, column: column, defaultAlign: defaultAlign }, data));
};var BottomLine = material.styled('div')(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  height: 1px;\n  position: absolute;\n  left: 3px;\n  right: 3px;\n  bottom: 0;\n"], ["\n  height: 1px;\n  position: absolute;\n  left: 3px;\n  right: 3px;\n  bottom: 0;\n"])));
var PTableTopHead = function (_a) {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/
    var columns = _a.columns, items = _a.items, rows = _a.rows, caption = _a.caption, defaultAlign = _a.defaultAlign, onCheckChange = _a.onCheckChange;
    var theme = material.useTheme();
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var captionRef = React.useRef(null);
    var row1Ref = React.useRef(null);
    var row2Ref = React.useRef(null);
    var row3Ref = React.useRef(null);
    /********************************************************************************************************************
     * ResizeDetector
     * ******************************************************************************************************************/
    var captionHeight = useResizeDetector({
        targetRef: captionRef,
        handleWidth: false,
        handleHeight: true,
    }).height;
    var row1Height = useResizeDetector({ targetRef: row1Ref, handleWidth: false, handleHeight: true }).height;
    var row2Height = useResizeDetector({ targetRef: row2Ref, handleWidth: false, handleHeight: true }).height;
    var row3Height = useResizeDetector({ targetRef: row3Ref, handleWidth: false, handleHeight: true }).height;
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    var makeRowCells = React.useCallback(function (row, top) {
        var totalColumns = 0;
        var cells = row
            .map(function (info, idx) {
            if (info) {
                totalColumns += info.colSpan || 1;
                return (React.createElement(material.TableCell, { key: idx, colSpan: info.colSpan, align: info.align, style: {
                        top: top,
                        borderBottom: 0,
                    } },
                    info.label,
                    info.label != null && React.createElement(BottomLine, { style: { backgroundColor: theme.palette.divider } })));
            }
        })
            .filter(function (cell) { return !!cell; });
        if (totalColumns < columns.length) {
            cells.push(React.createElement(material.TableCell, { key: columns.length, colSpan: columns.length - cells.length, style: { top: top, borderBottom: 0 } }));
        }
        return cells;
    }, [columns, theme.palette.divider]);
    var columnRow = React.useMemo(function () {
        var top = (captionHeight || 0) + (row1Height || 0) + (row2Height || 0) + (row3Height || 0);
        return (React.createElement(material.TableRow, null, columns.map(function (column, idx) { return (React.createElement(PTableHeadCell, { key: idx, column: column, items: items, defaultAlign: defaultAlign, top: top, onCheckChange: onCheckChange })); })));
    }, [captionHeight, columns, defaultAlign, items, onCheckChange, row1Height, row2Height, row3Height]);
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/
    var captionRow = !!caption && (React.createElement(PTableTopHeadCaptionRow, { ref: captionRef, className: 'PTableTopHeadCaptionRow' },
        React.createElement(material.TableCell, { colSpan: columns.length }, caption)));
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    if (rows) {
        if (Array.isArray(rows[0])) {
            return (React.createElement(material.TableHead, { className: 'PTableHead' },
                captionRow,
                rows.map(function (row, idx) {
                    var ref = undefined;
                    var top = undefined;
                    switch (idx) {
                        case 0:
                            ref = row1Ref;
                            top = captionHeight;
                            break;
                        case 1:
                            ref = row2Ref;
                            top = (captionHeight || 0) + (row1Height || 0);
                            break;
                        case 2:
                            ref = row3Ref;
                            top = (captionHeight || 0) + (row1Height || 0) + (row2Height || 0);
                            break;
                        case 3:
                            top = (captionHeight || 0) + (row1Height || 0) + (row2Height || 0) + (row3Height || 0);
                    }
                    return (React.createElement(material.TableRow, { key: idx, ref: ref, className: 'PTableHeadRow' }, makeRowCells(row, top)));
                })));
        }
        else {
            return (React.createElement(material.TableHead, { className: 'PTableHead' },
                captionRow,
                React.createElement(material.TableRow, { ref: row1Ref, className: 'PTableHeadRow' }, makeRowCells(rows, captionHeight)),
                columnRow));
        }
    }
    else {
        return (React.createElement(material.TableHead, { className: 'PTableHead' },
            captionRow,
            columnRow));
    }
};
var templateObject_1$1;/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}/** Built-in value references. */
var Symbol = root.Symbol;/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto$1.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/** Built-in value references. */
var symToStringTag$1 = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}/** Error message constants. */
var FUNC_ERROR_TEXT$1 = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}/**
 * simplebar-core - v1.3.1
 * Scrollbars, simpler.
 * https://grsmto.github.io/simplebar/
 *
 * Made by Adrien Denat from a fork by Jonathan Nicol
 * Under MIT License
 */


/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign$1 = function() {
    __assign$1 = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign$1.apply(this, arguments);
};

function getElementWindow$1(element) {
    if (!element ||
        !element.ownerDocument ||
        !element.ownerDocument.defaultView) {
        return window;
    }
    return element.ownerDocument.defaultView;
}
function getElementDocument$1(element) {
    if (!element || !element.ownerDocument) {
        return document;
    }
    return element.ownerDocument;
}
// Helper function to retrieve options from element attributes
var getOptions$1 = function (obj) {
    var initialObj = {};
    var options = Array.prototype.reduce.call(obj, function (acc, attribute) {
        var option = attribute.name.match(/data-simplebar-(.+)/);
        if (option) {
            var key = option[1].replace(/\W+(.)/g, function (_, chr) { return chr.toUpperCase(); });
            switch (attribute.value) {
                case 'true':
                    acc[key] = true;
                    break;
                case 'false':
                    acc[key] = false;
                    break;
                case undefined:
                    acc[key] = true;
                    break;
                default:
                    acc[key] = attribute.value;
            }
        }
        return acc;
    }, initialObj);
    return options;
};
function addClasses$1(el, classes) {
    var _a;
    if (!el)
        return;
    (_a = el.classList).add.apply(_a, classes.split(' '));
}
function removeClasses$1(el, classes) {
    if (!el)
        return;
    classes.split(' ').forEach(function (className) {
        el.classList.remove(className);
    });
}
function classNamesToQuery$1(classNames) {
    return ".".concat(classNames.split(' ').join('.'));
}
var canUseDOM = !!(typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement);

var helpers = /*#__PURE__*/Object.freeze({
    __proto__: null,
    addClasses: addClasses$1,
    canUseDOM: canUseDOM,
    classNamesToQuery: classNamesToQuery$1,
    getElementDocument: getElementDocument$1,
    getElementWindow: getElementWindow$1,
    getOptions: getOptions$1,
    removeClasses: removeClasses$1
});

var cachedScrollbarWidth = null;
var cachedDevicePixelRatio = null;
if (canUseDOM) {
    window.addEventListener('resize', function () {
        if (cachedDevicePixelRatio !== window.devicePixelRatio) {
            cachedDevicePixelRatio = window.devicePixelRatio;
            cachedScrollbarWidth = null;
        }
    });
}
function scrollbarWidth() {
    if (cachedScrollbarWidth === null) {
        if (typeof document === 'undefined') {
            cachedScrollbarWidth = 0;
            return cachedScrollbarWidth;
        }
        var body = document.body;
        var box = document.createElement('div');
        box.classList.add('simplebar-hide-scrollbar');
        body.appendChild(box);
        var width = box.getBoundingClientRect().right;
        body.removeChild(box);
        cachedScrollbarWidth = width;
    }
    return cachedScrollbarWidth;
}

var getElementWindow = getElementWindow$1, getElementDocument = getElementDocument$1, getOptions = getOptions$1, addClasses = addClasses$1, removeClasses = removeClasses$1, classNamesToQuery = classNamesToQuery$1;
var SimpleBarCore = /** @class */ (function () {
    function SimpleBarCore(element, options) {
        if (options === void 0) { options = {}; }
        var _this = this;
        this.removePreventClickId = null;
        this.minScrollbarWidth = 20;
        this.stopScrollDelay = 175;
        this.isScrolling = false;
        this.isMouseEntering = false;
        this.isDragging = false;
        this.scrollXTicking = false;
        this.scrollYTicking = false;
        this.wrapperEl = null;
        this.contentWrapperEl = null;
        this.contentEl = null;
        this.offsetEl = null;
        this.maskEl = null;
        this.placeholderEl = null;
        this.heightAutoObserverWrapperEl = null;
        this.heightAutoObserverEl = null;
        this.rtlHelpers = null;
        this.scrollbarWidth = 0;
        this.resizeObserver = null;
        this.mutationObserver = null;
        this.elStyles = null;
        this.isRtl = null;
        this.mouseX = 0;
        this.mouseY = 0;
        this.onMouseMove = function () { };
        this.onWindowResize = function () { };
        this.onStopScrolling = function () { };
        this.onMouseEntered = function () { };
        /**
         * On scroll event handling
         */
        this.onScroll = function () {
            var elWindow = getElementWindow(_this.el);
            if (!_this.scrollXTicking) {
                elWindow.requestAnimationFrame(_this.scrollX);
                _this.scrollXTicking = true;
            }
            if (!_this.scrollYTicking) {
                elWindow.requestAnimationFrame(_this.scrollY);
                _this.scrollYTicking = true;
            }
            if (!_this.isScrolling) {
                _this.isScrolling = true;
                addClasses(_this.el, _this.classNames.scrolling);
            }
            _this.showScrollbar('x');
            _this.showScrollbar('y');
            _this.onStopScrolling();
        };
        this.scrollX = function () {
            if (_this.axis.x.isOverflowing) {
                _this.positionScrollbar('x');
            }
            _this.scrollXTicking = false;
        };
        this.scrollY = function () {
            if (_this.axis.y.isOverflowing) {
                _this.positionScrollbar('y');
            }
            _this.scrollYTicking = false;
        };
        this._onStopScrolling = function () {
            removeClasses(_this.el, _this.classNames.scrolling);
            if (_this.options.autoHide) {
                _this.hideScrollbar('x');
                _this.hideScrollbar('y');
            }
            _this.isScrolling = false;
        };
        this.onMouseEnter = function () {
            if (!_this.isMouseEntering) {
                addClasses(_this.el, _this.classNames.mouseEntered);
                _this.showScrollbar('x');
                _this.showScrollbar('y');
                _this.isMouseEntering = true;
            }
            _this.onMouseEntered();
        };
        this._onMouseEntered = function () {
            removeClasses(_this.el, _this.classNames.mouseEntered);
            if (_this.options.autoHide) {
                _this.hideScrollbar('x');
                _this.hideScrollbar('y');
            }
            _this.isMouseEntering = false;
        };
        this._onMouseMove = function (e) {
            _this.mouseX = e.clientX;
            _this.mouseY = e.clientY;
            if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
                _this.onMouseMoveForAxis('x');
            }
            if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
                _this.onMouseMoveForAxis('y');
            }
        };
        this.onMouseLeave = function () {
            _this.onMouseMove.cancel();
            if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
                _this.onMouseLeaveForAxis('x');
            }
            if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
                _this.onMouseLeaveForAxis('y');
            }
            _this.mouseX = -1;
            _this.mouseY = -1;
        };
        this._onWindowResize = function () {
            // Recalculate scrollbarWidth in case it's a zoom
            _this.scrollbarWidth = _this.getScrollbarWidth();
            _this.hideNativeScrollbar();
        };
        this.onPointerEvent = function (e) {
            if (!_this.axis.x.track.el ||
                !_this.axis.y.track.el ||
                !_this.axis.x.scrollbar.el ||
                !_this.axis.y.scrollbar.el)
                return;
            var isWithinTrackXBounds, isWithinTrackYBounds;
            _this.axis.x.track.rect = _this.axis.x.track.el.getBoundingClientRect();
            _this.axis.y.track.rect = _this.axis.y.track.el.getBoundingClientRect();
            if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
                isWithinTrackXBounds = _this.isWithinBounds(_this.axis.x.track.rect);
            }
            if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
                isWithinTrackYBounds = _this.isWithinBounds(_this.axis.y.track.rect);
            }
            // If any pointer event is called on the scrollbar
            if (isWithinTrackXBounds || isWithinTrackYBounds) {
                // Prevent event leaking
                e.stopPropagation();
                if (e.type === 'pointerdown' && e.pointerType !== 'touch') {
                    if (isWithinTrackXBounds) {
                        _this.axis.x.scrollbar.rect =
                            _this.axis.x.scrollbar.el.getBoundingClientRect();
                        if (_this.isWithinBounds(_this.axis.x.scrollbar.rect)) {
                            _this.onDragStart(e, 'x');
                        }
                        else {
                            _this.onTrackClick(e, 'x');
                        }
                    }
                    if (isWithinTrackYBounds) {
                        _this.axis.y.scrollbar.rect =
                            _this.axis.y.scrollbar.el.getBoundingClientRect();
                        if (_this.isWithinBounds(_this.axis.y.scrollbar.rect)) {
                            _this.onDragStart(e, 'y');
                        }
                        else {
                            _this.onTrackClick(e, 'y');
                        }
                    }
                }
            }
        };
        /**
         * Drag scrollbar handle
         */
        this.drag = function (e) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            if (!_this.draggedAxis || !_this.contentWrapperEl)
                return;
            var eventOffset;
            var track = _this.axis[_this.draggedAxis].track;
            var trackSize = (_b = (_a = track.rect) === null || _a === void 0 ? void 0 : _a[_this.axis[_this.draggedAxis].sizeAttr]) !== null && _b !== void 0 ? _b : 0;
            var scrollbar = _this.axis[_this.draggedAxis].scrollbar;
            var contentSize = (_d = (_c = _this.contentWrapperEl) === null || _c === void 0 ? void 0 : _c[_this.axis[_this.draggedAxis].scrollSizeAttr]) !== null && _d !== void 0 ? _d : 0;
            var hostSize = parseInt((_f = (_e = _this.elStyles) === null || _e === void 0 ? void 0 : _e[_this.axis[_this.draggedAxis].sizeAttr]) !== null && _f !== void 0 ? _f : '0px', 10);
            e.preventDefault();
            e.stopPropagation();
            if (_this.draggedAxis === 'y') {
                eventOffset = e.pageY;
            }
            else {
                eventOffset = e.pageX;
            }
            // Calculate how far the user's mouse is from the top/left of the scrollbar (minus the dragOffset).
            var dragPos = eventOffset -
                ((_h = (_g = track.rect) === null || _g === void 0 ? void 0 : _g[_this.axis[_this.draggedAxis].offsetAttr]) !== null && _h !== void 0 ? _h : 0) -
                _this.axis[_this.draggedAxis].dragOffset;
            dragPos =
                _this.draggedAxis === 'x' && _this.isRtl
                    ? ((_k = (_j = track.rect) === null || _j === void 0 ? void 0 : _j[_this.axis[_this.draggedAxis].sizeAttr]) !== null && _k !== void 0 ? _k : 0) -
                        scrollbar.size -
                        dragPos
                    : dragPos;
            // Convert the mouse position into a percentage of the scrollbar height/width.
            var dragPerc = dragPos / (trackSize - scrollbar.size);
            // Scroll the content by the same percentage.
            var scrollPos = dragPerc * (contentSize - hostSize);
            // Fix browsers inconsistency on RTL
            if (_this.draggedAxis === 'x' && _this.isRtl) {
                scrollPos = ((_l = SimpleBarCore.getRtlHelpers()) === null || _l === void 0 ? void 0 : _l.isScrollingToNegative)
                    ? -scrollPos
                    : scrollPos;
            }
            _this.contentWrapperEl[_this.axis[_this.draggedAxis].scrollOffsetAttr] =
                scrollPos;
        };
        /**
         * End scroll handle drag
         */
        this.onEndDrag = function (e) {
            _this.isDragging = false;
            var elDocument = getElementDocument(_this.el);
            var elWindow = getElementWindow(_this.el);
            e.preventDefault();
            e.stopPropagation();
            removeClasses(_this.el, _this.classNames.dragging);
            _this.onStopScrolling();
            elDocument.removeEventListener('mousemove', _this.drag, true);
            elDocument.removeEventListener('mouseup', _this.onEndDrag, true);
            _this.removePreventClickId = elWindow.setTimeout(function () {
                // Remove these asynchronously so we still suppress click events
                // generated simultaneously with mouseup.
                elDocument.removeEventListener('click', _this.preventClick, true);
                elDocument.removeEventListener('dblclick', _this.preventClick, true);
                _this.removePreventClickId = null;
            });
        };
        /**
         * Handler to ignore click events during drag
         */
        this.preventClick = function (e) {
            e.preventDefault();
            e.stopPropagation();
        };
        this.el = element;
        this.options = __assign$1(__assign$1({}, SimpleBarCore.defaultOptions), options);
        this.classNames = __assign$1(__assign$1({}, SimpleBarCore.defaultOptions.classNames), options.classNames);
        this.axis = {
            x: {
                scrollOffsetAttr: 'scrollLeft',
                sizeAttr: 'width',
                scrollSizeAttr: 'scrollWidth',
                offsetSizeAttr: 'offsetWidth',
                offsetAttr: 'left',
                overflowAttr: 'overflowX',
                dragOffset: 0,
                isOverflowing: true,
                forceVisible: false,
                track: { size: null, el: null, rect: null, isVisible: false },
                scrollbar: { size: null, el: null, rect: null, isVisible: false }
            },
            y: {
                scrollOffsetAttr: 'scrollTop',
                sizeAttr: 'height',
                scrollSizeAttr: 'scrollHeight',
                offsetSizeAttr: 'offsetHeight',
                offsetAttr: 'top',
                overflowAttr: 'overflowY',
                dragOffset: 0,
                isOverflowing: true,
                forceVisible: false,
                track: { size: null, el: null, rect: null, isVisible: false },
                scrollbar: { size: null, el: null, rect: null, isVisible: false }
            }
        };
        if (typeof this.el !== 'object' || !this.el.nodeName) {
            throw new Error("Argument passed to SimpleBar must be an HTML element instead of ".concat(this.el));
        }
        this.onMouseMove = throttle(this._onMouseMove, 64);
        this.onWindowResize = debounce(this._onWindowResize, 64, { leading: true });
        this.onStopScrolling = debounce(this._onStopScrolling, this.stopScrollDelay);
        this.onMouseEntered = debounce(this._onMouseEntered, this.stopScrollDelay);
        this.init();
    }
    /**
     * Helper to fix browsers inconsistency on RTL:
     *  - Firefox inverts the scrollbar initial position
     *  - IE11 inverts both scrollbar position and scrolling offset
     * Directly inspired by @KingSora's OverlayScrollbars https://github.com/KingSora/OverlayScrollbars/blob/master/js/OverlayScrollbars.js#L1634
     */
    SimpleBarCore.getRtlHelpers = function () {
        if (SimpleBarCore.rtlHelpers) {
            return SimpleBarCore.rtlHelpers;
        }
        var dummyDiv = document.createElement('div');
        dummyDiv.innerHTML =
            '<div class="simplebar-dummy-scrollbar-size"><div></div></div>';
        var scrollbarDummyEl = dummyDiv.firstElementChild;
        var dummyChild = scrollbarDummyEl === null || scrollbarDummyEl === void 0 ? void 0 : scrollbarDummyEl.firstElementChild;
        if (!dummyChild)
            return null;
        document.body.appendChild(scrollbarDummyEl);
        scrollbarDummyEl.scrollLeft = 0;
        var dummyContainerOffset = SimpleBarCore.getOffset(scrollbarDummyEl);
        var dummyChildOffset = SimpleBarCore.getOffset(dummyChild);
        scrollbarDummyEl.scrollLeft = -999;
        var dummyChildOffsetAfterScroll = SimpleBarCore.getOffset(dummyChild);
        document.body.removeChild(scrollbarDummyEl);
        SimpleBarCore.rtlHelpers = {
            // determines if the scrolling is responding with negative values
            isScrollOriginAtZero: dummyContainerOffset.left !== dummyChildOffset.left,
            // determines if the origin scrollbar position is inverted or not (positioned on left or right)
            isScrollingToNegative: dummyChildOffset.left !== dummyChildOffsetAfterScroll.left
        };
        return SimpleBarCore.rtlHelpers;
    };
    SimpleBarCore.prototype.getScrollbarWidth = function () {
        // Try/catch for FF 56 throwing on undefined computedStyles
        try {
            // Detect browsers supporting CSS scrollbar styling and do not calculate
            if ((this.contentWrapperEl &&
                getComputedStyle(this.contentWrapperEl, '::-webkit-scrollbar')
                    .display === 'none') ||
                'scrollbarWidth' in document.documentElement.style ||
                '-ms-overflow-style' in document.documentElement.style) {
                return 0;
            }
            else {
                return scrollbarWidth();
            }
        }
        catch (e) {
            return scrollbarWidth();
        }
    };
    SimpleBarCore.getOffset = function (el) {
        var rect = el.getBoundingClientRect();
        var elDocument = getElementDocument(el);
        var elWindow = getElementWindow(el);
        return {
            top: rect.top +
                (elWindow.pageYOffset || elDocument.documentElement.scrollTop),
            left: rect.left +
                (elWindow.pageXOffset || elDocument.documentElement.scrollLeft)
        };
    };
    SimpleBarCore.prototype.init = function () {
        // We stop here on server-side
        if (canUseDOM) {
            this.initDOM();
            this.rtlHelpers = SimpleBarCore.getRtlHelpers();
            this.scrollbarWidth = this.getScrollbarWidth();
            this.recalculate();
            this.initListeners();
        }
    };
    SimpleBarCore.prototype.initDOM = function () {
        var _a, _b;
        // assume that element has his DOM already initiated
        this.wrapperEl = this.el.querySelector(classNamesToQuery(this.classNames.wrapper));
        this.contentWrapperEl =
            this.options.scrollableNode ||
                this.el.querySelector(classNamesToQuery(this.classNames.contentWrapper));
        this.contentEl =
            this.options.contentNode ||
                this.el.querySelector(classNamesToQuery(this.classNames.contentEl));
        this.offsetEl = this.el.querySelector(classNamesToQuery(this.classNames.offset));
        this.maskEl = this.el.querySelector(classNamesToQuery(this.classNames.mask));
        this.placeholderEl = this.findChild(this.wrapperEl, classNamesToQuery(this.classNames.placeholder));
        this.heightAutoObserverWrapperEl = this.el.querySelector(classNamesToQuery(this.classNames.heightAutoObserverWrapperEl));
        this.heightAutoObserverEl = this.el.querySelector(classNamesToQuery(this.classNames.heightAutoObserverEl));
        this.axis.x.track.el = this.findChild(this.el, "".concat(classNamesToQuery(this.classNames.track)).concat(classNamesToQuery(this.classNames.horizontal)));
        this.axis.y.track.el = this.findChild(this.el, "".concat(classNamesToQuery(this.classNames.track)).concat(classNamesToQuery(this.classNames.vertical)));
        this.axis.x.scrollbar.el =
            ((_a = this.axis.x.track.el) === null || _a === void 0 ? void 0 : _a.querySelector(classNamesToQuery(this.classNames.scrollbar))) || null;
        this.axis.y.scrollbar.el =
            ((_b = this.axis.y.track.el) === null || _b === void 0 ? void 0 : _b.querySelector(classNamesToQuery(this.classNames.scrollbar))) || null;
        if (!this.options.autoHide) {
            addClasses(this.axis.x.scrollbar.el, this.classNames.visible);
            addClasses(this.axis.y.scrollbar.el, this.classNames.visible);
        }
    };
    SimpleBarCore.prototype.initListeners = function () {
        var _this = this;
        var _a;
        var elWindow = getElementWindow(this.el);
        // Event listeners
        this.el.addEventListener('mouseenter', this.onMouseEnter);
        this.el.addEventListener('pointerdown', this.onPointerEvent, true);
        this.el.addEventListener('mousemove', this.onMouseMove);
        this.el.addEventListener('mouseleave', this.onMouseLeave);
        (_a = this.contentWrapperEl) === null || _a === void 0 ? void 0 : _a.addEventListener('scroll', this.onScroll);
        // Browser zoom triggers a window resize
        elWindow.addEventListener('resize', this.onWindowResize);
        if (!this.contentEl)
            return;
        if (window.ResizeObserver) {
            // Hack for https://github.com/WICG/ResizeObserver/issues/38
            var resizeObserverStarted_1 = false;
            var resizeObserver = elWindow.ResizeObserver || ResizeObserver;
            this.resizeObserver = new resizeObserver(function () {
                if (!resizeObserverStarted_1)
                    return;
                elWindow.requestAnimationFrame(function () {
                    _this.recalculate();
                });
            });
            this.resizeObserver.observe(this.el);
            this.resizeObserver.observe(this.contentEl);
            elWindow.requestAnimationFrame(function () {
                resizeObserverStarted_1 = true;
            });
        }
        // This is required to detect horizontal scroll. Vertical scroll only needs the resizeObserver.
        this.mutationObserver = new elWindow.MutationObserver(function () {
            elWindow.requestAnimationFrame(function () {
                _this.recalculate();
            });
        });
        this.mutationObserver.observe(this.contentEl, {
            childList: true,
            subtree: true,
            characterData: true
        });
    };
    SimpleBarCore.prototype.recalculate = function () {
        if (!this.heightAutoObserverEl ||
            !this.contentEl ||
            !this.contentWrapperEl ||
            !this.wrapperEl ||
            !this.placeholderEl)
            return;
        var elWindow = getElementWindow(this.el);
        this.elStyles = elWindow.getComputedStyle(this.el);
        this.isRtl = this.elStyles.direction === 'rtl';
        var contentElOffsetWidth = this.contentEl.offsetWidth;
        var isHeightAuto = this.heightAutoObserverEl.offsetHeight <= 1;
        var isWidthAuto = this.heightAutoObserverEl.offsetWidth <= 1 || contentElOffsetWidth > 0;
        var contentWrapperElOffsetWidth = this.contentWrapperEl.offsetWidth;
        var elOverflowX = this.elStyles.overflowX;
        var elOverflowY = this.elStyles.overflowY;
        this.contentEl.style.padding = "".concat(this.elStyles.paddingTop, " ").concat(this.elStyles.paddingRight, " ").concat(this.elStyles.paddingBottom, " ").concat(this.elStyles.paddingLeft);
        this.wrapperEl.style.margin = "-".concat(this.elStyles.paddingTop, " -").concat(this.elStyles.paddingRight, " -").concat(this.elStyles.paddingBottom, " -").concat(this.elStyles.paddingLeft);
        var contentElScrollHeight = this.contentEl.scrollHeight;
        var contentElScrollWidth = this.contentEl.scrollWidth;
        this.contentWrapperEl.style.height = isHeightAuto ? 'auto' : '100%';
        // Determine placeholder size
        this.placeholderEl.style.width = isWidthAuto
            ? "".concat(contentElOffsetWidth || contentElScrollWidth, "px")
            : 'auto';
        this.placeholderEl.style.height = "".concat(contentElScrollHeight, "px");
        var contentWrapperElOffsetHeight = this.contentWrapperEl.offsetHeight;
        this.axis.x.isOverflowing =
            contentElOffsetWidth !== 0 && contentElScrollWidth > contentElOffsetWidth;
        this.axis.y.isOverflowing =
            contentElScrollHeight > contentWrapperElOffsetHeight;
        // Set isOverflowing to false if user explicitely set hidden overflow
        this.axis.x.isOverflowing =
            elOverflowX === 'hidden' ? false : this.axis.x.isOverflowing;
        this.axis.y.isOverflowing =
            elOverflowY === 'hidden' ? false : this.axis.y.isOverflowing;
        this.axis.x.forceVisible =
            this.options.forceVisible === 'x' || this.options.forceVisible === true;
        this.axis.y.forceVisible =
            this.options.forceVisible === 'y' || this.options.forceVisible === true;
        this.hideNativeScrollbar();
        // Set isOverflowing to false if scrollbar is not necessary (content is shorter than offset)
        var offsetForXScrollbar = this.axis.x.isOverflowing
            ? this.scrollbarWidth
            : 0;
        var offsetForYScrollbar = this.axis.y.isOverflowing
            ? this.scrollbarWidth
            : 0;
        this.axis.x.isOverflowing =
            this.axis.x.isOverflowing &&
                contentElScrollWidth > contentWrapperElOffsetWidth - offsetForYScrollbar;
        this.axis.y.isOverflowing =
            this.axis.y.isOverflowing &&
                contentElScrollHeight >
                    contentWrapperElOffsetHeight - offsetForXScrollbar;
        this.axis.x.scrollbar.size = this.getScrollbarSize('x');
        this.axis.y.scrollbar.size = this.getScrollbarSize('y');
        if (this.axis.x.scrollbar.el)
            this.axis.x.scrollbar.el.style.width = "".concat(this.axis.x.scrollbar.size, "px");
        if (this.axis.y.scrollbar.el)
            this.axis.y.scrollbar.el.style.height = "".concat(this.axis.y.scrollbar.size, "px");
        this.positionScrollbar('x');
        this.positionScrollbar('y');
        this.toggleTrackVisibility('x');
        this.toggleTrackVisibility('y');
    };
    /**
     * Calculate scrollbar size
     */
    SimpleBarCore.prototype.getScrollbarSize = function (axis) {
        var _a, _b;
        if (axis === void 0) { axis = 'y'; }
        if (!this.axis[axis].isOverflowing || !this.contentEl) {
            return 0;
        }
        var contentSize = this.contentEl[this.axis[axis].scrollSizeAttr];
        var trackSize = (_b = (_a = this.axis[axis].track.el) === null || _a === void 0 ? void 0 : _a[this.axis[axis].offsetSizeAttr]) !== null && _b !== void 0 ? _b : 0;
        var scrollbarRatio = trackSize / contentSize;
        var scrollbarSize;
        // Calculate new height/position of drag handle.
        scrollbarSize = Math.max(~~(scrollbarRatio * trackSize), this.options.scrollbarMinSize);
        if (this.options.scrollbarMaxSize) {
            scrollbarSize = Math.min(scrollbarSize, this.options.scrollbarMaxSize);
        }
        return scrollbarSize;
    };
    SimpleBarCore.prototype.positionScrollbar = function (axis) {
        var _a, _b, _c;
        if (axis === void 0) { axis = 'y'; }
        var scrollbar = this.axis[axis].scrollbar;
        if (!this.axis[axis].isOverflowing ||
            !this.contentWrapperEl ||
            !scrollbar.el ||
            !this.elStyles) {
            return;
        }
        var contentSize = this.contentWrapperEl[this.axis[axis].scrollSizeAttr];
        var trackSize = ((_a = this.axis[axis].track.el) === null || _a === void 0 ? void 0 : _a[this.axis[axis].offsetSizeAttr]) || 0;
        var hostSize = parseInt(this.elStyles[this.axis[axis].sizeAttr], 10);
        var scrollOffset = this.contentWrapperEl[this.axis[axis].scrollOffsetAttr];
        scrollOffset =
            axis === 'x' &&
                this.isRtl &&
                ((_b = SimpleBarCore.getRtlHelpers()) === null || _b === void 0 ? void 0 : _b.isScrollOriginAtZero)
                ? -scrollOffset
                : scrollOffset;
        if (axis === 'x' && this.isRtl) {
            scrollOffset = ((_c = SimpleBarCore.getRtlHelpers()) === null || _c === void 0 ? void 0 : _c.isScrollingToNegative)
                ? scrollOffset
                : -scrollOffset;
        }
        var scrollPourcent = scrollOffset / (contentSize - hostSize);
        var handleOffset = ~~((trackSize - scrollbar.size) * scrollPourcent);
        handleOffset =
            axis === 'x' && this.isRtl
                ? -handleOffset + (trackSize - scrollbar.size)
                : handleOffset;
        scrollbar.el.style.transform =
            axis === 'x'
                ? "translate3d(".concat(handleOffset, "px, 0, 0)")
                : "translate3d(0, ".concat(handleOffset, "px, 0)");
    };
    SimpleBarCore.prototype.toggleTrackVisibility = function (axis) {
        if (axis === void 0) { axis = 'y'; }
        var track = this.axis[axis].track.el;
        var scrollbar = this.axis[axis].scrollbar.el;
        if (!track || !scrollbar || !this.contentWrapperEl)
            return;
        if (this.axis[axis].isOverflowing || this.axis[axis].forceVisible) {
            track.style.visibility = 'visible';
            this.contentWrapperEl.style[this.axis[axis].overflowAttr] = 'scroll';
            this.el.classList.add("".concat(this.classNames.scrollable, "-").concat(axis));
        }
        else {
            track.style.visibility = 'hidden';
            this.contentWrapperEl.style[this.axis[axis].overflowAttr] = 'hidden';
            this.el.classList.remove("".concat(this.classNames.scrollable, "-").concat(axis));
        }
        // Even if forceVisible is enabled, scrollbar itself should be hidden
        if (this.axis[axis].isOverflowing) {
            scrollbar.style.display = 'block';
        }
        else {
            scrollbar.style.display = 'none';
        }
    };
    SimpleBarCore.prototype.showScrollbar = function (axis) {
        if (axis === void 0) { axis = 'y'; }
        if (this.axis[axis].isOverflowing && !this.axis[axis].scrollbar.isVisible) {
            addClasses(this.axis[axis].scrollbar.el, this.classNames.visible);
            this.axis[axis].scrollbar.isVisible = true;
        }
    };
    SimpleBarCore.prototype.hideScrollbar = function (axis) {
        if (axis === void 0) { axis = 'y'; }
        if (this.isDragging)
            return;
        if (this.axis[axis].isOverflowing && this.axis[axis].scrollbar.isVisible) {
            removeClasses(this.axis[axis].scrollbar.el, this.classNames.visible);
            this.axis[axis].scrollbar.isVisible = false;
        }
    };
    SimpleBarCore.prototype.hideNativeScrollbar = function () {
        if (!this.offsetEl)
            return;
        this.offsetEl.style[this.isRtl ? 'left' : 'right'] =
            this.axis.y.isOverflowing || this.axis.y.forceVisible
                ? "-".concat(this.scrollbarWidth, "px")
                : '0px';
        this.offsetEl.style.bottom =
            this.axis.x.isOverflowing || this.axis.x.forceVisible
                ? "-".concat(this.scrollbarWidth, "px")
                : '0px';
    };
    SimpleBarCore.prototype.onMouseMoveForAxis = function (axis) {
        if (axis === void 0) { axis = 'y'; }
        var currentAxis = this.axis[axis];
        if (!currentAxis.track.el || !currentAxis.scrollbar.el)
            return;
        currentAxis.track.rect = currentAxis.track.el.getBoundingClientRect();
        currentAxis.scrollbar.rect =
            currentAxis.scrollbar.el.getBoundingClientRect();
        if (this.isWithinBounds(currentAxis.track.rect)) {
            this.showScrollbar(axis);
            addClasses(currentAxis.track.el, this.classNames.hover);
            if (this.isWithinBounds(currentAxis.scrollbar.rect)) {
                addClasses(currentAxis.scrollbar.el, this.classNames.hover);
            }
            else {
                removeClasses(currentAxis.scrollbar.el, this.classNames.hover);
            }
        }
        else {
            removeClasses(currentAxis.track.el, this.classNames.hover);
            if (this.options.autoHide) {
                this.hideScrollbar(axis);
            }
        }
    };
    SimpleBarCore.prototype.onMouseLeaveForAxis = function (axis) {
        if (axis === void 0) { axis = 'y'; }
        removeClasses(this.axis[axis].track.el, this.classNames.hover);
        removeClasses(this.axis[axis].scrollbar.el, this.classNames.hover);
        if (this.options.autoHide) {
            this.hideScrollbar(axis);
        }
    };
    /**
     * on scrollbar handle drag movement starts
     */
    SimpleBarCore.prototype.onDragStart = function (e, axis) {
        var _a;
        if (axis === void 0) { axis = 'y'; }
        this.isDragging = true;
        var elDocument = getElementDocument(this.el);
        var elWindow = getElementWindow(this.el);
        var scrollbar = this.axis[axis].scrollbar;
        // Measure how far the user's mouse is from the top of the scrollbar drag handle.
        var eventOffset = axis === 'y' ? e.pageY : e.pageX;
        this.axis[axis].dragOffset =
            eventOffset - (((_a = scrollbar.rect) === null || _a === void 0 ? void 0 : _a[this.axis[axis].offsetAttr]) || 0);
        this.draggedAxis = axis;
        addClasses(this.el, this.classNames.dragging);
        elDocument.addEventListener('mousemove', this.drag, true);
        elDocument.addEventListener('mouseup', this.onEndDrag, true);
        if (this.removePreventClickId === null) {
            elDocument.addEventListener('click', this.preventClick, true);
            elDocument.addEventListener('dblclick', this.preventClick, true);
        }
        else {
            elWindow.clearTimeout(this.removePreventClickId);
            this.removePreventClickId = null;
        }
    };
    SimpleBarCore.prototype.onTrackClick = function (e, axis) {
        var _this = this;
        var _a, _b, _c, _d;
        if (axis === void 0) { axis = 'y'; }
        var currentAxis = this.axis[axis];
        if (!this.options.clickOnTrack ||
            !currentAxis.scrollbar.el ||
            !this.contentWrapperEl)
            return;
        // Preventing the event's default to trigger click underneath
        e.preventDefault();
        var elWindow = getElementWindow(this.el);
        this.axis[axis].scrollbar.rect =
            currentAxis.scrollbar.el.getBoundingClientRect();
        var scrollbar = this.axis[axis].scrollbar;
        var scrollbarOffset = (_b = (_a = scrollbar.rect) === null || _a === void 0 ? void 0 : _a[this.axis[axis].offsetAttr]) !== null && _b !== void 0 ? _b : 0;
        var hostSize = parseInt((_d = (_c = this.elStyles) === null || _c === void 0 ? void 0 : _c[this.axis[axis].sizeAttr]) !== null && _d !== void 0 ? _d : '0px', 10);
        var scrolled = this.contentWrapperEl[this.axis[axis].scrollOffsetAttr];
        var t = axis === 'y'
            ? this.mouseY - scrollbarOffset
            : this.mouseX - scrollbarOffset;
        var dir = t < 0 ? -1 : 1;
        var scrollSize = dir === -1 ? scrolled - hostSize : scrolled + hostSize;
        var speed = 40;
        var scrollTo = function () {
            if (!_this.contentWrapperEl)
                return;
            if (dir === -1) {
                if (scrolled > scrollSize) {
                    scrolled -= speed;
                    _this.contentWrapperEl[_this.axis[axis].scrollOffsetAttr] = scrolled;
                    elWindow.requestAnimationFrame(scrollTo);
                }
            }
            else {
                if (scrolled < scrollSize) {
                    scrolled += speed;
                    _this.contentWrapperEl[_this.axis[axis].scrollOffsetAttr] = scrolled;
                    elWindow.requestAnimationFrame(scrollTo);
                }
            }
        };
        scrollTo();
    };
    /**
     * Getter for content element
     */
    SimpleBarCore.prototype.getContentElement = function () {
        return this.contentEl;
    };
    /**
     * Getter for original scrolling element
     */
    SimpleBarCore.prototype.getScrollElement = function () {
        return this.contentWrapperEl;
    };
    SimpleBarCore.prototype.removeListeners = function () {
        var elWindow = getElementWindow(this.el);
        // Event listeners
        this.el.removeEventListener('mouseenter', this.onMouseEnter);
        this.el.removeEventListener('pointerdown', this.onPointerEvent, true);
        this.el.removeEventListener('mousemove', this.onMouseMove);
        this.el.removeEventListener('mouseleave', this.onMouseLeave);
        if (this.contentWrapperEl) {
            this.contentWrapperEl.removeEventListener('scroll', this.onScroll);
        }
        elWindow.removeEventListener('resize', this.onWindowResize);
        if (this.mutationObserver) {
            this.mutationObserver.disconnect();
        }
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
        }
        // Cancel all debounced functions
        this.onMouseMove.cancel();
        this.onWindowResize.cancel();
        this.onStopScrolling.cancel();
        this.onMouseEntered.cancel();
    };
    /**
     * Remove all listeners from DOM nodes
     */
    SimpleBarCore.prototype.unMount = function () {
        this.removeListeners();
    };
    /**
     * Check if mouse is within bounds
     */
    SimpleBarCore.prototype.isWithinBounds = function (bbox) {
        return (this.mouseX >= bbox.left &&
            this.mouseX <= bbox.left + bbox.width &&
            this.mouseY >= bbox.top &&
            this.mouseY <= bbox.top + bbox.height);
    };
    /**
     * Find element children matches query
     */
    SimpleBarCore.prototype.findChild = function (el, query) {
        var matches = el.matches ||
            el.webkitMatchesSelector ||
            el.mozMatchesSelector ||
            el.msMatchesSelector;
        return Array.prototype.filter.call(el.children, function (child) {
            return matches.call(child, query);
        })[0];
    };
    SimpleBarCore.rtlHelpers = null;
    SimpleBarCore.defaultOptions = {
        forceVisible: false,
        clickOnTrack: true,
        scrollbarMinSize: 25,
        scrollbarMaxSize: 0,
        ariaLabel: 'scrollable content',
        tabIndex: 0,
        classNames: {
            contentEl: 'simplebar-content',
            contentWrapper: 'simplebar-content-wrapper',
            offset: 'simplebar-offset',
            mask: 'simplebar-mask',
            wrapper: 'simplebar-wrapper',
            placeholder: 'simplebar-placeholder',
            scrollbar: 'simplebar-scrollbar',
            track: 'simplebar-track',
            heightAutoObserverWrapperEl: 'simplebar-height-auto-observer-wrapper',
            heightAutoObserverEl: 'simplebar-height-auto-observer',
            visible: 'simplebar-visible',
            horizontal: 'simplebar-horizontal',
            vertical: 'simplebar-vertical',
            hover: 'simplebar-hover',
            dragging: 'simplebar-dragging',
            scrolling: 'simplebar-scrolling',
            scrollable: 'simplebar-scrollable',
            mouseEntered: 'simplebar-mouse-entered'
        },
        scrollableNode: null,
        contentNode: null,
        autoHide: true
    };
    /**
     * Static functions
     */
    SimpleBarCore.getOptions = getOptions;
    SimpleBarCore.helpers = helpers;
    return SimpleBarCore;
}());/**
 * simplebar-react - v3.3.1
 * React component for SimpleBar
 * https://grsmto.github.io/simplebar/
 *
 * Made by Adrien Denat
 * Under MIT License
 */


/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var SimpleBar = React__namespace.forwardRef(function (_a, ref) {
    var children = _a.children, _b = _a.scrollableNodeProps, scrollableNodeProps = _b === void 0 ? {} : _b, otherProps = __rest(_a, ["children", "scrollableNodeProps"]);
    var elRef = React__namespace.useRef();
    var scrollableNodeRef = React__namespace.useRef();
    var contentNodeRef = React__namespace.useRef();
    var options = {};
    var rest = {};
    Object.keys(otherProps).forEach(function (key) {
        if (Object.prototype.hasOwnProperty.call(SimpleBarCore.defaultOptions, key)) {
            options[key] = otherProps[key];
        }
        else {
            rest[key] = otherProps[key];
        }
    });
    var classNames = __assign(__assign({}, SimpleBarCore.defaultOptions.classNames), options.classNames);
    var scrollableNodeFullProps = __assign(__assign({}, scrollableNodeProps), { className: "".concat(classNames.contentWrapper).concat(scrollableNodeProps.className ? " ".concat(scrollableNodeProps.className) : ''), tabIndex: options.tabIndex || SimpleBarCore.defaultOptions.tabIndex, role: 'region', 'aria-label': options.ariaLabel || SimpleBarCore.defaultOptions.ariaLabel });
    React__namespace.useEffect(function () {
        var instance;
        scrollableNodeRef.current = scrollableNodeFullProps.ref
            ? scrollableNodeFullProps.ref.current
            : scrollableNodeRef.current;
        if (elRef.current) {
            instance = new SimpleBarCore(elRef.current, __assign(__assign(__assign({}, options), (scrollableNodeRef.current && {
                scrollableNode: scrollableNodeRef.current
            })), (contentNodeRef.current && {
                contentNode: contentNodeRef.current
            })));
            if (typeof ref === 'function') {
                ref(instance);
            }
            else if (ref) {
                ref.current = instance;
            }
        }
        return function () {
            instance === null || instance === void 0 ? void 0 : instance.unMount();
            instance = null;
            if (typeof ref === 'function') {
                ref(null);
            }
        };
    }, []);
    return (React__namespace.createElement("div", __assign({ "data-simplebar": "init", ref: elRef }, rest),
        React__namespace.createElement("div", { className: classNames.wrapper },
            React__namespace.createElement("div", { className: classNames.heightAutoObserverWrapperEl },
                React__namespace.createElement("div", { className: classNames.heightAutoObserverEl })),
            React__namespace.createElement("div", { className: classNames.mask },
                React__namespace.createElement("div", { className: classNames.offset }, typeof children === 'function' ? (children({
                    scrollableNodeRef: scrollableNodeRef,
                    scrollableNodeProps: __assign(__assign({}, scrollableNodeFullProps), { ref: scrollableNodeRef }),
                    contentNodeRef: contentNodeRef,
                    contentNodeProps: {
                        className: classNames.contentEl,
                        ref: contentNodeRef
                    }
                })) : (React__namespace.createElement("div", __assign({}, scrollableNodeFullProps),
                    React__namespace.createElement("div", { className: classNames.contentEl }, children))))),
            React__namespace.createElement("div", { className: classNames.placeholder })),
        React__namespace.createElement("div", { className: "".concat(classNames.track, " ").concat(classNames.horizontal) },
            React__namespace.createElement("div", { className: classNames.scrollbar })),
        React__namespace.createElement("div", { className: "".concat(classNames.track, " ").concat(classNames.vertical) },
            React__namespace.createElement("div", { className: classNames.scrollbar }))));
});
SimpleBar.displayName = 'SimpleBar';var makeSortableItems = function (items) {
    return items === null || items === void 0 ? void 0 : items.map(function (_a, index) {
        var id = _a.id, item = __rest$1(_a, ["id"]);
        return __assign$2({ id: id == null ? "".concat(uuid.v4(), "_").concat(index) : id }, item);
    });
};const CSS = /*#__PURE__*/Object.freeze({
  Translate: {
    toString(transform) {
      if (!transform) {
        return;
      }

      const {
        x,
        y
      } = transform;
      return "translate3d(" + (x ? Math.round(x) : 0) + "px, " + (y ? Math.round(y) : 0) + "px, 0)";
    }

  },
  Scale: {
    toString(transform) {
      if (!transform) {
        return;
      }

      const {
        scaleX,
        scaleY
      } = transform;
      return "scaleX(" + scaleX + ") scaleY(" + scaleY + ")";
    }

  },
  Transform: {
    toString(transform) {
      if (!transform) {
        return;
      }

      return [CSS.Translate.toString(transform), CSS.Scale.toString(transform)].join(' ');
    }

  },
  Transition: {
    toString(_ref) {
      let {
        property,
        duration,
        easing
      } = _ref;
      return property + " " + duration + "ms " + easing;
    }

  }
});var StyledButtonsBox = material.styled(material.Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n"])));
var PTableBodyCell = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/
    var className = _a.className, style = _a.style, sx = _a.sx, item = _a.item, index = _a.index, column = _a.column, defaultAlign = _a.defaultAlign, defaultEllipsis = _a.defaultEllipsis, onClick = _a.onClick, onCheckChange = _a.onCheckChange;
    var _b = useTableState(), menuOpen = _b.menuOpen, setItemColumnChecked = _b.setItemColumnChecked, setItemColumnCheckDisabled = _b.setItemColumnCheckDisabled, setItemColumnCommands = _b.setItemColumnCommands;
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _c = React.useState(false), checked = _c[0], setChecked = _c[1];
    var _d = React.useState(false), checkDisabled = _d[0], setCheckDisabled = _d[1];
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    React.useEffect(function () {
        if (column.type === 'check') {
            setChecked(column.onInitChecked ? column.onInitChecked(item) : false);
            setCheckDisabled(column.onCheckDisabled ? column.onCheckDisabled(item) : false);
        }
        setItemColumnCommands(item, column, {
            setChecked: function (checked) {
                if (column.type === 'check') {
                    setChecked(checked);
                }
            },
            setCheckDisabled: function (disabled) {
                if (column.type === 'check') {
                    setCheckDisabled(disabled);
                }
            },
        });
    }, [column, item, setItemColumnCommands]);
    React.useEffect(function () {
        if (column.type === 'check') {
            setItemColumnChecked(item, column, checked);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [checked]);
    React.useEffect(function () {
        if (column.type === 'check') {
            setItemColumnCheckDisabled(item, column, checkDisabled);
            column.onCheckDisabledChange && column.onCheckDisabledChange(item, checkDisabled);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [checkDisabled]);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var isHidden = React.useMemo(function () { return (column.onHide ? column.onHide(item, index) : false); }, [column, index, item]);
    var buttonsBoxJustifyContent = React.useMemo(function () {
        switch (getTableColumnAlign(column, defaultAlign)) {
            case 'center':
                return 'center';
            case 'right':
                return 'end';
            default:
                return 'start';
        }
    }, [column, defaultAlign]);
    var data = React.useMemo(function () {
        var _a, _b;
        var data;
        if (column.type !== 'check') {
            if (column.onRender) {
                data = column.onRender(item, index);
            }
            else if (column.name) {
                data = item[column.name];
            }
            else {
                data = undefined;
            }
        }
        switch (column.type) {
            case 'number':
                if (typeof data === 'string' || typeof data === 'number') {
                    data = formatting.formatNumber(data);
                }
                if (column.numberPrefix) {
                    data = (React.createElement(React.Fragment, null,
                        React.createElement("span", { style: { opacity: 0.5, marginRight: 2 } }, column.numberPrefix),
                        data));
                }
                if (column.numberSuffix) {
                    data = (React.createElement(React.Fragment, null,
                        data,
                        React.createElement("span", { style: { opacity: 0.5, marginLeft: 2 } }, column.numberSuffix)));
                }
                break;
            case 'tel':
                if (typeof data === 'string') {
                    data = formatting.formatTelNo(data);
                }
                break;
            case 'business_no':
                if (typeof data === 'string') {
                    data = formatting.formatBusinessNo(data);
                }
                break;
            case 'personal_no':
                if (typeof data === 'string') {
                    data = formatting.formatPersonalNo(data);
                }
                break;
            case 'check':
                data = (React.createElement(material.Box, { className: 'PTableBoxyCell-check-box', onClick: menuOpen ? undefined : function (e) { return e.stopPropagation(); } },
                    React.createElement(material.Checkbox, { checked: checked, disabled: checkDisabled, onChange: function (e, newChecked) {
                            setChecked(newChecked);
                            column.onCheckChange && column.onCheckChange(item, newChecked);
                            onCheckChange && onCheckChange(item, column, newChecked);
                        } })));
                break;
            case 'button':
                data = (React.createElement(material.Box, { className: 'PTableBoxyCell-button-box', onClick: menuOpen ? undefined : function (e) { return e.stopPropagation(); } }, data));
                break;
            case 'buttons':
                data = (React.createElement(StyledButtonsBox, { className: 'PTableBodyCell-buttons-box', justifyContent: buttonsBoxJustifyContent, onClick: menuOpen ? undefined : function (e) { return e.stopPropagation(); } }, data));
                break;
            case 'img':
                {
                    var img = React.createElement("img", { src: data, style: { maxWidth: '100%', verticalAlign: 'middle' }, alt: '' });
                    var placement = ((_a = column.tooltipProps) === null || _a === void 0 ? void 0 : _a.placement) ? (_b = column.tooltipProps) === null || _b === void 0 ? void 0 : _b.placement : 'left';
                    data = (React.createElement("a", { href: data, target: '_blank', onClick: menuOpen
                            ? undefined
                            : function (e) {
                                e.stopPropagation();
                            } },
                        React.createElement(material.Tooltip, __assign$2({ className: 'PTableBodyCell-tooltip', title: React.createElement("div", { style: { paddingTop: 3, paddingBottom: 3 } }, img) }, column.tooltipProps, { placement: placement }), img)));
                }
                break;
            case 'date':
                if (data) {
                    data = dayjs(data, column.dateFormat).format('YYYY-MM-DD');
                }
                break;
            case 'datetime':
                if (data) {
                    var dt = dayjs(data, column.dateFormat);
                    data = (React.createElement(React.Fragment, null,
                        React.createElement("span", null, dt.format('YYYY-MM-DD')),
                        column.dateTwoLine ? React.createElement("br", null) : ' ',
                        React.createElement("span", { style: { opacity: 0.5 } }, dt.format('HH:mm:ss'))));
                }
                break;
            case 'date-hour':
                if (data) {
                    var dt = dayjs(data, column.dateFormat);
                    data = (React.createElement(React.Fragment, null,
                        React.createElement("span", null, dt.format('YYYY-MM-DD')),
                        column.dateTwoLine ? React.createElement("br", null) : ' ',
                        React.createElement("span", { style: { opacity: 0.5 } }, dt.format('HH시'))));
                }
                break;
            case 'date-minute':
                if (data) {
                    var dt = dayjs(data, column.dateFormat);
                    data = (React.createElement(React.Fragment, null,
                        React.createElement("span", null, dt.format('YYYY-MM-DD')),
                        column.dateTwoLine ? React.createElement("br", null) : ' ',
                        React.createElement("span", { style: { opacity: 0.5 } }, dt.format('HH시 MM분'))));
                }
                break;
        }
        if (column.type !== 'img') {
            var tooltip = void 0;
            if (column.onGetTooltip) {
                tooltip = column.onGetTooltip(item, index);
            }
            if (tooltip) {
                data = (React.createElement(material.Tooltip, __assign$2({ className: 'PTableBodyCell-tooltip', title: tooltip }, column.tooltipProps), React.isValidElement(data) ? (data.type === React.Fragment ? (React.createElement("span", null, data)) : (data)) : (React.createElement("span", null, data))));
            }
        }
        return data;
    }, [column, item, index, menuOpen, checked, checkDisabled, buttonsBoxJustifyContent, onCheckChange]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleClick = React.useCallback(function (item, index) {
        if (column.onClick) {
            column.onClick(item, index);
        }
        else {
            if (onClick)
                onClick(item, index);
        }
    }, [column, onClick]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(PTableCommonCell, { ref: ref, type: 'body', className: classNames('PTableBodyCell', className), style: style, sx: sx, column: column, defaultAlign: defaultAlign, defaultEllipsis: defaultEllipsis, item: item, index: index, onClick: column.onClick || onClick ? handleClick : undefined }, !isHidden && data));
});
var templateObject_1;var PStyledBodyRow = material.styled(material.TableRow)(function (_a) {
    var theme = _a.theme;
    return ({
        '&.odd-color:nth-of-type(odd):not(:hover)': {
            backgroundColor: material.lighten(theme.palette.action.hover, 0.4),
        },
        '&.even-color:nth-of-type(even):not(:hover)': {
            backgroundColor: material.lighten(theme.palette.action.hover, 0.4),
        },
    });
});
var PTableBodyRow = function (_a) {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/
    var className = _a.className, style = _a.style, id = _a.id, index = _a.index, defaultAlign = _a.defaultAlign, defaultEllipsis = _a.defaultEllipsis, sortable$1 = _a.sortable, columns = _a.columns, item = _a.item, onClick = _a.onClick, onCheckChange = _a.onCheckChange, onGetColumnClassName = _a.onGetColumnClassName, onGetColumnStyle = _a.onGetColumnStyle, onGetColumnSx = _a.onGetColumnSx, props = __rest$1(_a, ["className", "style", "id", "index", "defaultAlign", "defaultEllipsis", "sortable", "columns", "item", "onClick", "onCheckChange", "onGetColumnClassName", "onGetColumnStyle", "onGetColumnSx"]);
    var _b = sortable.useSortable({ id: id }), attributes = _b.attributes, listeners = _b.listeners, setNodeRef = _b.setNodeRef, transform = _b.transform, transition = _b.transition;
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/
    var sortableProps = sortable$1
        ? __assign$2(__assign$2({ ref: setNodeRef }, attributes), listeners) : {};
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(React.Fragment, null,
        React.createElement(PStyledBodyRow, __assign$2({ className: classNames('PTableBodyRow', className), style: sortable$1
                ? __assign$2(__assign$2({}, style), { transform: CSS.Transform.toString(transform), transition: transition }) : style }, props, sortableProps), columns.map(function (column, columnIdx) { return (React.createElement(PTableBodyCell, { className: onGetColumnClassName ? onGetColumnClassName(column, item, index) : undefined, sx: onGetColumnSx ? onGetColumnSx(column, item, index) : undefined, style: onGetColumnStyle ? onGetColumnStyle(column, item, index) : undefined, key: columnIdx, index: index, item: item, defaultAlign: defaultAlign, defaultEllipsis: defaultEllipsis, column: column, onClick: onClick, onCheckChange: onCheckChange })); }))));
};var PTableSortableBodyBlock = function (_a) {
    var items = _a.items, baseIndex = _a.baseIndex, columns = _a.columns, showOddColor = _a.showOddColor, showEvenColor = _a.showEvenColor, onGetBodyRowStyle = _a.onGetBodyRowStyle, onGetBodyRowSx = _a.onGetBodyRowSx, onGetBodyRowClassName = _a.onGetBodyRowClassName, onGetBodyColumnClassName = _a.onGetBodyColumnClassName, onGetBodyColumnStyle = _a.onGetBodyColumnStyle, onGetBodyColumnSx = _a.onGetBodyColumnSx, defaultAlign = _a.defaultAlign, defaultEllipsis = _a.defaultEllipsis, sortable = _a.sortable, onClick = _a.onClick, onCheckChange = _a.onCheckChange;
    var progressiveVisible = useTableState().progressiveVisible;
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/
    var _b = reactIntersectionObserver.useInView({ threshold: 0, triggerOnce: true }), ref = _b.ref, inView = _b.inView;
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _c = React.useState(baseIndex === 0), canInView = _c[0], setCanInView = _c[1];
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    React.useEffect(function () {
        if (progressiveVisible && baseIndex > 0) {
            setTimeout(function () {
                setCanInView(true);
            }, baseIndex * compare.ifUndefined(progressiveVisible.delay, 300));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [progressiveVisible]);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var renderItems = React.useMemo(function () {
        return !progressiveVisible || inView ? (items.map(function (item, idx) { return (React.createElement(PTableBodyRow, { key: item.id, id: item.id, index: baseIndex + idx, className: classNames(showOddColor && 'odd-color', showEvenColor && 'even-color', onGetBodyRowClassName ? onGetBodyRowClassName(item, baseIndex + idx) : undefined), style: onGetBodyRowStyle ? onGetBodyRowStyle(item, baseIndex + idx) : undefined, sx: onGetBodyRowSx ? onGetBodyRowSx(item, baseIndex + idx) : undefined, hover: true, onGetColumnClassName: onGetBodyColumnClassName, onGetColumnStyle: onGetBodyColumnStyle, onGetColumnSx: onGetBodyColumnSx, defaultAlign: defaultAlign, defaultEllipsis: defaultEllipsis, sortable: sortable, columns: columns, item: item, onClick: onClick, onCheckChange: onCheckChange })); })) : (React.createElement(material.TableRow, { ref: canInView ? ref : undefined },
            React.createElement(material.TableCell, { colSpan: columns.length, style: { height: progressiveVisible.rowHeight * items.length, border: 'none' } })));
    }, [
        baseIndex,
        canInView,
        columns,
        defaultAlign,
        defaultEllipsis,
        inView,
        items,
        onCheckChange,
        onClick,
        onGetBodyColumnClassName,
        onGetBodyColumnStyle,
        onGetBodyColumnSx,
        onGetBodyRowClassName,
        onGetBodyRowStyle,
        onGetBodyRowSx,
        progressiveVisible,
        ref,
        showEvenColor,
        showOddColor,
        sortable,
    ]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return React.createElement(React.Fragment, null, renderItems);
};var chunkArray = function (array, size) {
    var result = [];
    for (var i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
};var PTableSortableBody = function (_a) {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/
    var items = _a.items, columns = _a.columns, showOddColor = _a.showOddColor, showEvenColor = _a.showEvenColor, onGetBodyRowStyle = _a.onGetBodyRowStyle, onGetBodyRowSx = _a.onGetBodyRowSx, onGetBodyRowClassName = _a.onGetBodyRowClassName, onGetBodyColumnClassName = _a.onGetBodyColumnClassName, onGetBodyColumnStyle = _a.onGetBodyColumnStyle, onGetBodyColumnSx = _a.onGetBodyColumnSx, defaultAlign = _a.defaultAlign, defaultEllipsis = _a.defaultEllipsis, sortable$1 = _a.sortable, onClick = _a.onClick, onCheckChange = _a.onCheckChange;
    var progressiveVisible = useTableState().progressiveVisible;
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var renderBlock = React.useMemo(function () {
        if (progressiveVisible) {
            return (React.createElement(React.Fragment, null, chunkArray(items, compare.ifUndefined(progressiveVisible.blockSize, 20)).map(function (bItems, index) { return (React.createElement(PTableSortableBodyBlock, { key: index, items: bItems, baseIndex: index, columns: columns, showOddColor: showOddColor, showEvenColor: showEvenColor, onGetBodyRowStyle: onGetBodyRowStyle, onGetBodyRowSx: onGetBodyRowSx, onGetBodyRowClassName: onGetBodyRowClassName, onGetBodyColumnClassName: onGetBodyColumnClassName, onGetBodyColumnStyle: onGetBodyColumnStyle, onGetBodyColumnSx: onGetBodyColumnSx, defaultAlign: defaultAlign, defaultEllipsis: defaultEllipsis, sortable: sortable$1, onClick: onClick, onCheckChange: onCheckChange })); })));
        }
        else {
            return (React.createElement(PTableSortableBodyBlock, { items: items, baseIndex: 0, columns: columns, showOddColor: showOddColor, showEvenColor: showEvenColor, onGetBodyRowStyle: onGetBodyRowStyle, onGetBodyRowSx: onGetBodyRowSx, onGetBodyRowClassName: onGetBodyRowClassName, onGetBodyColumnClassName: onGetBodyColumnClassName, onGetBodyColumnStyle: onGetBodyColumnStyle, onGetBodyColumnSx: onGetBodyColumnSx, defaultAlign: defaultAlign, defaultEllipsis: defaultEllipsis, sortable: sortable$1, onClick: onClick, onCheckChange: onCheckChange }));
        }
    }, [
        columns,
        defaultAlign,
        defaultEllipsis,
        items,
        onCheckChange,
        onClick,
        onGetBodyColumnClassName,
        onGetBodyColumnStyle,
        onGetBodyColumnSx,
        onGetBodyRowClassName,
        onGetBodyRowStyle,
        onGetBodyRowSx,
        progressiveVisible,
        showEvenColor,
        showOddColor,
        sortable$1,
    ]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return sortable$1 ? (React.createElement(sortable.SortableContext, { items: items, strategy: sortable.verticalListSortingStrategy }, renderBlock)) : (renderBlock);
};function columnFilter(v) {
    return v !== undefined && v !== null && v !== false;
}
var _columnId = 0;
var PTable = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var className = _a.className, initStyle = _a.style, sx = _a.sx, caption = _a.caption, topHeadRows = _a.topHeadRows, initColumns = _a.columns, initItems = _a.items, initPaging = _a.paging, _b = _a.pagingAlign, pagingAlign = _b === void 0 ? 'center' : _b, _c = _a.defaultAlign, defaultAlign = _c === void 0 ? 'left' : _c, defaultEllipsis = _a.defaultEllipsis, initStickyHeader = _a.stickyHeader, height = _a.height, minHeight = _a.minHeight, maxHeight = _a.maxHeight, fullHeight = _a.fullHeight, showOddColor = _a.showOddColor, showEvenColor = _a.showEvenColor, _d = _a.cellPadding, cellPadding = _d === void 0 ? 13 : _d, footer = _a.footer, noData = _a.noData, pagination = _a.pagination, sortable$1 = _a.sortable, progressiveVisible = _a.progressiveVisible, onClick = _a.onClick, onGetBodyRowClassName = _a.onGetBodyRowClassName, onGetBodyRowStyle = _a.onGetBodyRowStyle, onGetBodyRowSx = _a.onGetBodyRowSx, onGetBodyColumnClassName = _a.onGetBodyColumnClassName, onGetBodyColumnStyle = _a.onGetBodyColumnStyle, onGetBodyColumnSx = _a.onGetBodyColumnSx, onPageChange = _a.onPageChange, onSortChange = _a.onSortChange, onCheckChange = _a.onCheckChange;
    var localHeaderDataRef = React.useRef({});
    var localBodyDataRef = React.useRef({});
    var updateHeadCheckTimer = React.useRef(undefined);
    var fireOnCheckChangeTimer = React.useRef({});
    var simpleBarRef = React.useRef(null);
    var finalColumnsIdRef = React.useRef([]);
    /********************************************************************************************************************
     * sortable
     * ******************************************************************************************************************/
    var sensors = core.useSensors(core.useSensor(core.MouseSensor, {
        // Require the mouse to move by 10 pixels before activating
        activationConstraint: {
            distance: 10,
        },
    }), core.useSensor(core.TouchSensor, {
        // Press delay of 250ms, with tolerance of 5px of movement
        activationConstraint: {
            delay: 250,
            tolerance: 5,
        },
    }), core.useSensor(core.KeyboardSensor, {
        coordinateGetter: sortable.sortableKeyboardCoordinates,
    }));
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _e = React.useState(false), menuOpen = _e[0], setMenuOpen = _e[1];
    var _f = React.useState(undefined), openMenuId = _f[0], setOpenMenuId = _f[1];
    var _g = reactHook.useAutoUpdateState(initColumns), columns = _g[0], setColumns = _g[1];
    var _h = React.useState(), finalColumns = _h[0], setFinalColumns = _h[1];
    var _j = reactHook.useAutoUpdateState(initItems), items = _j[0], setItems = _j[1];
    var _k = React.useState(), sortableItems = _k[0], setSortableItems = _k[1];
    var _l = reactHook.useAutoUpdateState(initPaging), paging = _l[0], setPaging = _l[1];
    /********************************************************************************************************************
     * containerHeight
     * ******************************************************************************************************************/
    var _m = React.useState(), containerHeight = _m[0], setContainerHeight = _m[1];
    var containerHeightDetector = useResizeDetector({
        handleHeight: true,
        handleWidth: false,
        onResize: function () {
            if (containerHeightDetector.current) {
                setContainerHeight(containerHeightDetector.current.getBoundingClientRect().height);
            }
            else {
                setContainerHeight(undefined);
            }
        },
    }).ref;
    /********************************************************************************************************************
     * footerHeight
     * ******************************************************************************************************************/
    var _o = React.useState(), pagingHeight = _o[0], setPagingHeight = _o[1];
    var pagingHeightResizeDetector = useResizeDetector({
        handleHeight: true,
        handleWidth: false,
        onResize: function () {
            if (pagingHeightResizeDetector.current) {
                setPagingHeight(pagingHeightResizeDetector.current.getBoundingClientRect().height);
            }
            else {
                setPagingHeight(undefined);
            }
        },
    }).ref;
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    var getFinalColumnId = React.useCallback(function (column) {
        if (finalColumns && finalColumnsIdRef.current) {
            var idx = finalColumns.indexOf(column);
            return finalColumnsIdRef.current[idx];
        }
        else {
            return '';
        }
    }, [finalColumns]);
    var updateHeadCheck = React.useCallback(function (column) {
        if (updateHeadCheckTimer.current) {
            clearTimeout(updateHeadCheckTimer.current);
            updateHeadCheckTimer.current = undefined;
        }
        var columnId = getFinalColumnId(column);
        var headColumnData = localHeaderDataRef.current[columnId];
        if (headColumnData) {
            updateHeadCheckTimer.current = setTimeout(function () {
                var _a, _b;
                updateHeadCheckTimer.current = undefined;
                var enabledCheckExists = !!Object.keys(localBodyDataRef.current).find(function (key) {
                    var columnData = localBodyDataRef.current[key].columns[columnId];
                    if (columnData) {
                        if (!columnData.checkDisabled) {
                            return true;
                        }
                    }
                });
                var allChecked = enabledCheckExists &&
                    !Object.keys(localBodyDataRef.current).find(function (key) {
                        var columnData = localBodyDataRef.current[key].columns[columnId];
                        if (columnData) {
                            if (!columnData.checkDisabled) {
                                return !columnData.checked;
                            }
                        }
                    });
                (_a = headColumnData.commands) === null || _a === void 0 ? void 0 : _a.setCheckDisabled(!enabledCheckExists);
                (_b = headColumnData.commands) === null || _b === void 0 ? void 0 : _b.setChecked(allChecked);
            }, 100);
        }
    }, [getFinalColumnId]);
    var getChecked = React.useCallback(function (itemKey, itemValue, columnId) {
        var checked = false;
        Object.keys(localBodyDataRef.current).find(function (key) {
            var itemData = localBodyDataRef.current[key];
            if (itemData.item[itemKey] === itemValue) {
                var columnData = itemData.columns[columnId];
                checked = !!(columnData === null || columnData === void 0 ? void 0 : columnData.checked);
                return true;
            }
        });
        return checked;
    }, []);
    var setChecked = React.useCallback(function (itemKey, itemValue, columnId, checked) {
        Object.keys(localBodyDataRef.current).find(function (key) {
            var _a;
            var itemData = localBodyDataRef.current[key];
            if (itemData.item[itemKey] === itemValue) {
                var columnData = itemData.columns[columnId];
                if (columnData) {
                    (_a = columnData.commands) === null || _a === void 0 ? void 0 : _a.setChecked(checked);
                    updateHeadCheck(columnData.column);
                }
                return true;
            }
        });
    }, [updateHeadCheck]);
    var toggleChecked = React.useCallback(function (itemKey, itemValue, columnId) {
        Object.keys(localBodyDataRef.current).forEach(function (key) {
            var _a;
            var itemData = localBodyDataRef.current[key];
            if (itemData.item[itemKey] === itemValue) {
                var columnData = itemData.columns[columnId];
                if (columnData) {
                    (_a = columnData.commands) === null || _a === void 0 ? void 0 : _a.setChecked(!columnData.checked);
                    updateHeadCheck(columnData.column);
                }
                return true;
            }
        });
    }, [updateHeadCheck]);
    var setCheckedAll = React.useCallback(function (columnId, checked) {
        var _a, _b;
        Object.keys(localBodyDataRef.current).forEach(function (key) {
            var _a;
            var itemData = localBodyDataRef.current[key];
            var columnData = itemData.columns[columnId];
            if (columnData) {
                (_a = columnData.commands) === null || _a === void 0 ? void 0 : _a.setChecked(checked);
            }
        });
        (_b = (_a = localHeaderDataRef.current[columnId]) === null || _a === void 0 ? void 0 : _a.commands) === null || _b === void 0 ? void 0 : _b.setChecked(checked);
    }, []);
    var getCheckedItems = React.useCallback(function (columnId) {
        var checkedItems = [];
        Object.keys(localBodyDataRef.current).forEach(function (key) {
            var itemData = localBodyDataRef.current[key];
            var columnData = itemData.columns[columnId];
            if (columnData) {
                if (columnData.checked) {
                    checkedItems.push(itemData.item);
                }
            }
        });
        return checkedItems;
    }, []);
    var stopHeadCheckTimer = React.useCallback(function () {
        if (updateHeadCheckTimer.current) {
            clearTimeout(updateHeadCheckTimer.current);
            updateHeadCheckTimer.current = undefined;
        }
    }, []);
    var clearFireOnCheckChangeTimer = React.useCallback(function () {
        Object.keys(fireOnCheckChangeTimer.current).forEach(function (key) {
            if (fireOnCheckChangeTimer.current[key]) {
                clearTimeout(fireOnCheckChangeTimer.current[key]);
            }
        });
        fireOnCheckChangeTimer.current = {};
    }, []);
    var fireOnCheckChange = React.useCallback(function (columnId) {
        if (fireOnCheckChangeTimer.current[columnId]) {
            clearTimeout(fireOnCheckChangeTimer.current[columnId]);
            fireOnCheckChangeTimer.current[columnId] = undefined;
        }
        if (onCheckChange) {
            fireOnCheckChangeTimer.current[columnId] = setTimeout(function () {
                fireOnCheckChangeTimer.current[columnId] = undefined;
                onCheckChange && onCheckChange(columnId, getCheckedItems(columnId));
            }, 100);
        }
    }, [getCheckedItems, onCheckChange]);
    var simpleBarScrollToTop = React.useCallback(function () {
        var _a, _b;
        (_b = (_a = simpleBarRef.current) === null || _a === void 0 ? void 0 : _a.getScrollElement()) === null || _b === void 0 ? void 0 : _b.scrollTo({ top: 0 });
    }, []);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    React.useEffect(function () {
        return function () {
            stopHeadCheckTimer();
            clearFireOnCheckChangeTimer();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    React.useEffect(function () {
        stopHeadCheckTimer();
        clearFireOnCheckChangeTimer();
        Object.keys(localHeaderDataRef.current).forEach(function (key) {
            var _a;
            if (localHeaderDataRef.current[key].column.type === 'check') {
                (_a = localHeaderDataRef.current[key].commands) === null || _a === void 0 ? void 0 : _a.setChecked(false);
            }
        });
        Object.keys(localBodyDataRef.current).forEach(function (key) {
            Object.keys(localBodyDataRef.current[key].columns).forEach(function (cKey) {
                var _a;
                (_a = localBodyDataRef.current[key].columns[cKey].commands) === null || _a === void 0 ? void 0 : _a.setChecked(false);
            });
        });
        setSortableItems(makeSortableItems(items));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [items]);
    React.useEffect(function () {
        stopHeadCheckTimer();
        clearFireOnCheckChangeTimer();
        var newFinalColumns = columns === null || columns === void 0 ? void 0 : columns.filter(columnFilter);
        setFinalColumns(newFinalColumns);
        finalColumnsIdRef.current = newFinalColumns === null || newFinalColumns === void 0 ? void 0 : newFinalColumns.map(function (col) {
            if (col.id) {
                return col.id;
            }
            else {
                _columnId += 1;
                return "$c$".concat(_columnId, "$");
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [columns]);
    React.useLayoutEffect(function () {
        clearFireOnCheckChangeTimer();
        if (sortableItems) {
            localBodyDataRef.current = sortableItems.reduce(function (res, item) {
                res[item.id] = {
                    item: item,
                    columns: {},
                };
                if (finalColumns) {
                    finalColumns.forEach(function (c) {
                        var _a;
                        var columnId = getFinalColumnId(c);
                        if ((_a = localBodyDataRef.current[item.id]) === null || _a === void 0 ? void 0 : _a.columns[columnId]) {
                            res[item.id].columns[columnId] = localBodyDataRef.current[item.id].columns[columnId];
                        }
                        else {
                            res[item.id].columns[columnId] = {
                                column: c,
                                checked: false,
                                checkDisabled: false,
                            };
                        }
                    });
                }
                return res;
            }, {});
        }
        else {
            localBodyDataRef.current = {};
        }
    }, [sortableItems, finalColumns, clearFireOnCheckChangeTimer, getFinalColumnId]);
    React.useLayoutEffect(function () {
        if (finalColumns) {
            localHeaderDataRef.current = finalColumns.reduce(function (res, c) {
                res[getFinalColumnId(c)] = { column: c, checked: false };
                return res;
            }, {});
        }
        else {
            localHeaderDataRef.current = {};
        }
    }, [finalColumns, getFinalColumnId]);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    reactHook.useForwardLayoutRef(ref, React.useMemo(function () {
        var lastColumns = columns;
        var lastItems = items;
        var lastPaging = paging;
        return {
            getColumns: function () { return lastColumns; },
            setColumns: function (columns) {
                lastColumns = columns;
                setColumns(lastColumns);
            },
            getItems: function () { return lastItems; },
            setItems: function (items) {
                lastItems = items;
                setItems(items);
            },
            getPaging: function () { return lastPaging; },
            setItemsPaging: function (items, paging) {
                lastItems = items;
                lastPaging = paging;
                setItems(lastItems);
                setPaging(lastPaging);
            },
            resetSort: function () {
                setSortableItems(makeSortableItems(lastItems));
            },
            getCheckedItems: getCheckedItems,
            getChecked: getChecked,
            setChecked: setChecked,
            toggleChecked: toggleChecked,
            setCheckedAll: setCheckedAll,
            scrollToTop: simpleBarScrollToTop,
        };
    }, [
        columns,
        getChecked,
        getCheckedItems,
        items,
        paging,
        setChecked,
        setCheckedAll,
        setColumns,
        setItems,
        setPaging,
        simpleBarScrollToTop,
        toggleChecked,
    ]));
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleDragEnd = React.useCallback(function (event) {
        var active = event.active, over = event.over;
        if (active && over) {
            setSortableItems(function (items) {
                if (items) {
                    var oldIndex_1 = null;
                    var newIndex_1 = null;
                    items.find(function (item, idx) {
                        if (item.id === active.id) {
                            oldIndex_1 = idx;
                        }
                        else if (item.id === over.id) {
                            newIndex_1 = idx;
                        }
                        return oldIndex_1 != null && newIndex_1 != null;
                    });
                    if (oldIndex_1 != null && newIndex_1 != null) {
                        var finalItems = sortable.arrayMove(items, oldIndex_1, newIndex_1);
                        onSortChange && onSortChange(finalItems);
                        return finalItems;
                    }
                    else {
                        return items;
                    }
                }
                else {
                    return items;
                }
            });
        }
    }, [onSortChange]);
    var handleHeadCheckChange = React.useCallback(function (column, checked) {
        Object.keys(localBodyDataRef.current).forEach(function (key) {
            var _a;
            var data = localBodyDataRef.current[key].columns[getFinalColumnId(column)];
            if (data) {
                if (!data.checkDisabled) {
                    (_a = data.commands) === null || _a === void 0 ? void 0 : _a.setChecked(checked);
                }
            }
        });
    }, [getFinalColumnId]);
    var handleBodyCheckChange = React.useCallback(function (item, column) {
        updateHeadCheck(column);
    }, [updateHeadCheck]);
    var handlePageChange = React.useCallback(function (page) {
        simpleBarScrollToTop();
        onPageChange && onPageChange(page);
    }, [onPageChange, simpleBarScrollToTop]);
    /********************************************************************************************************************
     * TableContext Function
     * ******************************************************************************************************************/
    var TableContextSetMenuOpen = React.useCallback(function (newMenuOpen, newOpenMenuId) {
        if (newMenuOpen) {
            setMenuOpen(newMenuOpen);
            setOpenMenuId(newOpenMenuId);
        }
        else {
            if (openMenuId === newOpenMenuId) {
                setMenuOpen(false);
                setOpenMenuId(undefined);
            }
        }
    }, [openMenuId]);
    var TableContextSetItemColumnChecked = React.useCallback(function (item, column, checked) {
        var _a;
        var columnId = getFinalColumnId(column);
        var data = (_a = localBodyDataRef.current[item.id]) === null || _a === void 0 ? void 0 : _a.columns[columnId];
        if (data) {
            data.checked = checked;
            fireOnCheckChange(columnId);
        }
    }, [fireOnCheckChange, getFinalColumnId]);
    var TableContextSetItemColumnCheckDisabled = React.useCallback(function (item, column, disabled) {
        var _a;
        var data = (_a = localBodyDataRef.current[item.id]) === null || _a === void 0 ? void 0 : _a.columns[getFinalColumnId(column)];
        if (data) {
            data.checkDisabled = disabled;
            updateHeadCheck(column);
        }
    }, [getFinalColumnId, updateHeadCheck]);
    var TableContextSetItemColumnCommands = React.useCallback(function (item, column, commands) {
        var _a;
        var data = (_a = localBodyDataRef.current[item.id]) === null || _a === void 0 ? void 0 : _a.columns[getFinalColumnId(column)];
        if (data) {
            data.commands = commands;
        }
    }, [getFinalColumnId]);
    var TableContextSetHeadColumnChecked = React.useCallback(function (column, checked) {
        var data = localHeaderDataRef.current[getFinalColumnId(column)];
        if (data) {
            data.checked = checked;
        }
    }, [getFinalColumnId]);
    var TableContextSetHeadColumnCommands = React.useCallback(function (column, commands) {
        var data = localHeaderDataRef.current[getFinalColumnId(column)];
        if (data) {
            data.commands = commands;
        }
    }, [getFinalColumnId]);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var isNoData = !!sortableItems && sortableItems.length <= 0;
    var finalPagingHeight = paging && paging.total > 0 ? pagingHeight || 0 : 0;
    var stickyHeader = !isNoData && initStickyHeader;
    var _p = React.useMemo(function () {
        var style = fullHeight
            ? __assign$2(__assign$2({ width: '100%' }, initStyle), { flex: 1, justifyContent: 'flex-end', height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }) : __assign$2({ width: '100%' }, initStyle);
        var sx = { padding: typeof cellPadding === 'number' ? "".concat(cellPadding, "px") : cellPadding };
        var tableSx = {
            '> .MuiTableHead-root > .MuiTableRow-root > .MuiTableCell-root ': sx,
            '> .MuiTableBody-root > .MuiTableRow-root > .MuiTableCell-root ': sx,
            '> .MuiTableFooter-root > .MuiTableRow-root > .MuiTableCell-root ': sx,
        };
        // pageStyle
        var pagingStyle = { padding: '13px 0', borderTop: '1px solid rgba(224, 224, 224, 1)' };
        if (fullHeight) {
            pagingStyle.position = 'sticky';
        }
        return { style: style, tableSx: tableSx, pagingStyle: pagingStyle };
    }, [cellPadding, fullHeight, initStyle]), style = _p.style, tableSx = _p.tableSx, pagingStyle = _p.pagingStyle;
    var _q = React.useMemo(function () {
        var contentContainerStyle = fullHeight
            ? {
                height: (containerHeight || 0) - (finalPagingHeight || 0) - 1,
                flex: 1,
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                marginBottom: finalPagingHeight || 0,
            }
            : { height: height, minHeight: minHeight, maxHeight: maxHeight, marginBottom: -1 };
        var tableStyle = fullHeight && isNoData ? { flex: 1, height: (containerHeight || 0) - finalPagingHeight - 2 } : undefined;
        return { contentContainerStyle: contentContainerStyle, tableStyle: tableStyle };
    }, [containerHeight, finalPagingHeight, fullHeight, height, isNoData, maxHeight, minHeight]), contentContainerStyle = _q.contentContainerStyle, tableStyle = _q.tableStyle;
    var tableTopHead = React.useMemo(function () {
        return finalColumns && (React.createElement(PTableTopHead, { caption: caption, rows: topHeadRows, columns: finalColumns, items: items, defaultAlign: defaultAlign, onCheckChange: handleHeadCheckChange }));
    }, [caption, defaultAlign, finalColumns, handleHeadCheckChange, items, topHeadRows]);
    var tableBody = React.useMemo(function () {
        return finalColumns && (React.createElement(material.TableBody, null, sortableItems ? (sortableItems.length > 0 ? (React.createElement(PTableSortableBody, { items: sortableItems, columns: finalColumns, showOddColor: showOddColor, showEvenColor: showEvenColor, defaultAlign: defaultAlign, defaultEllipsis: defaultEllipsis, sortable: sortable$1, onClick: onClick, onCheckChange: handleBodyCheckChange, onGetBodyRowClassName: onGetBodyRowClassName, onGetBodyRowStyle: onGetBodyRowStyle, onGetBodyRowSx: onGetBodyRowSx, onGetBodyColumnClassName: onGetBodyColumnClassName, onGetBodyColumnSx: onGetBodyColumnSx, onGetBodyColumnStyle: onGetBodyColumnStyle })) : (React.createElement(StyledBodyRow, null,
            React.createElement(material.TableCell, { colSpan: finalColumns.length, style: { flex: 1 } }, noData ? (noData) : (React.createElement(StyledNoDataDiv, null,
                React.createElement("div", null,
                    React.createElement(material.Icon, null, "error")),
                React.createElement("div", null, "\uAC80\uC0C9\uB41C \uC815\uBCF4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."))))))) : undefined));
    }, [
        defaultAlign,
        defaultEllipsis,
        finalColumns,
        handleBodyCheckChange,
        noData,
        onClick,
        onGetBodyColumnClassName,
        onGetBodyColumnStyle,
        onGetBodyColumnSx,
        onGetBodyRowClassName,
        onGetBodyRowStyle,
        onGetBodyRowSx,
        showEvenColor,
        showOddColor,
        sortable$1,
        sortableItems,
    ]);
    var tableFooter = React.useMemo(function () {
        return finalColumns &&
            !isNoData &&
            footer && (React.createElement(material.TableFooter, null,
            React.createElement(material.TableRow, null, finalColumns.map(function (column, idx) { return (React.createElement(PTableFooterCell, { key: idx, column: column, items: items, defaultAlign: defaultAlign })); }))));
    }, [defaultAlign, finalColumns, footer, isNoData, items]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return finalColumns ? (React.createElement(PTableContextProvider, { value: {
            menuOpen: menuOpen,
            openMenuId: openMenuId,
            progressiveVisible: progressiveVisible,
            setMenuOpen: TableContextSetMenuOpen,
            setItemColumnChecked: TableContextSetItemColumnChecked,
            setItemColumnCheckDisabled: TableContextSetItemColumnCheckDisabled,
            setItemColumnCommands: TableContextSetItemColumnCommands,
            setHeadColumnChecked: TableContextSetHeadColumnChecked,
            setHeadColumnCommands: TableContextSetHeadColumnCommands,
        } },
        React.createElement(material.Paper, { ref: fullHeight ? containerHeightDetector : undefined, className: classNames('PTable', className, !!stickyHeader && 'sticky-header', !!fullHeight && 'full-height', !!showOddColor && 'odd-color', !!showEvenColor && 'even-color', !!sortable$1 && 'sortable'), variant: 'outlined', style: style, sx: sx },
            fullHeight ? (React.createElement(SimpleBar, { ref: simpleBarRef, style: contentContainerStyle },
                React.createElement(core.DndContext, { sensors: sensors, collisionDetection: core.closestCenter, onDragEnd: handleDragEnd },
                    React.createElement(material.Table, { stickyHeader: stickyHeader, sx: tableSx, style: tableStyle },
                        tableTopHead,
                        tableBody,
                        tableFooter)))) : (React.createElement(material.Box, { style: contentContainerStyle },
                React.createElement(core.DndContext, { sensors: sensors, collisionDetection: core.closestCenter, onDragEnd: handleDragEnd },
                    React.createElement(material.Table, { stickyHeader: stickyHeader, sx: tableSx, style: tableStyle },
                        tableTopHead,
                        tableBody,
                        tableFooter)))),
            finalColumns && paging && paging.total > 0 && (React.createElement(material.Stack, { ref: fullHeight ? pagingHeightResizeDetector : undefined, alignItems: pagingAlign, style: pagingStyle },
                React.createElement(PTablePagination, { className: pagination === null || pagination === void 0 ? void 0 : pagination.className, style: pagination === null || pagination === void 0 ? void 0 : pagination.style, sx: pagination === null || pagination === void 0 ? void 0 : pagination.sx, paging: paging, align: pagingAlign, onChange: handlePageChange })))))) : null;
});var getSearchInfo = function (search) {
    var searchInfo = {};
    if (search) {
        var ref = search.ref, searchGroups = search.searchGroups, props = __rest$1(search, ["ref", "searchGroups"]);
        searchInfo.ref = ref;
        searchInfo.searchGroups = searchGroups;
        searchInfo.props = props;
    }
    return searchInfo;
};
var getTableInfo = function (table) {
    var tableInfo = {};
    if (table) {
        var ref = table.ref, props = __rest$1(table, ["ref"]);
        tableInfo.ref = ref;
        tableInfo.props = props;
    }
    return tableInfo;
};
var deHash = function () {
    var values = {};
    var hash = window.location.hash.substring(1);
    hash.replace(/([^=&]+)=([^&]*)/g, function (substring, key, value) {
        values[decodeURIComponent(key)] = decodeURIComponent(value);
        return substring;
    });
    return values;
};var PSearchTable = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var className = _a.className, initStyle = _a.style, sx = _a.sx, color = _a.color, hash = _a.hash, stickyHeader = _a.stickyHeader, fullHeight = _a.fullHeight, search = _a.search, table = _a.table, betweenSearchTableComponent = _a.betweenSearchTableComponent, onGetData = _a.onGetData, onRequestHashChange = _a.onRequestHashChange;
    var initPathRef = React.useRef(window.location.pathname);
    var searchRef = React.useRef(undefined);
    var tableRef = React.useRef(undefined);
    var lastGetDataDataRef = React.useRef({});
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _b = React.useState(true), isFirstSearchSubmit = _b[0], setIsFirstSearchSubmit = _b[1];
    var _c = React.useState(), tableData = _c[0], setTableData = _c[1];
    /********************************************************************************************************************
     * searchInfo
     * ******************************************************************************************************************/
    var searchInfoFirstUseEffect = React.useRef(true);
    var _d = React.useState(function () { return getSearchInfo(search); }), searchInfo = _d[0], setSearchInfo = _d[1];
    React.useEffect(function () {
        if (searchInfoFirstUseEffect.current) {
            searchInfoFirstUseEffect.current = false;
        }
        else {
            setSearchInfo(getSearchInfo(search));
        }
    }, [search]);
    /********************************************************************************************************************
     * tableInfo
     * ******************************************************************************************************************/
    var tableInfoFirstUseEffect = React.useRef(true);
    var _e = React.useState(function () { return getTableInfo(table); }), tableInfo = _e[0], setTableInfo = _e[1];
    React.useEffect(function () {
        if (tableInfoFirstUseEffect.current) {
            tableInfoFirstUseEffect.current = false;
        }
        else {
            setTableInfo(getTableInfo(table));
        }
    }, [table]);
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    var getData = React.useCallback(function (data) {
        lastGetDataDataRef.current = data;
        if (onGetData) {
            onGetData(data).then(setTableData);
        }
    }, [onGetData]);
    var hashToSearchValue = React.useCallback(function () {
        var commands = searchRef.current;
        if (commands) {
            commands.resetAll();
            var hashValues_1 = deHash();
            Object.keys(hashValues_1).forEach(function (name) {
                var _a, _b;
                var value = hashValues_1[name];
                if (name === 'page') {
                    commands.setValue(name, Number(value) || 1);
                }
                else {
                    var itemCommands = commands.getItem(name);
                    if (itemCommands) {
                        switch (itemCommands.getType()) {
                            case 'PFormCheckbox':
                                if (compare.notEmpty(value)) {
                                    var checkCommands = itemCommands;
                                    if (value.toString() === ((_a = itemCommands.getValue()) === null || _a === void 0 ? void 0 : _a.toString())) {
                                        checkCommands.setChecked(true);
                                    }
                                    else if (value.toString() === ((_b = checkCommands.getUncheckedValue()) === null || _b === void 0 ? void 0 : _b.toString())) {
                                        checkCommands.setChecked(false);
                                    }
                                }
                                break;
                            case 'PFormDatePicker':
                            case 'PFormDateTimePicker':
                            case 'PFormTimePicker':
                                {
                                    if (compare.notEmpty(value)) {
                                        var dateCommands = itemCommands;
                                        var format = dateCommands.getFormValueFormat();
                                        var itemValue = dayjs(value, format);
                                        itemCommands.setValue(itemValue.isValid() ? itemValue : null);
                                    }
                                    else {
                                        itemCommands.setValue(null);
                                    }
                                }
                                break;
                            case 'PFormDateRangePicker':
                                {
                                    var dateRangePickerCommands = itemCommands;
                                    var fromName = dateRangePickerCommands.getFormValueFromName();
                                    var toName = dateRangePickerCommands.getFormValueToName();
                                    var format = dateRangePickerCommands.getFormValueFormat();
                                    if (name === fromName) {
                                        if (compare.notEmpty(value)) {
                                            var startValue = dayjs(value, format);
                                            dateRangePickerCommands.setFromValue(startValue.isValid() ? startValue : null);
                                        }
                                        else {
                                            dateRangePickerCommands.setFromValue(null);
                                        }
                                    }
                                    else if (name === toName) {
                                        if (compare.notEmpty(value)) {
                                            var endValue = dayjs(value, format);
                                            dateRangePickerCommands.setToValue(endValue.isValid() ? endValue : null);
                                        }
                                        else {
                                            dateRangePickerCommands.setToValue(null);
                                        }
                                    }
                                }
                                break;
                            case 'PFormYearRangePicker':
                                {
                                    var dateRangePickerCommands = itemCommands;
                                    var fromName = dateRangePickerCommands.getFormValueFromName();
                                    var toName = dateRangePickerCommands.getFormValueToName();
                                    if (name === fromName) {
                                        dateRangePickerCommands.setFromValue(compare.notEmpty(value) ? Number(value) : null);
                                    }
                                    else if (name === toName) {
                                        dateRangePickerCommands.setToValue(compare.notEmpty(value) ? Number(value) : null);
                                    }
                                }
                                break;
                            case 'PFormMonthPicker':
                                {
                                    var monthCommands = itemCommands;
                                    var yearName = monthCommands.getFormValueYearName();
                                    var monthName = monthCommands.getFormValueMonthName();
                                    if (name === yearName) {
                                        monthCommands.setYear(compare.notEmpty(value) ? Number(value) : null);
                                    }
                                    else if (name === monthName) {
                                        monthCommands.setMonth(compare.notEmpty(value) ? Number(value) : null);
                                    }
                                }
                                break;
                            case 'PFormMonthRangePicker':
                                {
                                    var monthRangeCommands = itemCommands;
                                    var fromYearName = monthRangeCommands.getFormValueFromYearName();
                                    var fromMonthName = monthRangeCommands.getFormValueFromMonthName();
                                    var toYearName = monthRangeCommands.getFormValueToYearName();
                                    var toMonthName = monthRangeCommands.getFormValueToMonthName();
                                    if (name === fromYearName) {
                                        monthRangeCommands.setFromYear(compare.notEmpty(value) ? Number(value) : null);
                                    }
                                    else if (name === fromMonthName) {
                                        monthRangeCommands.setFromMonth(compare.notEmpty(value) ? Number(value) : null);
                                    }
                                    else if (name === toYearName) {
                                        monthRangeCommands.setToYear(compare.notEmpty(value) ? Number(value) : null);
                                    }
                                    else if (name === toMonthName) {
                                        monthRangeCommands.setToMonth(compare.notEmpty(value) ? Number(value) : null);
                                    }
                                }
                                break;
                            default:
                                commands.setValue(name, value);
                                break;
                        }
                    }
                }
            });
            return commands.getAllFormValue();
        }
    }, [searchRef]);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    reactHook.useForwardLayoutRef(ref, React.useMemo(function () { return ({
        reload: function (page) {
            var _a, _b, _c, _d;
            if (page != null) {
                (_a = tableRef.current) === null || _a === void 0 ? void 0 : _a.scrollToTop();
            }
            var finalData;
            if (lastGetDataDataRef.current) {
                finalData = __assign$2({}, lastGetDataDataRef.current);
                if (page != null) {
                    (_b = searchRef.current) === null || _b === void 0 ? void 0 : _b.setValue('page', page);
                    finalData.page = page;
                }
            }
            else {
                if (hash) {
                    hashToSearchValue();
                }
                if (page != null) {
                    (_c = searchRef.current) === null || _c === void 0 ? void 0 : _c.setValue('page', page);
                }
                finalData = ((_d = searchRef.current) === null || _d === void 0 ? void 0 : _d.getAllFormValue()) || {};
            }
            getData(finalData);
        },
        getLastLoadData: function () { return lastGetDataDataRef.current || {}; },
        getSearch: function () { return searchRef.current; },
        getTable: function () { return tableRef.current; },
    }); }, [getData, hash, hashToSearchValue]));
    /********************************************************************************************************************
     * hash
     * ******************************************************************************************************************/
    React.useEffect(function () {
        if (hash && window.location.pathname === initPathRef.current) {
            var data = hashToSearchValue();
            if (data)
                getData(data);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [window.location.hash]);
    var hashChange = React.useCallback(function (params) {
        if (onRequestHashChange) {
            var hashes_1 = [];
            Object.keys(params).forEach(function (name) {
                var value = params[name];
                if (name === 'page') {
                    if (Number(value) > 1) {
                        hashes_1.push("".concat(name, "=").concat(value));
                    }
                }
                else {
                    if (searchRef.current) {
                        var itemCommands = searchRef.current.getItem(name);
                        if (itemCommands) {
                            var resetValue = null;
                            switch (itemCommands.getType()) {
                                case 'PFormDateRangePicker':
                                case 'PFormYearRangePicker':
                                    {
                                        var commands = itemCommands;
                                        var itemName = itemCommands.getName();
                                        var fromName = commands.getFormValueFromName();
                                        var fromSuffix = commands.getFormValueFromNameSuffix();
                                        var toName = commands.getFormValueToName();
                                        var toSuffix = commands.getFormValueToNameSuffix();
                                        if (name === fromName) {
                                            resetValue = searchRef.current.getFormReset(itemName, fromSuffix);
                                        }
                                        else if (name === toName) {
                                            resetValue = searchRef.current.getFormReset(itemName, toSuffix);
                                        }
                                    }
                                    break;
                                case 'PFormMonthPicker':
                                    {
                                        var commands = itemCommands;
                                        var itemName = commands.getName();
                                        var yearName = commands.getFormValueYearName();
                                        var yearSuffix = commands.getFormValueYearNameSuffix();
                                        var monthName = commands.getFormValueMonthName();
                                        var monthSuffix = commands.getFormValueMonthNameSuffix();
                                        if (name === yearName) {
                                            resetValue = searchRef.current.getFormReset(itemName, yearSuffix);
                                        }
                                        else if (name === monthName) {
                                            resetValue = searchRef.current.getFormReset(itemName, monthSuffix);
                                        }
                                    }
                                    break;
                                case 'PFormMonthRangePicker':
                                    {
                                        var commands = itemCommands;
                                        var itemName = commands.getName();
                                        var fromYearName = commands.getFormValueFromYearName();
                                        var fromYearSuffix = commands.getFormValueFromYearNameSuffix();
                                        var fromMonthName = commands.getFormValueFromMonthName();
                                        var fromMonthSuffix = commands.getFormValueFromMonthNameSuffix();
                                        var toYearName = commands.getFormValueToYearName();
                                        var toYearSuffix = commands.getFormValueToYearNameSuffix();
                                        var toMonthName = commands.getFormValueToMonthName();
                                        var toMonthSuffix = commands.getFormValueToMonthNameSuffix();
                                        if (name === fromYearName) {
                                            resetValue = searchRef.current.getFormReset(itemName, fromYearSuffix);
                                        }
                                        else if (name === fromMonthName) {
                                            resetValue = searchRef.current.getFormReset(itemName, fromMonthSuffix);
                                        }
                                        else if (name === toYearName) {
                                            resetValue = searchRef.current.getFormReset(itemName, toYearSuffix);
                                        }
                                        else if (name === toMonthName) {
                                            resetValue = searchRef.current.getFormReset(itemName, toMonthSuffix);
                                        }
                                    }
                                    break;
                                default:
                                    resetValue = searchRef.current.getFormReset(name);
                                    break;
                            }
                            if (resetValue != null && !compare.equal(resetValue, value) && typeof value !== 'object') {
                                hashes_1.push("".concat(name, "=").concat(encodeURIComponent(value)));
                            }
                        }
                    }
                }
            });
            var finalHash = hashes_1.join('&');
            if (window.location.hash.substring(1) === finalHash) {
                getData(params);
            }
            else {
                onRequestHashChange(hashes_1.join('&'));
            }
        }
    }, [onRequestHashChange, getData]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handlePageChange = React.useCallback(function (page) {
        var _a, _b;
        (_a = searchRef.current) === null || _a === void 0 ? void 0 : _a.setValue('page', page);
        var finalData;
        if (lastGetDataDataRef.current) {
            finalData = __assign$2({}, lastGetDataDataRef.current);
            finalData.page = page;
        }
        else {
            finalData = (_b = searchRef.current) === null || _b === void 0 ? void 0 : _b.getAllFormValue();
        }
        if (hash) {
            hashChange(finalData || {});
        }
        else {
            getData(finalData || {});
        }
    }, [searchRef, hash, hashChange, getData]);
    var handleSearchSubmit = React.useCallback(function (data) {
        var _a, _b;
        (_a = tableRef.current) === null || _a === void 0 ? void 0 : _a.scrollToTop();
        if (isFirstSearchSubmit) {
            setIsFirstSearchSubmit(false);
            if (!hash) {
                getData(data);
            }
        }
        else {
            (_b = searchRef.current) === null || _b === void 0 ? void 0 : _b.setValue('page', 1);
            var finalData = __assign$2(__assign$2({}, data), { page: 1 });
            if (hash) {
                hashChange(finalData);
            }
            else {
                getData(finalData);
            }
        }
    }, [searchRef, hash, hashChange, getData, isFirstSearchSubmit]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    var searchView = React.useMemo(function () { return (React.createElement(material.Grid, { sx: { display: searchInfo.searchGroups ? undefined : 'none' } },
        React.createElement(reactForm.PSearch, __assign$2({ color: color }, searchInfo.props, { ref: function (commands) {
                if (searchInfo.ref) {
                    if (typeof searchInfo.ref === 'function') {
                        searchInfo.ref(commands);
                    }
                    else {
                        searchInfo.ref.current = commands;
                    }
                }
                searchRef.current = commands || undefined;
            }, autoSubmit: true, onSubmit: handleSearchSubmit }),
            React.createElement(reactForm.PSearchGroup, { hidden: true },
                React.createElement(reactForm.PFormHidden, { name: 'page', value: 1 })),
            searchInfo.searchGroups))); }, [color, handleSearchSubmit, searchInfo]);
    var tableView = React.useMemo(function () {
        var _a, _b;
        return (React.createElement(material.Grid, { style: fullHeight ? { flex: 1, display: 'flex', flexDirection: 'column' } : undefined },
            React.createElement(PTable, __assign$2({}, tableInfo.props, { stickyHeader: stickyHeader || ((_a = tableInfo.props) === null || _a === void 0 ? void 0 : _a.stickyHeader), fullHeight: fullHeight || ((_b = tableInfo.props) === null || _b === void 0 ? void 0 : _b.fullHeight), ref: function (commands) {
                    if (tableInfo.ref) {
                        if (typeof tableInfo.ref === 'function') {
                            tableInfo.ref(commands);
                        }
                        else {
                            tableInfo.ref.current = commands;
                        }
                    }
                    tableRef.current = commands || undefined;
                }, items: tableData === null || tableData === void 0 ? void 0 : tableData.items, paging: tableData === null || tableData === void 0 ? void 0 : tableData.paging, onPageChange: handlePageChange }))));
    }, [fullHeight, handlePageChange, stickyHeader, tableData === null || tableData === void 0 ? void 0 : tableData.items, tableData === null || tableData === void 0 ? void 0 : tableData.paging, tableInfo]);
    return (React.createElement(material.Grid, { container: true, direction: 'column', spacing: 1, className: classNames('PSearchTable', className), style: fullHeight ? __assign$2(__assign$2({}, initStyle), { flex: 1, display: 'flex' }) : initStyle, sx: sx },
        searchView,
        betweenSearchTableComponent && React.createElement(material.Grid, null, betweenSearchTableComponent),
        tableView));
});var PTableButton = React.forwardRef(function (_a, ref) {
    var children = _a.children, className = _a.className, initSx = _a.sx, _b = _a.variant, variant = _b === void 0 ? 'outlined' : _b, _c = _a.color, color = _c === void 0 ? 'primary' : _c, startIcon = _a.startIcon, endIcon = _a.endIcon, onClick = _a.onClick, props = __rest$1(_a, ["children", "className", "sx", "variant", "color", "startIcon", "endIcon", "onClick"]);
    return (React.createElement(reactComponent.PButton, __assign$2({ ref: ref, className: classNames(className, 'PTableButton'), variant: variant, type: 'button', size: 'small', sx: __assign$2({ minWidth: 0, px: compare.empty(startIcon) && compare.empty(endIcon)
                ? '7px !important'
                : compare.empty(children)
                    ? '5px !important'
                    : '7px !important' }, initSx), color: color, startIcon: startIcon, endIcon: endIcon, onClick: onClick }, props), children));
});
var PTableButton$1 = React.memo(PTableButton);var PTableMenuButton = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    var children = _a.children, className = _a.className, initSx = _a.sx, _b = _a.color, color = _b === void 0 ? 'primary' : _b, _c = _a.variant, variant = _c === void 0 ? 'text' : _c, startIcon = _a.startIcon, _d = _a.placement, placement = _d === void 0 ? 'bottom' : _d, inModal = _a.inModal, zIndex = _a.zIndex, menuList = _a.menuList, props = __rest$1(_a, ["children", "className", "sx", "color", "variant", "startIcon", "placement", "inModal", "zIndex", "menuList"]);
    var buttonId = React.useId();
    var menuId = React.useId();
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/
    var _e = useTableState(), menuOpen = _e.menuOpen, openMenuId = _e.openMenuId, setMenuOpen = _e.setMenuOpen;
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var anchorRef = React.useRef(null);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _f = React.useState(false), open = _f[0], setOpen = _f[1];
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    React.useEffect(function () {
        if (open && menuOpen && openMenuId !== menuId) {
            setOpen(false);
        }
    }, [menuId, menuOpen, open, openMenuId]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleClick = React.useCallback(function () {
        setOpen(function (old) { return !old; });
        if (!open) {
            setMenuOpen(true, menuId);
        }
        else {
            setMenuOpen(false, menuId);
        }
    }, [menuId, open, setMenuOpen]);
    var handleClose = React.useCallback(function () {
        if (open) {
            setOpen(false);
            setMenuOpen(false, menuId);
        }
    }, [menuId, open, setMenuOpen]);
    var handleListKeyDown = React.useCallback(function (event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            if (open) {
                setOpen(false);
                setMenuOpen(false, menuId);
            }
        }
        else if (event.key === 'Escape') {
            if (open) {
                setOpen(false);
                setMenuOpen(false, menuId);
            }
        }
    }, [menuId, open, setMenuOpen]);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var finalMenuList = React.useMemo(function () {
        return React.cloneElement(menuList, {
            autoFocusItem: open,
            id: menuId,
            'aria-labelledby': buttonId,
            onKeyDown: handleListKeyDown,
            onClick: handleClose,
        });
    }, [buttonId, handleClose, handleListKeyDown, menuId, menuList, open]);
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/
    var icon = !startIcon && !children ? 'MoreVert' : undefined;
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement("span", null,
        React.createElement(reactComponent.PButton, __assign$2({ ref: function (r) {
                if (ref) {
                    if (typeof ref === 'function') {
                        ref(r);
                    }
                    else {
                        ref.current = r;
                    }
                }
                anchorRef.current = r;
            }, id: buttonId, variant: variant, "aria-controls": open ? menuId : undefined, "aria-expanded": open ? 'true' : undefined, "aria-haspopup": 'true', className: classNames(className, 'PTableMenuButton'), type: 'button', size: 'small', sx: __assign$2({ minWidth: 0, pl: !children ? 0.7 : icon || startIcon ? 0.7 : variant === 'text' ? 1.2 : 0.7 }, initSx), color: color, startIcon: icon, onClick: handleClick }, props), children),
        React.createElement(material.Popper, { className: 'PTableMenuButton-Popper', open: open, anchorEl: anchorRef.current, role: undefined, placement: placement, transition: true, style: { zIndex: inModal ? (zIndex === undefined ? 1301 : zIndex) : zIndex } }, function (_a) {
            var TransitionProps = _a.TransitionProps, placement = _a.placement;
            var placements = placement.split('-');
            var transformOrigin;
            if (placements[0] === 'left') {
                transformOrigin = 'right';
                // if (placements.length > 1) {
                //   if (placements[1] === 'start') {
                //     transformOrigin += ' top';
                //   } else if (placements[1] === 'end') {
                //     transformOrigin += ' bottom';
                //   }
                // }
            }
            else if (placements[0] === 'right') {
                transformOrigin = 'left';
                // if (placements.length > 1) {
                //   if (placements[1] === 'start') {
                //     transformOrigin += ' top';
                //   } else if (placements[1] === 'end') {
                //     transformOrigin += ' bottom';
                //   }
                // }
            }
            else if (placements[0] === 'top') {
                transformOrigin = 'bottom';
                // if (placements.length > 1) {
                //   if (placements[1] === 'start') {
                //     transformOrigin += ' left';
                //   } else if (placements[1] === 'end') {
                //     transformOrigin += ' right';
                //   }
                // }
            }
            else if (placements[0] === 'bottom') {
                transformOrigin = 'top';
                // if (placements.length > 1) {
                //   if (placements[1] === 'start') {
                //     transformOrigin += ' left';
                //   } else if (placements[1] === 'end') {
                //     transformOrigin += ' right';
                //   }
                // }
            }
            else {
                transformOrigin = 'top';
            }
            return (React.createElement(material.Grow, __assign$2({}, TransitionProps, { style: {
                    transformOrigin: transformOrigin,
                } }),
                React.createElement(material.Paper, null,
                    React.createElement(material.ClickAwayListener, { onClickAway: handleClose }, finalMenuList))));
        })));
});exports.PInfoTable=PInfoTable;exports.PSearchTable=PSearchTable;exports.PTable=PTable;exports.PTableBodyCell=PTableBodyCell;exports.PTableBodyRow=PTableBodyRow;exports.PTableButton=PTableButton$1;exports.PTableCommonCell=PTableCommonCell;exports.PTableFooterCell=PTableFooterCell;exports.PTableHeadCell=PTableHeadCell;exports.PTableMenuButton=PTableMenuButton;exports.PTablePagination=PTablePagination;exports.PTableSortableBody=PTableSortableBody;exports.PTableSortableBodyBlock=PTableSortableBodyBlock;exports.PTableTopHead=PTableTopHead;