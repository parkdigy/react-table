import*as React from'react';import React__default,{cloneElement,useRef,useState,useCallback,useEffect,isValidElement,createRef,PureComponent,createContext,useContext,useMemo,useLayoutEffect,useId}from'react';import {styled,TableRow,lighten,TableCell,Box,Checkbox,Tooltip,Stack,Pagination,useTheme,TableHead,TableBody,Icon,TableFooter,Paper,Table as Table$1,Grid,Button,Popper,Grow,ClickAwayListener,IconButton}from'@mui/material';import {findDOMNode}from'react-dom';import {useSortable,sortableKeyboardCoordinates,arrayMove,SortableContext,verticalListSortingStrategy}from'@dnd-kit/sortable';import dayjs from'dayjs';import {useSensors,useSensor,MouseSensor,TouchSensor,KeyboardSensor,DndContext,closestCenter}from'@dnd-kit/core';import {Search,SearchGroup,FormHidden}from'@pdg/react-form';/******************************************************************************
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
/* global Reflect, Promise, SuppressedError, Symbol */


var __assign$3 = function() {
    __assign$3 = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign$3.apply(this, arguments);
};

function __rest$2(s, e) {
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

(function (module) {
	/* global define */

	(function () {

		var hasOwn = {}.hasOwnProperty;

		function classNames() {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					if (arg.length) {
						var inner = classNames.apply(null, arg);
						if (inner) {
							classes.push(inner);
						}
					}
				} else if (argType === 'object') {
					if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
						classes.push(arg.toString());
						continue;
					}

					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else {
			window.classNames = classNames;
		}
	}()); 
} (classnames));

var classnamesExports = classnames.exports;
var classNames = /*@__PURE__*/getDefaultExportFromCjs(classnamesExports);/** Detect free variable `global` from Node.js. */
var freeGlobal$2 = typeof global == 'object' && global && global.Object === Object && global;

var freeGlobal$3 = freeGlobal$2;/** Detect free variable `self`. */
var freeSelf$1 = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root$3 = freeGlobal$3 || freeSelf$1 || Function('return this')();

var root$4 = root$3;/** Built-in value references. */
var Symbol$4 = root$4.Symbol;

var Symbol$5 = Symbol$4;/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$3.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$3 = objectProto$3.toString;

/** Built-in value references. */
var symToStringTag$3 = Symbol$5 ? Symbol$5.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag$2(value) {
  var isOwn = hasOwnProperty$1.call(value, symToStringTag$3),
      tag = value[symToStringTag$3];

  try {
    value[symToStringTag$3] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString$3.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$3] = tag;
    } else {
      delete value[symToStringTag$3];
    }
  }
  return result;
}/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$2 = objectProto$2.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString$2(value) {
  return nativeObjectToString$2.call(value);
}/** `Object#toString` result references. */
var nullTag$1 = '[object Null]',
    undefinedTag$1 = '[object Undefined]';

