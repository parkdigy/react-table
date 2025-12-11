import*as React from'react';import React__default,{useMemo,useRef,useState,useCallback,useEffect,createContext,useContext,useLayoutEffect,useId}from'react';import {styled,Box,IconButton,Grid,Stack,TableRow,lighten,TableCell,Pagination,Checkbox,useTheme,TableHead,Tooltip,TableBody,Icon,TableFooter,Paper,Table,Popper,Grow,ClickAwayListener}from'@mui/material';import {notEmpty,empty,ifUndefined,equal}from'@pdg/compare';import {formatPersonalNo,formatBusinessNo,formatTelNo,formatNumber}from'@pdg/formatting';import {PIcon,PCopyToClipboard,PButton}from'@pdg/react-component';import {PSearch,PSearchGroup,PFormHidden}from'@pdg/react-form';import {useAutoUpdateState,useForwardLayoutRef}from'@pdg/react-hook';import {useSensors,useSensor,MouseSensor,TouchSensor,KeyboardSensor,DndContext,closestCenter}from'@dnd-kit/core';import {useSortable,SortableContext,verticalListSortingStrategy,sortableKeyboardCoordinates,arrayMove}from'@dnd-kit/sortable';import {v4}from'uuid';import {useInView}from'react-intersection-observer';function insertStyle(css) {
    if (typeof window === 'undefined')
        return;
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}insertStyle(".simplebar-track.simplebar-vertical{width:8px !important}.simplebar-track.simplebar-vertical .simplebar-scrollbar.simplebar-visible:before{opacity:.3 !important}.PTable .PTableHead .PTableHeadRow th{position:relative;transform:translateY(-100%)}.PTable.sticky-header .PTableHead .PTableHeadRow th{position:sticky;transform:none}");function getDefaultExportFromCjs (x) {
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
var classNames = /*@__PURE__*/getDefaultExportFromCjs(classnamesExports);const Label = styled(Box) `
  font-size: 12px;
  font-weight: bold;
`;
const ValueWrap = styled(Box) `
  margin-top: 3px;
  position: relative;
  display: flex;
  flex-direction: row;
`;
const Value = styled('div') `
  flex: 1;
`;
const ValueEllipsis = styled('div') `
  flex: 1;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const ValueClipboard = styled('div') ``;
const ClipboardIconButton = styled(IconButton) `
  margin-top: -10px;
  margin-bottom: -10px;
`;
const Line = styled('div') `
  border-top: 1px solid #efefef;
  height: 1px;
  flex: 1;
`;function getTableColumnAlign(column, defaultAlign) {
    switch (column.type) {
        case 'number':
            return column.align ? column.align : 'right';
        default:
            return column.align || defaultAlign;
    }
}
function combineSx(...sx) {
    const finalSx = [];
    if (Array.isArray(finalSx)) {
        sx.forEach((v) => v && finalSx.push(...(Array.isArray(v) ? v : [v])));
    }
    return finalSx;
}
function typographyColorToSxColor(color) {
    if (typeof color === 'string') {
        if (['primary', 'secondary', 'info', 'warning', 'error'].includes(color)) {
            return `${color}.main`;
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
	(function (module, exports$1) {
		!function(t,e){module.exports=e();}(dayjs_min,(function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",c="month",f="quarter",h="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return "["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return !r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return (e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return -t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,u=e.clone().add(r+(s?-1:1),c);return +(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return {M:c,y:h,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",D={};D[g]=M;var p="$isDayjsObject",S=function(t){return t instanceof _||!(!t||!t[p])},w=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else {var a=e.name;D[a]=e,i=a;}return !r&&i&&(g=i),i||!r&&g},O=function(t,e){if(S(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},b=v;b.l=w,b.i=S,b.w=function(t,e){return O(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=w(t.locale,null,true),this.parse(t),this.$x=this.$x||t.x||{},this[p]=true;}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.init();},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds();},m.$utils=function(){return b},m.isValid=function(){return !(this.$d.toString()===l)},m.isSame=function(t,e){var n=O(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return O(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<O(t)},m.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!b.u(e)||e,f=b.p(t),l=function(t,e){var i=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return b.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(f){case h:return r?l(1,0):l(31,11);case c:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,false)},m.$set=function(t,e){var n,o=b.p(t),f="set"+(this.$u?"UTC":""),l=(n={},n[a]=f+"Date",n[d]=f+"Date",n[c]=f+"Month",n[h]=f+"FullYear",n[u]=f+"Hours",n[s]=f+"Minutes",n[i]=f+"Seconds",n[r]=f+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===c||o===h){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d;}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[b.p(t)]()},m.add=function(r,f){var d,l=this;r=Number(r);var $=b.p(f),y=function(t){var e=O(l);return b.w(e.date(e.date()+Math.round(t*r)),l)};if($===c)return this.set(c,this.$M+r);if($===h)return this.set(h,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return b.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=b.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,c=n.months,f=n.meridiem,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return b.s(s%12||12,t,"0")},$=f||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(y,(function(t,r){return r||function(t){switch(t){case "YY":return String(e.$y).slice(-2);case "YYYY":return b.s(e.$y,4,"0");case "M":return a+1;case "MM":return b.s(a+1,2,"0");case "MMM":return h(n.monthsShort,a,c,3);case "MMMM":return h(c,a);case "D":return e.$D;case "DD":return b.s(e.$D,2,"0");case "d":return String(e.$W);case "dd":return h(n.weekdaysMin,e.$W,o,2);case "ddd":return h(n.weekdaysShort,e.$W,o,3);case "dddd":return o[e.$W];case "H":return String(s);case "HH":return b.s(s,2,"0");case "h":return d(1);case "hh":return d(2);case "a":return $(s,u,true);case "A":return $(s,u,false);case "m":return String(u);case "mm":return b.s(u,2,"0");case "s":return String(e.$s);case "ss":return b.s(e.$s,2,"0");case "SSS":return b.s(e.$ms,3,"0");case "Z":return i}return null}(t)||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=this,M=b.p(d),m=O(r),v=(m.utcOffset()-this.utcOffset())*e,g=this-m,D=function(){return b.m(y,m)};switch(M){case h:$=D()/12;break;case c:$=D();break;case f:$=D()/3;break;case o:$=(g-v)/6048e5;break;case a:$=(g-v)/864e5;break;case u:$=g/n;break;case s:$=g/e;break;case i:$=g/t;break;default:$=g;}return l?$:b.a($)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=w(t,e,true);return r&&(n.$L=r),n},m.clone=function(){return b.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),k=_.prototype;return O.prototype=k,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",c],["$y",h],["$D",d]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])};})),O.extend=function(t,e){return t.$i||(t(e,_,O),t.$i=true),O},O.locale=w,O.isDayjs=S,O.unix=function(t){return O(1e3*t)},O.en=D[g],O.Ls=D,O.p={},O})); 
	} (dayjs_min$1));
	return dayjs_min$1.exports;
}var dayjs_minExports = requireDayjs_min();
var dayjs = /*@__PURE__*/getDefaultExportFromCjs(dayjs_minExports);const PInfoTable = ({ cols, spacing = 2, columnSpacing, rowSpacing = 3, className, style, sx, labelClassName, labelColor = 'primary', labelStyle, labelSx, dividerColor = 'gray', valueClassName, valueStyle, valueSx, ellipsis, valueUnderline, info, items, onCopyToClipboard, }) => {
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const renderItems = useMemo(() => items.filter((item) => !!item && (!item.onHide || !item.onHide(info))).map((item) => {
        /** data */
        let data = undefined;
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
        else if (notEmpty(data)) {
            switch (item.type) {
                case 'number':
                    if (typeof data === 'string' || typeof data === 'number') {
                        data = formatNumber(data);
                        if (item.numberPrefix) {
                            data = (React__default.createElement(React__default.Fragment, null,
                                React__default.createElement("span", { style: { opacity: 0.5, marginRight: 2 } }, item.numberPrefix),
                                data));
                        }
                        if (item.numberSuffix) {
                            data = (React__default.createElement(React__default.Fragment, null,
                                data,
                                React__default.createElement("span", { style: { opacity: 0.5, marginLeft: 2 } }, item.numberSuffix)));
                        }
                    }
                    break;
                case 'tel':
                    if (typeof data === 'string') {
                        data = formatTelNo(data);
                    }
                    break;
                case 'email':
                    if (typeof data === 'string') {
                        data = (React__default.createElement(React__default.Fragment, null,
                            React__default.createElement("a", { href: `mailto:${data}` }, data)));
                    }
                    break;
                case 'url':
                    if (typeof data === 'string' && data.toLowerCase().startsWith('http')) {
                        data = (React__default.createElement(React__default.Fragment, null,
                            React__default.createElement("a", { href: data, target: '_blank' }, data)));
                    }
                    break;
                case 'business_no':
                    if (typeof data === 'string') {
                        data = formatBusinessNo(data);
                    }
                    break;
                case 'personal_no':
                    if (typeof data === 'string') {
                        data = formatPersonalNo(data);
                    }
                    break;
                case 'date':
                    if (typeof data === 'string' || typeof data === 'number') {
                        data = dayjs(data, item.dateFormat).format('YYYY-MM-DD');
                    }
                    break;
                case 'datetime':
                    if (typeof data === 'string' || typeof data === 'number') {
                        const dt = dayjs(data, item.dateFormat);
                        data = (React__default.createElement(React__default.Fragment, null,
                            React__default.createElement("span", null, dt.format('YYYY-MM-DD')),
                            item.dateTwoLine ? React__default.createElement("br", null) : ' ',
                            React__default.createElement("span", { style: { opacity: 0.5 } }, dt.format('HH:mm:ss'))));
                    }
                    break;
                case 'date-hour':
                    if (typeof data === 'string' || typeof data === 'number') {
                        const dt = dayjs(data, item.dateFormat);
                        data = (React__default.createElement(React__default.Fragment, null,
                            React__default.createElement("span", null, dt.format('YYYY-MM-DD')),
                            item.dateTwoLine ? React__default.createElement("br", null) : ' ',
                            React__default.createElement("span", { style: { opacity: 0.5 } }, dt.format('HH시'))));
                    }
                    break;
                case 'date-minute':
                    if (typeof data === 'string' || typeof data === 'number') {
                        const dt = dayjs(data, item.dateFormat);
                        data = (React__default.createElement(React__default.Fragment, null,
                            React__default.createElement("span", null, dt.format('YYYY-MM-DD')),
                            item.dateTwoLine ? React__default.createElement("br", null) : ' ',
                            React__default.createElement("span", { style: { opacity: 0.5 } }, dt.format('HH시 MM분'))));
                    }
                    break;
            }
        }
        if (empty(data))
            data = item.onRenderEmpty ? item.onRenderEmpty(info) : React__default.createElement(React__default.Fragment, null, "\u00A0");
        /** copyToClipboardText */
        const copyToClipboardText = item.clipboardText || (typeof data === 'string' ? data : typeof data === 'number' ? data.toString() : '');
        /** sizeProps */
        const sizeProps = {};
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
        return { item, data, copyToClipboardText, sizeProps };
    }), [info, items, cols]);
    const content = useMemo(() => renderItems.map(({ item, data, copyToClipboardText, sizeProps }, idx) => {
        const finalLabelColor = typographyColorToSxColor(item.type === 'divider' ? item.dividerColor || dividerColor : item.labelColor || labelColor);
        const finalLabelSx = combineSx(labelSx, item.labelSx, !!finalLabelColor && { color: finalLabelColor });
        const finalValueSx = combineSx(valueSx, item.valueSx);
        const valueUnderlineStyle = valueUnderline
            ? { borderBottom: '1px solid #efefef', paddingBottom: 5 }
            : undefined;
        return item.type === 'divider' ? (React__default.createElement(Grid, { key: idx, size: { xs: 12 } },
            React__default.createElement(Stack, { direction: 'row', spacing: 0.5, alignItems: 'center' },
                item.icon && (React__default.createElement(PIcon, { sx: { color: item.dividerColor || dividerColor }, size: 'small' }, item.icon)),
                item.label && (React__default.createElement(Label, { className: classNames(labelClassName, item.labelClassName), style: Object.assign(Object.assign({}, item.labelStyle), labelStyle), sx: finalLabelSx }, item.label)),
                item.dividerLine && (React__default.createElement(React__default.Fragment, null, item.icon || item.label ? (React__default.createElement("div", { style: { flex: 1, paddingLeft: 5 } },
                    React__default.createElement(Line, null))) : (React__default.createElement(Line, null))))))) : (React__default.createElement(Grid, { key: idx, size: sizeProps, className: item.className, style: item.style, sx: item.sx },
            React__default.createElement(Stack, { direction: 'row', spacing: 0.5, alignItems: 'center' },
                item.icon && (React__default.createElement(PIcon, { sx: { color: finalLabelColor }, size: 'small' }, "CalendarMonth")),
                React__default.createElement(Label, { className: classNames(labelClassName, item.labelClassName), style: Object.assign(Object.assign({}, item.labelStyle), labelStyle), sx: finalLabelSx }, item.label)),
            React__default.createElement(ValueWrap, { className: classNames(valueClassName, item.valueClassName), style: Object.assign(Object.assign(Object.assign({}, valueStyle), item.valueStyle), valueUnderlineStyle), sx: finalValueSx },
                item.ellipsis || ellipsis ? React__default.createElement(ValueEllipsis, null, data) : React__default.createElement(Value, null, data),
                item.clipboard && notEmpty(copyToClipboardText) && (React__default.createElement(ValueClipboard, null,
                    React__default.createElement(PCopyToClipboard, { text: copyToClipboardText, onCopy: onCopyToClipboard ? () => onCopyToClipboard(item, copyToClipboardText) : undefined },
                        React__default.createElement(ClipboardIconButton, Object.assign({ size: 'small', color: 'primary' }, item.clipboardProps),
                            React__default.createElement(PIcon, null, item.clipboardIcon || 'ContentPaste'))))))));
    }), [
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
    return (React__default.createElement(Grid, { container: true, spacing: spacing, columnSpacing: columnSpacing, rowSpacing: rowSpacing, className: classNames('PInfoTable', className), style: style, sx: sx }, content));
};function debounce$2(func, debounceMs, { signal, edges } = {}) {
    let pendingThis = undefined;
    let pendingArgs = null;
    const leading = edges != null && edges.includes('leading');
    const trailing = edges == null || edges.includes('trailing');
    const invoke = () => {
        if (pendingArgs !== null) {
            func.apply(pendingThis, pendingArgs);
            pendingThis = undefined;
            pendingArgs = null;
        }
    };
    const onTimerEnd = () => {
        if (trailing) {
            invoke();
        }
        cancel();
    };
    let timeoutId = null;
    const schedule = () => {
        if (timeoutId != null) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            timeoutId = null;
            onTimerEnd();
        }, debounceMs);
    };
    const cancelTimer = () => {
        if (timeoutId !== null) {
            clearTimeout(timeoutId);
            timeoutId = null;
        }
    };
    const cancel = () => {
        cancelTimer();
        pendingThis = undefined;
        pendingArgs = null;
    };
    const flush = () => {
        invoke();
    };
    const debounced = function (...args) {
        if (signal?.aborted) {
            return;
        }
        pendingThis = this;
        pendingArgs = args;
        const isFirstCall = timeoutId == null;
        schedule();
        if (leading && isFirstCall) {
            invoke();
        }
    };
    debounced.schedule = schedule;
    debounced.cancel = cancel;
    debounced.flush = flush;
    signal?.addEventListener('abort', cancel, { once: true });
    return debounced;
}function debounce$1(func, debounceMs = 0, options = {}) {
    if (typeof options !== 'object') {
        options = {};
    }
    const { leading = false, trailing = true, maxWait } = options;
    const edges = Array(2);
    if (leading) {
        edges[0] = 'leading';
    }
    if (trailing) {
        edges[1] = 'trailing';
    }
    let result = undefined;
    let pendingAt = null;
    const _debounced = debounce$2(function (...args) {
        result = func.apply(this, args);
        pendingAt = null;
    }, debounceMs, { edges });
    const debounced = function (...args) {
        if (maxWait != null) {
            if (pendingAt === null) {
                pendingAt = Date.now();
            }
            if (Date.now() - pendingAt >= maxWait) {
                result = func.apply(this, args);
                pendingAt = Date.now();
                _debounced.cancel();
                _debounced.schedule();
                return result;
            }
        }
        _debounced.apply(this, args);
        return result;
    };
    const flush = () => {
        _debounced.flush();
        return result;
    };
    debounced.cancel = _debounced.cancel;
    debounced.flush = flush;
    return debounced;
}function throttle$1(func, throttleMs = 0, options = {}) {
    const { leading = true, trailing = true } = options;
    return debounce$1(func, throttleMs, {
        leading,
        maxWait: throttleMs,
        trailing,
    });
}/**
 * Wraps the resize callback with a es-toolkit debounce / throttle based on the refresh mode
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
    const callbackRef = React.useRef(callback);
    React.useEffect(() => {
        callbackRef.current = callback;
    });
    return React.useMemo(() => ((...args) => { var _a; return (_a = callbackRef.current) === null || _a === void 0 ? void 0 : _a.call(callbackRef, ...args); }), []);
};
/** `useRef` hook doesn't handle conditional rendering or dynamic ref changes.
 * This hook creates a proxy that ensures that `refElement` is updated whenever the ref is changed. */
const useRefProxy = 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(targetRef) => {
    // we are going to use this ref to store the last element that was passed to the hook
    const [refElement, setRefElement] = React.useState((targetRef === null || targetRef === void 0 ? void 0 : targetRef.current) || null);
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
    const refProxy = React.useMemo(() => new Proxy((node) => {
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
function useResizeDetector({ skipOnMount = false, refreshMode, refreshRate = 1000, refreshOptions, handleWidth = true, handleHeight = true, targetRef, observerOptions, onResize, disableRerender = false, } = {}) {
    // If `skipOnMount` is enabled, skip the first resize event
    const skipResize = useRef(skipOnMount);
    // Wrap the `onResize` callback with a ref to avoid re-renders
    const onResizeRef = useCallbackRef(onResize);
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    });
    const sizeRef = useRef({
        width: undefined,
        height: undefined,
    });
    // Create a proxy ref to handle conditional rendering and dynamic ref changes of the target element
    const { refProxy, refElement } = useRefProxy(targetRef);
    const { box } = observerOptions || {};
    const resizeCallback = useCallback((entries) => {
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
            if (disableRerender) {
                if (shouldSetSize(sizeRef.current, dimensions)) {
                    sizeRef.current.width = dimensions.width;
                    sizeRef.current.height = dimensions.height;
                    onResizeRef === null || onResizeRef === void 0 ? void 0 : onResizeRef({
                        width: dimensions.width,
                        height: dimensions.height,
                        entry,
                    });
                }
            }
            else {
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
            }
        });
    }, [handleWidth, handleHeight, skipResize, box, disableRerender]);
    // Throttle/Debounce the resize event if refreshMode is configured
    const resizeHandler = useCallback(patchResizeCallback(resizeCallback, refreshMode, refreshRate, refreshOptions), [
        resizeCallback,
        refreshMode,
        refreshRate,
        refreshOptions,
    ]);
    // Attach ResizeObserver to the element
    useEffect(() => {
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
            sizeRef.current.width = undefined;
            sizeRef.current.height = undefined;
            if (!disableRerender) {
                setSize({ width: undefined, height: undefined });
            }
        }
        // Disconnect the ResizeObserver when the component is unmounted
        return () => {
            var _a, _b, _c;
            (_a = resizeObserver === null || resizeObserver === void 0 ? void 0 : resizeObserver.disconnect) === null || _a === void 0 ? void 0 : _a.call(resizeObserver);
            (_c = (_b = resizeHandler).cancel) === null || _c === void 0 ? void 0 : _c.call(_b);
        };
    }, [resizeHandler, refElement]);
    return Object.assign({ ref: refProxy }, (disableRerender ? sizeRef.current : size));
}const StyledBodyRow = styled(TableRow)(({ theme }) => ({
    '&.odd-color:nth-of-type(odd):not(:hover)': {
        backgroundColor: lighten(theme.palette.action.hover, 0.4),
    },
    '&.even-color:nth-of-type(even):not(:hover)': {
        backgroundColor: lighten(theme.palette.action.hover, 0.4),
    },
}));
const StyledNoDataDiv = styled('div') `
  text-align: center;
  padding: 30px 0;
  font-weight: 500;
  font-size: 13px;
  color: #94a0b2;
  opacity: 0.8;

  .material-icons {
    font-size: 40px;
    margin-bottom: 5px;
  }
`;const PTableContext = createContext({});function useTableState() {
    const value = useContext(PTableContext);
    if (empty(value)) {
        throw new Error('useTableState should be used within TableContext.Provider');
    }
    return value;
}const StyledTableCell = styled(TableCell) `
  &.ellipsis {
    position: relative;
    max-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
const PTableCommonCell = React__default.forwardRef(({ children, className: initClassName, style: initStyle, sx: initSx, type, column, defaultAlign, defaultEllipsis: initDefaultEllipsis, index, item, onClick, }, ref) => {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/
    const { menuOpen } = useTableState();
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const { align, ellipsis } = useMemo(() => {
        const align = getTableColumnAlign(column, defaultAlign);
        const ellipsis = type !== 'head' &&
            (column.ellipsis ||
                (column.type !== 'img' &&
                    column.type !== 'button' &&
                    column.type !== 'buttons' &&
                    (column.ellipsis == null ? !!initDefaultEllipsis : false)));
        return { align, ellipsis };
    }, [column, defaultAlign, initDefaultEllipsis, type]);
    const className = useMemo(() => {
        var _a, _b, _c, _d, _e, _f;
        let className;
        let getClassName;
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
    const style = useMemo(() => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        let style;
        let getStyle;
        switch (type) {
            case 'head':
                style = ((_a = column.head) === null || _a === void 0 ? void 0 : _a.backgroundColor)
                    ? Object.assign(Object.assign({}, (_b = column.head) === null || _b === void 0 ? void 0 : _b.style), { backgroundColor: column.head.backgroundColor }) : (_c = column.head) === null || _c === void 0 ? void 0 : _c.style;
                getStyle = ((_d = column.head) === null || _d === void 0 ? void 0 : _d.onGetStyle) ? (_e = column.head) === null || _e === void 0 ? void 0 : _e.onGetStyle() : undefined;
                break;
            case 'body':
                style = column.backgroundColor ? Object.assign(Object.assign({}, column.style), { backgroundColor: column.backgroundColor }) : column.style;
                if (item != null && index != null) {
                    getStyle = column.onGetStyle ? column.onGetStyle(item, index) : undefined;
                }
                break;
            case 'footer':
                style = ((_f = column.footer) === null || _f === void 0 ? void 0 : _f.backgroundColor)
                    ? Object.assign(Object.assign({}, (_g = column.footer) === null || _g === void 0 ? void 0 : _g.style), { backgroundColor: column.footer.backgroundColor }) : (_h = column.footer) === null || _h === void 0 ? void 0 : _h.style;
                getStyle = ((_j = column.footer) === null || _j === void 0 ? void 0 : _j.onGetStyle) ? (_k = column.footer) === null || _k === void 0 ? void 0 : _k.onGetStyle() : undefined;
                break;
        }
        return Object.assign(Object.assign(Object.assign(Object.assign({}, initStyle), { width: column.width, minWidth: column.minWidth, cursor: type === 'body' && (column.onClick || onClick) ? 'pointer' : undefined, paddingLeft: column.paddingLeft, paddingRight: column.paddingRight }), style), getStyle);
    }, [column, index, initStyle, item, onClick, type]);
    const sx = useMemo(() => {
        var _a, _b, _c, _d, _e, _f;
        let sx;
        let getSx;
        let displaySx;
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
            const display = {};
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
            displaySx = { display };
        }
        const sxList = [];
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
                if (!sxList.find((sx) => typeof sx !== 'object')) {
                    return sxList.reduce((res, sx) => {
                        res = Object.assign(Object.assign({}, res), sx);
                        return res;
                    }, {});
                }
            }
        }
    }, [column, index, initSx, item, type]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    const handleClick = useCallback((e) => {
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
    return (React__default.createElement(StyledTableCell, { ref: ref, align: align, className: classNames(className, 'PTableCommonCell', ellipsis && 'ellipsis', column.type ? `column-type-${column.type}` : false), style: style, sx: sx, onClick: type === 'body' ? handleClick : undefined }, children));
});const PTableFooterCell = ({ column, items, defaultAlign }) => {
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const data = useMemo(() => {
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
    return (React__default.createElement(PTableCommonCell, { type: 'head', className: 'PTableFooterCell', column: column, defaultAlign: defaultAlign }, data));
};const PTablePagination = ({ className, style, sx, paging, align, onChange }) => {
    return (React__default.createElement(Stack, { alignItems: align },
        React__default.createElement(Pagination, { count: paging.last_page, page: paging.current_page, color: 'primary', className: classNames('PTablePagination', className), style: style, sx: sx, onChange: (e, page) => {
                if (onChange)
                    onChange(page);
            } })));
};const PTableContextProvider = ({ children, value }) => {
    return React__default.createElement(PTableContext.Provider, { value: value }, children);
};const PTableTopHeadCaptionRow = styled(TableRow)(({ theme }) => ({
    '> th': {
        backgroundColor: theme.palette.grey.A100,
        textAlign: 'center',
        fontWeight: 700,
    },
}));const PTableHeadCell = ({ column, items, defaultAlign, top, onCheckChange }) => {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/
    const { setHeadColumnChecked, setHeadColumnCommands } = useTableState();
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    const [checked, setChecked] = useState(false);
    const [checkDisabled, setCheckDisabled] = useState(false);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    useEffect(() => {
        if (column.type === 'check') {
            setHeadColumnChecked(column, checked);
        }
    }, [column, checked, setHeadColumnChecked]);
    useEffect(() => {
        setHeadColumnCommands(column, {
            setChecked(checked) {
                if (column.type === 'check') {
                    setChecked(checked);
                }
            },
            setCheckDisabled(checkDisabled) {
                if (column.type === 'check') {
                    setCheckDisabled(checkDisabled);
                }
            },
        });
    }, [setHeadColumnCommands, column]);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const data = useMemo(() => {
        var _a, _b, _c, _d;
        if (column.type === 'check') {
            if (column.hideAllCheck) {
                if ((_a = column.head) === null || _a === void 0 ? void 0 : _a.onRender) {
                    return (_b = column.head) === null || _b === void 0 ? void 0 : _b.onRender(items);
                }
                else {
                    if (typeof column.label === 'string') {
                        return React__default.createElement("div", { dangerouslySetInnerHTML: { __html: column.label } });
                    }
                    else {
                        return column.label;
                    }
                }
            }
            else {
                return (React__default.createElement(Checkbox, { checked: checked, disabled: checkDisabled, onChange: (e, newChecked) => {
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
                    return React__default.createElement("div", { dangerouslySetInnerHTML: { __html: column.label } });
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
    return (React__default.createElement(PTableCommonCell, { type: 'head', className: 'PTableHeadCell', style: top !== undefined ? { top } : undefined, column: column, defaultAlign: defaultAlign }, data));
};const BottomLine = styled('div') `
  height: 1px;
  position: absolute;
  left: 3px;
  right: 3px;
  bottom: 0;
`;
const PTableTopHead = ({ columns, items, rows, caption, defaultAlign, onCheckChange }) => {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/
    const theme = useTheme();
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    const captionRef = useRef(null);
    const row1Ref = useRef(null);
    const row2Ref = useRef(null);
    const row3Ref = useRef(null);
    /********************************************************************************************************************
     * ResizeDetector
     * ******************************************************************************************************************/
    const { height: captionHeight } = useResizeDetector({
        targetRef: captionRef,
        handleWidth: false,
        handleHeight: true,
    });
    const { height: row1Height } = useResizeDetector({ targetRef: row1Ref, handleWidth: false, handleHeight: true });
    const { height: row2Height } = useResizeDetector({ targetRef: row2Ref, handleWidth: false, handleHeight: true });
    const { height: row3Height } = useResizeDetector({ targetRef: row3Ref, handleWidth: false, handleHeight: true });
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    const makeRowCells = useCallback((row, top) => {
        let totalColumns = 0;
        const cells = row
            .map((info, idx) => {
            if (info) {
                totalColumns += info.colSpan || 1;
                return (React__default.createElement(TableCell, { key: idx, colSpan: info.colSpan, align: info.align, style: {
                        top,
                        borderBottom: 0,
                    } },
                    info.label,
                    info.label != null && React__default.createElement(BottomLine, { style: { backgroundColor: theme.palette.divider } })));
            }
        })
            .filter((cell) => !!cell);
        if (totalColumns < columns.length) {
            cells.push(React__default.createElement(TableCell, { key: columns.length, colSpan: columns.length - cells.length, style: { top, borderBottom: 0 } }));
        }
        return cells;
    }, [columns, theme.palette.divider]);
    const columnRow = useMemo(() => {
        const top = (captionHeight || 0) + (row1Height || 0) + (row2Height || 0) + (row3Height || 0);
        return (React__default.createElement(TableRow, null, columns.map((column, idx) => (React__default.createElement(PTableHeadCell, { key: idx, column: column, items: items, defaultAlign: defaultAlign, top: top, onCheckChange: onCheckChange })))));
    }, [captionHeight, columns, defaultAlign, items, onCheckChange, row1Height, row2Height, row3Height]);
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/
    const captionRow = !!caption && (React__default.createElement(PTableTopHeadCaptionRow, { ref: captionRef, className: 'PTableTopHeadCaptionRow' },
        React__default.createElement(TableCell, { colSpan: columns.length }, caption)));
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    if (rows) {
        if (Array.isArray(rows[0])) {
            return (React__default.createElement(TableHead, { className: 'PTableHead' },
                captionRow,
                rows.map((row, idx) => {
                    let ref = undefined;
                    let top = undefined;
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
                    return (React__default.createElement(TableRow, { key: idx, ref: ref, className: 'PTableHeadRow' }, makeRowCells(row, top)));
                })));
        }
        else {
            return (React__default.createElement(TableHead, { className: 'PTableHead' },
                captionRow,
                React__default.createElement(TableRow, { ref: row1Ref, className: 'PTableHeadRow' }, makeRowCells(rows, captionHeight)),
                columnRow));
        }
    }
    else {
        return (React__default.createElement(TableHead, { className: 'PTableHead' },
            captionRow,
            columnRow));
    }
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
 * simplebar-core - v1.3.2
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
 * simplebar-react - v3.3.2
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

var SimpleBar = React.forwardRef(function (_a, ref) {
    var children = _a.children, _b = _a.scrollableNodeProps, scrollableNodeProps = _b === void 0 ? {} : _b, otherProps = __rest$1(_a, ["children", "scrollableNodeProps"]);
    var elRef = React.useRef();
    var scrollableNodeRef = React.useRef();
    var contentNodeRef = React.useRef();
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
    React.useEffect(function () {
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
    return (React.createElement("div", __assign({ "data-simplebar": "init", ref: elRef }, rest),
        React.createElement("div", { className: classNames.wrapper },
            React.createElement("div", { className: classNames.heightAutoObserverWrapperEl },
                React.createElement("div", { className: classNames.heightAutoObserverEl })),
            React.createElement("div", { className: classNames.mask },
                React.createElement("div", { className: classNames.offset }, typeof children === 'function' ? (children({
                    scrollableNodeRef: scrollableNodeRef,
                    scrollableNodeProps: __assign(__assign({}, scrollableNodeFullProps), { ref: scrollableNodeRef }),
                    contentNodeRef: contentNodeRef,
                    contentNodeProps: {
                        className: classNames.contentEl,
                        ref: contentNodeRef
                    }
                })) : (React.createElement("div", __assign({}, scrollableNodeFullProps),
                    React.createElement("div", { className: classNames.contentEl }, children))))),
            React.createElement("div", { className: classNames.placeholder })),
        React.createElement("div", { className: "".concat(classNames.track, " ").concat(classNames.horizontal) },
            React.createElement("div", { className: classNames.scrollbar })),
        React.createElement("div", { className: "".concat(classNames.track, " ").concat(classNames.vertical) },
            React.createElement("div", { className: classNames.scrollbar }))));
});
SimpleBar.displayName = 'SimpleBar';/******************************************************************************
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

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};const makeSortableItems = (items) => {
    return items === null || items === void 0 ? void 0 : items.map((_a, index) => {
        var { id } = _a, item = __rest(_a, ["id"]);
        return Object.assign({ id: id == null ? `${v4()}_${index}` : id }, item);
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
});const StyledButtonsBox = styled(Box) `
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;
const PTableBodyCell = React__default.forwardRef(({ className, style, sx, item, index, column, defaultAlign, defaultEllipsis, onClick, onCheckChange }, ref) => {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/
    const { menuOpen, setItemColumnChecked, setItemColumnCheckDisabled, setItemColumnCommands } = useTableState();
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    const [checked, setChecked] = useState(false);
    const [checkDisabled, setCheckDisabled] = useState(false);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    useEffect(() => {
        if (column.type === 'check') {
            setChecked(column.onInitChecked ? column.onInitChecked(item) : false);
            setCheckDisabled(column.onCheckDisabled ? column.onCheckDisabled(item) : false);
        }
        setItemColumnCommands(item, column, {
            setChecked(checked) {
                if (column.type === 'check') {
                    setChecked(checked);
                }
            },
            setCheckDisabled(disabled) {
                if (column.type === 'check') {
                    setCheckDisabled(disabled);
                }
            },
        });
    }, [column, item, setItemColumnCommands]);
    useEffect(() => {
        if (column.type === 'check') {
            setItemColumnChecked(item, column, checked);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [checked]);
    useEffect(() => {
        if (column.type === 'check') {
            setItemColumnCheckDisabled(item, column, checkDisabled);
            column.onCheckDisabledChange && column.onCheckDisabledChange(item, checkDisabled);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [checkDisabled]);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const isHidden = useMemo(() => (column.onHide ? column.onHide(item, index) : false), [column, index, item]);
    const buttonsBoxJustifyContent = useMemo(() => {
        switch (getTableColumnAlign(column, defaultAlign)) {
            case 'center':
                return 'center';
            case 'right':
                return 'end';
            default:
                return 'start';
        }
    }, [column, defaultAlign]);
    const data = useMemo(() => {
        var _a, _b;
        let data;
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
                    data = formatNumber(data);
                }
                if (column.numberPrefix) {
                    data = (React__default.createElement(React__default.Fragment, null,
                        React__default.createElement("span", { style: { opacity: 0.5, marginRight: 2 } }, column.numberPrefix),
                        data));
                }
                if (column.numberSuffix) {
                    data = (React__default.createElement(React__default.Fragment, null,
                        data,
                        React__default.createElement("span", { style: { opacity: 0.5, marginLeft: 2 } }, column.numberSuffix)));
                }
                break;
            case 'tel':
                if (typeof data === 'string') {
                    data = formatTelNo(data);
                }
                break;
            case 'business_no':
                if (typeof data === 'string') {
                    data = formatBusinessNo(data);
                }
                break;
            case 'personal_no':
                if (typeof data === 'string') {
                    data = formatPersonalNo(data);
                }
                break;
            case 'check':
                data = (React__default.createElement(Box, { className: 'PTableBoxyCell-check-box', onClick: menuOpen ? undefined : (e) => e.stopPropagation() },
                    React__default.createElement(Checkbox, { checked: checked, disabled: checkDisabled, onChange: (e, newChecked) => {
                            setChecked(newChecked);
                            column.onCheckChange && column.onCheckChange(item, newChecked);
                            onCheckChange && onCheckChange(item, column, newChecked);
                        } })));
                break;
            case 'button':
                data = (React__default.createElement(Box, { className: 'PTableBoxyCell-button-box', onClick: menuOpen ? undefined : (e) => e.stopPropagation() }, data));
                break;
            case 'buttons':
                data = (React__default.createElement(StyledButtonsBox, { className: 'PTableBodyCell-buttons-box', justifyContent: buttonsBoxJustifyContent, onClick: menuOpen ? undefined : (e) => e.stopPropagation() }, data));
                break;
            case 'img':
                {
                    const img = React__default.createElement("img", { src: data, style: { maxWidth: '100%', verticalAlign: 'middle' }, alt: '' });
                    const placement = ((_a = column.tooltipProps) === null || _a === void 0 ? void 0 : _a.placement) ? (_b = column.tooltipProps) === null || _b === void 0 ? void 0 : _b.placement : 'left';
                    data = (React__default.createElement("a", { href: data, target: '_blank', onClick: menuOpen
                            ? undefined
                            : (e) => {
                                e.stopPropagation();
                            } },
                        React__default.createElement(Tooltip, Object.assign({ className: 'PTableBodyCell-tooltip', title: React__default.createElement("div", { style: { paddingTop: 3, paddingBottom: 3 } }, img) }, column.tooltipProps, { placement: placement }), img)));
                }
                break;
            case 'date':
                if (data) {
                    data = dayjs(data, column.dateFormat).format('YYYY-MM-DD');
                }
                break;
            case 'datetime':
                if (data) {
                    const dt = dayjs(data, column.dateFormat);
                    data = (React__default.createElement(React__default.Fragment, null,
                        React__default.createElement("span", null, dt.format('YYYY-MM-DD')),
                        column.dateTwoLine ? React__default.createElement("br", null) : ' ',
                        React__default.createElement("span", { style: { opacity: 0.5 } }, dt.format('HH:mm:ss'))));
                }
                break;
            case 'date-hour':
                if (data) {
                    const dt = dayjs(data, column.dateFormat);
                    data = (React__default.createElement(React__default.Fragment, null,
                        React__default.createElement("span", null, dt.format('YYYY-MM-DD')),
                        column.dateTwoLine ? React__default.createElement("br", null) : ' ',
                        React__default.createElement("span", { style: { opacity: 0.5 } }, dt.format('HH시'))));
                }
                break;
            case 'date-minute':
                if (data) {
                    const dt = dayjs(data, column.dateFormat);
                    data = (React__default.createElement(React__default.Fragment, null,
                        React__default.createElement("span", null, dt.format('YYYY-MM-DD')),
                        column.dateTwoLine ? React__default.createElement("br", null) : ' ',
                        React__default.createElement("span", { style: { opacity: 0.5 } }, dt.format('HH시 MM분'))));
                }
                break;
        }
        if (column.type !== 'img') {
            let tooltip;
            if (column.onGetTooltip) {
                tooltip = column.onGetTooltip(item, index);
            }
            if (tooltip) {
                data = (React__default.createElement(Tooltip, Object.assign({ className: 'PTableBodyCell-tooltip', title: tooltip }, column.tooltipProps), React__default.isValidElement(data) ? (data.type === React__default.Fragment ? (React__default.createElement("span", null, data)) : (data)) : (React__default.createElement("span", null, data))));
            }
        }
        return data;
    }, [column, item, index, menuOpen, checked, checkDisabled, buttonsBoxJustifyContent, onCheckChange]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    const handleClick = useCallback((item, index) => {
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
    return (React__default.createElement(PTableCommonCell, { ref: ref, type: 'body', className: classNames('PTableBodyCell', className), style: style, sx: sx, column: column, defaultAlign: defaultAlign, defaultEllipsis: defaultEllipsis, item: item, index: index, onClick: column.onClick || onClick ? handleClick : undefined }, !isHidden && data));
});const PStyledBodyRow = styled(TableRow)(({ theme }) => ({
    '&.odd-color:nth-of-type(odd):not(:hover)': {
        backgroundColor: lighten(theme.palette.action.hover, 0.4),
    },
    '&.even-color:nth-of-type(even):not(:hover)': {
        backgroundColor: lighten(theme.palette.action.hover, 0.4),
    },
}));
const PTableBodyRow = (_a) => {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/
    var { className, style, id, index, defaultAlign, defaultEllipsis, sortable, columns, item, onClick, onCheckChange, onGetColumnClassName, onGetColumnStyle, onGetColumnSx } = _a, props = __rest(_a, ["className", "style", "id", "index", "defaultAlign", "defaultEllipsis", "sortable", "columns", "item", "onClick", "onCheckChange", "onGetColumnClassName", "onGetColumnStyle", "onGetColumnSx"]);
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/
    const sortableProps = sortable
        ? Object.assign(Object.assign({ ref: setNodeRef }, attributes), listeners) : {};
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(PStyledBodyRow, Object.assign({ className: classNames('PTableBodyRow', className), style: sortable
                ? Object.assign(Object.assign({}, style), { transform: CSS.Transform.toString(transform), transition }) : style }, props, sortableProps), columns.map((column, columnIdx) => (React__default.createElement(PTableBodyCell, { className: onGetColumnClassName ? onGetColumnClassName(column, item, index) : undefined, sx: onGetColumnSx ? onGetColumnSx(column, item, index) : undefined, style: onGetColumnStyle ? onGetColumnStyle(column, item, index) : undefined, key: columnIdx, index: index, item: item, defaultAlign: defaultAlign, defaultEllipsis: defaultEllipsis, column: column, onClick: onClick, onCheckChange: onCheckChange }))))));
};const PTableSortableBodyBlock = ({ items, baseIndex, columns, showOddColor, showEvenColor, onGetBodyRowStyle, onGetBodyRowSx, onGetBodyRowClassName, onGetBodyColumnClassName, onGetBodyColumnStyle, onGetBodyColumnSx, defaultAlign, defaultEllipsis, sortable, onClick, onCheckChange, }) => {
    const { progressiveVisible } = useTableState();
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/
    const { ref, inView } = useInView({ threshold: 0, triggerOnce: true });
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    const [canInView, setCanInView] = useState(baseIndex === 0);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    useEffect(() => {
        if (progressiveVisible && baseIndex > 0) {
            setTimeout(() => {
                setCanInView(true);
            }, baseIndex * ifUndefined(progressiveVisible.delay, 300));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [progressiveVisible]);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const renderItems = useMemo(() => !progressiveVisible || inView ? (items.map((item, idx) => (React__default.createElement(PTableBodyRow, { key: item.id, id: item.id, index: baseIndex + idx, className: classNames(showOddColor && 'odd-color', showEvenColor && 'even-color', onGetBodyRowClassName ? onGetBodyRowClassName(item, baseIndex + idx) : undefined), style: onGetBodyRowStyle ? onGetBodyRowStyle(item, baseIndex + idx) : undefined, sx: onGetBodyRowSx ? onGetBodyRowSx(item, baseIndex + idx) : undefined, hover: true, onGetColumnClassName: onGetBodyColumnClassName, onGetColumnStyle: onGetBodyColumnStyle, onGetColumnSx: onGetBodyColumnSx, defaultAlign: defaultAlign, defaultEllipsis: defaultEllipsis, sortable: sortable, columns: columns, item: item, onClick: onClick, onCheckChange: onCheckChange })))) : (React__default.createElement(TableRow, { ref: canInView ? ref : undefined },
        React__default.createElement(TableCell, { colSpan: columns.length, style: { height: progressiveVisible.rowHeight * items.length, border: 'none' } }))), [
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
    return React__default.createElement(React__default.Fragment, null, renderItems);
};const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
};const PTableSortableBody = ({ items, columns, showOddColor, showEvenColor, onGetBodyRowStyle, onGetBodyRowSx, onGetBodyRowClassName, onGetBodyColumnClassName, onGetBodyColumnStyle, onGetBodyColumnSx, defaultAlign, defaultEllipsis, sortable, onClick, onCheckChange, }) => {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/
    const { progressiveVisible } = useTableState();
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const renderBlock = useMemo(() => {
        if (progressiveVisible) {
            return (React__default.createElement(React__default.Fragment, null, chunkArray(items, ifUndefined(progressiveVisible.blockSize, 20)).map((bItems, index) => (React__default.createElement(PTableSortableBodyBlock, { key: index, items: bItems, baseIndex: index, columns: columns, showOddColor: showOddColor, showEvenColor: showEvenColor, onGetBodyRowStyle: onGetBodyRowStyle, onGetBodyRowSx: onGetBodyRowSx, onGetBodyRowClassName: onGetBodyRowClassName, onGetBodyColumnClassName: onGetBodyColumnClassName, onGetBodyColumnStyle: onGetBodyColumnStyle, onGetBodyColumnSx: onGetBodyColumnSx, defaultAlign: defaultAlign, defaultEllipsis: defaultEllipsis, sortable: sortable, onClick: onClick, onCheckChange: onCheckChange })))));
        }
        else {
            return (React__default.createElement(PTableSortableBodyBlock, { items: items, baseIndex: 0, columns: columns, showOddColor: showOddColor, showEvenColor: showEvenColor, onGetBodyRowStyle: onGetBodyRowStyle, onGetBodyRowSx: onGetBodyRowSx, onGetBodyRowClassName: onGetBodyRowClassName, onGetBodyColumnClassName: onGetBodyColumnClassName, onGetBodyColumnStyle: onGetBodyColumnStyle, onGetBodyColumnSx: onGetBodyColumnSx, defaultAlign: defaultAlign, defaultEllipsis: defaultEllipsis, sortable: sortable, onClick: onClick, onCheckChange: onCheckChange }));
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
        sortable,
    ]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return sortable ? (React__default.createElement(SortableContext, { items: items, strategy: verticalListSortingStrategy }, renderBlock)) : (renderBlock);
};function columnFilter(v) {
    return v !== undefined && v !== null && v !== false;
}
let _columnId = 0;
const PTable = React__default.forwardRef(({ className, style: initStyle, sx, caption, topHeadRows, columns: initColumns, items: initItems, paging: initPaging, pagingAlign = 'center', defaultAlign = 'left', defaultEllipsis, stickyHeader: initStickyHeader, height, minHeight, maxHeight, fullHeight, showOddColor, showEvenColor, cellPadding = 13, footer, noData, pagination, sortable, progressiveVisible, onClick, onGetBodyRowClassName, onGetBodyRowStyle, onGetBodyRowSx, onGetBodyColumnClassName, onGetBodyColumnStyle, onGetBodyColumnSx, onPageChange, onSortChange, onCheckChange, }, ref) => {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    const localHeaderDataRef = useRef({});
    const localBodyDataRef = useRef({});
    const updateHeadCheckTimer = useRef(undefined);
    const fireOnCheckChangeTimer = useRef({});
    const simpleBarRef = useRef(null);
    const finalColumnsIdRef = useRef([]);
    /********************************************************************************************************************
     * sortable
     * ******************************************************************************************************************/
    const sensors = useSensors(useSensor(MouseSensor, {
        // Require the mouse to move by 10 pixels before activating
        activationConstraint: {
            distance: 10,
        },
    }), useSensor(TouchSensor, {
        // Press delay of 250ms, with tolerance of 5px of movement
        activationConstraint: {
            delay: 250,
            tolerance: 5,
        },
    }), useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates,
    }));
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    const [menuOpen, setMenuOpen] = useState(false);
    const [openMenuId, setOpenMenuId] = useState(undefined);
    const [columns, setColumns] = useAutoUpdateState(initColumns);
    const [finalColumns, setFinalColumns] = useState();
    const [items, setItems] = useAutoUpdateState(initItems);
    const [sortableItems, setSortableItems] = useState();
    const [paging, setPaging] = useAutoUpdateState(initPaging);
    /********************************************************************************************************************
     * containerHeight
     * ******************************************************************************************************************/
    const [containerHeight, setContainerHeight] = useState();
    const { ref: containerHeightDetector } = useResizeDetector({
        handleHeight: true,
        handleWidth: false,
        onResize() {
            if (containerHeightDetector.current) {
                setContainerHeight(containerHeightDetector.current.getBoundingClientRect().height);
            }
            else {
                setContainerHeight(undefined);
            }
        },
    });
    /********************************************************************************************************************
     * footerHeight
     * ******************************************************************************************************************/
    const [pagingHeight, setPagingHeight] = useState();
    const { ref: pagingHeightResizeDetector } = useResizeDetector({
        handleHeight: true,
        handleWidth: false,
        onResize() {
            if (pagingHeightResizeDetector.current) {
                setPagingHeight(pagingHeightResizeDetector.current.getBoundingClientRect().height);
            }
            else {
                setPagingHeight(undefined);
            }
        },
    });
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    const getFinalColumnId = useCallback((column) => {
        if (finalColumns && finalColumnsIdRef.current) {
            const idx = finalColumns.indexOf(column);
            return finalColumnsIdRef.current[idx];
        }
        else {
            return '';
        }
    }, [finalColumns]);
    const updateHeadCheck = useCallback((column) => {
        if (updateHeadCheckTimer.current) {
            clearTimeout(updateHeadCheckTimer.current);
            updateHeadCheckTimer.current = undefined;
        }
        const columnId = getFinalColumnId(column);
        const headColumnData = localHeaderDataRef.current[columnId];
        if (headColumnData) {
            updateHeadCheckTimer.current = setTimeout(() => {
                var _a, _b;
                updateHeadCheckTimer.current = undefined;
                const enabledCheckExists = !!Object.keys(localBodyDataRef.current).find((key) => {
                    const columnData = localBodyDataRef.current[key].columns[columnId];
                    if (columnData) {
                        if (!columnData.checkDisabled) {
                            return true;
                        }
                    }
                });
                const allChecked = enabledCheckExists &&
                    !Object.keys(localBodyDataRef.current).find((key) => {
                        const columnData = localBodyDataRef.current[key].columns[columnId];
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
    const getChecked = useCallback((itemKey, itemValue, columnId) => {
        let checked = false;
        Object.keys(localBodyDataRef.current).find((key) => {
            const itemData = localBodyDataRef.current[key];
            if (itemData.item[itemKey] === itemValue) {
                const columnData = itemData.columns[columnId];
                checked = !!(columnData === null || columnData === void 0 ? void 0 : columnData.checked);
                return true;
            }
        });
        return checked;
    }, []);
    const setChecked = useCallback((itemKey, itemValue, columnId, checked) => {
        Object.keys(localBodyDataRef.current).find((key) => {
            var _a;
            const itemData = localBodyDataRef.current[key];
            if (itemData.item[itemKey] === itemValue) {
                const columnData = itemData.columns[columnId];
                if (columnData) {
                    (_a = columnData.commands) === null || _a === void 0 ? void 0 : _a.setChecked(checked);
                    updateHeadCheck(columnData.column);
                }
                return true;
            }
        });
    }, [updateHeadCheck]);
    const toggleChecked = useCallback((itemKey, itemValue, columnId) => {
        Object.keys(localBodyDataRef.current).forEach((key) => {
            var _a;
            const itemData = localBodyDataRef.current[key];
            if (itemData.item[itemKey] === itemValue) {
                const columnData = itemData.columns[columnId];
                if (columnData) {
                    (_a = columnData.commands) === null || _a === void 0 ? void 0 : _a.setChecked(!columnData.checked);
                    updateHeadCheck(columnData.column);
                }
                return true;
            }
        });
    }, [updateHeadCheck]);
    const setCheckedAll = useCallback((columnId, checked) => {
        var _a, _b;
        Object.keys(localBodyDataRef.current).forEach((key) => {
            var _a;
            const itemData = localBodyDataRef.current[key];
            const columnData = itemData.columns[columnId];
            if (columnData) {
                (_a = columnData.commands) === null || _a === void 0 ? void 0 : _a.setChecked(checked);
            }
        });
        (_b = (_a = localHeaderDataRef.current[columnId]) === null || _a === void 0 ? void 0 : _a.commands) === null || _b === void 0 ? void 0 : _b.setChecked(checked);
    }, []);
    const getCheckedItems = useCallback((columnId) => {
        const checkedItems = [];
        Object.keys(localBodyDataRef.current).forEach((key) => {
            const itemData = localBodyDataRef.current[key];
            const columnData = itemData.columns[columnId];
            if (columnData) {
                if (columnData.checked) {
                    checkedItems.push(itemData.item);
                }
            }
        });
        return checkedItems;
    }, []);
    const stopHeadCheckTimer = useCallback(() => {
        if (updateHeadCheckTimer.current) {
            clearTimeout(updateHeadCheckTimer.current);
            updateHeadCheckTimer.current = undefined;
        }
    }, []);
    const clearFireOnCheckChangeTimer = useCallback(() => {
        Object.keys(fireOnCheckChangeTimer.current).forEach((key) => {
            if (fireOnCheckChangeTimer.current[key]) {
                clearTimeout(fireOnCheckChangeTimer.current[key]);
            }
        });
        fireOnCheckChangeTimer.current = {};
    }, []);
    const fireOnCheckChange = useCallback((columnId) => {
        if (fireOnCheckChangeTimer.current[columnId]) {
            clearTimeout(fireOnCheckChangeTimer.current[columnId]);
            fireOnCheckChangeTimer.current[columnId] = undefined;
        }
        if (onCheckChange) {
            fireOnCheckChangeTimer.current[columnId] = setTimeout(() => {
                fireOnCheckChangeTimer.current[columnId] = undefined;
                onCheckChange && onCheckChange(columnId, getCheckedItems(columnId));
            }, 100);
        }
    }, [getCheckedItems, onCheckChange]);
    const simpleBarScrollToTop = useCallback(() => {
        var _a, _b;
        (_b = (_a = simpleBarRef.current) === null || _a === void 0 ? void 0 : _a.getScrollElement()) === null || _b === void 0 ? void 0 : _b.scrollTo({ top: 0 });
    }, []);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    useEffect(() => {
        return () => {
            stopHeadCheckTimer();
            clearFireOnCheckChangeTimer();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        stopHeadCheckTimer();
        clearFireOnCheckChangeTimer();
        Object.keys(localHeaderDataRef.current).forEach((key) => {
            var _a;
            if (localHeaderDataRef.current[key].column.type === 'check') {
                (_a = localHeaderDataRef.current[key].commands) === null || _a === void 0 ? void 0 : _a.setChecked(false);
            }
        });
        Object.keys(localBodyDataRef.current).forEach((key) => {
            Object.keys(localBodyDataRef.current[key].columns).forEach((cKey) => {
                var _a;
                (_a = localBodyDataRef.current[key].columns[cKey].commands) === null || _a === void 0 ? void 0 : _a.setChecked(false);
            });
        });
        setSortableItems(makeSortableItems(items));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [items]);
    useEffect(() => {
        stopHeadCheckTimer();
        clearFireOnCheckChangeTimer();
        const newFinalColumns = columns === null || columns === void 0 ? void 0 : columns.filter(columnFilter);
        setFinalColumns(newFinalColumns);
        finalColumnsIdRef.current = newFinalColumns === null || newFinalColumns === void 0 ? void 0 : newFinalColumns.map((col) => {
            if (col.id) {
                return col.id;
            }
            else {
                _columnId += 1;
                return `$c$${_columnId}$`;
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [columns]);
    useLayoutEffect(() => {
        clearFireOnCheckChangeTimer();
        if (sortableItems) {
            localBodyDataRef.current = sortableItems.reduce((res, item) => {
                res[item.id] = {
                    item,
                    columns: {},
                };
                if (finalColumns) {
                    finalColumns.forEach((c) => {
                        var _a;
                        const columnId = getFinalColumnId(c);
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
    useLayoutEffect(() => {
        if (finalColumns) {
            localHeaderDataRef.current = finalColumns.reduce((res, c) => {
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
    useForwardLayoutRef(ref, useMemo(() => {
        let lastColumns = columns;
        let lastItems = items;
        let lastPaging = paging;
        return {
            getColumns: () => lastColumns,
            setColumns: (columns) => {
                lastColumns = columns;
                setColumns(lastColumns);
            },
            getItems: () => lastItems,
            setItems: (items) => {
                lastItems = items;
                setItems(items);
            },
            getPaging: () => lastPaging,
            setItemsPaging: (items, paging) => {
                lastItems = items;
                lastPaging = paging;
                setItems(lastItems);
                setPaging(lastPaging);
            },
            resetSort() {
                setSortableItems(makeSortableItems(lastItems));
            },
            getCheckedItems,
            getChecked,
            setChecked,
            toggleChecked,
            setCheckedAll,
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
    const handleDragEnd = useCallback((event) => {
        const { active, over } = event;
        if (active && over) {
            setSortableItems((items) => {
                if (items) {
                    let oldIndex = null;
                    let newIndex = null;
                    items.find((item, idx) => {
                        if (item.id === active.id) {
                            oldIndex = idx;
                        }
                        else if (item.id === over.id) {
                            newIndex = idx;
                        }
                        return oldIndex != null && newIndex != null;
                    });
                    if (oldIndex != null && newIndex != null) {
                        const finalItems = arrayMove(items, oldIndex, newIndex);
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
    const handleHeadCheckChange = useCallback((column, checked) => {
        Object.keys(localBodyDataRef.current).forEach((key) => {
            var _a;
            const data = localBodyDataRef.current[key].columns[getFinalColumnId(column)];
            if (data) {
                if (!data.checkDisabled) {
                    (_a = data.commands) === null || _a === void 0 ? void 0 : _a.setChecked(checked);
                }
            }
        });
    }, [getFinalColumnId]);
    const handleBodyCheckChange = useCallback((item, column) => {
        updateHeadCheck(column);
    }, [updateHeadCheck]);
    const handlePageChange = useCallback((page) => {
        simpleBarScrollToTop();
        onPageChange && onPageChange(page);
    }, [onPageChange, simpleBarScrollToTop]);
    /********************************************************************************************************************
     * TableContext Function
     * ******************************************************************************************************************/
    const TableContextSetMenuOpen = useCallback((newMenuOpen, newOpenMenuId) => {
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
    const TableContextSetItemColumnChecked = useCallback((item, column, checked) => {
        var _a;
        const columnId = getFinalColumnId(column);
        const data = (_a = localBodyDataRef.current[item.id]) === null || _a === void 0 ? void 0 : _a.columns[columnId];
        if (data) {
            data.checked = checked;
            fireOnCheckChange(columnId);
        }
    }, [fireOnCheckChange, getFinalColumnId]);
    const TableContextSetItemColumnCheckDisabled = useCallback((item, column, disabled) => {
        var _a;
        const data = (_a = localBodyDataRef.current[item.id]) === null || _a === void 0 ? void 0 : _a.columns[getFinalColumnId(column)];
        if (data) {
            data.checkDisabled = disabled;
            updateHeadCheck(column);
        }
    }, [getFinalColumnId, updateHeadCheck]);
    const TableContextSetItemColumnCommands = useCallback((item, column, commands) => {
        var _a;
        const data = (_a = localBodyDataRef.current[item.id]) === null || _a === void 0 ? void 0 : _a.columns[getFinalColumnId(column)];
        if (data) {
            data.commands = commands;
        }
    }, [getFinalColumnId]);
    const TableContextSetHeadColumnChecked = useCallback((column, checked) => {
        const data = localHeaderDataRef.current[getFinalColumnId(column)];
        if (data) {
            data.checked = checked;
        }
    }, [getFinalColumnId]);
    const TableContextSetHeadColumnCommands = useCallback((column, commands) => {
        const data = localHeaderDataRef.current[getFinalColumnId(column)];
        if (data) {
            data.commands = commands;
        }
    }, [getFinalColumnId]);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const isNoData = !!sortableItems && sortableItems.length <= 0;
    const finalPagingHeight = paging && paging.total > 0 ? pagingHeight || 0 : 0;
    const stickyHeader = !isNoData && initStickyHeader;
    const { style, tableSx, pagingStyle } = useMemo(() => {
        const style = fullHeight
            ? Object.assign(Object.assign({ width: '100%' }, initStyle), { flex: 1, justifyContent: 'flex-end', height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }) : Object.assign({ width: '100%' }, initStyle);
        const sx = { padding: typeof cellPadding === 'number' ? `${cellPadding}px` : cellPadding };
        const tableSx = {
            '> .MuiTableHead-root > .MuiTableRow-root > .MuiTableCell-root ': sx,
            '> .MuiTableBody-root > .MuiTableRow-root > .MuiTableCell-root ': sx,
            '> .MuiTableFooter-root > .MuiTableRow-root > .MuiTableCell-root ': sx,
        };
        // pageStyle
        const pagingStyle = { padding: '13px 0', borderTop: '1px solid rgba(224, 224, 224, 1)' };
        if (fullHeight) {
            pagingStyle.position = 'sticky';
        }
        return { style, tableSx, pagingStyle };
    }, [cellPadding, fullHeight, initStyle]);
    const { contentContainerStyle, tableStyle } = useMemo(() => {
        const contentContainerStyle = fullHeight
            ? {
                height: (containerHeight || 0) - (finalPagingHeight || 0) - 1,
                flex: 1,
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                marginBottom: finalPagingHeight || 0,
            }
            : { height, minHeight, maxHeight, marginBottom: -1 };
        const tableStyle = fullHeight && isNoData ? { flex: 1, height: (containerHeight || 0) - finalPagingHeight - 2 } : undefined;
        return { contentContainerStyle, tableStyle };
    }, [containerHeight, finalPagingHeight, fullHeight, height, isNoData, maxHeight, minHeight]);
    const tableTopHead = useMemo(() => finalColumns && (React__default.createElement(PTableTopHead, { caption: caption, rows: topHeadRows, columns: finalColumns, items: items, defaultAlign: defaultAlign, onCheckChange: handleHeadCheckChange })), [caption, defaultAlign, finalColumns, handleHeadCheckChange, items, topHeadRows]);
    const tableBody = useMemo(() => finalColumns && (React__default.createElement(TableBody, null, sortableItems ? (sortableItems.length > 0 ? (React__default.createElement(PTableSortableBody, { items: sortableItems, columns: finalColumns, showOddColor: showOddColor, showEvenColor: showEvenColor, defaultAlign: defaultAlign, defaultEllipsis: defaultEllipsis, sortable: sortable, onClick: onClick, onCheckChange: handleBodyCheckChange, onGetBodyRowClassName: onGetBodyRowClassName, onGetBodyRowStyle: onGetBodyRowStyle, onGetBodyRowSx: onGetBodyRowSx, onGetBodyColumnClassName: onGetBodyColumnClassName, onGetBodyColumnSx: onGetBodyColumnSx, onGetBodyColumnStyle: onGetBodyColumnStyle })) : (React__default.createElement(StyledBodyRow, null,
        React__default.createElement(TableCell, { colSpan: finalColumns.length, style: { flex: 1 } }, noData ? (noData) : (React__default.createElement(StyledNoDataDiv, null,
            React__default.createElement("div", null,
                React__default.createElement(Icon, null, "error")),
            React__default.createElement("div", null, "\uAC80\uC0C9\uB41C \uC815\uBCF4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."))))))) : undefined)), [
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
        sortable,
        sortableItems,
    ]);
    const tableFooter = useMemo(() => finalColumns &&
        !isNoData &&
        footer && (React__default.createElement(TableFooter, null,
        React__default.createElement(TableRow, null, finalColumns.map((column, idx) => (React__default.createElement(PTableFooterCell, { key: idx, column: column, items: items, defaultAlign: defaultAlign })))))), [defaultAlign, finalColumns, footer, isNoData, items]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return finalColumns ? (React__default.createElement(PTableContextProvider, { value: {
            menuOpen,
            openMenuId,
            progressiveVisible,
            setMenuOpen: TableContextSetMenuOpen,
            setItemColumnChecked: TableContextSetItemColumnChecked,
            setItemColumnCheckDisabled: TableContextSetItemColumnCheckDisabled,
            setItemColumnCommands: TableContextSetItemColumnCommands,
            setHeadColumnChecked: TableContextSetHeadColumnChecked,
            setHeadColumnCommands: TableContextSetHeadColumnCommands,
        } },
        React__default.createElement(Paper, { ref: fullHeight ? containerHeightDetector : undefined, className: classNames('PTable', className, !!stickyHeader && 'sticky-header', !!fullHeight && 'full-height', !!showOddColor && 'odd-color', !!showEvenColor && 'even-color', !!sortable && 'sortable'), variant: 'outlined', style: style, sx: sx },
            fullHeight ? (React__default.createElement(SimpleBar, { ref: simpleBarRef, style: contentContainerStyle },
                React__default.createElement(DndContext, { sensors: sensors, collisionDetection: closestCenter, onDragEnd: handleDragEnd },
                    React__default.createElement(Table, { stickyHeader: stickyHeader, sx: tableSx, style: tableStyle },
                        tableTopHead,
                        tableBody,
                        tableFooter)))) : (React__default.createElement(Box, { style: contentContainerStyle },
                React__default.createElement(DndContext, { sensors: sensors, collisionDetection: closestCenter, onDragEnd: handleDragEnd },
                    React__default.createElement(Table, { stickyHeader: stickyHeader, sx: tableSx, style: tableStyle },
                        tableTopHead,
                        tableBody,
                        tableFooter)))),
            finalColumns && paging && paging.total > 0 && (React__default.createElement(Stack, { ref: fullHeight ? pagingHeightResizeDetector : undefined, alignItems: pagingAlign, style: pagingStyle },
                React__default.createElement(PTablePagination, { className: pagination === null || pagination === void 0 ? void 0 : pagination.className, style: pagination === null || pagination === void 0 ? void 0 : pagination.style, sx: pagination === null || pagination === void 0 ? void 0 : pagination.sx, paging: paging, align: pagingAlign, onChange: handlePageChange })))))) : null;
});const getSearchInfo = (search) => {
    const searchInfo = {};
    if (search) {
        const { ref, searchGroups } = search, props = __rest(search, ["ref", "searchGroups"]);
        searchInfo.ref = ref;
        searchInfo.searchGroups = searchGroups;
        searchInfo.props = props;
    }
    return searchInfo;
};
const getTableInfo = (table) => {
    const tableInfo = {};
    if (table) {
        const { ref } = table, props = __rest(table, ["ref"]);
        tableInfo.ref = ref;
        tableInfo.props = props;
    }
    return tableInfo;
};
const deHash = () => {
    const values = {};
    const hash = window.location.hash.substring(1);
    hash.replace(/([^=&]+)=([^&]*)/g, (substring, key, value) => {
        values[decodeURIComponent(key)] = decodeURIComponent(value);
        return substring;
    });
    return values;
};const PSearchTable = React__default.forwardRef(({ className, style: initStyle, sx, color, hash, stickyHeader, fullHeight, search, table, betweenSearchTableComponent, onGetData, onRequestHashChange, }, ref) => {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    const initPathRef = useRef(window.location.pathname);
    const searchRef = useRef(undefined);
    const tableRef = useRef(undefined);
    const lastGetDataDataRef = useRef({});
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    const [isFirstSearchSubmit, setIsFirstSearchSubmit] = useState(true);
    const [tableData, setTableData] = useState();
    /********************************************************************************************************************
     * searchInfo
     * ******************************************************************************************************************/
    const searchInfoFirstUseEffect = useRef(true);
    const [searchInfo, setSearchInfo] = useState(() => getSearchInfo(search));
    useEffect(() => {
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
    const tableInfoFirstUseEffect = useRef(true);
    const [tableInfo, setTableInfo] = useState(() => getTableInfo(table));
    useEffect(() => {
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
    const getData = useCallback((data) => {
        lastGetDataDataRef.current = data;
        if (onGetData) {
            onGetData(data).then(setTableData);
        }
    }, [onGetData]);
    const hashToSearchValue = useCallback(() => {
        const commands = searchRef.current;
        if (commands) {
            commands.resetAll();
            const hashValues = deHash();
            Object.keys(hashValues).forEach((name) => {
                var _a, _b;
                const value = hashValues[name];
                if (name === 'page') {
                    commands.setValue(name, Number(value) || 1);
                }
                else {
                    const itemCommands = commands.getItem(name);
                    if (itemCommands) {
                        switch (itemCommands.getType()) {
                            case 'PFormCheckbox':
                                if (notEmpty(value)) {
                                    const checkCommands = itemCommands;
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
                                    if (notEmpty(value)) {
                                        const dateCommands = itemCommands;
                                        const format = dateCommands.getFormValueFormat();
                                        const itemValue = dayjs(value, format);
                                        itemCommands.setValue(itemValue.isValid() ? itemValue : null);
                                    }
                                    else {
                                        itemCommands.setValue(null);
                                    }
                                }
                                break;
                            case 'PFormDateRangePicker':
                                {
                                    const dateRangePickerCommands = itemCommands;
                                    const fromName = dateRangePickerCommands.getFormValueFromName();
                                    const toName = dateRangePickerCommands.getFormValueToName();
                                    const format = dateRangePickerCommands.getFormValueFormat();
                                    if (name === fromName) {
                                        if (notEmpty(value)) {
                                            const startValue = dayjs(value, format);
                                            dateRangePickerCommands.setFromValue(startValue.isValid() ? startValue : null);
                                        }
                                        else {
                                            dateRangePickerCommands.setFromValue(null);
                                        }
                                    }
                                    else if (name === toName) {
                                        if (notEmpty(value)) {
                                            const endValue = dayjs(value, format);
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
                                    const dateRangePickerCommands = itemCommands;
                                    const fromName = dateRangePickerCommands.getFormValueFromName();
                                    const toName = dateRangePickerCommands.getFormValueToName();
                                    if (name === fromName) {
                                        dateRangePickerCommands.setFromValue(notEmpty(value) ? Number(value) : null);
                                    }
                                    else if (name === toName) {
                                        dateRangePickerCommands.setToValue(notEmpty(value) ? Number(value) : null);
                                    }
                                }
                                break;
                            case 'PFormMonthPicker':
                                {
                                    const monthCommands = itemCommands;
                                    const yearName = monthCommands.getFormValueYearName();
                                    const monthName = monthCommands.getFormValueMonthName();
                                    if (name === yearName) {
                                        monthCommands.setYear(notEmpty(value) ? Number(value) : null);
                                    }
                                    else if (name === monthName) {
                                        monthCommands.setMonth(notEmpty(value) ? Number(value) : null);
                                    }
                                }
                                break;
                            case 'PFormMonthRangePicker':
                                {
                                    const monthRangeCommands = itemCommands;
                                    const fromYearName = monthRangeCommands.getFormValueFromYearName();
                                    const fromMonthName = monthRangeCommands.getFormValueFromMonthName();
                                    const toYearName = monthRangeCommands.getFormValueToYearName();
                                    const toMonthName = monthRangeCommands.getFormValueToMonthName();
                                    if (name === fromYearName) {
                                        monthRangeCommands.setFromYear(notEmpty(value) ? Number(value) : null);
                                    }
                                    else if (name === fromMonthName) {
                                        monthRangeCommands.setFromMonth(notEmpty(value) ? Number(value) : null);
                                    }
                                    else if (name === toYearName) {
                                        monthRangeCommands.setToYear(notEmpty(value) ? Number(value) : null);
                                    }
                                    else if (name === toMonthName) {
                                        monthRangeCommands.setToMonth(notEmpty(value) ? Number(value) : null);
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
    useForwardLayoutRef(ref, useMemo(() => ({
        reload: (page) => {
            var _a, _b, _c, _d;
            if (page != null) {
                (_a = tableRef.current) === null || _a === void 0 ? void 0 : _a.scrollToTop();
            }
            let finalData;
            if (lastGetDataDataRef.current) {
                finalData = Object.assign({}, lastGetDataDataRef.current);
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
        getLastLoadData: () => lastGetDataDataRef.current || {},
        getSearch: () => searchRef.current,
        getTable: () => tableRef.current,
    }), [getData, hash, hashToSearchValue]));
    /********************************************************************************************************************
     * hash
     * ******************************************************************************************************************/
    useEffect(() => {
        if (hash && window.location.pathname === initPathRef.current) {
            const data = hashToSearchValue();
            if (data)
                getData(data);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [window.location.hash]);
    const hashChange = useCallback((params) => {
        if (onRequestHashChange) {
            const hashes = [];
            Object.keys(params).forEach((name) => {
                const value = params[name];
                if (name === 'page') {
                    if (Number(value) > 1) {
                        hashes.push(`${name}=${value}`);
                    }
                }
                else {
                    if (searchRef.current) {
                        const itemCommands = searchRef.current.getItem(name);
                        if (itemCommands) {
                            let resetValue = null;
                            switch (itemCommands.getType()) {
                                case 'PFormDateRangePicker':
                                case 'PFormYearRangePicker':
                                    {
                                        const commands = itemCommands;
                                        const itemName = itemCommands.getName();
                                        const fromName = commands.getFormValueFromName();
                                        const fromSuffix = commands.getFormValueFromNameSuffix();
                                        const toName = commands.getFormValueToName();
                                        const toSuffix = commands.getFormValueToNameSuffix();
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
                                        const commands = itemCommands;
                                        const itemName = commands.getName();
                                        const yearName = commands.getFormValueYearName();
                                        const yearSuffix = commands.getFormValueYearNameSuffix();
                                        const monthName = commands.getFormValueMonthName();
                                        const monthSuffix = commands.getFormValueMonthNameSuffix();
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
                                        const commands = itemCommands;
                                        const itemName = commands.getName();
                                        const fromYearName = commands.getFormValueFromYearName();
                                        const fromYearSuffix = commands.getFormValueFromYearNameSuffix();
                                        const fromMonthName = commands.getFormValueFromMonthName();
                                        const fromMonthSuffix = commands.getFormValueFromMonthNameSuffix();
                                        const toYearName = commands.getFormValueToYearName();
                                        const toYearSuffix = commands.getFormValueToYearNameSuffix();
                                        const toMonthName = commands.getFormValueToMonthName();
                                        const toMonthSuffix = commands.getFormValueToMonthNameSuffix();
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
                            if (resetValue != null && !equal(resetValue, value) && typeof value !== 'object') {
                                hashes.push(`${name}=${encodeURIComponent(value)}`);
                            }
                        }
                    }
                }
            });
            const finalHash = hashes.join('&');
            if (window.location.hash.substring(1) === finalHash) {
                getData(params);
            }
            else {
                onRequestHashChange(hashes.join('&'));
            }
        }
    }, [onRequestHashChange, getData]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    const handlePageChange = useCallback((page) => {
        var _a, _b;
        (_a = searchRef.current) === null || _a === void 0 ? void 0 : _a.setValue('page', page);
        let finalData;
        if (lastGetDataDataRef.current) {
            finalData = Object.assign({}, lastGetDataDataRef.current);
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
    const handleSearchSubmit = useCallback((data) => {
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
            const finalData = Object.assign(Object.assign({}, data), { page: 1 });
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
    const searchView = useMemo(() => (React__default.createElement(Grid, { sx: { display: searchInfo.searchGroups ? undefined : 'none' } },
        React__default.createElement(PSearch, Object.assign({ color: color }, searchInfo.props, { ref: (commands) => {
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
            React__default.createElement(PSearchGroup, { hidden: true },
                React__default.createElement(PFormHidden, { name: 'page', value: 1 })),
            searchInfo.searchGroups))), [color, handleSearchSubmit, searchInfo]);
    const tableView = useMemo(() => {
        var _a, _b;
        return (React__default.createElement(Grid, { style: fullHeight ? { flex: 1, display: 'flex', flexDirection: 'column' } : undefined },
            React__default.createElement(PTable, Object.assign({}, tableInfo.props, { stickyHeader: stickyHeader || ((_a = tableInfo.props) === null || _a === void 0 ? void 0 : _a.stickyHeader), fullHeight: fullHeight || ((_b = tableInfo.props) === null || _b === void 0 ? void 0 : _b.fullHeight), ref: (commands) => {
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
    return (React__default.createElement(Grid, { container: true, direction: 'column', spacing: 1, className: classNames('PSearchTable', className), style: fullHeight ? Object.assign(Object.assign({}, initStyle), { flex: 1, display: 'flex' }) : initStyle, sx: sx },
        searchView,
        betweenSearchTableComponent && React__default.createElement(Grid, null, betweenSearchTableComponent),
        tableView));
});const PTableButton$1 = React__default.forwardRef((_a, ref) => {
    var { children, className, sx: initSx, variant = 'outlined', color = 'primary', startIcon, endIcon, onClick } = _a, props = __rest(_a, ["children", "className", "sx", "variant", "color", "startIcon", "endIcon", "onClick"]);
    return (React__default.createElement(PButton, Object.assign({ ref: ref, className: classNames(className, 'PTableButton'), variant: variant, type: 'button', size: 'small', sx: Object.assign({ minWidth: 0, px: empty(startIcon) && empty(endIcon)
                ? '7px !important'
                : empty(children)
                    ? '5px !important'
                    : '7px !important' }, initSx), color: color, startIcon: startIcon, endIcon: endIcon, onClick: onClick }, props), children));
});
var PTableButton = React__default.memo(PTableButton$1);const PTableMenuButton = React__default.forwardRef((_a, ref) => {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    var { children, className, sx: initSx, color = 'primary', variant = 'text', startIcon, placement = 'bottom', inModal, zIndex, menuList } = _a, props = __rest(_a, ["children", "className", "sx", "color", "variant", "startIcon", "placement", "inModal", "zIndex", "menuList"]);
    const buttonId = useId();
    const menuId = useId();
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/
    const { menuOpen, openMenuId, setMenuOpen } = useTableState();
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    const anchorRef = useRef(null);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    const [open, setOpen] = useState(false);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    useEffect(() => {
        if (open && menuOpen && openMenuId !== menuId) {
            setOpen(false);
        }
    }, [menuId, menuOpen, open, openMenuId]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    const handleClick = useCallback(() => {
        setOpen((old) => !old);
        if (!open) {
            setMenuOpen(true, menuId);
        }
        else {
            setMenuOpen(false, menuId);
        }
    }, [menuId, open, setMenuOpen]);
    const handleClose = useCallback(() => {
        if (open) {
            setOpen(false);
            setMenuOpen(false, menuId);
        }
    }, [menuId, open, setMenuOpen]);
    const handleListKeyDown = useCallback((event) => {
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
    const finalMenuList = useMemo(() => {
        return React__default.cloneElement(menuList, {
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
    const icon = !startIcon && !children ? 'MoreVert' : undefined;
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React__default.createElement("span", null,
        React__default.createElement(PButton, Object.assign({ ref: (r) => {
                if (ref) {
                    if (typeof ref === 'function') {
                        ref(r);
                    }
                    else {
                        ref.current = r;
                    }
                }
                anchorRef.current = r;
            }, id: buttonId, variant: variant, "aria-controls": open ? menuId : undefined, "aria-expanded": open ? 'true' : undefined, "aria-haspopup": 'true', className: classNames(className, 'PTableMenuButton'), type: 'button', size: 'small', sx: Object.assign({ minWidth: 0, pl: !children ? 0.7 : icon || startIcon ? 0.7 : variant === 'text' ? 1.2 : 0.7 }, initSx), color: color, startIcon: icon, onClick: handleClick }, props), children),
        React__default.createElement(Popper, { className: 'PTableMenuButton-Popper', open: open, anchorEl: anchorRef.current, role: undefined, placement: placement, transition: true, style: { zIndex: inModal ? (zIndex === undefined ? 1301 : zIndex) : zIndex } }, ({ TransitionProps, placement }) => {
            const placements = placement.split('-');
            let transformOrigin;
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
            return (React__default.createElement(Grow, Object.assign({}, TransitionProps, { style: {
                    transformOrigin,
                } }),
                React__default.createElement(Paper, null,
                    React__default.createElement(ClickAwayListener, { onClickAway: handleClose }, finalMenuList))));
        })));
});export{PInfoTable,PSearchTable,PTable,PTableBodyCell,PTableBodyRow,PTableButton,PTableCommonCell,PTableFooterCell,PTableHeadCell,PTableMenuButton,PTablePagination,PTableSortableBody,PTableSortableBodyBlock,PTableTopHead};