/** Built-in value references. */
var symToStringTag$2 = Symbol$5 ? Symbol$5.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag$2(value) {
  if (value == null) {
    return value === undefined ? undefinedTag$1 : nullTag$1;
  }
  return (symToStringTag$2 && symToStringTag$2 in Object(value))
    ? getRawTag$2(value)
    : objectToString$2(value);
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
function isObjectLike$2(value) {
  return value != null && typeof value == 'object';
}/** `Object#toString` result references. */
var symbolTag$1 = '[object Symbol]';

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
function isSymbol$2(value) {
  return typeof value == 'symbol' ||
    (isObjectLike$2(value) && baseGetTag$2(value) == symbolTag$1);
}/** Used to match a single whitespace character. */
var reWhitespace$1 = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex$2(string) {
  var index = string.length;

  while (index-- && reWhitespace$1.test(string.charAt(index))) {}
  return index;
}/** Used to match leading whitespace. */
var reTrimStart$1 = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim$2(string) {
  return string
    ? string.slice(0, trimmedEndIndex$2(string) + 1).replace(reTrimStart$1, '')
    : string;
}/**
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
function isObject$4(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}/** Used as references for various `Number` constants. */
var NAN$1 = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex$1 = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary$1 = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal$1 = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt$1 = parseInt;

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
function toNumber$2(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol$2(value)) {
    return NAN$1;
  }
  if (isObject$4(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject$4(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim$2(value);
  var isBinary = reIsBinary$1.test(value);
  return (isBinary || reIsOctal$1.test(value))
    ? freeParseInt$1(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex$1.test(value) ? NAN$1 : +value);
}/**
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
var now$2 = function() {
  return root$4.Date.now();
};

var now$3 = now$2;/** Error message constants. */
var FUNC_ERROR_TEXT$3 = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$1 = Math.max,
    nativeMin$1 = Math.min;

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
function debounce$3(func, wait, options) {
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
    throw new TypeError(FUNC_ERROR_TEXT$3);
  }
  wait = toNumber$2(wait) || 0;
  if (isObject$4(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax$1(toNumber$2(options.maxWait) || 0, wait) : maxWait;
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
      ? nativeMin$1(timeWaiting, maxWait - timeSinceLastInvoke)
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
    var time = now$3();
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
    return timerId === undefined ? result : trailingEdge(now$3());
  }

  function debounced() {
    var time = now$3(),
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
var FUNC_ERROR_TEXT$2 = 'Expected a function';

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
function throttle$2(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT$2);
  }
  if (isObject$4(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce$3(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}var canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

var canUseDom = canUseDOM;

var canUseDOM$1 = /*@__PURE__*/getDefaultExportFromCjs(canUseDom);/**
 * simplebar-core - v1.2.4
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

var cachedScrollbarWidth = null;
var cachedDevicePixelRatio = null;
if (canUseDOM$1) {
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

var helpers = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getElementWindow: getElementWindow$1,
    getElementDocument: getElementDocument$1,
    getOptions: getOptions$1,
    addClasses: addClasses$1,
    removeClasses: removeClasses$1,
    classNamesToQuery: classNamesToQuery$1
});

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
            dragPos = _this.draggedAxis === 'x' && _this.isRtl
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
            var elDocument = getElementDocument(_this.el);
            var elWindow = getElementWindow(_this.el);
            e.preventDefault();
            e.stopPropagation();
            removeClasses(_this.el, _this.classNames.dragging);
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
        this.options = __assign$2(__assign$2({}, SimpleBarCore.defaultOptions), options);
        this.classNames = __assign$2(__assign$2({}, SimpleBarCore.defaultOptions.classNames), options.classNames);
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
        this.onMouseMove = throttle$2(this._onMouseMove, 64);
        this.onWindowResize = debounce$3(this._onWindowResize, 64, { leading: true });
        this.onStopScrolling = debounce$3(this._onStopScrolling, this.stopScrollDelay);
        this.onMouseEntered = debounce$3(this._onMouseEntered, this.stopScrollDelay);
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
        if (canUseDOM$1) {
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
 * simplebar-react - v3.2.4
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
    var classNames = __assign$1(__assign$1({}, SimpleBarCore.defaultOptions.classNames), options.classNames);
    var scrollableNodeFullProps = __assign$1(__assign$1({}, scrollableNodeProps), { className: "".concat(classNames.contentWrapper).concat(scrollableNodeProps.className ? " ".concat(scrollableNodeProps.className) : ''), tabIndex: 0, role: 'region', 'aria-label': options.ariaLabel || SimpleBarCore.defaultOptions.ariaLabel });
    React.useEffect(function () {
        var instance;
        scrollableNodeRef.current = scrollableNodeFullProps.ref
            ? scrollableNodeFullProps.ref.current
            : scrollableNodeRef.current;
        if (elRef.current) {
            instance = new SimpleBarCore(elRef.current, __assign$1(__assign$1(__assign$1({}, options), (scrollableNodeRef.current && {
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
    return (React.createElement("div", __assign$1({ "data-simplebar": "init", ref: elRef }, rest),
        React.createElement("div", { className: classNames.wrapper },
            React.createElement("div", { className: classNames.heightAutoObserverWrapperEl },
                React.createElement("div", { className: classNames.heightAutoObserverEl })),
            React.createElement("div", { className: classNames.mask },
                React.createElement("div", { className: classNames.offset }, typeof children === 'function' ? (children({
                    scrollableNodeRef: scrollableNodeRef,
                    scrollableNodeProps: __assign$1(__assign$1({}, scrollableNodeFullProps), { ref: scrollableNodeRef }),
                    contentNodeRef: contentNodeRef,
                    contentNodeProps: {
                        className: classNames.contentEl,
                        ref: contentNodeRef
                    }
                })) : (React.createElement("div", __assign$1({}, scrollableNodeFullProps),
                    React.createElement("div", { className: classNames.contentEl }, children))))),
            React.createElement("div", { className: classNames.placeholder })),
        React.createElement("div", { className: "".concat(classNames.track, " simplebar-horizontal") },
            React.createElement("div", { className: classNames.scrollbar })),
        React.createElement("div", { className: "".concat(classNames.track, " simplebar-vertical") },
            React.createElement("div", { className: classNames.scrollbar }))));
});
SimpleBar.displayName = 'SimpleBar';/**
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

function isObject$3(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject$3;/** Detect free variable `global` from Node.js. */

var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal$1;var freeGlobal = _freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root$2 = freeGlobal || freeSelf || Function('return this')();

var _root = root$2;var root$1 = _root;

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
var now$1 = function() {
  return root$1.Date.now();
};

var now_1 = now$1;/** Used to match a single whitespace character. */

var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex$1(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

var _trimmedEndIndex = trimmedEndIndex$1;var trimmedEndIndex = _trimmedEndIndex;

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim$1(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

var _baseTrim = baseTrim$1;var root = _root;

/** Built-in value references. */
var Symbol$3 = root.Symbol;

var _Symbol = Symbol$3;var Symbol$2 = _Symbol;

/** Used for built-in method references. */
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
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag$1(value) {
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
}

var _getRawTag = getRawTag$1;/** Used for built-in method references. */

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
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}

var _objectToString = objectToString$1;var Symbol$1 = _Symbol,
    getRawTag = _getRawTag,
    objectToString = _objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag$1(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

var _baseGetTag = baseGetTag$1;/**
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

function isObjectLike$1(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike$1;var baseGetTag = _baseGetTag,
    isObjectLike = isObjectLike_1;

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
function isSymbol$1(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

var isSymbol_1 = isSymbol$1;var baseTrim = _baseTrim,
    isObject$2 = isObject_1,
    isSymbol = isSymbol_1;

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
function toNumber$1(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject$2(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject$2(other) ? (other + '') : other;
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

var toNumber_1 = toNumber$1;var isObject$1 = isObject_1,
    now = now_1,
    toNumber = toNumber_1;

/** Error message constants. */
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
function debounce$1(func, wait, options) {
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
  if (isObject$1(options)) {
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

var debounce_1 = debounce$1;

var debounce$2 = /*@__PURE__*/getDefaultExportFromCjs(debounce_1);var debounce = debounce_1,
    isObject = isObject_1;

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

var throttle_1 = throttle;

var throttle$1 = /*@__PURE__*/getDefaultExportFromCjs(throttle_1);/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

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
}var patchResizeCallback = function (resizeCallback, refreshMode, refreshRate, refreshOptions) {
    switch (refreshMode) {
        case 'debounce':
            return debounce$2(resizeCallback, refreshRate, refreshOptions);
        case 'throttle':
            return throttle$1(resizeCallback, refreshRate, refreshOptions);
        default:
            return resizeCallback;
    }
};
var isFunction = function (fn) { return typeof fn === 'function'; };
var isSSR = function () { return typeof window === 'undefined'; };
var isDOMElement = function (element) {
    return element instanceof Element || element instanceof HTMLDocument;
};/** @class */ ((function (_super) {
    __extends(ResizeDetector, _super);
    function ResizeDetector(props) {
        var _this = _super.call(this, props) || this;
        _this.cancelHandler = function () {
            if (_this.resizeHandler && _this.resizeHandler.cancel) {
                // cancel debounced handler
                _this.resizeHandler.cancel();
                _this.resizeHandler = null;
            }
        };
        _this.attachObserver = function () {
            var _a = _this.props, targetRef = _a.targetRef, observerOptions = _a.observerOptions;
            if (isSSR()) {
                return;
            }
            if (targetRef && targetRef.current) {
                _this.targetRef.current = targetRef.current;
            }
            var element = _this.getElement();
            if (!element) {
                // can't find element to observe
                return;
            }
            if (_this.observableElement && _this.observableElement === element) {
                // element is already observed
                return;
            }
            _this.observableElement = element;
            _this.resizeObserver.observe(element, observerOptions);
        };
        _this.getElement = function () {
            var _a = _this.props, querySelector = _a.querySelector, targetDomEl = _a.targetDomEl;
            if (isSSR())
                return null;
            // in case we pass a querySelector
            if (querySelector)
                return document.querySelector(querySelector);
            // in case we pass a DOM element
            if (targetDomEl && isDOMElement(targetDomEl))
                return targetDomEl;
            // in case we pass a React ref using React.createRef()
            if (_this.targetRef && isDOMElement(_this.targetRef.current))
                return _this.targetRef.current;
            // the worse case when we don't receive any information from the parent and the library doesn't add any wrappers
            // we have to use a deprecated `findDOMNode` method in order to find a DOM element to attach to
            var currentElement = findDOMNode(_this);
            if (!currentElement)
                return null;
            var renderType = _this.getRenderType();
            switch (renderType) {
                case 'renderProp':
                    return currentElement;
                case 'childFunction':
                    return currentElement;
                case 'child':
                    return currentElement;
                case 'childArray':
                    return currentElement;
                default:
                    return currentElement.parentElement;
            }
        };
        _this.createResizeHandler = function (entries) {
            var _a = _this.props, _b = _a.handleWidth, handleWidth = _b === void 0 ? true : _b, _c = _a.handleHeight, handleHeight = _c === void 0 ? true : _c, onResize = _a.onResize;
            if (!handleWidth && !handleHeight)
                return;
            var notifyResize = function (_a) {
                var width = _a.width, height = _a.height;
                if (_this.state.width === width && _this.state.height === height) {
                    // skip if dimensions haven't changed
                    return;
                }
                if ((_this.state.width === width && !handleHeight) || (_this.state.height === height && !handleWidth)) {
                    // process `handleHeight/handleWidth` props
                    return;
                }
                onResize === null || onResize === void 0 ? void 0 : onResize(width, height);
                _this.setState({ width: width, height: height });
            };
            entries.forEach(function (entry) {
                var _a = (entry && entry.contentRect) || {}, width = _a.width, height = _a.height;
                var shouldSetSize = !_this.skipOnMount && !isSSR();
                if (shouldSetSize) {
                    notifyResize({ width: width, height: height });
                }
                _this.skipOnMount = false;
            });
        };
        _this.getRenderType = function () {
            var _a = _this.props, render = _a.render, children = _a.children;
            if (isFunction(render)) {
                // DEPRECATED. Use `Child Function Pattern` instead
                return 'renderProp';
            }
            if (isFunction(children)) {
                return 'childFunction';
            }
            if (isValidElement(children)) {
                return 'child';
            }
            if (Array.isArray(children)) {
                // DEPRECATED. Wrap children with a single parent
                return 'childArray';
            }
            // DEPRECATED. Use `Child Function Pattern` instead
            return 'parent';
        };
        var skipOnMount = props.skipOnMount, refreshMode = props.refreshMode, _a = props.refreshRate, refreshRate = _a === void 0 ? 1000 : _a, refreshOptions = props.refreshOptions;
        _this.state = {
            width: undefined,
            height: undefined
        };
        _this.sizeRef = {
            current: _this.state
        };
        _this.skipOnMount = skipOnMount;
        _this.targetRef = createRef();
        _this.observableElement = null;
        if (isSSR()) {
            return _this;
        }
        _this.resizeHandler = patchResizeCallback(_this.createResizeHandler, refreshMode, refreshRate, refreshOptions);
        _this.resizeObserver = new window.ResizeObserver(_this.resizeHandler);
        return _this;
    }
    ResizeDetector.prototype.componentDidMount = function () {
        this.attachObserver();
    };
    ResizeDetector.prototype.componentDidUpdate = function () {
        this.attachObserver();
        this.sizeRef.current = this.state;
    };
    ResizeDetector.prototype.componentWillUnmount = function () {
        if (isSSR()) {
            return;
        }
        this.observableElement = null;
        this.resizeObserver.disconnect();
        this.cancelHandler();
    };
    ResizeDetector.prototype.render = function () {
        var _a = this.props, render = _a.render, children = _a.children, _b = _a.nodeType, WrapperTag = _b === void 0 ? 'div' : _b;
        var _c = this.state, width = _c.width, height = _c.height;
        var childProps = { width: width, height: height, targetRef: this.targetRef };
        var renderType = this.getRenderType();
        switch (renderType) {
            case 'renderProp':
                return render === null || render === void 0 ? void 0 : render(childProps);
            case 'childFunction': {
                var childFunction = children;
                return childFunction === null || childFunction === void 0 ? void 0 : childFunction(childProps);
            }
            case 'child': {
                // @TODO bug prone logic
                var child = children;
                if (child.type && typeof child.type === 'string') {
                    // child is a native DOM elements such as div, span etc
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    childProps.targetRef; var nativeProps = __rest(childProps, ["targetRef"]);
                    return cloneElement(child, nativeProps);
                }
                // class or functional component otherwise
                return cloneElement(child, childProps);
            }
            case 'childArray': {
                var childArray = children;
                return childArray.map(function (el) { return !!el && cloneElement(el, childProps); });
            }
            default:
                return React__default.createElement(WrapperTag, null);
        }
    };
    return ResizeDetector;
})(PureComponent));function useResizeDetector(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.skipOnMount, skipOnMount = _c === void 0 ? false : _c, refreshMode = _b.refreshMode, _d = _b.refreshRate, refreshRate = _d === void 0 ? 1000 : _d, refreshOptions = _b.refreshOptions, _e = _b.handleWidth, handleWidth = _e === void 0 ? true : _e, _f = _b.handleHeight, handleHeight = _f === void 0 ? true : _f, targetRef = _b.targetRef, observerOptions = _b.observerOptions, onResize = _b.onResize;
    var skipResize = useRef(skipOnMount);
    var _g = useState({
        width: undefined,
        height: undefined
    }), size = _g[0], setSize = _g[1];
    // we are going to use this ref to store the last element that was passed to the hook
    var _h = useState((targetRef === null || targetRef === void 0 ? void 0 : targetRef.current) || null), refElement = _h[0], setRefElement = _h[1];
    // if targetRef is passed, we need to update the refElement
    // we have to use setTimeout because ref get assigned after the hook is called
    // in the future releases we are going to remove targetRef and force users to use ref returned by the hook
    if (targetRef) {
        setTimeout(function () {
            if (targetRef.current !== refElement) {
                setRefElement(targetRef.current);
            }
        }, 0);
    }
    // this is a callback that will be called every time the ref is changed
    // we call setState inside to trigger rerender
    var onRefChange = useCallback(function (node) {
        if (node !== refElement) {
            setRefElement(node);
        }
    }, [refElement]);
    // adding `current` to make it compatible with useRef shape
    onRefChange.current = refElement;
    useEffect(function () {
        return function () {
            // component is unmounted
            // clear ref to avoid memory leaks
            setRefElement(null);
            onRefChange.current = null;
        };
    }, []);
    var shouldSetSize = useCallback(function (prevSize, nextSize) {
        if (prevSize.width === nextSize.width && prevSize.height === nextSize.height) {
            // skip if dimensions haven't changed
            return false;
        }
        if ((prevSize.width === nextSize.width && !handleHeight) ||
            (prevSize.height === nextSize.height && !handleWidth)) {
            // process `handleHeight/handleWidth` props
            return false;
        }
        return true;
    }, [handleWidth, handleHeight]);
    var resizeCallback = useCallback(function (entries) {
        if (!handleWidth && !handleHeight)
            return;
        if (skipResize.current) {
            skipResize.current = false;
            return;
        }
        entries.forEach(function (entry) {
            var _a = (entry === null || entry === void 0 ? void 0 : entry.contentRect) || {}, width = _a.width, height = _a.height;
            setSize(function (prevSize) {
                if (!shouldSetSize(prevSize, { width: width, height: height }))
                    return prevSize;
                return { width: width, height: height };
            });
        });
    }, [handleWidth, handleHeight, skipResize, shouldSetSize]);
    var resizeHandler = useCallback(patchResizeCallback(resizeCallback, refreshMode, refreshRate, refreshOptions), [
        resizeCallback,
        refreshMode,
        refreshRate,
        refreshOptions
    ]);
    // on refElement change
    useEffect(function () {
        var resizeObserver;
        if (refElement) {
            resizeObserver = new window.ResizeObserver(resizeHandler);
            resizeObserver.observe(refElement, observerOptions);
        }
        else {
            if (size.width || size.height) {
                setSize({ width: undefined, height: undefined });
            }
        }
        return function () {
            var _a, _b, _c;
            (_a = resizeObserver === null || resizeObserver === void 0 ? void 0 : resizeObserver.disconnect) === null || _a === void 0 ? void 0 : _a.call(resizeObserver);
            (_c = (_b = resizeHandler).cancel) === null || _c === void 0 ? void 0 : _c.call(_b);
        };
    }, [resizeHandler, refElement]);
    useEffect(function () {
        onResize === null || onResize === void 0 ? void 0 : onResize(size.width, size.height);
    }, [size]);
    return __assign({ ref: onRefChange }, size);
}var TableDefaultProps = {
    defaultAlign: 'left',
    pagingAlign: 'center',
    cellPadding: 13,
};var StyledBodyRow$1 = styled(TableRow)(function (_a) {
    var theme = _a.theme;
    return ({
        '&.odd-color:nth-of-type(odd):not(:hover)': {
            backgroundColor: lighten(theme.palette.action.hover, 0.4),
        },
        '&.even-color:nth-of-type(even):not(:hover)': {
            backgroundColor: lighten(theme.palette.action.hover, 0.4),
        },
    });
});
var StyledNoDataDiv = styled('div')(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  text-align: center;\n  padding: 30px 0;\n  font-weight: 500;\n  font-size: 13px;\n  color: #94a0b2;\n  opacity: 0.8;\n\n  .material-icons {\n    font-size: 40px;\n    margin-bottom: 5px;\n  }\n"], ["\n  text-align: center;\n  padding: 30px 0;\n  font-weight: 500;\n  font-size: 13px;\n  color: #94a0b2;\n  opacity: 0.8;\n\n  .material-icons {\n    font-size: 40px;\n    margin-bottom: 5px;\n  }\n"])));
var templateObject_1$4;var TableBodyRowDefaultProps = {};const CSS = /*#__PURE__*/Object.freeze({
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
});var empty = function (v) {
    var result = false;
    if (v == null) {
        result = true;
    }
    else if (typeof v === 'string') {
        result = v === '';
    }
    else if (typeof v === 'object') {
        if (Array.isArray(v)) {
            result = v.length === 0;
        }
        else if (!(v instanceof Date)) {
            result = Object.entries(v).length === 0;
        }
    }
    return result;
};
var notEmpty = function (v) {
    return !empty(v);
};
var equal = function (v1, v2) {
    if (v1 === v2)
        return true;
    if (typeof v1 !== typeof v2)
        return false;
    if (v1 == null || v2 == null)
        return false;
    if (Array.isArray(v1) && Array.isArray(v2)) {
        if (v1.length !== v2.length)
            return false;
        for (var i = 0; i < v1.length; i += 1) {
            if (v1[i] !== v2[i])
                return false;
        }
    }
    else {
        return v1 === v2;
    }
    return true;
};function numberWithThousandSeparator(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}function getTableColumnAlign(column, defaultAlign) {
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
}var TableContextDefaultValue = {
    menuOpen: false,
    openMenuId: undefined,
    /* eslint-disable */
    setMenuOpen: function () { },
    setItemColumnChecked: function () { },
    setItemColumnCheckDisabled: function () { },
    setItemColumnCommands: function () { },
    setHeadColumnChecked: function () { },
    setHeadColumnCommands: function () { },
    /* eslint-enable */
};var TableContext = createContext(TableContextDefaultValue);function useTableState() {
    var value = useContext(TableContext);
    if (value === undefined) {
        throw new Error('useFormState should be used within TableContext.Provider');
    }
    return value;
}var StyledTableCell = styled(TableCell)(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  &.ellipsis {\n    position: relative;\n    max-width: 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n"], ["\n  &.ellipsis {\n    position: relative;\n    max-width: 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n"])));
var TableCommonCell = function (_a) {
    // Use ---------------------------------------------------------------------------------------------------------------
    var children = _a.children, initClassName = _a.className, initStyle = _a.style, initSx = _a.sx, type = _a.type, column = _a.column, defaultAlign = _a.defaultAlign, initDefaultEllipsis = _a.defaultEllipsis, index = _a.index, item = _a.item, onClick = _a.onClick;
    var menuOpen = useTableState().menuOpen;
    // Memo --------------------------------------------------------------------------------------------------------------
    var align = useMemo(function () { return getTableColumnAlign(column, defaultAlign); }, [column, defaultAlign]);
    var ellipsis = useMemo(function () {
        return type !== 'head' &&
            column.type !== 'img' &&
            column.type !== 'button' &&
            column.type !== 'buttons' &&
            (column.ellipsis != null ? column.ellipsis : !!initDefaultEllipsis);
    }, [type, column, initDefaultEllipsis]);
    var className = useMemo(function () {
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
    var style = useMemo(function () {
        var _a, _b, _c, _d, _e, _f;
        var style;
        var getStyle;
        switch (type) {
            case 'head':
                style = (_a = column.head) === null || _a === void 0 ? void 0 : _a.style;
                getStyle = ((_b = column.head) === null || _b === void 0 ? void 0 : _b.onGetStyle) ? (_c = column.head) === null || _c === void 0 ? void 0 : _c.onGetStyle() : undefined;
                break;
            case 'body':
                style = column.style;
                if (item != null && index != null) {
                    getStyle = column.onGetStyle ? column.onGetStyle(item, index) : undefined;
                }
                break;
            case 'footer':
                style = (_d = column.footer) === null || _d === void 0 ? void 0 : _d.style;
                getStyle = ((_e = column.footer) === null || _e === void 0 ? void 0 : _e.onGetStyle) ? (_f = column.footer) === null || _f === void 0 ? void 0 : _f.onGetStyle() : undefined;
                break;
        }
        return __assign$3(__assign$3(__assign$3(__assign$3({}, initStyle), { width: column.width, minWidth: column.minWidth, cursor: type === 'body' && (column.onClick || onClick) ? 'pointer' : undefined }), style), getStyle);
    }, [column, index, initStyle, item, onClick, type]);
    var sx = useMemo(function () {
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
                        res = __assign$3(__assign$3({}, res), sx);
                        return res;
                    }, {});
                }
            }
        }
    }, [column, index, initSx, item, type]);
    // Event Handler ---------------------------------------------------------------------------------------------------
    var handleClick = useCallback(function (e) {
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
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(StyledTableCell, { align: align, className: classNames(className, 'TableCommonCell', ellipsis && 'ellipsis', column.type ? "column-type-".concat(column.type) : false), style: style, sx: sx, onClick: type === 'body' ? handleClick : undefined }, children));
};
var templateObject_1$3;var StyledButtonsBox = styled(Box)(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n"])));
var TableBodyCell = function (_a) {
    // Use ---------------------------------------------------------------------------------------------------------------
    var item = _a.item, index = _a.index, column = _a.column, defaultAlign = _a.defaultAlign, defaultEllipsis = _a.defaultEllipsis, onClick = _a.onClick, onCheckChange = _a.onCheckChange;
    var _b = useTableState(), menuOpen = _b.menuOpen, setItemColumnChecked = _b.setItemColumnChecked, setItemColumnCheckDisabled = _b.setItemColumnCheckDisabled, setItemColumnCommands = _b.setItemColumnCommands;
    // State -------------------------------------------------------------------------------------------------------------
    var _c = useState(false), checked = _c[0], setChecked = _c[1];
    var _d = useState(false), checkDisabled = _d[0], setCheckDisabled = _d[1];
    // Effect ------------------------------------------------------------------------------------------------------------
    useEffect(function () {
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
    useEffect(function () {
        if (column.type === 'check') {
            setItemColumnChecked(item, column, checked);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [checked]);
    useEffect(function () {
        if (column.type === 'check') {
            setItemColumnCheckDisabled(item, column, checkDisabled);
            column.onCheckDisabledChange && column.onCheckDisabledChange(item, checkDisabled);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [checkDisabled]);
    // Memo --------------------------------------------------------------------------------------------------------------
    var isHidden = useMemo(function () { return (column.onHide ? column.onHide(item, index) : false); }, [column, index, item]);
    var buttonsBoxJustifyContent = useMemo(function () {
        switch (getTableColumnAlign(column, defaultAlign)) {
            case 'center':
                return 'center';
            case 'right':
                return 'end';
            default:
                return 'start';
        }
    }, [column, defaultAlign]);
    var data = useMemo(function () {
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
                    data = numberWithThousandSeparator(data);
                }
                break;
            case 'check':
                data = (React__default.createElement(Box, { className: 'TableBoxyCell-check-box', onClick: menuOpen ? undefined : function (e) { return e.stopPropagation(); } },
                    React__default.createElement(Checkbox, { checked: checked, disabled: checkDisabled, onChange: function (e, newChecked) {
                            setChecked(newChecked);
                            column.onCheckChange && column.onCheckChange(item, newChecked);
                            onCheckChange && onCheckChange(item, column, newChecked);
                        } })));
                break;
            case 'button':
                data = (React__default.createElement(Box, { className: 'TableBoxyCell-button-box', onClick: menuOpen ? undefined : function (e) { return e.stopPropagation(); } }, data));
                break;
            case 'buttons':
                data = (React__default.createElement(StyledButtonsBox, { className: 'TableBodyCell-buttons-box', justifyContent: buttonsBoxJustifyContent, onClick: menuOpen ? undefined : function (e) { return e.stopPropagation(); } }, data));
                break;
        }
        switch (column.type) {
            case 'img':
                {
                    var img = React__default.createElement("img", { src: data, style: { maxWidth: '100%', verticalAlign: 'middle' }, alt: '' });
                    var placement = ((_a = column.tooltipProps) === null || _a === void 0 ? void 0 : _a.placement) ? (_b = column.tooltipProps) === null || _b === void 0 ? void 0 : _b.placement : 'left';
                    data = (React__default.createElement("a", { href: data, target: '_blank', onClick: menuOpen
                            ? undefined
                            : function (e) {
                                e.stopPropagation();
                            } },
                        React__default.createElement(Tooltip, __assign$3({ className: 'TableBodyCell-tooltip', title: React__default.createElement("div", { style: { paddingTop: 3, paddingBottom: 3 } }, img) }, column.tooltipProps, { placement: placement }), img)));
                }
                break;
            case 'date':
                if (data) {
                    data = dayjs(data, column.dateFormat).format('YYYY-MM-DD');
                }
                break;
            case 'datetime':
                if (data) {
                    data = dayjs(data, column.dateFormat).format('YYYY-MM-DD HH:mm:ss');
                }
                break;
        }
        if (column.type !== 'img') {
            var tooltip = void 0;
            if (column.onGetTooltip) {
                tooltip = column.onGetTooltip(item, index);
            }
            if (tooltip) {
                data = (React__default.createElement(Tooltip, __assign$3({ className: 'TableBodyCell-tooltip', title: tooltip }, column.tooltipProps), React__default.isValidElement(data) ? (data.type === React__default.Fragment ? (React__default.createElement("span", null, data)) : (data)) : (React__default.createElement("span", null, data))));
            }
        }
        return data;
    }, [column, item, index, menuOpen, checked, checkDisabled, buttonsBoxJustifyContent, onCheckChange]);
    // Event Handler ---------------------------------------------------------------------------------------------------
    var handleClick = useCallback(function (item, index) {
        if (column.onClick) {
            column.onClick(item, index);
        }
        else {
            if (onClick)
                onClick(item, index);
        }
    }, [column, onClick]);
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(TableCommonCell, { type: 'body', className: 'TableBodyCell', column: column, defaultAlign: defaultAlign, defaultEllipsis: defaultEllipsis, item: item, index: index, onClick: column.onClick || onClick ? handleClick : undefined }, !isHidden && data));
};
var templateObject_1$2;var StyledBodyRow = styled(TableRow)(function (_a) {
    var theme = _a.theme;
    return ({
        '&.odd-color:nth-of-type(odd):not(:hover)': {
            backgroundColor: lighten(theme.palette.action.hover, 0.4),
        },
        '&.even-color:nth-of-type(even):not(:hover)': {
            backgroundColor: lighten(theme.palette.action.hover, 0.4),
        },
    });
});
var TableBodyRow = function (_a) {
    var className = _a.className, style = _a.style, 
    //--------------------------------------------------------------------------------------------------------------------
    id = _a.id, index = _a.index, defaultAlign = _a.defaultAlign, defaultEllipsis = _a.defaultEllipsis, sortable = _a.sortable, columns = _a.columns, item = _a.item, onClick = _a.onClick, onCheckChange = _a.onCheckChange, 
    // -------------------------------------------------------------------------------------------------------------------
    props = __rest$2(_a, ["className", "style", "id", "index", "defaultAlign", "defaultEllipsis", "sortable", "columns", "item", "onClick", "onCheckChange"]);
    var _b = useSortable({ id: id }), attributes = _b.attributes, listeners = _b.listeners, setNodeRef = _b.setNodeRef, transform = _b.transform, transition = _b.transition;
    var finalStyle = useMemo(function () {
        return sortable
            ? __assign$3(__assign$3({}, style), { transform: CSS.Transform.toString(transform), transition: transition }) : style;
    }, [sortable, style, transform, transition]);
    var sortableProps = useMemo(function () {
        return sortable
            ? __assign$3(__assign$3({ ref: setNodeRef }, attributes), listeners) : {};
    }, [attributes, listeners, setNodeRef, sortable]);
    return (React__default.createElement(StyledBodyRow, __assign$3({ className: classNames('TableBodyRow', className), style: finalStyle }, props, sortableProps), columns.map(function (column, columnIdx) { return (React__default.createElement(TableBodyCell, { key: columnIdx, index: index, item: item, defaultAlign: defaultAlign, defaultEllipsis: defaultEllipsis, column: column, onClick: onClick, onCheckChange: onCheckChange })); })));
};
TableBodyRow.displayName = 'TableBodyRow';
TableBodyRow.defaultProps = TableBodyRowDefaultProps;var TableFooterCell = function (_a) {
    var column = _a.column, defaultAlign = _a.defaultAlign;
    var data = useMemo(function () {
        var _a, _b, _c;
        if ((_a = column.footer) === null || _a === void 0 ? void 0 : _a.onRender) {
            return (_b = column.footer) === null || _b === void 0 ? void 0 : _b.onRender();
        }
        else {
            return (_c = column.footer) === null || _c === void 0 ? void 0 : _c.value;
        }
    }, [column]);
    return (React__default.createElement(TableCommonCell, { type: 'head', className: 'TableFooterCell', column: column, defaultAlign: defaultAlign }, data));
};var TablePagination = function (_a) {
    var className = _a.className, style = _a.style, sx = _a.sx, paging = _a.paging, align = _a.align, onChange = _a.onChange;
    return (React__default.createElement(Stack, { alignItems: align },
        React__default.createElement(Pagination, { count: paging.last_page, page: paging.current_page, color: 'primary', className: classNames('TablePagination', className), style: style, sx: sx, onChange: function (e, page) {
                if (onChange)
                    onChange(page);
            } })));
};var isSame = function (v1, v2) {
    if (v1 === v2)
        return true;
    if (typeof v1 !== typeof v2)
        return false;
    if (v1 == null || v2 == null)
        return false;
    if (Array.isArray(v1) && Array.isArray(v2)) {
        if (v1.length !== v2.length)
            return false;
        for (var i = 0; i < v1.length; i += 1) {
            if (v1[i] !== v2[i])
                return false;
        }
    }
    else {
        return v1 === v2;
    }
    return true;
};function useFirstSkipLayoutEffect(effect, deps) {
    var firstRef = useRef(true);
    useLayoutEffect(function () {
        if (firstRef.current) {
            firstRef.current = false;
        }
        else {
            effect();
        }
    }, deps);
}function useAutoUpdateLayoutState(p1, p2) {
    var state = typeof p1 === 'function' ? undefined : p1;
    var finalStateCallback = typeof p1 === 'function' ? p1 : p2;
    var _a = useState(0), setUpdateKey = _a[1];
    var _initState = useState(function () {
        return finalStateCallback ? finalStateCallback(state, 0) : state;
    })[0];
    var _state = useRef(_initState);
    var forceUpdate = useCallback(function () {
        setUpdateKey(function (updateKey) { return updateKey + 1; });
    }, []);
    useFirstSkipLayoutEffect(function () {
        var newState = finalStateCallback ? finalStateCallback(state) : state;
        if (!isSame(newState, _state.current)) {
            _state.current = newState;
            forceUpdate();
        }
    }, [state]);
    useFirstSkipLayoutEffect(function () {
        var newState = finalStateCallback ? finalStateCallback(_state.current) : _state.current;
        if (!isSame(newState, _state.current)) {
            _state.current = newState;
            forceUpdate();
        }
    }, [finalStateCallback]);
    var setState = useCallback(function (newState) {
        var finalNewState = typeof newState === 'function' ? newState(_state.current) : newState;
        if (!isSame(_state.current, finalNewState)) {
            _state.current = finalNewState;
            forceUpdate();
        }
    }, []);
    return [_state.current, setState];
}function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}var css_248z = "[data-simplebar]{position:relative;flex-direction:column;flex-wrap:wrap;justify-content:flex-start;align-content:flex-start;align-items:flex-start}.simplebar-wrapper{overflow:hidden;width:inherit;height:inherit;max-width:inherit;max-height:inherit}.simplebar-mask{direction:inherit;position:absolute;overflow:hidden;padding:0;margin:0;left:0;top:0;bottom:0;right:0;width:auto!important;height:auto!important;z-index:0}.simplebar-offset{direction:inherit!important;box-sizing:inherit!important;resize:none!important;position:absolute;top:0;left:0;bottom:0;right:0;padding:0;margin:0;-webkit-overflow-scrolling:touch}.simplebar-content-wrapper{direction:inherit;box-sizing:border-box!important;position:relative;display:block;height:100%;width:auto;max-width:100%;max-height:100%;overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.simplebar-content-wrapper::-webkit-scrollbar,.simplebar-hide-scrollbar::-webkit-scrollbar{display:none;width:0;height:0}.simplebar-content:after,.simplebar-content:before{content:' ';display:table}.simplebar-placeholder{max-height:100%;max-width:100%;width:100%;pointer-events:none}.simplebar-height-auto-observer-wrapper{box-sizing:inherit!important;height:100%;width:100%;max-width:1px;position:relative;float:left;max-height:1px;overflow:hidden;z-index:-1;padding:0;margin:0;pointer-events:none;flex-grow:inherit;flex-shrink:0;flex-basis:0}.simplebar-height-auto-observer{box-sizing:inherit;display:block;opacity:0;position:absolute;top:0;left:0;height:1000%;width:1000%;min-height:1px;min-width:1px;overflow:hidden;pointer-events:none;z-index:-1}.simplebar-track{z-index:1;position:absolute;right:0;bottom:0;pointer-events:none;overflow:hidden}[data-simplebar].simplebar-dragging{pointer-events:none;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[data-simplebar].simplebar-dragging .simplebar-content{pointer-events:none;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[data-simplebar].simplebar-dragging .simplebar-track{pointer-events:all}.simplebar-scrollbar{position:absolute;left:0;right:0;min-height:10px}.simplebar-scrollbar:before{position:absolute;content:'';background:#000;border-radius:7px;left:2px;right:2px;opacity:0;transition:opacity .2s .5s linear}.simplebar-scrollbar.simplebar-visible:before{opacity:.5;transition-delay:0s;transition-duration:0s}.simplebar-track.simplebar-vertical{top:0;width:11px}.simplebar-scrollbar:before{top:2px;bottom:2px;left:2px;right:2px}.simplebar-track.simplebar-horizontal{left:0;height:11px}.simplebar-track.simplebar-horizontal .simplebar-scrollbar{right:auto;left:0;top:0;bottom:0;min-height:0;min-width:10px;width:auto}[data-simplebar-direction=rtl] .simplebar-track.simplebar-vertical{right:auto;left:0}.simplebar-dummy-scrollbar-size{direction:rtl;position:fixed;opacity:0;visibility:hidden;height:500px;width:500px;overflow-y:hidden;overflow-x:scroll;-ms-overflow-style:scrollbar!important}.simplebar-dummy-scrollbar-size>div{width:200%;height:200%;margin:10px 0}.simplebar-hide-scrollbar{position:fixed;left:0;visibility:hidden;overflow-y:scroll;scrollbar-width:none;-ms-overflow-style:none}\n";
styleInject(css_248z);var TableContextProvider = function (_a) {
    var children = _a.children, value = _a.value;
    return React__default.createElement(TableContext.Provider, { value: value }, children);
};// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var native = {
  randomUUID
};function v4(options, buf, offset) {
  if (native.randomUUID && !buf && !options) {
    return native.randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return unsafeStringify(rnds);
}var TableTopHeadDefaultProps = {};var TableTopHeadCaptionRow = styled(TableRow)(function (_a) {
    var theme = _a.theme;
    return ({
        '> th': {
            backgroundColor: theme.palette.grey.A100,
            textAlign: 'center',
            fontWeight: 700,
        },
    });
});var TableHeadCell = function (_a) {
    // Use ---------------------------------------------------------------------------------------------------------------
    var column = _a.column, defaultAlign = _a.defaultAlign, top = _a.top, onCheckChange = _a.onCheckChange;
    var _b = useTableState(), setHeadColumnChecked = _b.setHeadColumnChecked, setHeadColumnCommands = _b.setHeadColumnCommands;
    // State -------------------------------------------------------------------------------------------------------------
    var _c = useState(false), checked = _c[0], setChecked = _c[1];
    var _d = useState(false), checkDisabled = _d[0], setCheckDisabled = _d[1];
    // Effect ------------------------------------------------------------------------------------------------------------
    useEffect(function () {
        if (column.type === 'check') {
            setHeadColumnChecked(column, checked);
        }
    }, [column, checked, setHeadColumnChecked]);
    useEffect(function () {
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
    // Memo --------------------------------------------------------------------------------------------------------------
    var style = useMemo(function () { return (top !== undefined ? { top: top } : undefined); }, [top]);
    var data = useMemo(function () {
        var _a, _b;
        if (column.type === 'check') {
            return (React__default.createElement(Checkbox, { checked: checked, disabled: checkDisabled, onChange: function (e, newChecked) {
                    setChecked(newChecked);
                    onCheckChange && onCheckChange(column, newChecked);
                } }));
        }
        else {
            if ((_a = column.head) === null || _a === void 0 ? void 0 : _a.onRender) {
                return (_b = column.head) === null || _b === void 0 ? void 0 : _b.onRender();
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
    }, [checkDisabled, checked, column, onCheckChange]);
    // Render ------------------------------------------------------------------------------------------------------------
    return (React__default.createElement(TableCommonCell, { type: 'head', className: 'TableHeadCell', style: style, column: column, defaultAlign: defaultAlign }, data));
};var BottomLine = styled('div')(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  height: 1px;\n  position: absolute;\n  left: 3px;\n  right: 3px;\n  bottom: 0;\n"], ["\n  height: 1px;\n  position: absolute;\n  left: 3px;\n  right: 3px;\n  bottom: 0;\n"])));
var TableTopHead = function (_a) {
    // Use ---------------------------------------------------------------------------------------------------------------
    var columns = _a.columns, rows = _a.rows, caption = _a.caption, defaultAlign = _a.defaultAlign, onCheckChange = _a.onCheckChange;
    var theme = useTheme();
    // Ref ---------------------------------------------------------------------------------------------------------------
    var captionRef = useRef(null);
    var row1Ref = useRef(null);
    var row2Ref = useRef(null);
    var row3Ref = useRef(null);
    // ResizeDetector ----------------------------------------------------------------------------------------------------
    var captionHeight = useResizeDetector({
        targetRef: captionRef,
        handleWidth: false,
        handleHeight: true,
    }).height;
    var row1Height = useResizeDetector({ targetRef: row1Ref, handleWidth: false, handleHeight: true }).height;
    var row2Height = useResizeDetector({ targetRef: row2Ref, handleWidth: false, handleHeight: true }).height;
    var row3Height = useResizeDetector({ targetRef: row3Ref, handleWidth: false, handleHeight: true }).height;
    // Function ----------------------------------------------------------------------------------------------------------
    var captionRow = useMemo(function () {
        return !!caption && (React__default.createElement(TableTopHeadCaptionRow, { ref: captionRef, className: 'TableTopHeadCaptionRow' },
            React__default.createElement(TableCell, { colSpan: columns.length }, caption)));
    }, [caption, columns]);
    var makeRowCells = useCallback(function (row, top) {
        var cells = row
            .map(function (info, idx) {
            return !!info && (React__default.createElement(TableCell, { key: idx, colSpan: info.colSpan, align: info.align, style: {
                    top: top,
                    borderBottom: 0,
                } },
                info.label,
                info.label != null && React__default.createElement(BottomLine, { style: { backgroundColor: theme.palette.divider } })));
        })
            .filter(function (cell) { return !!cell; });
        if (cells.length < columns.length) {
            cells.push(React__default.createElement(TableCell, { key: columns.length, colSpan: columns.length - cells.length, style: { top: top, borderBottom: 0 } }));
        }
        return cells;
    }, [columns, theme.palette.divider]);
    var columnRow = useMemo(function () {
        var top = (captionHeight || 0) + (row1Height || 0) + (row2Height || 0) + (row3Height || 0);
        return (React__default.createElement(TableRow, null, columns.map(function (column, idx) { return (React__default.createElement(TableHeadCell, { key: idx, column: column, defaultAlign: defaultAlign, top: top, onCheckChange: onCheckChange })); })));
    }, [captionHeight, columns, defaultAlign, onCheckChange, row1Height, row2Height, row3Height]);
    // Render ------------------------------------------------------------------------------------------------------------
    if (rows) {
        if (Array.isArray(rows[0])) {
            return (React__default.createElement(TableHead, { className: 'TableHead' },
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
                    return (React__default.createElement(TableRow, { key: idx, ref: ref, className: 'TableHeadRow' }, makeRowCells(row, top)));
                })));
        }
        else {
            return (React__default.createElement(TableHead, { className: 'TableHead' },
                captionRow,
                React__default.createElement(TableRow, { ref: row1Ref, className: 'TableHeadRow' }, makeRowCells(rows, captionHeight)),
                columnRow));
        }
    }
    else {
        return (React__default.createElement(TableHead, { className: 'TableHead' },
            captionRow,
            columnRow));
    }
};
TableTopHead.displayName = 'TableTopHead';
TableTopHead.defaultProps = TableTopHeadDefaultProps;
var templateObject_1$1;function columnFilter(v) {
    return v !== undefined && v !== null && v !== false;
}
var Table = React__default.forwardRef(function (_a, ref) {
    // Ref ---------------------------------------------------------------------------------------------------------------
    var caption = _a.caption, topHeadRows = _a.topHeadRows, initColumns = _a.columns, initItems = _a.items, initPaging = _a.paging, pagingAlign = _a.pagingAlign, defaultAlign = _a.defaultAlign, defaultEllipsis = _a.defaultEllipsis, initStickyHeader = _a.stickyHeader, height = _a.height, minHeight = _a.minHeight, maxHeight = _a.maxHeight, fullHeight = _a.fullHeight, showOddColor = _a.showOddColor, showEvenColor = _a.showEvenColor, cellPadding = _a.cellPadding, footer = _a.footer, noData = _a.noData, pagination = _a.pagination, sortable = _a.sortable, onClick = _a.onClick, onGetBodyRowSx = _a.onGetBodyRowSx, onPageChange = _a.onPageChange, onSortChange = _a.onSortChange, onCheckChange = _a.onCheckChange, 
    // ---------------------------------------------------------------------------------------------------------------
    className = _a.className, initStyle = _a.style, sx = _a.sx;
    var localHeaderDataRef = useRef({});
    var localBodyDataRef = useRef({});
    var updateHeadCheckTimer = useRef();
    var fireOnCheckChangeTimer = useRef({});
    var simpleBarRef = useRef(null);
    // sortable --------------------------------------------------------------------------------------------------------
    var sensors = useSensors(useSensor(MouseSensor, {
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
    // State -------------------------------------------------------------------------------------------------------------
    var _b = useState(false), menuOpen = _b[0], setMenuOpen = _b[1];
    var _c = useState(undefined), openMenuId = _c[0], setOpenMenuId = _c[1];
    // State - containerHeight -------------------------------------------------------------------------------------------
    var _d = useState(), containerHeight = _d[0], setContainerHeight = _d[1];
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
    // State - footerHeight --------------------------------------------------------------------------------------------
    var _e = useState(), pagingHeight = _e[0], setPagingHeight = _e[1];
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
    // State -----------------------------------------------------------------------------------------------------------
    var _f = useAutoUpdateLayoutState(initColumns), columns = _f[0], setColumns = _f[1];
    var _g = useState(), finalColumns = _g[0], setFinalColumns = _g[1];
    var _h = useAutoUpdateLayoutState(initItems), items = _h[0], setItems = _h[1];
    var _j = useState(), sortableItems = _j[0], setSortableItems = _j[1];
    var _k = useAutoUpdateLayoutState(initPaging), paging = _k[0], setPaging = _k[1];
    // Memo --------------------------------------------------------------------------------------------------------------
    var tableSx = useMemo(function () {
        var sx = {
            padding: typeof cellPadding === 'number' ? "".concat(cellPadding, "px") : cellPadding,
        };
        return {
            '> .MuiTableHead-root > .MuiTableRow-root > .MuiTableCell-root ': sx,
            '> .MuiTableBody-root > .MuiTableRow-root > .MuiTableCell-root ': sx,
            '> .MuiTableFooter-root > .MuiTableRow-root > .MuiTableCell-root ': sx,
        };
    }, [cellPadding]);
    // Function --------------------------------------------------------------------------------------------------------
    var makeSortableItems = useCallback(function (items) {
        return items === null || items === void 0 ? void 0 : items.map(function (_a, index) {
            var id = _a.id, item = __rest$2(_a, ["id"]);
            return __assign$3({ id: id == null ? "".concat(v4(), "_").concat(index) : id }, item);
        });
    }, []);
    var updateHeadCheck = useCallback(function (column) {
        if (updateHeadCheckTimer.current) {
            clearTimeout(updateHeadCheckTimer.current);
            updateHeadCheckTimer.current = undefined;
        }
        var headColumnData = localHeaderDataRef.current[column.id];
        if (headColumnData) {
            updateHeadCheckTimer.current = setTimeout(function () {
                var _a, _b;
                updateHeadCheckTimer.current = undefined;
                var enabledCheckExists = !!Object.keys(localBodyDataRef.current).find(function (key) {
                    var columnData = localBodyDataRef.current[key].columns[column.id];
                    if (columnData) {
                        if (!columnData.checkDisabled) {
                            return true;
                        }
                    }
                });
                var allChecked = enabledCheckExists &&
                    !Object.keys(localBodyDataRef.current).find(function (key) {
                        var columnData = localBodyDataRef.current[key].columns[column.id];
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
    }, []);
    var getCheckedItems = useCallback(function (columnId) {
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
    var stopHeadCheckTimer = useCallback(function () {
        if (updateHeadCheckTimer.current) {
            clearTimeout(updateHeadCheckTimer.current);
            updateHeadCheckTimer.current = undefined;
        }
    }, []);
    var clearFireOnCheckChangeTimer = useCallback(function () {
        Object.keys(fireOnCheckChangeTimer.current).forEach(function (key) {
            if (fireOnCheckChangeTimer.current[key]) {
                clearTimeout(fireOnCheckChangeTimer.current[key]);
            }
        });
        fireOnCheckChangeTimer.current = {};
    }, []);
    var fireOnCheckChange = useCallback(function (columnId) {
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
    var simpleBarScrollToTop = useCallback(function () {
        var _a, _b;
        (_b = (_a = simpleBarRef.current) === null || _a === void 0 ? void 0 : _a.getScrollElement()) === null || _b === void 0 ? void 0 : _b.scrollTo({ top: 0 });
    }, []);
    // Effect ----------------------------------------------------------------------------------------------------------
    useEffect(function () {
        return function () {
            stopHeadCheckTimer();
            clearFireOnCheckChangeTimer();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(function () {
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
    useEffect(function () {
        stopHeadCheckTimer();
        clearFireOnCheckChangeTimer();
        setFinalColumns(columns === null || columns === void 0 ? void 0 : columns.filter(columnFilter));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [columns]);
    useLayoutEffect(function () {
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
                        var columnId = c.id;
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
    }, [sortableItems, finalColumns, clearFireOnCheckChangeTimer]);
    useLayoutEffect(function () {
        if (finalColumns) {
            localHeaderDataRef.current = finalColumns.reduce(function (res, c) {
                res[c.id] = { column: c, checked: false };
                return res;
            }, {});
        }
        else {
            localHeaderDataRef.current = {};
        }
    }, [finalColumns]);
    // Commands --------------------------------------------------------------------------------------------------------
    useLayoutEffect(function () {
        if (ref) {
            var lastColumns_1 = columns;
            var lastItems_1 = items;
            var lastPaging_1 = paging;
            var commands = {
                getColumns: function () { return lastColumns_1; },
                setColumns: function (columns) {
                    lastColumns_1 = columns;
                    setColumns(lastColumns_1);
                },
                getItems: function () { return lastItems_1; },
                getPaging: function () { return lastPaging_1; },
                setItemsPaging: function (items, paging) {
                    lastItems_1 = items;
                    lastPaging_1 = paging;
                    setItems(lastItems_1);
                    setPaging(lastPaging_1);
                },
                resetSort: function () {
                    setSortableItems(makeSortableItems(lastItems_1));
                },
                getCheckedItems: getCheckedItems,
                scrollToTop: simpleBarScrollToTop,
            };
            if (typeof ref === 'function') {
                ref(commands);
            }
            else {
                ref.current = commands;
            }
        }
    }, [
        ref,
        columns,
        items,
        paging,
        makeSortableItems,
        setColumns,
        setItems,
        setPaging,
        getCheckedItems,
        simpleBarScrollToTop,
    ]);
    // Event Handler ---------------------------------------------------------------------------------------------------
    var handleDragEnd = useCallback(function (event) {
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
                        var finalItems = arrayMove(items, oldIndex_1, newIndex_1);
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
    var handleHeadCheckChange = useCallback(function (column, checked) {
        Object.keys(localBodyDataRef.current).forEach(function (key) {
            var _a;
            var data = localBodyDataRef.current[key].columns[column.id];
            if (data) {
                if (!data.checkDisabled) {
                    (_a = data.commands) === null || _a === void 0 ? void 0 : _a.setChecked(checked);
                }
            }
        });
    }, []);
    var handleBodyCheckChange = useCallback(function (item, column) {
        updateHeadCheck(column);
    }, [updateHeadCheck]);
    var handlePageChange = useCallback(function (page) {
        simpleBarScrollToTop();
        onPageChange && onPageChange(page);
    }, [onPageChange, simpleBarScrollToTop]);
    // TableContext Function ---------------------------------------------------------------------------------------------
    var TableContextSetMenuOpen = useCallback(function (newMenuOpen, newOpenMenuId) {
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
    var TableContextSetItemColumnChecked = useCallback(function (item, column, checked) {
        var _a;
        var data = (_a = localBodyDataRef.current[item.id]) === null || _a === void 0 ? void 0 : _a.columns[column.id];
        if (data) {
            data.checked = checked;
            fireOnCheckChange(column.id);
        }
    }, [fireOnCheckChange]);
    var TableContextSetItemColumnCheckDisabled = useCallback(function (item, column, disabled) {
        var _a;
        var data = (_a = localBodyDataRef.current[item.id]) === null || _a === void 0 ? void 0 : _a.columns[column.id];
        if (data) {
            data.checkDisabled = disabled;
            updateHeadCheck(column);
        }
    }, [updateHeadCheck]);
    var TableContextSetItemColumnCommands = useCallback(function (item, column, commands) {
        var _a;
        var data = (_a = localBodyDataRef.current[item.id]) === null || _a === void 0 ? void 0 : _a.columns[column.id];
        if (data) {
            data.commands = commands;
        }
    }, []);
    var TableContextSetHeadColumnChecked = useCallback(function (column, checked) {
        var data = localHeaderDataRef.current[column.id];
        if (data) {
            data.checked = checked;
        }
    }, []);
    var TableContextSetHeadColumnCommands = useCallback(function (column, commands) {
        var data = localHeaderDataRef.current[column.id];
        if (data) {
            data.commands = commands;
        }
    }, []);
    // Memo --------------------------------------------------------------------------------------------------------------
    var tableContextValue = useMemo(function () { return ({
        menuOpen: menuOpen,
        openMenuId: openMenuId,
        setMenuOpen: TableContextSetMenuOpen,
        setItemColumnChecked: TableContextSetItemColumnChecked,
        setItemColumnCheckDisabled: TableContextSetItemColumnCheckDisabled,
        setItemColumnCommands: TableContextSetItemColumnCommands,
        setHeadColumnChecked: TableContextSetHeadColumnChecked,
        setHeadColumnCommands: TableContextSetHeadColumnCommands,
    }); }, [
        TableContextSetHeadColumnChecked,
        TableContextSetHeadColumnCommands,
        TableContextSetItemColumnCheckDisabled,
        TableContextSetItemColumnChecked,
        TableContextSetItemColumnCommands,
        TableContextSetMenuOpen,
        menuOpen,
        openMenuId,
    ]);
    // Memo --------------------------------------------------------------------------------------------------------------
    var isNoData = useMemo(function () { return !!sortableItems && sortableItems.length <= 0; }, [sortableItems]);
    var finalPagingHeight = useMemo(function () { return (paging && paging.total > 0 ? pagingHeight || 0 : 0); }, [paging, pagingHeight]);
    var stickyHeader = useMemo(function () { return !isNoData && initStickyHeader; }, [initStickyHeader, isNoData]);
    var style = useMemo(function () {
        if (fullHeight) {
            return __assign$3(__assign$3({ width: '100%' }, initStyle), { flex: 1, justifyContent: 'flex-end', height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' });
        }
        else {
            return __assign$3({ width: '100%' }, initStyle);
        }
    }, [initStyle, fullHeight]);
    var simpleBarStyle = useMemo(function () {
        if (fullHeight) {
            return {
                height: (containerHeight || 0) - (finalPagingHeight || 0) - 1,
                flex: 1,
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                marginBottom: finalPagingHeight || 0,
            };
        }
        else {
            return { height: height, minHeight: minHeight, maxHeight: maxHeight, marginBottom: -1 };
        }
    }, [fullHeight, containerHeight, finalPagingHeight, height, minHeight, maxHeight]);
    var tableStyle = useMemo(function () {
        if (fullHeight && isNoData) {
            return { flex: 1, height: (containerHeight || 0) - finalPagingHeight - 2 };
        }
    }, [fullHeight, isNoData, containerHeight, finalPagingHeight]);
    var pagingStyle = useMemo(function () {
        var style = { padding: '13px 0', borderTop: '1px solid rgba(224, 224, 224, 1)' };
        if (fullHeight) {
            return __assign$3({ position: 'sticky' }, style);
        }
        return style;
    }, [fullHeight]);
    var tableTopHead = useMemo(function () {
        return finalColumns && (React__default.createElement(TableTopHead, { caption: caption, rows: topHeadRows, columns: finalColumns, defaultAlign: defaultAlign, onCheckChange: handleHeadCheckChange }));
    }, [caption, defaultAlign, finalColumns, handleHeadCheckChange, topHeadRows]);
    var tableBody = useMemo(function () {
        return finalColumns && (React__default.createElement(TableBody, null, sortableItems ? (sortableItems.length > 0 ? (React__default.createElement(SortableContext, { items: sortableItems, strategy: verticalListSortingStrategy }, sortableItems.map(function (item, idx) { return (React__default.createElement(TableBodyRow, { key: item.id, className: classNames(!!showOddColor && 'odd-color', !!showEvenColor && 'even-color'), hover: true, sx: onGetBodyRowSx ? onGetBodyRowSx(item, idx) : undefined, id: item.id, index: idx, defaultAlign: defaultAlign, defaultEllipsis: defaultEllipsis, sortable: sortable, columns: finalColumns, item: item, onClick: onClick, onCheckChange: handleBodyCheckChange })); }))) : (React__default.createElement(StyledBodyRow$1, null,
            React__default.createElement(TableCell, { colSpan: finalColumns.length, style: { flex: 1 } }, noData ? (noData) : (React__default.createElement(StyledNoDataDiv, null,
                React__default.createElement("div", null,
                    React__default.createElement(Icon, null, "error")),
                React__default.createElement("div", null, "\uAC80\uC0C9\uB41C \uC815\uBCF4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."))))))) : undefined));
    }, [
        defaultAlign,
        defaultEllipsis,
        finalColumns,
        handleBodyCheckChange,
        noData,
        onClick,
        onGetBodyRowSx,
        showEvenColor,
        showOddColor,
        sortable,
        sortableItems,
    ]);
    var tableFooter = useMemo(function () {
        return finalColumns &&
            !isNoData &&
            footer && (React__default.createElement(TableFooter, null,
            React__default.createElement(TableRow, null, finalColumns.map(function (column, idx) { return (React__default.createElement(TableFooterCell, { key: idx, column: column, defaultAlign: defaultAlign })); }))));
    }, [defaultAlign, finalColumns, footer, isNoData]);
    var tablePaging = useMemo(function () {
        return finalColumns &&
            paging &&
            paging.total > 0 && (React__default.createElement(Stack, { ref: fullHeight ? pagingHeightResizeDetector : undefined, alignItems: pagingAlign, style: pagingStyle },
            React__default.createElement(TablePagination, { className: pagination === null || pagination === void 0 ? void 0 : pagination.className, style: pagination === null || pagination === void 0 ? void 0 : pagination.style, sx: pagination === null || pagination === void 0 ? void 0 : pagination.sx, paging: paging, align: pagingAlign, onChange: handlePageChange })));
    }, [
        finalColumns,
        fullHeight,
        handlePageChange,
        pagination === null || pagination === void 0 ? void 0 : pagination.className,
        pagination === null || pagination === void 0 ? void 0 : pagination.style,
        pagination === null || pagination === void 0 ? void 0 : pagination.sx,
        paging,
        pagingAlign,
        pagingHeightResizeDetector,
        pagingStyle,
    ]);
    // Render ----------------------------------------------------------------------------------------------------------
    return finalColumns ? (React__default.createElement(TableContextProvider, { value: tableContextValue },
        React__default.createElement(Paper, { ref: fullHeight ? containerHeightDetector : undefined, className: classNames('Table', className, !!stickyHeader && 'sticky-header', !!fullHeight && 'full-height', !!showOddColor && 'odd-color', !!showEvenColor && 'even-color', !!sortable && 'sortable'), variant: 'outlined', style: style, sx: sx },
            React__default.createElement(SimpleBar, { ref: simpleBarRef, style: simpleBarStyle },
                React__default.createElement(DndContext, { sensors: sensors, collisionDetection: closestCenter, onDragEnd: handleDragEnd },
                    React__default.createElement(Table$1, { stickyHeader: stickyHeader, sx: tableSx, style: tableStyle },
                        tableTopHead,
                        tableBody,
                        tableFooter))),
            tablePaging))) : null;
});
Table.displayName = 'Table';
Table.defaultProps = TableDefaultProps;var SearchTableDefaultProps = {};var SearchTable = React__default.forwardRef(function (_a, ref) {
    var _b, _c;
    var color = _a.color, hash = _a.hash, stickyHeader = _a.stickyHeader, fullHeight = _a.fullHeight, search = _a.search, table = _a.table, betweenSearchTableComponent = _a.betweenSearchTableComponent, onGetData = _a.onGetData, onRequestHashChange = _a.onRequestHashChange, 
    // ---------------------------------------------------------------------------------------------------------------
    className = _a.className, initStyle = _a.style, sx = _a.sx;
    var searchRef = useRef();
    var tableRef = useRef();
    //------------------------------------------------------------------------------------------------------------------
    var getSearchInfo = useCallback(function (search) {
        var searchInfo = {};
        if (search) {
            var ref_1 = search.ref, searchGroups = search.searchGroups, props = __rest$2(search, ["ref", "searchGroups"]);
            searchInfo.ref = ref_1;
            searchInfo.searchGroups = searchGroups;
            searchInfo.props = props;
        }
        return searchInfo;
    }, []);
    var getTableInfo = useCallback(function (table) {
        var tableInfo = {};
        if (table) {
            var ref_2 = table.ref, props = __rest$2(table, ["ref"]);
            tableInfo.ref = ref_2;
            tableInfo.props = props;
        }
        return tableInfo;
    }, []);
    // Ref -------------------------------------------------------------------------------------------------------------
    var lastGetDataDataRef = useRef({});
    // State -----------------------------------------------------------------------------------------------------------
    var _d = useState(true), isFirstSearchSubmit = _d[0], setIsFirstSearchSubmit = _d[1];
    var _e = useState(), tableData = _e[0], setTableData = _e[1];
    // searchInfo ------------------------------------------------------------------------------------------------------
    var searchInfoFirstUseEffect = useRef(true);
    var _f = useState(function () { return getSearchInfo(search); }), searchInfo = _f[0], setSearchInfo = _f[1];
    useEffect(function () {
        if (searchInfoFirstUseEffect.current) {
            searchInfoFirstUseEffect.current = false;
        }
        else {
            setSearchInfo(getSearchInfo(search));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);
    // tableInfo -------------------------------------------------------------------------------------------------------
    var tableInfoFirstUseEffect = useRef(true);
    var _g = useState(function () { return getTableInfo(table); }), tableInfo = _g[0], setTableInfo = _g[1];
    useEffect(function () {
        if (tableInfoFirstUseEffect.current) {
            tableInfoFirstUseEffect.current = false;
        }
        else {
            setTableInfo(getTableInfo(table));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [table]);
    // Function - getData ----------------------------------------------------------------------------------------------
    var getData = useCallback(function (data) {
        lastGetDataDataRef.current = data;
        if (onGetData) {
            onGetData(data).then(setTableData);
        }
    }, [onGetData]);
    // Function ----------------------------------------------------------------------------------------------------------
    var deHash = useCallback(function () {
        var values = {};
        var hash = window.location.hash.substring(1);
        hash.replace(/([^=&]+)=([^&]*)/g, function (substring, key, value) {
            values[decodeURIComponent(key)] = decodeURIComponent(value);
            return substring;
        });
        return values;
    }, []);
    var hashToSearchValue = useCallback(function () {
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
                            case 'FormCheckbox':
                                if (notEmpty(value)) {
                                    var checkCommands = itemCommands;
                                    if (value.toString() === ((_a = itemCommands.getValue()) === null || _a === void 0 ? void 0 : _a.toString())) {
                                        checkCommands.setChecked(true);
                                    }
                                    else if (value.toString() === ((_b = checkCommands.getUncheckedValue()) === null || _b === void 0 ? void 0 : _b.toString())) {
                                        checkCommands.setChecked(false);
                                    }
                                }
                                break;
                            case 'FormDatePicker':
                            case 'FormDateTimePicker':
                            case 'FormTimePicker':
                                {
                                    if (notEmpty(value)) {
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
                            case 'FormDateRangePicker':
                                {
                                    var dateRangePickerCommands = itemCommands;
                                    var itemName = dateRangePickerCommands.getName();
                                    var startNameSuffix = dateRangePickerCommands.getFormValueStartNameSuffix();
                                    var endNameSuffix = dateRangePickerCommands.getFormValueEndNameSuffix();
                                    var format = dateRangePickerCommands.getFormValueFormat();
                                    if (name === "".concat(itemName).concat(startNameSuffix)) {
                                        if (notEmpty(value)) {
                                            var startValue = dayjs(value, format);
                                            dateRangePickerCommands.setStartValue(startValue.isValid() ? startValue : null);
                                        }
                                        else {
                                            dateRangePickerCommands.setStartValue(null);
                                        }
                                    }
                                    else if (name === "".concat(itemName).concat(endNameSuffix)) {
                                        if (notEmpty(value)) {
                                            var endValue = dayjs(value, format);
                                            dateRangePickerCommands.setEndValue(endValue.isValid() ? endValue : null);
                                        }
                                        else {
                                            dateRangePickerCommands.setEndValue(null);
                                        }
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
    }, [searchRef, deHash]);
    // Commands --------------------------------------------------------------------------------------------------------
    useLayoutEffect(function () {
        if (ref) {
            var commands = {
                reload: function (page) {
                    var _a, _b, _c, _d;
                    if (page != null) {
                        (_a = tableRef.current) === null || _a === void 0 ? void 0 : _a.scrollToTop();
                    }
                    var finalData;
                    if (lastGetDataDataRef.current) {
                        finalData = __assign$3({}, lastGetDataDataRef.current);
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
            };
            if (typeof ref === 'function') {
                ref(commands);
            }
            else {
                ref.current = commands;
            }
        }
    }, [ref, hash, lastGetDataDataRef, searchRef, tableRef, getData, hashToSearchValue]);
    //--------------------------------------------------------------------------------------------------------------------
    useEffect(function () {
        if (hash) {
            var data = hashToSearchValue();
            if (data)
                getData(data);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [window.location.hash]);
    //--------------------------------------------------------------------------------------------------------------------
    var hashChange = useCallback(function (params) {
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
                                case 'FormDateRangePicker':
                                    {
                                        var itemName = itemCommands.getName();
                                        var startSuffix = itemCommands.getFormValueStartNameSuffix();
                                        var endSuffix = itemCommands.getFormValueEndNameSuffix();
                                        if (name === "".concat(itemName).concat(startSuffix)) {
                                            resetValue = searchRef.current.getFormReset(itemName, startSuffix);
                                        }
                                        else if (name === "".concat(itemName).concat(endSuffix)) {
                                            resetValue = searchRef.current.getFormReset(itemName, endSuffix);
                                        }
                                    }
                                    break;
                                default:
                                    resetValue = searchRef.current.getFormReset(name);
                                    break;
                            }
                            if (resetValue != null && !equal(resetValue, value)) {
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
    //------------------------------------------------------------------------------------------------------------------
    var handlePageChange = useCallback(function (page) {
        var _a, _b;
        (_a = searchRef.current) === null || _a === void 0 ? void 0 : _a.setValue('page', page);
        var finalData;
        if (lastGetDataDataRef.current) {
            finalData = __assign$3({}, lastGetDataDataRef.current);
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
    var handleSearchSubmit = useCallback(function (data) {
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
            var finalData = __assign$3(__assign$3({}, data), { page: 1 });
            if (hash) {
                hashChange(finalData);
            }
            else {
                getData(finalData);
            }
        }
    }, [searchRef, hash, hashChange, getData, isFirstSearchSubmit]);
    // Memo --------------------------------------------------------------------------------------------------------------
    var style = useMemo(function () {
        if (fullHeight) {
            return __assign$3(__assign$3({}, initStyle), { flex: 1, display: 'flex' });
        }
        else {
            return initStyle;
        }
    }, [initStyle, fullHeight]);
    var tableContainerStyle = useMemo(function () {
        if (fullHeight) {
            return { flex: 1, display: 'flex', flexDirection: 'column' };
        }
    }, [fullHeight]);
    //------------------------------------------------------------------------------------------------------------------
    return (React__default.createElement(Grid, { container: true, direction: 'column', spacing: 1, className: classNames('SearchTable', className), style: style, sx: sx },
        React__default.createElement(Grid, { item: true, sx: { display: searchInfo.searchGroups ? undefined : 'none' } },
            React__default.createElement(Search, __assign$3({ color: color }, searchInfo.props, { ref: function (commands) {
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
                React__default.createElement(SearchGroup, { hidden: true },
                    React__default.createElement(FormHidden, { name: 'page', value: 1 })),
                searchInfo.searchGroups)),
        betweenSearchTableComponent && React__default.createElement(Grid, { item: true }, betweenSearchTableComponent),
        React__default.createElement(Grid, { item: true, style: tableContainerStyle },
            React__default.createElement(Table, __assign$3({}, tableInfo.props, { stickyHeader: stickyHeader || ((_b = tableInfo.props) === null || _b === void 0 ? void 0 : _b.stickyHeader), fullHeight: fullHeight || ((_c = tableInfo.props) === null || _c === void 0 ? void 0 : _c.fullHeight), ref: function (commands) {
                    if (tableInfo.ref) {
                        if (typeof tableInfo.ref === 'function') {
                            tableInfo.ref(commands);
                        }
                        else {
                            tableInfo.ref.current = commands;
                        }
                    }
                    tableRef.current = commands || undefined;
                }, items: tableData === null || tableData === void 0 ? void 0 : tableData.items, paging: tableData === null || tableData === void 0 ? void 0 : tableData.paging, onPageChange: handlePageChange })))));
});
SearchTable.displayName = 'SearchTable';
SearchTable.defaultProps = SearchTableDefaultProps;var TableButtonDefaultProps = {
    variant: 'outlined',
    color: 'primary',
};var TableIconDefaultProps = {};var TableIcon = React__default.forwardRef(function (_a, ref) {
    // Memo --------------------------------------------------------------------------------------------------------------
    var className = _a.className, initChildren = _a.children, props = __rest$2(_a, ["className", "children"]);
    var children = useMemo(function () { return initChildren.replace(/[A-Z]/g, function (letter, idx) { return "".concat(idx > 0 ? '_' : '').concat(letter.toLowerCase()); }); }, [initChildren]);
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(Icon, __assign$3({ ref: ref }, props, { className: classNames('TableIcon', className) }), children));
});
TableIcon.displayName = 'TableIcon';
TableIcon.defaultProps = TableIconDefaultProps;var TableButton = React__default.forwardRef(function (_a, ref) {
    var children = _a.children, className = _a.className, initSx = _a.sx, color = _a.color, icon = _a.icon, startIcon = _a.startIcon, endIcon = _a.endIcon, onClick = _a.onClick, props = __rest$2(_a, ["children", "className", "sx", "color", "icon", "startIcon", "endIcon", "onClick"]);
    var sx = useMemo(function () { return (__assign$3({ minWidth: 0, px: !startIcon && !endIcon ? 0.7 : 1.7 }, initSx)); }, [endIcon, initSx, startIcon]);
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(Button, __assign$3({ ref: ref, className: classNames(className, 'TableButton'), type: 'button', size: 'small', sx: sx, color: color, onClick: onClick, startIcon: startIcon ? (React__default.createElement(TableIcon, { fontSize: 'small', sx: { mr: -0.5 } }, startIcon)) : undefined, endIcon: endIcon ? (React__default.createElement(TableIcon, { fontSize: 'small', sx: { ml: -0.5 } }, endIcon)) : undefined }, props),
        icon && (React__default.createElement(TableIcon, { fontSize: 'small', color: color }, icon)),
        children));
});
TableButton.displayName = 'TableButton';
TableButton.defaultProps = TableButtonDefaultProps;var TableMenuButtonDefaultProps = {
    variant: 'outlined',
    color: 'primary',
    placement: 'bottom',
};var TableMenuButton = React__default.forwardRef(function (_a, ref) {
    // ID ----------------------------------------------------------------------------------------------------------------
    var children = _a.children, className = _a.className, initSx = _a.sx, color = _a.color, icon = _a.icon, startIcon = _a.startIcon, endIcon = _a.endIcon, placement = _a.placement, inModal = _a.inModal, zIndex = _a.zIndex, menuList = _a.menuList, props = __rest$2(_a, ["children", "className", "sx", "color", "icon", "startIcon", "endIcon", "placement", "inModal", "zIndex", "menuList"]);
    var buttonId = useId();
    var menuId = useId();
    // Use ---------------------------------------------------------------------------------------------------------------
    var _b = useTableState(), menuOpen = _b.menuOpen, openMenuId = _b.openMenuId, setMenuOpen = _b.setMenuOpen;
    // Ref ---------------------------------------------------------------------------------------------------------------
    var anchorRef = useRef();
    // State -------------------------------------------------------------------------------------------------------------
    var _c = useState(false), open = _c[0], setOpen = _c[1];
    // Effect ------------------------------------------------------------------------------------------------------------
    useEffect(function () {
        if (open && menuOpen && openMenuId !== menuId) {
            setOpen(false);
        }
    }, [menuId, menuOpen, open, openMenuId]);
    // Memo --------------------------------------------------------------------------------------------------------------
    var sx = useMemo(function () { return (__assign$3({ minWidth: 0, px: !startIcon && !endIcon ? 0.7 : 1.7 }, initSx)); }, [endIcon, initSx, startIcon]);
    // Event Handler -----------------------------------------------------------------------------------------------------
    var handleClick = useCallback(function () {
        setOpen(function (old) { return !old; });
        if (!open) {
            setMenuOpen(true, menuId);
        }
        else {
            setMenuOpen(false, menuId);
        }
    }, [menuId, open, setMenuOpen]);
    var handleClose = useCallback(function () {
        if (open) {
            setOpen(false);
            setMenuOpen(false, menuId);
        }
    }, [menuId, open, setMenuOpen]);
    var handleListKeyDown = useCallback(function (event) {
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
    // Memo --------------------------------------------------------------------------------------------------------------
    var finalMenuList = useMemo(function () {
        return React__default.cloneElement(menuList, {
            autoFocusItem: open,
            id: menuId,
            'aria-labelledby': buttonId,
            onKeyDown: handleListKeyDown,
            onClick: handleClose,
        });
    }, [buttonId, handleClose, handleListKeyDown, menuId, menuList, open]);
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement("span", null,
        React__default.createElement(Button, __assign$3({ ref: function (r) {
                if (ref) {
                    if (typeof ref === 'function') {
                        ref(r);
                    }
                    else {
                        ref.current = r;
                    }
                }
                anchorRef.current = r;
            }, id: buttonId, "aria-controls": open ? menuId : undefined, "aria-expanded": open ? 'true' : undefined, "aria-haspopup": 'true', className: classNames(className, 'TableMenuButton'), type: 'button', size: 'small', sx: sx, color: color, onClick: handleClick, startIcon: startIcon ? (React__default.createElement(TableIcon, { fontSize: 'small', sx: { mr: -0.5 } }, startIcon)) : undefined, endIcon: endIcon ? (React__default.createElement(TableIcon, { fontSize: 'small', sx: { ml: -0.5 } }, endIcon)) : undefined }, props),
            icon && (React__default.createElement(TableIcon, { fontSize: 'small', color: color }, icon)),
            children),
        React__default.createElement(Popper, { className: 'TableMenuButton-Popper', open: open, anchorEl: anchorRef.current, role: undefined, placement: placement, transition: true, style: { zIndex: inModal ? (zIndex === undefined ? 1301 : zIndex) : zIndex } }, function (_a) {
            var TransitionProps = _a.TransitionProps, placement = _a.placement;
            var placements = placement.split('-');
            var transformOrigin = '';
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
            return (React__default.createElement(Grow, __assign$3({}, TransitionProps, { style: {
                    transformOrigin: transformOrigin,
                } }),
                React__default.createElement(Paper, null,
                    React__default.createElement(ClickAwayListener, { onClickAway: handleClose }, finalMenuList))));
        })));
});
TableMenuButton.displayName = 'TableMenuButton';
TableMenuButton.defaultProps = TableMenuButtonDefaultProps;var InfoTableDefaultProps = {
    spacing: 2,
    rowSpacing: 3,
    labelColor: 'primary',
};var Label = styled(Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 12px;\n  font-weight: bold;\n"], ["\n  font-size: 12px;\n  font-weight: bold;\n"])));
var ValueWrap = styled(Box)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-top: 3px;\n  position: relative;\n  display: flex;\n  flex-direction: row;\n"], ["\n  margin-top: 3px;\n  position: relative;\n  display: flex;\n  flex-direction: row;\n"])));
var Value = styled('div')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  flex: 1;\n"], ["\n  flex: 1;\n"])));
var ValueEllipsis = styled('div')(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  flex: 1;\n  position: relative;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"], ["\n  flex: 1;\n  position: relative;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"])));
var ValueClipboard = styled('div')(templateObject_5 || (templateObject_5 = __makeTemplateObject([""], [""])));
var ClipboardIconButton = styled(IconButton)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  margin-top: -10px;\n  margin-bottom: -10px;\n"], ["\n  margin-top: -10px;\n  margin-bottom: -10px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;var Component = {};var toggleSelection = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};var deselectCurrent = toggleSelection;

var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
};

var defaultMessage = "Copy to clipboard: #{key}, Enter";

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug,
    message,
    reselectPrevious,
    range,
    selection,
    mark,
    success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement("span");
    mark.textContent = text;
    // avoid screen readers from reading out loud the text
    mark.ariaHidden = "true";
    // reset user styles for span element
    mark.style.all = "unset";
    // prevents scrolling to the end of the page
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = "pre";
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") { // IE 11
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"];
          window.clipboardData.setData(format, text);
        } else { // all other browsers
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
      }
    });

    document.body.appendChild(mark);

    range.selectNodeContents(mark);
    selection.addRange(range);

    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err) {
      debug && console.error("unable to copy using clipboardData: ", err);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

var copyToClipboard = copy;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(Component, "__esModule", {
  value: true
});
Component.CopyToClipboard = void 0;

var _react = _interopRequireDefault(React__default);

var _copyToClipboard = _interopRequireDefault(copyToClipboard);

var _excluded = ["text", "onCopy", "options", "children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CopyToClipboard$1 = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(CopyToClipboard, _React$PureComponent);

  var _super = _createSuper(CopyToClipboard);

  function CopyToClipboard() {
    var _this;

    _classCallCheck(this, CopyToClipboard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "onClick", function (event) {
      var _this$props = _this.props,
          text = _this$props.text,
          onCopy = _this$props.onCopy,
          children = _this$props.children,
          options = _this$props.options;

      var elem = _react["default"].Children.only(children);

      var result = (0, _copyToClipboard["default"])(text, options);

      if (onCopy) {
        onCopy(text, result);
      } // Bypass onClick if it was present


      if (elem && elem.props && typeof elem.props.onClick === 'function') {
        elem.props.onClick(event);
      }
    });

    return _this;
  }

  _createClass(CopyToClipboard, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props;
          _this$props2.text;
          _this$props2.onCopy;
          _this$props2.options;
          var children = _this$props2.children,
          props = _objectWithoutProperties(_this$props2, _excluded);

      var elem = _react["default"].Children.only(children);

      return /*#__PURE__*/_react["default"].cloneElement(elem, _objectSpread(_objectSpread({}, props), {}, {
        onClick: this.onClick
      }));
    }
  }]);

  return CopyToClipboard;
}(_react["default"].PureComponent);

Component.CopyToClipboard = CopyToClipboard$1;

_defineProperty(CopyToClipboard$1, "defaultProps", {
  onCopy: undefined,
  options: undefined
});var _require = Component,
    CopyToClipboard = _require.CopyToClipboard;

CopyToClipboard.CopyToClipboard = CopyToClipboard;
var lib = CopyToClipboard;var InfoTable = function (_a) {
    var cols = _a.cols, spacing = _a.spacing, columnSpacing = _a.columnSpacing, rowSpacing = _a.rowSpacing, className = _a.className, style = _a.style, sx = _a.sx, labelClassName = _a.labelClassName, labelColor = _a.labelColor, labelStyle = _a.labelStyle, labelSx = _a.labelSx, valueClassName = _a.valueClassName, valueStyle = _a.valueStyle, valueSx = _a.valueSx, ellipsis = _a.ellipsis, valueUnderline = _a.valueUnderline, info = _a.info, items = _a.items, onCopyToClipboard = _a.onCopyToClipboard;
    var sizeProps = useMemo(function () {
        var value = {};
        if (typeof cols === 'number') {
            value.xs = 12 / cols;
        }
        else {
            if (cols.xs)
                value.xs = 12 / cols.xs;
            if (cols.sm)
                value.sm = 12 / cols.sm;
            if (cols.md)
                value.md = 12 / cols.md;
            if (cols.lg)
                value.lg = 12 / cols.lg;
            if (cols.xl)
                value.xl = 12 / cols.xl;
        }
        return value;
    }, [cols]);
    return (React__default.createElement(Grid, { container: true, spacing: spacing, columnSpacing: columnSpacing, rowSpacing: rowSpacing, className: classNames('InfoTable', className), style: style, sx: sx }, items.map(function (item, idx) {
        if (item) {
            var finalLabelColor = typographyColorToSxColor(item.labelColor || labelColor);
            var finalLabelSx = combineSx(labelSx, item.labelSx, !!finalLabelColor && { color: finalLabelColor });
            var finalValueSx = combineSx(valueSx, item.valueSx);
            var valueUnderlineStyle = valueUnderline
                ? { borderBottom: '1px solid #efefef', paddingBottom: 5 }
                : undefined;
            var finalSizeProps = __assign$3({}, sizeProps);
            if (item.xs)
                finalSizeProps.xs = item.xs;
            if (item.sm)
                finalSizeProps.sm = item.sm;
            if (item.md)
                finalSizeProps.md = item.md;
            if (item.lg)
                finalSizeProps.lg = item.lg;
            if (item.xl)
                finalSizeProps.xl = item.xl;
            var data = item.name !== undefined ? info[item.name] : undefined;
            if (item.onRender)
                data = item.onRender(info);
            if (empty(data))
                data = item.onRenderEmpty ? item.onRenderEmpty(info) : React__default.createElement(React__default.Fragment, null, "\u00A0");
            var copyToClipboardText_1 = item.clipboardText || (typeof data === 'string' ? data : typeof data === 'number' ? data.toString() : '');
            return (React__default.createElement(Grid, __assign$3({ key: idx, item: true }, finalSizeProps, { className: item.className, style: item.style, sx: item.sx }),
                React__default.createElement(Label, { className: classNames(labelClassName, item.labelClassName), style: __assign$3(__assign$3({}, item.labelStyle), labelStyle), sx: finalLabelSx }, item.label),
                React__default.createElement(ValueWrap, { className: classNames(valueClassName, item.valueClassName), style: __assign$3(__assign$3(__assign$3({}, valueStyle), item.valueStyle), valueUnderlineStyle), sx: finalValueSx },
                    item.ellipsis || ellipsis ? React__default.createElement(ValueEllipsis, null, data) : React__default.createElement(Value, null, data),
                    item.clipboard && notEmpty(copyToClipboardText_1) && (React__default.createElement(ValueClipboard, null,
                        React__default.createElement(lib.CopyToClipboard, { text: copyToClipboardText_1, onCopy: onCopyToClipboard ? function () { return onCopyToClipboard(item, copyToClipboardText_1); } : undefined },
                            React__default.createElement(ClipboardIconButton, __assign$3({ size: 'small', color: 'primary' }, item.clipboardProps),
                                React__default.createElement(TableIcon, null, item.clipboardIcon || 'ContentPaste'))))))));
        }
    })));
};
InfoTable.displayName = 'InfoTable';
InfoTable.defaultProps = InfoTableDefaultProps;export{InfoTable,InfoTableDefaultProps,SearchTable,SearchTableDefaultProps,Table,TableButton,TableButtonDefaultProps,TableDefaultProps,TableIcon,TableIconDefaultProps,TableMenuButton,TableMenuButtonDefaultProps};//# sourceMappingURL=index.esm.js.map
