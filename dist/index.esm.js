import*as React from'react';import React__default,{forwardRef,useContext,isValidElement,cloneElement,Children,useRef,useState,useCallback,useEffect,createContext,useMemo,useLayoutEffect,useId as useId$1}from'react';import {jsx as jsx$1,jsxs}from'react/jsx-runtime';import {useSensors,useSensor,MouseSensor,TouchSensor,KeyboardSensor,DndContext,closestCenter}from'@dnd-kit/core';import {useSortable,SortableContext,verticalListSortingStrategy,sortableKeyboardCoordinates,arrayMove}from'@dnd-kit/sortable';import*as ReactDOM from'react-dom';import ReactDOM__default from'react-dom';import {useInView}from'react-intersection-observer';import {Search,SearchGroup,FormHidden}from'@pdg/react-form';function insertStyle(css) {
    if (typeof window === 'undefined')
        return;
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}insertStyle(".simplebar-track.simplebar-vertical{width:8px !important}.simplebar-track.simplebar-vertical .simplebar-scrollbar.simplebar-visible:before{opacity:.3 !important}.Table .TableHead .TableHeadRow th{position:relative;transform:translateY(-100%)}.Table.sticky-header .TableHead .TableHeadRow th{position:sticky;transform:none}");/******************************************************************************
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

function __makeTemplateObject$1(cooked, raw) {
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
var classNames = /*@__PURE__*/getDefaultExportFromCjs(classnamesExports);const common = {
  black: '#000',
  white: '#fff'
};const red = {
  300: '#e57373',
  400: '#ef5350',
  500: '#f44336',
  700: '#d32f2f',
  800: '#c62828'};const purple = {
  50: '#f3e5f5',
  200: '#ce93d8',
  300: '#ba68c8',
  400: '#ab47bc',
  500: '#9c27b0',
  700: '#7b1fa2'};const blue = {
  50: '#e3f2fd',
  200: '#90caf9',
  400: '#42a5f5',
  700: '#1976d2',
  800: '#1565c0'};const lightBlue = {
  300: '#4fc3f7',
  400: '#29b6f6',
  500: '#03a9f4',
  700: '#0288d1',
  900: '#01579b'};const green = {
  300: '#81c784',
  400: '#66bb6a',
  500: '#4caf50',
  700: '#388e3c',
  800: '#2e7d32',
  900: '#1b5e20'};const orange = {
  300: '#ffb74d',
  400: '#ffa726',
  500: '#ff9800',
  700: '#f57c00',
  900: '#e65100'};const grey = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  A100: '#f5f5f5',
  A200: '#eeeeee',
  A400: '#bdbdbd',
  A700: '#616161'
};/**
 * WARNING: Don't import this directly. It's imported by the code generated by
 * `@mui/interal-babel-plugin-minify-errors`. Make sure to always use string literals in `Error`
 * constructors to ensure the plugin works as expected. Supported patterns include:
 *   throw new Error('My message');
 *   throw new Error(`My message: ${foo}`);
 *   throw new Error(`My message: ${foo}` + 'another string');
 *   ...
 * @param {number} code
 */
function formatMuiErrorMessage(code, ...args) {
  const url = new URL(`https://mui.com/production-error/?code=${code}`);
  args.forEach(arg => url.searchParams.append('args[]', arg));
  return `Minified MUI error #${code}; visit ${url} for the full message.`;
}var THEME_ID = '$$material';function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/

function sheetForTag(tag) {
  if (tag.sheet) {
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      return document.styleSheets[i];
    }
  } // this function should always return with a value
  // TS can't understand it though so we make it stop complaining here


  return undefined;
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  tag.setAttribute('data-s', '');
  return tag;
}

var StyleSheet = /*#__PURE__*/function () {
  // Using Node instead of HTMLElement since container may be a ShadowRoot
  function StyleSheet(options) {
    var _this = this;

    this._insertTag = function (tag) {
      var before;

      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }

      _this.container.insertBefore(tag, before);

      _this.tags.push(tag);
    };

    this.isSpeedy = options.speedy === undefined ? true : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.insertionPoint = options.insertionPoint;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }

    var tag = this.tags[this.tags.length - 1];

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    this.tags.forEach(function (tag) {
      var _tag$parentNode;

      return (_tag$parentNode = tag.parentNode) == null ? void 0 : _tag$parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };

  return StyleSheet;
}();var MS = '-ms-';
var MOZ = '-moz-';
var WEBKIT = '-webkit-';

var COMMENT = 'comm';
var RULESET = 'rule';
var DECLARATION = 'decl';
var IMPORT = '@import';
var KEYFRAMES = '@keyframes';
var LAYER = '@layer';/**
 * @param {number}
 * @return {number}
 */
var abs = Math.abs;

/**
 * @param {number}
 * @return {string}
 */
var from = String.fromCharCode;

/**
 * @param {object}
 * @return {object}
 */
var assign = Object.assign;

/**
 * @param {string} value
 * @param {number} length
 * @return {number}
 */
function hash$2 (value, length) {
	return charat(value, 0) ^ 45 ? (((((((length << 2) ^ charat(value, 0)) << 2) ^ charat(value, 1)) << 2) ^ charat(value, 2)) << 2) ^ charat(value, 3) : 0
}

/**
 * @param {string} value
 * @return {string}
 */
function trim (value) {
	return value.trim()
}

/**
 * @param {string} value
 * @param {RegExp} pattern
 * @return {string?}
 */
function match (value, pattern) {
	return (value = pattern.exec(value)) ? value[0] : value
}

/**
 * @param {string} value
 * @param {(string|RegExp)} pattern
 * @param {string} replacement
 * @return {string}
 */
function replace (value, pattern, replacement) {
	return value.replace(pattern, replacement)
}

/**
 * @param {string} value
 * @param {string} search
 * @return {number}
 */
function indexof (value, search) {
	return value.indexOf(search)
}

/**
 * @param {string} value
 * @param {number} index
 * @return {number}
 */
function charat (value, index) {
	return value.charCodeAt(index) | 0
}

/**
 * @param {string} value
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function substr (value, begin, end) {
	return value.slice(begin, end)
}

/**
 * @param {string} value
 * @return {number}
 */
function strlen (value) {
	return value.length
}

/**
 * @param {any[]} value
 * @return {number}
 */
function sizeof (value) {
	return value.length
}

/**
 * @param {any} value
 * @param {any[]} array
 * @return {any}
 */
function append (value, array) {
	return array.push(value), value
}

/**
 * @param {string[]} array
 * @param {function} callback
 * @return {string}
 */
function combine (array, callback) {
	return array.map(callback).join('')
}var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = '';

/**
 * @param {string} value
 * @param {object | null} root
 * @param {object | null} parent
 * @param {string} type
 * @param {string[] | string} props
 * @param {object[] | string} children
 * @param {number} length
 */
function node (value, root, parent, type, props, children, length) {
	return {value: value, root: root, parent: parent, type: type, props: props, children: children, line: line, column: column, length: length, return: ''}
}

/**
 * @param {object} root
 * @param {object} props
 * @return {object}
 */
function copy$1 (root, props) {
	return assign(node('', null, null, '', null, null, 0), root, {length: -root.length}, props)
}

/**
 * @return {number}
 */
function char () {
	return character
}

/**
 * @return {number}
 */
function prev () {
	character = position > 0 ? charat(characters, --position) : 0;

	if (column--, character === 10)
		column = 1, line--;

	return character
}

/**
 * @return {number}
 */
function next () {
	character = position < length ? charat(characters, position++) : 0;

	if (column++, character === 10)
		column = 1, line++;

	return character
}

/**
 * @return {number}
 */
function peek () {
	return charat(characters, position)
}

/**
 * @return {number}
 */
function caret () {
	return position
}

/**
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function slice (begin, end) {
	return substr(characters, begin, end)
}

/**
 * @param {number} type
 * @return {number}
 */
function token (type) {
	switch (type) {
		// \0 \t \n \r \s whitespace token
		case 0: case 9: case 10: case 13: case 32:
			return 5
		// ! + , / > @ ~ isolate token
		case 33: case 43: case 44: case 47: case 62: case 64: case 126:
		// ; { } breakpoint token
		case 59: case 123: case 125:
			return 4
		// : accompanied token
		case 58:
			return 3
		// " ' ( [ opening delimit token
		case 34: case 39: case 40: case 91:
			return 2
		// ) ] closing delimit token
		case 41: case 93:
			return 1
	}

	return 0
}

/**
 * @param {string} value
 * @return {any[]}
 */
function alloc (value) {
	return line = column = 1, length = strlen(characters = value), position = 0, []
}

/**
 * @param {any} value
 * @return {any}
 */
function dealloc (value) {
	return characters = '', value
}

/**
 * @param {number} type
 * @return {string}
 */
function delimit (type) {
	return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)))
}

/**
 * @param {number} type
 * @return {string}
 */
function whitespace (type) {
	while (character = peek())
		if (character < 33)
			next();
		else
			break

	return token(type) > 2 || token(character) > 3 ? '' : ' '
}

/**
 * @param {number} index
 * @param {number} count
 * @return {string}
 */
function escaping (index, count) {
	while (--count && next())
		// not 0-9 A-F a-f
		if (character < 48 || character > 102 || (character > 57 && character < 65) || (character > 70 && character < 97))
			break

	return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32))
}

/**
 * @param {number} type
 * @return {number}
 */
function delimiter (type) {
	while (next())
		switch (character) {
			// ] ) " '
			case type:
				return position
			// " '
			case 34: case 39:
				if (type !== 34 && type !== 39)
					delimiter(character);
				break
			// (
			case 40:
				if (type === 41)
					delimiter(type);
				break
			// \
			case 92:
				next();
				break
		}

	return position
}

/**
 * @param {number} type
 * @param {number} index
 * @return {number}
 */
function commenter (type, index) {
	while (next())
		// //
		if (type + character === 47 + 10)
			break
		// /*
		else if (type + character === 42 + 42 && peek() === 47)
			break

	return '/*' + slice(index, position - 1) + '*' + from(type === 47 ? type : next())
}

/**
 * @param {number} index
 * @return {string}
 */
function identifier (index) {
	while (!token(peek()))
		next();

	return slice(index, position)
}/**
 * @param {string} value
 * @return {object[]}
 */
function compile (value) {
	return dealloc(parse('', null, null, null, [''], value = alloc(value), 0, [0], value))
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {string[]} rule
 * @param {string[]} rules
 * @param {string[]} rulesets
 * @param {number[]} pseudo
 * @param {number[]} points
 * @param {string[]} declarations
 * @return {object}
 */
function parse (value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
	var index = 0;
	var offset = 0;
	var length = pseudo;
	var atrule = 0;
	var property = 0;
	var previous = 0;
	var variable = 1;
	var scanning = 1;
	var ampersand = 1;
	var character = 0;
	var type = '';
	var props = rules;
	var children = rulesets;
	var reference = rule;
	var characters = type;

	while (scanning)
		switch (previous = character, character = next()) {
			// (
			case 40:
				if (previous != 108 && charat(characters, length - 1) == 58) {
					if (indexof(characters += replace(delimit(character), '&', '&\f'), '&\f') != -1)
						ampersand = -1;
					break
				}
			// " ' [
			case 34: case 39: case 91:
				characters += delimit(character);
				break
			// \t \n \r \s
			case 9: case 10: case 13: case 32:
				characters += whitespace(previous);
				break
			// \
			case 92:
				characters += escaping(caret() - 1, 7);
				continue
			// /
			case 47:
				switch (peek()) {
					case 42: case 47:
						append(comment(commenter(next(), caret()), root, parent), declarations);
						break
					default:
						characters += '/';
				}
				break
			// {
			case 123 * variable:
				points[index++] = strlen(characters) * ampersand;
			// } ; \0
			case 125 * variable: case 59: case 0:
				switch (character) {
					// \0 }
					case 0: case 125: scanning = 0;
					// ;
					case 59 + offset: if (ampersand == -1) characters = replace(characters, /\f/g, '');
						if (property > 0 && (strlen(characters) - length))
							append(property > 32 ? declaration(characters + ';', rule, parent, length - 1) : declaration(replace(characters, ' ', '') + ';', rule, parent, length - 2), declarations);
						break
					// @ ;
					case 59: characters += ';';
					// { rule/at-rule
					default:
						append(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length), rulesets);

						if (character === 123)
							if (offset === 0)
								parse(characters, root, reference, reference, props, rulesets, length, points, children);
							else
								switch (atrule === 99 && charat(characters, 3) === 110 ? 100 : atrule) {
									// d l m s
									case 100: case 108: case 109: case 115:
										parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length), children), rules, children, length, points, rule ? props : children);
										break
									default:
										parse(characters, reference, reference, reference, [''], children, 0, points, children);
								}
				}

				index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo;
				break
			// :
			case 58:
				length = 1 + strlen(characters), property = previous;
			default:
				if (variable < 1)
					if (character == 123)
						--variable;
					else if (character == 125 && variable++ == 0 && prev() == 125)
						continue

				switch (characters += from(character), character * variable) {
					// &
					case 38:
						ampersand = offset > 0 ? 1 : (characters += '\f', -1);
						break
					// ,
					case 44:
						points[index++] = (strlen(characters) - 1) * ampersand, ampersand = 1;
						break
					// @
					case 64:
						// -
						if (peek() === 45)
							characters += delimit(next());

						atrule = peek(), offset = length = strlen(type = characters += identifier(caret())), character++;
						break
					// -
					case 45:
						if (previous === 45 && strlen(characters) == 2)
							variable = 0;
				}
		}

	return rulesets
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} index
 * @param {number} offset
 * @param {string[]} rules
 * @param {number[]} points
 * @param {string} type
 * @param {string[]} props
 * @param {string[]} children
 * @param {number} length
 * @return {object}
 */
function ruleset (value, root, parent, index, offset, rules, points, type, props, children, length) {
	var post = offset - 1;
	var rule = offset === 0 ? rules : [''];
	var size = sizeof(rule);

	for (var i = 0, j = 0, k = 0; i < index; ++i)
		for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x)
			if (z = trim(j > 0 ? rule[x] + ' ' + y : replace(y, /&\f/g, rule[x])))
				props[k++] = z;

	return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length)
}

/**
 * @param {number} value
 * @param {object} root
 * @param {object?} parent
 * @return {object}
 */
function comment (value, root, parent) {
	return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0)
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} length
 * @return {object}
 */
function declaration (value, root, parent, length) {
	return node(value, root, parent, DECLARATION, substr(value, 0, length), substr(value, length + 1, -1), length)
}/**
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function serialize (children, callback) {
	var output = '';
	var length = sizeof(children);

	for (var i = 0; i < length; i++)
		output += callback(children[i], i, children, callback) || '';

	return output
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function stringify (element, index, children, callback) {
	switch (element.type) {
		case LAYER: if (element.children.length) break
		case IMPORT: case DECLARATION: return element.return = element.return || element.value
		case COMMENT: return ''
		case KEYFRAMES: return element.return = element.value + '{' + serialize(element.children, callback) + '}'
		case RULESET: element.value = element.props.join(',');
	}

	return strlen(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : ''
}/**
 * @param {function[]} collection
 * @return {function}
 */
function middleware (collection) {
	var length = sizeof(collection);

	return function (element, index, children, callback) {
		var output = '';

		for (var i = 0; i < length; i++)
			output += collection[i](element, index, children, callback) || '';

		return output
	}
}

/**
 * @param {function} callback
 * @return {function}
 */
function rulesheet (callback) {
	return function (element) {
		if (!element.root)
			if (element = element.return)
				callback(element);
	}
}var weakMemoize = function weakMemoize(func) {
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // Use non-null assertion because we just checked that the cache `has` it
      // This allows us to remove `undefined` from the return value
      return cache.get(arg);
    }

    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};function memoize$1(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}var isBrowser$4 = typeof document !== 'undefined';

var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
  var previous = 0;
  var character = 0;

  while (true) {
    previous = character;
    character = peek(); // &\f

    if (previous === 38 && character === 12) {
      points[index] = 1;
    }

    if (token(character)) {
      break;
    }

    next();
  }

  return slice(begin, position);
};

var toRules = function toRules(parsed, points) {
  // pretend we've started with a comma
  var index = -1;
  var character = 44;

  do {
    switch (token(character)) {
      case 0:
        // &\f
        if (character === 38 && peek() === 12) {
          // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
          // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
          // and when it should just concatenate the outer and inner selectors
          // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
          points[index] = 1;
        }

        parsed[index] += identifierWithPointTracking(position - 1, points, index);
        break;

      case 2:
        parsed[index] += delimit(character);
        break;

      case 4:
        // comma
        if (character === 44) {
          // colon
          parsed[++index] = peek() === 58 ? '&\f' : '';
          points[index] = parsed[index].length;
          break;
        }

      // fallthrough

      default:
        parsed[index] += from(character);
    }
  } while (character = next());

  return parsed;
};

var getRules = function getRules(value, points) {
  return dealloc(toRules(alloc(value), points));
}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11


var fixedElements = /* #__PURE__ */new WeakMap();
var compat = function compat(element) {
  if (element.type !== 'rule' || !element.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  element.length < 1) {
    return;
  }

  var value = element.value;
  var parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;

  while (parent.type !== 'rule') {
    parent = parent.parent;
    if (!parent) return;
  } // short-circuit for the simplest case


  if (element.props.length === 1 && value.charCodeAt(0) !== 58
  /* colon */
  && !fixedElements.get(parent)) {
    return;
  } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
  // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"


  if (isImplicitRule) {
    return;
  }

  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;

  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel(element) {
  if (element.type === 'decl') {
    var value = element.value;

    if ( // charcode for l
    value.charCodeAt(0) === 108 && // charcode for b
    value.charCodeAt(2) === 98) {
      // this ignores label
      element["return"] = '';
      element.value = '';
    }
  }
};

/* eslint-disable no-fallthrough */

function prefix(value, length) {
  switch (hash$2(value, length)) {
    // color-adjust
    case 5103:
      return WEBKIT + 'print-' + value + value;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)

    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921: // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break

    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005: // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,

    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855: // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)

    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return WEBKIT + value + value;
    // appearance, user-select, transform, hyphens, text-size-adjust

    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT + value + MOZ + value + MS + value + value;
    // flex, flex-direction

    case 6828:
    case 4268:
      return WEBKIT + value + MS + value + value;
    // order

    case 6165:
      return WEBKIT + value + MS + 'flex-' + value + value;
    // align-items

    case 5187:
      return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + 'box-$1$2' + MS + 'flex-$1$2') + value;
    // align-self

    case 5443:
      return WEBKIT + value + MS + 'flex-item-' + replace(value, /flex-|-self/, '') + value;
    // align-content

    case 4675:
      return WEBKIT + value + MS + 'flex-line-pack' + replace(value, /align-content|flex-|-self/, '') + value;
    // flex-shrink

    case 5548:
      return WEBKIT + value + MS + replace(value, 'shrink', 'negative') + value;
    // flex-basis

    case 5292:
      return WEBKIT + value + MS + replace(value, 'basis', 'preferred-size') + value;
    // flex-grow

    case 6060:
      return WEBKIT + 'box-' + replace(value, '-grow', '') + WEBKIT + value + MS + replace(value, 'grow', 'positive') + value;
    // transition

    case 4554:
      return WEBKIT + replace(value, /([^-])(transform)/g, '$1' + WEBKIT + '$2') + value;
    // cursor

    case 6187:
      return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + '$1'), /(image-set)/, WEBKIT + '$1'), value, '') + value;
    // background, background-image

    case 5495:
    case 3959:
      return replace(value, /(image-set\([^]*)/, WEBKIT + '$1' + '$`$1');
    // justify-content

    case 4968:
      return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + 'box-pack:$3' + MS + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + WEBKIT + value + value;
    // (margin|padding)-inline-(start|end)

    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace(value, /(.+)-inline(.+)/, WEBKIT + '$1$2') + value;
    // (min|max)?(width|height|inline-size|block-size)

    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      // stretch, max-content, min-content, fill-available
      if (strlen(value) - 1 - length > 6) switch (charat(value, length + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          // -
          if (charat(value, length + 4) !== 45) break;
        // (f)ill-available, (f)it-content

        case 102:
          return replace(value, /(.+:)(.+)-([^]+)/, '$1' + WEBKIT + '$2-$3' + '$1' + MOZ + (charat(value, length + 3) == 108 ? '$3' : '$2-$3')) + value;
        // (s)tretch

        case 115:
          return ~indexof(value, 'stretch') ? prefix(replace(value, 'stretch', 'fill-available'), length) + value : value;
      }
      break;
    // position: sticky

    case 4949:
      // (s)ticky?
      if (charat(value, length + 1) !== 115) break;
    // display: (flex|inline-flex)

    case 6444:
      switch (charat(value, strlen(value) - 3 - (~indexof(value, '!important') && 10))) {
        // stic(k)y
        case 107:
          return replace(value, ':', ':' + WEBKIT) + value;
        // (inline-)?fl(e)x

        case 101:
          return replace(value, /(.+:)([^;!]+)(;|!.+)?/, '$1' + WEBKIT + (charat(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + WEBKIT + '$2$3' + '$1' + MS + '$2box$3') + value;
      }

      break;
    // writing-mode

    case 5936:
      switch (charat(value, length + 11)) {
        // vertical-l(r)
        case 114:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb') + value;
        // vertical-r(l)

        case 108:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value;
        // horizontal(-)tb

        case 45:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'lr') + value;
      }

      return WEBKIT + value + MS + value + value;
  }

  return value;
}

var prefixer = function prefixer(element, index, children, callback) {
  if (element.length > -1) if (!element["return"]) switch (element.type) {
    case DECLARATION:
      element["return"] = prefix(element.value, element.length);
      break;

    case KEYFRAMES:
      return serialize([copy$1(element, {
        value: replace(element.value, '@', '@' + WEBKIT)
      })], callback);

    case RULESET:
      if (element.length) return combine(element.props, function (value) {
        switch (match(value, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ':read-only':
          case ':read-write':
            return serialize([copy$1(element, {
              props: [replace(value, /:(read-\w+)/, ':' + MOZ + '$1')]
            })], callback);
          // :placeholder

          case '::placeholder':
            return serialize([copy$1(element, {
              props: [replace(value, /:(plac\w+)/, ':' + WEBKIT + 'input-$1')]
            }), copy$1(element, {
              props: [replace(value, /:(plac\w+)/, ':' + MOZ + '$1')]
            }), copy$1(element, {
              props: [replace(value, /:(plac\w+)/, MS + 'input-$1')]
            })], callback);
        }

        return '';
      });
  }
};

var getServerStylisCache = isBrowser$4 ? undefined : weakMemoize(function () {
  return memoize$1(function () {
    return {};
  });
});
var defaultStylisPlugins = [prefixer];

var createCache = function createCache(options) {
  var key = options.key;

  if (isBrowser$4 && key === 'css') {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
    // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
    // note this very very intentionally targets all style elements regardless of the key to ensure
    // that creating a cache works inside of render of a React component

    Array.prototype.forEach.call(ssrStyles, function (node) {
      // we want to only move elements which have a space in the data-emotion attribute value
      // because that indicates that it is an Emotion 11 server-side rendered style elements
      // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
      // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
      // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
      // will not result in the Emotion 10 styles being destroyed
      var dataEmotionAttribute = node.getAttribute('data-emotion');

      if (dataEmotionAttribute.indexOf(' ') === -1) {
        return;
      }

      document.head.appendChild(node);
      node.setAttribute('data-s', '');
    });
  }

  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;

  var inserted = {};
  var container;
  var nodesToHydrate = [];

  if (isBrowser$4) {
    container = options.container || document.head;
    Array.prototype.forEach.call( // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node) {
      var attrib = node.getAttribute("data-emotion").split(' ');

      for (var i = 1; i < attrib.length; i++) {
        inserted[attrib[i]] = true;
      }

      nodesToHydrate.push(node);
    });
  }

  var _insert;

  var omnipresentPlugins = [compat, removeLabel];

  if (!getServerStylisCache) {
    var currentSheet;
    var finalizingPlugins = [stringify, rulesheet(function (rule) {
      currentSheet.insert(rule);
    })];
    var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));

    var stylis = function stylis(styles) {
      return serialize(compile(styles), serializer);
    };

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;

      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);

      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  } else {
    var _finalizingPlugins = [stringify];

    var _serializer = middleware(omnipresentPlugins.concat(stylisPlugins, _finalizingPlugins));

    var _stylis = function _stylis(styles) {
      return serialize(compile(styles), _serializer);
    };

    var serverStylisCache = getServerStylisCache(stylisPlugins)(key);

    var getRules = function getRules(selector, serialized) {
      var name = serialized.name;

      if (serverStylisCache[name] === undefined) {
        serverStylisCache[name] = _stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      }

      return serverStylisCache[name];
    };

    _insert = function _insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      var rules = getRules(selector, serialized);

      if (cache.compat === undefined) {
        // in regular mode, we don't set the styles on the inserted cache
        // since we don't need to and that would be wasting memory
        // we return them so that they are rendered in a style tag
        if (shouldCache) {
          cache.inserted[name] = true;
        }

        return rules;
      } else {
        // in compat mode, we put the styles on the inserted cache so
        // that emotion-server can pull out the styles
        // except when we don't want to cache it which was in Global but now
        // is nowhere but we don't want to do a major right now
        // and just in case we're going to leave the case here
        // it's also not affecting client side bundle size
        // so it's really not a big deal
        if (shouldCache) {
          cache.inserted[name] = rules;
        } else {
          return rules;
        }
      }
    };
  }

  var cache = {
    key: key,
    sheet: new StyleSheet({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend,
      insertionPoint: options.insertionPoint
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};var reactIs$2 = {exports: {}};var reactIs_production_min$1 = {};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_production_min$1;

function requireReactIs_production_min$1 () {
	if (hasRequiredReactIs_production_min$1) return reactIs_production_min$1;
	hasRequiredReactIs_production_min$1 = 1;
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
	Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
	function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min$1.AsyncMode=l;reactIs_production_min$1.ConcurrentMode=m;reactIs_production_min$1.ContextConsumer=k;reactIs_production_min$1.ContextProvider=h;reactIs_production_min$1.Element=c;reactIs_production_min$1.ForwardRef=n;reactIs_production_min$1.Fragment=e;reactIs_production_min$1.Lazy=t;reactIs_production_min$1.Memo=r;reactIs_production_min$1.Portal=d;
	reactIs_production_min$1.Profiler=g;reactIs_production_min$1.StrictMode=f;reactIs_production_min$1.Suspense=p;reactIs_production_min$1.isAsyncMode=function(a){return A(a)||z(a)===l};reactIs_production_min$1.isConcurrentMode=A;reactIs_production_min$1.isContextConsumer=function(a){return z(a)===k};reactIs_production_min$1.isContextProvider=function(a){return z(a)===h};reactIs_production_min$1.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min$1.isForwardRef=function(a){return z(a)===n};reactIs_production_min$1.isFragment=function(a){return z(a)===e};reactIs_production_min$1.isLazy=function(a){return z(a)===t};
	reactIs_production_min$1.isMemo=function(a){return z(a)===r};reactIs_production_min$1.isPortal=function(a){return z(a)===d};reactIs_production_min$1.isProfiler=function(a){return z(a)===g};reactIs_production_min$1.isStrictMode=function(a){return z(a)===f};reactIs_production_min$1.isSuspense=function(a){return z(a)===p};
	reactIs_production_min$1.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min$1.typeOf=z;
	return reactIs_production_min$1;
}var reactIs_development$2 = {};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_development$2;

function requireReactIs_development$2 () {
	if (hasRequiredReactIs_development$2) return reactIs_development$2;
	hasRequiredReactIs_development$2 = 1;



	if (process.env.NODE_ENV !== "production") {
	  (function() {

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	// (unstable) APIs that have been removed. Can we remove the symbols?

	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
	var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
	var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
	var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
	}

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;

	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_ASYNC_MODE_TYPE:
	          case REACT_CONCURRENT_MODE_TYPE:
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	            return type;

	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_LAZY_TYPE:
	              case REACT_MEMO_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;

	              default:
	                return $$typeof;
	            }

	        }

	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	} // AsyncMode is deprecated along with isAsyncMode

	var AsyncMode = REACT_ASYNC_MODE_TYPE;
	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;
	var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	    }
	  }

	  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	}
	function isConcurrentMode(object) {
	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}

	reactIs_development$2.AsyncMode = AsyncMode;
	reactIs_development$2.ConcurrentMode = ConcurrentMode;
	reactIs_development$2.ContextConsumer = ContextConsumer;
	reactIs_development$2.ContextProvider = ContextProvider;
	reactIs_development$2.Element = Element;
	reactIs_development$2.ForwardRef = ForwardRef;
	reactIs_development$2.Fragment = Fragment;
	reactIs_development$2.Lazy = Lazy;
	reactIs_development$2.Memo = Memo;
	reactIs_development$2.Portal = Portal;
	reactIs_development$2.Profiler = Profiler;
	reactIs_development$2.StrictMode = StrictMode;
	reactIs_development$2.Suspense = Suspense;
	reactIs_development$2.isAsyncMode = isAsyncMode;
	reactIs_development$2.isConcurrentMode = isConcurrentMode;
	reactIs_development$2.isContextConsumer = isContextConsumer;
	reactIs_development$2.isContextProvider = isContextProvider;
	reactIs_development$2.isElement = isElement;
	reactIs_development$2.isForwardRef = isForwardRef;
	reactIs_development$2.isFragment = isFragment;
	reactIs_development$2.isLazy = isLazy;
	reactIs_development$2.isMemo = isMemo;
	reactIs_development$2.isPortal = isPortal;
	reactIs_development$2.isProfiler = isProfiler;
	reactIs_development$2.isStrictMode = isStrictMode;
	reactIs_development$2.isSuspense = isSuspense;
	reactIs_development$2.isValidElementType = isValidElementType;
	reactIs_development$2.typeOf = typeOf;
	  })();
	}
	return reactIs_development$2;
}var hasRequiredReactIs$2;

function requireReactIs$2 () {
	if (hasRequiredReactIs$2) return reactIs$2.exports;
	hasRequiredReactIs$2 = 1;

	if (process.env.NODE_ENV === 'production') {
	  reactIs$2.exports = requireReactIs_production_min$1();
	} else {
	  reactIs$2.exports = requireReactIs_development$2();
	}
	return reactIs$2.exports;
}var hoistNonReactStatics_cjs;
var hasRequiredHoistNonReactStatics_cjs;

function requireHoistNonReactStatics_cjs () {
	if (hasRequiredHoistNonReactStatics_cjs) return hoistNonReactStatics_cjs;
	hasRequiredHoistNonReactStatics_cjs = 1;

	var reactIs = requireReactIs$2();

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	var REACT_STATICS = {
	  childContextTypes: true,
	  contextType: true,
	  contextTypes: true,
	  defaultProps: true,
	  displayName: true,
	  getDefaultProps: true,
	  getDerivedStateFromError: true,
	  getDerivedStateFromProps: true,
	  mixins: true,
	  propTypes: true,
	  type: true
	};
	var KNOWN_STATICS = {
	  name: true,
	  length: true,
	  prototype: true,
	  caller: true,
	  callee: true,
	  arguments: true,
	  arity: true
	};
	var FORWARD_REF_STATICS = {
	  '$$typeof': true,
	  render: true,
	  defaultProps: true,
	  displayName: true,
	  propTypes: true
	};
	var MEMO_STATICS = {
	  '$$typeof': true,
	  compare: true,
	  defaultProps: true,
	  displayName: true,
	  propTypes: true,
	  type: true
	};
	var TYPE_STATICS = {};
	TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
	TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

	function getStatics(component) {
	  // React v16.11 and below
	  if (reactIs.isMemo(component)) {
	    return MEMO_STATICS;
	  } // React v16.12 and above


	  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
	}

	var defineProperty = Object.defineProperty;
	var getOwnPropertyNames = Object.getOwnPropertyNames;
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var getPrototypeOf = Object.getPrototypeOf;
	var objectPrototype = Object.prototype;
	function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
	  if (typeof sourceComponent !== 'string') {
	    // don't hoist over string (html) components
	    if (objectPrototype) {
	      var inheritedComponent = getPrototypeOf(sourceComponent);

	      if (inheritedComponent && inheritedComponent !== objectPrototype) {
	        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
	      }
	    }

	    var keys = getOwnPropertyNames(sourceComponent);

	    if (getOwnPropertySymbols) {
	      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
	    }

	    var targetStatics = getStatics(targetComponent);
	    var sourceStatics = getStatics(sourceComponent);

	    for (var i = 0; i < keys.length; ++i) {
	      var key = keys[i];

	      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
	        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

	        try {
	          // Avoid failures from read-only properties
	          defineProperty(targetComponent, key, descriptor);
	        } catch (e) {}
	      }
	    }
	  }

	  return targetComponent;
	}

	hoistNonReactStatics_cjs = hoistNonReactStatics;
	return hoistNonReactStatics_cjs;
}requireHoistNonReactStatics_cjs();var isBrowser$3 = typeof document !== 'undefined';

function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className] + ";");
    } else if (className) {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var registerStyles = function registerStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser$3 === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }
};
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  registerStyles(cache, serialized, isStringTag);
  var className = cache.key + "-" + serialized.name;

  if (cache.inserted[serialized.name] === undefined) {
    var stylesForSSR = '';
    var current = serialized;

    do {
      var maybeStyles = cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);

      if (!isBrowser$3 && maybeStyles !== undefined) {
        stylesForSSR += maybeStyles;
      }

      current = current.next;
    } while (current !== undefined);

    if (!isBrowser$3 && stylesForSSR.length !== 0) {
      return stylesForSSR;
    }
  }
};/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}var unitlessKeys = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = /* #__PURE__ */memoize$1(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return '';
  }

  var componentSelector = interpolation;

  if (componentSelector.__emotion_styles !== undefined) {

    return componentSelector;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        var keyframes = interpolation;

        if (keyframes.anim === 1) {
          cursor = {
            name: keyframes.name,
            styles: keyframes.styles,
            next: cursor
          };
          return keyframes.name;
        }

        var serializedStyles = interpolation;

        if (serializedStyles.styles !== undefined) {
          var next = serializedStyles.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = serializedStyles.styles + ";";
          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result);
        }

        break;
      }
  } // finalize string values (regular strings and functions interpolated into css calls)


  var asString = interpolation;

  if (registered == null) {
    return asString;
  }

  var cached = registered[asString];
  return cached !== undefined ? cached : asString;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var key in obj) {
      var value = obj[key];

      if (typeof value !== 'object') {
        var asString = value;

        if (registered != null && registered[asString] !== undefined) {
          string += key + "{" + registered[asString] + "}";
        } else if (isProcessableValue(asString)) {
          string += processStyleName(key) + ":" + processStyleValue(key, asString) + ";";
        }
      } else {

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(key) + ":" + processStyleValue(key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);

          switch (key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(key) + ":" + interpolated + ";";
                break;
              }

            default:
              {

                string += key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;{]+)\s*(;|$)/g; // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list

var cursor;
function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {
    var asTemplateStringsArr = strings;

    styles += asTemplateStringsArr[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);

    if (stringMode) {
      var templateStringsArr = strings;

      styles += templateStringsArr[i];
    }
  } // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + match[1];
  }

  var name = murmur2(styles) + identifierName;

  return {
    name: name,
    styles: styles,
    next: cursor
  };
}var isBrowser$2 = typeof document !== 'undefined';

var syncFallback = function syncFallback(create) {
  return create();
};

var useInsertionEffect = React['useInsertion' + 'Effect'] ? React['useInsertion' + 'Effect'] : false;
var useInsertionEffectAlwaysWithSyncFallback = !isBrowser$2 ? syncFallback : useInsertionEffect || syncFallback;var isBrowser$1 = typeof document !== 'undefined';

var EmotionCacheContext = /* #__PURE__ */React.createContext( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? /* #__PURE__ */createCache({
  key: 'css'
}) : null);

EmotionCacheContext.Provider;

var withEmotionCache = function withEmotionCache(func) {
  return /*#__PURE__*/forwardRef(function (props, ref) {
    // the cache will never be null in the browser
    var cache = useContext(EmotionCacheContext);
    return func(props, cache, ref);
  });
};

if (!isBrowser$1) {
  withEmotionCache = function withEmotionCache(func) {
    return function (props) {
      var cache = useContext(EmotionCacheContext);

      if (cache === null) {
        // yes, we're potentially creating this on every render
        // it doesn't actually matter though since it's only on the server
        // so there will only every be a single render
        // that could change in the future because of suspense and etc. but for now,
        // this works and i don't want to optimise for a future thing that we aren't sure about
        cache = createCache({
          key: 'css'
        });
        return /*#__PURE__*/React.createElement(EmotionCacheContext.Provider, {
          value: cache
        }, func(props, cache));
      } else {
        return func(props, cache);
      }
    };
  };
}

var ThemeContext = /* #__PURE__ */React.createContext({});

var hasOwn = {}.hasOwnProperty;

var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var createEmotionProps = function createEmotionProps(type, props) {

  var newProps = {};

  for (var _key in props) {
    if (hasOwn.call(props, _key)) {
      newProps[_key] = props[_key];
    }
  }

  newProps[typePropName] = type; // Runtime labeling is an opt-in feature because:

  return newProps;
};

var Insertion$1 = function Insertion(_ref) {
  var cache = _ref.cache,
      serialized = _ref.serialized,
      isStringTag = _ref.isStringTag;
  registerStyles(cache, serialized, isStringTag);
  var rules = useInsertionEffectAlwaysWithSyncFallback(function () {
    return insertStyles(cache, serialized, isStringTag);
  });

  if (!isBrowser$1 && rules !== undefined) {
    var _ref2;

    var serializedNames = serialized.name;
    var next = serialized.next;

    while (next !== undefined) {
      serializedNames += ' ' + next.name;
      next = next.next;
    }

    return /*#__PURE__*/React.createElement("style", (_ref2 = {}, _ref2["data-emotion"] = cache.key + " " + serializedNames, _ref2.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref2.nonce = cache.sheet.nonce, _ref2));
  }

  return null;
};

var Emotion = /* #__PURE__ */withEmotionCache(function (props, cache, ref) {
  var cssProp = props.css; // so that using `css` from `emotion` and passing the result to the css prop works
  // not passing the registered cache to serializeStyles because it would
  // make certain babel optimisations not possible

  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }

  var WrappedComponent = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';

  if (typeof props.className === 'string') {
    className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }

  var serialized = serializeStyles(registeredStyles, undefined, React.useContext(ThemeContext));

  className += cache.key + "-" + serialized.name;
  var newProps = {};

  for (var _key2 in props) {
    if (hasOwn.call(props, _key2) && _key2 !== 'css' && _key2 !== typePropName && (true )) {
      newProps[_key2] = props[_key2];
    }
  }

  newProps.className = className;

  if (ref) {
    newProps.ref = ref;
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Insertion$1, {
    cache: cache,
    serialized: serialized,
    isStringTag: typeof WrappedComponent === 'string'
  }), /*#__PURE__*/React.createElement(WrappedComponent, newProps));
});

var Emotion$1 = Emotion;var jsx = function jsx(type, props) {
  // eslint-disable-next-line prefer-rest-params
  var args = arguments;

  if (props == null || !hasOwn.call(props, 'css')) {
    return React.createElement.apply(undefined, args);
  }

  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = Emotion$1;
  createElementArgArray[1] = createEmotionProps(type, props);

  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  }

  return React.createElement.apply(null, createElementArgArray);
};

(function (_jsx) {
  var JSX;

  (function (_JSX) {})(JSX || (JSX = _jsx.JSX || (_jsx.JSX = {})));
})(jsx || (jsx = {}));

function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return serializeStyles(args);
}

function keyframes() {
  var insertable = css.apply(void 0, arguments);
  var name = "animation-" + insertable.name;
  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}// eslint-disable-next-line no-undef
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var isPropValid = /* #__PURE__ */memoize$1(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);var isBrowser = typeof document !== 'undefined';

var testOmitPropsOnStringTag = isPropValid;

var testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
  return key !== 'theme';
};

var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
  return typeof tag === 'string' && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};
var composeShouldForwardProps = function composeShouldForwardProps(tag, options, isReal) {
  var shouldForwardProp;

  if (options) {
    var optionsShouldForwardProp = options.shouldForwardProp;
    shouldForwardProp = tag.__emotion_forwardProp && optionsShouldForwardProp ? function (propName) {
      return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
    } : optionsShouldForwardProp;
  }

  if (typeof shouldForwardProp !== 'function' && isReal) {
    shouldForwardProp = tag.__emotion_forwardProp;
  }

  return shouldForwardProp;
};

var Insertion = function Insertion(_ref) {
  var cache = _ref.cache,
      serialized = _ref.serialized,
      isStringTag = _ref.isStringTag;
  registerStyles(cache, serialized, isStringTag);
  var rules = useInsertionEffectAlwaysWithSyncFallback(function () {
    return insertStyles(cache, serialized, isStringTag);
  });

  if (!isBrowser && rules !== undefined) {
    var _ref2;

    var serializedNames = serialized.name;
    var next = serialized.next;

    while (next !== undefined) {
      serializedNames += ' ' + next.name;
      next = next.next;
    }

    return /*#__PURE__*/React.createElement("style", (_ref2 = {}, _ref2["data-emotion"] = cache.key + " " + serializedNames, _ref2.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref2.nonce = cache.sheet.nonce, _ref2));
  }

  return null;
};

var createStyled$1 = function createStyled(tag, options) {

  var isReal = tag.__emotion_real === tag;
  var baseTag = isReal && tag.__emotion_base || tag;
  var identifierName;
  var targetClassName;

  if (options !== undefined) {
    identifierName = options.label;
    targetClassName = options.target;
  }

  var shouldForwardProp = composeShouldForwardProps(tag, options, isReal);
  var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp('as');
  return function () {
    // eslint-disable-next-line prefer-rest-params
    var args = arguments;
    var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];

    if (identifierName !== undefined) {
      styles.push("label:" + identifierName + ";");
    }

    if (args[0] == null || args[0].raw === undefined) {
      // eslint-disable-next-line prefer-spread
      styles.push.apply(styles, args);
    } else {
      var templateStringsArr = args[0];

      styles.push(templateStringsArr[0]);
      var len = args.length;
      var i = 1;

      for (; i < len; i++) {

        styles.push(args[i], templateStringsArr[i]);
      }
    }

    var Styled = withEmotionCache(function (props, cache, ref) {
      var FinalTag = shouldUseAs && props.as || baseTag;
      var className = '';
      var classInterpolations = [];
      var mergedProps = props;

      if (props.theme == null) {
        mergedProps = {};

        for (var key in props) {
          mergedProps[key] = props[key];
        }

        mergedProps.theme = React.useContext(ThemeContext);
      }

      if (typeof props.className === 'string') {
        className = getRegisteredStyles(cache.registered, classInterpolations, props.className);
      } else if (props.className != null) {
        className = props.className + " ";
      }

      var serialized = serializeStyles(styles.concat(classInterpolations), cache.registered, mergedProps);
      className += cache.key + "-" + serialized.name;

      if (targetClassName !== undefined) {
        className += " " + targetClassName;
      }

      var finalShouldForwardProp = shouldUseAs && shouldForwardProp === undefined ? getDefaultShouldForwardProp(FinalTag) : defaultShouldForwardProp;
      var newProps = {};

      for (var _key in props) {
        if (shouldUseAs && _key === 'as') continue;

        if (finalShouldForwardProp(_key)) {
          newProps[_key] = props[_key];
        }
      }

      newProps.className = className;

      if (ref) {
        newProps.ref = ref;
      }

      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Insertion, {
        cache: cache,
        serialized: serialized,
        isStringTag: typeof FinalTag === 'string'
      }), /*#__PURE__*/React.createElement(FinalTag, newProps));
    });
    Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";
    Styled.defaultProps = tag.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles;
    Styled.__emotion_forwardProp = shouldForwardProp;
    Object.defineProperty(Styled, 'toString', {
      value: function value() {

        return "." + targetClassName;
      }
    });

    Styled.withComponent = function (nextTag, nextOptions) {
      var newStyled = createStyled(nextTag, _extends({}, options, nextOptions, {
        shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
      }));
      return newStyled.apply(void 0, styles);
    };

    return Styled;
  };
};var tags = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

// bind it to avoid mutating the original function
var newStyled = createStyled$1.bind(null);
tags.forEach(function (tagName) {
  newStyled[tagName] = newStyled(tagName);
});var propTypes = {exports: {}};var reactIs$1 = {exports: {}};var reactIs_production_min = {};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_production_min;

function requireReactIs_production_min () {
	if (hasRequiredReactIs_production_min) return reactIs_production_min;
	hasRequiredReactIs_production_min = 1;
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
	Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
	function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min.AsyncMode=l;reactIs_production_min.ConcurrentMode=m;reactIs_production_min.ContextConsumer=k;reactIs_production_min.ContextProvider=h;reactIs_production_min.Element=c;reactIs_production_min.ForwardRef=n;reactIs_production_min.Fragment=e;reactIs_production_min.Lazy=t;reactIs_production_min.Memo=r;reactIs_production_min.Portal=d;
	reactIs_production_min.Profiler=g;reactIs_production_min.StrictMode=f;reactIs_production_min.Suspense=p;reactIs_production_min.isAsyncMode=function(a){return A(a)||z(a)===l};reactIs_production_min.isConcurrentMode=A;reactIs_production_min.isContextConsumer=function(a){return z(a)===k};reactIs_production_min.isContextProvider=function(a){return z(a)===h};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min.isForwardRef=function(a){return z(a)===n};reactIs_production_min.isFragment=function(a){return z(a)===e};reactIs_production_min.isLazy=function(a){return z(a)===t};
	reactIs_production_min.isMemo=function(a){return z(a)===r};reactIs_production_min.isPortal=function(a){return z(a)===d};reactIs_production_min.isProfiler=function(a){return z(a)===g};reactIs_production_min.isStrictMode=function(a){return z(a)===f};reactIs_production_min.isSuspense=function(a){return z(a)===p};
	reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min.typeOf=z;
	return reactIs_production_min;
}var reactIs_development$1 = {};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_development$1;

function requireReactIs_development$1 () {
	if (hasRequiredReactIs_development$1) return reactIs_development$1;
	hasRequiredReactIs_development$1 = 1;



	if (process.env.NODE_ENV !== "production") {
	  (function() {

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	// (unstable) APIs that have been removed. Can we remove the symbols?

	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
	var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
	var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
	var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
	}

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;

	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_ASYNC_MODE_TYPE:
	          case REACT_CONCURRENT_MODE_TYPE:
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	            return type;

	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_LAZY_TYPE:
	              case REACT_MEMO_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;

	              default:
	                return $$typeof;
	            }

	        }

	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	} // AsyncMode is deprecated along with isAsyncMode

	var AsyncMode = REACT_ASYNC_MODE_TYPE;
	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;
	var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	    }
	  }

	  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	}
	function isConcurrentMode(object) {
	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}

	reactIs_development$1.AsyncMode = AsyncMode;
	reactIs_development$1.ConcurrentMode = ConcurrentMode;
	reactIs_development$1.ContextConsumer = ContextConsumer;
	reactIs_development$1.ContextProvider = ContextProvider;
	reactIs_development$1.Element = Element;
	reactIs_development$1.ForwardRef = ForwardRef;
	reactIs_development$1.Fragment = Fragment;
	reactIs_development$1.Lazy = Lazy;
	reactIs_development$1.Memo = Memo;
	reactIs_development$1.Portal = Portal;
	reactIs_development$1.Profiler = Profiler;
	reactIs_development$1.StrictMode = StrictMode;
	reactIs_development$1.Suspense = Suspense;
	reactIs_development$1.isAsyncMode = isAsyncMode;
	reactIs_development$1.isConcurrentMode = isConcurrentMode;
	reactIs_development$1.isContextConsumer = isContextConsumer;
	reactIs_development$1.isContextProvider = isContextProvider;
	reactIs_development$1.isElement = isElement;
	reactIs_development$1.isForwardRef = isForwardRef;
	reactIs_development$1.isFragment = isFragment;
	reactIs_development$1.isLazy = isLazy;
	reactIs_development$1.isMemo = isMemo;
	reactIs_development$1.isPortal = isPortal;
	reactIs_development$1.isProfiler = isProfiler;
	reactIs_development$1.isStrictMode = isStrictMode;
	reactIs_development$1.isSuspense = isSuspense;
	reactIs_development$1.isValidElementType = isValidElementType;
	reactIs_development$1.typeOf = typeOf;
	  })();
	}
	return reactIs_development$1;
}var hasRequiredReactIs$1;

function requireReactIs$1 () {
	if (hasRequiredReactIs$1) return reactIs$1.exports;
	hasRequiredReactIs$1 = 1;

	if (process.env.NODE_ENV === 'production') {
	  reactIs$1.exports = requireReactIs_production_min();
	} else {
	  reactIs$1.exports = requireReactIs_development$1();
	}
	return reactIs$1.exports;
}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

var objectAssign;
var hasRequiredObjectAssign;

function requireObjectAssign () {
	if (hasRequiredObjectAssign) return objectAssign;
	hasRequiredObjectAssign = 1;
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};
	return objectAssign;
}/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret_1;
var hasRequiredReactPropTypesSecret;

function requireReactPropTypesSecret () {
	if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
	hasRequiredReactPropTypesSecret = 1;

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	ReactPropTypesSecret_1 = ReactPropTypesSecret;
	return ReactPropTypesSecret_1;
}var has;
var hasRequiredHas;

function requireHas () {
	if (hasRequiredHas) return has;
	hasRequiredHas = 1;
	has = Function.call.bind(Object.prototype.hasOwnProperty);
	return has;
}/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var checkPropTypes_1;
var hasRequiredCheckPropTypes;

function requireCheckPropTypes () {
	if (hasRequiredCheckPropTypes) return checkPropTypes_1;
	hasRequiredCheckPropTypes = 1;

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  var ReactPropTypesSecret = /*@__PURE__*/ requireReactPropTypesSecret();
	  var loggedTypeFailures = {};
	  var has = /*@__PURE__*/ requireHas();

	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) { /**/ }
	  };
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error(
	              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
	              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
	              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
	            );
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning(
	            (componentName || 'React class') + ': type specification of ' +
	            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
	            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
	            'You may have forgotten to pass an argument to the type checker ' +
	            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
	            'shape all require an argument).'
	          );
	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          printWarning(
	            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
	          );
	        }
	      }
	    }
	  }
	}

	/**
	 * Resets warning cache when testing.
	 *
	 * @private
	 */
	checkPropTypes.resetWarningCache = function() {
	  if (process.env.NODE_ENV !== 'production') {
	    loggedTypeFailures = {};
	  }
	};

	checkPropTypes_1 = checkPropTypes;
	return checkPropTypes_1;
}/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithTypeCheckers;
var hasRequiredFactoryWithTypeCheckers;

function requireFactoryWithTypeCheckers () {
	if (hasRequiredFactoryWithTypeCheckers) return factoryWithTypeCheckers;
	hasRequiredFactoryWithTypeCheckers = 1;

	var ReactIs = requireReactIs$1();
	var assign = requireObjectAssign();

	var ReactPropTypesSecret = /*@__PURE__*/ requireReactPropTypesSecret();
	var has = /*@__PURE__*/ requireHas();
	var checkPropTypes = /*@__PURE__*/ requireCheckPropTypes();

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	function emptyFunctionThatReturnsNull() {
	  return null;
	}

	factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bigint: createPrimitiveTypeChecker('bigint'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    elementType: createElementTypeTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message, data) {
	    this.message = message;
	    this.data = data && typeof data === 'object' ? data: {};
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          var err = new Error(
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            printWarning(
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError(
	          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
	          {expectedType: expectedType}
	        );
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!ReactIs.isValidElementType(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (arguments.length > 1) {
	          printWarning(
	            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
	            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
	          );
	        } else {
	          printWarning('Invalid argument supplied to oneOf, expected an array.');
	        }
	      }
	      return emptyFunctionThatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
	        var type = getPreciseType(value);
	        if (type === 'symbol') {
	          return String(value);
	        }
	        return value;
	      });
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (has(propValue, key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        printWarning(
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
	        );
	        return emptyFunctionThatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var expectedTypes = [];
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
	        if (checkerResult == null) {
	          return null;
	        }
	        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
	          expectedTypes.push(checkerResult.data.expectedType);
	        }
	      }
	      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function invalidValidatorError(componentName, location, propFullName, key, type) {
	    return new PropTypeError(
	      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
	      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
	    );
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (typeof checker !== 'function') {
	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (has(shapeTypes, key) && typeof checker !== 'function') {
	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
	        }
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // falsy value can't be a Symbol
	    if (!propValue) {
	      return false;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};
	return factoryWithTypeCheckers;
}/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithThrowingShims;
var hasRequiredFactoryWithThrowingShims;

function requireFactoryWithThrowingShims () {
	if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
	hasRequiredFactoryWithThrowingShims = 1;

	var ReactPropTypesSecret = /*@__PURE__*/ requireReactPropTypesSecret();

	function emptyFunction() {}
	function emptyFunctionWithReset() {}
	emptyFunctionWithReset.resetWarningCache = emptyFunction;

	factoryWithThrowingShims = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error(
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	    err.name = 'Invariant Violation';
	    throw err;
	  }	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  }	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bigint: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    elementType: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim,

	    checkPropTypes: emptyFunctionWithReset,
	    resetWarningCache: emptyFunction
	  };

	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};
	return factoryWithThrowingShims;
}/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredPropTypes;

function requirePropTypes () {
	if (hasRequiredPropTypes) return propTypes.exports;
	hasRequiredPropTypes = 1;
	if (process.env.NODE_ENV !== 'production') {
	  var ReactIs = requireReactIs$1();

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  propTypes.exports = /*@__PURE__*/ requireFactoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  propTypes.exports = /*@__PURE__*/ requireFactoryWithThrowingShims()();
	}
	return propTypes.exports;
}var propTypesExports = /*@__PURE__*/ requirePropTypes();
var PropTypes = /*@__PURE__*/getDefaultExportFromCjs(propTypesExports);/**
 * @mui/styled-engine v7.1.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/* eslint-disable no-underscore-dangle */
function styled$2(tag, options) {
  const stylesFactory = newStyled(tag, options);
  if (process.env.NODE_ENV !== 'production') {
    return (...styles) => {
      const component = typeof tag === 'string' ? `"${tag}"` : 'component';
      if (styles.length === 0) {
        console.error([`MUI: Seems like you called \`styled(${component})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join('\n'));
      } else if (styles.some(style => style === undefined)) {
        console.error(`MUI: the styled(${component})(...args) API requires all its args to be defined.`);
      }
      return stylesFactory(...styles);
    };
  }
  return stylesFactory;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
function internal_mutateStyles(tag, processor) {
  // Emotion attaches all the styles as `__emotion_styles`.
  // Ref: https://github.com/emotion-js/emotion/blob/16d971d0da229596d6bcc39d282ba9753c9ee7cf/packages/styled/src/base.js#L186
  if (Array.isArray(tag.__emotion_styles)) {
    tag.__emotion_styles = processor(tag.__emotion_styles);
  }
}

// Emotion only accepts an array, but we want to avoid allocations
const wrapper = [];
// eslint-disable-next-line @typescript-eslint/naming-convention
function internal_serializeStyles(styles) {
  wrapper[0] = styles;
  return serializeStyles(wrapper);
}var reactIs = {exports: {}};var reactIs_production = {};/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_production;

function requireReactIs_production () {
	if (hasRequiredReactIs_production) return reactIs_production;
	hasRequiredReactIs_production = 1;
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	  REACT_PORTAL_TYPE = Symbol.for("react.portal"),
	  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
	  REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
	  REACT_PROFILER_TYPE = Symbol.for("react.profiler");
	var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
	  REACT_CONTEXT_TYPE = Symbol.for("react.context"),
	  REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
	  REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
	  REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
	  REACT_MEMO_TYPE = Symbol.for("react.memo"),
	  REACT_LAZY_TYPE = Symbol.for("react.lazy"),
	  REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"),
	  REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
	function typeOf(object) {
	  if ("object" === typeof object && null !== object) {
	    var $$typeof = object.$$typeof;
	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        switch (((object = object.type), object)) {
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	          case REACT_SUSPENSE_LIST_TYPE:
	          case REACT_VIEW_TRANSITION_TYPE:
	            return object;
	          default:
	            switch (((object = object && object.$$typeof), object)) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_LAZY_TYPE:
	              case REACT_MEMO_TYPE:
	                return object;
	              case REACT_CONSUMER_TYPE:
	                return object;
	              default:
	                return $$typeof;
	            }
	        }
	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }
	}
	reactIs_production.ContextConsumer = REACT_CONSUMER_TYPE;
	reactIs_production.ContextProvider = REACT_CONTEXT_TYPE;
	reactIs_production.Element = REACT_ELEMENT_TYPE;
	reactIs_production.ForwardRef = REACT_FORWARD_REF_TYPE;
	reactIs_production.Fragment = REACT_FRAGMENT_TYPE;
	reactIs_production.Lazy = REACT_LAZY_TYPE;
	reactIs_production.Memo = REACT_MEMO_TYPE;
	reactIs_production.Portal = REACT_PORTAL_TYPE;
	reactIs_production.Profiler = REACT_PROFILER_TYPE;
	reactIs_production.StrictMode = REACT_STRICT_MODE_TYPE;
	reactIs_production.Suspense = REACT_SUSPENSE_TYPE;
	reactIs_production.SuspenseList = REACT_SUSPENSE_LIST_TYPE;
	reactIs_production.isContextConsumer = function (object) {
	  return typeOf(object) === REACT_CONSUMER_TYPE;
	};
	reactIs_production.isContextProvider = function (object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	};
	reactIs_production.isElement = function (object) {
	  return (
	    "object" === typeof object &&
	    null !== object &&
	    object.$$typeof === REACT_ELEMENT_TYPE
	  );
	};
	reactIs_production.isForwardRef = function (object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	};
	reactIs_production.isFragment = function (object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	};
	reactIs_production.isLazy = function (object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	};
	reactIs_production.isMemo = function (object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	};
	reactIs_production.isPortal = function (object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	};
	reactIs_production.isProfiler = function (object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	};
	reactIs_production.isStrictMode = function (object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	};
	reactIs_production.isSuspense = function (object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	};
	reactIs_production.isSuspenseList = function (object) {
	  return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
	};
	reactIs_production.isValidElementType = function (type) {
	  return "string" === typeof type ||
	    "function" === typeof type ||
	    type === REACT_FRAGMENT_TYPE ||
	    type === REACT_PROFILER_TYPE ||
	    type === REACT_STRICT_MODE_TYPE ||
	    type === REACT_SUSPENSE_TYPE ||
	    type === REACT_SUSPENSE_LIST_TYPE ||
	    ("object" === typeof type &&
	      null !== type &&
	      (type.$$typeof === REACT_LAZY_TYPE ||
	        type.$$typeof === REACT_MEMO_TYPE ||
	        type.$$typeof === REACT_CONTEXT_TYPE ||
	        type.$$typeof === REACT_CONSUMER_TYPE ||
	        type.$$typeof === REACT_FORWARD_REF_TYPE ||
	        type.$$typeof === REACT_CLIENT_REFERENCE ||
	        void 0 !== type.getModuleId))
	    ? true
	    : false;
	};
	reactIs_production.typeOf = typeOf;
	return reactIs_production;
}var reactIs_development = {};/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_development;

function requireReactIs_development () {
	if (hasRequiredReactIs_development) return reactIs_development;
	hasRequiredReactIs_development = 1;
	"production" !== process.env.NODE_ENV &&
	  (function () {
	    function typeOf(object) {
	      if ("object" === typeof object && null !== object) {
	        var $$typeof = object.$$typeof;
	        switch ($$typeof) {
	          case REACT_ELEMENT_TYPE:
	            switch (((object = object.type), object)) {
	              case REACT_FRAGMENT_TYPE:
	              case REACT_PROFILER_TYPE:
	              case REACT_STRICT_MODE_TYPE:
	              case REACT_SUSPENSE_TYPE:
	              case REACT_SUSPENSE_LIST_TYPE:
	              case REACT_VIEW_TRANSITION_TYPE:
	                return object;
	              default:
	                switch (((object = object && object.$$typeof), object)) {
	                  case REACT_CONTEXT_TYPE:
	                  case REACT_FORWARD_REF_TYPE:
	                  case REACT_LAZY_TYPE:
	                  case REACT_MEMO_TYPE:
	                    return object;
	                  case REACT_CONSUMER_TYPE:
	                    return object;
	                  default:
	                    return $$typeof;
	                }
	            }
	          case REACT_PORTAL_TYPE:
	            return $$typeof;
	        }
	      }
	    }
	    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	      REACT_PORTAL_TYPE = Symbol.for("react.portal"),
	      REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
	      REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
	      REACT_PROFILER_TYPE = Symbol.for("react.profiler");
	    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
	      REACT_CONTEXT_TYPE = Symbol.for("react.context"),
	      REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
	      REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
	      REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
	      REACT_MEMO_TYPE = Symbol.for("react.memo"),
	      REACT_LAZY_TYPE = Symbol.for("react.lazy"),
	      REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"),
	      REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
	    reactIs_development.ContextConsumer = REACT_CONSUMER_TYPE;
	    reactIs_development.ContextProvider = REACT_CONTEXT_TYPE;
	    reactIs_development.Element = REACT_ELEMENT_TYPE;
	    reactIs_development.ForwardRef = REACT_FORWARD_REF_TYPE;
	    reactIs_development.Fragment = REACT_FRAGMENT_TYPE;
	    reactIs_development.Lazy = REACT_LAZY_TYPE;
	    reactIs_development.Memo = REACT_MEMO_TYPE;
	    reactIs_development.Portal = REACT_PORTAL_TYPE;
	    reactIs_development.Profiler = REACT_PROFILER_TYPE;
	    reactIs_development.StrictMode = REACT_STRICT_MODE_TYPE;
	    reactIs_development.Suspense = REACT_SUSPENSE_TYPE;
	    reactIs_development.SuspenseList = REACT_SUSPENSE_LIST_TYPE;
	    reactIs_development.isContextConsumer = function (object) {
	      return typeOf(object) === REACT_CONSUMER_TYPE;
	    };
	    reactIs_development.isContextProvider = function (object) {
	      return typeOf(object) === REACT_CONTEXT_TYPE;
	    };
	    reactIs_development.isElement = function (object) {
	      return (
	        "object" === typeof object &&
	        null !== object &&
	        object.$$typeof === REACT_ELEMENT_TYPE
	      );
	    };
	    reactIs_development.isForwardRef = function (object) {
	      return typeOf(object) === REACT_FORWARD_REF_TYPE;
	    };
	    reactIs_development.isFragment = function (object) {
	      return typeOf(object) === REACT_FRAGMENT_TYPE;
	    };
	    reactIs_development.isLazy = function (object) {
	      return typeOf(object) === REACT_LAZY_TYPE;
	    };
	    reactIs_development.isMemo = function (object) {
	      return typeOf(object) === REACT_MEMO_TYPE;
	    };
	    reactIs_development.isPortal = function (object) {
	      return typeOf(object) === REACT_PORTAL_TYPE;
	    };
	    reactIs_development.isProfiler = function (object) {
	      return typeOf(object) === REACT_PROFILER_TYPE;
	    };
	    reactIs_development.isStrictMode = function (object) {
	      return typeOf(object) === REACT_STRICT_MODE_TYPE;
	    };
	    reactIs_development.isSuspense = function (object) {
	      return typeOf(object) === REACT_SUSPENSE_TYPE;
	    };
	    reactIs_development.isSuspenseList = function (object) {
	      return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
	    };
	    reactIs_development.isValidElementType = function (type) {
	      return "string" === typeof type ||
	        "function" === typeof type ||
	        type === REACT_FRAGMENT_TYPE ||
	        type === REACT_PROFILER_TYPE ||
	        type === REACT_STRICT_MODE_TYPE ||
	        type === REACT_SUSPENSE_TYPE ||
	        type === REACT_SUSPENSE_LIST_TYPE ||
	        ("object" === typeof type &&
	          null !== type &&
	          (type.$$typeof === REACT_LAZY_TYPE ||
	            type.$$typeof === REACT_MEMO_TYPE ||
	            type.$$typeof === REACT_CONTEXT_TYPE ||
	            type.$$typeof === REACT_CONSUMER_TYPE ||
	            type.$$typeof === REACT_FORWARD_REF_TYPE ||
	            type.$$typeof === REACT_CLIENT_REFERENCE ||
	            void 0 !== type.getModuleId))
	        ? true
	        : false;
	    };
	    reactIs_development.typeOf = typeOf;
	  })();
	return reactIs_development;
}var hasRequiredReactIs;

function requireReactIs () {
	if (hasRequiredReactIs) return reactIs.exports;
	hasRequiredReactIs = 1;

	if (process.env.NODE_ENV === 'production') {
	  reactIs.exports = /*@__PURE__*/ requireReactIs_production();
	} else {
	  reactIs.exports = /*@__PURE__*/ requireReactIs_development();
	}
	return reactIs.exports;
}var reactIsExports = /*@__PURE__*/ requireReactIs();// https://github.com/sindresorhus/is-plain-obj/blob/main/index.js
function isPlainObject(item) {
  if (typeof item !== 'object' || item === null) {
    return false;
  }
  const prototype = Object.getPrototypeOf(item);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in item) && !(Symbol.iterator in item);
}
function deepClone(source) {
  if (/*#__PURE__*/React.isValidElement(source) || reactIsExports.isValidElementType(source) || !isPlainObject(source)) {
    return source;
  }
  const output = {};
  Object.keys(source).forEach(key => {
    output[key] = deepClone(source[key]);
  });
  return output;
}

/**
 * Merge objects deeply.
 * It will shallow copy React elements.
 *
 * If `options.clone` is set to `false` the source object will be merged directly into the target object.
 *
 * @example
 * ```ts
 * deepmerge({ a: { b: 1 }, d: 2 }, { a: { c: 2 }, d: 4 });
 * // => { a: { b: 1, c: 2 }, d: 4 }
 * ````
 *
 * @param target The target object.
 * @param source The source object.
 * @param options The merge options.
 * @param options.clone Set to `false` to merge the source object directly into the target object.
 * @returns The merged object.
 */
function deepmerge(target, source, options = {
  clone: true
}) {
  const output = options.clone ? {
    ...target
  } : target;
  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach(key => {
      if (/*#__PURE__*/React.isValidElement(source[key]) || reactIsExports.isValidElementType(source[key])) {
        output[key] = source[key];
      } else if (isPlainObject(source[key]) &&
      // Avoid prototype pollution
      Object.prototype.hasOwnProperty.call(target, key) && isPlainObject(target[key])) {
        // Since `output` is a clone of `target` and we have narrowed `target` in this block we can cast to the same type.
        output[key] = deepmerge(target[key], source[key], options);
      } else if (options.clone) {
        output[key] = isPlainObject(source[key]) ? deepClone(source[key]) : source[key];
      } else {
        output[key] = source[key];
      }
    });
  }
  return output;
}// Sorted ASC by size. That's important.
// It can't be configured as it's used statically for propTypes.
const sortBreakpointsValues = values => {
  const breakpointsAsArray = Object.keys(values).map(key => ({
    key,
    val: values[key]
  })) || [];
  // Sort in ascending order
  breakpointsAsArray.sort((breakpoint1, breakpoint2) => breakpoint1.val - breakpoint2.val);
  return breakpointsAsArray.reduce((acc, obj) => {
    return {
      ...acc,
      [obj.key]: obj.val
    };
  }, {});
};

// Keep in mind that @media is inclusive by the CSS specification.
function createBreakpoints(breakpoints) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536 // large screen
    },
    unit = 'px',
    step = 5,
    ...other
  } = breakpoints;
  const sortedValues = sortBreakpointsValues(values);
  const keys = Object.keys(sortedValues);
  function up(key) {
    const value = typeof values[key] === 'number' ? values[key] : key;
    return `@media (min-width:${value}${unit})`;
  }
  function down(key) {
    const value = typeof values[key] === 'number' ? values[key] : key;
    return `@media (max-width:${value - step / 100}${unit})`;
  }
  function between(start, end) {
    const endIndex = keys.indexOf(end);
    return `@media (min-width:${typeof values[start] === 'number' ? values[start] : start}${unit}) and ` + `(max-width:${(endIndex !== -1 && typeof values[keys[endIndex]] === 'number' ? values[keys[endIndex]] : end) - step / 100}${unit})`;
  }
  function only(key) {
    if (keys.indexOf(key) + 1 < keys.length) {
      return between(key, keys[keys.indexOf(key) + 1]);
    }
    return up(key);
  }
  function not(key) {
    // handle first and last key separately, for better readability
    const keyIndex = keys.indexOf(key);
    if (keyIndex === 0) {
      return up(keys[1]);
    }
    if (keyIndex === keys.length - 1) {
      return down(keys[keyIndex]);
    }
    return between(key, keys[keys.indexOf(key) + 1]).replace('@media', '@media not all and');
  }
  return {
    keys,
    values: sortedValues,
    up,
    down,
    between,
    only,
    not,
    unit,
    ...other
  };
}/**
 * For using in `sx` prop to sort the breakpoint from low to high.
 * Note: this function does not work and will not support multiple units.
 *       e.g. input: { '@container (min-width:300px)': '1rem', '@container (min-width:40rem)': '2rem' }
 *            output: { '@container (min-width:40rem)': '2rem', '@container (min-width:300px)': '1rem' } // since 40 < 300 eventhough 40rem > 300px
 */
function sortContainerQueries(theme, css) {
  if (!theme.containerQueries) {
    return css;
  }
  const sorted = Object.keys(css).filter(key => key.startsWith('@container')).sort((a, b) => {
    const regex = /min-width:\s*([0-9.]+)/;
    return +(a.match(regex)?.[1] || 0) - +(b.match(regex)?.[1] || 0);
  });
  if (!sorted.length) {
    return css;
  }
  return sorted.reduce((acc, key) => {
    const value = css[key];
    delete acc[key];
    acc[key] = value;
    return acc;
  }, {
    ...css
  });
}
function isCqShorthand(breakpointKeys, value) {
  return value === '@' || value.startsWith('@') && (breakpointKeys.some(key => value.startsWith(`@${key}`)) || !!value.match(/^@\d/));
}
function getContainerQuery(theme, shorthand) {
  const matches = shorthand.match(/^@([^/]+)?\/?(.+)?$/);
  if (!matches) {
    if (process.env.NODE_ENV !== 'production') {
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${shorthand})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.\n` + 'For example, `@sm` or `@600` or `@40rem/sidebar`.' : formatMuiErrorMessage(18, `(${shorthand})`));
    }
    return null;
  }
  const [, containerQuery, containerName] = matches;
  const value = Number.isNaN(+containerQuery) ? containerQuery || 0 : +containerQuery;
  return theme.containerQueries(containerName).up(value);
}
function cssContainerQueries(themeInput) {
  const toContainerQuery = (mediaQuery, name) => mediaQuery.replace('@media', name ? `@container ${name}` : '@container');
  function attachCq(node, name) {
    node.up = (...args) => toContainerQuery(themeInput.breakpoints.up(...args), name);
    node.down = (...args) => toContainerQuery(themeInput.breakpoints.down(...args), name);
    node.between = (...args) => toContainerQuery(themeInput.breakpoints.between(...args), name);
    node.only = (...args) => toContainerQuery(themeInput.breakpoints.only(...args), name);
    node.not = (...args) => {
      const result = toContainerQuery(themeInput.breakpoints.not(...args), name);
      if (result.includes('not all and')) {
        // `@container` does not work with `not all and`, so need to invert the logic
        return result.replace('not all and ', '').replace('min-width:', 'width<').replace('max-width:', 'width>').replace('and', 'or');
      }
      return result;
    };
  }
  const node = {};
  const containerQueries = name => {
    attachCq(node, name);
    return node;
  };
  attachCq(containerQueries);
  return {
    ...themeInput,
    containerQueries
  };
}const shape = {
  borderRadius: 4
};const responsivePropType = process.env.NODE_ENV !== 'production' ? PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object, PropTypes.array]) : {};function merge(acc, item) {
  if (!item) {
    return acc;
  }
  return deepmerge(acc, item, {
    clone: false // No need to clone deep, it's way faster.
  });
}// The breakpoint **start** at this value.
// For instance with the first breakpoint xs: [xs, sm[.
const values$1 = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536 // large screen
};
const defaultBreakpoints = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ['xs', 'sm', 'md', 'lg', 'xl'],
  up: key => `@media (min-width:${values$1[key]}px)`
};
const defaultContainerQueries = {
  containerQueries: containerName => ({
    up: key => {
      let result = typeof key === 'number' ? key : values$1[key] || key;
      if (typeof result === 'number') {
        result = `${result}px`;
      }
      return containerName ? `@container ${containerName} (min-width:${result})` : `@container (min-width:${result})`;
    }
  })
};
function handleBreakpoints(props, propValue, styleFromPropValue) {
  const theme = props.theme || {};
  if (Array.isArray(propValue)) {
    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
    return propValue.reduce((acc, item, index) => {
      acc[themeBreakpoints.up(themeBreakpoints.keys[index])] = styleFromPropValue(propValue[index]);
      return acc;
    }, {});
  }
  if (typeof propValue === 'object') {
    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
    return Object.keys(propValue).reduce((acc, breakpoint) => {
      if (isCqShorthand(themeBreakpoints.keys, breakpoint)) {
        const containerKey = getContainerQuery(theme.containerQueries ? theme : defaultContainerQueries, breakpoint);
        if (containerKey) {
          acc[containerKey] = styleFromPropValue(propValue[breakpoint], breakpoint);
        }
      }
      // key is breakpoint
      else if (Object.keys(themeBreakpoints.values || values$1).includes(breakpoint)) {
        const mediaKey = themeBreakpoints.up(breakpoint);
        acc[mediaKey] = styleFromPropValue(propValue[breakpoint], breakpoint);
      } else {
        const cssKey = breakpoint;
        acc[cssKey] = propValue[cssKey];
      }
      return acc;
    }, {});
  }
  const output = styleFromPropValue(propValue);
  return output;
}
function createEmptyBreakpointObject(breakpointsInput = {}) {
  const breakpointsInOrder = breakpointsInput.keys?.reduce((acc, key) => {
    const breakpointStyleKey = breakpointsInput.up(key);
    acc[breakpointStyleKey] = {};
    return acc;
  }, {});
  return breakpointsInOrder || {};
}
function removeUnusedBreakpoints(breakpointKeys, style) {
  return breakpointKeys.reduce((acc, key) => {
    const breakpointOutput = acc[key];
    const isBreakpointUnused = !breakpointOutput || Object.keys(breakpointOutput).length === 0;
    if (isBreakpointUnused) {
      delete acc[key];
    }
    return acc;
  }, style);
}
function mergeBreakpointsInOrder(breakpointsInput, ...styles) {
  const emptyBreakpoints = createEmptyBreakpointObject(breakpointsInput);
  const mergedOutput = [emptyBreakpoints, ...styles].reduce((prev, next) => deepmerge(prev, next), {});
  return removeUnusedBreakpoints(Object.keys(emptyBreakpoints), mergedOutput);
}

// compute base for responsive values; e.g.,
// [1,2,3] => {xs: true, sm: true, md: true}
// {xs: 1, sm: 2, md: 3} => {xs: true, sm: true, md: true}
function computeBreakpointsBase(breakpointValues, themeBreakpoints) {
  // fixed value
  if (typeof breakpointValues !== 'object') {
    return {};
  }
  const base = {};
  const breakpointsKeys = Object.keys(themeBreakpoints);
  if (Array.isArray(breakpointValues)) {
    breakpointsKeys.forEach((breakpoint, i) => {
      if (i < breakpointValues.length) {
        base[breakpoint] = true;
      }
    });
  } else {
    breakpointsKeys.forEach(breakpoint => {
      if (breakpointValues[breakpoint] != null) {
        base[breakpoint] = true;
      }
    });
  }
  return base;
}
function resolveBreakpointValues({
  values: breakpointValues,
  breakpoints: themeBreakpoints,
  base: customBase
}) {
  const base = customBase || computeBreakpointsBase(breakpointValues, themeBreakpoints);
  const keys = Object.keys(base);
  if (keys.length === 0) {
    return breakpointValues;
  }
  let previous;
  return keys.reduce((acc, breakpoint, i) => {
    if (Array.isArray(breakpointValues)) {
      acc[breakpoint] = breakpointValues[i] != null ? breakpointValues[i] : breakpointValues[previous];
      previous = i;
    } else if (typeof breakpointValues === 'object') {
      acc[breakpoint] = breakpointValues[breakpoint] != null ? breakpointValues[breakpoint] : breakpointValues[previous];
      previous = breakpoint;
    } else {
      acc[breakpoint] = breakpointValues;
    }
    return acc;
  }, {});
}// It should to be noted that this function isn't equivalent to `text-transform: capitalize`.
//
// A strict capitalization should uppercase the first letter of each word in the sentence.
// We only handle the first word.
function capitalize(string) {
  if (typeof string !== 'string') {
    throw new Error(process.env.NODE_ENV !== "production" ? 'MUI: `capitalize(string)` expects a string argument.' : formatMuiErrorMessage(7));
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}function getPath(obj, path, checkVars = true) {
  if (!path || typeof path !== 'string') {
    return null;
  }

  // Check if CSS variables are used
  if (obj && obj.vars && checkVars) {
    const val = `vars.${path}`.split('.').reduce((acc, item) => acc && acc[item] ? acc[item] : null, obj);
    if (val != null) {
      return val;
    }
  }
  return path.split('.').reduce((acc, item) => {
    if (acc && acc[item] != null) {
      return acc[item];
    }
    return null;
  }, obj);
}
function getStyleValue(themeMapping, transform, propValueFinal, userValue = propValueFinal) {
  let value;
  if (typeof themeMapping === 'function') {
    value = themeMapping(propValueFinal);
  } else if (Array.isArray(themeMapping)) {
    value = themeMapping[propValueFinal] || userValue;
  } else {
    value = getPath(themeMapping, propValueFinal) || userValue;
  }
  if (transform) {
    value = transform(value, userValue, themeMapping);
  }
  return value;
}
function style$2(options) {
  const {
    prop,
    cssProperty = options.prop,
    themeKey,
    transform
  } = options;

  // false positive
  // eslint-disable-next-line react/function-component-definition
  const fn = props => {
    if (props[prop] == null) {
      return null;
    }
    const propValue = props[prop];
    const theme = props.theme;
    const themeMapping = getPath(theme, themeKey) || {};
    const styleFromPropValue = propValueFinal => {
      let value = getStyleValue(themeMapping, transform, propValueFinal);
      if (propValueFinal === value && typeof propValueFinal === 'string') {
        // Haven't found value
        value = getStyleValue(themeMapping, transform, `${prop}${propValueFinal === 'default' ? '' : capitalize(propValueFinal)}`, propValueFinal);
      }
      if (cssProperty === false) {
        return value;
      }
      return {
        [cssProperty]: value
      };
    };
    return handleBreakpoints(props, propValue, styleFromPropValue);
  };
  fn.propTypes = process.env.NODE_ENV !== 'production' ? {
    [prop]: responsivePropType
  } : {};
  fn.filterProps = [prop];
  return fn;
}function memoize(fn) {
  const cache = {};
  return arg => {
    if (cache[arg] === undefined) {
      cache[arg] = fn(arg);
    }
    return cache[arg];
  };
}const properties = {
  m: 'margin',
  p: 'padding'
};
const directions = {
  t: 'Top',
  r: 'Right',
  b: 'Bottom',
  l: 'Left',
  x: ['Left', 'Right'],
  y: ['Top', 'Bottom']
};
const aliases = {
  marginX: 'mx',
  marginY: 'my',
  paddingX: 'px',
  paddingY: 'py'
};

// memoize() impact:
// From 300,000 ops/sec
// To 350,000 ops/sec
const getCssProperties = memoize(prop => {
  // It's not a shorthand notation.
  if (prop.length > 2) {
    if (aliases[prop]) {
      prop = aliases[prop];
    } else {
      return [prop];
    }
  }
  const [a, b] = prop.split('');
  const property = properties[a];
  const direction = directions[b] || '';
  return Array.isArray(direction) ? direction.map(dir => property + dir) : [property + direction];
});
const marginKeys = ['m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my', 'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY', 'marginInline', 'marginInlineStart', 'marginInlineEnd', 'marginBlock', 'marginBlockStart', 'marginBlockEnd'];
const paddingKeys = ['p', 'pt', 'pr', 'pb', 'pl', 'px', 'py', 'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'paddingX', 'paddingY', 'paddingInline', 'paddingInlineStart', 'paddingInlineEnd', 'paddingBlock', 'paddingBlockStart', 'paddingBlockEnd'];
const spacingKeys = [...marginKeys, ...paddingKeys];
function createUnaryUnit(theme, themeKey, defaultValue, propName) {
  const themeSpacing = getPath(theme, themeKey, true) ?? defaultValue;
  if (typeof themeSpacing === 'number' || typeof themeSpacing === 'string') {
    return val => {
      if (typeof val === 'string') {
        return val;
      }
      if (process.env.NODE_ENV !== 'production') {
        if (typeof val !== 'number') {
          console.error(`MUI: Expected ${propName} argument to be a number or a string, got ${val}.`);
        }
      }
      if (typeof themeSpacing === 'string') {
        if (themeSpacing.startsWith('var(') && val === 0) {
          return 0;
        }
        if (themeSpacing.startsWith('var(') && val === 1) {
          return themeSpacing;
        }
        return `calc(${val} * ${themeSpacing})`;
      }
      return themeSpacing * val;
    };
  }
  if (Array.isArray(themeSpacing)) {
    return val => {
      if (typeof val === 'string') {
        return val;
      }
      const abs = Math.abs(val);
      if (process.env.NODE_ENV !== 'production') {
        if (!Number.isInteger(abs)) {
          console.error([`MUI: The \`theme.${themeKey}\` array type cannot be combined with non integer values.` + `You should either use an integer value that can be used as index, or define the \`theme.${themeKey}\` as a number.`].join('\n'));
        } else if (abs > themeSpacing.length - 1) {
          console.error([`MUI: The value provided (${abs}) overflows.`, `The supported values are: ${JSON.stringify(themeSpacing)}.`, `${abs} > ${themeSpacing.length - 1}, you need to add the missing values.`].join('\n'));
        }
      }
      const transformed = themeSpacing[abs];
      if (val >= 0) {
        return transformed;
      }
      if (typeof transformed === 'number') {
        return -transformed;
      }
      if (typeof transformed === 'string' && transformed.startsWith('var(')) {
        return `calc(-1 * ${transformed})`;
      }
      return `-${transformed}`;
    };
  }
  if (typeof themeSpacing === 'function') {
    return themeSpacing;
  }
  if (process.env.NODE_ENV !== 'production') {
    console.error([`MUI: The \`theme.${themeKey}\` value (${themeSpacing}) is invalid.`, 'It should be a number, an array or a function.'].join('\n'));
  }
  return () => undefined;
}
function createUnarySpacing(theme) {
  return createUnaryUnit(theme, 'spacing', 8, 'spacing');
}
function getValue(transformer, propValue) {
  if (typeof propValue === 'string' || propValue == null) {
    return propValue;
  }
  return transformer(propValue);
}
function getStyleFromPropValue(cssProperties, transformer) {
  return propValue => cssProperties.reduce((acc, cssProperty) => {
    acc[cssProperty] = getValue(transformer, propValue);
    return acc;
  }, {});
}
function resolveCssProperty(props, keys, prop, transformer) {
  // Using a hash computation over an array iteration could be faster, but with only 28 items,
  // it's doesn't worth the bundle size.
  if (!keys.includes(prop)) {
    return null;
  }
  const cssProperties = getCssProperties(prop);
  const styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
  const propValue = props[prop];
  return handleBreakpoints(props, propValue, styleFromPropValue);
}
function style$1(props, keys) {
  const transformer = createUnarySpacing(props.theme);
  return Object.keys(props).map(prop => resolveCssProperty(props, keys, prop, transformer)).reduce(merge, {});
}
function margin(props) {
  return style$1(props, marginKeys);
}
margin.propTypes = process.env.NODE_ENV !== 'production' ? marginKeys.reduce((obj, key) => {
  obj[key] = responsivePropType;
  return obj;
}, {}) : {};
margin.filterProps = marginKeys;
function padding(props) {
  return style$1(props, paddingKeys);
}
padding.propTypes = process.env.NODE_ENV !== 'production' ? paddingKeys.reduce((obj, key) => {
  obj[key] = responsivePropType;
  return obj;
}, {}) : {};
padding.filterProps = paddingKeys;
process.env.NODE_ENV !== 'production' ? spacingKeys.reduce((obj, key) => {
  obj[key] = responsivePropType;
  return obj;
}, {}) : {};// The different signatures imply different meaning for their arguments that can't be expressed structurally.
// We express the difference with variable names.

function createSpacing(spacingInput = 8,
// Material Design layouts are visually balanced. Most measurements align to an 8dp grid, which aligns both spacing and the overall layout.
// Smaller components, such as icons, can align to a 4dp grid.
// https://m2.material.io/design/layout/understanding-layout.html
transform = createUnarySpacing({
  spacing: spacingInput
})) {
  // Already transformed.
  if (spacingInput.mui) {
    return spacingInput;
  }
  const spacing = (...argsInput) => {
    if (process.env.NODE_ENV !== 'production') {
      if (!(argsInput.length <= 4)) {
        console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${argsInput.length}`);
      }
    }
    const args = argsInput.length === 0 ? [1] : argsInput;
    return args.map(argument => {
      const output = transform(argument);
      return typeof output === 'number' ? `${output}px` : output;
    }).join(' ');
  };
  spacing.mui = true;
  return spacing;
}function compose(...styles) {
  const handlers = styles.reduce((acc, style) => {
    style.filterProps.forEach(prop => {
      acc[prop] = style;
    });
    return acc;
  }, {});

  // false positive
  // eslint-disable-next-line react/function-component-definition
  const fn = props => {
    return Object.keys(props).reduce((acc, prop) => {
      if (handlers[prop]) {
        return merge(acc, handlers[prop](props));
      }
      return acc;
    }, {});
  };
  fn.propTypes = process.env.NODE_ENV !== 'production' ? styles.reduce((acc, style) => Object.assign(acc, style.propTypes), {}) : {};
  fn.filterProps = styles.reduce((acc, style) => acc.concat(style.filterProps), []);
  return fn;
}function borderTransform(value) {
  if (typeof value !== 'number') {
    return value;
  }
  return `${value}px solid`;
}
function createBorderStyle(prop, transform) {
  return style$2({
    prop,
    themeKey: 'borders',
    transform
  });
}
const border = createBorderStyle('border', borderTransform);
const borderTop = createBorderStyle('borderTop', borderTransform);
const borderRight = createBorderStyle('borderRight', borderTransform);
const borderBottom = createBorderStyle('borderBottom', borderTransform);
const borderLeft = createBorderStyle('borderLeft', borderTransform);
const borderColor = createBorderStyle('borderColor');
const borderTopColor = createBorderStyle('borderTopColor');
const borderRightColor = createBorderStyle('borderRightColor');
const borderBottomColor = createBorderStyle('borderBottomColor');
const borderLeftColor = createBorderStyle('borderLeftColor');
const outline = createBorderStyle('outline', borderTransform);
const outlineColor = createBorderStyle('outlineColor');

// false positive
// eslint-disable-next-line react/function-component-definition
const borderRadius = props => {
  if (props.borderRadius !== undefined && props.borderRadius !== null) {
    const transformer = createUnaryUnit(props.theme, 'shape.borderRadius', 4, 'borderRadius');
    const styleFromPropValue = propValue => ({
      borderRadius: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.borderRadius, styleFromPropValue);
  }
  return null;
};
borderRadius.propTypes = process.env.NODE_ENV !== 'production' ? {
  borderRadius: responsivePropType
} : {};
borderRadius.filterProps = ['borderRadius'];
compose(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor, borderRadius, outline, outlineColor);// false positive
// eslint-disable-next-line react/function-component-definition
const gap = props => {
  if (props.gap !== undefined && props.gap !== null) {
    const transformer = createUnaryUnit(props.theme, 'spacing', 8, 'gap');
    const styleFromPropValue = propValue => ({
      gap: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.gap, styleFromPropValue);
  }
  return null;
};
gap.propTypes = process.env.NODE_ENV !== 'production' ? {
  gap: responsivePropType
} : {};
gap.filterProps = ['gap'];

// false positive
// eslint-disable-next-line react/function-component-definition
const columnGap = props => {
  if (props.columnGap !== undefined && props.columnGap !== null) {
    const transformer = createUnaryUnit(props.theme, 'spacing', 8, 'columnGap');
    const styleFromPropValue = propValue => ({
      columnGap: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.columnGap, styleFromPropValue);
  }
  return null;
};
columnGap.propTypes = process.env.NODE_ENV !== 'production' ? {
  columnGap: responsivePropType
} : {};
columnGap.filterProps = ['columnGap'];

// false positive
// eslint-disable-next-line react/function-component-definition
const rowGap = props => {
  if (props.rowGap !== undefined && props.rowGap !== null) {
    const transformer = createUnaryUnit(props.theme, 'spacing', 8, 'rowGap');
    const styleFromPropValue = propValue => ({
      rowGap: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.rowGap, styleFromPropValue);
  }
  return null;
};
rowGap.propTypes = process.env.NODE_ENV !== 'production' ? {
  rowGap: responsivePropType
} : {};
rowGap.filterProps = ['rowGap'];
const gridColumn = style$2({
  prop: 'gridColumn'
});
const gridRow = style$2({
  prop: 'gridRow'
});
const gridAutoFlow = style$2({
  prop: 'gridAutoFlow'
});
const gridAutoColumns = style$2({
  prop: 'gridAutoColumns'
});
const gridAutoRows = style$2({
  prop: 'gridAutoRows'
});
const gridTemplateColumns = style$2({
  prop: 'gridTemplateColumns'
});
const gridTemplateRows = style$2({
  prop: 'gridTemplateRows'
});
const gridTemplateAreas = style$2({
  prop: 'gridTemplateAreas'
});
const gridArea = style$2({
  prop: 'gridArea'
});
compose(gap, columnGap, rowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);function paletteTransform(value, userValue) {
  if (userValue === 'grey') {
    return userValue;
  }
  return value;
}
const color = style$2({
  prop: 'color',
  themeKey: 'palette',
  transform: paletteTransform
});
const bgcolor = style$2({
  prop: 'bgcolor',
  cssProperty: 'backgroundColor',
  themeKey: 'palette',
  transform: paletteTransform
});
const backgroundColor = style$2({
  prop: 'backgroundColor',
  themeKey: 'palette',
  transform: paletteTransform
});
compose(color, bgcolor, backgroundColor);function sizingTransform(value) {
  return value <= 1 && value !== 0 ? `${value * 100}%` : value;
}
const width = style$2({
  prop: 'width',
  transform: sizingTransform
});
const maxWidth = props => {
  if (props.maxWidth !== undefined && props.maxWidth !== null) {
    const styleFromPropValue = propValue => {
      const breakpoint = props.theme?.breakpoints?.values?.[propValue] || values$1[propValue];
      if (!breakpoint) {
        return {
          maxWidth: sizingTransform(propValue)
        };
      }
      if (props.theme?.breakpoints?.unit !== 'px') {
        return {
          maxWidth: `${breakpoint}${props.theme.breakpoints.unit}`
        };
      }
      return {
        maxWidth: breakpoint
      };
    };
    return handleBreakpoints(props, props.maxWidth, styleFromPropValue);
  }
  return null;
};
maxWidth.filterProps = ['maxWidth'];
const minWidth = style$2({
  prop: 'minWidth',
  transform: sizingTransform
});
const height = style$2({
  prop: 'height',
  transform: sizingTransform
});
const maxHeight = style$2({
  prop: 'maxHeight',
  transform: sizingTransform
});
const minHeight = style$2({
  prop: 'minHeight',
  transform: sizingTransform
});
style$2({
  prop: 'size',
  cssProperty: 'width',
  transform: sizingTransform
});
style$2({
  prop: 'size',
  cssProperty: 'height',
  transform: sizingTransform
});
const boxSizing = style$2({
  prop: 'boxSizing'
});
compose(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);const defaultSxConfig = {
  // borders
  border: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderTop: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderRight: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderBottom: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderLeft: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderColor: {
    themeKey: 'palette'
  },
  borderTopColor: {
    themeKey: 'palette'
  },
  borderRightColor: {
    themeKey: 'palette'
  },
  borderBottomColor: {
    themeKey: 'palette'
  },
  borderLeftColor: {
    themeKey: 'palette'
  },
  outline: {
    themeKey: 'borders',
    transform: borderTransform
  },
  outlineColor: {
    themeKey: 'palette'
  },
  borderRadius: {
    themeKey: 'shape.borderRadius',
    style: borderRadius
  },
  // palette
  color: {
    themeKey: 'palette',
    transform: paletteTransform
  },
  bgcolor: {
    themeKey: 'palette',
    cssProperty: 'backgroundColor',
    transform: paletteTransform
  },
  backgroundColor: {
    themeKey: 'palette',
    transform: paletteTransform
  },
  // spacing
  p: {
    style: padding
  },
  pt: {
    style: padding
  },
  pr: {
    style: padding
  },
  pb: {
    style: padding
  },
  pl: {
    style: padding
  },
  px: {
    style: padding
  },
  py: {
    style: padding
  },
  padding: {
    style: padding
  },
  paddingTop: {
    style: padding
  },
  paddingRight: {
    style: padding
  },
  paddingBottom: {
    style: padding
  },
  paddingLeft: {
    style: padding
  },
  paddingX: {
    style: padding
  },
  paddingY: {
    style: padding
  },
  paddingInline: {
    style: padding
  },
  paddingInlineStart: {
    style: padding
  },
  paddingInlineEnd: {
    style: padding
  },
  paddingBlock: {
    style: padding
  },
  paddingBlockStart: {
    style: padding
  },
  paddingBlockEnd: {
    style: padding
  },
  m: {
    style: margin
  },
  mt: {
    style: margin
  },
  mr: {
    style: margin
  },
  mb: {
    style: margin
  },
  ml: {
    style: margin
  },
  mx: {
    style: margin
  },
  my: {
    style: margin
  },
  margin: {
    style: margin
  },
  marginTop: {
    style: margin
  },
  marginRight: {
    style: margin
  },
  marginBottom: {
    style: margin
  },
  marginLeft: {
    style: margin
  },
  marginX: {
    style: margin
  },
  marginY: {
    style: margin
  },
  marginInline: {
    style: margin
  },
  marginInlineStart: {
    style: margin
  },
  marginInlineEnd: {
    style: margin
  },
  marginBlock: {
    style: margin
  },
  marginBlockStart: {
    style: margin
  },
  marginBlockEnd: {
    style: margin
  },
  // display
  displayPrint: {
    cssProperty: false,
    transform: value => ({
      '@media print': {
        display: value
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: gap
  },
  rowGap: {
    style: rowGap
  },
  columnGap: {
    style: columnGap
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: 'zIndex'
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: 'shadows'
  },
  // sizing
  width: {
    transform: sizingTransform
  },
  maxWidth: {
    style: maxWidth
  },
  minWidth: {
    transform: sizingTransform
  },
  height: {
    transform: sizingTransform
  },
  maxHeight: {
    transform: sizingTransform
  },
  minHeight: {
    transform: sizingTransform
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: 'font'
  },
  fontFamily: {
    themeKey: 'typography'
  },
  fontSize: {
    themeKey: 'typography'
  },
  fontStyle: {
    themeKey: 'typography'
  },
  fontWeight: {
    themeKey: 'typography'
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: false,
    themeKey: 'typography'
  }
};function objectsHaveSameKeys(...objects) {
  const allKeys = objects.reduce((keys, object) => keys.concat(Object.keys(object)), []);
  const union = new Set(allKeys);
  return objects.every(object => union.size === Object.keys(object).length);
}
function callIfFn(maybeFn, arg) {
  return typeof maybeFn === 'function' ? maybeFn(arg) : maybeFn;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
function unstable_createStyleFunctionSx() {
  function getThemeValue(prop, val, theme, config) {
    const props = {
      [prop]: val,
      theme
    };
    const options = config[prop];
    if (!options) {
      return {
        [prop]: val
      };
    }
    const {
      cssProperty = prop,
      themeKey,
      transform,
      style
    } = options;
    if (val == null) {
      return null;
    }

    // TODO v6: remove, see https://github.com/mui/material-ui/pull/38123
    if (themeKey === 'typography' && val === 'inherit') {
      return {
        [prop]: val
      };
    }
    const themeMapping = getPath(theme, themeKey) || {};
    if (style) {
      return style(props);
    }
    const styleFromPropValue = propValueFinal => {
      let value = getStyleValue(themeMapping, transform, propValueFinal);
      if (propValueFinal === value && typeof propValueFinal === 'string') {
        // Haven't found value
        value = getStyleValue(themeMapping, transform, `${prop}${propValueFinal === 'default' ? '' : capitalize(propValueFinal)}`, propValueFinal);
      }
      if (cssProperty === false) {
        return value;
      }
      return {
        [cssProperty]: value
      };
    };
    return handleBreakpoints(props, val, styleFromPropValue);
  }
  function styleFunctionSx(props) {
    const {
      sx,
      theme = {}
    } = props || {};
    if (!sx) {
      return null; // Emotion & styled-components will neglect null
    }
    const config = theme.unstable_sxConfig ?? defaultSxConfig;

    /*
     * Receive `sxInput` as object or callback
     * and then recursively check keys & values to create media query object styles.
     * (the result will be used in `styled`)
     */
    function traverse(sxInput) {
      let sxObject = sxInput;
      if (typeof sxInput === 'function') {
        sxObject = sxInput(theme);
      } else if (typeof sxInput !== 'object') {
        // value
        return sxInput;
      }
      if (!sxObject) {
        return null;
      }
      const emptyBreakpoints = createEmptyBreakpointObject(theme.breakpoints);
      const breakpointsKeys = Object.keys(emptyBreakpoints);
      let css = emptyBreakpoints;
      Object.keys(sxObject).forEach(styleKey => {
        const value = callIfFn(sxObject[styleKey], theme);
        if (value !== null && value !== undefined) {
          if (typeof value === 'object') {
            if (config[styleKey]) {
              css = merge(css, getThemeValue(styleKey, value, theme, config));
            } else {
              const breakpointsValues = handleBreakpoints({
                theme
              }, value, x => ({
                [styleKey]: x
              }));
              if (objectsHaveSameKeys(breakpointsValues, value)) {
                css[styleKey] = styleFunctionSx({
                  sx: value,
                  theme
                });
              } else {
                css = merge(css, breakpointsValues);
              }
            }
          } else {
            css = merge(css, getThemeValue(styleKey, value, theme, config));
          }
        }
      });
      return sortContainerQueries(theme, removeUnusedBreakpoints(breakpointsKeys, css));
    }
    return Array.isArray(sx) ? sx.map(traverse) : traverse(sx);
  }
  return styleFunctionSx;
}
const styleFunctionSx = unstable_createStyleFunctionSx();
styleFunctionSx.filterProps = ['sx'];/**
 * A universal utility to style components with multiple color modes. Always use it from the theme object.
 * It works with:
 *  - [Basic theme](https://mui.com/material-ui/customization/dark-mode/)
 *  - [CSS theme variables](https://mui.com/material-ui/customization/css-theme-variables/overview/)
 *  - Zero-runtime engine
 *
 * Tips: Use an array over object spread and place `theme.applyStyles()` last.
 *
 * With the styled function:
 * ✅ [{ background: '#e5e5e5' }, theme.applyStyles('dark', { background: '#1c1c1c' })]
 * 🚫 { background: '#e5e5e5', ...theme.applyStyles('dark', { background: '#1c1c1c' })}
 *
 * With the sx prop:
 * ✅ [{ background: '#e5e5e5' }, theme => theme.applyStyles('dark', { background: '#1c1c1c' })]
 * 🚫 { background: '#e5e5e5', ...theme => theme.applyStyles('dark', { background: '#1c1c1c' })}
 *
 * @example
 * 1. using with `styled`:
 * ```jsx
 *   const Component = styled('div')(({ theme }) => [
 *     { background: '#e5e5e5' },
 *     theme.applyStyles('dark', {
 *       background: '#1c1c1c',
 *       color: '#fff',
 *     }),
 *   ]);
 * ```
 *
 * @example
 * 2. using with `sx` prop:
 * ```jsx
 *   <Box sx={[
 *     { background: '#e5e5e5' },
 *     theme => theme.applyStyles('dark', {
 *        background: '#1c1c1c',
 *        color: '#fff',
 *      }),
 *     ]}
 *   />
 * ```
 *
 * @example
 * 3. theming a component:
 * ```jsx
 *   extendTheme({
 *     components: {
 *       MuiButton: {
 *         styleOverrides: {
 *           root: ({ theme }) => [
 *             { background: '#e5e5e5' },
 *             theme.applyStyles('dark', {
 *               background: '#1c1c1c',
 *               color: '#fff',
 *             }),
 *           ],
 *         },
 *       }
 *     }
 *   })
 *```
 */
function applyStyles$2(key, styles) {
  // @ts-expect-error this is 'any' type
  const theme = this;
  if (theme.vars) {
    if (!theme.colorSchemes?.[key] || typeof theme.getColorSchemeSelector !== 'function') {
      return {};
    }
    // If CssVarsProvider is used as a provider, returns '*:where({selector}) &'
    let selector = theme.getColorSchemeSelector(key);
    if (selector === '&') {
      return styles;
    }
    if (selector.includes('data-') || selector.includes('.')) {
      // '*' is required as a workaround for Emotion issue (https://github.com/emotion-js/emotion/issues/2836)
      selector = `*:where(${selector.replace(/\s*&$/, '')}) &`;
    }
    return {
      [selector]: styles
    };
  }
  if (theme.palette.mode === key) {
    return styles;
  }
  return {};
}function createTheme$1(options = {}, ...args) {
  const {
    breakpoints: breakpointsInput = {},
    palette: paletteInput = {},
    spacing: spacingInput,
    shape: shapeInput = {},
    ...other
  } = options;
  const breakpoints = createBreakpoints(breakpointsInput);
  const spacing = createSpacing(spacingInput);
  let muiTheme = deepmerge({
    breakpoints,
    direction: 'ltr',
    components: {},
    // Inject component definitions.
    palette: {
      mode: 'light',
      ...paletteInput
    },
    spacing,
    shape: {
      ...shape,
      ...shapeInput
    }
  }, other);
  muiTheme = cssContainerQueries(muiTheme);
  muiTheme.applyStyles = applyStyles$2;
  muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
  muiTheme.unstable_sxConfig = {
    ...defaultSxConfig,
    ...other?.unstable_sxConfig
  };
  muiTheme.unstable_sx = function sx(props) {
    return styleFunctionSx({
      sx: props,
      theme: this
    });
  };
  return muiTheme;
}function isObjectEmpty$1(obj) {
  return Object.keys(obj).length === 0;
}
function useTheme$2(defaultTheme = null) {
  const contextTheme = React.useContext(ThemeContext);
  return !contextTheme || isObjectEmpty$1(contextTheme) ? defaultTheme : contextTheme;
}const systemDefaultTheme$1 = createTheme$1();
function useTheme$1(defaultTheme = systemDefaultTheme$1) {
  return useTheme$2(defaultTheme);
}const splitProps = props => {
  const result = {
    systemProps: {},
    otherProps: {}
  };
  const config = props?.theme?.unstable_sxConfig ?? defaultSxConfig;
  Object.keys(props).forEach(prop => {
    if (config[prop]) {
      result.systemProps[prop] = props[prop];
    } else {
      result.otherProps[prop] = props[prop];
    }
  });
  return result;
};
function extendSxProp$1(props) {
  const {
    sx: inSx,
    ...other
  } = props;
  const {
    systemProps,
    otherProps
  } = splitProps(other);
  let finalSx;
  if (Array.isArray(inSx)) {
    finalSx = [systemProps, ...inSx];
  } else if (typeof inSx === 'function') {
    finalSx = (...args) => {
      const result = inSx(...args);
      if (!isPlainObject(result)) {
        return systemProps;
      }
      return {
        ...systemProps,
        ...result
      };
    };
  } else {
    finalSx = {
      ...systemProps,
      ...inSx
    };
  }
  return {
    ...otherProps,
    sx: finalSx
  };
}const defaultGenerator = componentName => componentName;
const createClassNameGenerator = () => {
  let generate = defaultGenerator;
  return {
    configure(generator) {
      generate = generator;
    },
    generate(componentName) {
      return generate(componentName);
    },
    reset() {
      generate = defaultGenerator;
    }
  };
};
const ClassNameGenerator = createClassNameGenerator();function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}function createBox(options = {}) {
  const {
    themeId,
    defaultTheme,
    defaultClassName = 'MuiBox-root',
    generateClassName
  } = options;
  const BoxRoot = styled$2('div', {
    shouldForwardProp: prop => prop !== 'theme' && prop !== 'sx' && prop !== 'as'
  })(styleFunctionSx);
  const Box = /*#__PURE__*/React.forwardRef(function Box(inProps, ref) {
    const theme = useTheme$1(defaultTheme);
    const {
      className,
      component = 'div',
      ...other
    } = extendSxProp$1(inProps);
    return /*#__PURE__*/jsx$1(BoxRoot, {
      as: component,
      ref: ref,
      className: clsx(className, generateClassName ? generateClassName(defaultClassName) : defaultClassName),
      theme: themeId ? theme[themeId] || theme : theme,
      ...other
    });
  });
  return Box;
}const globalStateClasses = {
  active: 'active',
  checked: 'checked',
  completed: 'completed',
  disabled: 'disabled',
  error: 'error',
  expanded: 'expanded',
  focused: 'focused',
  focusVisible: 'focusVisible',
  open: 'open',
  readOnly: 'readOnly',
  required: 'required',
  selected: 'selected'
};
function generateUtilityClass(componentName, slot, globalStatePrefix = 'Mui') {
  const globalStateClass = globalStateClasses[slot];
  return globalStateClass ? `${globalStatePrefix}-${globalStateClass}` : `${ClassNameGenerator.generate(componentName)}-${slot}`;
}function generateUtilityClasses(componentName, slots, globalStatePrefix = 'Mui') {
  const result = {};
  slots.forEach(slot => {
    result[slot] = generateUtilityClass(componentName, slot, globalStatePrefix);
  });
  return result;
}function getFunctionComponentName(Component, fallback = '') {
  return Component.displayName || Component.name || fallback;
}
function getWrappedName(outerType, innerType, wrapperName) {
  const functionName = getFunctionComponentName(innerType);
  return outerType.displayName || (functionName !== '' ? `${wrapperName}(${functionName})` : wrapperName);
}

/**
 * cherry-pick from
 * https://github.com/facebook/react/blob/769b1f270e1251d9dbdce0fcbd9e92e502d059b8/packages/shared/getComponentName.js
 * originally forked from recompose/getDisplayName
 */
function getDisplayName(Component) {
  if (Component == null) {
    return undefined;
  }
  if (typeof Component === 'string') {
    return Component;
  }
  if (typeof Component === 'function') {
    return getFunctionComponentName(Component, 'Component');
  }

  // TypeScript can't have components as objects but they exist in the form of `memo` or `Suspense`
  if (typeof Component === 'object') {
    switch (Component.$$typeof) {
      case reactIsExports.ForwardRef:
        return getWrappedName(Component, Component.render, 'ForwardRef');
      case reactIsExports.Memo:
        return getWrappedName(Component, Component.type, 'memo');
      default:
        return undefined;
    }
  }
  return undefined;
}function preprocessStyles(input) {
  const {
    variants,
    ...style
  } = input;
  const result = {
    variants,
    style: internal_serializeStyles(style),
    isProcessed: true
  };

  // Not supported on styled-components
  if (result.style === style) {
    return result;
  }
  if (variants) {
    variants.forEach(variant => {
      if (typeof variant.style !== 'function') {
        variant.style = internal_serializeStyles(variant.style);
      }
    });
  }
  return result;
}/* eslint-disable no-underscore-dangle */
/* eslint-disable no-labels */
/* eslint-disable no-lone-blocks */

const systemDefaultTheme = createTheme$1();

// Update /system/styled/#api in case if this changes
function shouldForwardProp(prop) {
  return prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as';
}
function defaultOverridesResolver(slot) {
  if (!slot) {
    return null;
  }
  return (_props, styles) => styles[slot];
}
function attachTheme(props, themeId, defaultTheme) {
  props.theme = isObjectEmpty(props.theme) ? defaultTheme : props.theme[themeId] || props.theme;
}
function processStyle(props, style) {
  /*
   * Style types:
   *  - null/undefined
   *  - string
   *  - CSS style object: { [cssKey]: [cssValue], variants }
   *  - Processed style object: { style, variants, isProcessed: true }
   *  - Array of any of the above
   */

  const resolvedStyle = typeof style === 'function' ? style(props) : style;
  if (Array.isArray(resolvedStyle)) {
    return resolvedStyle.flatMap(subStyle => processStyle(props, subStyle));
  }
  if (Array.isArray(resolvedStyle?.variants)) {
    let rootStyle;
    if (resolvedStyle.isProcessed) {
      rootStyle = resolvedStyle.style;
    } else {
      const {
        variants,
        ...otherStyles
      } = resolvedStyle;
      rootStyle = otherStyles;
    }
    return processStyleVariants(props, resolvedStyle.variants, [rootStyle]);
  }
  if (resolvedStyle?.isProcessed) {
    return resolvedStyle.style;
  }
  return resolvedStyle;
}
function processStyleVariants(props, variants, results = []) {
  let mergedState; // We might not need it, initialized lazily

  variantLoop: for (let i = 0; i < variants.length; i += 1) {
    const variant = variants[i];
    if (typeof variant.props === 'function') {
      mergedState ??= {
        ...props,
        ...props.ownerState,
        ownerState: props.ownerState
      };
      if (!variant.props(mergedState)) {
        continue;
      }
    } else {
      for (const key in variant.props) {
        if (props[key] !== variant.props[key] && props.ownerState?.[key] !== variant.props[key]) {
          continue variantLoop;
        }
      }
    }
    if (typeof variant.style === 'function') {
      mergedState ??= {
        ...props,
        ...props.ownerState,
        ownerState: props.ownerState
      };
      results.push(variant.style(mergedState));
    } else {
      results.push(variant.style);
    }
  }
  return results;
}
function createStyled(input = {}) {
  const {
    themeId,
    defaultTheme = systemDefaultTheme,
    rootShouldForwardProp = shouldForwardProp,
    slotShouldForwardProp = shouldForwardProp
  } = input;
  function styleAttachTheme(props) {
    attachTheme(props, themeId, defaultTheme);
  }
  const styled = (tag, inputOptions = {}) => {
    // If `tag` is already a styled component, filter out the `sx` style function
    // to prevent unnecessary styles generated by the composite components.
    internal_mutateStyles(tag, styles => styles.filter(style => style !== styleFunctionSx));
    const {
      name: componentName,
      slot: componentSlot,
      skipVariantsResolver: inputSkipVariantsResolver,
      skipSx: inputSkipSx,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver = defaultOverridesResolver(lowercaseFirstLetter(componentSlot)),
      ...options
    } = inputOptions;

    // if skipVariantsResolver option is defined, take the value, otherwise, true for root and false for other slots.
    const skipVariantsResolver = inputSkipVariantsResolver !== undefined ? inputSkipVariantsResolver :
    // TODO v6: remove `Root` in the next major release
    // For more details: https://github.com/mui/material-ui/pull/37908
    componentSlot && componentSlot !== 'Root' && componentSlot !== 'root' || false;
    const skipSx = inputSkipSx || false;
    let shouldForwardPropOption = shouldForwardProp;

    // TODO v6: remove `Root` in the next major release
    // For more details: https://github.com/mui/material-ui/pull/37908
    if (componentSlot === 'Root' || componentSlot === 'root') {
      shouldForwardPropOption = rootShouldForwardProp;
    } else if (componentSlot) {
      // any other slot specified
      shouldForwardPropOption = slotShouldForwardProp;
    } else if (isStringTag(tag)) {
      // for string (html) tag, preserve the behavior in emotion & styled-components.
      shouldForwardPropOption = undefined;
    }
    const defaultStyledResolver = styled$2(tag, {
      shouldForwardProp: shouldForwardPropOption,
      label: generateStyledLabel(componentName, componentSlot),
      ...options
    });
    const transformStyle = style => {
      // On the server Emotion doesn't use React.forwardRef for creating components, so the created
      // component stays as a function. This condition makes sure that we do not interpolate functions
      // which are basically components used as a selectors.
      if (typeof style === 'function' && style.__emotion_real !== style) {
        return function styleFunctionProcessor(props) {
          return processStyle(props, style);
        };
      }
      if (isPlainObject(style)) {
        const serialized = preprocessStyles(style);
        if (!serialized.variants) {
          return serialized.style;
        }
        return function styleObjectProcessor(props) {
          return processStyle(props, serialized);
        };
      }
      return style;
    };
    const muiStyledResolver = (...expressionsInput) => {
      const expressionsHead = [];
      const expressionsBody = expressionsInput.map(transformStyle);
      const expressionsTail = [];

      // Preprocess `props` to set the scoped theme value.
      // This must run before any other expression.
      expressionsHead.push(styleAttachTheme);
      if (componentName && overridesResolver) {
        expressionsTail.push(function styleThemeOverrides(props) {
          const theme = props.theme;
          const styleOverrides = theme.components?.[componentName]?.styleOverrides;
          if (!styleOverrides) {
            return null;
          }
          const resolvedStyleOverrides = {};

          // TODO: v7 remove iteration and use `resolveStyleArg(styleOverrides[slot])` directly
          // eslint-disable-next-line guard-for-in
          for (const slotKey in styleOverrides) {
            resolvedStyleOverrides[slotKey] = processStyle(props, styleOverrides[slotKey]);
          }
          return overridesResolver(props, resolvedStyleOverrides);
        });
      }
      if (componentName && !skipVariantsResolver) {
        expressionsTail.push(function styleThemeVariants(props) {
          const theme = props.theme;
          const themeVariants = theme?.components?.[componentName]?.variants;
          if (!themeVariants) {
            return null;
          }
          return processStyleVariants(props, themeVariants);
        });
      }
      if (!skipSx) {
        expressionsTail.push(styleFunctionSx);
      }

      // This function can be called as a tagged template, so the first argument would contain
      // CSS `string[]` values.
      if (Array.isArray(expressionsBody[0])) {
        const inputStrings = expressionsBody.shift();

        // We need to add placeholders in the tagged template for the custom functions we have
        // possibly added (attachTheme, overrides, variants, and sx).
        const placeholdersHead = new Array(expressionsHead.length).fill('');
        const placeholdersTail = new Array(expressionsTail.length).fill('');
        let outputStrings;
        // prettier-ignore
        {
          outputStrings = [...placeholdersHead, ...inputStrings, ...placeholdersTail];
          outputStrings.raw = [...placeholdersHead, ...inputStrings.raw, ...placeholdersTail];
        }

        // The only case where we put something before `attachTheme`
        expressionsHead.unshift(outputStrings);
      }
      const expressions = [...expressionsHead, ...expressionsBody, ...expressionsTail];
      const Component = defaultStyledResolver(...expressions);
      if (tag.muiName) {
        Component.muiName = tag.muiName;
      }
      if (process.env.NODE_ENV !== 'production') {
        Component.displayName = generateDisplayName(componentName, componentSlot, tag);
      }
      return Component;
    };
    if (defaultStyledResolver.withConfig) {
      muiStyledResolver.withConfig = defaultStyledResolver.withConfig;
    }
    return muiStyledResolver;
  };
  return styled;
}
function generateDisplayName(componentName, componentSlot, tag) {
  if (componentName) {
    return `${componentName}${capitalize(componentSlot || '')}`;
  }
  return `Styled(${getDisplayName(tag)})`;
}
function generateStyledLabel(componentName, componentSlot) {
  let label;
  if (process.env.NODE_ENV !== 'production') {
    if (componentName) {
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      label = `${componentName}-${lowercaseFirstLetter(componentSlot || 'Root')}`;
    }
  }
  return label;
}
function isObjectEmpty(object) {
  // eslint-disable-next-line
  for (const _ in object) {
    return false;
  }
  return true;
}

// https://github.com/emotion-js/emotion/blob/26ded6109fcd8ca9875cc2ce4564fee678a3f3c5/packages/styled/src/utils.js#L40
function isStringTag(tag) {
  return typeof tag === 'string' &&
  // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96;
}
function lowercaseFirstLetter(string) {
  if (!string) {
    return string;
  }
  return string.charAt(0).toLowerCase() + string.slice(1);
}const styled$1 = createStyled();/**
 * Add keys, values of `defaultProps` that does not exist in `props`
 * @param defaultProps
 * @param props
 * @returns resolved props
 */
function resolveProps(defaultProps, props) {
  const output = {
    ...props
  };
  for (const key in defaultProps) {
    if (Object.prototype.hasOwnProperty.call(defaultProps, key)) {
      const propName = key;
      if (propName === 'components' || propName === 'slots') {
        output[propName] = {
          ...defaultProps[propName],
          ...output[propName]
        };
      } else if (propName === 'componentsProps' || propName === 'slotProps') {
        const defaultSlotProps = defaultProps[propName];
        const slotProps = props[propName];
        if (!slotProps) {
          output[propName] = defaultSlotProps || {};
        } else if (!defaultSlotProps) {
          output[propName] = slotProps;
        } else {
          output[propName] = {
            ...slotProps
          };
          for (const slotKey in defaultSlotProps) {
            if (Object.prototype.hasOwnProperty.call(defaultSlotProps, slotKey)) {
              const slotPropName = slotKey;
              output[propName][slotPropName] = resolveProps(defaultSlotProps[slotPropName], slotProps[slotPropName]);
            }
          }
        }
      } else if (output[propName] === undefined) {
        output[propName] = defaultProps[propName];
      }
    }
  }
  return output;
}function getThemeProps$1(params) {
  const {
    theme,
    name,
    props
  } = params;
  if (!theme || !theme.components || !theme.components[name] || !theme.components[name].defaultProps) {
    return props;
  }
  return resolveProps(theme.components[name].defaultProps, props);
}function useThemeProps({
  props,
  name,
  defaultTheme,
  themeId
}) {
  let theme = useTheme$1(defaultTheme);
  if (themeId) {
    theme = theme[themeId] || theme;
  }
  return getThemeProps$1({
    theme,
    name,
    props
  });
}/**
 * A version of `React.useLayoutEffect` that does not show a warning when server-side rendering.
 * This is useful for effects that are only needed for client-side rendering but not for SSR.
 *
 * Before you use this hook, make sure to read https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
 * and confirm it doesn't apply to your use-case.
 */
const useEnhancedEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;function clamp(val, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
  return Math.max(min, Math.min(val, max));
}/**
 * Returns a number whose value is limited to the given range.
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */
function clampWrapper(value, min = 0, max = 1) {
  if (process.env.NODE_ENV !== 'production') {
    if (value < min || value > max) {
      console.error(`MUI: The value provided ${value} is out of range [${min}, ${max}].`);
    }
  }
  return clamp(value, min, max);
}

/**
 * Converts a color from CSS hex format to CSS rgb format.
 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 * @returns {string} A CSS rgb color string
 */
function hexToRgb(color) {
  color = color.slice(1);
  const re = new RegExp(`.{1,${color.length >= 6 ? 2 : 1}}`, 'g');
  let colors = color.match(re);
  if (colors && colors[0].length === 1) {
    colors = colors.map(n => n + n);
  }
  if (process.env.NODE_ENV !== 'production') {
    if (color.length !== color.trim().length) {
      console.error(`MUI: The color: "${color}" is invalid. Make sure the color input doesn't contain leading/trailing space.`);
    }
  }
  return colors ? `rgb${colors.length === 4 ? 'a' : ''}(${colors.map((n, index) => {
    return index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1000) / 1000;
  }).join(', ')})` : '';
}

/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @returns {object} - A MUI color object: {type: string, values: number[]}
 */
function decomposeColor(color) {
  // Idempotent
  if (color.type) {
    return color;
  }
  if (color.charAt(0) === '#') {
    return decomposeColor(hexToRgb(color));
  }
  const marker = color.indexOf('(');
  const type = color.substring(0, marker);
  if (!['rgb', 'rgba', 'hsl', 'hsla', 'color'].includes(type)) {
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${color}\` color.\n` + 'The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().' : formatMuiErrorMessage(9, color));
  }
  let values = color.substring(marker + 1, color.length - 1);
  let colorSpace;
  if (type === 'color') {
    values = values.split(' ');
    colorSpace = values.shift();
    if (values.length === 4 && values[3].charAt(0) === '/') {
      values[3] = values[3].slice(1);
    }
    if (!['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].includes(colorSpace)) {
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${colorSpace}\` color space.\n` + 'The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.' : formatMuiErrorMessage(10, colorSpace));
    }
  } else {
    values = values.split(',');
  }
  values = values.map(value => parseFloat(value));
  return {
    type,
    values,
    colorSpace
  };
}

/**
 * Returns a channel created from the input color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @returns {string} - The channel for the color, that can be used in rgba or hsla colors
 */
const colorChannel = color => {
  const decomposedColor = decomposeColor(color);
  return decomposedColor.values.slice(0, 3).map((val, idx) => decomposedColor.type.includes('hsl') && idx !== 0 ? `${val}%` : val).join(' ');
};
const private_safeColorChannel = (color, warning) => {
  try {
    return colorChannel(color);
  } catch (error) {
    if (warning && process.env.NODE_ENV !== 'production') {
      console.warn(warning);
    }
    return color;
  }
};

/**
 * Converts a color object with type and values to a string.
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla', 'color'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */
function recomposeColor(color) {
  const {
    type,
    colorSpace
  } = color;
  let {
    values
  } = color;
  if (type.includes('rgb')) {
    // Only convert the first 3 values to int (i.e. not alpha)
    values = values.map((n, i) => i < 3 ? parseInt(n, 10) : n);
  } else if (type.includes('hsl')) {
    values[1] = `${values[1]}%`;
    values[2] = `${values[2]}%`;
  }
  if (type.includes('color')) {
    values = `${colorSpace} ${values.join(' ')}`;
  } else {
    values = `${values.join(', ')}`;
  }
  return `${type}(${values})`;
}

/**
 * Converts a color from hsl format to rgb format.
 * @param {string} color - HSL color values
 * @returns {string} rgb color values
 */
function hslToRgb(color) {
  color = decomposeColor(color);
  const {
    values
  } = color;
  const h = values[0];
  const s = values[1] / 100;
  const l = values[2] / 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  let type = 'rgb';
  const rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
  if (color.type === 'hsla') {
    type += 'a';
    rgb.push(values[3]);
  }
  return recomposeColor({
    type,
    values: rgb
  });
}
/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */
function getLuminance(color) {
  color = decomposeColor(color);
  let rgb = color.type === 'hsl' || color.type === 'hsla' ? decomposeColor(hslToRgb(color)).values : color.values;
  rgb = rgb.map(val => {
    if (color.type !== 'color') {
      val /= 255; // normalized
    }
    return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
  });

  // Truncate at 3 digits
  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}

/**
 * Calculates the contrast ratio between two colors.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} A contrast ratio value in the range 0 - 21.
 */
function getContrastRatio(foreground, background) {
  const lumA = getLuminance(foreground);
  const lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}

/**
 * Sets the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} value - value to set the alpha channel to in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function alpha(color, value) {
  color = decomposeColor(color);
  value = clampWrapper(value);
  if (color.type === 'rgb' || color.type === 'hsl') {
    color.type += 'a';
  }
  if (color.type === 'color') {
    color.values[3] = `/${value}`;
  } else {
    color.values[3] = value;
  }
  return recomposeColor(color);
}
function private_safeAlpha(color, value, warning) {
  try {
    return alpha(color, value);
  } catch (error) {
    return color;
  }
}

/**
 * Darkens a color.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function darken(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clampWrapper(coefficient);
  if (color.type.includes('hsl')) {
    color.values[2] *= 1 - coefficient;
  } else if (color.type.includes('rgb') || color.type.includes('color')) {
    for (let i = 0; i < 3; i += 1) {
      color.values[i] *= 1 - coefficient;
    }
  }
  return recomposeColor(color);
}
function private_safeDarken(color, coefficient, warning) {
  try {
    return darken(color, coefficient);
  } catch (error) {
    return color;
  }
}

/**
 * Lightens a color.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function lighten(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clampWrapper(coefficient);
  if (color.type.includes('hsl')) {
    color.values[2] += (100 - color.values[2]) * coefficient;
  } else if (color.type.includes('rgb')) {
    for (let i = 0; i < 3; i += 1) {
      color.values[i] += (255 - color.values[i]) * coefficient;
    }
  } else if (color.type.includes('color')) {
    for (let i = 0; i < 3; i += 1) {
      color.values[i] += (1 - color.values[i]) * coefficient;
    }
  }
  return recomposeColor(color);
}
function private_safeLighten(color, coefficient, warning) {
  try {
    return lighten(color, coefficient);
  } catch (error) {
    return color;
  }
}

/**
 * Darken or lighten a color, depending on its luminance.
 * Light colors are darkened, dark colors are lightened.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function emphasize(color, coefficient = 0.15) {
  return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
}
function private_safeEmphasize(color, coefficient, warning) {
  try {
    return emphasize(color, coefficient);
  } catch (error) {
    return color;
  }
}// This module is based on https://github.com/airbnb/prop-types-exact repository.
// However, in order to reduce the number of dependencies and to remove some extra safe checks
// the module was forked.

const specialProperty = 'exact-prop: \u200b';
function exactProp(propTypes) {
  if (process.env.NODE_ENV === 'production') {
    return propTypes;
  }
  return {
    ...propTypes,
    [specialProperty]: props => {
      const unsupportedProps = Object.keys(props).filter(prop => !propTypes.hasOwnProperty(prop));
      if (unsupportedProps.length > 0) {
        return new Error(`The following props are not supported: ${unsupportedProps.map(prop => `\`${prop}\``).join(', ')}. Please remove them.`);
      }
      return null;
    }
  };
}const RtlContext = /*#__PURE__*/React.createContext();
process.env.NODE_ENV !== "production" ? {
  children: PropTypes.node,
  value: PropTypes.bool
} : void 0;
const useRtl = () => {
  const value = React.useContext(RtlContext);
  return value ?? false;
};const PropsContext = /*#__PURE__*/React.createContext(undefined);
process.env.NODE_ENV !== "production" ? {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: PropTypes.node,
  /**
   * @ignore
   */
  value: PropTypes.object
} : void 0;
function getThemeProps(params) {
  const {
    theme,
    name,
    props
  } = params;
  if (!theme || !theme.components || !theme.components[name]) {
    return props;
  }
  const config = theme.components[name];
  if (config.defaultProps) {
    // compatible with v5 signature
    return resolveProps(config.defaultProps, props);
  }
  if (!config.styleOverrides && !config.variants) {
    // v6 signature, no property 'defaultProps'
    return resolveProps(config, props);
  }
  return props;
}
function useDefaultProps$1({
  props,
  name
}) {
  const ctx = React.useContext(PropsContext);
  return getThemeProps({
    props,
    name,
    theme: {
      components: ctx
    }
  });
}/* eslint-disable @typescript-eslint/naming-convention */

// We need to pass an argument as `{ theme }` for PigmentCSS, but we don't want to
// allocate more objects.
const arg = {
  theme: undefined
};

/**
 * Memoize style function on theme.
 * Intended to be used in styled() calls that only need access to the theme.
 */
function unstable_memoTheme(styleFn) {
  let lastValue;
  let lastTheme;
  return function styleMemoized(props) {
    let value = lastValue;
    if (value === undefined || props.theme !== lastTheme) {
      arg.theme = props.theme;
      value = preprocessStyles(styleFn(arg));
      lastValue = value;
      lastTheme = props.theme;
    }
    return value;
  };
}/**
 * The benefit of this function is to help developers get CSS var from theme without specifying the whole variable
 * and they does not need to remember the prefix (defined once).
 */
function createGetCssVar$1(prefix = '') {
  function appendVar(...vars) {
    if (!vars.length) {
      return '';
    }
    const value = vars[0];
    if (typeof value === 'string' && !value.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/)) {
      return `, var(--${prefix ? `${prefix}-` : ''}${value}${appendVar(...vars.slice(1))})`;
    }
    return `, ${value}`;
  }

  // AdditionalVars makes `getCssVar` less strict, so it can be use like this `getCssVar('non-mui-variable')` without type error.
  const getCssVar = (field, ...fallbacks) => {
    return `var(--${prefix ? `${prefix}-` : ''}${field}${appendVar(...fallbacks)})`;
  };
  return getCssVar;
}/**
 * This function create an object from keys, value and then assign to target
 *
 * @param {Object} obj : the target object to be assigned
 * @param {string[]} keys
 * @param {string | number} value
 *
 * @example
 * const source = {}
 * assignNestedKeys(source, ['palette', 'primary'], 'var(--palette-primary)')
 * console.log(source) // { palette: { primary: 'var(--palette-primary)' } }
 *
 * @example
 * const source = { palette: { primary: 'var(--palette-primary)' } }
 * assignNestedKeys(source, ['palette', 'secondary'], 'var(--palette-secondary)')
 * console.log(source) // { palette: { primary: 'var(--palette-primary)', secondary: 'var(--palette-secondary)' } }
 */
const assignNestedKeys = (obj, keys, value, arrayKeys = []) => {
  let temp = obj;
  keys.forEach((k, index) => {
    if (index === keys.length - 1) {
      if (Array.isArray(temp)) {
        temp[Number(k)] = value;
      } else if (temp && typeof temp === 'object') {
        temp[k] = value;
      }
    } else if (temp && typeof temp === 'object') {
      if (!temp[k]) {
        temp[k] = arrayKeys.includes(k) ? [] : {};
      }
      temp = temp[k];
    }
  });
};

/**
 *
 * @param {Object} obj : source object
 * @param {Function} callback : a function that will be called when
 *                   - the deepest key in source object is reached
 *                   - the value of the deepest key is NOT `undefined` | `null`
 *
 * @example
 * walkObjectDeep({ palette: { primary: { main: '#000000' } } }, console.log)
 * // ['palette', 'primary', 'main'] '#000000'
 */
const walkObjectDeep = (obj, callback, shouldSkipPaths) => {
  function recurse(object, parentKeys = [], arrayKeys = []) {
    Object.entries(object).forEach(([key, value]) => {
      if (!shouldSkipPaths || shouldSkipPaths && !shouldSkipPaths([...parentKeys, key])) {
        if (value !== undefined && value !== null) {
          if (typeof value === 'object' && Object.keys(value).length > 0) {
            recurse(value, [...parentKeys, key], Array.isArray(value) ? [...arrayKeys, key] : arrayKeys);
          } else {
            callback([...parentKeys, key], value, arrayKeys);
          }
        }
      }
    });
  }
  recurse(obj);
};
const getCssValue = (keys, value) => {
  if (typeof value === 'number') {
    if (['lineHeight', 'fontWeight', 'opacity', 'zIndex'].some(prop => keys.includes(prop))) {
      // CSS property that are unitless
      return value;
    }
    const lastKey = keys[keys.length - 1];
    if (lastKey.toLowerCase().includes('opacity')) {
      // opacity values are unitless
      return value;
    }
    return `${value}px`;
  }
  return value;
};

/**
 * a function that parse theme and return { css, vars }
 *
 * @param {Object} theme
 * @param {{
 *  prefix?: string,
 *  shouldSkipGeneratingVar?: (objectPathKeys: Array<string>, value: string | number) => boolean
 * }} options.
 *  `prefix`: The prefix of the generated CSS variables. This function does not change the value.
 *
 * @returns {{ css: Object, vars: Object }} `css` is the stylesheet, `vars` is an object to get css variable (same structure as theme).
 *
 * @example
 * const { css, vars } = parser({
 *   fontSize: 12,
 *   lineHeight: 1.2,
 *   palette: { primary: { 500: 'var(--color)' } }
 * }, { prefix: 'foo' })
 *
 * console.log(css) // { '--foo-fontSize': '12px', '--foo-lineHeight': 1.2, '--foo-palette-primary-500': 'var(--color)' }
 * console.log(vars) // { fontSize: 'var(--foo-fontSize)', lineHeight: 'var(--foo-lineHeight)', palette: { primary: { 500: 'var(--foo-palette-primary-500)' } } }
 */
function cssVarsParser(theme, options) {
  const {
    prefix,
    shouldSkipGeneratingVar
  } = options || {};
  const css = {};
  const vars = {};
  const varsWithDefaults = {};
  walkObjectDeep(theme, (keys, value, arrayKeys) => {
    if (typeof value === 'string' || typeof value === 'number') {
      if (!shouldSkipGeneratingVar || !shouldSkipGeneratingVar(keys, value)) {
        // only create css & var if `shouldSkipGeneratingVar` return false
        const cssVar = `--${prefix ? `${prefix}-` : ''}${keys.join('-')}`;
        const resolvedValue = getCssValue(keys, value);
        Object.assign(css, {
          [cssVar]: resolvedValue
        });
        assignNestedKeys(vars, keys, `var(${cssVar})`, arrayKeys);
        assignNestedKeys(varsWithDefaults, keys, `var(${cssVar}, ${resolvedValue})`, arrayKeys);
      }
    }
  }, keys => keys[0] === 'vars' // skip 'vars/*' paths
  );
  return {
    css,
    vars,
    varsWithDefaults
  };
}function prepareCssVars(theme, parserConfig = {}) {
  const {
    getSelector = defaultGetSelector,
    disableCssColorScheme,
    colorSchemeSelector: selector
  } = parserConfig;
  // @ts-ignore - ignore components do not exist
  const {
    colorSchemes = {},
    components,
    defaultColorScheme = 'light',
    ...otherTheme
  } = theme;
  const {
    vars: rootVars,
    css: rootCss,
    varsWithDefaults: rootVarsWithDefaults
  } = cssVarsParser(otherTheme, parserConfig);
  let themeVars = rootVarsWithDefaults;
  const colorSchemesMap = {};
  const {
    [defaultColorScheme]: defaultScheme,
    ...otherColorSchemes
  } = colorSchemes;
  Object.entries(otherColorSchemes || {}).forEach(([key, scheme]) => {
    const {
      vars,
      css,
      varsWithDefaults
    } = cssVarsParser(scheme, parserConfig);
    themeVars = deepmerge(themeVars, varsWithDefaults);
    colorSchemesMap[key] = {
      css,
      vars
    };
  });
  if (defaultScheme) {
    // default color scheme vars should be merged last to set as default
    const {
      css,
      vars,
      varsWithDefaults
    } = cssVarsParser(defaultScheme, parserConfig);
    themeVars = deepmerge(themeVars, varsWithDefaults);
    colorSchemesMap[defaultColorScheme] = {
      css,
      vars
    };
  }
  function defaultGetSelector(colorScheme, cssObject) {
    let rule = selector;
    if (selector === 'class') {
      rule = '.%s';
    }
    if (selector === 'data') {
      rule = '[data-%s]';
    }
    if (selector?.startsWith('data-') && !selector.includes('%s')) {
      // 'data-joy-color-scheme' -> '[data-joy-color-scheme="%s"]'
      rule = `[${selector}="%s"]`;
    }
    if (colorScheme) {
      if (rule === 'media') {
        if (theme.defaultColorScheme === colorScheme) {
          return ':root';
        }
        const mode = colorSchemes[colorScheme]?.palette?.mode || colorScheme;
        return {
          [`@media (prefers-color-scheme: ${mode})`]: {
            ':root': cssObject
          }
        };
      }
      if (rule) {
        if (theme.defaultColorScheme === colorScheme) {
          return `:root, ${rule.replace('%s', String(colorScheme))}`;
        }
        return rule.replace('%s', String(colorScheme));
      }
    }
    return ':root';
  }
  const generateThemeVars = () => {
    let vars = {
      ...rootVars
    };
    Object.entries(colorSchemesMap).forEach(([, {
      vars: schemeVars
    }]) => {
      vars = deepmerge(vars, schemeVars);
    });
    return vars;
  };
  const generateStyleSheets = () => {
    const stylesheets = [];
    const colorScheme = theme.defaultColorScheme || 'light';
    function insertStyleSheet(key, css) {
      if (Object.keys(css).length) {
        stylesheets.push(typeof key === 'string' ? {
          [key]: {
            ...css
          }
        } : key);
      }
    }
    insertStyleSheet(getSelector(undefined, {
      ...rootCss
    }), rootCss);
    const {
      [colorScheme]: defaultSchemeVal,
      ...other
    } = colorSchemesMap;
    if (defaultSchemeVal) {
      // default color scheme has to come before other color schemes
      const {
        css
      } = defaultSchemeVal;
      const cssColorSheme = colorSchemes[colorScheme]?.palette?.mode;
      const finalCss = !disableCssColorScheme && cssColorSheme ? {
        colorScheme: cssColorSheme,
        ...css
      } : {
        ...css
      };
      insertStyleSheet(getSelector(colorScheme, {
        ...finalCss
      }), finalCss);
    }
    Object.entries(other).forEach(([key, {
      css
    }]) => {
      const cssColorSheme = colorSchemes[key]?.palette?.mode;
      const finalCss = !disableCssColorScheme && cssColorSheme ? {
        colorScheme: cssColorSheme,
        ...css
      } : {
        ...css
      };
      insertStyleSheet(getSelector(key, {
        ...finalCss
      }), finalCss);
    });
    return stylesheets;
  };
  return {
    vars: themeVars,
    generateThemeVars,
    generateStyleSheets
  };
}/* eslint-disable import/prefer-default-export */
function createGetColorSchemeSelector(selector) {
  return function getColorSchemeSelector(colorScheme) {
    if (selector === 'media') {
      if (process.env.NODE_ENV !== 'production') {
        if (colorScheme !== 'light' && colorScheme !== 'dark') {
          console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${colorScheme}'.`);
        }
      }
      return `@media (prefers-color-scheme: ${colorScheme})`;
    }
    if (selector) {
      if (selector.startsWith('data-') && !selector.includes('%s')) {
        return `[${selector}="${colorScheme}"] &`;
      }
      if (selector === 'class') {
        return `.${colorScheme} &`;
      }
      if (selector === 'data') {
        return `[data-${colorScheme}] &`;
      }
      return `${selector.replace('%s', colorScheme)} &`;
    }
    return '&';
  };
}/* eslint no-restricted-syntax: 0, prefer-template: 0, guard-for-in: 0
   ---
   These rules are preventing the performance optimizations below.
 */

/**
 * Compose classes from multiple sources.
 *
 * @example
 * ```tsx
 * const slots = {
 *  root: ['root', 'primary'],
 *  label: ['label'],
 * };
 *
 * const getUtilityClass = (slot) => `MuiButton-${slot}`;
 *
 * const classes = {
 *   root: 'my-root-class',
 * };
 *
 * const output = composeClasses(slots, getUtilityClass, classes);
 * // {
 * //   root: 'MuiButton-root MuiButton-primary my-root-class',
 * //   label: 'MuiButton-label',
 * // }
 * ```
 *
 * @param slots a list of classes for each possible slot
 * @param getUtilityClass a function to resolve the class based on the slot name
 * @param classes the input classes from props
 * @returns the resolved classes for all slots
 */
function composeClasses(slots, getUtilityClass, classes = undefined) {
  const output = {};
  for (const slotName in slots) {
    const slot = slots[slotName];
    let buffer = '';
    let start = true;
    for (let i = 0; i < slot.length; i += 1) {
      const value = slot[i];
      if (value) {
        buffer += (start === true ? '' : ' ') + getUtilityClass(value);
        start = false;
        if (classes && classes[value]) {
          buffer += ' ' + classes[value];
        }
      }
    }
    output[slotName] = buffer;
  }
  return output;
}function isMuiElement(element, muiNames) {
  return /*#__PURE__*/React.isValidElement(element) && muiNames.indexOf(
  // For server components `muiName` is avaialble in element.type._payload.value.muiName
  // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
  // eslint-disable-next-line no-underscore-dangle
  element.type.muiName ?? element.type?._payload?.value?.muiName) !== -1;
}const filterBreakpointKeys = (breakpointsKeys, responsiveKeys) => breakpointsKeys.filter(key => responsiveKeys.includes(key));
const traverseBreakpoints = (breakpoints, responsive, iterator) => {
  const smallestBreakpoint = breakpoints.keys[0]; // the keys is sorted from smallest to largest by `createBreakpoints`.

  if (Array.isArray(responsive)) {
    responsive.forEach((breakpointValue, index) => {
      iterator((responsiveStyles, style) => {
        if (index <= breakpoints.keys.length - 1) {
          if (index === 0) {
            Object.assign(responsiveStyles, style);
          } else {
            responsiveStyles[breakpoints.up(breakpoints.keys[index])] = style;
          }
        }
      }, breakpointValue);
    });
  } else if (responsive && typeof responsive === 'object') {
    // prevent null
    // responsive could be a very big object, pick the smallest responsive values

    const keys = Object.keys(responsive).length > breakpoints.keys.length ? breakpoints.keys : filterBreakpointKeys(breakpoints.keys, Object.keys(responsive));
    keys.forEach(key => {
      if (breakpoints.keys.includes(key)) {
        // @ts-ignore already checked that responsive is an object
        const breakpointValue = responsive[key];
        if (breakpointValue !== undefined) {
          iterator((responsiveStyles, style) => {
            if (smallestBreakpoint === key) {
              Object.assign(responsiveStyles, style);
            } else {
              responsiveStyles[breakpoints.up(key)] = style;
            }
          }, breakpointValue);
        }
      }
    });
  } else if (typeof responsive === 'number' || typeof responsive === 'string') {
    iterator((responsiveStyles, style) => {
      Object.assign(responsiveStyles, style);
    }, responsive);
  }
};function getSelfSpacingVar(axis) {
  return `--Grid-${axis}Spacing`;
}
function getParentSpacingVar(axis) {
  return `--Grid-parent-${axis}Spacing`;
}
const selfColumnsVar = '--Grid-columns';
const parentColumnsVar = '--Grid-parent-columns';
const generateGridSizeStyles = ({
  theme,
  ownerState
}) => {
  const styles = {};
  traverseBreakpoints(theme.breakpoints, ownerState.size, (appendStyle, value) => {
    let style = {};
    if (value === 'grow') {
      style = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: '100%'
      };
    }
    if (value === 'auto') {
      style = {
        flexBasis: 'auto',
        flexGrow: 0,
        flexShrink: 0,
        maxWidth: 'none',
        width: 'auto'
      };
    }
    if (typeof value === 'number') {
      style = {
        flexGrow: 0,
        flexBasis: 'auto',
        width: `calc(100% * ${value} / var(${parentColumnsVar}) - (var(${parentColumnsVar}) - ${value}) * (var(${getParentSpacingVar('column')}) / var(${parentColumnsVar})))`
      };
    }
    appendStyle(styles, style);
  });
  return styles;
};
const generateGridOffsetStyles = ({
  theme,
  ownerState
}) => {
  const styles = {};
  traverseBreakpoints(theme.breakpoints, ownerState.offset, (appendStyle, value) => {
    let style = {};
    if (value === 'auto') {
      style = {
        marginLeft: 'auto'
      };
    }
    if (typeof value === 'number') {
      style = {
        marginLeft: value === 0 ? '0px' : `calc(100% * ${value} / var(${parentColumnsVar}) + var(${getParentSpacingVar('column')}) * ${value} / var(${parentColumnsVar}))`
      };
    }
    appendStyle(styles, style);
  });
  return styles;
};
const generateGridColumnsStyles = ({
  theme,
  ownerState
}) => {
  if (!ownerState.container) {
    return {};
  }
  const styles = {
    [selfColumnsVar]: 12
  };
  traverseBreakpoints(theme.breakpoints, ownerState.columns, (appendStyle, value) => {
    const columns = value ?? 12;
    appendStyle(styles, {
      [selfColumnsVar]: columns,
      '> *': {
        [parentColumnsVar]: columns
      }
    });
  });
  return styles;
};
const generateGridRowSpacingStyles = ({
  theme,
  ownerState
}) => {
  if (!ownerState.container) {
    return {};
  }
  const styles = {};
  traverseBreakpoints(theme.breakpoints, ownerState.rowSpacing, (appendStyle, value) => {
    const spacing = typeof value === 'string' ? value : theme.spacing?.(value);
    appendStyle(styles, {
      [getSelfSpacingVar('row')]: spacing,
      '> *': {
        [getParentSpacingVar('row')]: spacing
      }
    });
  });
  return styles;
};
const generateGridColumnSpacingStyles = ({
  theme,
  ownerState
}) => {
  if (!ownerState.container) {
    return {};
  }
  const styles = {};
  traverseBreakpoints(theme.breakpoints, ownerState.columnSpacing, (appendStyle, value) => {
    const spacing = typeof value === 'string' ? value : theme.spacing?.(value);
    appendStyle(styles, {
      [getSelfSpacingVar('column')]: spacing,
      '> *': {
        [getParentSpacingVar('column')]: spacing
      }
    });
  });
  return styles;
};
const generateGridDirectionStyles = ({
  theme,
  ownerState
}) => {
  if (!ownerState.container) {
    return {};
  }
  const styles = {};
  traverseBreakpoints(theme.breakpoints, ownerState.direction, (appendStyle, value) => {
    appendStyle(styles, {
      flexDirection: value
    });
  });
  return styles;
};
const generateGridStyles = ({
  ownerState
}) => {
  return {
    minWidth: 0,
    boxSizing: 'border-box',
    ...(ownerState.container && {
      display: 'flex',
      flexWrap: 'wrap',
      ...(ownerState.wrap && ownerState.wrap !== 'wrap' && {
        flexWrap: ownerState.wrap
      }),
      gap: `var(${getSelfSpacingVar('row')}) var(${getSelfSpacingVar('column')})`
    })
  };
};
const generateSizeClassNames = size => {
  const classNames = [];
  Object.entries(size).forEach(([key, value]) => {
    if (value !== false && value !== undefined) {
      classNames.push(`grid-${key}-${String(value)}`);
    }
  });
  return classNames;
};
const generateSpacingClassNames = (spacing, smallestBreakpoint = 'xs') => {
  function isValidSpacing(val) {
    if (val === undefined) {
      return false;
    }
    return typeof val === 'string' && !Number.isNaN(Number(val)) || typeof val === 'number' && val > 0;
  }
  if (isValidSpacing(spacing)) {
    return [`spacing-${smallestBreakpoint}-${String(spacing)}`];
  }
  if (typeof spacing === 'object' && !Array.isArray(spacing)) {
    const classNames = [];
    Object.entries(spacing).forEach(([key, value]) => {
      if (isValidSpacing(value)) {
        classNames.push(`spacing-${key}-${String(value)}`);
      }
    });
    return classNames;
  }
  return [];
};
const generateDirectionClasses = direction => {
  if (direction === undefined) {
    return [];
  }
  if (typeof direction === 'object') {
    return Object.entries(direction).map(([key, value]) => `direction-${key}-${value}`);
  }
  return [`direction-xs-${String(direction)}`];
};const getLegacyGridWarning = propName => {
  if (['item', 'zeroMinWidth'].includes(propName)) {
    return `The \`${propName}\` prop has been removed and is no longer necessary. You can safely remove it.`;
  }

  // #host-reference
  return `The \`${propName}\` prop has been removed. See https://mui.com/material-ui/migration/upgrade-to-grid-v2/ for migration instructions.`;
};
const warnedAboutProps = [];

/**
 * Deletes the legacy Grid component props from the `props` object and warns once about them if found.
 *
 * @param {object} props The props object to remove the legacy Grid props from.
 * @param {Breakpoints} breakpoints The breakpoints object.
 */
function deleteLegacyGridProps(props, breakpoints) {
  const propsToWarn = [];
  if (props.item !== undefined) {
    delete props.item;
    propsToWarn.push('item');
  }
  if (props.zeroMinWidth !== undefined) {
    delete props.zeroMinWidth;
    propsToWarn.push('zeroMinWidth');
  }
  breakpoints.keys.forEach(breakpoint => {
    if (props[breakpoint] !== undefined) {
      propsToWarn.push(breakpoint);
      delete props[breakpoint];
    }
  });
  if (process.env.NODE_ENV !== 'production') {
    propsToWarn.forEach(prop => {
      if (!warnedAboutProps.includes(prop)) {
        warnedAboutProps.push(prop);
        console.warn(`MUI Grid: ${getLegacyGridWarning(prop)}\n`);
      }
    });
  }
}const defaultTheme$3 = createTheme$1();

// widening Theme to any so that the consumer can own the theme structure.
const defaultCreateStyledComponent$1 = styled$1('div', {
  name: 'MuiGrid',
  slot: 'Root'
});
function useThemePropsDefault$1(props) {
  return useThemeProps({
    props,
    name: 'MuiGrid',
    defaultTheme: defaultTheme$3
  });
}
function createGrid(options = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent = defaultCreateStyledComponent$1,
    useThemeProps = useThemePropsDefault$1,
    useTheme = useTheme$1,
    componentName = 'MuiGrid'
  } = options;
  const useUtilityClasses = (ownerState, theme) => {
    const {
      container,
      direction,
      spacing,
      wrap,
      size
    } = ownerState;
    const slots = {
      root: ['root', container && 'container', wrap !== 'wrap' && `wrap-xs-${String(wrap)}`, ...generateDirectionClasses(direction), ...generateSizeClassNames(size), ...(container ? generateSpacingClassNames(spacing, theme.breakpoints.keys[0]) : [])]
    };
    return composeClasses(slots, slot => generateUtilityClass(componentName, slot), {});
  };
  function parseResponsiveProp(propValue, breakpoints, shouldUseValue = () => true) {
    const parsedProp = {};
    if (propValue === null) {
      return parsedProp;
    }
    if (Array.isArray(propValue)) {
      propValue.forEach((value, index) => {
        if (value !== null && shouldUseValue(value) && breakpoints.keys[index]) {
          parsedProp[breakpoints.keys[index]] = value;
        }
      });
    } else if (typeof propValue === 'object') {
      Object.keys(propValue).forEach(key => {
        const value = propValue[key];
        if (value !== null && value !== undefined && shouldUseValue(value)) {
          parsedProp[key] = value;
        }
      });
    } else {
      parsedProp[breakpoints.keys[0]] = propValue;
    }
    return parsedProp;
  }
  const GridRoot = createStyledComponent(generateGridColumnsStyles, generateGridColumnSpacingStyles, generateGridRowSpacingStyles, generateGridSizeStyles, generateGridDirectionStyles, generateGridStyles, generateGridOffsetStyles);
  const Grid = /*#__PURE__*/React.forwardRef(function Grid(inProps, ref) {
    const theme = useTheme();
    const themeProps = useThemeProps(inProps);
    const props = extendSxProp$1(themeProps); // `color` type conflicts with html color attribute.

    // TODO v8: Remove when removing the legacy Grid component
    deleteLegacyGridProps(props, theme.breakpoints);
    const {
      className,
      children,
      columns: columnsProp = 12,
      container = false,
      component = 'div',
      direction = 'row',
      wrap = 'wrap',
      size: sizeProp = {},
      offset: offsetProp = {},
      spacing: spacingProp = 0,
      rowSpacing: rowSpacingProp = spacingProp,
      columnSpacing: columnSpacingProp = spacingProp,
      unstable_level: level = 0,
      ...other
    } = props;
    const size = parseResponsiveProp(sizeProp, theme.breakpoints, val => val !== false);
    const offset = parseResponsiveProp(offsetProp, theme.breakpoints);
    const columns = inProps.columns ?? (level ? undefined : columnsProp);
    const spacing = inProps.spacing ?? (level ? undefined : spacingProp);
    const rowSpacing = inProps.rowSpacing ?? inProps.spacing ?? (level ? undefined : rowSpacingProp);
    const columnSpacing = inProps.columnSpacing ?? inProps.spacing ?? (level ? undefined : columnSpacingProp);
    const ownerState = {
      ...props,
      level,
      columns,
      container,
      direction,
      wrap,
      spacing,
      rowSpacing,
      columnSpacing,
      size,
      offset
    };
    const classes = useUtilityClasses(ownerState, theme);
    return /*#__PURE__*/jsx$1(GridRoot, {
      ref: ref,
      as: component,
      ownerState: ownerState,
      className: clsx(classes.root, className),
      ...other,
      children: React.Children.map(children, child => {
        if (/*#__PURE__*/React.isValidElement(child) && isMuiElement(child, ['Grid']) && container && child.props.container) {
          return /*#__PURE__*/React.cloneElement(child, {
            unstable_level: child.props?.unstable_level ?? level + 1
          });
        }
        return child;
      })
    });
  });
  process.env.NODE_ENV !== "production" ? Grid.propTypes /* remove-proptypes */ = {
    children: PropTypes.node,
    className: PropTypes.string,
    columns: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number, PropTypes.object]),
    columnSpacing: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])), PropTypes.number, PropTypes.object, PropTypes.string]),
    component: PropTypes.elementType,
    container: PropTypes.bool,
    direction: PropTypes.oneOfType([PropTypes.oneOf(['column-reverse', 'column', 'row-reverse', 'row']), PropTypes.arrayOf(PropTypes.oneOf(['column-reverse', 'column', 'row-reverse', 'row'])), PropTypes.object]),
    offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])), PropTypes.object]),
    rowSpacing: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])), PropTypes.number, PropTypes.object, PropTypes.string]),
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.number, PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.number])), PropTypes.object]),
    spacing: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])), PropTypes.number, PropTypes.object, PropTypes.string]),
    sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
    wrap: PropTypes.oneOf(['nowrap', 'wrap-reverse', 'wrap'])
  } : void 0;

  // @ts-ignore internal logic for nested grid
  Grid.muiName = 'Grid';
  return Grid;
}const defaultTheme$2 = createTheme$1();
// widening Theme to any so that the consumer can own the theme structure.
const defaultCreateStyledComponent = styled$1('div', {
  name: 'MuiStack',
  slot: 'Root'
});
function useThemePropsDefault(props) {
  return useThemeProps({
    props,
    name: 'MuiStack',
    defaultTheme: defaultTheme$2
  });
}

/**
 * Return an array with the separator React element interspersed between
 * each React node of the input children.
 *
 * > joinChildren([1,2,3], 0)
 * [1,0,2,0,3]
 */
function joinChildren(children, separator) {
  const childrenArray = React.Children.toArray(children).filter(Boolean);
  return childrenArray.reduce((output, child, index) => {
    output.push(child);
    if (index < childrenArray.length - 1) {
      output.push(/*#__PURE__*/React.cloneElement(separator, {
        key: `separator-${index}`
      }));
    }
    return output;
  }, []);
}
const getSideFromDirection = direction => {
  return {
    row: 'Left',
    'row-reverse': 'Right',
    column: 'Top',
    'column-reverse': 'Bottom'
  }[direction];
};
const style = ({
  ownerState,
  theme
}) => {
  let styles = {
    display: 'flex',
    flexDirection: 'column',
    ...handleBreakpoints({
      theme
    }, resolveBreakpointValues({
      values: ownerState.direction,
      breakpoints: theme.breakpoints.values
    }), propValue => ({
      flexDirection: propValue
    }))
  };
  if (ownerState.spacing) {
    const transformer = createUnarySpacing(theme);
    const base = Object.keys(theme.breakpoints.values).reduce((acc, breakpoint) => {
      if (typeof ownerState.spacing === 'object' && ownerState.spacing[breakpoint] != null || typeof ownerState.direction === 'object' && ownerState.direction[breakpoint] != null) {
        acc[breakpoint] = true;
      }
      return acc;
    }, {});
    const directionValues = resolveBreakpointValues({
      values: ownerState.direction,
      base
    });
    const spacingValues = resolveBreakpointValues({
      values: ownerState.spacing,
      base
    });
    if (typeof directionValues === 'object') {
      Object.keys(directionValues).forEach((breakpoint, index, breakpoints) => {
        const directionValue = directionValues[breakpoint];
        if (!directionValue) {
          const previousDirectionValue = index > 0 ? directionValues[breakpoints[index - 1]] : 'column';
          directionValues[breakpoint] = previousDirectionValue;
        }
      });
    }
    const styleFromPropValue = (propValue, breakpoint) => {
      if (ownerState.useFlexGap) {
        return {
          gap: getValue(transformer, propValue)
        };
      }
      return {
        // The useFlexGap={false} implement relies on each child to give up control of the margin.
        // We need to reset the margin to avoid double spacing.
        '& > :not(style):not(style)': {
          margin: 0
        },
        '& > :not(style) ~ :not(style)': {
          [`margin${getSideFromDirection(breakpoint ? directionValues[breakpoint] : ownerState.direction)}`]: getValue(transformer, propValue)
        }
      };
    };
    styles = deepmerge(styles, handleBreakpoints({
      theme
    }, spacingValues, styleFromPropValue));
  }
  styles = mergeBreakpointsInOrder(theme.breakpoints, styles);
  return styles;
};
function createStack(options = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent = defaultCreateStyledComponent,
    useThemeProps = useThemePropsDefault,
    componentName = 'MuiStack'
  } = options;
  const useUtilityClasses = () => {
    const slots = {
      root: ['root']
    };
    return composeClasses(slots, slot => generateUtilityClass(componentName, slot), {});
  };
  const StackRoot = createStyledComponent(style);
  const Stack = /*#__PURE__*/React.forwardRef(function Grid(inProps, ref) {
    const themeProps = useThemeProps(inProps);
    const props = extendSxProp$1(themeProps); // `color` type conflicts with html color attribute.
    const {
      component = 'div',
      direction = 'column',
      spacing = 0,
      divider,
      children,
      className,
      useFlexGap = false,
      ...other
    } = props;
    const ownerState = {
      direction,
      spacing,
      useFlexGap
    };
    const classes = useUtilityClasses();
    return /*#__PURE__*/jsx$1(StackRoot, {
      as: component,
      ownerState: ownerState,
      ref: ref,
      className: clsx(classes.root, className),
      ...other,
      children: divider ? joinChildren(children, divider) : children
    });
  });
  process.env.NODE_ENV !== "production" ? Stack.propTypes /* remove-proptypes */ = {
    children: PropTypes.node,
    direction: PropTypes.oneOfType([PropTypes.oneOf(['column-reverse', 'column', 'row-reverse', 'row']), PropTypes.arrayOf(PropTypes.oneOf(['column-reverse', 'column', 'row-reverse', 'row'])), PropTypes.object]),
    divider: PropTypes.node,
    spacing: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])), PropTypes.number, PropTypes.object, PropTypes.string]),
    sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
  } : void 0;
  return Stack;
}function getLight() {
  return {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: 'rgba(0, 0, 0, 0.87)',
      // Secondary text.
      secondary: 'rgba(0, 0, 0, 0.6)',
      // Disabled text have even lower visual prominence.
      disabled: 'rgba(0, 0, 0, 0.38)'
    },
    // The color used to divide different elements.
    divider: 'rgba(0, 0, 0, 0.12)',
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: common.white,
      default: common.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: 'rgba(0, 0, 0, 0.54)',
      // The color of an hovered action.
      hover: 'rgba(0, 0, 0, 0.04)',
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: 'rgba(0, 0, 0, 0.26)',
      // The background color of a disabled action.
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(0, 0, 0, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
}
const light = getLight();
function getDark() {
  return {
    text: {
      primary: common.white,
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)'
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    background: {
      paper: '#121212',
      default: '#121212'
    },
    action: {
      active: common.white,
      hover: 'rgba(255, 255, 255, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(255, 255, 255, 0.16)',
      selectedOpacity: 0.16,
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(255, 255, 255, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
}
const dark = getDark();
function addLightOrDark(intent, direction, shade, tonalOffset) {
  const tonalOffsetLight = tonalOffset.light || tonalOffset;
  const tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;
  if (!intent[direction]) {
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade];
    } else if (direction === 'light') {
      intent.light = lighten(intent.main, tonalOffsetLight);
    } else if (direction === 'dark') {
      intent.dark = darken(intent.main, tonalOffsetDark);
    }
  }
}
function getDefaultPrimary(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: blue[200],
      light: blue[50],
      dark: blue[400]
    };
  }
  return {
    main: blue[700],
    light: blue[400],
    dark: blue[800]
  };
}
function getDefaultSecondary(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: purple[200],
      light: purple[50],
      dark: purple[400]
    };
  }
  return {
    main: purple[500],
    light: purple[300],
    dark: purple[700]
  };
}
function getDefaultError(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: red[500],
      light: red[300],
      dark: red[700]
    };
  }
  return {
    main: red[700],
    light: red[400],
    dark: red[800]
  };
}
function getDefaultInfo(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: lightBlue[400],
      light: lightBlue[300],
      dark: lightBlue[700]
    };
  }
  return {
    main: lightBlue[700],
    light: lightBlue[500],
    dark: lightBlue[900]
  };
}
function getDefaultSuccess(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: green[400],
      light: green[300],
      dark: green[700]
    };
  }
  return {
    main: green[800],
    light: green[500],
    dark: green[900]
  };
}
function getDefaultWarning(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: orange[400],
      light: orange[300],
      dark: orange[700]
    };
  }
  return {
    main: '#ed6c02',
    // closest to orange[800] that pass 3:1.
    light: orange[500],
    dark: orange[900]
  };
}
function createPalette(palette) {
  const {
    mode = 'light',
    contrastThreshold = 3,
    tonalOffset = 0.2,
    ...other
  } = palette;
  const primary = palette.primary || getDefaultPrimary(mode);
  const secondary = palette.secondary || getDefaultSecondary(mode);
  const error = palette.error || getDefaultError(mode);
  const info = palette.info || getDefaultInfo(mode);
  const success = palette.success || getDefaultSuccess(mode);
  const warning = palette.warning || getDefaultWarning(mode);

  // Use the same logic as
  // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
  // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54
  function getContrastText(background) {
    const contrastText = getContrastRatio(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;
    if (process.env.NODE_ENV !== 'production') {
      const contrast = getContrastRatio(background, contrastText);
      if (contrast < 3) {
        console.error([`MUI: The contrast ratio of ${contrast}:1 for ${contrastText} on ${background}`, 'falls below the WCAG recommended absolute minimum contrast ratio of 3:1.', 'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast'].join('\n'));
      }
    }
    return contrastText;
  }
  const augmentColor = ({
    color,
    name,
    mainShade = 500,
    lightShade = 300,
    darkShade = 700
  }) => {
    color = {
      ...color
    };
    if (!color.main && color[mainShade]) {
      color.main = color[mainShade];
    }
    if (!color.hasOwnProperty('main')) {
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${name ? ` (${name})` : ''} provided to augmentColor(color) is invalid.\n` + `The color object needs to have a \`main\` property or a \`${mainShade}\` property.` : formatMuiErrorMessage(11, name ? ` (${name})` : '', mainShade));
    }
    if (typeof color.main !== 'string') {
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${name ? ` (${name})` : ''} provided to augmentColor(color) is invalid.\n` + `\`color.main\` should be a string, but \`${JSON.stringify(color.main)}\` was provided instead.\n` + '\n' + 'Did you intend to use one of the following approaches?\n' + '\n' + 'import { green } from "@mui/material/colors";\n' + '\n' + 'const theme1 = createTheme({ palette: {\n' + '  primary: green,\n' + '} });\n' + '\n' + 'const theme2 = createTheme({ palette: {\n' + '  primary: { main: green[500] },\n' + '} });' : formatMuiErrorMessage(12, name ? ` (${name})` : '', JSON.stringify(color.main)));
    }
    addLightOrDark(color, 'light', lightShade, tonalOffset);
    addLightOrDark(color, 'dark', darkShade, tonalOffset);
    if (!color.contrastText) {
      color.contrastText = getContrastText(color.main);
    }
    return color;
  };
  let modeHydrated;
  if (mode === 'light') {
    modeHydrated = getLight();
  } else if (mode === 'dark') {
    modeHydrated = getDark();
  }
  if (process.env.NODE_ENV !== 'production') {
    if (!modeHydrated) {
      console.error(`MUI: The palette mode \`${mode}\` is not supported.`);
    }
  }
  const paletteOutput = deepmerge({
    // A collection of common colors.
    common: {
      ...common
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode,
    // The colors used to represent primary interface elements for a user.
    primary: augmentColor({
      color: primary,
      name: 'primary'
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: augmentColor({
      color: secondary,
      name: 'secondary',
      mainShade: 'A400',
      lightShade: 'A200',
      darkShade: 'A700'
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: augmentColor({
      color: error,
      name: 'error'
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: augmentColor({
      color: warning,
      name: 'warning'
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: augmentColor({
      color: info,
      name: 'info'
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: augmentColor({
      color: success,
      name: 'success'
    }),
    // The grey colors.
    grey,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText,
    // Generate a rich color object.
    augmentColor,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset,
    // The light and dark mode object.
    ...modeHydrated
  }, other);
  return paletteOutput;
}function prepareTypographyVars(typography) {
  const vars = {};
  const entries = Object.entries(typography);
  entries.forEach(entry => {
    const [key, value] = entry;
    if (typeof value === 'object') {
      vars[key] = `${value.fontStyle ? `${value.fontStyle} ` : ''}${value.fontVariant ? `${value.fontVariant} ` : ''}${value.fontWeight ? `${value.fontWeight} ` : ''}${value.fontStretch ? `${value.fontStretch} ` : ''}${value.fontSize || ''}${value.lineHeight ? `/${value.lineHeight} ` : ''}${value.fontFamily || ''}`;
    }
  });
  return vars;
}function createMixins(breakpoints, mixins) {
  return {
    toolbar: {
      minHeight: 56,
      [breakpoints.up('xs')]: {
        '@media (orientation: landscape)': {
          minHeight: 48
        }
      },
      [breakpoints.up('sm')]: {
        minHeight: 64
      }
    },
    ...mixins
  };
}function round$2(value) {
  return Math.round(value * 1e5) / 1e5;
}
const caseAllCaps = {
  textTransform: 'uppercase'
};
const defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';

/**
 * @see @link{https://m2.material.io/design/typography/the-type-system.html}
 * @see @link{https://m2.material.io/design/typography/understanding-typography.html}
 */
function createTypography(palette, typography) {
  const {
    fontFamily = defaultFontFamily,
    // The default font size of the Material Specification.
    fontSize = 14,
    // px
    fontWeightLight = 300,
    fontWeightRegular = 400,
    fontWeightMedium = 500,
    fontWeightBold = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize = 16,
    // Apply the CSS properties to all the variants.
    allVariants,
    pxToRem: pxToRem2,
    ...other
  } = typeof typography === 'function' ? typography(palette) : typography;
  if (process.env.NODE_ENV !== 'production') {
    if (typeof fontSize !== 'number') {
      console.error('MUI: `fontSize` is required to be a number.');
    }
    if (typeof htmlFontSize !== 'number') {
      console.error('MUI: `htmlFontSize` is required to be a number.');
    }
  }
  const coef = fontSize / 14;
  const pxToRem = pxToRem2 || (size => `${size / htmlFontSize * coef}rem`);
  const buildVariant = (fontWeight, size, lineHeight, letterSpacing, casing) => ({
    fontFamily,
    fontWeight,
    fontSize: pxToRem(size),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...(fontFamily === defaultFontFamily ? {
      letterSpacing: `${round$2(letterSpacing / size)}em`
    } : {}),
    ...casing,
    ...allVariants
  });
  const variants = {
    h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
    h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
    h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
    h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
    h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
    button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
    overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: 'inherit',
      fontWeight: 'inherit',
      fontSize: 'inherit',
      lineHeight: 'inherit',
      letterSpacing: 'inherit'
    }
  };
  return deepmerge({
    htmlFontSize,
    pxToRem,
    fontFamily,
    fontSize,
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightBold,
    ...variants
  }, other, {
    clone: false // No need to clone deep
  });
}const shadowKeyUmbraOpacity = 0.2;
const shadowKeyPenumbraOpacity = 0.14;
const shadowAmbientShadowOpacity = 0.12;
function createShadow(...px) {
  return [`${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,${shadowKeyUmbraOpacity})`, `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,${shadowKeyPenumbraOpacity})`, `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0,0,0,${shadowAmbientShadowOpacity})`].join(',');
}

// Values from https://github.com/material-components/material-components-web/blob/be8747f94574669cb5e7add1a7c54fa41a89cec7/packages/mdc-elevation/_variables.scss
const shadows = ['none', createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];// Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
// to learn the context in which each easing should be used.
const easing = {
  // This is the most common easing curve.
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
};

// Follow https://m2.material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
// to learn when use what timing
const duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function formatMs(milliseconds) {
  return `${Math.round(milliseconds)}ms`;
}
function getAutoHeightDuration(height) {
  if (!height) {
    return 0;
  }
  const constant = height / 36;

  // https://www.desmos.com/calculator/vbrp3ggqet
  return Math.min(Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10), 3000);
}
function createTransitions(inputTransitions) {
  const mergedEasing = {
    ...easing,
    ...inputTransitions.easing
  };
  const mergedDuration = {
    ...duration,
    ...inputTransitions.duration
  };
  const create = (props = ['all'], options = {}) => {
    const {
      duration: durationOption = mergedDuration.standard,
      easing: easingOption = mergedEasing.easeInOut,
      delay = 0,
      ...other
    } = options;
    if (process.env.NODE_ENV !== 'production') {
      const isString = value => typeof value === 'string';
      const isNumber = value => !Number.isNaN(parseFloat(value));
      if (!isString(props) && !Array.isArray(props)) {
        console.error('MUI: Argument "props" must be a string or Array.');
      }
      if (!isNumber(durationOption) && !isString(durationOption)) {
        console.error(`MUI: Argument "duration" must be a number or a string but found ${durationOption}.`);
      }
      if (!isString(easingOption)) {
        console.error('MUI: Argument "easing" must be a string.');
      }
      if (!isNumber(delay) && !isString(delay)) {
        console.error('MUI: Argument "delay" must be a number or a string.');
      }
      if (typeof options !== 'object') {
        console.error(['MUI: Secong argument of transition.create must be an object.', "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join('\n'));
      }
      if (Object.keys(other).length !== 0) {
        console.error(`MUI: Unrecognized argument(s) [${Object.keys(other).join(',')}].`);
      }
    }
    return (Array.isArray(props) ? props : [props]).map(animatedProp => `${animatedProp} ${typeof durationOption === 'string' ? durationOption : formatMs(durationOption)} ${easingOption} ${typeof delay === 'string' ? delay : formatMs(delay)}`).join(',');
  };
  return {
    getAutoHeightDuration,
    create,
    ...inputTransitions,
    easing: mergedEasing,
    duration: mergedDuration
  };
}// We need to centralize the zIndex definitions as they work
// like global values in the browser.
const zIndex = {
  mobileStepper: 1000,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};/* eslint-disable import/prefer-default-export */
function isSerializable(val) {
  return isPlainObject(val) || typeof val === 'undefined' || typeof val === 'string' || typeof val === 'boolean' || typeof val === 'number' || Array.isArray(val);
}

/**
 * `baseTheme` usually comes from `createTheme()` or `extendTheme()`.
 *
 * This function is intended to be used with zero-runtime CSS-in-JS like Pigment CSS
 * For example, in a Next.js project:
 *
 * ```js
 * // next.config.js
 * const { extendTheme } = require('@mui/material/styles');
 *
 * const theme = extendTheme();
 * // `.toRuntimeSource` is Pigment CSS specific to create a theme that is available at runtime.
 * theme.toRuntimeSource = stringifyTheme;
 *
 * module.exports = withPigment({
 *  theme,
 * });
 * ```
 */
function stringifyTheme(baseTheme = {}) {
  const serializableTheme = {
    ...baseTheme
  };
  function serializeTheme(object) {
    const array = Object.entries(object);
    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < array.length; index++) {
      const [key, value] = array[index];
      if (!isSerializable(value) || key.startsWith('unstable_')) {
        delete object[key];
      } else if (isPlainObject(value)) {
        object[key] = {
          ...value
        };
        serializeTheme(object[key]);
      }
    }
  }
  serializeTheme(serializableTheme);
  return `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(serializableTheme, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}function createThemeNoVars(options = {}, ...args) {
  const {
    breakpoints: breakpointsInput,
    mixins: mixinsInput = {},
    spacing: spacingInput,
    palette: paletteInput = {},
    transitions: transitionsInput = {},
    typography: typographyInput = {},
    shape: shapeInput,
    ...other
  } = options;
  if (options.vars &&
  // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  options.generateThemeVars === undefined) {
    throw new Error(process.env.NODE_ENV !== "production" ? 'MUI: `vars` is a private field used for CSS variables support.\n' +
    // #host-reference
    'Please use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature.' : formatMuiErrorMessage(20));
  }
  const palette = createPalette(paletteInput);
  const systemTheme = createTheme$1(options);
  let muiTheme = deepmerge(systemTheme, {
    mixins: createMixins(systemTheme.breakpoints, mixinsInput),
    palette,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: shadows.slice(),
    typography: createTypography(palette, typographyInput),
    transitions: createTransitions(transitionsInput),
    zIndex: {
      ...zIndex
    }
  });
  muiTheme = deepmerge(muiTheme, other);
  muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
  if (process.env.NODE_ENV !== 'production') {
    // TODO v6: Refactor to use globalStateClassesMapping from @mui/utils once `readOnly` state class is used in Rating component.
    const stateClasses = ['active', 'checked', 'completed', 'disabled', 'error', 'expanded', 'focused', 'focusVisible', 'required', 'selected'];
    const traverse = (node, component) => {
      let key;

      // eslint-disable-next-line guard-for-in
      for (key in node) {
        const child = node[key];
        if (stateClasses.includes(key) && Object.keys(child).length > 0) {
          if (process.env.NODE_ENV !== 'production') {
            const stateClass = generateUtilityClass('', key);
            console.error([`MUI: The \`${component}\` component increases ` + `the CSS specificity of the \`${key}\` internal state.`, 'You can not override it like this: ', JSON.stringify(node, null, 2), '', `Instead, you need to use the '&.${stateClass}' syntax:`, JSON.stringify({
              root: {
                [`&.${stateClass}`]: child
              }
            }, null, 2), '', 'https://mui.com/r/state-classes-guide'].join('\n'));
          }
          // Remove the style to prevent global conflicts.
          node[key] = {};
        }
      }
    };
    Object.keys(muiTheme.components).forEach(component => {
      const styleOverrides = muiTheme.components[component].styleOverrides;
      if (styleOverrides && component.startsWith('Mui')) {
        traverse(styleOverrides, component);
      }
    });
  }
  muiTheme.unstable_sxConfig = {
    ...defaultSxConfig,
    ...other?.unstable_sxConfig
  };
  muiTheme.unstable_sx = function sx(props) {
    return styleFunctionSx({
      sx: props,
      theme: this
    });
  };
  muiTheme.toRuntimeSource = stringifyTheme; // for Pigment CSS integration

  return muiTheme;
}// Inspired by https://github.com/material-components/material-components-ios/blob/bca36107405594d5b7b16265a5b0ed698f85a5ee/components/Elevation/src/UIColor%2BMaterialElevation.m#L61
function getOverlayAlpha(elevation) {
  let alphaValue;
  if (elevation < 1) {
    alphaValue = 5.11916 * elevation ** 2;
  } else {
    alphaValue = 4.5 * Math.log(elevation + 1) + 2;
  }
  return Math.round(alphaValue * 10) / 1000;
}const defaultDarkOverlays = [...Array(25)].map((_, index) => {
  if (index === 0) {
    return 'none';
  }
  const overlay = getOverlayAlpha(index);
  return `linear-gradient(rgba(255 255 255 / ${overlay}), rgba(255 255 255 / ${overlay}))`;
});
function getOpacity(mode) {
  return {
    inputPlaceholder: mode === 'dark' ? 0.5 : 0.42,
    inputUnderline: mode === 'dark' ? 0.7 : 0.42,
    switchTrackDisabled: mode === 'dark' ? 0.2 : 0.12,
    switchTrack: mode === 'dark' ? 0.3 : 0.38
  };
}
function getOverlays(mode) {
  return mode === 'dark' ? defaultDarkOverlays : [];
}
function createColorScheme(options) {
  const {
    palette: paletteInput = {
      mode: 'light'
    },
    // need to cast to avoid module augmentation test
    opacity,
    overlays,
    ...rest
  } = options;
  const palette = createPalette(paletteInput);
  return {
    palette,
    opacity: {
      ...getOpacity(palette.mode),
      ...opacity
    },
    overlays: overlays || getOverlays(palette.mode),
    ...rest
  };
}function shouldSkipGeneratingVar(keys) {
  return !!keys[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!keys[0].match(/sxConfig$/) ||
  // ends with sxConfig
  keys[0] === 'palette' && !!keys[1]?.match(/(mode|contrastThreshold|tonalOffset)/);
}/**
 * @internal These variables should not appear in the :root stylesheet when the `defaultColorScheme="dark"`
 */
const excludeVariablesFromRoot = cssVarPrefix => [...[...Array(25)].map((_, index) => `--${cssVarPrefix ? `${cssVarPrefix}-` : ''}overlays-${index}`), `--${cssVarPrefix ? `${cssVarPrefix}-` : ''}palette-AppBar-darkBg`, `--${cssVarPrefix ? `${cssVarPrefix}-` : ''}palette-AppBar-darkColor`];var defaultGetSelector = theme => (colorScheme, css) => {
  const root = theme.rootSelector || ':root';
  const selector = theme.colorSchemeSelector;
  let rule = selector;
  if (selector === 'class') {
    rule = '.%s';
  }
  if (selector === 'data') {
    rule = '[data-%s]';
  }
  if (selector?.startsWith('data-') && !selector.includes('%s')) {
    // 'data-mui-color-scheme' -> '[data-mui-color-scheme="%s"]'
    rule = `[${selector}="%s"]`;
  }
  if (theme.defaultColorScheme === colorScheme) {
    if (colorScheme === 'dark') {
      const excludedVariables = {};
      excludeVariablesFromRoot(theme.cssVarPrefix).forEach(cssVar => {
        excludedVariables[cssVar] = css[cssVar];
        delete css[cssVar];
      });
      if (rule === 'media') {
        return {
          [root]: css,
          [`@media (prefers-color-scheme: dark)`]: {
            [root]: excludedVariables
          }
        };
      }
      if (rule) {
        return {
          [rule.replace('%s', colorScheme)]: excludedVariables,
          [`${root}, ${rule.replace('%s', colorScheme)}`]: css
        };
      }
      return {
        [root]: {
          ...css,
          ...excludedVariables
        }
      };
    }
    if (rule && rule !== 'media') {
      return `${root}, ${rule.replace('%s', String(colorScheme))}`;
    }
  } else if (colorScheme) {
    if (rule === 'media') {
      return {
        [`@media (prefers-color-scheme: ${String(colorScheme)})`]: {
          [root]: css
        }
      };
    }
    if (rule) {
      return rule.replace('%s', String(colorScheme));
    }
  }
  return root;
};function assignNode(obj, keys) {
  keys.forEach(k => {
    if (!obj[k]) {
      obj[k] = {};
    }
  });
}
function setColor(obj, key, defaultValue) {
  if (!obj[key] && defaultValue) {
    obj[key] = defaultValue;
  }
}
function toRgb(color) {
  if (typeof color !== 'string' || !color.startsWith('hsl')) {
    return color;
  }
  return hslToRgb(color);
}
function setColorChannel(obj, key) {
  if (!(`${key}Channel` in obj)) {
    // custom channel token is not provided, generate one.
    // if channel token can't be generated, show a warning.
    obj[`${key}Channel`] = private_safeColorChannel(toRgb(obj[key]), `MUI: Can't create \`palette.${key}Channel\` because \`palette.${key}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` + '\n' + `To suppress this warning, you need to explicitly provide the \`palette.${key}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`);
  }
}
function getSpacingVal(spacingInput) {
  if (typeof spacingInput === 'number') {
    return `${spacingInput}px`;
  }
  if (typeof spacingInput === 'string' || typeof spacingInput === 'function' || Array.isArray(spacingInput)) {
    return spacingInput;
  }
  return '8px';
}
const silent = fn => {
  try {
    return fn();
  } catch (error) {
    // ignore error
  }
  return undefined;
};
const createGetCssVar = (cssVarPrefix = 'mui') => createGetCssVar$1(cssVarPrefix);
function attachColorScheme$1(colorSchemes, scheme, restTheme, colorScheme) {
  if (!scheme) {
    return undefined;
  }
  scheme = scheme === true ? {} : scheme;
  const mode = colorScheme === 'dark' ? 'dark' : 'light';
  if (!restTheme) {
    colorSchemes[colorScheme] = createColorScheme({
      ...scheme,
      palette: {
        mode,
        ...scheme?.palette
      }
    });
    return undefined;
  }
  const {
    palette,
    ...muiTheme
  } = createThemeNoVars({
    ...restTheme,
    palette: {
      mode,
      ...scheme?.palette
    }
  });
  colorSchemes[colorScheme] = {
    ...scheme,
    palette,
    opacity: {
      ...getOpacity(mode),
      ...scheme?.opacity
    },
    overlays: scheme?.overlays || getOverlays(mode)
  };
  return muiTheme;
}

/**
 * A default `createThemeWithVars` comes with a single color scheme, either `light` or `dark` based on the `defaultColorScheme`.
 * This is better suited for apps that only need a single color scheme.
 *
 * To enable built-in `light` and `dark` color schemes, either:
 * 1. provide a `colorSchemeSelector` to define how the color schemes will change.
 * 2. provide `colorSchemes.dark` will set `colorSchemeSelector: 'media'` by default.
 */
function createThemeWithVars(options = {}, ...args) {
  const {
    colorSchemes: colorSchemesInput = {
      light: true
    },
    defaultColorScheme: defaultColorSchemeInput,
    disableCssColorScheme = false,
    cssVarPrefix = 'mui',
    shouldSkipGeneratingVar: shouldSkipGeneratingVar$1 = shouldSkipGeneratingVar,
    colorSchemeSelector: selector = colorSchemesInput.light && colorSchemesInput.dark ? 'media' : undefined,
    rootSelector = ':root',
    ...input
  } = options;
  const firstColorScheme = Object.keys(colorSchemesInput)[0];
  const defaultColorScheme = defaultColorSchemeInput || (colorSchemesInput.light && firstColorScheme !== 'light' ? 'light' : firstColorScheme);
  const getCssVar = createGetCssVar(cssVarPrefix);
  const {
    [defaultColorScheme]: defaultSchemeInput,
    light: builtInLight,
    dark: builtInDark,
    ...customColorSchemes
  } = colorSchemesInput;
  const colorSchemes = {
    ...customColorSchemes
  };
  let defaultScheme = defaultSchemeInput;

  // For built-in light and dark color schemes, ensure that the value is valid if they are the default color scheme.
  if (defaultColorScheme === 'dark' && !('dark' in colorSchemesInput) || defaultColorScheme === 'light' && !('light' in colorSchemesInput)) {
    defaultScheme = true;
  }
  if (!defaultScheme) {
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${defaultColorScheme}\` option is either missing or invalid.` : formatMuiErrorMessage(21, defaultColorScheme));
  }

  // Create the palette for the default color scheme, either `light`, `dark`, or custom color scheme.
  const muiTheme = attachColorScheme$1(colorSchemes, defaultScheme, input, defaultColorScheme);
  if (builtInLight && !colorSchemes.light) {
    attachColorScheme$1(colorSchemes, builtInLight, undefined, 'light');
  }
  if (builtInDark && !colorSchemes.dark) {
    attachColorScheme$1(colorSchemes, builtInDark, undefined, 'dark');
  }
  let theme = {
    defaultColorScheme,
    ...muiTheme,
    cssVarPrefix,
    colorSchemeSelector: selector,
    rootSelector,
    getCssVar,
    colorSchemes,
    font: {
      ...prepareTypographyVars(muiTheme.typography),
      ...muiTheme.font
    },
    spacing: getSpacingVal(input.spacing)
  };
  Object.keys(theme.colorSchemes).forEach(key => {
    const palette = theme.colorSchemes[key].palette;
    const setCssVarColor = cssVar => {
      const tokens = cssVar.split('-');
      const color = tokens[1];
      const colorToken = tokens[2];
      return getCssVar(cssVar, palette[color][colorToken]);
    };

    // attach black & white channels to common node
    if (palette.mode === 'light') {
      setColor(palette.common, 'background', '#fff');
      setColor(palette.common, 'onBackground', '#000');
    }
    if (palette.mode === 'dark') {
      setColor(palette.common, 'background', '#000');
      setColor(palette.common, 'onBackground', '#fff');
    }

    // assign component variables
    assignNode(palette, ['Alert', 'AppBar', 'Avatar', 'Button', 'Chip', 'FilledInput', 'LinearProgress', 'Skeleton', 'Slider', 'SnackbarContent', 'SpeedDialAction', 'StepConnector', 'StepContent', 'Switch', 'TableCell', 'Tooltip']);
    if (palette.mode === 'light') {
      setColor(palette.Alert, 'errorColor', private_safeDarken(palette.error.light, 0.6));
      setColor(palette.Alert, 'infoColor', private_safeDarken(palette.info.light, 0.6));
      setColor(palette.Alert, 'successColor', private_safeDarken(palette.success.light, 0.6));
      setColor(palette.Alert, 'warningColor', private_safeDarken(palette.warning.light, 0.6));
      setColor(palette.Alert, 'errorFilledBg', setCssVarColor('palette-error-main'));
      setColor(palette.Alert, 'infoFilledBg', setCssVarColor('palette-info-main'));
      setColor(palette.Alert, 'successFilledBg', setCssVarColor('palette-success-main'));
      setColor(palette.Alert, 'warningFilledBg', setCssVarColor('palette-warning-main'));
      setColor(palette.Alert, 'errorFilledColor', silent(() => palette.getContrastText(palette.error.main)));
      setColor(palette.Alert, 'infoFilledColor', silent(() => palette.getContrastText(palette.info.main)));
      setColor(palette.Alert, 'successFilledColor', silent(() => palette.getContrastText(palette.success.main)));
      setColor(palette.Alert, 'warningFilledColor', silent(() => palette.getContrastText(palette.warning.main)));
      setColor(palette.Alert, 'errorStandardBg', private_safeLighten(palette.error.light, 0.9));
      setColor(palette.Alert, 'infoStandardBg', private_safeLighten(palette.info.light, 0.9));
      setColor(palette.Alert, 'successStandardBg', private_safeLighten(palette.success.light, 0.9));
      setColor(palette.Alert, 'warningStandardBg', private_safeLighten(palette.warning.light, 0.9));
      setColor(palette.Alert, 'errorIconColor', setCssVarColor('palette-error-main'));
      setColor(palette.Alert, 'infoIconColor', setCssVarColor('palette-info-main'));
      setColor(palette.Alert, 'successIconColor', setCssVarColor('palette-success-main'));
      setColor(palette.Alert, 'warningIconColor', setCssVarColor('palette-warning-main'));
      setColor(palette.AppBar, 'defaultBg', setCssVarColor('palette-grey-100'));
      setColor(palette.Avatar, 'defaultBg', setCssVarColor('palette-grey-400'));
      setColor(palette.Button, 'inheritContainedBg', setCssVarColor('palette-grey-300'));
      setColor(palette.Button, 'inheritContainedHoverBg', setCssVarColor('palette-grey-A100'));
      setColor(palette.Chip, 'defaultBorder', setCssVarColor('palette-grey-400'));
      setColor(palette.Chip, 'defaultAvatarColor', setCssVarColor('palette-grey-700'));
      setColor(palette.Chip, 'defaultIconColor', setCssVarColor('palette-grey-700'));
      setColor(palette.FilledInput, 'bg', 'rgba(0, 0, 0, 0.06)');
      setColor(palette.FilledInput, 'hoverBg', 'rgba(0, 0, 0, 0.09)');
      setColor(palette.FilledInput, 'disabledBg', 'rgba(0, 0, 0, 0.12)');
      setColor(palette.LinearProgress, 'primaryBg', private_safeLighten(palette.primary.main, 0.62));
      setColor(palette.LinearProgress, 'secondaryBg', private_safeLighten(palette.secondary.main, 0.62));
      setColor(palette.LinearProgress, 'errorBg', private_safeLighten(palette.error.main, 0.62));
      setColor(palette.LinearProgress, 'infoBg', private_safeLighten(palette.info.main, 0.62));
      setColor(palette.LinearProgress, 'successBg', private_safeLighten(palette.success.main, 0.62));
      setColor(palette.LinearProgress, 'warningBg', private_safeLighten(palette.warning.main, 0.62));
      setColor(palette.Skeleton, 'bg', `rgba(${setCssVarColor('palette-text-primaryChannel')} / 0.11)`);
      setColor(palette.Slider, 'primaryTrack', private_safeLighten(palette.primary.main, 0.62));
      setColor(palette.Slider, 'secondaryTrack', private_safeLighten(palette.secondary.main, 0.62));
      setColor(palette.Slider, 'errorTrack', private_safeLighten(palette.error.main, 0.62));
      setColor(palette.Slider, 'infoTrack', private_safeLighten(palette.info.main, 0.62));
      setColor(palette.Slider, 'successTrack', private_safeLighten(palette.success.main, 0.62));
      setColor(palette.Slider, 'warningTrack', private_safeLighten(palette.warning.main, 0.62));
      const snackbarContentBackground = private_safeEmphasize(palette.background.default, 0.8);
      setColor(palette.SnackbarContent, 'bg', snackbarContentBackground);
      setColor(palette.SnackbarContent, 'color', silent(() => palette.getContrastText(snackbarContentBackground)));
      setColor(palette.SpeedDialAction, 'fabHoverBg', private_safeEmphasize(palette.background.paper, 0.15));
      setColor(palette.StepConnector, 'border', setCssVarColor('palette-grey-400'));
      setColor(palette.StepContent, 'border', setCssVarColor('palette-grey-400'));
      setColor(palette.Switch, 'defaultColor', setCssVarColor('palette-common-white'));
      setColor(palette.Switch, 'defaultDisabledColor', setCssVarColor('palette-grey-100'));
      setColor(palette.Switch, 'primaryDisabledColor', private_safeLighten(palette.primary.main, 0.62));
      setColor(palette.Switch, 'secondaryDisabledColor', private_safeLighten(palette.secondary.main, 0.62));
      setColor(palette.Switch, 'errorDisabledColor', private_safeLighten(palette.error.main, 0.62));
      setColor(palette.Switch, 'infoDisabledColor', private_safeLighten(palette.info.main, 0.62));
      setColor(palette.Switch, 'successDisabledColor', private_safeLighten(palette.success.main, 0.62));
      setColor(palette.Switch, 'warningDisabledColor', private_safeLighten(palette.warning.main, 0.62));
      setColor(palette.TableCell, 'border', private_safeLighten(private_safeAlpha(palette.divider, 1), 0.88));
      setColor(palette.Tooltip, 'bg', private_safeAlpha(palette.grey[700], 0.92));
    }
    if (palette.mode === 'dark') {
      setColor(palette.Alert, 'errorColor', private_safeLighten(palette.error.light, 0.6));
      setColor(palette.Alert, 'infoColor', private_safeLighten(palette.info.light, 0.6));
      setColor(palette.Alert, 'successColor', private_safeLighten(palette.success.light, 0.6));
      setColor(palette.Alert, 'warningColor', private_safeLighten(palette.warning.light, 0.6));
      setColor(palette.Alert, 'errorFilledBg', setCssVarColor('palette-error-dark'));
      setColor(palette.Alert, 'infoFilledBg', setCssVarColor('palette-info-dark'));
      setColor(palette.Alert, 'successFilledBg', setCssVarColor('palette-success-dark'));
      setColor(palette.Alert, 'warningFilledBg', setCssVarColor('palette-warning-dark'));
      setColor(palette.Alert, 'errorFilledColor', silent(() => palette.getContrastText(palette.error.dark)));
      setColor(palette.Alert, 'infoFilledColor', silent(() => palette.getContrastText(palette.info.dark)));
      setColor(palette.Alert, 'successFilledColor', silent(() => palette.getContrastText(palette.success.dark)));
      setColor(palette.Alert, 'warningFilledColor', silent(() => palette.getContrastText(palette.warning.dark)));
      setColor(palette.Alert, 'errorStandardBg', private_safeDarken(palette.error.light, 0.9));
      setColor(palette.Alert, 'infoStandardBg', private_safeDarken(palette.info.light, 0.9));
      setColor(palette.Alert, 'successStandardBg', private_safeDarken(palette.success.light, 0.9));
      setColor(palette.Alert, 'warningStandardBg', private_safeDarken(palette.warning.light, 0.9));
      setColor(palette.Alert, 'errorIconColor', setCssVarColor('palette-error-main'));
      setColor(palette.Alert, 'infoIconColor', setCssVarColor('palette-info-main'));
      setColor(palette.Alert, 'successIconColor', setCssVarColor('palette-success-main'));
      setColor(palette.Alert, 'warningIconColor', setCssVarColor('palette-warning-main'));
      setColor(palette.AppBar, 'defaultBg', setCssVarColor('palette-grey-900'));
      setColor(palette.AppBar, 'darkBg', setCssVarColor('palette-background-paper')); // specific for dark mode
      setColor(palette.AppBar, 'darkColor', setCssVarColor('palette-text-primary')); // specific for dark mode
      setColor(palette.Avatar, 'defaultBg', setCssVarColor('palette-grey-600'));
      setColor(palette.Button, 'inheritContainedBg', setCssVarColor('palette-grey-800'));
      setColor(palette.Button, 'inheritContainedHoverBg', setCssVarColor('palette-grey-700'));
      setColor(palette.Chip, 'defaultBorder', setCssVarColor('palette-grey-700'));
      setColor(palette.Chip, 'defaultAvatarColor', setCssVarColor('palette-grey-300'));
      setColor(palette.Chip, 'defaultIconColor', setCssVarColor('palette-grey-300'));
      setColor(palette.FilledInput, 'bg', 'rgba(255, 255, 255, 0.09)');
      setColor(palette.FilledInput, 'hoverBg', 'rgba(255, 255, 255, 0.13)');
      setColor(palette.FilledInput, 'disabledBg', 'rgba(255, 255, 255, 0.12)');
      setColor(palette.LinearProgress, 'primaryBg', private_safeDarken(palette.primary.main, 0.5));
      setColor(palette.LinearProgress, 'secondaryBg', private_safeDarken(palette.secondary.main, 0.5));
      setColor(palette.LinearProgress, 'errorBg', private_safeDarken(palette.error.main, 0.5));
      setColor(palette.LinearProgress, 'infoBg', private_safeDarken(palette.info.main, 0.5));
      setColor(palette.LinearProgress, 'successBg', private_safeDarken(palette.success.main, 0.5));
      setColor(palette.LinearProgress, 'warningBg', private_safeDarken(palette.warning.main, 0.5));
      setColor(palette.Skeleton, 'bg', `rgba(${setCssVarColor('palette-text-primaryChannel')} / 0.13)`);
      setColor(palette.Slider, 'primaryTrack', private_safeDarken(palette.primary.main, 0.5));
      setColor(palette.Slider, 'secondaryTrack', private_safeDarken(palette.secondary.main, 0.5));
      setColor(palette.Slider, 'errorTrack', private_safeDarken(palette.error.main, 0.5));
      setColor(palette.Slider, 'infoTrack', private_safeDarken(palette.info.main, 0.5));
      setColor(palette.Slider, 'successTrack', private_safeDarken(palette.success.main, 0.5));
      setColor(palette.Slider, 'warningTrack', private_safeDarken(palette.warning.main, 0.5));
      const snackbarContentBackground = private_safeEmphasize(palette.background.default, 0.98);
      setColor(palette.SnackbarContent, 'bg', snackbarContentBackground);
      setColor(palette.SnackbarContent, 'color', silent(() => palette.getContrastText(snackbarContentBackground)));
      setColor(palette.SpeedDialAction, 'fabHoverBg', private_safeEmphasize(palette.background.paper, 0.15));
      setColor(palette.StepConnector, 'border', setCssVarColor('palette-grey-600'));
      setColor(palette.StepContent, 'border', setCssVarColor('palette-grey-600'));
      setColor(palette.Switch, 'defaultColor', setCssVarColor('palette-grey-300'));
      setColor(palette.Switch, 'defaultDisabledColor', setCssVarColor('palette-grey-600'));
      setColor(palette.Switch, 'primaryDisabledColor', private_safeDarken(palette.primary.main, 0.55));
      setColor(palette.Switch, 'secondaryDisabledColor', private_safeDarken(palette.secondary.main, 0.55));
      setColor(palette.Switch, 'errorDisabledColor', private_safeDarken(palette.error.main, 0.55));
      setColor(palette.Switch, 'infoDisabledColor', private_safeDarken(palette.info.main, 0.55));
      setColor(palette.Switch, 'successDisabledColor', private_safeDarken(palette.success.main, 0.55));
      setColor(palette.Switch, 'warningDisabledColor', private_safeDarken(palette.warning.main, 0.55));
      setColor(palette.TableCell, 'border', private_safeDarken(private_safeAlpha(palette.divider, 1), 0.68));
      setColor(palette.Tooltip, 'bg', private_safeAlpha(palette.grey[700], 0.92));
    }

    // MUI X - DataGrid needs this token.
    setColorChannel(palette.background, 'default');

    // added for consistency with the `background.default` token
    setColorChannel(palette.background, 'paper');
    setColorChannel(palette.common, 'background');
    setColorChannel(palette.common, 'onBackground');
    setColorChannel(palette, 'divider');
    Object.keys(palette).forEach(color => {
      const colors = palette[color];

      // The default palettes (primary, secondary, error, info, success, and warning) errors are handled by the above `createTheme(...)`.

      if (color !== 'tonalOffset' && colors && typeof colors === 'object') {
        // Silent the error for custom palettes.
        if (colors.main) {
          setColor(palette[color], 'mainChannel', private_safeColorChannel(toRgb(colors.main)));
        }
        if (colors.light) {
          setColor(palette[color], 'lightChannel', private_safeColorChannel(toRgb(colors.light)));
        }
        if (colors.dark) {
          setColor(palette[color], 'darkChannel', private_safeColorChannel(toRgb(colors.dark)));
        }
        if (colors.contrastText) {
          setColor(palette[color], 'contrastTextChannel', private_safeColorChannel(toRgb(colors.contrastText)));
        }
        if (color === 'text') {
          // Text colors: text.primary, text.secondary
          setColorChannel(palette[color], 'primary');
          setColorChannel(palette[color], 'secondary');
        }
        if (color === 'action') {
          // Action colors: action.active, action.selected
          if (colors.active) {
            setColorChannel(palette[color], 'active');
          }
          if (colors.selected) {
            setColorChannel(palette[color], 'selected');
          }
        }
      }
    });
  });
  theme = args.reduce((acc, argument) => deepmerge(acc, argument), theme);
  const parserConfig = {
    prefix: cssVarPrefix,
    disableCssColorScheme,
    shouldSkipGeneratingVar: shouldSkipGeneratingVar$1,
    getSelector: defaultGetSelector(theme)
  };
  const {
    vars,
    generateThemeVars,
    generateStyleSheets
  } = prepareCssVars(theme, parserConfig);
  theme.vars = vars;
  Object.entries(theme.colorSchemes[theme.defaultColorScheme]).forEach(([key, value]) => {
    theme[key] = value;
  });
  theme.generateThemeVars = generateThemeVars;
  theme.generateStyleSheets = generateStyleSheets;
  theme.generateSpacing = function generateSpacing() {
    return createSpacing(input.spacing, createUnarySpacing(this));
  };
  theme.getColorSchemeSelector = createGetColorSchemeSelector(selector);
  theme.spacing = theme.generateSpacing();
  theme.shouldSkipGeneratingVar = shouldSkipGeneratingVar$1;
  theme.unstable_sxConfig = {
    ...defaultSxConfig,
    ...input?.unstable_sxConfig
  };
  theme.unstable_sx = function sx(props) {
    return styleFunctionSx({
      sx: props,
      theme: this
    });
  };
  theme.toRuntimeSource = stringifyTheme; // for Pigment CSS integration

  return theme;
}// eslint-disable-next-line consistent-return
function attachColorScheme(theme, scheme, colorScheme) {
  if (!theme.colorSchemes) {
    return undefined;
  }
  if (colorScheme) {
    theme.colorSchemes[scheme] = {
      ...(colorScheme !== true && colorScheme),
      palette: createPalette({
        ...(colorScheme === true ? {} : colorScheme.palette),
        mode: scheme
      }) // cast type to skip module augmentation test
    };
  }
}

/**
 * Generate a theme base on the options received.
 * @param options Takes an incomplete theme object and adds the missing parts.
 * @param args Deep merge the arguments with the about to be returned theme.
 * @returns A complete, ready-to-use theme object.
 */
function createTheme(options = {},
// cast type to skip module augmentation test
...args) {
  const {
    palette,
    cssVariables = false,
    colorSchemes: initialColorSchemes = !palette ? {
      light: true
    } : undefined,
    defaultColorScheme: initialDefaultColorScheme = palette?.mode,
    ...rest
  } = options;
  const defaultColorSchemeInput = initialDefaultColorScheme || 'light';
  const defaultScheme = initialColorSchemes?.[defaultColorSchemeInput];
  const colorSchemesInput = {
    ...initialColorSchemes,
    ...(palette ? {
      [defaultColorSchemeInput]: {
        ...(typeof defaultScheme !== 'boolean' && defaultScheme),
        palette
      }
    } : undefined)
  };
  if (cssVariables === false) {
    if (!('colorSchemes' in options)) {
      // Behaves exactly as v5
      return createThemeNoVars(options, ...args);
    }
    let paletteOptions = palette;
    if (!('palette' in options)) {
      if (colorSchemesInput[defaultColorSchemeInput]) {
        if (colorSchemesInput[defaultColorSchemeInput] !== true) {
          paletteOptions = colorSchemesInput[defaultColorSchemeInput].palette;
        } else if (defaultColorSchemeInput === 'dark') {
          // @ts-ignore to prevent the module augmentation test from failing
          paletteOptions = {
            mode: 'dark'
          };
        }
      }
    }
    const theme = createThemeNoVars({
      ...options,
      palette: paletteOptions
    }, ...args);
    theme.defaultColorScheme = defaultColorSchemeInput;
    theme.colorSchemes = colorSchemesInput;
    if (theme.palette.mode === 'light') {
      theme.colorSchemes.light = {
        ...(colorSchemesInput.light !== true && colorSchemesInput.light),
        palette: theme.palette
      };
      attachColorScheme(theme, 'dark', colorSchemesInput.dark);
    }
    if (theme.palette.mode === 'dark') {
      theme.colorSchemes.dark = {
        ...(colorSchemesInput.dark !== true && colorSchemesInput.dark),
        palette: theme.palette
      };
      attachColorScheme(theme, 'light', colorSchemesInput.light);
    }
    return theme;
  }
  if (!palette && !('light' in colorSchemesInput) && defaultColorSchemeInput === 'light') {
    colorSchemesInput.light = true;
  }
  return createThemeWithVars({
    ...rest,
    colorSchemes: colorSchemesInput,
    defaultColorScheme: defaultColorSchemeInput,
    ...(typeof cssVariables !== 'boolean' && cssVariables)
  }, ...args);
}const defaultTheme$1 = createTheme();function useTheme() {
  const theme = useTheme$1(defaultTheme$1);
  if (process.env.NODE_ENV !== 'production') {
    // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useDebugValue(theme);
  }
  return theme[THEME_ID] || theme;
}// copied from @mui/system/createStyled
function slotShouldForwardProp(prop) {
  return prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as';
}const rootShouldForwardProp = prop => slotShouldForwardProp(prop) && prop !== 'classes';const styled = createStyled({
  themeId: THEME_ID,
  defaultTheme: defaultTheme$1,
  rootShouldForwardProp
});// eslint-disable-next-line @typescript-eslint/naming-convention
function internal_createExtendSxProp() {
  return extendSxProp$1;
}const memoTheme = unstable_memoTheme;process.env.NODE_ENV !== "production" ? {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: PropTypes.node,
  /**
   * @ignore
   */
  value: PropTypes.object.isRequired
} : void 0;
function useDefaultProps(params) {
  return useDefaultProps$1(params);
}function getSvgIconUtilityClass(slot) {
  return generateUtilityClass('MuiSvgIcon', slot);
}
generateUtilityClasses('MuiSvgIcon', ['root', 'colorPrimary', 'colorSecondary', 'colorAction', 'colorError', 'colorDisabled', 'fontSizeInherit', 'fontSizeSmall', 'fontSizeMedium', 'fontSizeLarge']);const useUtilityClasses$j = ownerState => {
  const {
    color,
    fontSize,
    classes
  } = ownerState;
  const slots = {
    root: ['root', color !== 'inherit' && `color${capitalize(color)}`, `fontSize${capitalize(fontSize)}`]
  };
  return composeClasses(slots, getSvgIconUtilityClass, classes);
};
const SvgIconRoot = styled('svg', {
  name: 'MuiSvgIcon',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.color !== 'inherit' && styles[`color${capitalize(ownerState.color)}`], styles[`fontSize${capitalize(ownerState.fontSize)}`]];
  }
})(memoTheme(({
  theme
}) => ({
  userSelect: 'none',
  width: '1em',
  height: '1em',
  display: 'inline-block',
  flexShrink: 0,
  transition: theme.transitions?.create?.('fill', {
    duration: (theme.vars ?? theme).transitions?.duration?.shorter
  }),
  variants: [{
    props: props => !props.hasSvgAsChild,
    style: {
      // the <svg> will define the property that has `currentColor`
      // for example heroicons uses fill="none" and stroke="currentColor"
      fill: 'currentColor'
    }
  }, {
    props: {
      fontSize: 'inherit'
    },
    style: {
      fontSize: 'inherit'
    }
  }, {
    props: {
      fontSize: 'small'
    },
    style: {
      fontSize: theme.typography?.pxToRem?.(20) || '1.25rem'
    }
  }, {
    props: {
      fontSize: 'medium'
    },
    style: {
      fontSize: theme.typography?.pxToRem?.(24) || '1.5rem'
    }
  }, {
    props: {
      fontSize: 'large'
    },
    style: {
      fontSize: theme.typography?.pxToRem?.(35) || '2.1875rem'
    }
  },
  // TODO v5 deprecate color prop, v6 remove for sx
  ...Object.entries((theme.vars ?? theme).palette).filter(([, value]) => value && value.main).map(([color]) => ({
    props: {
      color
    },
    style: {
      color: (theme.vars ?? theme).palette?.[color]?.main
    }
  })), {
    props: {
      color: 'action'
    },
    style: {
      color: (theme.vars ?? theme).palette?.action?.active
    }
  }, {
    props: {
      color: 'disabled'
    },
    style: {
      color: (theme.vars ?? theme).palette?.action?.disabled
    }
  }, {
    props: {
      color: 'inherit'
    },
    style: {
      color: undefined
    }
  }]
})));
const SvgIcon = /*#__PURE__*/React.forwardRef(function SvgIcon(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: 'MuiSvgIcon'
  });
  const {
    children,
    className,
    color = 'inherit',
    component = 'svg',
    fontSize = 'medium',
    htmlColor,
    inheritViewBox = false,
    titleAccess,
    viewBox = '0 0 24 24',
    ...other
  } = props;
  const hasSvgAsChild = /*#__PURE__*/React.isValidElement(children) && children.type === 'svg';
  const ownerState = {
    ...props,
    color,
    component,
    fontSize,
    instanceFontSize: inProps.fontSize,
    inheritViewBox,
    viewBox,
    hasSvgAsChild
  };
  const more = {};
  if (!inheritViewBox) {
    more.viewBox = viewBox;
  }
  const classes = useUtilityClasses$j(ownerState);
  return /*#__PURE__*/jsxs(SvgIconRoot, {
    as: component,
    className: clsx(classes.root, className),
    focusable: "false",
    color: htmlColor,
    "aria-hidden": titleAccess ? undefined : true,
    role: titleAccess ? 'img' : undefined,
    ref: ref,
    ...more,
    ...other,
    ...(hasSvgAsChild && children.props),
    ownerState: ownerState,
    children: [hasSvgAsChild ? children.props.children : children, titleAccess ? /*#__PURE__*/jsx$1("title", {
      children: titleAccess
    }) : null]
  });
});
process.env.NODE_ENV !== "production" ? SvgIcon.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['inherit', 'action', 'disabled', 'primary', 'secondary', 'error', 'info', 'success', 'warning']), PropTypes.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['inherit', 'large', 'medium', 'small']), PropTypes.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: PropTypes.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: PropTypes.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: PropTypes.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: PropTypes.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: PropTypes.string
} : void 0;
SvgIcon.muiName = 'SvgIcon';function createSvgIcon(path, displayName) {
  function Component(props, ref) {
    return /*#__PURE__*/jsx$1(SvgIcon, {
      "data-testid": process.env.NODE_ENV !== 'production' ? `${displayName}Icon` : undefined,
      ref: ref,
      ...props,
      children: path
    });
  }
  if (process.env.NODE_ENV !== 'production') {
    // Need to set `displayName` on the inner component for React.memo.
    // React prior to 16.14 ignores `displayName` on the wrapper.
    Component.displayName = `${displayName}Icon`;
  }
  Component.muiName = SvgIcon.muiName;
  return /*#__PURE__*/React.memo(/*#__PURE__*/React.forwardRef(Component));
}function ownerDocument(node) {
  return node && node.ownerDocument || document;
}function requirePropFactory(componentNameInError, Component) {
  if (process.env.NODE_ENV === 'production') {
    return () => () => null;
  }

  // eslint-disable-next-line react/forbid-foreign-prop-types
  const prevPropTypes = Component ? {
    ...Component.propTypes
  } : null;
  const requireProp = requiredProp => (props, propName, componentName, location, propFullName, ...args) => {
    const propFullNameSafe = propFullName || propName;
    const defaultTypeChecker = prevPropTypes?.[propFullNameSafe];
    if (defaultTypeChecker) {
      const typeCheckerResult = defaultTypeChecker(props, propName, componentName, location, propFullName, ...args);
      if (typeCheckerResult) {
        return typeCheckerResult;
      }
    }
    if (typeof props[propName] !== 'undefined' && !props[requiredProp]) {
      return new Error(`The prop \`${propFullNameSafe}\` of ` + `\`${componentNameInError}\` can only be used together with the \`${requiredProp}\` prop.`);
    }
    return null;
  };
  return requireProp;
}/**
 * TODO v5: consider making it private
 *
 * passes {value} to {ref}
 *
 * WARNING: Be sure to only call this inside a callback that is passed as a ref.
 * Otherwise, make sure to cleanup the previous {ref} if it changes. See
 * https://github.com/mui/material-ui/issues/13539
 *
 * Useful if you want to expose the ref of an inner component to the public API
 * while still using it inside the component.
 * @param ref A ref callback or ref object. If anything falsy, this is a no-op.
 */
function setRef(ref, value) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}let globalId = 0;

// TODO React 17: Remove `useGlobalId` once React 17 support is removed
function useGlobalId(idOverride) {
  const [defaultId, setDefaultId] = React.useState(idOverride);
  const id = idOverride || defaultId;
  React.useEffect(() => {
    if (defaultId == null) {
      // Fallback to this default id when possible.
      // Use the incrementing value for client-side rendering only.
      // We can't use it server-side.
      // If you want to use random values please consider the Birthday Problem: https://en.wikipedia.org/wiki/Birthday_problem
      globalId += 1;
      setDefaultId(`mui-${globalId}`);
    }
  }, [defaultId]);
  return id;
}

// See https://github.com/mui/material-ui/issues/41190#issuecomment-2040873379 for why
const safeReact = {
  ...React
};
const maybeReactUseId = safeReact.useId;

/**
 *
 * @example <div id={useId()} />
 * @param idOverride
 * @returns {string}
 */
function useId(idOverride) {
  // React.useId() is only available from React 17.0.0.
  if (maybeReactUseId !== undefined) {
    const reactId = maybeReactUseId();
    return idOverride ?? reactId;
  }

  // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler
  // eslint-disable-next-line react-hooks/rules-of-hooks -- `React.useId` is invariant at runtime.
  return useGlobalId(idOverride);
}// TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler -- process.env never changes, dependency arrays are intentionally ignored
/* eslint-disable react-hooks/rules-of-hooks, react-hooks/exhaustive-deps */
function useControlled(props) {
  const {
    controlled,
    default: defaultProp,
    name,
    state = 'value'
  } = props;
  // isControlled is ignored in the hook dependency lists as it should never change.
  const {
    current: isControlled
  } = React.useRef(controlled !== undefined);
  const [valueState, setValue] = React.useState(defaultProp);
  const value = isControlled ? controlled : valueState;
  if (process.env.NODE_ENV !== 'production') {
    React.useEffect(() => {
      if (isControlled !== (controlled !== undefined)) {
        console.error([`MUI: A component is changing the ${isControlled ? '' : 'un'}controlled ${state} state of ${name} to be ${isControlled ? 'un' : ''}controlled.`, 'Elements should not switch from uncontrolled to controlled (or vice versa).', `Decide between using a controlled or uncontrolled ${name} ` + 'element for the lifetime of the component.', "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", 'More info: https://fb.me/react-controlled-components'].join('\n'));
      }
    }, [state, name, controlled]);
    const {
      current: defaultValue
    } = React.useRef(defaultProp);
    React.useEffect(() => {
      // Object.is() is not equivalent to the === operator.
      // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is for more details.
      if (!isControlled && !Object.is(defaultValue, defaultProp)) {
        console.error([`MUI: A component is changing the default ${state} state of an uncontrolled ${name} after being initialized. ` + `To suppress this warning opt to use a controlled ${name}.`].join('\n'));
      }
    }, [JSON.stringify(defaultProp)]);
  }
  const setValueIfUncontrolled = React.useCallback(newValue => {
    if (!isControlled) {
      setValue(newValue);
    }
  }, []);

  // TODO: provide overloads for the useControlled function to account for the case where either
  // controlled or default is not undefiend.
  // In that case the return type should be [T, React.Dispatch<React.SetStateAction<T>>]
  // otherwise it should be [T | undefined, React.Dispatch<React.SetStateAction<T | undefined>>]
  return [value, setValueIfUncontrolled];
}/**
 * Inspired by https://github.com/facebook/react/issues/14099#issuecomment-440013892
 * See RFC in https://github.com/reactjs/rfcs/pull/220
 */

function useEventCallback(fn) {
  const ref = React.useRef(fn);
  useEnhancedEffect(() => {
    ref.current = fn;
  });
  return React.useRef((...args) =>
  // @ts-expect-error hide `this`
  (0, ref.current)(...args)).current;
}/**
 * Merges refs into a single memoized callback ref or `null`.
 *
 * ```tsx
 * const rootRef = React.useRef<Instance>(null);
 * const refFork = useForkRef(rootRef, props.ref);
 *
 * return (
 *   <Root {...props} ref={refFork} />
 * );
 * ```
 *
 * @param {Array<React.Ref<Instance> | undefined>} refs The ref array.
 * @returns {React.RefCallback<Instance> | null} The new ref callback.
 */
function useForkRef(...refs) {
  const cleanupRef = React.useRef(undefined);
  const refEffect = React.useCallback(instance => {
    const cleanups = refs.map(ref => {
      if (ref == null) {
        return null;
      }
      if (typeof ref === 'function') {
        const refCallback = ref;
        const refCleanup = refCallback(instance);
        return typeof refCleanup === 'function' ? refCleanup : () => {
          refCallback(null);
        };
      }
      ref.current = instance;
      return () => {
        ref.current = null;
      };
    });
    return () => {
      cleanups.forEach(refCleanup => refCleanup?.());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refs);
  return React.useMemo(() => {
    if (refs.every(ref => ref == null)) {
      return null;
    }
    return value => {
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = undefined;
      }
      if (value != null) {
        cleanupRef.current = refEffect(value);
      }
    };
    // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler -- intentionally ignoring that the dependency array must be an array literal
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refs);
}// Brought from [Base UI](https://github.com/mui/base-ui/blob/master/packages/react/src/merge-props/mergeProps.ts#L119)
// Use it directly from Base UI once it's a package dependency.
function isEventHandler(key, value) {
  // This approach is more efficient than using a regex.
  const thirdCharCode = key.charCodeAt(2);
  return key[0] === 'o' && key[1] === 'n' && thirdCharCode >= 65 /* A */ && thirdCharCode <= 90 /* Z */ && typeof value === 'function';
}
function mergeSlotProps$1(externalSlotProps, defaultSlotProps) {
  if (!externalSlotProps) {
    return defaultSlotProps;
  }
  function extractHandlers(externalSlotPropsValue, defaultSlotPropsValue) {
    const handlers = {};
    Object.keys(defaultSlotPropsValue).forEach(key => {
      if (isEventHandler(key, defaultSlotPropsValue[key]) && typeof externalSlotPropsValue[key] === 'function') {
        // only compose the handlers if both default and external slot props match the event handler
        handlers[key] = (...args) => {
          externalSlotPropsValue[key](...args);
          defaultSlotPropsValue[key](...args);
        };
      }
    });
    return handlers;
  }
  if (typeof externalSlotProps === 'function' || typeof defaultSlotProps === 'function') {
    return ownerState => {
      const defaultSlotPropsValue = typeof defaultSlotProps === 'function' ? defaultSlotProps(ownerState) : defaultSlotProps;
      const externalSlotPropsValue = typeof externalSlotProps === 'function' ? externalSlotProps({
        ...ownerState,
        ...defaultSlotPropsValue
      }) : externalSlotProps;
      const className = clsx(ownerState?.className, defaultSlotPropsValue?.className, externalSlotPropsValue?.className);
      const handlers = extractHandlers(externalSlotPropsValue, defaultSlotPropsValue);
      return {
        ...defaultSlotPropsValue,
        ...externalSlotPropsValue,
        ...handlers,
        ...(!!className && {
          className
        }),
        ...(defaultSlotPropsValue?.style && externalSlotPropsValue?.style && {
          style: {
            ...defaultSlotPropsValue.style,
            ...externalSlotPropsValue.style
          }
        }),
        ...(defaultSlotPropsValue?.sx && externalSlotPropsValue?.sx && {
          sx: [...(Array.isArray(defaultSlotPropsValue.sx) ? defaultSlotPropsValue.sx : [defaultSlotPropsValue.sx]), ...(Array.isArray(externalSlotPropsValue.sx) ? externalSlotPropsValue.sx : [externalSlotPropsValue.sx])]
        })
      };
    };
  }
  const typedDefaultSlotProps = defaultSlotProps;
  const handlers = extractHandlers(externalSlotProps, typedDefaultSlotProps);
  const className = clsx(typedDefaultSlotProps?.className, externalSlotProps?.className);
  return {
    ...defaultSlotProps,
    ...externalSlotProps,
    ...handlers,
    ...(!!className && {
      className
    }),
    ...(typedDefaultSlotProps?.style && externalSlotProps?.style && {
      style: {
        ...typedDefaultSlotProps.style,
        ...externalSlotProps.style
      }
    }),
    ...(typedDefaultSlotProps?.sx && externalSlotProps?.sx && {
      sx: [...(Array.isArray(typedDefaultSlotProps.sx) ? typedDefaultSlotProps.sx : [typedDefaultSlotProps.sx]), ...(Array.isArray(externalSlotProps.sx) ? externalSlotProps.sx : [externalSlotProps.sx])]
    })
  };
}function chainPropTypes(propType1, propType2) {
  if (process.env.NODE_ENV === 'production') {
    return () => null;
  }
  return function validate(...args) {
    return propType1(...args) || propType2(...args);
  };
}function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
}var config = {
  disabled: false
};var timeoutsShape = process.env.NODE_ENV !== 'production' ? PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
  enter: PropTypes.number,
  exit: PropTypes.number,
  appear: PropTypes.number
}).isRequired]) : null;
process.env.NODE_ENV !== 'production' ? PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
  enter: PropTypes.string,
  exit: PropTypes.string,
  active: PropTypes.string
}), PropTypes.shape({
  enter: PropTypes.string,
  enterDone: PropTypes.string,
  enterActive: PropTypes.string,
  exit: PropTypes.string,
  exitDone: PropTypes.string,
  exitActive: PropTypes.string
})]) : null;var TransitionGroupContext = React__default.createContext(null);var forceReflow = function forceReflow(node) {
  return node.scrollTop;
};var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM__default.findDOMNode(this); // https://github.com/reactjs/react-transition-group/pull/749
          // With unmountOnExit or mountOnEnter, the enter animation should happen at the transition between `exited` and `entering`.
          // To make the animation happen,  we have to separate each rendering and avoid being processed as batched.

          if (node) forceReflow(node);
        }

        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [ReactDOM__default.findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : ReactDOM__default.findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM__default.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children;
        _this$props.in;
        _this$props.mountOnEnter;
        _this$props.unmountOnExit;
        _this$props.appear;
        _this$props.enter;
        _this$props.exit;
        _this$props.timeout;
        _this$props.addEndListener;
        _this$props.onEnter;
        _this$props.onEntering;
        _this$props.onEntered;
        _this$props.onExit;
        _this$props.onExiting;
        _this$props.onExited;
        _this$props.nodeRef;
        var childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      React__default.createElement(TransitionGroupContext.Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : React__default.cloneElement(React__default.Children.only(children), childProps))
    );
  };

  return Transition;
}(React__default.Component);

Transition.contextType = TransitionGroupContext;
Transition.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: PropTypes.shape({
    current: typeof Element === 'undefined' ? PropTypes.any : function (propValue, key, componentName, location, propFullName, secret) {
      var value = propValue[key];
      return PropTypes.instanceOf(value && 'ownerDocument' in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
    }
  }),

  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: PropTypes.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: PropTypes.bool,

  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: PropTypes.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: PropTypes.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: PropTypes.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: PropTypes.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: PropTypes.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: PropTypes.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: PropTypes.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: PropTypes.func
} : {}; // Name the function so it is clearer in the documentation

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */

function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && isValidElement(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */

function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return cloneElement(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!isValidElement(child)) return;
    var hasPrev = (key in prevChildMapping);
    var hasNext = (key in nextChildMapping);
    var prevChild = prevChildMapping[key];
    var isLeaving = isValidElement(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = cloneElement(child, {
        in: false
      });
    } else if (hasNext && hasPrev && isValidElement(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
};
/**
 * The `<TransitionGroup>` component manages a set of transition components
 * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
 * components, `<TransitionGroup>` is a state machine for managing the mounting
 * and unmounting of components over time.
 *
 * Consider the example below. As items are removed or added to the TodoList the
 * `in` prop is toggled automatically by the `<TransitionGroup>`.
 *
 * Note that `<TransitionGroup>`  does not define any animation behavior!
 * Exactly _how_ a list item animates is up to the individual transition
 * component. This means you can mix and match animations across different list
 * items.
 */

var TransitionGroup = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(_assertThisInitialized(_this)); // Initial children should all be entering, dependent on appear


    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  } // node is `undefined` when user provided `nodeRef` prop
  ;

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = getChildMapping(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = _extends({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return /*#__PURE__*/React__default.createElement(TransitionGroupContext.Provider, {
        value: contextValue
      }, children);
    }

    return /*#__PURE__*/React__default.createElement(TransitionGroupContext.Provider, {
      value: contextValue
    }, /*#__PURE__*/React__default.createElement(Component, props, children));
  };

  return TransitionGroup;
}(React__default.Component);

TransitionGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: PropTypes.any,

  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: PropTypes.node,

  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: PropTypes.bool,

  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: PropTypes.bool,

  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: PropTypes.bool,

  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: PropTypes.func
} : {};
TransitionGroup.defaultProps = defaultProps;const UNINITIALIZED = {};

/**
 * A React.useRef() that is initialized lazily with a function. Note that it accepts an optional
 * initialization argument, so the initialization function doesn't need to be an inline closure.
 *
 * @usage
 *   const ref = useLazyRef(sortColumns, columns)
 */
function useLazyRef(init, initArg) {
  const ref = React.useRef(UNINITIALIZED);
  if (ref.current === UNINITIALIZED) {
    ref.current = init(initArg);
  }
  return ref;
}const EMPTY = [];

/**
 * A React.useEffect equivalent that runs once, when the component is mounted.
 */
function useOnMount(fn) {
  // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler -- no need to put `fn` in the dependency array
  /* eslint-disable react-hooks/exhaustive-deps */
  React.useEffect(fn, EMPTY);
  /* eslint-enable react-hooks/exhaustive-deps */
}class Timeout {
  static create() {
    return new Timeout();
  }
  currentId = null;

  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(delay, fn) {
    this.clear();
    this.currentId = setTimeout(() => {
      this.currentId = null;
      fn();
    }, delay);
  }
  clear = () => {
    if (this.currentId !== null) {
      clearTimeout(this.currentId);
      this.currentId = null;
    }
  };
  disposeEffect = () => {
    return this.clear;
  };
}
function useTimeout() {
  const timeout = useLazyRef(Timeout.create).current;
  useOnMount(timeout.disposeEffect);
  return timeout;
}function isClassComponent$1(elementType) {
  // elementType.prototype?.isReactComponent
  const {
    prototype = {}
  } = elementType;
  return Boolean(prototype.isReactComponent);
}
function elementTypeAcceptingRef(props, propName, componentName, location, propFullName) {
  const propValue = props[propName];
  const safePropName = propFullName || propName;
  if (propValue == null ||
  // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window === 'undefined') {
    return null;
  }
  let warningHint;

  /**
   * Blacklisting instead of whitelisting
   *
   * Blacklisting will miss some components, such as React.Fragment. Those will at least
   * trigger a warning in React.
   * We can't whitelist because there is no safe way to detect React.forwardRef
   * or class components. "Safe" means there's no public API.
   *
   */
  if (typeof propValue === 'function' && !isClassComponent$1(propValue)) {
    warningHint = 'Did you accidentally provide a plain function component instead?';
  }
  if (warningHint !== undefined) {
    return new Error(`Invalid ${location} \`${safePropName}\` supplied to \`${componentName}\`. ` + `Expected an element type that can hold a ref. ${warningHint} ` + 'For more information see https://mui.com/r/caveat-with-refs-guide');
  }
  return null;
}
var elementTypeAcceptingRef$1 = chainPropTypes(PropTypes.elementType, elementTypeAcceptingRef);const reflow = node => node.scrollTop;
function getTransitionProps(props, options) {
  const {
    timeout,
    easing,
    style = {}
  } = props;
  return {
    duration: style.transitionDuration ?? (typeof timeout === 'number' ? timeout : timeout[options.mode] || 0),
    easing: style.transitionTimingFunction ?? (typeof easing === 'object' ? easing[options.mode] : easing),
    delay: style.transitionDelay
  };
}function getTypeByValue(value) {
  const valueType = typeof value;
  switch (valueType) {
    case 'number':
      if (Number.isNaN(value)) {
        return 'NaN';
      }
      if (!Number.isFinite(value)) {
        return 'Infinity';
      }
      if (value !== Math.floor(value)) {
        return 'float';
      }
      return 'number';
    case 'object':
      if (value === null) {
        return 'null';
      }
      return value.constructor.name;
    default:
      return valueType;
  }
}
function requiredInteger(props, propName, componentName, location) {
  const propValue = props[propName];
  if (propValue == null || !Number.isInteger(propValue)) {
    const propType = getTypeByValue(propValue);
    return new RangeError(`Invalid ${location} \`${propName}\` of type \`${propType}\` supplied to \`${componentName}\`, expected \`integer\`.`);
  }
  return null;
}
function validator(props, propName, componentName, location) {
  const propValue = props[propName];
  if (propValue === undefined) {
    return null;
  }
  return requiredInteger(props, propName, componentName, location);
}
function validatorNoop() {
  return null;
}
validator.isRequired = requiredInteger;
validatorNoop.isRequired = validatorNoop;
const integerPropType = process.env.NODE_ENV === 'production' ? validatorNoop : validator;function getPaperUtilityClass(slot) {
  return generateUtilityClass('MuiPaper', slot);
}
generateUtilityClasses('MuiPaper', ['root', 'rounded', 'outlined', 'elevation', 'elevation0', 'elevation1', 'elevation2', 'elevation3', 'elevation4', 'elevation5', 'elevation6', 'elevation7', 'elevation8', 'elevation9', 'elevation10', 'elevation11', 'elevation12', 'elevation13', 'elevation14', 'elevation15', 'elevation16', 'elevation17', 'elevation18', 'elevation19', 'elevation20', 'elevation21', 'elevation22', 'elevation23', 'elevation24']);const useUtilityClasses$i = ownerState => {
  const {
    square,
    elevation,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ['root', variant, !square && 'rounded', variant === 'elevation' && `elevation${elevation}`]
  };
  return composeClasses(slots, getPaperUtilityClass, classes);
};
const PaperRoot = styled('div', {
  name: 'MuiPaper',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant], !ownerState.square && styles.rounded, ownerState.variant === 'elevation' && styles[`elevation${ownerState.elevation}`]];
  }
})(memoTheme(({
  theme
}) => ({
  backgroundColor: (theme.vars || theme).palette.background.paper,
  color: (theme.vars || theme).palette.text.primary,
  transition: theme.transitions.create('box-shadow'),
  variants: [{
    props: ({
      ownerState
    }) => !ownerState.square,
    style: {
      borderRadius: theme.shape.borderRadius
    }
  }, {
    props: {
      variant: 'outlined'
    },
    style: {
      border: `1px solid ${(theme.vars || theme).palette.divider}`
    }
  }, {
    props: {
      variant: 'elevation'
    },
    style: {
      boxShadow: 'var(--Paper-shadow)',
      backgroundImage: 'var(--Paper-overlay)'
    }
  }]
})));
const Paper = /*#__PURE__*/React.forwardRef(function Paper(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: 'MuiPaper'
  });
  const theme = useTheme();
  const {
    className,
    component = 'div',
    elevation = 1,
    square = false,
    variant = 'elevation',
    ...other
  } = props;
  const ownerState = {
    ...props,
    component,
    elevation,
    square,
    variant
  };
  const classes = useUtilityClasses$i(ownerState);
  if (process.env.NODE_ENV !== 'production') {
    if (theme.shadows[elevation] === undefined) {
      console.error([`MUI: The elevation provided <Paper elevation={${elevation}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${elevation}]\` is defined.`].join('\n'));
    }
  }
  return /*#__PURE__*/jsx$1(PaperRoot, {
    as: component,
    ownerState: ownerState,
    className: clsx(classes.root, className),
    ref: ref,
    ...other,
    style: {
      ...(variant === 'elevation' && {
        '--Paper-shadow': (theme.vars || theme).shadows[elevation],
        ...(theme.vars && {
          '--Paper-overlay': theme.vars.overlays?.[elevation]
        }),
        ...(!theme.vars && theme.palette.mode === 'dark' && {
          '--Paper-overlay': `linear-gradient(${alpha('#fff', getOverlayAlpha(elevation))}, ${alpha('#fff', getOverlayAlpha(elevation))})`
        })
      }),
      ...other.style
    }
  });
});
process.env.NODE_ENV !== "production" ? Paper.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: chainPropTypes(integerPropType, props => {
    const {
      elevation,
      variant
    } = props;
    if (elevation > 0 && variant === 'outlined') {
      return new Error(`MUI: Combining \`elevation={${elevation}}\` with \`variant="${variant}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`);
    }
    return null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: PropTypes.bool,
  /**
   * @ignore
   */
  style: PropTypes.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['elevation', 'outlined']), PropTypes.string])
} : void 0;/**
 * Determines if a given element is a DOM element name (i.e. not a React component).
 */
function isHostComponent(element) {
  return typeof element === 'string';
}/**
 * Type of the ownerState based on the type of an element it applies to.
 * This resolves to the provided OwnerState for React components and `undefined` for host components.
 * Falls back to `OwnerState | undefined` when the exact type can't be determined in development time.
 */

/**
 * Appends the ownerState object to the props, merging with the existing one if necessary.
 *
 * @param elementType Type of the element that owns the `existingProps`. If the element is a DOM node or undefined, `ownerState` is not applied.
 * @param otherProps Props of the element.
 * @param ownerState
 */
function appendOwnerState(elementType, otherProps, ownerState) {
  if (elementType === undefined || isHostComponent(elementType)) {
    return otherProps;
  }
  return {
    ...otherProps,
    ownerState: {
      ...otherProps.ownerState,
      ...ownerState
    }
  };
}/**
 * If `componentProps` is a function, calls it with the provided `ownerState`.
 * Otherwise, just returns `componentProps`.
 */
function resolveComponentProps(componentProps, ownerState, slotState) {
  if (typeof componentProps === 'function') {
    return componentProps(ownerState, slotState);
  }
  return componentProps;
}/**
 * Extracts event handlers from a given object.
 * A prop is considered an event handler if it is a function and its name starts with `on`.
 *
 * @param object An object to extract event handlers from.
 * @param excludeKeys An array of keys to exclude from the returned object.
 */
function extractEventHandlers(object, excludeKeys = []) {
  if (object === undefined) {
    return {};
  }
  const result = {};
  Object.keys(object).filter(prop => prop.match(/^on[A-Z]/) && typeof object[prop] === 'function' && !excludeKeys.includes(prop)).forEach(prop => {
    result[prop] = object[prop];
  });
  return result;
}/**
 * Removes event handlers from the given object.
 * A field is considered an event handler if it is a function with a name beginning with `on`.
 *
 * @param object Object to remove event handlers from.
 * @returns Object with event handlers removed.
 */
function omitEventHandlers(object) {
  if (object === undefined) {
    return {};
  }
  const result = {};
  Object.keys(object).filter(prop => !(prop.match(/^on[A-Z]/) && typeof object[prop] === 'function')).forEach(prop => {
    result[prop] = object[prop];
  });
  return result;
}/**
 * Merges the slot component internal props (usually coming from a hook)
 * with the externally provided ones.
 *
 * The merge order is (the latter overrides the former):
 * 1. The internal props (specified as a getter function to work with get*Props hook result)
 * 2. Additional props (specified internally on a Base UI component)
 * 3. External props specified on the owner component. These should only be used on a root slot.
 * 4. External props specified in the `slotProps.*` prop.
 * 5. The `className` prop - combined from all the above.
 * @param parameters
 * @returns
 */
function mergeSlotProps(parameters) {
  const {
    getSlotProps,
    additionalProps,
    externalSlotProps,
    externalForwardedProps,
    className
  } = parameters;
  if (!getSlotProps) {
    // The simpler case - getSlotProps is not defined, so no internal event handlers are defined,
    // so we can simply merge all the props without having to worry about extracting event handlers.
    const joinedClasses = clsx(additionalProps?.className, className, externalForwardedProps?.className, externalSlotProps?.className);
    const mergedStyle = {
      ...additionalProps?.style,
      ...externalForwardedProps?.style,
      ...externalSlotProps?.style
    };
    const props = {
      ...additionalProps,
      ...externalForwardedProps,
      ...externalSlotProps
    };
    if (joinedClasses.length > 0) {
      props.className = joinedClasses;
    }
    if (Object.keys(mergedStyle).length > 0) {
      props.style = mergedStyle;
    }
    return {
      props,
      internalRef: undefined
    };
  }

  // In this case, getSlotProps is responsible for calling the external event handlers.
  // We don't need to include them in the merged props because of this.

  const eventHandlers = extractEventHandlers({
    ...externalForwardedProps,
    ...externalSlotProps
  });
  const componentsPropsWithoutEventHandlers = omitEventHandlers(externalSlotProps);
  const otherPropsWithoutEventHandlers = omitEventHandlers(externalForwardedProps);
  const internalSlotProps = getSlotProps(eventHandlers);

  // The order of classes is important here.
  // Emotion (that we use in libraries consuming Base UI) depends on this order
  // to properly override style. It requires the most important classes to be last
  // (see https://github.com/mui/material-ui/pull/33205) for the related discussion.
  const joinedClasses = clsx(internalSlotProps?.className, additionalProps?.className, className, externalForwardedProps?.className, externalSlotProps?.className);
  const mergedStyle = {
    ...internalSlotProps?.style,
    ...additionalProps?.style,
    ...externalForwardedProps?.style,
    ...externalSlotProps?.style
  };
  const props = {
    ...internalSlotProps,
    ...additionalProps,
    ...otherPropsWithoutEventHandlers,
    ...componentsPropsWithoutEventHandlers
  };
  if (joinedClasses.length > 0) {
    props.className = joinedClasses;
  }
  if (Object.keys(mergedStyle).length > 0) {
    props.style = mergedStyle;
  }
  return {
    props,
    internalRef: internalSlotProps.ref
  };
}/**
 * An internal function to create a Material UI slot.
 *
 * This is an advanced version of Base UI `useSlotProps` because Material UI allows leaf component to be customized via `component` prop
 * while Base UI does not need to support leaf component customization.
 *
 * @param {string} name: name of the slot
 * @param {object} parameters
 * @returns {[Slot, slotProps]} The slot's React component and the slot's props
 *
 * Note: the returned slot's props
 * - will never contain `component` prop.
 * - might contain `as` prop.
 */
function useSlot(
/**
 * The slot's name. All Material UI components should have `root` slot.
 *
 * If the name is `root`, the logic behaves differently from other slots,
 * e.g. the `externalForwardedProps` are spread to `root` slot but not other slots.
 */
name, parameters) {
  const {
    className,
    elementType: initialElementType,
    ownerState,
    externalForwardedProps,
    internalForwardedProps,
    shouldForwardComponentProp = false,
    ...useSlotPropsParams
  } = parameters;
  const {
    component: rootComponent,
    slots = {
      [name]: undefined
    },
    slotProps = {
      [name]: undefined
    },
    ...other
  } = externalForwardedProps;
  const elementType = slots[name] || initialElementType;

  // `slotProps[name]` can be a callback that receives the component's ownerState.
  // `resolvedComponentsProps` is always a plain object.
  const resolvedComponentsProps = resolveComponentProps(slotProps[name], ownerState);
  const {
    props: {
      component: slotComponent,
      ...mergedProps
    },
    internalRef
  } = mergeSlotProps({
    className,
    ...useSlotPropsParams,
    externalForwardedProps: name === 'root' ? other : undefined,
    externalSlotProps: resolvedComponentsProps
  });
  const ref = useForkRef(internalRef, resolvedComponentsProps?.ref, parameters.ref);
  const LeafComponent = name === 'root' ? slotComponent || rootComponent : slotComponent;
  const props = appendOwnerState(elementType, {
    ...(name === 'root' && !rootComponent && !slots[name] && internalForwardedProps),
    ...(name !== 'root' && !slots[name] && internalForwardedProps),
    ...mergedProps,
    ...(LeafComponent && !shouldForwardComponentProp && {
      as: LeafComponent
    }),
    ...(LeafComponent && shouldForwardComponentProp && {
      component: LeafComponent
    }),
    ref
  }, ownerState);
  return [elementType, props];
}const refType = PropTypes.oneOfType([PropTypes.func, PropTypes.object]);/**
 * Returns a boolean indicating if the event's target has :focus-visible
 */
function isFocusVisible(element) {
  try {
    return element.matches(':focus-visible');
  } catch (error) {
    // Do not warn on jsdom tests, otherwise all tests that rely on focus have to be skipped
    // Tests that rely on `:focus-visible` will still have to be skipped in jsdom
    if (process.env.NODE_ENV !== 'production' && !/jsdom/.test(window.navigator.userAgent)) {
      console.warn(['MUI: The `:focus-visible` pseudo class is not supported in this browser.', 'Some components rely on this feature to work properly.'].join('\n'));
    }
  }
  return false;
}/**
 * Lazy initialization container for the Ripple instance. This improves
 * performance by delaying mounting the ripple until it's needed.
 */
class LazyRipple {
  /** React ref to the ripple instance */

  /** If the ripple component should be mounted */

  /** Promise that resolves when the ripple component is mounted */

  /** If the ripple component has been mounted */

  /** React state hook setter */

  static create() {
    return new LazyRipple();
  }
  static use() {
    /* eslint-disable */
    const ripple = useLazyRef(LazyRipple.create).current;
    const [shouldMount, setShouldMount] = React.useState(false);
    ripple.shouldMount = shouldMount;
    ripple.setShouldMount = setShouldMount;
    React.useEffect(ripple.mountEffect, [shouldMount]);
    /* eslint-enable */

    return ripple;
  }
  constructor() {
    this.ref = {
      current: null
    };
    this.mounted = null;
    this.didMount = false;
    this.shouldMount = false;
    this.setShouldMount = null;
  }
  mount() {
    if (!this.mounted) {
      this.mounted = createControlledPromise();
      this.shouldMount = true;
      this.setShouldMount(this.shouldMount);
    }
    return this.mounted;
  }
  mountEffect = () => {
    if (this.shouldMount && !this.didMount) {
      if (this.ref.current !== null) {
        this.didMount = true;
        this.mounted.resolve();
      }
    }
  };

  /* Ripple API */

  start(...args) {
    this.mount().then(() => this.ref.current?.start(...args));
  }
  stop(...args) {
    this.mount().then(() => this.ref.current?.stop(...args));
  }
  pulsate(...args) {
    this.mount().then(() => this.ref.current?.pulsate(...args));
  }
}
function useLazyRipple() {
  return LazyRipple.use();
}
function createControlledPromise() {
  let resolve;
  let reject;
  const p = new Promise((resolveFn, rejectFn) => {
    resolve = resolveFn;
    reject = rejectFn;
  });
  p.resolve = resolve;
  p.reject = reject;
  return p;
}function Ripple(props) {
  const {
    className,
    classes,
    pulsate = false,
    rippleX,
    rippleY,
    rippleSize,
    in: inProp,
    onExited,
    timeout
  } = props;
  const [leaving, setLeaving] = React.useState(false);
  const rippleClassName = clsx(className, classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate);
  const rippleStyles = {
    width: rippleSize,
    height: rippleSize,
    top: -(rippleSize / 2) + rippleY,
    left: -(rippleSize / 2) + rippleX
  };
  const childClassName = clsx(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);
  if (!inProp && !leaving) {
    setLeaving(true);
  }
  React.useEffect(() => {
    if (!inProp && onExited != null) {
      // react-transition-group#onExited
      const timeoutId = setTimeout(onExited, timeout);
      return () => {
        clearTimeout(timeoutId);
      };
    }
    return undefined;
  }, [onExited, inProp, timeout]);
  return /*#__PURE__*/jsx$1("span", {
    className: rippleClassName,
    style: rippleStyles,
    children: /*#__PURE__*/jsx$1("span", {
      className: childClassName
    })
  });
}
process.env.NODE_ENV !== "production" ? Ripple.propTypes /* remove-proptypes */ = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: PropTypes.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: PropTypes.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: PropTypes.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: PropTypes.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: PropTypes.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: PropTypes.number,
  /**
   * exit delay
   */
  timeout: PropTypes.number.isRequired
} : void 0;const touchRippleClasses = generateUtilityClasses('MuiTouchRipple', ['root', 'ripple', 'rippleVisible', 'ripplePulsate', 'child', 'childLeaving', 'childPulsate']);const DURATION = 550;
const DELAY_RIPPLE = 80;
const enterKeyframe = keyframes`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`;
const exitKeyframe = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;
const pulsateKeyframe = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`;
const TouchRippleRoot = styled('span', {
  name: 'MuiTouchRipple',
  slot: 'Root'
})({
  overflow: 'hidden',
  pointerEvents: 'none',
  position: 'absolute',
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: 'inherit'
});

// This `styled()` function invokes keyframes. `styled-components` only supports keyframes
// in string templates. Do not convert these styles in JS object as it will break.
const TouchRippleRipple = styled(Ripple, {
  name: 'MuiTouchRipple',
  slot: 'Ripple'
})`
  opacity: 0;
  position: absolute;

  &.${touchRippleClasses.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${enterKeyframe};
    animation-duration: ${DURATION}ms;
    animation-timing-function: ${({
  theme
}) => theme.transitions.easing.easeInOut};
  }

  &.${touchRippleClasses.ripplePulsate} {
    animation-duration: ${({
  theme
}) => theme.transitions.duration.shorter}ms;
  }

  & .${touchRippleClasses.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${touchRippleClasses.childLeaving} {
    opacity: 0;
    animation-name: ${exitKeyframe};
    animation-duration: ${DURATION}ms;
    animation-timing-function: ${({
  theme
}) => theme.transitions.easing.easeInOut};
  }

  & .${touchRippleClasses.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${pulsateKeyframe};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme
}) => theme.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`;

/**
 * @ignore - internal component.
 *
 * TODO v5: Make private
 */
const TouchRipple = /*#__PURE__*/React.forwardRef(function TouchRipple(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: 'MuiTouchRipple'
  });
  const {
    center: centerProp = false,
    classes = {},
    className,
    ...other
  } = props;
  const [ripples, setRipples] = React.useState([]);
  const nextKey = React.useRef(0);
  const rippleCallback = React.useRef(null);
  React.useEffect(() => {
    if (rippleCallback.current) {
      rippleCallback.current();
      rippleCallback.current = null;
    }
  }, [ripples]);

  // Used to filter out mouse emulated events on mobile.
  const ignoringMouseDown = React.useRef(false);
  // We use a timer in order to only show the ripples for touch "click" like events.
  // We don't want to display the ripple for touch scroll events.
  const startTimer = useTimeout();

  // This is the hook called once the previous timeout is ready.
  const startTimerCommit = React.useRef(null);
  const container = React.useRef(null);
  const startCommit = React.useCallback(params => {
    const {
      pulsate,
      rippleX,
      rippleY,
      rippleSize,
      cb
    } = params;
    setRipples(oldRipples => [...oldRipples, /*#__PURE__*/jsx$1(TouchRippleRipple, {
      classes: {
        ripple: clsx(classes.ripple, touchRippleClasses.ripple),
        rippleVisible: clsx(classes.rippleVisible, touchRippleClasses.rippleVisible),
        ripplePulsate: clsx(classes.ripplePulsate, touchRippleClasses.ripplePulsate),
        child: clsx(classes.child, touchRippleClasses.child),
        childLeaving: clsx(classes.childLeaving, touchRippleClasses.childLeaving),
        childPulsate: clsx(classes.childPulsate, touchRippleClasses.childPulsate)
      },
      timeout: DURATION,
      pulsate: pulsate,
      rippleX: rippleX,
      rippleY: rippleY,
      rippleSize: rippleSize
    }, nextKey.current)]);
    nextKey.current += 1;
    rippleCallback.current = cb;
  }, [classes]);
  const start = React.useCallback((event = {}, options = {}, cb = () => {}) => {
    const {
      pulsate = false,
      center = centerProp || options.pulsate,
      fakeElement = false // For test purposes
    } = options;
    if (event?.type === 'mousedown' && ignoringMouseDown.current) {
      ignoringMouseDown.current = false;
      return;
    }
    if (event?.type === 'touchstart') {
      ignoringMouseDown.current = true;
    }
    const element = fakeElement ? null : container.current;
    const rect = element ? element.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };

    // Get the size of the ripple
    let rippleX;
    let rippleY;
    let rippleSize;
    if (center || event === undefined || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
      rippleX = Math.round(rect.width / 2);
      rippleY = Math.round(rect.height / 2);
    } else {
      const {
        clientX,
        clientY
      } = event.touches && event.touches.length > 0 ? event.touches[0] : event;
      rippleX = Math.round(clientX - rect.left);
      rippleY = Math.round(clientY - rect.top);
    }
    if (center) {
      rippleSize = Math.sqrt((2 * rect.width ** 2 + rect.height ** 2) / 3);

      // For some reason the animation is broken on Mobile Chrome if the size is even.
      if (rippleSize % 2 === 0) {
        rippleSize += 1;
      }
    } else {
      const sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
      const sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
      rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2);
    }

    // Touche devices
    if (event?.touches) {
      // check that this isn't another touchstart due to multitouch
      // otherwise we will only clear a single timer when unmounting while two
      // are running
      if (startTimerCommit.current === null) {
        // Prepare the ripple effect.
        startTimerCommit.current = () => {
          startCommit({
            pulsate,
            rippleX,
            rippleY,
            rippleSize,
            cb
          });
        };
        // Delay the execution of the ripple effect.
        // We have to make a tradeoff with this delay value.
        startTimer.start(DELAY_RIPPLE, () => {
          if (startTimerCommit.current) {
            startTimerCommit.current();
            startTimerCommit.current = null;
          }
        });
      }
    } else {
      startCommit({
        pulsate,
        rippleX,
        rippleY,
        rippleSize,
        cb
      });
    }
  }, [centerProp, startCommit, startTimer]);
  const pulsate = React.useCallback(() => {
    start({}, {
      pulsate: true
    });
  }, [start]);
  const stop = React.useCallback((event, cb) => {
    startTimer.clear();

    // The touch interaction occurs too quickly.
    // We still want to show ripple effect.
    if (event?.type === 'touchend' && startTimerCommit.current) {
      startTimerCommit.current();
      startTimerCommit.current = null;
      startTimer.start(0, () => {
        stop(event, cb);
      });
      return;
    }
    startTimerCommit.current = null;
    setRipples(oldRipples => {
      if (oldRipples.length > 0) {
        return oldRipples.slice(1);
      }
      return oldRipples;
    });
    rippleCallback.current = cb;
  }, [startTimer]);
  React.useImperativeHandle(ref, () => ({
    pulsate,
    start,
    stop
  }), [pulsate, start, stop]);
  return /*#__PURE__*/jsx$1(TouchRippleRoot, {
    className: clsx(touchRippleClasses.root, classes.root, className),
    ref: container,
    ...other,
    children: /*#__PURE__*/jsx$1(TransitionGroup, {
      component: null,
      exit: true,
      children: ripples
    })
  });
});
process.env.NODE_ENV !== "production" ? TouchRipple.propTypes /* remove-proptypes */ = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: PropTypes.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string
} : void 0;function getButtonBaseUtilityClass(slot) {
  return generateUtilityClass('MuiButtonBase', slot);
}
const buttonBaseClasses = generateUtilityClasses('MuiButtonBase', ['root', 'disabled', 'focusVisible']);const useUtilityClasses$h = ownerState => {
  const {
    disabled,
    focusVisible,
    focusVisibleClassName,
    classes
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', focusVisible && 'focusVisible']
  };
  const composedClasses = composeClasses(slots, getButtonBaseUtilityClass, classes);
  if (focusVisible && focusVisibleClassName) {
    composedClasses.root += ` ${focusVisibleClassName}`;
  }
  return composedClasses;
};
const ButtonBaseRoot = styled('button', {
  name: 'MuiButtonBase',
  slot: 'Root'
})({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  boxSizing: 'border-box',
  WebkitTapHighlightColor: 'transparent',
  backgroundColor: 'transparent',
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: 'pointer',
  userSelect: 'none',
  verticalAlign: 'middle',
  MozAppearance: 'none',
  // Reset
  WebkitAppearance: 'none',
  // Reset
  textDecoration: 'none',
  // So we take precedent over the style of a native <a /> element.
  color: 'inherit',
  '&::-moz-focus-inner': {
    borderStyle: 'none' // Remove Firefox dotted outline.
  },
  [`&.${buttonBaseClasses.disabled}`]: {
    pointerEvents: 'none',
    // Disable link interactions
    cursor: 'default'
  },
  '@media print': {
    colorAdjust: 'exact'
  }
});

/**
 * `ButtonBase` contains as few styles as possible.
 * It aims to be a simple building block for creating a button.
 * It contains a load of style reset and some focus/ripple logic.
 */
const ButtonBase = /*#__PURE__*/React.forwardRef(function ButtonBase(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: 'MuiButtonBase'
  });
  const {
    action,
    centerRipple = false,
    children,
    className,
    component = 'button',
    disabled = false,
    disableRipple = false,
    disableTouchRipple = false,
    focusRipple = false,
    focusVisibleClassName,
    LinkComponent = 'a',
    onBlur,
    onClick,
    onContextMenu,
    onDragLeave,
    onFocus,
    onFocusVisible,
    onKeyDown,
    onKeyUp,
    onMouseDown,
    onMouseLeave,
    onMouseUp,
    onTouchEnd,
    onTouchMove,
    onTouchStart,
    tabIndex = 0,
    TouchRippleProps,
    touchRippleRef,
    type,
    ...other
  } = props;
  const buttonRef = React.useRef(null);
  const ripple = useLazyRipple();
  const handleRippleRef = useForkRef(ripple.ref, touchRippleRef);
  const [focusVisible, setFocusVisible] = React.useState(false);
  if (disabled && focusVisible) {
    setFocusVisible(false);
  }
  React.useImperativeHandle(action, () => ({
    focusVisible: () => {
      setFocusVisible(true);
      buttonRef.current.focus();
    }
  }), []);
  const enableTouchRipple = ripple.shouldMount && !disableRipple && !disabled;
  React.useEffect(() => {
    if (focusVisible && focusRipple && !disableRipple) {
      ripple.pulsate();
    }
  }, [disableRipple, focusRipple, focusVisible, ripple]);
  const handleMouseDown = useRippleHandler(ripple, 'start', onMouseDown, disableTouchRipple);
  const handleContextMenu = useRippleHandler(ripple, 'stop', onContextMenu, disableTouchRipple);
  const handleDragLeave = useRippleHandler(ripple, 'stop', onDragLeave, disableTouchRipple);
  const handleMouseUp = useRippleHandler(ripple, 'stop', onMouseUp, disableTouchRipple);
  const handleMouseLeave = useRippleHandler(ripple, 'stop', event => {
    if (focusVisible) {
      event.preventDefault();
    }
    if (onMouseLeave) {
      onMouseLeave(event);
    }
  }, disableTouchRipple);
  const handleTouchStart = useRippleHandler(ripple, 'start', onTouchStart, disableTouchRipple);
  const handleTouchEnd = useRippleHandler(ripple, 'stop', onTouchEnd, disableTouchRipple);
  const handleTouchMove = useRippleHandler(ripple, 'stop', onTouchMove, disableTouchRipple);
  const handleBlur = useRippleHandler(ripple, 'stop', event => {
    if (!isFocusVisible(event.target)) {
      setFocusVisible(false);
    }
    if (onBlur) {
      onBlur(event);
    }
  }, false);
  const handleFocus = useEventCallback(event => {
    // Fix for https://github.com/facebook/react/issues/7769
    if (!buttonRef.current) {
      buttonRef.current = event.currentTarget;
    }
    if (isFocusVisible(event.target)) {
      setFocusVisible(true);
      if (onFocusVisible) {
        onFocusVisible(event);
      }
    }
    if (onFocus) {
      onFocus(event);
    }
  });
  const isNonNativeButton = () => {
    const button = buttonRef.current;
    return component && component !== 'button' && !(button.tagName === 'A' && button.href);
  };
  const handleKeyDown = useEventCallback(event => {
    // Check if key is already down to avoid repeats being counted as multiple activations
    if (focusRipple && !event.repeat && focusVisible && event.key === ' ') {
      ripple.stop(event, () => {
        ripple.start(event);
      });
    }
    if (event.target === event.currentTarget && isNonNativeButton() && event.key === ' ') {
      event.preventDefault();
    }
    if (onKeyDown) {
      onKeyDown(event);
    }

    // Keyboard accessibility for non interactive elements
    if (event.target === event.currentTarget && isNonNativeButton() && event.key === 'Enter' && !disabled) {
      event.preventDefault();
      if (onClick) {
        onClick(event);
      }
    }
  });
  const handleKeyUp = useEventCallback(event => {
    // calling preventDefault in keyUp on a <button> will not dispatch a click event if Space is pressed
    // https://codesandbox.io/p/sandbox/button-keyup-preventdefault-dn7f0
    if (focusRipple && event.key === ' ' && focusVisible && !event.defaultPrevented) {
      ripple.stop(event, () => {
        ripple.pulsate(event);
      });
    }
    if (onKeyUp) {
      onKeyUp(event);
    }

    // Keyboard accessibility for non interactive elements
    if (onClick && event.target === event.currentTarget && isNonNativeButton() && event.key === ' ' && !event.defaultPrevented) {
      onClick(event);
    }
  });
  let ComponentProp = component;
  if (ComponentProp === 'button' && (other.href || other.to)) {
    ComponentProp = LinkComponent;
  }
  const buttonProps = {};
  if (ComponentProp === 'button') {
    buttonProps.type = type === undefined ? 'button' : type;
    buttonProps.disabled = disabled;
  } else {
    if (!other.href && !other.to) {
      buttonProps.role = 'button';
    }
    if (disabled) {
      buttonProps['aria-disabled'] = disabled;
    }
  }
  const handleRef = useForkRef(ref, buttonRef);
  const ownerState = {
    ...props,
    centerRipple,
    component,
    disabled,
    disableRipple,
    disableTouchRipple,
    focusRipple,
    tabIndex,
    focusVisible
  };
  const classes = useUtilityClasses$h(ownerState);
  return /*#__PURE__*/jsxs(ButtonBaseRoot, {
    as: ComponentProp,
    className: clsx(classes.root, className),
    ownerState: ownerState,
    onBlur: handleBlur,
    onClick: onClick,
    onContextMenu: handleContextMenu,
    onFocus: handleFocus,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    onMouseDown: handleMouseDown,
    onMouseLeave: handleMouseLeave,
    onMouseUp: handleMouseUp,
    onDragLeave: handleDragLeave,
    onTouchEnd: handleTouchEnd,
    onTouchMove: handleTouchMove,
    onTouchStart: handleTouchStart,
    ref: handleRef,
    tabIndex: disabled ? -1 : tabIndex,
    type: type,
    ...buttonProps,
    ...other,
    children: [children, enableTouchRipple ? /*#__PURE__*/jsx$1(TouchRipple, {
      ref: handleRippleRef,
      center: centerRipple,
      ...TouchRippleProps
    }) : null]
  });
});
function useRippleHandler(ripple, rippleAction, eventCallback, skipRippleAction = false) {
  return useEventCallback(event => {
    if (eventCallback) {
      eventCallback(event);
    }
    if (!skipRippleAction) {
      ripple[rippleAction](event);
    }
    return true;
  });
}
process.env.NODE_ENV !== "production" ? ButtonBase.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: refType,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: PropTypes.bool,
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: elementTypeAcceptingRef$1,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: PropTypes.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: PropTypes.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: PropTypes.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: PropTypes.string,
  /**
   * @ignore
   */
  href: PropTypes /* @typescript-to-proptypes-ignore */.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: PropTypes.elementType,
  /**
   * @ignore
   */
  onBlur: PropTypes.func,
  /**
   * @ignore
   */
  onClick: PropTypes.func,
  /**
   * @ignore
   */
  onContextMenu: PropTypes.func,
  /**
   * @ignore
   */
  onDragLeave: PropTypes.func,
  /**
   * @ignore
   */
  onFocus: PropTypes.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: PropTypes.func,
  /**
   * @ignore
   */
  onKeyDown: PropTypes.func,
  /**
   * @ignore
   */
  onKeyUp: PropTypes.func,
  /**
   * @ignore
   */
  onMouseDown: PropTypes.func,
  /**
   * @ignore
   */
  onMouseLeave: PropTypes.func,
  /**
   * @ignore
   */
  onMouseUp: PropTypes.func,
  /**
   * @ignore
   */
  onTouchEnd: PropTypes.func,
  /**
   * @ignore
   */
  onTouchMove: PropTypes.func,
  /**
   * @ignore
   */
  onTouchStart: PropTypes.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * @default 0
   */
  tabIndex: PropTypes.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: PropTypes.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.shape({
      pulsate: PropTypes.func.isRequired,
      start: PropTypes.func.isRequired,
      stop: PropTypes.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: PropTypes.oneOfType([PropTypes.oneOf(['button', 'reset', 'submit']), PropTypes.string])
} : void 0;/**
 * Type guard to check if the object has a "main" property of type string.
 *
 * @param obj - the object to check
 * @returns boolean
 */
function hasCorrectMainProperty(obj) {
  return typeof obj.main === 'string';
}
/**
 * Checks if the object conforms to the SimplePaletteColorOptions type.
 * The minimum requirement is that the object has a "main" property of type string, this is always checked.
 * Optionally, you can pass additional properties to check.
 *
 * @param obj - The object to check
 * @param additionalPropertiesToCheck - Array containing "light", "dark", and/or "contrastText"
 * @returns boolean
 */
function checkSimplePaletteColorValues(obj, additionalPropertiesToCheck = []) {
  if (!hasCorrectMainProperty(obj)) {
    return false;
  }
  for (const value of additionalPropertiesToCheck) {
    if (!obj.hasOwnProperty(value) || typeof obj[value] !== 'string') {
      return false;
    }
  }
  return true;
}

/**
 * Creates a filter function used to filter simple palette color options.
 * The minimum requirement is that the object has a "main" property of type string, this is always checked.
 * Optionally, you can pass additional properties to check.
 *
 * @param additionalPropertiesToCheck - Array containing "light", "dark", and/or "contrastText"
 * @returns ([, value]: [any, PaletteColorOptions]) => boolean
 */
function createSimplePaletteValueFilter(additionalPropertiesToCheck = []) {
  return ([, value]) => value && checkSimplePaletteColorValues(value, additionalPropertiesToCheck);
}function getCircularProgressUtilityClass(slot) {
  return generateUtilityClass('MuiCircularProgress', slot);
}
generateUtilityClasses('MuiCircularProgress', ['root', 'determinate', 'indeterminate', 'colorPrimary', 'colorSecondary', 'svg', 'circle', 'circleDeterminate', 'circleIndeterminate', 'circleDisableShrink']);const SIZE = 44;
const circularRotateKeyframe = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;
const circularDashKeyframe = keyframes`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`;

// This implementation is for supporting both Styled-components v4+ and Pigment CSS.
// A global animation has to be created here for Styled-components v4+ (https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#12).
// which can be done by checking typeof indeterminate1Keyframe !== 'string' (at runtime, Pigment CSS transform keyframes`` to a string).
const rotateAnimation = typeof circularRotateKeyframe !== 'string' ? css`
        animation: ${circularRotateKeyframe} 1.4s linear infinite;
      ` : null;
const dashAnimation = typeof circularDashKeyframe !== 'string' ? css`
        animation: ${circularDashKeyframe} 1.4s ease-in-out infinite;
      ` : null;
const useUtilityClasses$g = ownerState => {
  const {
    classes,
    variant,
    color,
    disableShrink
  } = ownerState;
  const slots = {
    root: ['root', variant, `color${capitalize(color)}`],
    svg: ['svg'],
    circle: ['circle', `circle${capitalize(variant)}`, disableShrink && 'circleDisableShrink']
  };
  return composeClasses(slots, getCircularProgressUtilityClass, classes);
};
const CircularProgressRoot = styled('span', {
  name: 'MuiCircularProgress',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant], styles[`color${capitalize(ownerState.color)}`]];
  }
})(memoTheme(({
  theme
}) => ({
  display: 'inline-block',
  variants: [{
    props: {
      variant: 'determinate'
    },
    style: {
      transition: theme.transitions.create('transform')
    }
  }, {
    props: {
      variant: 'indeterminate'
    },
    style: rotateAnimation || {
      animation: `${circularRotateKeyframe} 1.4s linear infinite`
    }
  }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color
    },
    style: {
      color: (theme.vars || theme).palette[color].main
    }
  }))]
})));
const CircularProgressSVG = styled('svg', {
  name: 'MuiCircularProgress',
  slot: 'Svg'
})({
  display: 'block' // Keeps the progress centered
});
const CircularProgressCircle = styled('circle', {
  name: 'MuiCircularProgress',
  slot: 'Circle',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.circle, styles[`circle${capitalize(ownerState.variant)}`], ownerState.disableShrink && styles.circleDisableShrink];
  }
})(memoTheme(({
  theme
}) => ({
  stroke: 'currentColor',
  variants: [{
    props: {
      variant: 'determinate'
    },
    style: {
      transition: theme.transitions.create('stroke-dashoffset')
    }
  }, {
    props: {
      variant: 'indeterminate'
    },
    style: {
      // Some default value that looks fine waiting for the animation to kicks in.
      strokeDasharray: '80px, 200px',
      strokeDashoffset: 0 // Add the unit to fix a Edge 16 and below bug.
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.variant === 'indeterminate' && !ownerState.disableShrink,
    style: dashAnimation || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${circularDashKeyframe} 1.4s ease-in-out infinite`
    }
  }]
})));

/**
 * ## ARIA
 *
 * If the progress bar is describing the loading progress of a particular region of a page,
 * you should use `aria-describedby` to point to the progress bar, and set the `aria-busy`
 * attribute to `true` on that region until it has finished loading.
 */
const CircularProgress = /*#__PURE__*/React.forwardRef(function CircularProgress(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: 'MuiCircularProgress'
  });
  const {
    className,
    color = 'primary',
    disableShrink = false,
    size = 40,
    style,
    thickness = 3.6,
    value = 0,
    variant = 'indeterminate',
    ...other
  } = props;
  const ownerState = {
    ...props,
    color,
    disableShrink,
    size,
    thickness,
    value,
    variant
  };
  const classes = useUtilityClasses$g(ownerState);
  const circleStyle = {};
  const rootStyle = {};
  const rootProps = {};
  if (variant === 'determinate') {
    const circumference = 2 * Math.PI * ((SIZE - thickness) / 2);
    circleStyle.strokeDasharray = circumference.toFixed(3);
    rootProps['aria-valuenow'] = Math.round(value);
    circleStyle.strokeDashoffset = `${((100 - value) / 100 * circumference).toFixed(3)}px`;
    rootStyle.transform = 'rotate(-90deg)';
  }
  return /*#__PURE__*/jsx$1(CircularProgressRoot, {
    className: clsx(classes.root, className),
    style: {
      width: size,
      height: size,
      ...rootStyle,
      ...style
    },
    ownerState: ownerState,
    ref: ref,
    role: "progressbar",
    ...rootProps,
    ...other,
    children: /*#__PURE__*/jsx$1(CircularProgressSVG, {
      className: classes.svg,
      ownerState: ownerState,
      viewBox: `${SIZE / 2} ${SIZE / 2} ${SIZE} ${SIZE}`,
      children: /*#__PURE__*/jsx$1(CircularProgressCircle, {
        className: classes.circle,
        style: circleStyle,
        ownerState: ownerState,
        cx: SIZE,
        cy: SIZE,
        r: (SIZE - thickness) / 2,
        fill: "none",
        strokeWidth: thickness
      })
    })
  });
});
process.env.NODE_ENV !== "production" ? CircularProgress.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['inherit', 'primary', 'secondary', 'error', 'info', 'success', 'warning']), PropTypes.string]),
  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   * @default false
   */
  disableShrink: chainPropTypes(PropTypes.bool, props => {
    if (props.disableShrink && props.variant && props.variant !== 'indeterminate') {
      return new Error('MUI: You have provided the `disableShrink` prop ' + 'with a variant other than `indeterminate`. This will have no effect.');
    }
    return null;
  }),
  /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, for example '3rem'.
   * @default 40
   */
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * @ignore
   */
  style: PropTypes.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * The thickness of the circle.
   * @default 3.6
   */
  thickness: PropTypes.number,
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number,
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   * @default 'indeterminate'
   */
  variant: PropTypes.oneOf(['determinate', 'indeterminate'])
} : void 0;function getIconButtonUtilityClass(slot) {
  return generateUtilityClass('MuiIconButton', slot);
}
const iconButtonClasses = generateUtilityClasses('MuiIconButton', ['root', 'disabled', 'colorInherit', 'colorPrimary', 'colorSecondary', 'colorError', 'colorInfo', 'colorSuccess', 'colorWarning', 'edgeStart', 'edgeEnd', 'sizeSmall', 'sizeMedium', 'sizeLarge', 'loading', 'loadingIndicator', 'loadingWrapper']);const useUtilityClasses$f = ownerState => {
  const {
    classes,
    disabled,
    color,
    edge,
    size,
    loading
  } = ownerState;
  const slots = {
    root: ['root', loading && 'loading', disabled && 'disabled', color !== 'default' && `color${capitalize(color)}`, edge && `edge${capitalize(edge)}`, `size${capitalize(size)}`],
    loadingIndicator: ['loadingIndicator'],
    loadingWrapper: ['loadingWrapper']
  };
  return composeClasses(slots, getIconButtonUtilityClass, classes);
};
const IconButtonRoot = styled(ButtonBase, {
  name: 'MuiIconButton',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.loading && styles.loading, ownerState.color !== 'default' && styles[`color${capitalize(ownerState.color)}`], ownerState.edge && styles[`edge${capitalize(ownerState.edge)}`], styles[`size${capitalize(ownerState.size)}`]];
  }
})(memoTheme(({
  theme
}) => ({
  textAlign: 'center',
  flex: '0 0 auto',
  fontSize: theme.typography.pxToRem(24),
  padding: 8,
  borderRadius: '50%',
  color: (theme.vars || theme).palette.action.active,
  transition: theme.transitions.create('background-color', {
    duration: theme.transitions.duration.shortest
  }),
  variants: [{
    props: props => !props.disableRipple,
    style: {
      '--IconButton-hoverBg': theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.action.active, theme.palette.action.hoverOpacity),
      '&:hover': {
        backgroundColor: 'var(--IconButton-hoverBg)',
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    }
  }, {
    props: {
      edge: 'start'
    },
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: 'start',
      size: 'small'
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: {
      edge: 'end'
    },
    style: {
      marginRight: -12
    }
  }, {
    props: {
      edge: 'end',
      size: 'small'
    },
    style: {
      marginRight: -3
    }
  }]
})), memoTheme(({
  theme
}) => ({
  variants: [{
    props: {
      color: 'inherit'
    },
    style: {
      color: 'inherit'
    }
  }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()) // check all the used fields in the style below
  .map(([color]) => ({
    props: {
      color
    },
    style: {
      color: (theme.vars || theme).palette[color].main
    }
  })), ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()) // check all the used fields in the style below
  .map(([color]) => ({
    props: {
      color
    },
    style: {
      '--IconButton-hoverBg': theme.vars ? `rgba(${(theme.vars || theme).palette[color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha((theme.vars || theme).palette[color].main, theme.palette.action.hoverOpacity)
    }
  })), {
    props: {
      size: 'small'
    },
    style: {
      padding: 5,
      fontSize: theme.typography.pxToRem(18)
    }
  }, {
    props: {
      size: 'large'
    },
    style: {
      padding: 12,
      fontSize: theme.typography.pxToRem(28)
    }
  }],
  [`&.${iconButtonClasses.disabled}`]: {
    backgroundColor: 'transparent',
    color: (theme.vars || theme).palette.action.disabled
  },
  [`&.${iconButtonClasses.loading}`]: {
    color: 'transparent'
  }
})));
const IconButtonLoadingIndicator = styled('span', {
  name: 'MuiIconButton',
  slot: 'LoadingIndicator'
})(({
  theme
}) => ({
  display: 'none',
  position: 'absolute',
  visibility: 'visible',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: (theme.vars || theme).palette.action.disabled,
  variants: [{
    props: {
      loading: true
    },
    style: {
      display: 'flex'
    }
  }]
}));

/**
 * Refer to the [Icons](/material-ui/icons/) section of the documentation
 * regarding the available icon options.
 */
const IconButton = /*#__PURE__*/React.forwardRef(function IconButton(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: 'MuiIconButton'
  });
  const {
    edge = false,
    children,
    className,
    color = 'default',
    disabled = false,
    disableFocusRipple = false,
    size = 'medium',
    id: idProp,
    loading = null,
    loadingIndicator: loadingIndicatorProp,
    ...other
  } = props;
  const loadingId = useId(idProp);
  const loadingIndicator = loadingIndicatorProp ?? /*#__PURE__*/jsx$1(CircularProgress, {
    "aria-labelledby": loadingId,
    color: "inherit",
    size: 16
  });
  const ownerState = {
    ...props,
    edge,
    color,
    disabled,
    disableFocusRipple,
    loading,
    loadingIndicator,
    size
  };
  const classes = useUtilityClasses$f(ownerState);
  return /*#__PURE__*/jsxs(IconButtonRoot, {
    id: loading ? loadingId : idProp,
    className: clsx(classes.root, className),
    centerRipple: true,
    focusRipple: !disableFocusRipple,
    disabled: disabled || loading,
    ref: ref,
    ...other,
    ownerState: ownerState,
    children: [typeof loading === 'boolean' &&
    /*#__PURE__*/
    // use plain HTML span to minimize the runtime overhead
    jsx$1("span", {
      className: classes.loadingWrapper,
      style: {
        display: 'contents'
      },
      children: /*#__PURE__*/jsx$1(IconButtonLoadingIndicator, {
        className: classes.loadingIndicator,
        ownerState: ownerState,
        children: loading && loadingIndicator
      })
    }), children]
  });
});
process.env.NODE_ENV !== "production" ? IconButton.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: chainPropTypes(PropTypes.node, props => {
    const found = React.Children.toArray(props.children).some(child => /*#__PURE__*/React.isValidElement(child) && child.props.onClick);
    if (found) {
      return new Error(['MUI: You are providing an onClick event listener to a child of a button element.', 'Prefer applying it to the IconButton directly.', 'This guarantees that the whole <button> will be responsive to click events.'].join('\n'));
    }
    return null;
  }),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['inherit', 'default', 'primary', 'secondary', 'error', 'info', 'success', 'warning']), PropTypes.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: PropTypes.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: PropTypes.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: PropTypes.oneOf(['end', 'start', false]),
  /**
   * @ignore
   */
  id: PropTypes.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: PropTypes.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: PropTypes.node,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['small', 'medium', 'large']), PropTypes.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;function getTypographyUtilityClass(slot) {
  return generateUtilityClass('MuiTypography', slot);
}
generateUtilityClasses('MuiTypography', ['root', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'inherit', 'button', 'caption', 'overline', 'alignLeft', 'alignRight', 'alignCenter', 'alignJustify', 'noWrap', 'gutterBottom', 'paragraph']);const v6Colors = {
  primary: true,
  secondary: true,
  error: true,
  info: true,
  success: true,
  warning: true,
  textPrimary: true,
  textSecondary: true,
  textDisabled: true
};
const extendSxProp = internal_createExtendSxProp();
const useUtilityClasses$e = ownerState => {
  const {
    align,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ['root', variant, ownerState.align !== 'inherit' && `align${capitalize(align)}`, gutterBottom && 'gutterBottom', noWrap && 'noWrap', paragraph && 'paragraph']
  };
  return composeClasses(slots, getTypographyUtilityClass, classes);
};
const TypographyRoot = styled('span', {
  name: 'MuiTypography',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.variant && styles[ownerState.variant], ownerState.align !== 'inherit' && styles[`align${capitalize(ownerState.align)}`], ownerState.noWrap && styles.noWrap, ownerState.gutterBottom && styles.gutterBottom, ownerState.paragraph && styles.paragraph];
  }
})(memoTheme(({
  theme
}) => ({
  margin: 0,
  variants: [{
    props: {
      variant: 'inherit'
    },
    style: {
      // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
      font: 'inherit',
      lineHeight: 'inherit',
      letterSpacing: 'inherit'
    }
  }, ...Object.entries(theme.typography).filter(([variant, value]) => variant !== 'inherit' && value && typeof value === 'object').map(([variant, value]) => ({
    props: {
      variant
    },
    style: value
  })), ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color
    },
    style: {
      color: (theme.vars || theme).palette[color].main
    }
  })), ...Object.entries(theme.palette?.text || {}).filter(([, value]) => typeof value === 'string').map(([color]) => ({
    props: {
      color: `text${capitalize(color)}`
    },
    style: {
      color: (theme.vars || theme).palette.text[color]
    }
  })), {
    props: ({
      ownerState
    }) => ownerState.align !== 'inherit',
    style: {
      textAlign: 'var(--Typography-textAlign)'
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.noWrap,
    style: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.gutterBottom,
    style: {
      marginBottom: '0.35em'
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.paragraph,
    style: {
      marginBottom: 16
    }
  }]
})));
const defaultVariantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  inherit: 'p'
};
const Typography = /*#__PURE__*/React.forwardRef(function Typography(inProps, ref) {
  const {
    color,
    ...themeProps
  } = useDefaultProps({
    props: inProps,
    name: 'MuiTypography'
  });
  const isSxColor = !v6Colors[color];
  // TODO: Remove `extendSxProp` in v7
  const props = extendSxProp({
    ...themeProps,
    ...(isSxColor && {
      color
    })
  });
  const {
    align = 'inherit',
    className,
    component,
    gutterBottom = false,
    noWrap = false,
    paragraph = false,
    variant = 'body1',
    variantMapping = defaultVariantMapping,
    ...other
  } = props;
  const ownerState = {
    ...props,
    align,
    color,
    className,
    component,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    variantMapping
  };
  const Component = component || (paragraph ? 'p' : variantMapping[variant] || defaultVariantMapping[variant]) || 'span';
  const classes = useUtilityClasses$e(ownerState);
  return /*#__PURE__*/jsx$1(TypographyRoot, {
    as: Component,
    ref: ref,
    className: clsx(classes.root, className),
    ...other,
    ownerState: ownerState,
    style: {
      ...(align !== 'inherit' && {
        '--Typography-textAlign': align
      }),
      ...other.style
    }
  });
});
process.env.NODE_ENV !== "production" ? Typography.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: PropTypes.oneOf(['center', 'inherit', 'justify', 'left', 'right']),
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['primary', 'secondary', 'success', 'error', 'info', 'warning', 'textPrimary', 'textSecondary', 'textDisabled']), PropTypes.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: PropTypes.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: PropTypes.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   * @deprecated Use the `component` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  paragraph: PropTypes.bool,
  /**
   * @ignore
   */
  style: PropTypes.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['body1', 'body2', 'button', 'caption', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'inherit', 'overline', 'subtitle1', 'subtitle2']), PropTypes.string]),
  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */
  variantMapping: PropTypes /* @typescript-to-proptypes-ignore */.object
} : void 0;function HTMLElementType(props, propName, componentName, location, propFullName) {
  if (process.env.NODE_ENV === 'production') {
    return null;
  }
  const propValue = props[propName];
  const safePropName = propFullName || propName;
  if (propValue == null) {
    return null;
  }
  if (propValue && propValue.nodeType !== 1) {
    return new Error(`Invalid ${location} \`${safePropName}\` supplied to \`${componentName}\`. ` + `Expected an HTMLElement.`);
  }
  return null;
}var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement$1(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!isHTMLElement$1(element) || !getNodeName(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect$2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!isHTMLElement$1(element) || !getNodeName(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


var applyStyles$1 = {
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect$2,
  requires: ['computeStyles']
};function getBasePlacement(placement) {
  return placement.split('-')[0];
}var max = Math.max;
var min = Math.min;
var round$1 = Math.round;function getUAString() {
  var uaData = navigator.userAgentData;

  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function (item) {
      return item.brand + "/" + item.version;
    }).join(' ');
  }

  return navigator.userAgent;
}function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }

  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }

  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;

  if (includeScale && isHTMLElement$1(element)) {
    scaleX = element.offsetWidth > 0 ? round$1(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round$1(clientRect.height) / element.offsetHeight || 1 : 1;
  }

  var _ref = isElement(element) ? getWindow(element) : window,
      visualViewport = _ref.visualViewport;

  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width: width,
    height: height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x: x,
    y: y
  };
}// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}function contains$1(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}function getTrueOffsetParent(element) {
  if (!isHTMLElement$1(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle$1(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());

  if (isIE && isHTMLElement$1(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = getComputedStyle$1(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = getParentNode(element);

  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }

  while (isHTMLElement$1(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle$1(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function withinMaxClamp(min, value, max) {
  var v = within(min, value, max);
  return v > max ? max : v;
}function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect$1(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (!contains$1(state.elements.popper, arrowElement)) {
    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


var arrow$1 = {
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect$1,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};function getVariation(placement) {
  return placement.split('-')[1];
}var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x,
      y = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round$1(x * dpr) / dpr || 0,
    y: round$1(y * dpr) / dpr || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      variation = _ref2.variation,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets,
      isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x,
      x = _offsets$x === void 0 ? 0 : _offsets$x,
      _offsets$y = offsets.y,
      y = _offsets$y === void 0 ? 0 : _offsets$y;

  var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };

  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = top;
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);

      if (getComputedStyle$1(offsetParent).position !== 'static' && position === 'absolute') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : // $FlowFixMe[prop-missing]
      offsetParent[heightProp];
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : // $FlowFixMe[prop-missing]
      offsetParent[widthProp];
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x,
    y: y
  }, getWindow(popper)) : {
    x: x,
    y: y
  };

  x = _ref4.x;
  y = _ref4.y;

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref5) {
  var state = _ref5.state,
      options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration,
    isFixed: state.options.strategy === 'fixed'
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var computeStyles$1 = {
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
};var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


var eventListeners = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
};var hash$1 = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash$1[matched];
  });
}var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();

    if (layoutViewport || !layoutViewport && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (getComputedStyle$1(body || html).direction === 'rtl') {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle$1(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement$1(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === 'fixed');
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle$1(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement$1(element) ? getOffsetParent(element) : element;

  if (!isElement(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement(clippingParent) && contains$1(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;
    }
  }

  return offsets;
}function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$strategy = _options.strategy,
      strategy = _options$strategy === void 0 ? state.strategy : _options$strategy,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement(placement);

    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


var flip$1 = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
};function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


var hide$1 = {
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
};function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var offset$1 = {
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
};function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var popperOffsets$1 = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
};function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis) {
    var _offsetModifierState$;

    var mainSide = mainAxis === 'y' ? top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min$1 = offset + overflow[mainSide];
    var max$1 = offset - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }

  if (checkAltAxis) {
    var _offsetModifierState$2;

    var _mainSide = mainAxis === 'x' ? top : left;

    var _altSide = mainAxis === 'x' ? bottom : right;

    var _offset = popperOffsets[altAxis];

    var _len = altAxis === 'y' ? 'height' : 'width';

    var _min = _offset + overflow[_mainSide];

    var _max = _offset - overflow[_altSide];

    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;

    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;

    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;

    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;

    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);

    popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var preventOverflow$1 = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
};function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement$1(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round$1(rect.width) / element.offsetWidth || 1;
  var scaleY = round$1(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.


function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var isOffsetParentAnElement = isHTMLElement$1(offsetParent);
  var offsetParentIsScaled = isHTMLElement$1(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement$1(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}function debounce$2(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(setOptionsAction) {
        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce$2(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref) {
        var name = _ref.name,
            _ref$options = _ref.options,
            options = _ref$options === void 0 ? {} : _ref$options,
            effect = _ref.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules
/**
 * @ignore - do not document.
 * Builds the props to be passed into the slot of an unstyled component.
 * It merges the internal props of the component with the ones supplied by the user, allowing to customize the behavior.
 * If the slot component is not a host component, it also merges in the `ownerState`.
 *
 * @param parameters.getSlotProps - A function that returns the props to be passed to the slot component.
 */
function useSlotProps(parameters) {
  const {
    elementType,
    externalSlotProps,
    ownerState,
    skipResolvingSlotProps = false,
    ...other
  } = parameters;
  const resolvedComponentsProps = skipResolvingSlotProps ? {} : resolveComponentProps(externalSlotProps, ownerState);
  const {
    props: mergedProps,
    internalRef
  } = mergeSlotProps({
    ...other,
    externalSlotProps: resolvedComponentsProps
  });
  const ref = useForkRef(internalRef, resolvedComponentsProps?.ref, parameters.additionalProps?.ref);
  const props = appendOwnerState(elementType, {
    ...mergedProps,
    ref
  }, ownerState);
  return props;
}/**
 * Returns the ref of a React element handling differences between React 19 and older versions.
 * It will throw runtime error if the element is not a valid React element.
 *
 * @param element React.ReactElement
 * @returns React.Ref<any> | null
 */
function getReactElementRef(element) {
  // 'ref' is passed as prop in React 19, whereas 'ref' is directly attached to children in older versions
  if (parseInt(React.version, 10) >= 19) {
    return element?.props?.ref || null;
  }
  // @ts-expect-error element.ref is not included in the ReactElement type
  // https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/70189
  return element?.ref || null;
}function getContainer(container) {
  return typeof container === 'function' ? container() : container;
}

/**
 * Portals provide a first-class way to render children into a DOM node
 * that exists outside the DOM hierarchy of the parent component.
 *
 * Demos:
 *
 * - [Portal](https://mui.com/material-ui/react-portal/)
 *
 * API:
 *
 * - [Portal API](https://mui.com/material-ui/api/portal/)
 */
const Portal = /*#__PURE__*/React.forwardRef(function Portal(props, forwardedRef) {
  const {
    children,
    container,
    disablePortal = false
  } = props;
  const [mountNode, setMountNode] = React.useState(null);
  const handleRef = useForkRef(/*#__PURE__*/React.isValidElement(children) ? getReactElementRef(children) : null, forwardedRef);
  useEnhancedEffect(() => {
    if (!disablePortal) {
      setMountNode(getContainer(container) || document.body);
    }
  }, [container, disablePortal]);
  useEnhancedEffect(() => {
    if (mountNode && !disablePortal) {
      setRef(forwardedRef, mountNode);
      return () => {
        setRef(forwardedRef, null);
      };
    }
    return undefined;
  }, [forwardedRef, mountNode, disablePortal]);
  if (disablePortal) {
    if (/*#__PURE__*/React.isValidElement(children)) {
      const newProps = {
        ref: handleRef
      };
      return /*#__PURE__*/React.cloneElement(children, newProps);
    }
    return children;
  }
  return mountNode ? /*#__PURE__*/ReactDOM.createPortal(children, mountNode) : mountNode;
});
process.env.NODE_ENV !== "production" ? Portal.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: PropTypes.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([HTMLElementType, PropTypes.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: PropTypes.bool
} : void 0;
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line
  Portal['propTypes' + ''] = exactProp(Portal.propTypes);
}function getPopperUtilityClass(slot) {
  return generateUtilityClass('MuiPopper', slot);
}
generateUtilityClasses('MuiPopper', ['root']);function flipPlacement(placement, direction) {
  if (direction === 'ltr') {
    return placement;
  }
  switch (placement) {
    case 'bottom-end':
      return 'bottom-start';
    case 'bottom-start':
      return 'bottom-end';
    case 'top-end':
      return 'top-start';
    case 'top-start':
      return 'top-end';
    default:
      return placement;
  }
}
function resolveAnchorEl(anchorEl) {
  return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
}
function isHTMLElement(element) {
  return element.nodeType !== undefined;
}
function isVirtualElement(element) {
  return !isHTMLElement(element);
}
const useUtilityClasses$d = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return composeClasses(slots, getPopperUtilityClass, classes);
};
const defaultPopperOptions = {};
const PopperTooltip = /*#__PURE__*/React.forwardRef(function PopperTooltip(props, forwardedRef) {
  const {
    anchorEl,
    children,
    direction,
    disablePortal,
    modifiers,
    open,
    placement: initialPlacement,
    popperOptions,
    popperRef: popperRefProp,
    slotProps = {},
    slots = {},
    TransitionProps,
    // @ts-ignore internal logic
    ownerState: ownerStateProp,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...other
  } = props;
  const tooltipRef = React.useRef(null);
  const ownRef = useForkRef(tooltipRef, forwardedRef);
  const popperRef = React.useRef(null);
  const handlePopperRef = useForkRef(popperRef, popperRefProp);
  const handlePopperRefRef = React.useRef(handlePopperRef);
  useEnhancedEffect(() => {
    handlePopperRefRef.current = handlePopperRef;
  }, [handlePopperRef]);
  React.useImperativeHandle(popperRefProp, () => popperRef.current, []);
  const rtlPlacement = flipPlacement(initialPlacement, direction);
  /**
   * placement initialized from prop but can change during lifetime if modifiers.flip.
   * modifiers.flip is essentially a flip for controlled/uncontrolled behavior
   */
  const [placement, setPlacement] = React.useState(rtlPlacement);
  const [resolvedAnchorElement, setResolvedAnchorElement] = React.useState(resolveAnchorEl(anchorEl));
  React.useEffect(() => {
    if (popperRef.current) {
      popperRef.current.forceUpdate();
    }
  });
  React.useEffect(() => {
    if (anchorEl) {
      setResolvedAnchorElement(resolveAnchorEl(anchorEl));
    }
  }, [anchorEl]);
  useEnhancedEffect(() => {
    if (!resolvedAnchorElement || !open) {
      return undefined;
    }
    const handlePopperUpdate = data => {
      setPlacement(data.placement);
    };
    if (process.env.NODE_ENV !== 'production') {
      if (resolvedAnchorElement && isHTMLElement(resolvedAnchorElement) && resolvedAnchorElement.nodeType === 1) {
        const box = resolvedAnchorElement.getBoundingClientRect();
        if (process.env.NODE_ENV !== 'test' && box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
          console.warn(['MUI: The `anchorEl` prop provided to the component is invalid.', 'The anchor element should be part of the document layout.', "Make sure the element is present in the document or that it's not display none."].join('\n'));
        }
      }
    }
    let popperModifiers = [{
      name: 'preventOverflow',
      options: {
        altBoundary: disablePortal
      }
    }, {
      name: 'flip',
      options: {
        altBoundary: disablePortal
      }
    }, {
      name: 'onUpdate',
      enabled: true,
      phase: 'afterWrite',
      fn: ({
        state
      }) => {
        handlePopperUpdate(state);
      }
    }];
    if (modifiers != null) {
      popperModifiers = popperModifiers.concat(modifiers);
    }
    if (popperOptions && popperOptions.modifiers != null) {
      popperModifiers = popperModifiers.concat(popperOptions.modifiers);
    }
    const popper = createPopper(resolvedAnchorElement, tooltipRef.current, {
      placement: rtlPlacement,
      ...popperOptions,
      modifiers: popperModifiers
    });
    handlePopperRefRef.current(popper);
    return () => {
      popper.destroy();
      handlePopperRefRef.current(null);
    };
  }, [resolvedAnchorElement, disablePortal, modifiers, open, popperOptions, rtlPlacement]);
  const childProps = {
    placement: placement
  };
  if (TransitionProps !== null) {
    childProps.TransitionProps = TransitionProps;
  }
  const classes = useUtilityClasses$d(props);
  const Root = slots.root ?? 'div';
  const rootProps = useSlotProps({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      role: 'tooltip',
      ref: ownRef
    },
    ownerState: props,
    className: classes.root
  });
  return /*#__PURE__*/jsx$1(Root, {
    ...rootProps,
    children: typeof children === 'function' ? children(childProps) : children
  });
});

/**
 * @ignore - internal component.
 */
const Popper$1 = /*#__PURE__*/React.forwardRef(function Popper(props, forwardedRef) {
  const {
    anchorEl,
    children,
    container: containerProp,
    direction = 'ltr',
    disablePortal = false,
    keepMounted = false,
    modifiers,
    open,
    placement = 'bottom',
    popperOptions = defaultPopperOptions,
    popperRef,
    style,
    transition = false,
    slotProps = {},
    slots = {},
    ...other
  } = props;
  const [exited, setExited] = React.useState(true);
  const handleEnter = () => {
    setExited(false);
  };
  const handleExited = () => {
    setExited(true);
  };
  if (!keepMounted && !open && (!transition || exited)) {
    return null;
  }

  // If the container prop is provided, use that
  // If the anchorEl prop is provided, use its parent body element as the container
  // If neither are provided let the Modal take care of choosing the container
  let container;
  if (containerProp) {
    container = containerProp;
  } else if (anchorEl) {
    const resolvedAnchorEl = resolveAnchorEl(anchorEl);
    container = resolvedAnchorEl && isHTMLElement(resolvedAnchorEl) ? ownerDocument(resolvedAnchorEl).body : ownerDocument(null).body;
  }
  const display = !open && keepMounted && (!transition || exited) ? 'none' : undefined;
  const transitionProps = transition ? {
    in: open,
    onEnter: handleEnter,
    onExited: handleExited
  } : undefined;
  return /*#__PURE__*/jsx$1(Portal, {
    disablePortal: disablePortal,
    container: container,
    children: /*#__PURE__*/jsx$1(PopperTooltip, {
      anchorEl: anchorEl,
      direction: direction,
      disablePortal: disablePortal,
      modifiers: modifiers,
      ref: forwardedRef,
      open: transition ? !exited : open,
      placement: placement,
      popperOptions: popperOptions,
      popperRef: popperRef,
      slotProps: slotProps,
      slots: slots,
      ...other,
      style: {
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: 'fixed',
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display,
        ...style
      },
      TransitionProps: transitionProps,
      children: children
    })
  });
});
process.env.NODE_ENV !== "production" ? Popper$1.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: chainPropTypes(PropTypes.oneOfType([HTMLElementType, PropTypes.object, PropTypes.func]), props => {
    if (props.open) {
      const resolvedAnchorEl = resolveAnchorEl(props.anchorEl);
      if (resolvedAnchorEl && isHTMLElement(resolvedAnchorEl) && resolvedAnchorEl.nodeType === 1) {
        const box = resolvedAnchorEl.getBoundingClientRect();
        if (process.env.NODE_ENV !== 'test' && box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
          return new Error(['MUI: The `anchorEl` prop provided to the component is invalid.', 'The anchor element should be part of the document layout.', "Make sure the element is present in the document or that it's not display none."].join('\n'));
        }
      } else if (!resolvedAnchorEl || typeof resolvedAnchorEl.getBoundingClientRect !== 'function' || isVirtualElement(resolvedAnchorEl) && resolvedAnchorEl.contextElement != null && resolvedAnchorEl.contextElement.nodeType !== 1) {
        return new Error(['MUI: The `anchorEl` prop provided to the component is invalid.', 'It should be an HTML element instance or a virtualElement ', '(https://popper.js.org/docs/v2/virtual-elements/).'].join('\n'));
      }
    }
    return null;
  }),
  /**
   * Popper render function or node.
   */
  children: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.node, PropTypes.func]),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([HTMLElementType, PropTypes.func]),
  /**
   * Direction of the text.
   * @default 'ltr'
   */
  direction: PropTypes.oneOf(['ltr', 'rtl']),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: PropTypes.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: PropTypes.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: PropTypes.arrayOf(PropTypes.shape({
    data: PropTypes.object,
    effect: PropTypes.func,
    enabled: PropTypes.bool,
    fn: PropTypes.func,
    name: PropTypes.any,
    options: PropTypes.object,
    phase: PropTypes.oneOf(['afterMain', 'afterRead', 'afterWrite', 'beforeMain', 'beforeRead', 'beforeWrite', 'main', 'read', 'write']),
    requires: PropTypes.arrayOf(PropTypes.string),
    requiresIfExists: PropTypes.arrayOf(PropTypes.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: PropTypes.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: PropTypes.oneOf(['auto-end', 'auto-start', 'auto', 'bottom-end', 'bottom-start', 'bottom', 'left-end', 'left-start', 'left', 'right-end', 'right-start', 'right', 'top-end', 'top-start', 'top']),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: PropTypes.shape({
    modifiers: PropTypes.array,
    onFirstUpdate: PropTypes.func,
    placement: PropTypes.oneOf(['auto-end', 'auto-start', 'auto', 'bottom-end', 'bottom-start', 'bottom', 'left-end', 'left-start', 'left', 'right-end', 'right-start', 'right', 'top-end', 'top-start', 'top']),
    strategy: PropTypes.oneOf(['absolute', 'fixed'])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: refType,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: PropTypes.shape({
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: PropTypes.shape({
    root: PropTypes.elementType
  }),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: PropTypes.bool
} : void 0;const PopperRoot = styled(Popper$1, {
  name: 'MuiPopper',
  slot: 'Root'
})({});

/**
 *
 * Demos:
 *
 * - [Autocomplete](https://mui.com/material-ui/react-autocomplete/)
 * - [Menu](https://mui.com/material-ui/react-menu/)
 * - [Popper](https://mui.com/material-ui/react-popper/)
 *
 * API:
 *
 * - [Popper API](https://mui.com/material-ui/api/popper/)
 */
const Popper = /*#__PURE__*/React.forwardRef(function Popper(inProps, ref) {
  const isRtl = useRtl();
  const props = useDefaultProps({
    props: inProps,
    name: 'MuiPopper'
  });
  const {
    anchorEl,
    component,
    components,
    componentsProps,
    container,
    disablePortal,
    keepMounted,
    modifiers,
    open,
    placement,
    popperOptions,
    popperRef,
    transition,
    slots,
    slotProps,
    ...other
  } = props;
  const RootComponent = slots?.root ?? components?.Root;
  const otherProps = {
    anchorEl,
    container,
    disablePortal,
    keepMounted,
    modifiers,
    open,
    placement,
    popperOptions,
    popperRef,
    transition,
    ...other
  };
  return /*#__PURE__*/jsx$1(PopperRoot, {
    as: component,
    direction: isRtl ? 'rtl' : 'ltr',
    slots: {
      root: RootComponent
    },
    slotProps: slotProps ?? componentsProps,
    ...otherProps,
    ref: ref
  });
});
process.env.NODE_ENV !== "production" ? Popper.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([HTMLElementType, PropTypes.object, PropTypes.func]),
  /**
   * Popper render function or node.
   */
  children: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.node, PropTypes.func]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  components: PropTypes.shape({
    Root: PropTypes.elementType
  }),
  /**
   * The props used for each slot inside the Popper.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  componentsProps: PropTypes.shape({
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([HTMLElementType, PropTypes.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: PropTypes.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: PropTypes.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: PropTypes.arrayOf(PropTypes.shape({
    data: PropTypes.object,
    effect: PropTypes.func,
    enabled: PropTypes.bool,
    fn: PropTypes.func,
    name: PropTypes.any,
    options: PropTypes.object,
    phase: PropTypes.oneOf(['afterMain', 'afterRead', 'afterWrite', 'beforeMain', 'beforeRead', 'beforeWrite', 'main', 'read', 'write']),
    requires: PropTypes.arrayOf(PropTypes.string),
    requiresIfExists: PropTypes.arrayOf(PropTypes.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: PropTypes.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: PropTypes.oneOf(['auto-end', 'auto-start', 'auto', 'bottom-end', 'bottom-start', 'bottom', 'left-end', 'left-start', 'left', 'right-end', 'right-start', 'right', 'top-end', 'top-start', 'top']),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: PropTypes.shape({
    modifiers: PropTypes.array,
    onFirstUpdate: PropTypes.func,
    placement: PropTypes.oneOf(['auto-end', 'auto-start', 'auto', 'bottom-end', 'bottom-start', 'bottom', 'left-end', 'left-start', 'left', 'right-end', 'right-start', 'right', 'top-end', 'top-start', 'top']),
    strategy: PropTypes.oneOf(['absolute', 'fixed'])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: refType,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: PropTypes.shape({
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: PropTypes.shape({
    root: PropTypes.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: PropTypes.bool
} : void 0;/**
 * @ignore - internal component.
 */
const FormControlContext = /*#__PURE__*/React.createContext(undefined);
if (process.env.NODE_ENV !== 'production') {
  FormControlContext.displayName = 'FormControlContext';
}function useFormControl() {
  return React.useContext(FormControlContext);
}function isClassComponent(elementType) {
  // elementType.prototype?.isReactComponent
  const {
    prototype = {}
  } = elementType;
  return Boolean(prototype.isReactComponent);
}
function acceptingRef(props, propName, componentName, location, propFullName) {
  const element = props[propName];
  const safePropName = propFullName || propName;
  if (element == null ||
  // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window === 'undefined') {
    return null;
  }
  let warningHint;
  const elementType = element.type;
  /**
   * Blacklisting instead of whitelisting
   *
   * Blacklisting will miss some components, such as React.Fragment. Those will at least
   * trigger a warning in React.
   * We can't whitelist because there is no safe way to detect React.forwardRef
   * or class components. "Safe" means there's no public API.
   *
   */
  if (typeof elementType === 'function' && !isClassComponent(elementType)) {
    warningHint = 'Did you accidentally use a plain function component for an element instead?';
  }
  if (warningHint !== undefined) {
    return new Error(`Invalid ${location} \`${safePropName}\` supplied to \`${componentName}\`. ` + `Expected an element that can hold a ref. ${warningHint} ` + 'For more information see https://mui.com/r/caveat-with-refs-guide');
  }
  return null;
}
const elementAcceptingRef = chainPropTypes(PropTypes.element, acceptingRef);
elementAcceptingRef.isRequired = chainPropTypes(PropTypes.element.isRequired, acceptingRef);const boxClasses = generateUtilityClasses('MuiBox', ['root']);const defaultTheme = createTheme();
const Box = createBox({
  themeId: THEME_ID,
  defaultTheme,
  defaultClassName: boxClasses.root,
  generateClassName: ClassNameGenerator.generate
});
process.env.NODE_ENV !== "production" ? Box.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: PropTypes.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;function getButtonUtilityClass(slot) {
  return generateUtilityClass('MuiButton', slot);
}
const buttonClasses = generateUtilityClasses('MuiButton', ['root', 'text', 'textInherit', 'textPrimary', 'textSecondary', 'textSuccess', 'textError', 'textInfo', 'textWarning', 'outlined', 'outlinedInherit', 'outlinedPrimary', 'outlinedSecondary', 'outlinedSuccess', 'outlinedError', 'outlinedInfo', 'outlinedWarning', 'contained', 'containedInherit', 'containedPrimary', 'containedSecondary', 'containedSuccess', 'containedError', 'containedInfo', 'containedWarning', 'disableElevation', 'focusVisible', 'disabled', 'colorInherit', 'colorPrimary', 'colorSecondary', 'colorSuccess', 'colorError', 'colorInfo', 'colorWarning', 'textSizeSmall', 'textSizeMedium', 'textSizeLarge', 'outlinedSizeSmall', 'outlinedSizeMedium', 'outlinedSizeLarge', 'containedSizeSmall', 'containedSizeMedium', 'containedSizeLarge', 'sizeMedium', 'sizeSmall', 'sizeLarge', 'fullWidth', 'startIcon', 'endIcon', 'icon', 'iconSizeSmall', 'iconSizeMedium', 'iconSizeLarge', 'loading', 'loadingWrapper', 'loadingIconPlaceholder', 'loadingIndicator', 'loadingPositionCenter', 'loadingPositionStart', 'loadingPositionEnd']);/**
 * @ignore - internal component.
 */
const ButtonGroupContext = /*#__PURE__*/React.createContext({});
if (process.env.NODE_ENV !== 'production') {
  ButtonGroupContext.displayName = 'ButtonGroupContext';
}/**
 * @ignore - internal component.
 */
const ButtonGroupButtonContext = /*#__PURE__*/React.createContext(undefined);
if (process.env.NODE_ENV !== 'production') {
  ButtonGroupButtonContext.displayName = 'ButtonGroupButtonContext';
}const useUtilityClasses$c = ownerState => {
  const {
    color,
    disableElevation,
    fullWidth,
    size,
    variant,
    loading,
    loadingPosition,
    classes
  } = ownerState;
  const slots = {
    root: ['root', loading && 'loading', variant, `${variant}${capitalize(color)}`, `size${capitalize(size)}`, `${variant}Size${capitalize(size)}`, `color${capitalize(color)}`, disableElevation && 'disableElevation', fullWidth && 'fullWidth', loading && `loadingPosition${capitalize(loadingPosition)}`],
    startIcon: ['icon', 'startIcon', `iconSize${capitalize(size)}`],
    endIcon: ['icon', 'endIcon', `iconSize${capitalize(size)}`],
    loadingIndicator: ['loadingIndicator'],
    loadingWrapper: ['loadingWrapper']
  };
  const composedClasses = composeClasses(slots, getButtonUtilityClass, classes);
  return {
    ...classes,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...composedClasses
  };
};
const commonIconStyles = [{
  props: {
    size: 'small'
  },
  style: {
    '& > *:nth-of-type(1)': {
      fontSize: 18
    }
  }
}, {
  props: {
    size: 'medium'
  },
  style: {
    '& > *:nth-of-type(1)': {
      fontSize: 20
    }
  }
}, {
  props: {
    size: 'large'
  },
  style: {
    '& > *:nth-of-type(1)': {
      fontSize: 22
    }
  }
}];
const ButtonRoot = styled(ButtonBase, {
  shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === 'classes',
  name: 'MuiButton',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant], styles[`${ownerState.variant}${capitalize(ownerState.color)}`], styles[`size${capitalize(ownerState.size)}`], styles[`${ownerState.variant}Size${capitalize(ownerState.size)}`], ownerState.color === 'inherit' && styles.colorInherit, ownerState.disableElevation && styles.disableElevation, ownerState.fullWidth && styles.fullWidth, ownerState.loading && styles.loading];
  }
})(memoTheme(({
  theme
}) => {
  const inheritContainedBackgroundColor = theme.palette.mode === 'light' ? theme.palette.grey[300] : theme.palette.grey[800];
  const inheritContainedHoverBackgroundColor = theme.palette.mode === 'light' ? theme.palette.grey.A100 : theme.palette.grey[700];
  return {
    ...theme.typography.button,
    minWidth: 64,
    padding: '6px 16px',
    border: 0,
    borderRadius: (theme.vars || theme).shape.borderRadius,
    transition: theme.transitions.create(['background-color', 'box-shadow', 'border-color', 'color'], {
      duration: theme.transitions.duration.short
    }),
    '&:hover': {
      textDecoration: 'none'
    },
    [`&.${buttonClasses.disabled}`]: {
      color: (theme.vars || theme).palette.action.disabled
    },
    variants: [{
      props: {
        variant: 'contained'
      },
      style: {
        color: `var(--variant-containedColor)`,
        backgroundColor: `var(--variant-containedBg)`,
        boxShadow: (theme.vars || theme).shadows[2],
        '&:hover': {
          boxShadow: (theme.vars || theme).shadows[4],
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            boxShadow: (theme.vars || theme).shadows[2]
          }
        },
        '&:active': {
          boxShadow: (theme.vars || theme).shadows[8]
        },
        [`&.${buttonClasses.focusVisible}`]: {
          boxShadow: (theme.vars || theme).shadows[6]
        },
        [`&.${buttonClasses.disabled}`]: {
          color: (theme.vars || theme).palette.action.disabled,
          boxShadow: (theme.vars || theme).shadows[0],
          backgroundColor: (theme.vars || theme).palette.action.disabledBackground
        }
      }
    }, {
      props: {
        variant: 'outlined'
      },
      style: {
        padding: '5px 15px',
        border: '1px solid currentColor',
        borderColor: `var(--variant-outlinedBorder, currentColor)`,
        backgroundColor: `var(--variant-outlinedBg)`,
        color: `var(--variant-outlinedColor)`,
        [`&.${buttonClasses.disabled}`]: {
          border: `1px solid ${(theme.vars || theme).palette.action.disabledBackground}`
        }
      }
    }, {
      props: {
        variant: 'text'
      },
      style: {
        padding: '6px 8px',
        color: `var(--variant-textColor)`,
        backgroundColor: `var(--variant-textBg)`
      }
    }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
      props: {
        color
      },
      style: {
        '--variant-textColor': (theme.vars || theme).palette[color].main,
        '--variant-outlinedColor': (theme.vars || theme).palette[color].main,
        '--variant-outlinedBorder': theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / 0.5)` : alpha(theme.palette[color].main, 0.5),
        '--variant-containedColor': (theme.vars || theme).palette[color].contrastText,
        '--variant-containedBg': (theme.vars || theme).palette[color].main,
        '@media (hover: hover)': {
          '&:hover': {
            '--variant-containedBg': (theme.vars || theme).palette[color].dark,
            '--variant-textBg': theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette[color].main, theme.palette.action.hoverOpacity),
            '--variant-outlinedBorder': (theme.vars || theme).palette[color].main,
            '--variant-outlinedBg': theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette[color].main, theme.palette.action.hoverOpacity)
          }
        }
      }
    })), {
      props: {
        color: 'inherit'
      },
      style: {
        color: 'inherit',
        borderColor: 'currentColor',
        '--variant-containedBg': theme.vars ? theme.vars.palette.Button.inheritContainedBg : inheritContainedBackgroundColor,
        '@media (hover: hover)': {
          '&:hover': {
            '--variant-containedBg': theme.vars ? theme.vars.palette.Button.inheritContainedHoverBg : inheritContainedHoverBackgroundColor,
            '--variant-textBg': theme.vars ? `rgba(${theme.vars.palette.text.primaryChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.text.primary, theme.palette.action.hoverOpacity),
            '--variant-outlinedBg': theme.vars ? `rgba(${theme.vars.palette.text.primaryChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.text.primary, theme.palette.action.hoverOpacity)
          }
        }
      }
    }, {
      props: {
        size: 'small',
        variant: 'text'
      },
      style: {
        padding: '4px 5px',
        fontSize: theme.typography.pxToRem(13)
      }
    }, {
      props: {
        size: 'large',
        variant: 'text'
      },
      style: {
        padding: '8px 11px',
        fontSize: theme.typography.pxToRem(15)
      }
    }, {
      props: {
        size: 'small',
        variant: 'outlined'
      },
      style: {
        padding: '3px 9px',
        fontSize: theme.typography.pxToRem(13)
      }
    }, {
      props: {
        size: 'large',
        variant: 'outlined'
      },
      style: {
        padding: '7px 21px',
        fontSize: theme.typography.pxToRem(15)
      }
    }, {
      props: {
        size: 'small',
        variant: 'contained'
      },
      style: {
        padding: '4px 10px',
        fontSize: theme.typography.pxToRem(13)
      }
    }, {
      props: {
        size: 'large',
        variant: 'contained'
      },
      style: {
        padding: '8px 22px',
        fontSize: theme.typography.pxToRem(15)
      }
    }, {
      props: {
        disableElevation: true
      },
      style: {
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none'
        },
        [`&.${buttonClasses.focusVisible}`]: {
          boxShadow: 'none'
        },
        '&:active': {
          boxShadow: 'none'
        },
        [`&.${buttonClasses.disabled}`]: {
          boxShadow: 'none'
        }
      }
    }, {
      props: {
        fullWidth: true
      },
      style: {
        width: '100%'
      }
    }, {
      props: {
        loadingPosition: 'center'
      },
      style: {
        transition: theme.transitions.create(['background-color', 'box-shadow', 'border-color'], {
          duration: theme.transitions.duration.short
        }),
        [`&.${buttonClasses.loading}`]: {
          color: 'transparent'
        }
      }
    }]
  };
}));
const ButtonStartIcon = styled('span', {
  name: 'MuiButton',
  slot: 'StartIcon',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.startIcon, ownerState.loading && styles.startIconLoadingStart, styles[`iconSize${capitalize(ownerState.size)}`]];
  }
})(({
  theme
}) => ({
  display: 'inherit',
  marginRight: 8,
  marginLeft: -4,
  variants: [{
    props: {
      size: 'small'
    },
    style: {
      marginLeft: -2
    }
  }, {
    props: {
      loadingPosition: 'start',
      loading: true
    },
    style: {
      transition: theme.transitions.create(['opacity'], {
        duration: theme.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: 'start',
      loading: true,
      fullWidth: true
    },
    style: {
      marginRight: -8
    }
  }, ...commonIconStyles]
}));
const ButtonEndIcon = styled('span', {
  name: 'MuiButton',
  slot: 'EndIcon',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.endIcon, ownerState.loading && styles.endIconLoadingEnd, styles[`iconSize${capitalize(ownerState.size)}`]];
  }
})(({
  theme
}) => ({
  display: 'inherit',
  marginRight: -4,
  marginLeft: 8,
  variants: [{
    props: {
      size: 'small'
    },
    style: {
      marginRight: -2
    }
  }, {
    props: {
      loadingPosition: 'end',
      loading: true
    },
    style: {
      transition: theme.transitions.create(['opacity'], {
        duration: theme.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: 'end',
      loading: true,
      fullWidth: true
    },
    style: {
      marginLeft: -8
    }
  }, ...commonIconStyles]
}));
const ButtonLoadingIndicator = styled('span', {
  name: 'MuiButton',
  slot: 'LoadingIndicator'
})(({
  theme
}) => ({
  display: 'none',
  position: 'absolute',
  visibility: 'visible',
  variants: [{
    props: {
      loading: true
    },
    style: {
      display: 'flex'
    }
  }, {
    props: {
      loadingPosition: 'start'
    },
    style: {
      left: 14
    }
  }, {
    props: {
      loadingPosition: 'start',
      size: 'small'
    },
    style: {
      left: 10
    }
  }, {
    props: {
      variant: 'text',
      loadingPosition: 'start'
    },
    style: {
      left: 6
    }
  }, {
    props: {
      loadingPosition: 'center'
    },
    style: {
      left: '50%',
      transform: 'translate(-50%)',
      color: (theme.vars || theme).palette.action.disabled
    }
  }, {
    props: {
      loadingPosition: 'end'
    },
    style: {
      right: 14
    }
  }, {
    props: {
      loadingPosition: 'end',
      size: 'small'
    },
    style: {
      right: 10
    }
  }, {
    props: {
      variant: 'text',
      loadingPosition: 'end'
    },
    style: {
      right: 6
    }
  }, {
    props: {
      loadingPosition: 'start',
      fullWidth: true
    },
    style: {
      position: 'relative',
      left: -10
    }
  }, {
    props: {
      loadingPosition: 'end',
      fullWidth: true
    },
    style: {
      position: 'relative',
      right: -10
    }
  }]
}));
const ButtonLoadingIconPlaceholder = styled('span', {
  name: 'MuiButton',
  slot: 'LoadingIconPlaceholder'
})({
  display: 'inline-block',
  width: '1em',
  height: '1em'
});
const Button = /*#__PURE__*/React.forwardRef(function Button(inProps, ref) {
  // props priority: `inProps` > `contextProps` > `themeDefaultProps`
  const contextProps = React.useContext(ButtonGroupContext);
  const buttonGroupButtonContextPositionClassName = React.useContext(ButtonGroupButtonContext);
  const resolvedProps = resolveProps(contextProps, inProps);
  const props = useDefaultProps({
    props: resolvedProps,
    name: 'MuiButton'
  });
  const {
    children,
    color = 'primary',
    component = 'button',
    className,
    disabled = false,
    disableElevation = false,
    disableFocusRipple = false,
    endIcon: endIconProp,
    focusVisibleClassName,
    fullWidth = false,
    id: idProp,
    loading = null,
    loadingIndicator: loadingIndicatorProp,
    loadingPosition = 'center',
    size = 'medium',
    startIcon: startIconProp,
    type,
    variant = 'text',
    ...other
  } = props;
  const loadingId = useId(idProp);
  const loadingIndicator = loadingIndicatorProp ?? /*#__PURE__*/jsx$1(CircularProgress, {
    "aria-labelledby": loadingId,
    color: "inherit",
    size: 16
  });
  const ownerState = {
    ...props,
    color,
    component,
    disabled,
    disableElevation,
    disableFocusRipple,
    fullWidth,
    loading,
    loadingIndicator,
    loadingPosition,
    size,
    type,
    variant
  };
  const classes = useUtilityClasses$c(ownerState);
  const startIcon = (startIconProp || loading && loadingPosition === 'start') && /*#__PURE__*/jsx$1(ButtonStartIcon, {
    className: classes.startIcon,
    ownerState: ownerState,
    children: startIconProp || /*#__PURE__*/jsx$1(ButtonLoadingIconPlaceholder, {
      className: classes.loadingIconPlaceholder,
      ownerState: ownerState
    })
  });
  const endIcon = (endIconProp || loading && loadingPosition === 'end') && /*#__PURE__*/jsx$1(ButtonEndIcon, {
    className: classes.endIcon,
    ownerState: ownerState,
    children: endIconProp || /*#__PURE__*/jsx$1(ButtonLoadingIconPlaceholder, {
      className: classes.loadingIconPlaceholder,
      ownerState: ownerState
    })
  });
  const positionClassName = buttonGroupButtonContextPositionClassName || '';
  const loader = typeof loading === 'boolean' ?
  /*#__PURE__*/
  // use plain HTML span to minimize the runtime overhead
  jsx$1("span", {
    className: classes.loadingWrapper,
    style: {
      display: 'contents'
    },
    children: loading && /*#__PURE__*/jsx$1(ButtonLoadingIndicator, {
      className: classes.loadingIndicator,
      ownerState: ownerState,
      children: loadingIndicator
    })
  }) : null;
  return /*#__PURE__*/jsxs(ButtonRoot, {
    ownerState: ownerState,
    className: clsx(contextProps.className, classes.root, className, positionClassName),
    component: component,
    disabled: disabled || loading,
    focusRipple: !disableFocusRipple,
    focusVisibleClassName: clsx(classes.focusVisible, focusVisibleClassName),
    ref: ref,
    type: type,
    id: loading ? loadingId : idProp,
    ...other,
    classes: classes,
    children: [startIcon, loadingPosition !== 'end' && loader, children, loadingPosition === 'end' && loader, endIcon]
  });
});
process.env.NODE_ENV !== "production" ? Button.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning']), PropTypes.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: PropTypes.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: PropTypes.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: PropTypes.bool,
  /**
   * Element placed after the children.
   */
  endIcon: PropTypes.node,
  /**
   * @ignore
   */
  focusVisibleClassName: PropTypes.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: PropTypes.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: PropTypes.string,
  /**
   * @ignore
   */
  id: PropTypes.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: PropTypes.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: PropTypes.node,
  /**
   * The loading indicator can be positioned on the start, end, or the center of the button.
   * @default 'center'
   */
  loadingPosition: PropTypes.oneOf(['center', 'end', 'start']),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['small', 'medium', 'large']), PropTypes.string]),
  /**
   * Element placed before the children.
   */
  startIcon: PropTypes.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * @ignore
   */
  type: PropTypes.oneOfType([PropTypes.oneOf(['button', 'reset', 'submit']), PropTypes.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['contained', 'outlined', 'text']), PropTypes.string])
} : void 0;function getSwitchBaseUtilityClass(slot) {
  return generateUtilityClass('PrivateSwitchBase', slot);
}
generateUtilityClasses('PrivateSwitchBase', ['root', 'checked', 'disabled', 'input', 'edgeStart', 'edgeEnd']);const useUtilityClasses$b = ownerState => {
  const {
    classes,
    checked,
    disabled,
    edge
  } = ownerState;
  const slots = {
    root: ['root', checked && 'checked', disabled && 'disabled', edge && `edge${capitalize(edge)}`],
    input: ['input']
  };
  return composeClasses(slots, getSwitchBaseUtilityClass, classes);
};
const SwitchBaseRoot = styled(ButtonBase)({
  padding: 9,
  borderRadius: '50%',
  variants: [{
    props: {
      edge: 'start',
      size: 'small'
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: ({
      edge,
      ownerState
    }) => edge === 'start' && ownerState.size !== 'small',
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: 'end',
      size: 'small'
    },
    style: {
      marginRight: -3
    }
  }, {
    props: ({
      edge,
      ownerState
    }) => edge === 'end' && ownerState.size !== 'small',
    style: {
      marginRight: -12
    }
  }]
});
const SwitchBaseInput = styled('input', {
  shouldForwardProp: rootShouldForwardProp
})({
  cursor: 'inherit',
  position: 'absolute',
  opacity: 0,
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  margin: 0,
  padding: 0,
  zIndex: 1
});

/**
 * @ignore - internal component.
 */
const SwitchBase = /*#__PURE__*/React.forwardRef(function SwitchBase(props, ref) {
  const {
    autoFocus,
    checked: checkedProp,
    checkedIcon,
    defaultChecked,
    disabled: disabledProp,
    disableFocusRipple = false,
    edge = false,
    icon,
    id,
    inputProps,
    inputRef,
    name,
    onBlur,
    onChange,
    onFocus,
    readOnly,
    required = false,
    tabIndex,
    type,
    value,
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const [checked, setCheckedState] = useControlled({
    controlled: checkedProp,
    default: Boolean(defaultChecked),
    name: 'SwitchBase',
    state: 'checked'
  });
  const muiFormControl = useFormControl();
  const handleFocus = event => {
    if (onFocus) {
      onFocus(event);
    }
    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    }
  };
  const handleBlur = event => {
    if (onBlur) {
      onBlur(event);
    }
    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    }
  };
  const handleInputChange = event => {
    // Workaround for https://github.com/facebook/react/issues/9023
    if (event.nativeEvent.defaultPrevented) {
      return;
    }
    const newChecked = event.target.checked;
    setCheckedState(newChecked);
    if (onChange) {
      // TODO v6: remove the second argument.
      onChange(event, newChecked);
    }
  };
  let disabled = disabledProp;
  if (muiFormControl) {
    if (typeof disabled === 'undefined') {
      disabled = muiFormControl.disabled;
    }
  }
  const hasLabelFor = type === 'checkbox' || type === 'radio';
  const ownerState = {
    ...props,
    checked,
    disabled,
    disableFocusRipple,
    edge
  };
  const classes = useUtilityClasses$b(ownerState);
  const externalForwardedProps = {
    slots,
    slotProps: {
      input: inputProps,
      ...slotProps
    }
  };
  const [RootSlot, rootSlotProps] = useSlot('root', {
    ref,
    elementType: SwitchBaseRoot,
    className: classes.root,
    shouldForwardComponentProp: true,
    externalForwardedProps: {
      ...externalForwardedProps,
      component: 'span',
      ...other
    },
    getSlotProps: handlers => ({
      ...handlers,
      onFocus: event => {
        handlers.onFocus?.(event);
        handleFocus(event);
      },
      onBlur: event => {
        handlers.onBlur?.(event);
        handleBlur(event);
      }
    }),
    ownerState,
    additionalProps: {
      centerRipple: true,
      focusRipple: !disableFocusRipple,
      disabled,
      role: undefined,
      tabIndex: null
    }
  });
  const [InputSlot, inputSlotProps] = useSlot('input', {
    ref: inputRef,
    elementType: SwitchBaseInput,
    className: classes.input,
    externalForwardedProps,
    getSlotProps: handlers => ({
      ...handlers,
      onChange: event => {
        handlers.onChange?.(event);
        handleInputChange(event);
      }
    }),
    ownerState,
    additionalProps: {
      autoFocus,
      checked: checkedProp,
      defaultChecked,
      disabled,
      id: hasLabelFor ? id : undefined,
      name,
      readOnly,
      required,
      tabIndex,
      type,
      ...(type === 'checkbox' && value === undefined ? {} : {
        value
      })
    }
  });
  return /*#__PURE__*/jsxs(RootSlot, {
    ...rootSlotProps,
    children: [/*#__PURE__*/jsx$1(InputSlot, {
      ...inputSlotProps
    }), checked ? checkedIcon : icon]
  });
});

// NB: If changed, please update Checkbox, Switch and Radio
// so that the API documentation is updated.
process.env.NODE_ENV !== "production" ? SwitchBase.propTypes = {
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: PropTypes.bool,
  /**
   * If `true`, the component is checked.
   */
  checked: PropTypes.bool,
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: PropTypes.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * @ignore
   */
  defaultChecked: PropTypes.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: PropTypes.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: PropTypes.oneOf(['end', 'start', false]),
  /**
   * The icon to display when the component is unchecked.
   */
  icon: PropTypes.node.isRequired,
  /**
   * The id of the `input` element.
   */
  id: PropTypes.string,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   */
  inputProps: PropTypes.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType,
  /*
   * @ignore
   */
  name: PropTypes.string,
  /**
   * @ignore
   */
  onBlur: PropTypes.func,
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: PropTypes.func,
  /**
   * @ignore
   */
  onFocus: PropTypes.func,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: PropTypes.bool,
  /**
   * If `true`, the `input` element is required.
   */
  required: PropTypes.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: PropTypes.shape({
    input: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: PropTypes.shape({
    input: PropTypes.elementType,
    root: PropTypes.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object,
  /**
   * @ignore
   */
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * The input component prop `type`.
   */
  type: PropTypes.string.isRequired,
  /**
   * The value of the component.
   */
  value: PropTypes.any
} : void 0;var CheckBoxOutlineBlankIcon = createSvgIcon(/*#__PURE__*/jsx$1("path", {
  d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
}), 'CheckBoxOutlineBlank');var CheckBoxIcon = createSvgIcon(/*#__PURE__*/jsx$1("path", {
  d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}), 'CheckBox');var IndeterminateCheckBoxIcon = createSvgIcon(/*#__PURE__*/jsx$1("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
}), 'IndeterminateCheckBox');function getCheckboxUtilityClass(slot) {
  return generateUtilityClass('MuiCheckbox', slot);
}
const checkboxClasses = generateUtilityClasses('MuiCheckbox', ['root', 'checked', 'disabled', 'indeterminate', 'colorPrimary', 'colorSecondary', 'sizeSmall', 'sizeMedium']);const useUtilityClasses$a = ownerState => {
  const {
    classes,
    indeterminate,
    color,
    size
  } = ownerState;
  const slots = {
    root: ['root', indeterminate && 'indeterminate', `color${capitalize(color)}`, `size${capitalize(size)}`]
  };
  const composedClasses = composeClasses(slots, getCheckboxUtilityClass, classes);
  return {
    ...classes,
    // forward the disabled and checked classes to the SwitchBase
    ...composedClasses
  };
};
const CheckboxRoot = styled(SwitchBase, {
  shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === 'classes',
  name: 'MuiCheckbox',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.indeterminate && styles.indeterminate, styles[`size${capitalize(ownerState.size)}`], ownerState.color !== 'default' && styles[`color${capitalize(ownerState.color)}`]];
  }
})(memoTheme(({
  theme
}) => ({
  color: (theme.vars || theme).palette.text.secondary,
  variants: [{
    props: {
      color: 'default',
      disableRipple: false
    },
    style: {
      '&:hover': {
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.action.active, theme.palette.action.hoverOpacity)
      }
    }
  }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color,
      disableRipple: false
    },
    style: {
      '&:hover': {
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette[color].main, theme.palette.action.hoverOpacity)
      }
    }
  })), ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color
    },
    style: {
      [`&.${checkboxClasses.checked}, &.${checkboxClasses.indeterminate}`]: {
        color: (theme.vars || theme).palette[color].main
      },
      [`&.${checkboxClasses.disabled}`]: {
        color: (theme.vars || theme).palette.action.disabled
      }
    }
  })), {
    // Should be last to override other colors
    props: {
      disableRipple: false
    },
    style: {
      // Reset on touch devices, it doesn't add specificity
      '&:hover': {
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    }
  }]
})));
const defaultCheckedIcon = /*#__PURE__*/jsx$1(CheckBoxIcon, {});
const defaultIcon = /*#__PURE__*/jsx$1(CheckBoxOutlineBlankIcon, {});
const defaultIndeterminateIcon = /*#__PURE__*/jsx$1(IndeterminateCheckBoxIcon, {});
const Checkbox = /*#__PURE__*/React.forwardRef(function Checkbox(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: 'MuiCheckbox'
  });
  const {
    checkedIcon = defaultCheckedIcon,
    color = 'primary',
    icon: iconProp = defaultIcon,
    indeterminate = false,
    indeterminateIcon: indeterminateIconProp = defaultIndeterminateIcon,
    inputProps,
    size = 'medium',
    disableRipple = false,
    className,
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const icon = indeterminate ? indeterminateIconProp : iconProp;
  const indeterminateIcon = indeterminate ? indeterminateIconProp : checkedIcon;
  const ownerState = {
    ...props,
    disableRipple,
    color,
    indeterminate,
    size
  };
  const classes = useUtilityClasses$a(ownerState);
  const externalInputProps = slotProps.input ?? inputProps;
  const [RootSlot, rootSlotProps] = useSlot('root', {
    ref,
    elementType: CheckboxRoot,
    className: clsx(classes.root, className),
    shouldForwardComponentProp: true,
    externalForwardedProps: {
      slots,
      slotProps,
      ...other
    },
    ownerState,
    additionalProps: {
      type: 'checkbox',
      icon: /*#__PURE__*/React.cloneElement(icon, {
        fontSize: icon.props.fontSize ?? size
      }),
      checkedIcon: /*#__PURE__*/React.cloneElement(indeterminateIcon, {
        fontSize: indeterminateIcon.props.fontSize ?? size
      }),
      disableRipple,
      slots,
      slotProps: {
        input: mergeSlotProps$1(typeof externalInputProps === 'function' ? externalInputProps(ownerState) : externalInputProps, {
          'data-indeterminate': indeterminate
        })
      }
    }
  });
  return /*#__PURE__*/jsx$1(RootSlot, {
    ...rootSlotProps,
    classes: classes
  });
});
process.env.NODE_ENV !== "production" ? Checkbox.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the component is checked.
   */
  checked: PropTypes.bool,
  /**
   * The icon to display when the component is checked.
   * @default <CheckBoxIcon />
   */
  checkedIcon: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['default', 'primary', 'secondary', 'error', 'info', 'success', 'warning']), PropTypes.string]),
  /**
   * The default checked state. Use when the component is not controlled.
   */
  defaultChecked: PropTypes.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the ripple effect is disabled.
   * @default false
   */
  disableRipple: PropTypes.bool,
  /**
   * The icon to display when the component is unchecked.
   * @default <CheckBoxOutlineBlankIcon />
   */
  icon: PropTypes.node,
  /**
   * The id of the `input` element.
   */
  id: PropTypes.string,
  /**
   * If `true`, the component appears indeterminate.
   * This does not set the native input element to indeterminate due
   * to inconsistent behavior across browsers.
   * However, we set a `data-indeterminate` attribute on the `input`.
   * @default false
   */
  indeterminate: PropTypes.bool,
  /**
   * The icon to display when the component is indeterminate.
   * @default <IndeterminateCheckBoxIcon />
   */
  indeterminateIcon: PropTypes.node,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   * @deprecated Use `slotProps.input` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputProps: PropTypes.object,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: PropTypes.func,
  /**
   * If `true`, the `input` element is required.
   * @default false
   */
  required: PropTypes.bool,
  /**
   * The size of the component.
   * `small` is equivalent to the dense checkbox styling.
   * @default 'medium'
   */
  size: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['medium', 'small']), PropTypes.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: PropTypes.shape({
    input: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: PropTypes.shape({
    input: PropTypes.elementType,
    root: PropTypes.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * The value of the component. The DOM API casts this to a string.
   * The browser uses "on" as the default value.
   */
  value: PropTypes.any
} : void 0;// TODO: return `EventHandlerName extends `on${infer EventName}` ? Lowercase<EventName> : never` once generatePropTypes runs with TS 4.1
function mapEventPropToEvent(eventProp) {
  return eventProp.substring(2).toLowerCase();
}
function clickedRootScrollbar(event, doc) {
  return doc.documentElement.clientWidth < event.clientX || doc.documentElement.clientHeight < event.clientY;
}
/**
 * Listen for click events that occur somewhere in the document, outside of the element itself.
 * For instance, if you need to hide a menu when people click anywhere else on your page.
 *
 * Demos:
 *
 * - [Click-Away Listener](https://mui.com/material-ui/react-click-away-listener/)
 * - [Menu](https://mui.com/material-ui/react-menu/)
 *
 * API:
 *
 * - [ClickAwayListener API](https://mui.com/material-ui/api/click-away-listener/)
 */
function ClickAwayListener(props) {
  const {
    children,
    disableReactTree = false,
    mouseEvent = 'onClick',
    onClickAway,
    touchEvent = 'onTouchEnd'
  } = props;
  const movedRef = React.useRef(false);
  const nodeRef = React.useRef(null);
  const activatedRef = React.useRef(false);
  const syntheticEventRef = React.useRef(false);
  React.useEffect(() => {
    // Ensure that this component is not "activated" synchronously.
    // https://github.com/facebook/react/issues/20074
    setTimeout(() => {
      activatedRef.current = true;
    }, 0);
    return () => {
      activatedRef.current = false;
    };
  }, []);
  const handleRef = useForkRef(getReactElementRef(children), nodeRef);

  // The handler doesn't take event.defaultPrevented into account:
  //
  // event.preventDefault() is meant to stop default behaviors like
  // clicking a checkbox to check it, hitting a button to submit a form,
  // and hitting left arrow to move the cursor in a text input etc.
  // Only special HTML elements have these default behaviors.
  const handleClickAway = useEventCallback(event => {
    // Given developers can stop the propagation of the synthetic event,
    // we can only be confident with a positive value.
    const insideReactTree = syntheticEventRef.current;
    syntheticEventRef.current = false;
    const doc = ownerDocument(nodeRef.current);

    // 1. IE11 support, which trigger the handleClickAway even after the unbind
    // 2. The child might render null.
    // 3. Behave like a blur listener.
    if (!activatedRef.current || !nodeRef.current || 'clientX' in event && clickedRootScrollbar(event, doc)) {
      return;
    }

    // Do not act if user performed touchmove
    if (movedRef.current) {
      movedRef.current = false;
      return;
    }
    let insideDOM;

    // If not enough, can use https://github.com/DieterHolvoet/event-propagation-path/blob/master/propagationPath.js
    if (event.composedPath) {
      insideDOM = event.composedPath().includes(nodeRef.current);
    } else {
      insideDOM = !doc.documentElement.contains(
      // @ts-expect-error returns `false` as intended when not dispatched from a Node
      event.target) || nodeRef.current.contains(
      // @ts-expect-error returns `false` as intended when not dispatched from a Node
      event.target);
    }
    if (!insideDOM && (disableReactTree || !insideReactTree)) {
      onClickAway(event);
    }
  });

  // Keep track of mouse/touch events that bubbled up through the portal.
  const createHandleSynthetic = handlerName => event => {
    syntheticEventRef.current = true;
    const childrenPropsHandler = children.props[handlerName];
    if (childrenPropsHandler) {
      childrenPropsHandler(event);
    }
  };
  const childrenProps = {
    ref: handleRef
  };
  if (touchEvent !== false) {
    childrenProps[touchEvent] = createHandleSynthetic(touchEvent);
  }
  React.useEffect(() => {
    if (touchEvent !== false) {
      const mappedTouchEvent = mapEventPropToEvent(touchEvent);
      const doc = ownerDocument(nodeRef.current);
      const handleTouchMove = () => {
        movedRef.current = true;
      };
      doc.addEventListener(mappedTouchEvent, handleClickAway);
      doc.addEventListener('touchmove', handleTouchMove);
      return () => {
        doc.removeEventListener(mappedTouchEvent, handleClickAway);
        doc.removeEventListener('touchmove', handleTouchMove);
      };
    }
    return undefined;
  }, [handleClickAway, touchEvent]);
  if (mouseEvent !== false) {
    childrenProps[mouseEvent] = createHandleSynthetic(mouseEvent);
  }
  React.useEffect(() => {
    if (mouseEvent !== false) {
      const mappedMouseEvent = mapEventPropToEvent(mouseEvent);
      const doc = ownerDocument(nodeRef.current);
      doc.addEventListener(mappedMouseEvent, handleClickAway);
      return () => {
        doc.removeEventListener(mappedMouseEvent, handleClickAway);
      };
    }
    return undefined;
  }, [handleClickAway, mouseEvent]);
  return /*#__PURE__*/React.cloneElement(children, childrenProps);
}
process.env.NODE_ENV !== "production" ? ClickAwayListener.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The wrapped element.
   */
  children: elementAcceptingRef.isRequired,
  /**
   * If `true`, the React tree is ignored and only the DOM tree is considered.
   * This prop changes how portaled elements are handled.
   * @default false
   */
  disableReactTree: PropTypes.bool,
  /**
   * The mouse event to listen to. You can disable the listener by providing `false`.
   * @default 'onClick'
   */
  mouseEvent: PropTypes.oneOf(['onClick', 'onMouseDown', 'onMouseUp', 'onPointerDown', 'onPointerUp', false]),
  /**
   * Callback fired when a "click away" event is detected.
   */
  onClickAway: PropTypes.func.isRequired,
  /**
   * The touch event to listen to. You can disable the listener by providing `false`.
   * @default 'onTouchEnd'
   */
  touchEvent: PropTypes.oneOf(['onTouchEnd', 'onTouchStart', false])
} : void 0;
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line
  ClickAwayListener['propTypes' + ''] = exactProp(ClickAwayListener.propTypes);
}/**
 *
 * Demos:
 *
 * - [Grid](https://mui.com/material-ui/react-grid/)
 *
 * API:
 *
 * - [Grid API](https://mui.com/material-ui/api/grid/)
 */
const Grid = createGrid({
  createStyledComponent: styled('div', {
    name: 'MuiGrid',
    slot: 'Root',
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.root, ownerState.container && styles.container];
    }
  }),
  componentName: 'MuiGrid',
  useThemeProps: inProps => useDefaultProps({
    props: inProps,
    name: 'MuiGrid'
  }),
  useTheme
});
process.env.NODE_ENV !== "production" ? Grid.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * The number of columns.
   * @default 12
   */
  columns: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number, PropTypes.object]),
  /**
   * Defines the horizontal space between the type `item` components.
   * It overrides the value of the `spacing` prop.
   */
  columnSpacing: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])), PropTypes.number, PropTypes.object, PropTypes.string]),
  /**
   * If `true`, the component will have the flex *container* behavior.
   * You should be wrapping *items* with a *container*.
   * @default false
   */
  container: PropTypes.bool,
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'row'
   */
  direction: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['column-reverse', 'column', 'row-reverse', 'row']), PropTypes.arrayOf(PropTypes.oneOf(['column-reverse', 'column', 'row-reverse', 'row'])), PropTypes.object]),
  /**
   * Defines the offset value for the type `item` components.
   */
  offset: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.string, PropTypes.number, PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])), PropTypes.object]),
  /**
   * Defines the vertical space between the type `item` components.
   * It overrides the value of the `spacing` prop.
   */
  rowSpacing: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])), PropTypes.number, PropTypes.object, PropTypes.string]),
  /**
   * Defines the size of the the type `item` components.
   */
  size: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.number, PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.number])), PropTypes.object]),
  /**
   * Defines the space between the type `item` components.
   * It can only be used on a type `container` component.
   * @default 0
   */
  spacing: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])), PropTypes.number, PropTypes.object, PropTypes.string]),
  /**
   * @ignore
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * @internal
   * The level of the grid starts from `0` and increases when the grid nests
   * inside another grid. Nesting is defined as a container Grid being a direct
   * child of a container Grid.
   *
   * ```js
   * <Grid container> // level 0
   *   <Grid container> // level 1
   *     <Grid container> // level 2
   * ```
   *
   * Only consecutive grid is considered nesting. A grid container will start at
   * `0` if there are non-Grid container element above it.
   *
   * ```js
   * <Grid container> // level 0
   *   <div>
   *     <Grid container> // level 0
   * ```
   *
   * ```js
   * <Grid container> // level 0
   *   <Grid>
   *     <Grid container> // level 0
   * ```
   */
  unstable_level: PropTypes.number,
  /**
   * Defines the `flex-wrap` style property.
   * It's applied for all screen sizes.
   * @default 'wrap'
   */
  wrap: PropTypes.oneOf(['nowrap', 'wrap-reverse', 'wrap'])
} : void 0;
if (process.env.NODE_ENV !== 'production') {
  const Component = Grid;
  const requireProp = requirePropFactory('Grid', Component);
  // eslint-disable-next-line no-useless-concat
  Component['propTypes' + ''] = {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    ...Component.propTypes,
    direction: requireProp('container'),
    spacing: requireProp('container'),
    wrap: requireProp('container')
  };
}function getScale(value) {
  return `scale(${value}, ${value ** 2})`;
}
const styles = {
  entering: {
    opacity: 1,
    transform: getScale(1)
  },
  entered: {
    opacity: 1,
    transform: 'none'
  }
};

/*
 TODO v6: remove
 Conditionally apply a workaround for the CSS transition bug in Safari 15.4 / WebKit browsers.
 */
const isWebKit154 = typeof navigator !== 'undefined' && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent);

/**
 * The Grow transition is used by the [Tooltip](/material-ui/react-tooltip/) and
 * [Popover](/material-ui/react-popover/) components.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */
const Grow = /*#__PURE__*/React.forwardRef(function Grow(props, ref) {
  const {
    addEndListener,
    appear = true,
    children,
    easing,
    in: inProp,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    style,
    timeout = 'auto',
    // eslint-disable-next-line react/prop-types
    TransitionComponent = Transition,
    ...other
  } = props;
  const timer = useTimeout();
  const autoTimeout = React.useRef();
  const theme = useTheme();
  const nodeRef = React.useRef(null);
  const handleRef = useForkRef(nodeRef, getReactElementRef(children), ref);
  const normalizedTransitionCallback = callback => maybeIsAppearing => {
    if (callback) {
      const node = nodeRef.current;

      // onEnterXxx and onExitXxx callbacks have a different arguments.length value.
      if (maybeIsAppearing === undefined) {
        callback(node);
      } else {
        callback(node, maybeIsAppearing);
      }
    }
  };
  const handleEntering = normalizedTransitionCallback(onEntering);
  const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
    reflow(node); // So the animation always start from the start.

    const {
      duration: transitionDuration,
      delay,
      easing: transitionTimingFunction
    } = getTransitionProps({
      style,
      timeout,
      easing
    }, {
      mode: 'enter'
    });
    let duration;
    if (timeout === 'auto') {
      duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
      autoTimeout.current = duration;
    } else {
      duration = transitionDuration;
    }
    node.style.transition = [theme.transitions.create('opacity', {
      duration,
      delay
    }), theme.transitions.create('transform', {
      duration: isWebKit154 ? duration : duration * 0.666,
      delay,
      easing: transitionTimingFunction
    })].join(',');
    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  const handleEntered = normalizedTransitionCallback(onEntered);
  const handleExiting = normalizedTransitionCallback(onExiting);
  const handleExit = normalizedTransitionCallback(node => {
    const {
      duration: transitionDuration,
      delay,
      easing: transitionTimingFunction
    } = getTransitionProps({
      style,
      timeout,
      easing
    }, {
      mode: 'exit'
    });
    let duration;
    if (timeout === 'auto') {
      duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
      autoTimeout.current = duration;
    } else {
      duration = transitionDuration;
    }
    node.style.transition = [theme.transitions.create('opacity', {
      duration,
      delay
    }), theme.transitions.create('transform', {
      duration: isWebKit154 ? duration : duration * 0.666,
      delay: isWebKit154 ? delay : delay || duration * 0.333,
      easing: transitionTimingFunction
    })].join(',');
    node.style.opacity = 0;
    node.style.transform = getScale(0.75);
    if (onExit) {
      onExit(node);
    }
  });
  const handleExited = normalizedTransitionCallback(onExited);
  const handleAddEndListener = next => {
    if (timeout === 'auto') {
      timer.start(autoTimeout.current || 0, next);
    }
    if (addEndListener) {
      // Old call signature before `react-transition-group` implemented `nodeRef`
      addEndListener(nodeRef.current, next);
    }
  };
  return /*#__PURE__*/jsx$1(TransitionComponent, {
    appear: appear,
    in: inProp,
    nodeRef: nodeRef,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    timeout: timeout === 'auto' ? null : timeout,
    ...other,
    children: (state, {
      ownerState,
      ...restChildProps
    }) => {
      return /*#__PURE__*/React.cloneElement(children, {
        style: {
          opacity: 0,
          transform: getScale(0.75),
          visibility: state === 'exited' && !inProp ? 'hidden' : undefined,
          ...styles[state],
          ...style,
          ...children.props.style
        },
        ref: handleRef,
        ...restChildProps
      });
    }
  });
});
process.env.NODE_ENV !== "production" ? Grow.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: PropTypes.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: PropTypes.bool,
  /**
   * A single child content element.
   */
  children: elementAcceptingRef.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: PropTypes.oneOfType([PropTypes.shape({
    enter: PropTypes.string,
    exit: PropTypes.string
  }), PropTypes.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: PropTypes.bool,
  /**
   * @ignore
   */
  onEnter: PropTypes.func,
  /**
   * @ignore
   */
  onEntered: PropTypes.func,
  /**
   * @ignore
   */
  onEntering: PropTypes.func,
  /**
   * @ignore
   */
  onExit: PropTypes.func,
  /**
   * @ignore
   */
  onExited: PropTypes.func,
  /**
   * @ignore
   */
  onExiting: PropTypes.func,
  /**
   * @ignore
   */
  style: PropTypes.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: PropTypes.oneOfType([PropTypes.oneOf(['auto']), PropTypes.number, PropTypes.shape({
    appear: PropTypes.number,
    enter: PropTypes.number,
    exit: PropTypes.number
  })])
} : void 0;
if (Grow) {
  Grow.muiSupportAuto = true;
}function getIconUtilityClass(slot) {
  return generateUtilityClass('MuiIcon', slot);
}
generateUtilityClasses('MuiIcon', ['root', 'colorPrimary', 'colorSecondary', 'colorAction', 'colorError', 'colorDisabled', 'fontSizeInherit', 'fontSizeSmall', 'fontSizeMedium', 'fontSizeLarge']);const useUtilityClasses$9 = ownerState => {
  const {
    color,
    fontSize,
    classes
  } = ownerState;
  const slots = {
    root: ['root', color !== 'inherit' && `color${capitalize(color)}`, `fontSize${capitalize(fontSize)}`]
  };
  return composeClasses(slots, getIconUtilityClass, classes);
};
const IconRoot = styled('span', {
  name: 'MuiIcon',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.color !== 'inherit' && styles[`color${capitalize(ownerState.color)}`], styles[`fontSize${capitalize(ownerState.fontSize)}`]];
  }
})(memoTheme(({
  theme
}) => ({
  userSelect: 'none',
  width: '1em',
  height: '1em',
  // Chrome fix for https://issues.chromium.org/issues/41375697
  // To remove at some point.
  overflow: 'hidden',
  display: 'inline-block',
  // allow overflow hidden to take action
  textAlign: 'center',
  // support non-square icon
  flexShrink: 0,
  variants: [{
    props: {
      fontSize: 'inherit'
    },
    style: {
      fontSize: 'inherit'
    }
  }, {
    props: {
      fontSize: 'small'
    },
    style: {
      fontSize: theme.typography.pxToRem(20)
    }
  }, {
    props: {
      fontSize: 'medium'
    },
    style: {
      fontSize: theme.typography.pxToRem(24)
    }
  }, {
    props: {
      fontSize: 'large'
    },
    style: {
      fontSize: theme.typography.pxToRem(36)
    }
  }, {
    props: {
      color: 'action'
    },
    style: {
      color: (theme.vars || theme).palette.action.active
    }
  }, {
    props: {
      color: 'disabled'
    },
    style: {
      color: (theme.vars || theme).palette.action.disabled
    }
  }, {
    props: {
      color: 'inherit'
    },
    style: {
      color: undefined
    }
  }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color
    },
    style: {
      color: (theme.vars || theme).palette[color].main
    }
  }))]
})));
const Icon = /*#__PURE__*/React.forwardRef(function Icon(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: 'MuiIcon'
  });
  const {
    baseClassName = 'material-icons',
    className,
    color = 'inherit',
    component: Component = 'span',
    fontSize = 'medium',
    ...other
  } = props;
  const ownerState = {
    ...props,
    baseClassName,
    color,
    component: Component,
    fontSize
  };
  const classes = useUtilityClasses$9(ownerState);
  return /*#__PURE__*/jsx$1(IconRoot, {
    as: Component,
    className: clsx(baseClassName,
    // Prevent the translation of the text content.
    // The font relies on the exact text content to render the icon.
    'notranslate', classes.root, className),
    ownerState: ownerState,
    "aria-hidden": true,
    ref: ref,
    ...other
  });
});
process.env.NODE_ENV !== "production" ? Icon.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The base class applied to the icon. Defaults to 'material-icons', but can be changed to any
   * other base class that suits the icon font you're using (for example material-icons-rounded, fas, etc).
   * @default 'material-icons'
   */
  baseClassName: PropTypes.string,
  /**
   * The name of the icon font ligature.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'inherit'
   */
  color: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['inherit', 'action', 'disabled', 'primary', 'secondary', 'error', 'info', 'success', 'warning']), PropTypes.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['inherit', 'large', 'medium', 'small']), PropTypes.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;
Icon.muiName = 'Icon';function getPaginationUtilityClass(slot) {
  return generateUtilityClass('MuiPagination', slot);
}
generateUtilityClasses('MuiPagination', ['root', 'ul', 'outlined', 'text']);function usePagination(props = {}) {
  // keep default values in sync with @default tags in Pagination.propTypes
  const {
    boundaryCount = 1,
    componentName = 'usePagination',
    count = 1,
    defaultPage = 1,
    disabled = false,
    hideNextButton = false,
    hidePrevButton = false,
    onChange: handleChange,
    page: pageProp,
    showFirstButton = false,
    showLastButton = false,
    siblingCount = 1,
    ...other
  } = props;
  const [page, setPageState] = useControlled({
    controlled: pageProp,
    default: defaultPage,
    name: componentName,
    state: 'page'
  });
  const handleClick = (event, value) => {
    if (!pageProp) {
      setPageState(value);
    }
    if (handleChange) {
      handleChange(event, value);
    }
  };

  // https://dev.to/namirsab/comment/2050
  const range = (start, end) => {
    const length = end - start + 1;
    return Array.from({
      length
    }, (_, i) => start + i);
  };
  const startPages = range(1, Math.min(boundaryCount, count));
  const endPages = range(Math.max(count - boundaryCount + 1, boundaryCount + 1), count);
  const siblingsStart = Math.max(Math.min(
  // Natural start
  page - siblingCount,
  // Lower boundary when page is high
  count - boundaryCount - siblingCount * 2 - 1),
  // Greater than startPages
  boundaryCount + 2);
  const siblingsEnd = Math.min(Math.max(
  // Natural end
  page + siblingCount,
  // Upper boundary when page is low
  boundaryCount + siblingCount * 2 + 2),
  // Less than endPages
  count - boundaryCount - 1);

  // Basic list of items to render
  // for example itemList = ['first', 'previous', 1, 'ellipsis', 4, 5, 6, 'ellipsis', 10, 'next', 'last']
  const itemList = [...(showFirstButton ? ['first'] : []), ...(hidePrevButton ? [] : ['previous']), ...startPages,
  // Start ellipsis
  // eslint-disable-next-line no-nested-ternary
  ...(siblingsStart > boundaryCount + 2 ? ['start-ellipsis'] : boundaryCount + 1 < count - boundaryCount ? [boundaryCount + 1] : []),
  // Sibling pages
  ...range(siblingsStart, siblingsEnd),
  // End ellipsis
  // eslint-disable-next-line no-nested-ternary
  ...(siblingsEnd < count - boundaryCount - 1 ? ['end-ellipsis'] : count - boundaryCount > boundaryCount ? [count - boundaryCount] : []), ...endPages, ...(hideNextButton ? [] : ['next']), ...(showLastButton ? ['last'] : [])];

  // Map the button type to its page number
  const buttonPage = type => {
    switch (type) {
      case 'first':
        return 1;
      case 'previous':
        return page - 1;
      case 'next':
        return page + 1;
      case 'last':
        return count;
      default:
        return null;
    }
  };

  // Convert the basic item list to PaginationItem props objects
  const items = itemList.map(item => {
    return typeof item === 'number' ? {
      onClick: event => {
        handleClick(event, item);
      },
      type: 'page',
      page: item,
      selected: item === page,
      disabled,
      'aria-current': item === page ? 'page' : undefined
    } : {
      onClick: event => {
        handleClick(event, buttonPage(item));
      },
      type: item,
      page: buttonPage(item),
      selected: false,
      disabled: disabled || !item.includes('ellipsis') && (item === 'next' || item === 'last' ? page >= count : page <= 1)
    };
  });
  return {
    items,
    ...other
  };
}function getPaginationItemUtilityClass(slot) {
  return generateUtilityClass('MuiPaginationItem', slot);
}
const paginationItemClasses = generateUtilityClasses('MuiPaginationItem', ['root', 'page', 'sizeSmall', 'sizeLarge', 'text', 'textPrimary', 'textSecondary', 'outlined', 'outlinedPrimary', 'outlinedSecondary', 'rounded', 'ellipsis', 'firstLast', 'previousNext', 'focusVisible', 'disabled', 'selected', 'icon', 'colorPrimary', 'colorSecondary']);var FirstPageIconDefault = createSvgIcon(/*#__PURE__*/jsx$1("path", {
  d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
}), 'FirstPage');var LastPageIconDefault = createSvgIcon(/*#__PURE__*/jsx$1("path", {
  d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
}), 'LastPage');var NavigateBeforeIcon = createSvgIcon(/*#__PURE__*/jsx$1("path", {
  d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
}), 'NavigateBefore');var NavigateNextIcon = createSvgIcon(/*#__PURE__*/jsx$1("path", {
  d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
}), 'NavigateNext');const overridesResolver = (props, styles) => {
  const {
    ownerState
  } = props;
  return [styles.root, styles[ownerState.variant], styles[`size${capitalize(ownerState.size)}`], ownerState.variant === 'text' && styles[`text${capitalize(ownerState.color)}`], ownerState.variant === 'outlined' && styles[`outlined${capitalize(ownerState.color)}`], ownerState.shape === 'rounded' && styles.rounded, ownerState.type === 'page' && styles.page, (ownerState.type === 'start-ellipsis' || ownerState.type === 'end-ellipsis') && styles.ellipsis, (ownerState.type === 'previous' || ownerState.type === 'next') && styles.previousNext, (ownerState.type === 'first' || ownerState.type === 'last') && styles.firstLast];
};
const useUtilityClasses$8 = ownerState => {
  const {
    classes,
    color,
    disabled,
    selected,
    size,
    shape,
    type,
    variant
  } = ownerState;
  const slots = {
    root: ['root', `size${capitalize(size)}`, variant, shape, color !== 'standard' && `color${capitalize(color)}`, color !== 'standard' && `${variant}${capitalize(color)}`, disabled && 'disabled', selected && 'selected', {
      page: 'page',
      first: 'firstLast',
      last: 'firstLast',
      'start-ellipsis': 'ellipsis',
      'end-ellipsis': 'ellipsis',
      previous: 'previousNext',
      next: 'previousNext'
    }[type]],
    icon: ['icon']
  };
  return composeClasses(slots, getPaginationItemUtilityClass, classes);
};
const PaginationItemEllipsis = styled('div', {
  name: 'MuiPaginationItem',
  slot: 'Root',
  overridesResolver
})(memoTheme(({
  theme
}) => ({
  ...theme.typography.body2,
  borderRadius: 32 / 2,
  textAlign: 'center',
  boxSizing: 'border-box',
  minWidth: 32,
  padding: '0 6px',
  margin: '0 3px',
  color: (theme.vars || theme).palette.text.primary,
  height: 'auto',
  [`&.${paginationItemClasses.disabled}`]: {
    opacity: (theme.vars || theme).palette.action.disabledOpacity
  },
  variants: [{
    props: {
      size: 'small'
    },
    style: {
      minWidth: 26,
      borderRadius: 26 / 2,
      margin: '0 1px',
      padding: '0 4px'
    }
  }, {
    props: {
      size: 'large'
    },
    style: {
      minWidth: 40,
      borderRadius: 40 / 2,
      padding: '0 10px',
      fontSize: theme.typography.pxToRem(15)
    }
  }]
})));
const PaginationItemPage = styled(ButtonBase, {
  name: 'MuiPaginationItem',
  slot: 'Root',
  overridesResolver
})(memoTheme(({
  theme
}) => ({
  ...theme.typography.body2,
  borderRadius: 32 / 2,
  textAlign: 'center',
  boxSizing: 'border-box',
  minWidth: 32,
  height: 32,
  padding: '0 6px',
  margin: '0 3px',
  color: (theme.vars || theme).palette.text.primary,
  [`&.${paginationItemClasses.focusVisible}`]: {
    backgroundColor: (theme.vars || theme).palette.action.focus
  },
  [`&.${paginationItemClasses.disabled}`]: {
    opacity: (theme.vars || theme).palette.action.disabledOpacity
  },
  transition: theme.transitions.create(['color', 'background-color'], {
    duration: theme.transitions.duration.short
  }),
  '&:hover': {
    backgroundColor: (theme.vars || theme).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: 'transparent'
    }
  },
  [`&.${paginationItemClasses.selected}`]: {
    backgroundColor: (theme.vars || theme).palette.action.selected,
    '&:hover': {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.selectedChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : alpha(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: (theme.vars || theme).palette.action.selected
      }
    },
    [`&.${paginationItemClasses.focusVisible}`]: {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.selectedChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : alpha(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
    },
    [`&.${paginationItemClasses.disabled}`]: {
      opacity: 1,
      color: (theme.vars || theme).palette.action.disabled,
      backgroundColor: (theme.vars || theme).palette.action.selected
    }
  },
  variants: [{
    props: {
      size: 'small'
    },
    style: {
      minWidth: 26,
      height: 26,
      borderRadius: 26 / 2,
      margin: '0 1px',
      padding: '0 4px'
    }
  }, {
    props: {
      size: 'large'
    },
    style: {
      minWidth: 40,
      height: 40,
      borderRadius: 40 / 2,
      padding: '0 10px',
      fontSize: theme.typography.pxToRem(15)
    }
  }, {
    props: {
      shape: 'rounded'
    },
    style: {
      borderRadius: (theme.vars || theme).shape.borderRadius
    }
  }, {
    props: {
      variant: 'outlined'
    },
    style: {
      border: theme.vars ? `1px solid rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.23)` : `1px solid ${theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'}`,
      [`&.${paginationItemClasses.selected}`]: {
        [`&.${paginationItemClasses.disabled}`]: {
          borderColor: (theme.vars || theme).palette.action.disabledBackground,
          color: (theme.vars || theme).palette.action.disabled
        }
      }
    }
  }, {
    props: {
      variant: 'text'
    },
    style: {
      [`&.${paginationItemClasses.selected}`]: {
        [`&.${paginationItemClasses.disabled}`]: {
          color: (theme.vars || theme).palette.action.disabled
        }
      }
    }
  }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter(['dark', 'contrastText'])).map(([color]) => ({
    props: {
      variant: 'text',
      color
    },
    style: {
      [`&.${paginationItemClasses.selected}`]: {
        color: (theme.vars || theme).palette[color].contrastText,
        backgroundColor: (theme.vars || theme).palette[color].main,
        '&:hover': {
          backgroundColor: (theme.vars || theme).palette[color].dark,
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: (theme.vars || theme).palette[color].main
          }
        },
        [`&.${paginationItemClasses.focusVisible}`]: {
          backgroundColor: (theme.vars || theme).palette[color].dark
        },
        [`&.${paginationItemClasses.disabled}`]: {
          color: (theme.vars || theme).palette.action.disabled
        }
      }
    }
  })), ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter(['light'])).map(([color]) => ({
    props: {
      variant: 'outlined',
      color
    },
    style: {
      [`&.${paginationItemClasses.selected}`]: {
        color: (theme.vars || theme).palette[color].main,
        border: `1px solid ${theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / 0.5)` : alpha(theme.palette[color].main, 0.5)}`,
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / ${theme.vars.palette.action.activatedOpacity})` : alpha(theme.palette[color].main, theme.palette.action.activatedOpacity),
        '&:hover': {
          backgroundColor: theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / calc(${theme.vars.palette.action.activatedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : alpha(theme.palette[color].main, theme.palette.action.activatedOpacity + theme.palette.action.focusOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        },
        [`&.${paginationItemClasses.focusVisible}`]: {
          backgroundColor: theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / calc(${theme.vars.palette.action.activatedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : alpha(theme.palette[color].main, theme.palette.action.activatedOpacity + theme.palette.action.focusOpacity)
        }
      }
    }
  }))]
})));
const PaginationItemPageIcon = styled('div', {
  name: 'MuiPaginationItem',
  slot: 'Icon'
})(memoTheme(({
  theme
}) => ({
  fontSize: theme.typography.pxToRem(20),
  margin: '0 -8px',
  variants: [{
    props: {
      size: 'small'
    },
    style: {
      fontSize: theme.typography.pxToRem(18)
    }
  }, {
    props: {
      size: 'large'
    },
    style: {
      fontSize: theme.typography.pxToRem(22)
    }
  }]
})));
const PaginationItem = /*#__PURE__*/React.forwardRef(function PaginationItem(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: 'MuiPaginationItem'
  });
  const {
    className,
    color = 'standard',
    component,
    components = {},
    disabled = false,
    page,
    selected = false,
    shape = 'circular',
    size = 'medium',
    slots = {},
    slotProps = {},
    type = 'page',
    variant = 'text',
    ...other
  } = props;
  const ownerState = {
    ...props,
    color,
    disabled,
    selected,
    shape,
    size,
    type,
    variant
  };
  const isRtl = useRtl();
  const classes = useUtilityClasses$8(ownerState);
  const externalForwardedProps = {
    slots: {
      previous: slots.previous ?? components.previous,
      next: slots.next ?? components.next,
      first: slots.first ?? components.first,
      last: slots.last ?? components.last
    },
    slotProps
  };
  const [PreviousSlot, previousSlotProps] = useSlot('previous', {
    elementType: NavigateBeforeIcon,
    externalForwardedProps,
    ownerState
  });
  const [NextSlot, nextSlotProps] = useSlot('next', {
    elementType: NavigateNextIcon,
    externalForwardedProps,
    ownerState
  });
  const [FirstSlot, firstSlotProps] = useSlot('first', {
    elementType: FirstPageIconDefault,
    externalForwardedProps,
    ownerState
  });
  const [LastSlot, lastSlotProps] = useSlot('last', {
    elementType: LastPageIconDefault,
    externalForwardedProps,
    ownerState
  });
  const rtlAwareType = isRtl ? {
    previous: 'next',
    next: 'previous',
    first: 'last',
    last: 'first'
  }[type] : type;
  const IconSlot = {
    previous: PreviousSlot,
    next: NextSlot,
    first: FirstSlot,
    last: LastSlot
  }[rtlAwareType];
  const iconSlotProps = {
    previous: previousSlotProps,
    next: nextSlotProps,
    first: firstSlotProps,
    last: lastSlotProps
  }[rtlAwareType];
  return type === 'start-ellipsis' || type === 'end-ellipsis' ? /*#__PURE__*/jsx$1(PaginationItemEllipsis, {
    ref: ref,
    ownerState: ownerState,
    className: clsx(classes.root, className),
    children: "\u2026"
  }) : /*#__PURE__*/jsxs(PaginationItemPage, {
    ref: ref,
    ownerState: ownerState,
    component: component,
    disabled: disabled,
    className: clsx(classes.root, className),
    ...other,
    children: [type === 'page' && page, IconSlot ? /*#__PURE__*/jsx$1(PaginationItemPageIcon, {
      ...iconSlotProps,
      className: classes.icon,
      as: IconSlot
    }) : null]
  });
});
process.env.NODE_ENV !== "production" ? PaginationItem.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The active color.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'standard'
   */
  color: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['primary', 'secondary', 'standard']), PropTypes.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  components: PropTypes.shape({
    first: PropTypes.elementType,
    last: PropTypes.elementType,
    next: PropTypes.elementType,
    previous: PropTypes.elementType
  }),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * The current page number.
   */
  page: PropTypes.node,
  /**
   * If `true` the pagination item is selected.
   * @default false
   */
  selected: PropTypes.bool,
  /**
   * The shape of the pagination item.
   * @default 'circular'
   */
  shape: PropTypes.oneOf(['circular', 'rounded']),
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['small', 'medium', 'large']), PropTypes.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: PropTypes.shape({
    first: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    last: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    next: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    previous: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: PropTypes.shape({
    first: PropTypes.elementType,
    last: PropTypes.elementType,
    next: PropTypes.elementType,
    previous: PropTypes.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * The type of pagination item.
   * @default 'page'
   */
  type: PropTypes.oneOf(['end-ellipsis', 'first', 'last', 'next', 'page', 'previous', 'start-ellipsis']),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['outlined', 'text']), PropTypes.string])
} : void 0;const useUtilityClasses$7 = ownerState => {
  const {
    classes,
    variant
  } = ownerState;
  const slots = {
    root: ['root', variant],
    ul: ['ul']
  };
  return composeClasses(slots, getPaginationUtilityClass, classes);
};
const PaginationRoot = styled('nav', {
  name: 'MuiPagination',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant]];
  }
})({});
const PaginationUl = styled('ul', {
  name: 'MuiPagination',
  slot: 'Ul'
})({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  padding: 0,
  margin: 0,
  listStyle: 'none'
});
function defaultGetAriaLabel(type, page, selected) {
  if (type === 'page') {
    return `${selected ? '' : 'Go to '}page ${page}`;
  }
  return `Go to ${type} page`;
}
const Pagination = /*#__PURE__*/React.forwardRef(function Pagination(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: 'MuiPagination'
  });
  const {
    boundaryCount = 1,
    className,
    color = 'standard',
    count = 1,
    defaultPage = 1,
    disabled = false,
    getItemAriaLabel = defaultGetAriaLabel,
    hideNextButton = false,
    hidePrevButton = false,
    onChange,
    page,
    renderItem = item => /*#__PURE__*/jsx$1(PaginationItem, {
      ...item
    }),
    shape = 'circular',
    showFirstButton = false,
    showLastButton = false,
    siblingCount = 1,
    size = 'medium',
    variant = 'text',
    ...other
  } = props;
  const {
    items
  } = usePagination({
    ...props,
    componentName: 'Pagination'
  });
  const ownerState = {
    ...props,
    boundaryCount,
    color,
    count,
    defaultPage,
    disabled,
    getItemAriaLabel,
    hideNextButton,
    hidePrevButton,
    renderItem,
    shape,
    showFirstButton,
    showLastButton,
    siblingCount,
    size,
    variant
  };
  const classes = useUtilityClasses$7(ownerState);
  return /*#__PURE__*/jsx$1(PaginationRoot, {
    "aria-label": "pagination navigation",
    className: clsx(classes.root, className),
    ownerState: ownerState,
    ref: ref,
    ...other,
    children: /*#__PURE__*/jsx$1(PaginationUl, {
      className: classes.ul,
      ownerState: ownerState,
      children: items.map((item, index) => /*#__PURE__*/jsx$1("li", {
        children: renderItem({
          ...item,
          color,
          'aria-label': getItemAriaLabel(item.type, item.page, item.selected),
          shape,
          size,
          variant
        })
      }, index))
    })
  });
});

// @default tags synced with default values from usePagination

process.env.NODE_ENV !== "production" ? Pagination.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Number of always visible pages at the beginning and end.
   * @default 1
   */
  boundaryCount: integerPropType,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The active color.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'standard'
   */
  color: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['primary', 'secondary', 'standard']), PropTypes.string]),
  /**
   * The total number of pages.
   * @default 1
   */
  count: integerPropType,
  /**
   * The page selected by default when the component is uncontrolled.
   * @default 1
   */
  defaultPage: integerPropType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current page.
   * This is important for screen reader users.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @param {string} type The link or button type to format ('page' | 'first' | 'last' | 'next' | 'previous' | 'start-ellipsis' | 'end-ellipsis'). Defaults to 'page'.
   * @param {number | null} page The page number to format.
   * @param {boolean} selected If true, the current page is selected.
   * @returns {string}
   */
  getItemAriaLabel: PropTypes.func,
  /**
   * If `true`, hide the next-page button.
   * @default false
   */
  hideNextButton: PropTypes.bool,
  /**
   * If `true`, hide the previous-page button.
   * @default false
   */
  hidePrevButton: PropTypes.bool,
  /**
   * Callback fired when the page is changed.
   *
   * @param {React.ChangeEvent<unknown>} event The event source of the callback.
   * @param {number} page The page selected.
   */
  onChange: PropTypes.func,
  /**
   * The current page. Unlike `TablePagination`, which starts numbering from `0`, this pagination starts from `1`.
   */
  page: integerPropType,
  /**
   * Render the item.
   * @param {PaginationRenderItemParams} params The props to spread on a PaginationItem.
   * @returns {ReactNode}
   * @default (item) => <PaginationItem {...item} />
   */
  renderItem: PropTypes.func,
  /**
   * The shape of the pagination items.
   * @default 'circular'
   */
  shape: PropTypes.oneOf(['circular', 'rounded']),
  /**
   * If `true`, show the first-page button.
   * @default false
   */
  showFirstButton: PropTypes.bool,
  /**
   * If `true`, show the last-page button.
   * @default false
   */
  showLastButton: PropTypes.bool,
  /**
   * Number of always visible pages before and after the current page.
   * @default 1
   */
  siblingCount: integerPropType,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['small', 'medium', 'large']), PropTypes.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['outlined', 'text']), PropTypes.string])
} : void 0;function getTooltipUtilityClass(slot) {
  return generateUtilityClass('MuiTooltip', slot);
}
const tooltipClasses = generateUtilityClasses('MuiTooltip', ['popper', 'popperInteractive', 'popperArrow', 'popperClose', 'tooltip', 'tooltipArrow', 'touch', 'tooltipPlacementLeft', 'tooltipPlacementRight', 'tooltipPlacementTop', 'tooltipPlacementBottom', 'arrow']);function round(value) {
  return Math.round(value * 1e5) / 1e5;
}
const useUtilityClasses$6 = ownerState => {
  const {
    classes,
    disableInteractive,
    arrow,
    touch,
    placement
  } = ownerState;
  const slots = {
    popper: ['popper', !disableInteractive && 'popperInteractive', arrow && 'popperArrow'],
    tooltip: ['tooltip', arrow && 'tooltipArrow', touch && 'touch', `tooltipPlacement${capitalize(placement.split('-')[0])}`],
    arrow: ['arrow']
  };
  return composeClasses(slots, getTooltipUtilityClass, classes);
};
const TooltipPopper = styled(Popper, {
  name: 'MuiTooltip',
  slot: 'Popper',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.popper, !ownerState.disableInteractive && styles.popperInteractive, ownerState.arrow && styles.popperArrow, !ownerState.open && styles.popperClose];
  }
})(memoTheme(({
  theme
}) => ({
  zIndex: (theme.vars || theme).zIndex.tooltip,
  pointerEvents: 'none',
  variants: [{
    props: ({
      ownerState
    }) => !ownerState.disableInteractive,
    style: {
      pointerEvents: 'auto'
    }
  }, {
    props: ({
      open
    }) => !open,
    style: {
      pointerEvents: 'none'
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.arrow,
    style: {
      [`&[data-popper-placement*="bottom"] .${tooltipClasses.arrow}`]: {
        top: 0,
        marginTop: '-0.71em',
        '&::before': {
          transformOrigin: '0 100%'
        }
      },
      [`&[data-popper-placement*="top"] .${tooltipClasses.arrow}`]: {
        bottom: 0,
        marginBottom: '-0.71em',
        '&::before': {
          transformOrigin: '100% 0'
        }
      },
      [`&[data-popper-placement*="right"] .${tooltipClasses.arrow}`]: {
        height: '1em',
        width: '0.71em',
        '&::before': {
          transformOrigin: '100% 100%'
        }
      },
      [`&[data-popper-placement*="left"] .${tooltipClasses.arrow}`]: {
        height: '1em',
        width: '0.71em',
        '&::before': {
          transformOrigin: '0 0'
        }
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.arrow && !ownerState.isRtl,
    style: {
      [`&[data-popper-placement*="right"] .${tooltipClasses.arrow}`]: {
        left: 0,
        marginLeft: '-0.71em'
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.arrow && !!ownerState.isRtl,
    style: {
      [`&[data-popper-placement*="right"] .${tooltipClasses.arrow}`]: {
        right: 0,
        marginRight: '-0.71em'
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.arrow && !ownerState.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${tooltipClasses.arrow}`]: {
        right: 0,
        marginRight: '-0.71em'
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.arrow && !!ownerState.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${tooltipClasses.arrow}`]: {
        left: 0,
        marginLeft: '-0.71em'
      }
    }
  }]
})));
const TooltipTooltip = styled('div', {
  name: 'MuiTooltip',
  slot: 'Tooltip',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.tooltip, ownerState.touch && styles.touch, ownerState.arrow && styles.tooltipArrow, styles[`tooltipPlacement${capitalize(ownerState.placement.split('-')[0])}`]];
  }
})(memoTheme(({
  theme
}) => ({
  backgroundColor: theme.vars ? theme.vars.palette.Tooltip.bg : alpha(theme.palette.grey[700], 0.92),
  borderRadius: (theme.vars || theme).shape.borderRadius,
  color: (theme.vars || theme).palette.common.white,
  fontFamily: theme.typography.fontFamily,
  padding: '4px 8px',
  fontSize: theme.typography.pxToRem(11),
  maxWidth: 300,
  margin: 2,
  wordWrap: 'break-word',
  fontWeight: theme.typography.fontWeightMedium,
  [`.${tooltipClasses.popper}[data-popper-placement*="left"] &`]: {
    transformOrigin: 'right center'
  },
  [`.${tooltipClasses.popper}[data-popper-placement*="right"] &`]: {
    transformOrigin: 'left center'
  },
  [`.${tooltipClasses.popper}[data-popper-placement*="top"] &`]: {
    transformOrigin: 'center bottom',
    marginBottom: '14px'
  },
  [`.${tooltipClasses.popper}[data-popper-placement*="bottom"] &`]: {
    transformOrigin: 'center top',
    marginTop: '14px'
  },
  variants: [{
    props: ({
      ownerState
    }) => ownerState.arrow,
    style: {
      position: 'relative',
      margin: 0
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.touch,
    style: {
      padding: '8px 16px',
      fontSize: theme.typography.pxToRem(14),
      lineHeight: `${round(16 / 14)}em`,
      fontWeight: theme.typography.fontWeightRegular
    }
  }, {
    props: ({
      ownerState
    }) => !ownerState.isRtl,
    style: {
      [`.${tooltipClasses.popper}[data-popper-placement*="left"] &`]: {
        marginRight: '14px'
      },
      [`.${tooltipClasses.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: '14px'
      }
    }
  }, {
    props: ({
      ownerState
    }) => !ownerState.isRtl && ownerState.touch,
    style: {
      [`.${tooltipClasses.popper}[data-popper-placement*="left"] &`]: {
        marginRight: '24px'
      },
      [`.${tooltipClasses.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: '24px'
      }
    }
  }, {
    props: ({
      ownerState
    }) => !!ownerState.isRtl,
    style: {
      [`.${tooltipClasses.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: '14px'
      },
      [`.${tooltipClasses.popper}[data-popper-placement*="right"] &`]: {
        marginRight: '14px'
      }
    }
  }, {
    props: ({
      ownerState
    }) => !!ownerState.isRtl && ownerState.touch,
    style: {
      [`.${tooltipClasses.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: '24px'
      },
      [`.${tooltipClasses.popper}[data-popper-placement*="right"] &`]: {
        marginRight: '24px'
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.touch,
    style: {
      [`.${tooltipClasses.popper}[data-popper-placement*="top"] &`]: {
        marginBottom: '24px'
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.touch,
    style: {
      [`.${tooltipClasses.popper}[data-popper-placement*="bottom"] &`]: {
        marginTop: '24px'
      }
    }
  }]
})));
const TooltipArrow = styled('span', {
  name: 'MuiTooltip',
  slot: 'Arrow'
})(memoTheme(({
  theme
}) => ({
  overflow: 'hidden',
  position: 'absolute',
  width: '1em',
  height: '0.71em' /* = width / sqrt(2) = (length of the hypotenuse) */,
  boxSizing: 'border-box',
  color: theme.vars ? theme.vars.palette.Tooltip.bg : alpha(theme.palette.grey[700], 0.9),
  '&::before': {
    content: '""',
    margin: 'auto',
    display: 'block',
    width: '100%',
    height: '100%',
    backgroundColor: 'currentColor',
    transform: 'rotate(45deg)'
  }
})));
let hystersisOpen = false;
const hystersisTimer = new Timeout();
let cursorPosition = {
  x: 0,
  y: 0
};
function composeEventHandler(handler, eventHandler) {
  return (event, ...params) => {
    if (eventHandler) {
      eventHandler(event, ...params);
    }
    handler(event, ...params);
  };
}

// TODO v6: Remove PopperComponent, PopperProps, TransitionComponent and TransitionProps.
const Tooltip = /*#__PURE__*/React.forwardRef(function Tooltip(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: 'MuiTooltip'
  });
  const {
    arrow = false,
    children: childrenProp,
    classes: classesProp,
    components = {},
    componentsProps = {},
    describeChild = false,
    disableFocusListener = false,
    disableHoverListener = false,
    disableInteractive: disableInteractiveProp = false,
    disableTouchListener = false,
    enterDelay = 100,
    enterNextDelay = 0,
    enterTouchDelay = 700,
    followCursor = false,
    id: idProp,
    leaveDelay = 0,
    leaveTouchDelay = 1500,
    onClose,
    onOpen,
    open: openProp,
    placement = 'bottom',
    PopperComponent: PopperComponentProp,
    PopperProps = {},
    slotProps = {},
    slots = {},
    title,
    TransitionComponent: TransitionComponentProp,
    TransitionProps,
    ...other
  } = props;

  // to prevent runtime errors, developers will need to provide a child as a React element anyway.
  const children = /*#__PURE__*/React.isValidElement(childrenProp) ? childrenProp : /*#__PURE__*/jsx$1("span", {
    children: childrenProp
  });
  const theme = useTheme();
  const isRtl = useRtl();
  const [childNode, setChildNode] = React.useState();
  const [arrowRef, setArrowRef] = React.useState(null);
  const ignoreNonTouchEvents = React.useRef(false);
  const disableInteractive = disableInteractiveProp || followCursor;
  const closeTimer = useTimeout();
  const enterTimer = useTimeout();
  const leaveTimer = useTimeout();
  const touchTimer = useTimeout();
  const [openState, setOpenState] = useControlled({
    controlled: openProp,
    default: false,
    name: 'Tooltip',
    state: 'open'
  });
  let open = openState;
  if (process.env.NODE_ENV !== 'production') {
    // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler
    // eslint-disable-next-line react-hooks/rules-of-hooks -- process.env never changes
    const {
      current: isControlled
    } = React.useRef(openProp !== undefined);

    // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler
    // eslint-disable-next-line react-hooks/rules-of-hooks -- process.env never changes
    React.useEffect(() => {
      if (childNode && childNode.disabled && !isControlled && title !== '' && childNode.tagName.toLowerCase() === 'button') {
        console.warn(['MUI: You are providing a disabled `button` child to the Tooltip component.', 'A disabled element does not fire events.', "Tooltip needs to listen to the child element's events to display the title.", '', 'Add a simple wrapper element, such as a `span`.'].join('\n'));
      }
    }, [title, childNode, isControlled]);
  }
  const id = useId(idProp);
  const prevUserSelect = React.useRef();
  const stopTouchInteraction = useEventCallback(() => {
    if (prevUserSelect.current !== undefined) {
      document.body.style.WebkitUserSelect = prevUserSelect.current;
      prevUserSelect.current = undefined;
    }
    touchTimer.clear();
  });
  React.useEffect(() => stopTouchInteraction, [stopTouchInteraction]);
  const handleOpen = event => {
    hystersisTimer.clear();
    hystersisOpen = true;

    // The mouseover event will trigger for every nested element in the tooltip.
    // We can skip rerendering when the tooltip is already open.
    // We are using the mouseover event instead of the mouseenter event to fix a hide/show issue.
    setOpenState(true);
    if (onOpen && !open) {
      onOpen(event);
    }
  };
  const handleClose = useEventCallback(
  /**
   * @param {React.SyntheticEvent | Event} event
   */
  event => {
    hystersisTimer.start(800 + leaveDelay, () => {
      hystersisOpen = false;
    });
    setOpenState(false);
    if (onClose && open) {
      onClose(event);
    }
    closeTimer.start(theme.transitions.duration.shortest, () => {
      ignoreNonTouchEvents.current = false;
    });
  });
  const handleMouseOver = event => {
    if (ignoreNonTouchEvents.current && event.type !== 'touchstart') {
      return;
    }

    // Remove the title ahead of time.
    // We don't want to wait for the next render commit.
    // We would risk displaying two tooltips at the same time (native + this one).
    if (childNode) {
      childNode.removeAttribute('title');
    }
    enterTimer.clear();
    leaveTimer.clear();
    if (enterDelay || hystersisOpen && enterNextDelay) {
      enterTimer.start(hystersisOpen ? enterNextDelay : enterDelay, () => {
        handleOpen(event);
      });
    } else {
      handleOpen(event);
    }
  };
  const handleMouseLeave = event => {
    enterTimer.clear();
    leaveTimer.start(leaveDelay, () => {
      handleClose(event);
    });
  };
  const [, setChildIsFocusVisible] = React.useState(false);
  const handleBlur = event => {
    if (!isFocusVisible(event.target)) {
      setChildIsFocusVisible(false);
      handleMouseLeave(event);
    }
  };
  const handleFocus = event => {
    // Workaround for https://github.com/facebook/react/issues/7769
    // The autoFocus of React might trigger the event before the componentDidMount.
    // We need to account for this eventuality.
    if (!childNode) {
      setChildNode(event.currentTarget);
    }
    if (isFocusVisible(event.target)) {
      setChildIsFocusVisible(true);
      handleMouseOver(event);
    }
  };
  const detectTouchStart = event => {
    ignoreNonTouchEvents.current = true;
    const childrenProps = children.props;
    if (childrenProps.onTouchStart) {
      childrenProps.onTouchStart(event);
    }
  };
  const handleTouchStart = event => {
    detectTouchStart(event);
    leaveTimer.clear();
    closeTimer.clear();
    stopTouchInteraction();
    prevUserSelect.current = document.body.style.WebkitUserSelect;
    // Prevent iOS text selection on long-tap.
    document.body.style.WebkitUserSelect = 'none';
    touchTimer.start(enterTouchDelay, () => {
      document.body.style.WebkitUserSelect = prevUserSelect.current;
      handleMouseOver(event);
    });
  };
  const handleTouchEnd = event => {
    if (children.props.onTouchEnd) {
      children.props.onTouchEnd(event);
    }
    stopTouchInteraction();
    leaveTimer.start(leaveTouchDelay, () => {
      handleClose(event);
    });
  };
  React.useEffect(() => {
    if (!open) {
      return undefined;
    }

    /**
     * @param {KeyboardEvent} nativeEvent
     */
    function handleKeyDown(nativeEvent) {
      if (nativeEvent.key === 'Escape') {
        handleClose(nativeEvent);
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleClose, open]);
  const handleRef = useForkRef(getReactElementRef(children), setChildNode, ref);

  // There is no point in displaying an empty tooltip.
  // So we exclude all falsy values, except 0, which is valid.
  if (!title && title !== 0) {
    open = false;
  }
  const popperRef = React.useRef();
  const handleMouseMove = event => {
    const childrenProps = children.props;
    if (childrenProps.onMouseMove) {
      childrenProps.onMouseMove(event);
    }
    cursorPosition = {
      x: event.clientX,
      y: event.clientY
    };
    if (popperRef.current) {
      popperRef.current.update();
    }
  };
  const nameOrDescProps = {};
  const titleIsString = typeof title === 'string';
  if (describeChild) {
    nameOrDescProps.title = !open && titleIsString && !disableHoverListener ? title : null;
    nameOrDescProps['aria-describedby'] = open ? id : null;
  } else {
    nameOrDescProps['aria-label'] = titleIsString ? title : null;
    nameOrDescProps['aria-labelledby'] = open && !titleIsString ? id : null;
  }
  const childrenProps = {
    ...nameOrDescProps,
    ...other,
    ...children.props,
    className: clsx(other.className, children.props.className),
    onTouchStart: detectTouchStart,
    ref: handleRef,
    ...(followCursor ? {
      onMouseMove: handleMouseMove
    } : {})
  };
  if (process.env.NODE_ENV !== 'production') {
    childrenProps['data-mui-internal-clone-element'] = true;

    // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler
    // eslint-disable-next-line react-hooks/rules-of-hooks -- process.env never changes
    React.useEffect(() => {
      if (childNode && !childNode.getAttribute('data-mui-internal-clone-element')) {
        console.error(['MUI: The `children` component of the Tooltip is not forwarding its props correctly.', 'Please make sure that props are spread on the same element that the ref is applied to.'].join('\n'));
      }
    }, [childNode]);
  }
  const interactiveWrapperListeners = {};
  if (!disableTouchListener) {
    childrenProps.onTouchStart = handleTouchStart;
    childrenProps.onTouchEnd = handleTouchEnd;
  }
  if (!disableHoverListener) {
    childrenProps.onMouseOver = composeEventHandler(handleMouseOver, childrenProps.onMouseOver);
    childrenProps.onMouseLeave = composeEventHandler(handleMouseLeave, childrenProps.onMouseLeave);
    if (!disableInteractive) {
      interactiveWrapperListeners.onMouseOver = handleMouseOver;
      interactiveWrapperListeners.onMouseLeave = handleMouseLeave;
    }
  }
  if (!disableFocusListener) {
    childrenProps.onFocus = composeEventHandler(handleFocus, childrenProps.onFocus);
    childrenProps.onBlur = composeEventHandler(handleBlur, childrenProps.onBlur);
    if (!disableInteractive) {
      interactiveWrapperListeners.onFocus = handleFocus;
      interactiveWrapperListeners.onBlur = handleBlur;
    }
  }
  if (process.env.NODE_ENV !== 'production') {
    if (children.props.title) {
      console.error(['MUI: You have provided a `title` prop to the child of <Tooltip />.', `Remove this title prop \`${children.props.title}\` or the Tooltip component.`].join('\n'));
    }
  }
  const ownerState = {
    ...props,
    isRtl,
    arrow,
    disableInteractive,
    placement,
    PopperComponentProp,
    touch: ignoreNonTouchEvents.current
  };
  const resolvedPopperProps = typeof slotProps.popper === 'function' ? slotProps.popper(ownerState) : slotProps.popper;
  const popperOptions = React.useMemo(() => {
    let tooltipModifiers = [{
      name: 'arrow',
      enabled: Boolean(arrowRef),
      options: {
        element: arrowRef,
        padding: 4
      }
    }];
    if (PopperProps.popperOptions?.modifiers) {
      tooltipModifiers = tooltipModifiers.concat(PopperProps.popperOptions.modifiers);
    }
    if (resolvedPopperProps?.popperOptions?.modifiers) {
      tooltipModifiers = tooltipModifiers.concat(resolvedPopperProps.popperOptions.modifiers);
    }
    return {
      ...PopperProps.popperOptions,
      ...resolvedPopperProps?.popperOptions,
      modifiers: tooltipModifiers
    };
  }, [arrowRef, PopperProps.popperOptions, resolvedPopperProps?.popperOptions]);
  const classes = useUtilityClasses$6(ownerState);
  const resolvedTransitionProps = typeof slotProps.transition === 'function' ? slotProps.transition(ownerState) : slotProps.transition;
  const externalForwardedProps = {
    slots: {
      popper: components.Popper,
      transition: components.Transition ?? TransitionComponentProp,
      tooltip: components.Tooltip,
      arrow: components.Arrow,
      ...slots
    },
    slotProps: {
      arrow: slotProps.arrow ?? componentsProps.arrow,
      popper: {
        ...PopperProps,
        ...(resolvedPopperProps ?? componentsProps.popper)
      },
      // resolvedPopperProps can be spread because it's already an object
      tooltip: slotProps.tooltip ?? componentsProps.tooltip,
      transition: {
        ...TransitionProps,
        ...(resolvedTransitionProps ?? componentsProps.transition)
      }
    }
  };
  const [PopperSlot, popperSlotProps] = useSlot('popper', {
    elementType: TooltipPopper,
    externalForwardedProps,
    ownerState,
    className: clsx(classes.popper, PopperProps?.className)
  });
  const [TransitionSlot, transitionSlotProps] = useSlot('transition', {
    elementType: Grow,
    externalForwardedProps,
    ownerState
  });
  const [TooltipSlot, tooltipSlotProps] = useSlot('tooltip', {
    elementType: TooltipTooltip,
    className: classes.tooltip,
    externalForwardedProps,
    ownerState
  });
  const [ArrowSlot, arrowSlotProps] = useSlot('arrow', {
    elementType: TooltipArrow,
    className: classes.arrow,
    externalForwardedProps,
    ownerState,
    ref: setArrowRef
  });
  return /*#__PURE__*/jsxs(React.Fragment, {
    children: [/*#__PURE__*/React.cloneElement(children, childrenProps), /*#__PURE__*/jsx$1(PopperSlot, {
      as: PopperComponentProp ?? Popper,
      placement: placement,
      anchorEl: followCursor ? {
        getBoundingClientRect: () => ({
          top: cursorPosition.y,
          left: cursorPosition.x,
          right: cursorPosition.x,
          bottom: cursorPosition.y,
          width: 0,
          height: 0
        })
      } : childNode,
      popperRef: popperRef,
      open: childNode ? open : false,
      id: id,
      transition: true,
      ...interactiveWrapperListeners,
      ...popperSlotProps,
      popperOptions: popperOptions,
      children: ({
        TransitionProps: TransitionPropsInner
      }) => /*#__PURE__*/jsx$1(TransitionSlot, {
        timeout: theme.transitions.duration.shorter,
        ...TransitionPropsInner,
        ...transitionSlotProps,
        children: /*#__PURE__*/jsxs(TooltipSlot, {
          ...tooltipSlotProps,
          children: [title, arrow ? /*#__PURE__*/jsx$1(ArrowSlot, {
            ...arrowSlotProps
          }) : null]
        })
      })
    })]
  });
});
process.env.NODE_ENV !== "production" ? Tooltip.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, adds an arrow to the tooltip.
   * @default false
   */
  arrow: PropTypes.bool,
  /**
   * Tooltip reference element.
   */
  children: elementAcceptingRef.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: PropTypes.shape({
    Arrow: PropTypes.elementType,
    Popper: PropTypes.elementType,
    Tooltip: PropTypes.elementType,
    Transition: PropTypes.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: PropTypes.shape({
    arrow: PropTypes.object,
    popper: PropTypes.object,
    tooltip: PropTypes.object,
    transition: PropTypes.object
  }),
  /**
   * Set to `true` if the `title` acts as an accessible description.
   * By default the `title` acts as an accessible label for the child.
   * @default false
   */
  describeChild: PropTypes.bool,
  /**
   * Do not respond to focus-visible events.
   * @default false
   */
  disableFocusListener: PropTypes.bool,
  /**
   * Do not respond to hover events.
   * @default false
   */
  disableHoverListener: PropTypes.bool,
  /**
   * Makes a tooltip not interactive, i.e. it will close when the user
   * hovers over the tooltip before the `leaveDelay` is expired.
   * @default false
   */
  disableInteractive: PropTypes.bool,
  /**
   * Do not respond to long press touch events.
   * @default false
   */
  disableTouchListener: PropTypes.bool,
  /**
   * The number of milliseconds to wait before showing the tooltip.
   * This prop won't impact the enter touch delay (`enterTouchDelay`).
   * @default 100
   */
  enterDelay: PropTypes.number,
  /**
   * The number of milliseconds to wait before showing the tooltip when one was already recently opened.
   * @default 0
   */
  enterNextDelay: PropTypes.number,
  /**
   * The number of milliseconds a user must touch the element before showing the tooltip.
   * @default 700
   */
  enterTouchDelay: PropTypes.number,
  /**
   * If `true`, the tooltip follow the cursor over the wrapped element.
   * @default false
   */
  followCursor: PropTypes.bool,
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide this prop. It falls back to a randomly generated id.
   */
  id: PropTypes.string,
  /**
   * The number of milliseconds to wait before hiding the tooltip.
   * This prop won't impact the leave touch delay (`leaveTouchDelay`).
   * @default 0
   */
  leaveDelay: PropTypes.number,
  /**
   * The number of milliseconds after the user stops touching an element before hiding the tooltip.
   * @default 1500
   */
  leaveTouchDelay: PropTypes.number,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onClose: PropTypes.func,
  /**
   * Callback fired when the component requests to be open.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onOpen: PropTypes.func,
  /**
   * If `true`, the component is shown.
   */
  open: PropTypes.bool,
  /**
   * Tooltip placement.
   * @default 'bottom'
   */
  placement: PropTypes.oneOf(['auto-end', 'auto-start', 'auto', 'bottom-end', 'bottom-start', 'bottom', 'left-end', 'left-start', 'left', 'right-end', 'right-start', 'right', 'top-end', 'top-start', 'top']),
  /**
   * The component used for the popper.
   * @deprecated use the `slots.popper` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  PopperComponent: PropTypes.elementType,
  /**
   * Props applied to the [`Popper`](https://mui.com/material-ui/api/popper/) element.
   * @deprecated use the `slotProps.popper` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  PopperProps: PropTypes.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: PropTypes.shape({
    arrow: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    popper: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    tooltip: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    transition: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: PropTypes.shape({
    arrow: PropTypes.elementType,
    popper: PropTypes.elementType,
    tooltip: PropTypes.elementType,
    transition: PropTypes.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * Tooltip title. Zero-length titles string, undefined, null and false are never displayed.
   */
  title: PropTypes.node,
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @deprecated use the `slots.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionComponent: PropTypes.elementType,
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TransitionProps: PropTypes.object
} : void 0;const Stack = createStack({
  createStyledComponent: styled('div', {
    name: 'MuiStack',
    slot: 'Root'
  }),
  useThemeProps: inProps => useDefaultProps({
    props: inProps,
    name: 'MuiStack'
  })
});
process.env.NODE_ENV !== "production" ? Stack.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'column'
   */
  direction: PropTypes.oneOfType([PropTypes.oneOf(['column-reverse', 'column', 'row-reverse', 'row']), PropTypes.arrayOf(PropTypes.oneOf(['column-reverse', 'column', 'row-reverse', 'row'])), PropTypes.object]),
  /**
   * Add an element between each child.
   */
  divider: PropTypes.node,
  /**
   * Defines the space between immediate children.
   * @default 0
   */
  spacing: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])), PropTypes.number, PropTypes.object, PropTypes.string]),
  /**
   * The system prop, which allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * If `true`, the CSS flexbox `gap` is used instead of applying `margin` to children.
   *
   * While CSS `gap` removes the [known limitations](https://mui.com/joy-ui/react-stack/#limitations),
   * it is not fully supported in some browsers. We recommend checking https://caniuse.com/?search=flex%20gap before using this flag.
   *
   * To enable this flag globally, follow the [theme's default props](https://mui.com/material-ui/customization/theme-components/#default-props) configuration.
   * @default false
   */
  useFlexGap: PropTypes.bool
} : void 0;/**
 * @ignore - internal component.
 */
const TableContext$1 = /*#__PURE__*/React.createContext();
if (process.env.NODE_ENV !== 'production') {
  TableContext$1.displayName = 'TableContext';
}function getTableUtilityClass(slot) {
  return generateUtilityClass('MuiTable', slot);
}
generateUtilityClasses('MuiTable', ['root', 'stickyHeader']);const useUtilityClasses$5 = ownerState => {
  const {
    classes,
    stickyHeader
  } = ownerState;
  const slots = {
    root: ['root', stickyHeader && 'stickyHeader']
  };
  return composeClasses(slots, getTableUtilityClass, classes);
};
const TableRoot = styled('table', {
  name: 'MuiTable',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.stickyHeader && styles.stickyHeader];
  }
})(memoTheme(({
  theme
}) => ({
  display: 'table',
  width: '100%',
  borderCollapse: 'collapse',
  borderSpacing: 0,
  '& caption': {
    ...theme.typography.body2,
    padding: theme.spacing(2),
    color: (theme.vars || theme).palette.text.secondary,
    textAlign: 'left',
    captionSide: 'bottom'
  },
  variants: [{
    props: ({
      ownerState
    }) => ownerState.stickyHeader,
    style: {
      borderCollapse: 'separate'
    }
  }]
})));
const defaultComponent$4 = 'table';
const Table$1 = /*#__PURE__*/React.forwardRef(function Table(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: 'MuiTable'
  });
  const {
    className,
    component = defaultComponent$4,
    padding = 'normal',
    size = 'medium',
    stickyHeader = false,
    ...other
  } = props;
  const ownerState = {
    ...props,
    component,
    padding,
    size,
    stickyHeader
  };
  const classes = useUtilityClasses$5(ownerState);
  const table = React.useMemo(() => ({
    padding,
    size,
    stickyHeader
  }), [padding, size, stickyHeader]);
  return /*#__PURE__*/jsx$1(TableContext$1.Provider, {
    value: table,
    children: /*#__PURE__*/jsx$1(TableRoot, {
      as: component,
      role: component === defaultComponent$4 ? null : 'table',
      ref: ref,
      className: clsx(classes.root, className),
      ownerState: ownerState,
      ...other
    })
  });
});
process.env.NODE_ENV !== "production" ? Table$1.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the table, normally `TableHead` and `TableBody`.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * Allows TableCells to inherit padding of the Table.
   * @default 'normal'
   */
  padding: PropTypes.oneOf(['checkbox', 'none', 'normal']),
  /**
   * Allows TableCells to inherit size of the Table.
   * @default 'medium'
   */
  size: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['medium', 'small']), PropTypes.string]),
  /**
   * Set the header sticky.
   * @default false
   */
  stickyHeader: PropTypes.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;/**
 * @ignore - internal component.
 */
const Tablelvl2Context = /*#__PURE__*/React.createContext();
if (process.env.NODE_ENV !== 'production') {
  Tablelvl2Context.displayName = 'Tablelvl2Context';
}function getTableBodyUtilityClass(slot) {
  return generateUtilityClass('MuiTableBody', slot);
}
generateUtilityClasses('MuiTableBody', ['root']);const useUtilityClasses$4 = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return composeClasses(slots, getTableBodyUtilityClass, classes);
};
const TableBodyRoot = styled('tbody', {
  name: 'MuiTableBody',
  slot: 'Root'
})({
  display: 'table-row-group'
});
const tablelvl2$2 = {
  variant: 'body'
};
const defaultComponent$3 = 'tbody';
const TableBody = /*#__PURE__*/React.forwardRef(function TableBody(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: 'MuiTableBody'
  });
  const {
    className,
    component = defaultComponent$3,
    ...other
  } = props;
  const ownerState = {
    ...props,
    component
  };
  const classes = useUtilityClasses$4(ownerState);
  return /*#__PURE__*/jsx$1(Tablelvl2Context.Provider, {
    value: tablelvl2$2,
    children: /*#__PURE__*/jsx$1(TableBodyRoot, {
      className: clsx(classes.root, className),
      as: component,
      ref: ref,
      role: component === defaultComponent$3 ? null : 'rowgroup',
      ownerState: ownerState,
      ...other
    })
  });
});
process.env.NODE_ENV !== "production" ? TableBody.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component, normally `TableRow`.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;function getTableCellUtilityClass(slot) {
  return generateUtilityClass('MuiTableCell', slot);
}
const tableCellClasses = generateUtilityClasses('MuiTableCell', ['root', 'head', 'body', 'footer', 'sizeSmall', 'sizeMedium', 'paddingCheckbox', 'paddingNone', 'alignLeft', 'alignCenter', 'alignRight', 'alignJustify', 'stickyHeader']);const useUtilityClasses$3 = ownerState => {
  const {
    classes,
    variant,
    align,
    padding,
    size,
    stickyHeader
  } = ownerState;
  const slots = {
    root: ['root', variant, stickyHeader && 'stickyHeader', align !== 'inherit' && `align${capitalize(align)}`, padding !== 'normal' && `padding${capitalize(padding)}`, `size${capitalize(size)}`]
  };
  return composeClasses(slots, getTableCellUtilityClass, classes);
};
const TableCellRoot = styled('td', {
  name: 'MuiTableCell',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant], styles[`size${capitalize(ownerState.size)}`], ownerState.padding !== 'normal' && styles[`padding${capitalize(ownerState.padding)}`], ownerState.align !== 'inherit' && styles[`align${capitalize(ownerState.align)}`], ownerState.stickyHeader && styles.stickyHeader];
  }
})(memoTheme(({
  theme
}) => ({
  ...theme.typography.body2,
  display: 'table-cell',
  verticalAlign: 'inherit',
  // Workaround for a rendering bug with spanned columns in Chrome 62.0.
  // Removes the alpha (sets it to 1), and lightens or darkens the theme color.
  borderBottom: theme.vars ? `1px solid ${theme.vars.palette.TableCell.border}` : `1px solid
    ${theme.palette.mode === 'light' ? lighten(alpha(theme.palette.divider, 1), 0.88) : darken(alpha(theme.palette.divider, 1), 0.68)}`,
  textAlign: 'left',
  padding: 16,
  variants: [{
    props: {
      variant: 'head'
    },
    style: {
      color: (theme.vars || theme).palette.text.primary,
      lineHeight: theme.typography.pxToRem(24),
      fontWeight: theme.typography.fontWeightMedium
    }
  }, {
    props: {
      variant: 'body'
    },
    style: {
      color: (theme.vars || theme).palette.text.primary
    }
  }, {
    props: {
      variant: 'footer'
    },
    style: {
      color: (theme.vars || theme).palette.text.secondary,
      lineHeight: theme.typography.pxToRem(21),
      fontSize: theme.typography.pxToRem(12)
    }
  }, {
    props: {
      size: 'small'
    },
    style: {
      padding: '6px 16px',
      [`&.${tableCellClasses.paddingCheckbox}`]: {
        width: 24,
        // prevent the checkbox column from growing
        padding: '0 12px 0 16px',
        '& > *': {
          padding: 0
        }
      }
    }
  }, {
    props: {
      padding: 'checkbox'
    },
    style: {
      width: 48,
      // prevent the checkbox column from growing
      padding: '0 0 0 4px'
    }
  }, {
    props: {
      padding: 'none'
    },
    style: {
      padding: 0
    }
  }, {
    props: {
      align: 'left'
    },
    style: {
      textAlign: 'left'
    }
  }, {
    props: {
      align: 'center'
    },
    style: {
      textAlign: 'center'
    }
  }, {
    props: {
      align: 'right'
    },
    style: {
      textAlign: 'right',
      flexDirection: 'row-reverse'
    }
  }, {
    props: {
      align: 'justify'
    },
    style: {
      textAlign: 'justify'
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.stickyHeader,
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 2,
      backgroundColor: (theme.vars || theme).palette.background.default
    }
  }]
})));

/**
 * The component renders a `<th>` element when the parent context is a header
 * or otherwise a `<td>` element.
 */
const TableCell = /*#__PURE__*/React.forwardRef(function TableCell(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: 'MuiTableCell'
  });
  const {
    align = 'inherit',
    className,
    component: componentProp,
    padding: paddingProp,
    scope: scopeProp,
    size: sizeProp,
    sortDirection,
    variant: variantProp,
    ...other
  } = props;
  const table = React.useContext(TableContext$1);
  const tablelvl2 = React.useContext(Tablelvl2Context);
  const isHeadCell = tablelvl2 && tablelvl2.variant === 'head';
  let component;
  if (componentProp) {
    component = componentProp;
  } else {
    component = isHeadCell ? 'th' : 'td';
  }
  let scope = scopeProp;
  // scope is not a valid attribute for <td/> elements.
  // source: https://html.spec.whatwg.org/multipage/tables.html#the-td-element
  if (component === 'td') {
    scope = undefined;
  } else if (!scope && isHeadCell) {
    scope = 'col';
  }
  const variant = variantProp || tablelvl2 && tablelvl2.variant;
  const ownerState = {
    ...props,
    align,
    component,
    padding: paddingProp || (table && table.padding ? table.padding : 'normal'),
    size: sizeProp || (table && table.size ? table.size : 'medium'),
    sortDirection,
    stickyHeader: variant === 'head' && table && table.stickyHeader,
    variant
  };
  const classes = useUtilityClasses$3(ownerState);
  let ariaSort = null;
  if (sortDirection) {
    ariaSort = sortDirection === 'asc' ? 'ascending' : 'descending';
  }
  return /*#__PURE__*/jsx$1(TableCellRoot, {
    as: component,
    ref: ref,
    className: clsx(classes.root, className),
    "aria-sort": ariaSort,
    scope: scope,
    ownerState: ownerState,
    ...other
  });
});
process.env.NODE_ENV !== "production" ? TableCell.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the table cell content.
   *
   * Monetary or generally number fields **should be right aligned** as that allows
   * you to add them up quickly in your head without having to worry about decimals.
   * @default 'inherit'
   */
  align: PropTypes.oneOf(['center', 'inherit', 'justify', 'left', 'right']),
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * Sets the padding applied to the cell.
   * The prop defaults to the value (`'default'`) inherited from the parent Table component.
   */
  padding: PropTypes.oneOf(['checkbox', 'none', 'normal']),
  /**
   * Set scope attribute.
   */
  scope: PropTypes.string,
  /**
   * Specify the size of the cell.
   * The prop defaults to the value (`'medium'`) inherited from the parent Table component.
   */
  size: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['medium', 'small']), PropTypes.string]),
  /**
   * Set aria-sort direction.
   */
  sortDirection: PropTypes.oneOf(['asc', 'desc', false]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * Specify the cell type.
   * The prop defaults to the value inherited from the parent TableHead, TableBody, or TableFooter components.
   */
  variant: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['body', 'footer', 'head']), PropTypes.string])
} : void 0;function getTableFooterUtilityClass(slot) {
  return generateUtilityClass('MuiTableFooter', slot);
}
generateUtilityClasses('MuiTableFooter', ['root']);const useUtilityClasses$2 = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return composeClasses(slots, getTableFooterUtilityClass, classes);
};
const TableFooterRoot = styled('tfoot', {
  name: 'MuiTableFooter',
  slot: 'Root'
})({
  display: 'table-footer-group'
});
const tablelvl2$1 = {
  variant: 'footer'
};
const defaultComponent$2 = 'tfoot';
const TableFooter = /*#__PURE__*/React.forwardRef(function TableFooter(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: 'MuiTableFooter'
  });
  const {
    className,
    component = defaultComponent$2,
    ...other
  } = props;
  const ownerState = {
    ...props,
    component
  };
  const classes = useUtilityClasses$2(ownerState);
  return /*#__PURE__*/jsx$1(Tablelvl2Context.Provider, {
    value: tablelvl2$1,
    children: /*#__PURE__*/jsx$1(TableFooterRoot, {
      as: component,
      className: clsx(classes.root, className),
      ref: ref,
      role: component === defaultComponent$2 ? null : 'rowgroup',
      ownerState: ownerState,
      ...other
    })
  });
});
process.env.NODE_ENV !== "production" ? TableFooter.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component, normally `TableRow`.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;function getTableHeadUtilityClass(slot) {
  return generateUtilityClass('MuiTableHead', slot);
}
generateUtilityClasses('MuiTableHead', ['root']);const useUtilityClasses$1 = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return composeClasses(slots, getTableHeadUtilityClass, classes);
};
const TableHeadRoot = styled('thead', {
  name: 'MuiTableHead',
  slot: 'Root'
})({
  display: 'table-header-group'
});
const tablelvl2 = {
  variant: 'head'
};
const defaultComponent$1 = 'thead';
const TableHead = /*#__PURE__*/React.forwardRef(function TableHead(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: 'MuiTableHead'
  });
  const {
    className,
    component = defaultComponent$1,
    ...other
  } = props;
  const ownerState = {
    ...props,
    component
  };
  const classes = useUtilityClasses$1(ownerState);
  return /*#__PURE__*/jsx$1(Tablelvl2Context.Provider, {
    value: tablelvl2,
    children: /*#__PURE__*/jsx$1(TableHeadRoot, {
      as: component,
      className: clsx(classes.root, className),
      ref: ref,
      role: component === defaultComponent$1 ? null : 'rowgroup',
      ownerState: ownerState,
      ...other
    })
  });
});
process.env.NODE_ENV !== "production" ? TableHead.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component, normally `TableRow`.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;function getTableRowUtilityClass(slot) {
  return generateUtilityClass('MuiTableRow', slot);
}
const tableRowClasses = generateUtilityClasses('MuiTableRow', ['root', 'selected', 'hover', 'head', 'footer']);const useUtilityClasses = ownerState => {
  const {
    classes,
    selected,
    hover,
    head,
    footer
  } = ownerState;
  const slots = {
    root: ['root', selected && 'selected', hover && 'hover', head && 'head', footer && 'footer']
  };
  return composeClasses(slots, getTableRowUtilityClass, classes);
};
const TableRowRoot = styled('tr', {
  name: 'MuiTableRow',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.head && styles.head, ownerState.footer && styles.footer];
  }
})(memoTheme(({
  theme
}) => ({
  color: 'inherit',
  display: 'table-row',
  verticalAlign: 'middle',
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  [`&.${tableRowClasses.hover}:hover`]: {
    backgroundColor: (theme.vars || theme).palette.action.hover
  },
  [`&.${tableRowClasses.selected}`]: {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    '&:hover': {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity)
    }
  }
})));
const defaultComponent = 'tr';
/**
 * Will automatically set dynamic row height
 * based on the material table element parent (head, body, etc).
 */
const TableRow = /*#__PURE__*/React.forwardRef(function TableRow(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: 'MuiTableRow'
  });
  const {
    className,
    component = defaultComponent,
    hover = false,
    selected = false,
    ...other
  } = props;
  const tablelvl2 = React.useContext(Tablelvl2Context);
  const ownerState = {
    ...props,
    component,
    hover,
    selected,
    head: tablelvl2 && tablelvl2.variant === 'head',
    footer: tablelvl2 && tablelvl2.variant === 'footer'
  };
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/jsx$1(TableRowRoot, {
    as: component,
    ref: ref,
    className: clsx(classes.root, className),
    role: component === defaultComponent ? null : 'row',
    ownerState: ownerState,
    ...other
  });
});
process.env.NODE_ENV !== "production" ? TableRow.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Should be valid `<tr>` children such as `TableCell`.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * If `true`, the table row will shade on hover.
   * @default false
   */
  hover: PropTypes.bool,
  /**
   * If `true`, the table row will have the selected shading.
   * @default false
   */
  selected: PropTypes.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;/**
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
    if (box === 'border-box') {
        return {
            width: entry.borderBoxSize[0].inlineSize,
            height: entry.borderBoxSize[0].blockSize,
        };
    }
    if (box === 'content-box') {
        return {
            width: entry.contentBoxSize[0].inlineSize,
            height: entry.contentBoxSize[0].blockSize,
        };
    }
    return {
        width: entry.contentRect.width,
        height: entry.contentRect.height,
    };
};// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useResizeDetector({ skipOnMount = false, refreshMode, refreshRate = 1000, refreshOptions, handleWidth = true, handleHeight = true, targetRef, observerOptions, onResize, } = {}) {
    // If `skipOnMount` is enabled, skip the first resize event
    const skipResize = useRef(skipOnMount);
    // Wrap the `onResize` callback with a ref to avoid re-renders
    const onResizeRef = useCallbackRef(onResize);
    const [size, setSize] = useState({
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
            resizeObserver = new window.ResizeObserver(resizeHandler);
            resizeObserver.observe(refElement, observerOptions);
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
}var StyledBodyRow$1 = styled(TableRow)(function (_a) {
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
var StyledNoDataDiv = styled('div')(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject$1(["\n  text-align: center;\n  padding: 30px 0;\n  font-weight: 500;\n  font-size: 13px;\n  color: #94a0b2;\n  opacity: 0.8;\n\n  .material-icons {\n    font-size: 40px;\n    margin-bottom: 5px;\n  }\n"], ["\n  text-align: center;\n  padding: 30px 0;\n  font-weight: 500;\n  font-size: 13px;\n  color: #94a0b2;\n  opacity: 0.8;\n\n  .material-icons {\n    font-size: 40px;\n    margin-bottom: 5px;\n  }\n"])));
var templateObject_1$6;function getTableColumnAlign(column, defaultAlign) {
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
    setMenuOpen: function () { },
    setItemColumnChecked: function () { },
    setItemColumnCheckDisabled: function () { },
    setItemColumnCommands: function () { },
    setHeadColumnChecked: function () { },
    setHeadColumnCommands: function () { },
};var TableContext = createContext(TableContextDefaultValue);function useTableState() {
    var value = useContext(TableContext);
    if (value === undefined) {
        throw new Error('useFormState should be used within TableContext.Provider');
    }
    return value;
}var StyledTableCell = styled(TableCell)(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject$1(["\n  &.ellipsis {\n    position: relative;\n    max-width: 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n"], ["\n  &.ellipsis {\n    position: relative;\n    max-width: 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n"])));
var TableCommonCell = React__default.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/
    var children = _a.children, initClassName = _a.className, initStyle = _a.style, initSx = _a.sx, type = _a.type, column = _a.column, defaultAlign = _a.defaultAlign, initDefaultEllipsis = _a.defaultEllipsis, index = _a.index, item = _a.item, onClick = _a.onClick;
    var menuOpen = useTableState().menuOpen;
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var _b = useMemo(function () {
        var align = getTableColumnAlign(column, defaultAlign);
        var ellipsis = type !== 'head' &&
            (column.ellipsis ||
                (column.type !== 'img' &&
                    column.type !== 'button' &&
                    column.type !== 'buttons' &&
                    (column.ellipsis == null ? !!initDefaultEllipsis : false)));
        return { align: align, ellipsis: ellipsis };
    }, [column, defaultAlign, initDefaultEllipsis, type]), align = _b.align, ellipsis = _b.ellipsis;
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var style;
        var getStyle;
        switch (type) {
            case 'head':
                style = ((_a = column.head) === null || _a === void 0 ? void 0 : _a.backgroundColor)
                    ? __assign$3(__assign$3({}, (_b = column.head) === null || _b === void 0 ? void 0 : _b.style), { backgroundColor: column.head.backgroundColor }) : (_c = column.head) === null || _c === void 0 ? void 0 : _c.style;
                getStyle = ((_d = column.head) === null || _d === void 0 ? void 0 : _d.onGetStyle) ? (_e = column.head) === null || _e === void 0 ? void 0 : _e.onGetStyle() : undefined;
                break;
            case 'body':
                style = column.backgroundColor ? __assign$3(__assign$3({}, column.style), { backgroundColor: column.backgroundColor }) : column.style;
                if (item != null && index != null) {
                    getStyle = column.onGetStyle ? column.onGetStyle(item, index) : undefined;
                }
                break;
            case 'footer':
                style = ((_f = column.footer) === null || _f === void 0 ? void 0 : _f.backgroundColor)
                    ? __assign$3(__assign$3({}, (_g = column.footer) === null || _g === void 0 ? void 0 : _g.style), { backgroundColor: column.footer.backgroundColor }) : (_h = column.footer) === null || _h === void 0 ? void 0 : _h.style;
                getStyle = ((_j = column.footer) === null || _j === void 0 ? void 0 : _j.onGetStyle) ? (_k = column.footer) === null || _k === void 0 ? void 0 : _k.onGetStyle() : undefined;
                break;
        }
        return __assign$3(__assign$3(__assign$3(__assign$3({}, initStyle), { width: column.width, minWidth: column.minWidth, cursor: type === 'body' && (column.onClick || onClick) ? 'pointer' : undefined, paddingLeft: column.paddingLeft, paddingRight: column.paddingRight }), style), getStyle);
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
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
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
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React__default.createElement(StyledTableCell, { ref: ref, align: align, className: classNames(className, 'TableCommonCell', ellipsis && 'ellipsis', column.type ? "column-type-".concat(column.type) : false), style: style, sx: sx, onClick: type === 'body' ? handleClick : undefined }, children));
});
var templateObject_1$5;var TableFooterCell = function (_a) {
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var column = _a.column, items = _a.items, defaultAlign = _a.defaultAlign;
    var data = useMemo(function () {
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
    return (React__default.createElement(TableCommonCell, { type: 'head', className: 'TableFooterCell', column: column, defaultAlign: defaultAlign }, data));
};var TablePagination = function (_a) {
    var className = _a.className, style = _a.style, sx = _a.sx, paging = _a.paging, align = _a.align, onChange = _a.onChange;
    return (React__default.createElement(Stack, { alignItems: align },
        React__default.createElement(Pagination, { count: paging.last_page, page: paging.current_page, color: 'primary', className: classNames('TablePagination', className), style: style, sx: sx, onChange: function (e, page) {
                if (onChange)
                    onChange(page);
            } })));
};function useFirstSkipLayoutEffect(effect, deps) {
    var firstRef = useRef(true);
    useLayoutEffect(function () {
        if (firstRef.current) {
            firstRef.current = false;
        }
        else {
            effect();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
}// 구현부
function useAutoUpdateLayoutState(state, callback) {
    var _a = useState(function () { return (state); }), _value = _a[0], _setValue = _a[1];
    useFirstSkipLayoutEffect(function () {
        _setValue(state);
    }, [state]);
    var setValue = useCallback(function (newValue, skipCallback) {
        var finalNewValue = newValue;
        if (typeof finalNewValue === 'function') {
            _setValue(function (prev) {
                finalNewValue = finalNewValue(prev);
                finalNewValue = finalNewValue;
                return finalNewValue;
            });
        }
        else {
            finalNewValue = finalNewValue;
            _setValue(finalNewValue);
        }
        return finalNewValue;
    }, [callback]);
    return [_value, setValue];
}// 구현부
var TableContextProvider = function (_a) {
    var children = _a.children, value = _a.value;
    return React__default.createElement(TableContext.Provider, { value: value }, children);
};var TableTopHeadCaptionRow = styled(TableRow)(function (_a) {
    var theme = _a.theme;
    return ({
        '> th': {
            backgroundColor: theme.palette.grey.A100,
            textAlign: 'center',
            fontWeight: 700,
        },
    });
});var TableHeadCell = function (_a) {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/
    var column = _a.column, items = _a.items, defaultAlign = _a.defaultAlign, top = _a.top, onCheckChange = _a.onCheckChange;
    var _b = useTableState(), setHeadColumnChecked = _b.setHeadColumnChecked, setHeadColumnCommands = _b.setHeadColumnCommands;
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _c = useState(false), checked = _c[0], setChecked = _c[1];
    var _d = useState(false), checkDisabled = _d[0], setCheckDisabled = _d[1];
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
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
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var data = useMemo(function () {
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
                return (React__default.createElement(Checkbox, { checked: checked, disabled: checkDisabled, onChange: function (e, newChecked) {
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
    return (React__default.createElement(TableCommonCell, { type: 'head', className: 'TableHeadCell', style: top !== undefined ? { top: top } : undefined, column: column, defaultAlign: defaultAlign }, data));
};var BottomLine = styled('div')(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject$1(["\n  height: 1px;\n  position: absolute;\n  left: 3px;\n  right: 3px;\n  bottom: 0;\n"], ["\n  height: 1px;\n  position: absolute;\n  left: 3px;\n  right: 3px;\n  bottom: 0;\n"])));
var TableTopHead = function (_a) {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/
    var columns = _a.columns, items = _a.items, rows = _a.rows, caption = _a.caption, defaultAlign = _a.defaultAlign, onCheckChange = _a.onCheckChange;
    var theme = useTheme();
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var captionRef = useRef(null);
    var row1Ref = useRef(null);
    var row2Ref = useRef(null);
    var row3Ref = useRef(null);
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
    var makeRowCells = useCallback(function (row, top) {
        var totalColumns = 0;
        var cells = row
            .map(function (info, idx) {
            if (info) {
                totalColumns += info.colSpan || 1;
                return (React__default.createElement(TableCell, { key: idx, colSpan: info.colSpan, align: info.align, style: {
                        top: top,
                        borderBottom: 0,
                    } },
                    info.label,
                    info.label != null && React__default.createElement(BottomLine, { style: { backgroundColor: theme.palette.divider } })));
            }
        })
            .filter(function (cell) { return !!cell; });
        if (totalColumns < columns.length) {
            cells.push(React__default.createElement(TableCell, { key: columns.length, colSpan: columns.length - cells.length, style: { top: top, borderBottom: 0 } }));
        }
        return cells;
    }, [columns, theme.palette.divider]);
    var columnRow = useMemo(function () {
        var top = (captionHeight || 0) + (row1Height || 0) + (row2Height || 0) + (row3Height || 0);
        return (React__default.createElement(TableRow, null, columns.map(function (column, idx) { return (React__default.createElement(TableHeadCell, { key: idx, column: column, items: items, defaultAlign: defaultAlign, top: top, onCheckChange: onCheckChange })); })));
    }, [captionHeight, columns, defaultAlign, items, onCheckChange, row1Height, row2Height, row3Height]);
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/
    var captionRow = !!caption && (React__default.createElement(TableTopHeadCaptionRow, { ref: captionRef, className: 'TableTopHeadCaptionRow' },
        React__default.createElement(TableCell, { colSpan: columns.length }, caption)));
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
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
var templateObject_1$4;/**
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
var Symbol$1 = root.Symbol;/** Used for built-in method references. */
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
var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : undefined;

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
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;

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
    var scrollableNodeFullProps = __assign$1(__assign$1({}, scrollableNodeProps), { className: "".concat(classNames.contentWrapper).concat(scrollableNodeProps.className ? " ".concat(scrollableNodeProps.className) : ''), tabIndex: options.tabIndex || SimpleBarCore.defaultOptions.tabIndex, role: 'region', 'aria-label': options.ariaLabel || SimpleBarCore.defaultOptions.ariaLabel });
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
        React.createElement("div", { className: "".concat(classNames.track, " ").concat(classNames.horizontal) },
            React.createElement("div", { className: classNames.scrollbar })),
        React.createElement("div", { className: "".concat(classNames.track, " ").concat(classNames.vertical) },
            React.createElement("div", { className: classNames.scrollbar }))));
});
SimpleBar.displayName = 'SimpleBar';const byteToHex = [];
for (let i = 0; i < 256; ++i) {
    byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
    return (byteToHex[arr[offset + 0]] +
        byteToHex[arr[offset + 1]] +
        byteToHex[arr[offset + 2]] +
        byteToHex[arr[offset + 3]] +
        '-' +
        byteToHex[arr[offset + 4]] +
        byteToHex[arr[offset + 5]] +
        '-' +
        byteToHex[arr[offset + 6]] +
        byteToHex[arr[offset + 7]] +
        '-' +
        byteToHex[arr[offset + 8]] +
        byteToHex[arr[offset + 9]] +
        '-' +
        byteToHex[arr[offset + 10]] +
        byteToHex[arr[offset + 11]] +
        byteToHex[arr[offset + 12]] +
        byteToHex[arr[offset + 13]] +
        byteToHex[arr[offset + 14]] +
        byteToHex[arr[offset + 15]]).toLowerCase();
}let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
    if (!getRandomValues) {
        if (typeof crypto === 'undefined' || !crypto.getRandomValues) {
            throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
        }
        getRandomValues = crypto.getRandomValues.bind(crypto);
    }
    return getRandomValues(rnds8);
}const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var native = { randomUUID };function v4(options, buf, offset) {
    if (native.randomUUID && true && !options) {
        return native.randomUUID();
    }
    options = options || {};
    const rnds = options.random ?? options.rng?.() ?? rng();
    if (rnds.length < 16) {
        throw new Error('Random bytes length must be >= 16');
    }
    rnds[6] = (rnds[6] & 0x0f) | 0x40;
    rnds[8] = (rnds[8] & 0x3f) | 0x80;
    return unsafeStringify(rnds);
}var makeSortableItems = function (items) {
    return items === null || items === void 0 ? void 0 : items.map(function (_a, index) {
        var id = _a.id, item = __rest$2(_a, ["id"]);
        return __assign$3({ id: id == null ? "".concat(v4(), "_").concat(index) : id }, item);
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
});var dayjs_min$1 = {exports: {}};var dayjs_min = dayjs_min$1.exports;

var hasRequiredDayjs_min;

function requireDayjs_min () {
	if (hasRequiredDayjs_min) return dayjs_min$1.exports;
	hasRequiredDayjs_min = 1;
	(function (module, exports) {
		!function(t,e){module.exports=e();}(dayjs_min,(function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",c="month",f="quarter",h="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return "["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return !r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return (e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return -t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,u=e.clone().add(r+(s?-1:1),c);return +(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return {M:c,y:h,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",D={};D[g]=M;var p="$isDayjsObject",S=function(t){return t instanceof _||!(!t||!t[p])},w=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else {var a=e.name;D[a]=e,i=a;}return !r&&i&&(g=i),i||!r&&g},O=function(t,e){if(S(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},b=v;b.l=w,b.i=S,b.w=function(t,e){return O(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=w(t.locale,null,true),this.parse(t),this.$x=this.$x||t.x||{},this[p]=true;}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.init();},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds();},m.$utils=function(){return b},m.isValid=function(){return !(this.$d.toString()===l)},m.isSame=function(t,e){var n=O(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return O(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<O(t)},m.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!b.u(e)||e,f=b.p(t),l=function(t,e){var i=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return b.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(f){case h:return r?l(1,0):l(31,11);case c:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,false)},m.$set=function(t,e){var n,o=b.p(t),f="set"+(this.$u?"UTC":""),l=(n={},n[a]=f+"Date",n[d]=f+"Date",n[c]=f+"Month",n[h]=f+"FullYear",n[u]=f+"Hours",n[s]=f+"Minutes",n[i]=f+"Seconds",n[r]=f+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===c||o===h){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d;}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[b.p(t)]()},m.add=function(r,f){var d,l=this;r=Number(r);var $=b.p(f),y=function(t){var e=O(l);return b.w(e.date(e.date()+Math.round(t*r)),l)};if($===c)return this.set(c,this.$M+r);if($===h)return this.set(h,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return b.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=b.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,c=n.months,f=n.meridiem,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return b.s(s%12||12,t,"0")},$=f||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(y,(function(t,r){return r||function(t){switch(t){case "YY":return String(e.$y).slice(-2);case "YYYY":return b.s(e.$y,4,"0");case "M":return a+1;case "MM":return b.s(a+1,2,"0");case "MMM":return h(n.monthsShort,a,c,3);case "MMMM":return h(c,a);case "D":return e.$D;case "DD":return b.s(e.$D,2,"0");case "d":return String(e.$W);case "dd":return h(n.weekdaysMin,e.$W,o,2);case "ddd":return h(n.weekdaysShort,e.$W,o,3);case "dddd":return o[e.$W];case "H":return String(s);case "HH":return b.s(s,2,"0");case "h":return d(1);case "hh":return d(2);case "a":return $(s,u,true);case "A":return $(s,u,false);case "m":return String(u);case "mm":return b.s(u,2,"0");case "s":return String(e.$s);case "ss":return b.s(e.$s,2,"0");case "SSS":return b.s(e.$ms,3,"0");case "Z":return i}return null}(t)||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=this,M=b.p(d),m=O(r),v=(m.utcOffset()-this.utcOffset())*e,g=this-m,D=function(){return b.m(y,m)};switch(M){case h:$=D()/12;break;case c:$=D();break;case f:$=D()/3;break;case o:$=(g-v)/6048e5;break;case a:$=(g-v)/864e5;break;case u:$=g/n;break;case s:$=g/e;break;case i:$=g/t;break;default:$=g;}return l?$:b.a($)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=w(t,e,true);return r&&(n.$L=r),n},m.clone=function(){return b.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),k=_.prototype;return O.prototype=k,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",c],["$y",h],["$D",d]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])};})),O.extend=function(t,e){return t.$i||(t(e,_,O),t.$i=true),O},O.locale=w,O.isDayjs=S,O.unix=function(t){return O(1e3*t)},O.en=D[g],O.Ls=D,O.p={},O})); 
	} (dayjs_min$1));
	return dayjs_min$1.exports;
}var dayjs_minExports = requireDayjs_min();
var dayjs = /*@__PURE__*/getDefaultExportFromCjs(dayjs_minExports);function businessNoAutoDash(businessNo, allowCharacters) {
    if (allowCharacters === void 0) { allowCharacters = '*'; }
    var str = businessNo.replace(new RegExp("[^0-9".concat(allowCharacters, "]"), 'g'), '');
    var values = [str.slice(0, 3)];
    if (str.length > 3)
        values.push(str.slice(3, 5));
    if (str.length > 5)
        values.push(str.slice(5));
    return values.join('-');
}/********************************************************************************************************************
 * 값이 비어있는지 확인하는 함수
 * - Array 값이 비어있거나, Object 값이 비어있거나, 문자열이 비어있거나, null 또는 undefined 인 경우 true 반환
 * @param v 확인할 값
 * @returns 값이 비어있는지 여부
 * ******************************************************************************************************************/
function empty(v) {
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
}/********************************************************************************************************************
 * 값이 비어있지 않은지 확인합니다.
 * - Array 값이 비어있지 않거나, Object 값이 비어있지 않거나, 문자열이 비어있지 않거나, null 또는 undefined 가 아닌 경우 true 반환
 * @param v 확인할 값
 * @returns 값이 비어있는지 여부
 * ******************************************************************************************************************/
function notEmpty(v) {
    return !empty(v);
}/********************************************************************************************************************
 * 두 값이 동일한지 확인하는 함수
 * @param v1 비교할 첫 번째 값
 * @param v2 비교할 두 번째 값
 * @returns 두 값이 동일한지 여부
 * ******************************************************************************************************************/
function equal(v1, v2) {
    if (v1 === v2)
        return true;
    if (typeof v1 !== typeof v2)
        return false;
    if (v1 == null || v2 == null)
        return false;
    if (typeof v1 === 'object' && typeof v2 === 'object') {
        return JSON.stringify(v1) === JSON.stringify(v2);
    }
    else {
        return v1 === v2;
    }
}/********************************************************************************************************************
 * 배열에 특정 값이 포함되어 있는지 여부를 반환하는 함수
 * @param list 확인할 배열 또는 문자열
 * @param value 확인할 값
 * @returns 포함 여부
 * ******************************************************************************************************************/
function contains(list, value) {
    var found = false;
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var v = list_1[_i];
        if (v === value) {
            found = true;
            break;
        }
    }
    return found;
}/********************************************************************************************************************
 * 값이 비어있는 경우 대체 값을 반환하는 함수
 * @param v 확인할 값
 * @param v2 대체 값
 * @returns 최종 값
 * ******************************************************************************************************************/
function ifUndefined(v, v2) {
    return v === undefined ? v2 : v;
}/********************************************************************************************************************
 * 값이 undefined 이 아닌 경우 대체 값을 반환하는 함수
 * @param v 확인할 값
 * @param v2 대체 값
 * @returns 최종 값
 * ******************************************************************************************************************/

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};/********************************************************************************************************************
 * {label, value, ...other} 객체 생성하여 반환하는 함수
 * @param label - label
 * @param value - value
 * @param other - 기타 속성
 * @returns 생성된 객체
 * ******************************************************************************************************************/
function telNoAutoDash(v, allowCharacters) {
    if (allowCharacters === void 0) { allowCharacters = '*'; }
    if (v === undefined)
        return undefined;
    if (v === null)
        return null;
    var str = v.replace(new RegExp("[^0-9".concat(allowCharacters, "]"), 'g'), '');
    var isLastDash = v.substring(v.length - 1, v.length) === '-';
    if (str.substring(0, 1) !== '0' && !['15', '16', '18'].includes(str.substring(0, 2))) {
        return str;
    }
    var tmp = '';
    var preLen;
    switch (str.substring(0, 2)) {
        case '02':
            preLen = 2;
            break;
        case '15':
        case '16':
        case '18':
            preLen = 4;
            break;
        default:
            preLen = 3;
    }
    if (['15', '16', '18'].includes(str.substring(0, 2))) {
        if (str.length <= preLen) {
            tmp = str;
        }
        else if (str.length <= preLen + 4) {
            tmp += str.substring(0, preLen);
            tmp += '-';
            tmp += str.substring(preLen);
        }
        else {
            tmp = str;
        }
    }
    else if (str.length <= preLen) {
        tmp = str;
    }
    else if (str.length <= preLen + 3) {
        tmp += str.substring(0, preLen);
        tmp += '-';
        tmp += str.substring(preLen);
    }
    else if (str.length <= preLen + 7) {
        tmp += str.substring(0, preLen);
        tmp += '-';
        tmp += str.substring(preLen, preLen + 3);
        tmp += '-';
        tmp += str.substring(preLen + 3);
    }
    else if (str.length <= preLen + 8) {
        tmp += str.substring(0, preLen);
        tmp += '-';
        tmp += str.substring(preLen, preLen + 4);
        tmp += '-';
        tmp += str.substring(preLen + 4);
    }
    else {
        tmp = str;
    }
    if (isLastDash) {
        if (str.length === preLen) {
            tmp += '-';
        }
    }
    return tmp;
}/********************************************************************************************************************
 * 전화번호 마스킹
 * ******************************************************************************************************************/
function personalNoAutoDash(personalNo, allowCharacters) {
    if (allowCharacters === void 0) { allowCharacters = '*'; }
    var str = personalNo.replace(new RegExp("[^0-9".concat(allowCharacters, "]"), 'g'), '');
    var values = [str.slice(0, 6)];
    if (str.length > 6)
        values.push(str.slice(6));
    return values.join('-');
}/********************************************************************************************************************
 * 주민등록번호 마스킹
 * ******************************************************************************************************************/
function numberFormat(num) {
    var numValue = typeof num === 'number' ? num.toString() : num.replace(/^0+(?=\d)/, '');
    var isInteger = /^\d+$/.test(numValue);
    if (!isInteger && numValue.includes('.')) {
        var _a = numValue.split('.'), integerPart = _a[0], decimalPart = _a[1];
        var formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        if (decimalPart) {
            return "".concat(formattedIntegerPart, ".").concat(decimalPart.replace(/\.?0+$/, ''));
        }
        return formattedIntegerPart;
    }
    return numValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}/********************************************************************************************************************
 * URL을 조합해서 반환
 * @param parts URL 조각
 * ******************************************************************************************************************/var StyledButtonsBox = styled(Box)(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject$1(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n"])));
var TableBodyCell = React__default.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/
    var className = _a.className, style = _a.style, sx = _a.sx, item = _a.item, index = _a.index, column = _a.column, defaultAlign = _a.defaultAlign, defaultEllipsis = _a.defaultEllipsis, onClick = _a.onClick, onCheckChange = _a.onCheckChange;
    var _b = useTableState(), menuOpen = _b.menuOpen, setItemColumnChecked = _b.setItemColumnChecked, setItemColumnCheckDisabled = _b.setItemColumnCheckDisabled, setItemColumnCommands = _b.setItemColumnCommands;
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _c = useState(false), checked = _c[0], setChecked = _c[1];
    var _d = useState(false), checkDisabled = _d[0], setCheckDisabled = _d[1];
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
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
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
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
                    data = numberFormat(data);
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
                    data = telNoAutoDash(data);
                }
                break;
            case 'business_no':
                if (typeof data === 'string') {
                    data = businessNoAutoDash(data);
                }
                break;
            case 'personal_no':
                if (typeof data === 'string') {
                    data = personalNoAutoDash(data);
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
                    var dt = dayjs(data, column.dateFormat);
                    data = (React__default.createElement(React__default.Fragment, null,
                        React__default.createElement("span", null, dt.format('YYYY-MM-DD')),
                        column.dateTwoLine ? React__default.createElement("br", null) : ' ',
                        React__default.createElement("span", { style: { opacity: 0.5 } }, dt.format('HH:mm:ss'))));
                }
                break;
            case 'date-hour':
                if (data) {
                    var dt = dayjs(data, column.dateFormat);
                    data = (React__default.createElement(React__default.Fragment, null,
                        React__default.createElement("span", null, dt.format('YYYY-MM-DD')),
                        column.dateTwoLine ? React__default.createElement("br", null) : ' ',
                        React__default.createElement("span", { style: { opacity: 0.5 } }, dt.format('HH시'))));
                }
                break;
            case 'date-minute':
                if (data) {
                    var dt = dayjs(data, column.dateFormat);
                    data = (React__default.createElement(React__default.Fragment, null,
                        React__default.createElement("span", null, dt.format('YYYY-MM-DD')),
                        column.dateTwoLine ? React__default.createElement("br", null) : ' ',
                        React__default.createElement("span", { style: { opacity: 0.5 } }, dt.format('HH시 MM분'))));
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
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleClick = useCallback(function (item, index) {
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
    return (React__default.createElement(TableCommonCell, { ref: ref, type: 'body', className: classNames('TableBodyCell', className), style: style, sx: sx, column: column, defaultAlign: defaultAlign, defaultEllipsis: defaultEllipsis, item: item, index: index, onClick: column.onClick || onClick ? handleClick : undefined }, !isHidden && data));
});
var templateObject_1$3;var StyledBodyRow = styled(TableRow)(function (_a) {
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
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/
    var className = _a.className, style = _a.style, id = _a.id, index = _a.index, defaultAlign = _a.defaultAlign, defaultEllipsis = _a.defaultEllipsis, sortable = _a.sortable, columns = _a.columns, item = _a.item, onClick = _a.onClick, onCheckChange = _a.onCheckChange, onGetColumnClassName = _a.onGetColumnClassName, onGetColumnStyle = _a.onGetColumnStyle, onGetColumnSx = _a.onGetColumnSx, props = __rest$2(_a, ["className", "style", "id", "index", "defaultAlign", "defaultEllipsis", "sortable", "columns", "item", "onClick", "onCheckChange", "onGetColumnClassName", "onGetColumnStyle", "onGetColumnSx"]);
    var _b = useSortable({ id: id }), attributes = _b.attributes, listeners = _b.listeners, setNodeRef = _b.setNodeRef, transform = _b.transform, transition = _b.transition;
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/
    var sortableProps = sortable
        ? __assign$3(__assign$3({ ref: setNodeRef }, attributes), listeners) : {};
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(StyledBodyRow, __assign$3({ className: classNames('TableBodyRow', className), style: sortable
                ? __assign$3(__assign$3({}, style), { transform: CSS.Transform.toString(transform), transition: transition }) : style }, props, sortableProps), columns.map(function (column, columnIdx) { return (React__default.createElement(TableBodyCell, { className: onGetColumnClassName ? onGetColumnClassName(column, item, index) : undefined, sx: onGetColumnSx ? onGetColumnSx(column, item, index) : undefined, style: onGetColumnStyle ? onGetColumnStyle(column, item, index) : undefined, key: columnIdx, index: index, item: item, defaultAlign: defaultAlign, defaultEllipsis: defaultEllipsis, column: column, onClick: onClick, onCheckChange: onCheckChange })); }))));
};var TableSortableBodyBlock = function (_a) {
    var items = _a.items, baseIndex = _a.baseIndex, columns = _a.columns, showOddColor = _a.showOddColor, showEvenColor = _a.showEvenColor, onGetBodyRowStyle = _a.onGetBodyRowStyle, onGetBodyRowSx = _a.onGetBodyRowSx, onGetBodyRowClassName = _a.onGetBodyRowClassName, onGetBodyColumnClassName = _a.onGetBodyColumnClassName, onGetBodyColumnStyle = _a.onGetBodyColumnStyle, onGetBodyColumnSx = _a.onGetBodyColumnSx, defaultAlign = _a.defaultAlign, defaultEllipsis = _a.defaultEllipsis, sortable = _a.sortable, onClick = _a.onClick, onCheckChange = _a.onCheckChange;
    var progressiveVisible = useTableState().progressiveVisible;
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/
    var _b = useInView({ threshold: 0, triggerOnce: true }), ref = _b.ref, inView = _b.inView;
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _c = useState(baseIndex === 0), canInView = _c[0], setCanInView = _c[1];
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    useEffect(function () {
        if (progressiveVisible && baseIndex > 0) {
            setTimeout(function () {
                setCanInView(true);
            }, baseIndex * ifUndefined(progressiveVisible.delay, 300));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [progressiveVisible]);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var renderItems = useMemo(function () {
        return !progressiveVisible || inView ? (items.map(function (item, idx) { return (React__default.createElement(TableBodyRow, { key: item.id, id: item.id, index: baseIndex + idx, className: classNames(showOddColor && 'odd-color', showEvenColor && 'even-color', onGetBodyRowClassName ? onGetBodyRowClassName(item, baseIndex + idx) : undefined), style: onGetBodyRowStyle ? onGetBodyRowStyle(item, baseIndex + idx) : undefined, sx: onGetBodyRowSx ? onGetBodyRowSx(item, baseIndex + idx) : undefined, hover: true, onGetColumnClassName: onGetBodyColumnClassName, onGetColumnStyle: onGetBodyColumnStyle, onGetColumnSx: onGetBodyColumnSx, defaultAlign: defaultAlign, defaultEllipsis: defaultEllipsis, sortable: sortable, columns: columns, item: item, onClick: onClick, onCheckChange: onCheckChange })); })) : (React__default.createElement(TableRow, { ref: canInView ? ref : undefined },
            React__default.createElement(TableCell, { colSpan: columns.length, style: { height: progressiveVisible.rowHeight * items.length, border: 'none' } })));
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
    return React__default.createElement(React__default.Fragment, null, renderItems);
};var chunkArray = function (array, size) {
    var result = [];
    for (var i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
};var TableSortableBody = function (_a) {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/
    var items = _a.items, columns = _a.columns, showOddColor = _a.showOddColor, showEvenColor = _a.showEvenColor, onGetBodyRowStyle = _a.onGetBodyRowStyle, onGetBodyRowSx = _a.onGetBodyRowSx, onGetBodyRowClassName = _a.onGetBodyRowClassName, onGetBodyColumnClassName = _a.onGetBodyColumnClassName, onGetBodyColumnStyle = _a.onGetBodyColumnStyle, onGetBodyColumnSx = _a.onGetBodyColumnSx, defaultAlign = _a.defaultAlign, defaultEllipsis = _a.defaultEllipsis, sortable = _a.sortable, onClick = _a.onClick, onCheckChange = _a.onCheckChange;
    var progressiveVisible = useTableState().progressiveVisible;
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var renderBlock = useMemo(function () {
        if (progressiveVisible) {
            return (React__default.createElement(React__default.Fragment, null, chunkArray(items, ifUndefined(progressiveVisible.blockSize, 20)).map(function (bItems, index) { return (React__default.createElement(TableSortableBodyBlock, { key: index, items: bItems, baseIndex: index, columns: columns, showOddColor: showOddColor, showEvenColor: showEvenColor, onGetBodyRowStyle: onGetBodyRowStyle, onGetBodyRowSx: onGetBodyRowSx, onGetBodyRowClassName: onGetBodyRowClassName, onGetBodyColumnClassName: onGetBodyColumnClassName, onGetBodyColumnStyle: onGetBodyColumnStyle, onGetBodyColumnSx: onGetBodyColumnSx, defaultAlign: defaultAlign, defaultEllipsis: defaultEllipsis, sortable: sortable, onClick: onClick, onCheckChange: onCheckChange })); })));
        }
        else {
            return (React__default.createElement(TableSortableBodyBlock, { items: items, baseIndex: 0, columns: columns, showOddColor: showOddColor, showEvenColor: showEvenColor, onGetBodyRowStyle: onGetBodyRowStyle, onGetBodyRowSx: onGetBodyRowSx, onGetBodyRowClassName: onGetBodyRowClassName, onGetBodyColumnClassName: onGetBodyColumnClassName, onGetBodyColumnStyle: onGetBodyColumnStyle, onGetBodyColumnSx: onGetBodyColumnSx, defaultAlign: defaultAlign, defaultEllipsis: defaultEllipsis, sortable: sortable, onClick: onClick, onCheckChange: onCheckChange }));
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
var _columnId = 0;
var Table = React__default.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var className = _a.className, initStyle = _a.style, sx = _a.sx, caption = _a.caption, topHeadRows = _a.topHeadRows, initColumns = _a.columns, initItems = _a.items, initPaging = _a.paging, _b = _a.pagingAlign, pagingAlign = _b === void 0 ? 'center' : _b, _c = _a.defaultAlign, defaultAlign = _c === void 0 ? 'left' : _c, defaultEllipsis = _a.defaultEllipsis, initStickyHeader = _a.stickyHeader, height = _a.height, minHeight = _a.minHeight, maxHeight = _a.maxHeight, fullHeight = _a.fullHeight, showOddColor = _a.showOddColor, showEvenColor = _a.showEvenColor, _d = _a.cellPadding, cellPadding = _d === void 0 ? 13 : _d, footer = _a.footer, noData = _a.noData, pagination = _a.pagination, sortable = _a.sortable, progressiveVisible = _a.progressiveVisible, onClick = _a.onClick, onGetBodyRowClassName = _a.onGetBodyRowClassName, onGetBodyRowStyle = _a.onGetBodyRowStyle, onGetBodyRowSx = _a.onGetBodyRowSx, onGetBodyColumnClassName = _a.onGetBodyColumnClassName, onGetBodyColumnStyle = _a.onGetBodyColumnStyle, onGetBodyColumnSx = _a.onGetBodyColumnSx, onPageChange = _a.onPageChange, onSortChange = _a.onSortChange, onCheckChange = _a.onCheckChange;
    var localHeaderDataRef = useRef({});
    var localBodyDataRef = useRef({});
    var updateHeadCheckTimer = useRef(undefined);
    var fireOnCheckChangeTimer = useRef({});
    var simpleBarRef = useRef(null);
    var finalColumnsIdRef = useRef([]);
    /********************************************************************************************************************
     * sortable
     * ******************************************************************************************************************/
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
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _e = useState(false), menuOpen = _e[0], setMenuOpen = _e[1];
    var _f = useState(undefined), openMenuId = _f[0], setOpenMenuId = _f[1];
    var _g = useAutoUpdateLayoutState(initColumns), columns = _g[0], setColumns = _g[1];
    var _h = useState(), finalColumns = _h[0], setFinalColumns = _h[1];
    var _j = useAutoUpdateLayoutState(initItems), items = _j[0], setItems = _j[1];
    var _k = useState(), sortableItems = _k[0], setSortableItems = _k[1];
    var _l = useAutoUpdateLayoutState(initPaging), paging = _l[0], setPaging = _l[1];
    /********************************************************************************************************************
     * containerHeight
     * ******************************************************************************************************************/
    var _m = useState(), containerHeight = _m[0], setContainerHeight = _m[1];
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
    var _o = useState(), pagingHeight = _o[0], setPagingHeight = _o[1];
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
    var getFinalColumnId = useCallback(function (column) {
        if (finalColumns && finalColumnsIdRef.current) {
            var idx = finalColumns.indexOf(column);
            return finalColumnsIdRef.current[idx];
        }
        else {
            return '';
        }
    }, [finalColumns]);
    var updateHeadCheck = useCallback(function (column) {
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
    var getChecked = useCallback(function (itemKey, itemValue, columnId) {
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
    var setChecked = useCallback(function (itemKey, itemValue, columnId, checked) {
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
    var toggleChecked = useCallback(function (itemKey, itemValue, columnId) {
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
    var setCheckedAll = useCallback(function (columnId, checked) {
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
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
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
    useLayoutEffect(function () {
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
                setItems: function (items) {
                    lastItems_1 = items;
                    setItems(items);
                },
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
                getChecked: getChecked,
                setChecked: setChecked,
                toggleChecked: toggleChecked,
                setCheckedAll: setCheckedAll,
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
        setColumns,
        setItems,
        setPaging,
        getCheckedItems,
        simpleBarScrollToTop,
        setChecked,
        toggleChecked,
        getChecked,
        setCheckedAll,
    ]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
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
            var data = localBodyDataRef.current[key].columns[getFinalColumnId(column)];
            if (data) {
                if (!data.checkDisabled) {
                    (_a = data.commands) === null || _a === void 0 ? void 0 : _a.setChecked(checked);
                }
            }
        });
    }, [getFinalColumnId]);
    var handleBodyCheckChange = useCallback(function (item, column) {
        updateHeadCheck(column);
    }, [updateHeadCheck]);
    var handlePageChange = useCallback(function (page) {
        simpleBarScrollToTop();
        onPageChange && onPageChange(page);
    }, [onPageChange, simpleBarScrollToTop]);
    /********************************************************************************************************************
     * TableContext Function
     * ******************************************************************************************************************/
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
        var columnId = getFinalColumnId(column);
        var data = (_a = localBodyDataRef.current[item.id]) === null || _a === void 0 ? void 0 : _a.columns[columnId];
        if (data) {
            data.checked = checked;
            fireOnCheckChange(columnId);
        }
    }, [fireOnCheckChange, getFinalColumnId]);
    var TableContextSetItemColumnCheckDisabled = useCallback(function (item, column, disabled) {
        var _a;
        var data = (_a = localBodyDataRef.current[item.id]) === null || _a === void 0 ? void 0 : _a.columns[getFinalColumnId(column)];
        if (data) {
            data.checkDisabled = disabled;
            updateHeadCheck(column);
        }
    }, [getFinalColumnId, updateHeadCheck]);
    var TableContextSetItemColumnCommands = useCallback(function (item, column, commands) {
        var _a;
        var data = (_a = localBodyDataRef.current[item.id]) === null || _a === void 0 ? void 0 : _a.columns[getFinalColumnId(column)];
        if (data) {
            data.commands = commands;
        }
    }, [getFinalColumnId]);
    var TableContextSetHeadColumnChecked = useCallback(function (column, checked) {
        var data = localHeaderDataRef.current[getFinalColumnId(column)];
        if (data) {
            data.checked = checked;
        }
    }, [getFinalColumnId]);
    var TableContextSetHeadColumnCommands = useCallback(function (column, commands) {
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
    var _p = useMemo(function () {
        var style = fullHeight
            ? __assign$3(__assign$3({ width: '100%' }, initStyle), { flex: 1, justifyContent: 'flex-end', height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }) : __assign$3({ width: '100%' }, initStyle);
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
    var _q = useMemo(function () {
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
    var tableTopHead = useMemo(function () {
        return finalColumns && (React__default.createElement(TableTopHead, { caption: caption, rows: topHeadRows, columns: finalColumns, items: items, defaultAlign: defaultAlign, onCheckChange: handleHeadCheckChange }));
    }, [caption, defaultAlign, finalColumns, handleHeadCheckChange, items, topHeadRows]);
    var tableBody = useMemo(function () {
        return finalColumns && (React__default.createElement(TableBody, null, sortableItems ? (sortableItems.length > 0 ? (React__default.createElement(TableSortableBody, { items: sortableItems, columns: finalColumns, showOddColor: showOddColor, showEvenColor: showEvenColor, defaultAlign: defaultAlign, defaultEllipsis: defaultEllipsis, sortable: sortable, onClick: onClick, onCheckChange: handleBodyCheckChange, onGetBodyRowClassName: onGetBodyRowClassName, onGetBodyRowStyle: onGetBodyRowStyle, onGetBodyRowSx: onGetBodyRowSx, onGetBodyColumnClassName: onGetBodyColumnClassName, onGetBodyColumnSx: onGetBodyColumnSx, onGetBodyColumnStyle: onGetBodyColumnStyle })) : (React__default.createElement(StyledBodyRow$1, null,
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
    var tableFooter = useMemo(function () {
        return finalColumns &&
            !isNoData &&
            footer && (React__default.createElement(TableFooter, null,
            React__default.createElement(TableRow, null, finalColumns.map(function (column, idx) { return (React__default.createElement(TableFooterCell, { key: idx, column: column, items: items, defaultAlign: defaultAlign })); }))));
    }, [defaultAlign, finalColumns, footer, isNoData, items]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return finalColumns ? (React__default.createElement(TableContextProvider, { value: {
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
        React__default.createElement(Paper, { ref: fullHeight ? containerHeightDetector : undefined, className: classNames('Table', className, !!stickyHeader && 'sticky-header', !!fullHeight && 'full-height', !!showOddColor && 'odd-color', !!showEvenColor && 'even-color', !!sortable && 'sortable'), variant: 'outlined', style: style, sx: sx },
            fullHeight ? (React__default.createElement(SimpleBar, { ref: simpleBarRef, style: contentContainerStyle },
                React__default.createElement(DndContext, { sensors: sensors, collisionDetection: closestCenter, onDragEnd: handleDragEnd },
                    React__default.createElement(Table$1, { stickyHeader: stickyHeader, sx: tableSx, style: tableStyle },
                        tableTopHead,
                        tableBody,
                        tableFooter)))) : (React__default.createElement(Box, { style: contentContainerStyle },
                React__default.createElement(DndContext, { sensors: sensors, collisionDetection: closestCenter, onDragEnd: handleDragEnd },
                    React__default.createElement(Table$1, { stickyHeader: stickyHeader, sx: tableSx, style: tableStyle },
                        tableTopHead,
                        tableBody,
                        tableFooter)))),
            finalColumns && paging && paging.total > 0 && (React__default.createElement(Stack, { ref: fullHeight ? pagingHeightResizeDetector : undefined, alignItems: pagingAlign, style: pagingStyle },
                React__default.createElement(TablePagination, { className: pagination === null || pagination === void 0 ? void 0 : pagination.className, style: pagination === null || pagination === void 0 ? void 0 : pagination.style, sx: pagination === null || pagination === void 0 ? void 0 : pagination.sx, paging: paging, align: pagingAlign, onChange: handlePageChange })))))) : null;
});var getSearchInfo = function (search) {
    var searchInfo = {};
    if (search) {
        var ref = search.ref, searchGroups = search.searchGroups, props = __rest$2(search, ["ref", "searchGroups"]);
        searchInfo.ref = ref;
        searchInfo.searchGroups = searchGroups;
        searchInfo.props = props;
    }
    return searchInfo;
};
var getTableInfo = function (table) {
    var tableInfo = {};
    if (table) {
        var ref = table.ref, props = __rest$2(table, ["ref"]);
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
};var SearchTable = React__default.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var className = _a.className, initStyle = _a.style, sx = _a.sx, color = _a.color, hash = _a.hash, stickyHeader = _a.stickyHeader, fullHeight = _a.fullHeight, search = _a.search, table = _a.table, betweenSearchTableComponent = _a.betweenSearchTableComponent, onGetData = _a.onGetData, onRequestHashChange = _a.onRequestHashChange;
    var initPathRef = useRef(window.location.pathname);
    var searchRef = useRef(undefined);
    var tableRef = useRef(undefined);
    var lastGetDataDataRef = useRef({});
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _b = useState(true), isFirstSearchSubmit = _b[0], setIsFirstSearchSubmit = _b[1];
    var _c = useState(), tableData = _c[0], setTableData = _c[1];
    /********************************************************************************************************************
     * searchInfo
     * ******************************************************************************************************************/
    var searchInfoFirstUseEffect = useRef(true);
    var _d = useState(function () { return getSearchInfo(search); }), searchInfo = _d[0], setSearchInfo = _d[1];
    useEffect(function () {
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
    var tableInfoFirstUseEffect = useRef(true);
    var _e = useState(function () { return getTableInfo(table); }), tableInfo = _e[0], setTableInfo = _e[1];
    useEffect(function () {
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
    var getData = useCallback(function (data) {
        lastGetDataDataRef.current = data;
        if (onGetData) {
            onGetData(data).then(setTableData);
        }
    }, [onGetData]);
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
                                    var fromName = dateRangePickerCommands.getFormValueFromName();
                                    var toName = dateRangePickerCommands.getFormValueToName();
                                    var format = dateRangePickerCommands.getFormValueFormat();
                                    if (name === fromName) {
                                        if (notEmpty(value)) {
                                            var startValue = dayjs(value, format);
                                            dateRangePickerCommands.setFromValue(startValue.isValid() ? startValue : null);
                                        }
                                        else {
                                            dateRangePickerCommands.setFromValue(null);
                                        }
                                    }
                                    else if (name === toName) {
                                        if (notEmpty(value)) {
                                            var endValue = dayjs(value, format);
                                            dateRangePickerCommands.setToValue(endValue.isValid() ? endValue : null);
                                        }
                                        else {
                                            dateRangePickerCommands.setToValue(null);
                                        }
                                    }
                                }
                                break;
                            case 'FormYearRangePicker':
                                {
                                    var dateRangePickerCommands = itemCommands;
                                    var fromName = dateRangePickerCommands.getFormValueFromName();
                                    var toName = dateRangePickerCommands.getFormValueToName();
                                    if (name === fromName) {
                                        dateRangePickerCommands.setFromValue(notEmpty(value) ? Number(value) : null);
                                    }
                                    else if (name === toName) {
                                        dateRangePickerCommands.setToValue(notEmpty(value) ? Number(value) : null);
                                    }
                                }
                                break;
                            case 'FormMonthPicker':
                                {
                                    var monthCommands = itemCommands;
                                    var yearName = monthCommands.getFormValueYearName();
                                    var monthName = monthCommands.getFormValueMonthName();
                                    if (name === yearName) {
                                        monthCommands.setYear(notEmpty(value) ? Number(value) : null);
                                    }
                                    else if (name === monthName) {
                                        monthCommands.setMonth(notEmpty(value) ? Number(value) : null);
                                    }
                                }
                                break;
                            case 'FormMonthRangePicker':
                                {
                                    var monthRangeCommands = itemCommands;
                                    var fromYearName = monthRangeCommands.getFormValueFromYearName();
                                    var fromMonthName = monthRangeCommands.getFormValueFromMonthName();
                                    var toYearName = monthRangeCommands.getFormValueToYearName();
                                    var toMonthName = monthRangeCommands.getFormValueToMonthName();
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
    /********************************************************************************************************************
     * hash
     * ******************************************************************************************************************/
    useEffect(function () {
        if (hash && window.location.pathname === initPathRef.current) {
            var data = hashToSearchValue();
            if (data)
                getData(data);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [window.location.hash]);
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
                                case 'FormYearRangePicker':
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
                                case 'FormMonthPicker':
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
                                case 'FormMonthRangePicker':
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
                            if (resetValue != null && !equal(resetValue, value) && typeof value !== 'object') {
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
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    var searchView = useMemo(function () { return (React__default.createElement(Grid, { sx: { display: searchInfo.searchGroups ? undefined : 'none' } },
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
            searchInfo.searchGroups))); }, [color, handleSearchSubmit, searchInfo]);
    var tableView = useMemo(function () {
        var _a, _b;
        return (React__default.createElement(Grid, { style: fullHeight ? { flex: 1, display: 'flex', flexDirection: 'column' } : undefined },
            React__default.createElement(Table, __assign$3({}, tableInfo.props, { stickyHeader: stickyHeader || ((_a = tableInfo.props) === null || _a === void 0 ? void 0 : _a.stickyHeader), fullHeight: fullHeight || ((_b = tableInfo.props) === null || _b === void 0 ? void 0 : _b.fullHeight), ref: function (commands) {
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
    return (React__default.createElement(Grid, { container: true, direction: 'column', spacing: 1, className: classNames('SearchTable', className), style: fullHeight ? __assign$3(__assign$3({}, initStyle), { flex: 1, display: 'flex' }) : initStyle, sx: sx },
        searchView,
        betweenSearchTableComponent && React__default.createElement(Grid, null, betweenSearchTableComponent),
        tableView));
});var toggleSelection;
var hasRequiredToggleSelection;

function requireToggleSelection () {
	if (hasRequiredToggleSelection) return toggleSelection;
	hasRequiredToggleSelection = 1;
	toggleSelection = function () {
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
	};
	return toggleSelection;
}var copyToClipboard;
var hasRequiredCopyToClipboard;

function requireCopyToClipboard () {
	if (hasRequiredCopyToClipboard) return copyToClipboard;
	hasRequiredCopyToClipboard = 1;

	var deselectCurrent = requireToggleSelection();

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

	copyToClipboard = copy;
	return copyToClipboard;
}var copyToClipboardExports = requireCopyToClipboard();
var copy = /*@__PURE__*/getDefaultExportFromCjs(copyToClipboardExports);/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


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

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}
typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};/********************************************************************************************************************
 * getParentSize
 * ******************************************************************************************************************/
var getParentSize = function (el) {
    var parent = el.parentElement;
    if (parent) {
        var parentStyle = getComputedStyle(parent);
        var parentFontSize = parentStyle.fontSize;
        var sizeValue = parseFloat(parentFontSize);
        var sizeUnit = parentFontSize.replace(sizeValue.toString(), '');
        return { sizeValue: sizeValue, sizeUnit: sizeUnit };
    }
};
/********************************************************************************************************************
 * finalStyleFontSize
 * ******************************************************************************************************************/
var finalStyleFontSize = function (sizeValue, sizeUnit, el) {
    switch (sizeUnit) {
        case 'rem':
            {
                var root = getComputedStyle(document.documentElement).fontSize;
                var rootValue = parseFloat(root);
                sizeValue = sizeValue * rootValue;
                sizeUnit = 'px';
            }
            break;
        case 'em':
            {
                var parentSize = getParentSize(el);
                if (parentSize) {
                    sizeValue = sizeValue * parentSize.sizeValue;
                    sizeUnit = 'px';
                }
            }
            break;
        case 'vw':
            {
                var vw = window.innerWidth;
                sizeValue = (sizeValue / 100) * vw;
                sizeUnit = 'px';
            }
            break;
        case 'vh':
            {
                var vh = window.innerHeight;
                sizeValue = (sizeValue / 100) * vh;
                sizeUnit = 'px';
            }
            break;
        case 'vmin':
            {
                var vw = window.innerWidth;
                var vh = window.innerHeight;
                var vmin = Math.min(vw, vh);
                sizeValue = (sizeValue / 100) * vmin;
                sizeUnit = 'px';
            }
            break;
        case 'vmax':
            {
                var vw = window.innerWidth;
                var vh = window.innerHeight;
                var vmax = Math.max(vw, vh);
                sizeValue = (sizeValue / 100) * vmax;
                sizeUnit = 'px';
            }
            break;
    }
    switch (sizeUnit) {
        case 'px':
            return Math.round(sizeValue);
        default:
            return "".concat(sizeValue).concat(sizeUnit);
    }
};/********************************************************************************************************************
 * 아이콘 컴포넌트
 * - Material-UI의 Icon 컴포넌트를 사용하여 아이콘을 표시
 * - Material 아이콘 목록 URL : https://mui.com/material-ui/material-icons/
 * ******************************************************************************************************************/
var PdgIcon = React__default.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var className = _a.className, InitChildren = _a.children, initStyle = _a.style, size = _a.size, color = _a.color, tooltip = _a.tooltip, tooltipPlacement = _a.tooltipPlacement, tooltipProps = _a.tooltipProps, props = __rest(_a, ["className", "children", "style", "size", "color", "tooltip", "tooltipPlacement", "tooltipProps"]);
    var innerRef = useRef(null);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _b = useState(), styleFontSize = _b[0], setStyleFontSize = _b[1];
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    useEffect(function () {
        if (contains(['large', 'medium', 'small'], size)) {
            setStyleFontSize(undefined);
        }
        else {
            resetStyleFontSize();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [size]);
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/
    var iconFontSize = contains(['large', 'medium', 'small'], size)
        ? size
        : undefined;
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    var resetStyleFontSize = useCallback(function () {
        var el = innerRef.current;
        if (el && iconFontSize === undefined) {
            var sizeValue = undefined;
            var sizeUnit = undefined;
            if (size === 'inherit') {
                var parentSize = getParentSize(el);
                if (parentSize) {
                    sizeValue = parentSize.sizeValue;
                    sizeUnit = parentSize.sizeUnit;
                }
            }
            else if (typeof size === 'number') {
                sizeValue = size;
                sizeUnit = 'px';
            }
            else if (typeof size === 'string') {
                sizeValue = parseFloat(size);
                sizeUnit = size.replace(sizeValue.toString(), '');
            }
            if (sizeValue && sizeUnit) {
                setStyleFontSize(finalStyleFontSize(sizeValue, sizeUnit, el));
            }
        }
        else {
            setStyleFontSize(undefined);
        }
    }, [iconFontSize, size]);
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/
    var content = (function () {
        if (InitChildren === undefined) {
            return null;
        }
        else {
            var style = __assign({}, initStyle);
            if (styleFontSize != null) {
                style.fontSize = styleFontSize;
            }
            var finalColor = contains(['inherit', 'action', 'disabled', 'primary', 'secondary', 'error', 'info', 'success', 'warning'], color)
                ? color
                : undefined;
            if (finalColor === undefined && color !== undefined) {
                style.color = color;
            }
            return (React__default.createElement(Icon, __assign({ ref: function (r) {
                    if (ref) {
                        if (typeof ref === 'function') {
                            ref(r);
                        }
                        else {
                            ref.current = r;
                        }
                    }
                    innerRef.current = r;
                    resetStyleFontSize();
                }, fontSize: iconFontSize, color: finalColor, className: classNames('PdgIcon', className), style: style }, props), typeof InitChildren === 'string' ? (InitChildren.replace(/[A-Z]/g, function (letter, idx) { return "".concat(idx > 0 ? '_' : '').concat(letter.toLowerCase()); })) : (React__default.createElement(InitChildren, null))));
        }
    })();
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return !content ? null : tooltip ? (React__default.createElement(Tooltip, __assign({ title: tooltip, placement: ifUndefined(tooltipPlacement, 'top'), arrow: true }, tooltipProps), content)) : (content);
});
var PdgIcon$1 = React__default.memo(PdgIcon);var PdgBox = React__default.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var ph = _a.ph, pv = _a.pv, fullSize = _a.fullSize, fullWidth = _a.fullWidth, fullHeight = _a.fullHeight, otherProps = __rest(_a, ["ph", "pv", "fullSize", "fullWidth", "fullHeight"]);
    var props = useMemo(function () {
        var newProps = __assign({}, otherProps);
        if (ph !== undefined) {
            newProps.paddingLeft = ph;
            newProps.paddingRight = ph;
        }
        if (pv !== undefined) {
            newProps.paddingTop = pv;
            newProps.paddingBottom = pv;
        }
        if (fullWidth || fullSize) {
            newProps.width = '100%';
        }
        if (fullHeight || fullSize) {
            newProps.height = '100%';
        }
        return newProps;
    }, [fullHeight, fullSize, fullWidth, otherProps, ph, pv]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return React__default.createElement(Box, __assign({ ref: ref }, props));
});var PdgFlexRowBox = React__default.forwardRef(function (_a, ref) {
    var className = _a.className, span = _a.span, inline = _a.inline, center = _a.center, centerHorizontal = _a.centerHorizontal, gap = _a.gap, spacing = _a.spacing, flexWrap = _a.flexWrap, nowrap = _a.nowrap, alignItems = _a.alignItems, justifyContent = _a.justifyContent, props = __rest(_a, ["className", "span", "inline", "center", "centerHorizontal", "gap", "spacing", "flexWrap", "nowrap", "alignItems", "justifyContent"]);
    return (React__default.createElement(PdgBox, __assign({ ref: ref, className: classNames('PdgFlexRowBox', className), component: span ? 'span' : 'div', display: inline ? 'inline-flex' : 'flex', alignItems: ifUndefined(alignItems, center ? 'center' : undefined), justifyContent: ifUndefined(justifyContent, centerHorizontal ? 'center' : undefined), gap: ifUndefined(gap, spacing), flexWrap: ifUndefined(flexWrap, nowrap ? 'nowrap' : 'wrap') }, props)));
});var PdgHelper = function (_a) {
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/
    var className = _a.className, initStyle = _a.style, sx = _a.sx, text = _a.text, icon = _a.icon, size = _a.size, position = _a.position, opacity = _a.opacity, children = _a.children, props = __rest(_a, ["className", "style", "sx", "text", "icon", "size", "position", "opacity", "children"]);
    var pdgIcon = (function () {
        if (!React__default.isValidElement(text) && !['string', 'number'].includes(typeof text))
            return null;
        if (typeof text === 'string' && text === '')
            return null;
        var style = { opacity: opacity };
        if (children) {
            if (position === 'left') {
                style.marginRight = '0.1em';
            }
            else {
                style.marginLeft = '0.1em';
            }
        }
        return (React__default.createElement(PdgIcon$1, __assign({ className: classNames('PdgHelper-Icon', className), size: size, style: __assign(__assign({}, style), initStyle), sx: sx, tooltip: text }, props), ifUndefined(icon, 'HelpOutline')));
    })();
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return !children ? (pdgIcon) : pdgIcon ? (React__default.createElement(PdgFlexRowBox, { inline: true, center: true, span: true, className: 'PdgHelper' },
        position === 'left' && pdgIcon,
        children,
        position !== 'left' && pdgIcon)) : (React__default.createElement(React__default.Fragment, null, children));
};var PdgText = function (_a) {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/
    var _b = _a.display, display = _b === void 0 ? 'inline-block' : _b, line = _a.line, center = _a.center, className = _a.className, size = _a.size, color = _a.color, helper = _a.helper, ph = _a.ph, pv = _a.pv, fullWidth = _a.fullWidth, fullHeight = _a.fullHeight, fullSize = _a.fullSize, children = _a.children, initProps = __rest(_a, ["display", "line", "center", "className", "size", "color", "helper", "ph", "pv", "fullWidth", "fullHeight", "fullSize", "children"]);
    var theme = useTheme();
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var props = useMemo(function () {
        var newTextProps = __assign(__assign({}, initProps), { style: __assign({}, initProps === null || initProps === void 0 ? void 0 : initProps.style) });
        if (size) {
            switch (size) {
                case 'inherit':
                    newTextProps.style.fontSize = 'inherit';
                    break;
                case 'small':
                    newTextProps.style.fontSize = '0.75rem';
                    break;
                case 'medium':
                    break;
                case 'large':
                    newTextProps.style.fontSize = '1.2rem';
                    break;
                default:
                    newTextProps.style.fontSize = size;
                    break;
            }
        }
        switch (color) {
            case 'primary':
                newTextProps.style.color = theme.palette.primary.main;
                break;
            case 'secondary':
                newTextProps.style.color = theme.palette.secondary.main;
                break;
            case 'error':
                newTextProps.style.color = theme.palette.error.main;
                break;
            case 'warning':
                newTextProps.style.color = theme.palette.warning.main;
                break;
            case 'info':
                newTextProps.style.color = theme.palette.info.main;
                break;
            case 'success':
                newTextProps.style.color = theme.palette.success.main;
                break;
            default:
                newTextProps.style.color = color;
        }
        if (ph !== undefined) {
            newTextProps.paddingLeft = ph;
            newTextProps.paddingRight = ph;
        }
        if (pv !== undefined) {
            newTextProps.paddingTop = pv;
            newTextProps.paddingBottom = pv;
        }
        if (center) {
            newTextProps.textAlign = 'center';
        }
        if (fullWidth || fullSize) {
            newTextProps.width = '100%';
        }
        if (fullHeight || fullSize) {
            newTextProps.height = '100%';
        }
        return newTextProps;
    }, [
        center,
        color,
        fullHeight,
        fullSize,
        fullWidth,
        initProps,
        ph,
        pv,
        size,
        theme.palette.error.main,
        theme.palette.info.main,
        theme.palette.primary.main,
        theme.palette.secondary.main,
        theme.palette.success.main,
        theme.palette.warning.main,
    ]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (function () {
        var content = (React__default.createElement(Typography, __assign({ display: line ? 'block' : display, className: classNames('PdgText', className) }, props), children));
        if (!helper)
            return content;
        if (typeof helper === 'object' && Object.keys(helper).includes('text')) {
            return (React__default.createElement(PdgHelper, __assign({ size: size, color: color }, helper), content));
        }
        else {
            return React__default.createElement(PdgHelper, { text: helper }, content);
        }
    })();
};
var PdgText$1 = React__default.memo(PdgText);/********************************************************************************************************************
 * 사업자등록번호에 자동으로 하이픈을 추가하여 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/
var PdgBusinessNoText = React__default.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/
    var children = _a.children, value = _a.value, className = _a.className, props = __rest(_a, ["children", "value", "className"]);
    var finalValue = children != null ? children : value != null ? value : '';
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var content = useMemo(function () { return businessNoAutoDash(finalValue).substring(0, 12); }, [finalValue]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return content ? (React__default.createElement(PdgText$1, __assign({ ref: ref, className: classNames('PdgBusinessNoText', className) }, props), content)) : null;
});
React__default.memo(PdgBusinessNoText);/********************************************************************************************************************
 * 날짜를 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/
var PdgDateText = React__default.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/
    var children = _a.children, initValue = _a.value, type = _a.type, className = _a.className, dateClassName = _a.dateClassName, initDateStyle = _a.dateStyle, dateOpacity = _a.dateOpacity, dateSeparator = _a.dateSeparator, timeClassName = _a.timeClassName, initTimeStyle = _a.timeStyle, timeOpacity = _a.timeOpacity, twoLine = _a.twoLine, props = __rest(_a, ["children", "value", "type", "className", "dateClassName", "dateStyle", "dateOpacity", "dateSeparator", "timeClassName", "timeStyle", "timeOpacity", "twoLine"]);
    var value = ifUndefined(children, initValue);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var _b = useMemo(function () {
        var dateFormatSeparator = ifUndefined(dateSeparator, '-');
        var dateFormat = "YYYY".concat(dateFormatSeparator, "MM").concat(dateFormatSeparator, "DD");
        var format = type === 'date'
            ? dateFormat
            : type === 'hour'
                ? "".concat(dateFormat, " HH\uC2DC")
                : type === 'minute'
                    ? "".concat(dateFormat, " HH\uC2DC mm\uBD84")
                    : "".concat(dateFormat, " HH:mm:ss");
        var values = undefined;
        if (value) {
            var dValue = dayjs(value).format(format);
            if (dValue.length > dateFormat.length) {
                values = [dValue.substring(0, dateFormat.length), dValue.substring(dateFormat.length + 1)];
            }
            else {
                values = [dValue.substring(0, dateFormat.length)];
            }
        }
        var dateStyle = __assign({}, initDateStyle);
        if (dateOpacity !== undefined) {
            dateStyle.opacity = dateOpacity;
        }
        var timeStyle = __assign(__assign({}, initTimeStyle), { opacity: (initTimeStyle === null || initTimeStyle === void 0 ? void 0 : initTimeStyle.opacity) === undefined && timeOpacity === undefined
                ? 0.6
                : ifUndefined(initTimeStyle === null || initTimeStyle === void 0 ? void 0 : initTimeStyle.opacity, timeOpacity) });
        if (!twoLine) {
            timeStyle.marginLeft = '0.3em';
        }
        return { values: values, dateStyle: dateStyle, timeStyle: timeStyle };
    }, [dateOpacity, dateSeparator, initDateStyle, initTimeStyle, timeOpacity, twoLine, type, value]), values = _b.values, dateStyle = _b.dateStyle, timeStyle = _b.timeStyle;
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return values ? (React__default.createElement(PdgText$1, __assign({ ref: ref, className: classNames('PdgDateText', className) }, props),
        React__default.createElement("span", { className: classNames('PdgDateText-Date', dateClassName), style: dateStyle }, values[0]),
        twoLine && values.length > 1 && React__default.createElement("br", null),
        values.length > 1 ? (React__default.createElement("span", { className: classNames('PdgDateText-Time', timeClassName), style: timeStyle }, values[1])) : null)) : null;
});
React__default.memo(PdgDateText);/********************************************************************************************************************
 * 이메일을 표시하고 mailto: 링크를 추가하는 컴포넌트
 * ******************************************************************************************************************/
var PdgEmailText = React__default.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/
    var children = _a.children, initValue = _a.value, className = _a.className, color = _a.color, props = __rest(_a, ["children", "value", "className", "color"]);
    var value = ifUndefined(children, initValue);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return value ? (React__default.createElement("a", { ref: ref, href: "mailto:".concat(value), className: classNames('PdgEmailText', className) },
        React__default.createElement(PdgText$1, __assign({ color: ifUndefined(color, 'primary') }, props), value))) : null;
});
React__default.memo(PdgEmailText);/********************************************************************************************************************
 * 아이콘과 텍스트를 함께 표시하는 컴포넌트
 * ******************************************************************************************************************/
var PdgIconText = React__default.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var children = _a.children, className = _a.className, color = _a.color, icon = _a.icon, size = _a.size, iconMarginRight = _a.iconMarginRight, initIconProps = _a.iconProps, textProps = _a.textProps, helper = _a.helper, ph = _a.ph, pv = _a.pv, otherProps = __rest(_a, ["children", "className", "color", "icon", "size", "iconMarginRight", "iconProps", "textProps", "helper", "ph", "pv"]);
    var props = useMemo(function () {
        var newProps = __assign({}, otherProps);
        if (ph !== undefined) {
            newProps.paddingLeft = ph;
            newProps.paddingRight = ph;
        }
        if (pv !== undefined) {
            newProps.paddingTop = pv;
            newProps.paddingBottom = pv;
        }
        return newProps;
    }, [otherProps, ph, pv]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React__default.createElement(PdgFlexRowBox, __assign({ inline: true, center: true, span: true, ref: ref, className: classNames('PdgIconText', className), fontSize: size === 'inherit' ? 'inherit' : size === 'small' ? '0.75rem' : size === 'large' ? '1.2rem' : size }, props),
        icon && (React__default.createElement(React__default.Fragment, null,
            React__default.createElement(PdgIcon$1, __assign({}, initIconProps, { color: color, size: size, style: __assign({ marginRight: iconMarginRight }, initIconProps === null || initIconProps === void 0 ? void 0 : initIconProps.style), className: classNames('PdgIconText-Icon', initIconProps === null || initIconProps === void 0 ? void 0 : initIconProps.className) }), icon),
            iconMarginRight === undefined && React__default.createElement("span", { style: { fontSize: '0.4rem' } }, "\u00A0"))),
        React__default.createElement(PdgText$1, __assign({}, textProps, { className: classNames('PdgIconText-Text', textProps === null || textProps === void 0 ? void 0 : textProps.className), size: ifUndefined(textProps === null || textProps === void 0 ? void 0 : textProps.size, size), color: ifUndefined(textProps === null || textProps === void 0 ? void 0 : textProps.color, color), helper: helper }), children)));
});
React__default.memo(PdgIconText);/********************************************************************************************************************
 * 숫자에 천단위 , 를 추가하여 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/
var PdgNumberText = React__default.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/
    var className = _a.className, children = _a.children, initValue = _a.value, decimalOpacity = _a.decimalOpacity, prefix = _a.prefix, prefixOpacity = _a.prefixOpacity, suffix = _a.suffix, suffixOpacity = _a.suffixOpacity, props = __rest(_a, ["className", "children", "value", "decimalOpacity", "prefix", "prefixOpacity", "suffix", "suffixOpacity"]);
    var value = ifUndefined(children, initValue);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var _b = useMemo(function () {
        var formattedValue = value != null ? numberFormat(value).split('.') : null;
        var integerValue = formattedValue ? formattedValue[0] : undefined;
        var decimalValue = formattedValue && formattedValue.length > 1 ? formattedValue[1] : undefined;
        return { integerValue: integerValue, decimalValue: decimalValue };
    }, [value]), integerValue = _b.integerValue, decimalValue = _b.decimalValue;
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return integerValue != undefined ? (React__default.createElement(PdgText$1, __assign({ ref: ref, className: classNames('PdgNumberText', className) }, props),
        prefix !== undefined && (React__default.createElement(StyledPrefix, { className: 'PdgNumberText-Prefix', style: { opacity: prefixOpacity === undefined ? 0.6 : prefixOpacity } }, prefix)),
        React__default.createElement("span", { className: 'PdgNumberText-Integer' }, integerValue === '' ? '0' : integerValue),
        decimalValue !== undefined && (React__default.createElement("span", { className: 'PdgNumberText-Decimal', style: { opacity: decimalOpacity === undefined ? 1 : decimalOpacity } },
            ".",
            decimalValue)),
        suffix !== undefined && (React__default.createElement(StyledSuffix, { className: 'PdgNumberText-Suffix', style: { opacity: suffixOpacity === undefined ? 0.6 : suffixOpacity } }, suffix)))) : null;
});
var PdgNumberText$1 = React__default.memo(PdgNumberText);
/********************************************************************************************************************
 * Styled
 * ******************************************************************************************************************/
var StyledPrefix = styled('span')(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  margin-right: 2px;\n"], ["\n  margin-right: 2px;\n"])));
var StyledSuffix = styled('span')(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  margin-left: 2px;\n"], ["\n  margin-left: 2px;\n"])));
var templateObject_1$1, templateObject_2$1;/********************************************************************************************************************
 * 주민등록번호에 자동으로 하이픈을 추가하여 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/
var PdgPersonalNoText = React__default.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/
    var children = _a.children, value = _a.value, className = _a.className, props = __rest(_a, ["children", "value", "className"]);
    var finalValue = children != null ? children : value != null ? value : '';
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var content = useMemo(function () { return personalNoAutoDash(finalValue).substring(0, 14); }, [finalValue]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return content ? (React__default.createElement(PdgText$1, __assign({ ref: ref, className: classNames('PdgPersonalNoText', className) }, props), content)) : null;
});
React__default.memo(PdgPersonalNoText);/********************************************************************************************************************
 * 전화번호에 자동으로 하이픈을 추가하여 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/
var PdgTelText = React__default.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/
    var children = _a.children, value = _a.value, className = _a.className, props = __rest(_a, ["children", "value", "className"]);
    var finalValue = children != null ? children : value;
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var content = useMemo(function () { return telNoAutoDash(finalValue); }, [finalValue]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return content ? (React__default.createElement(PdgText$1, __assign({ ref: ref, className: classNames('PdgTelText', className) }, props), content)) : null;
});
React__default.memo(PdgTelText);/********************************************************************************************************************
 * 숫자에 '원'을 붙여 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/
var PdgWonText = React__default.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return React__default.createElement(PdgNumberText$1, __assign({ ref: ref, className: classNames('PdgWonText', className), suffix: '\uC6D0' }, props));
});
React__default.memo(PdgWonText);var PdgButton = React__default.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/
    var variant = _a.variant, size = _a.size, children = _a.children, className = _a.className, initSx = _a.sx, initColor = _a.color, disabled = _a.disabled, startIcon = _a.startIcon, startIconMarginLeft = _a.startIconMarginLeft, startIconMarginRight = _a.startIconMarginRight, startIconProps = _a.startIconProps, endIcon = _a.endIcon, endIconMarginLeft = _a.endIconMarginLeft, endIconMarginRight = _a.endIconMarginRight, endIconProps = _a.endIconProps, tooltip = _a.tooltip, tooltipPlacement = _a.tooltipPlacement, tooltipProps = _a.tooltipProps, props = __rest(_a, ["variant", "size", "children", "className", "sx", "color", "disabled", "startIcon", "startIconMarginLeft", "startIconMarginRight", "startIconProps", "endIcon", "endIconMarginLeft", "endIconMarginRight", "endIconProps", "tooltip", "tooltipPlacement", "tooltipProps"]);
    var color = contains(['inherit', 'primary', 'secondary', 'error', 'info', 'success', 'warning'], initColor)
        ? initColor
        : undefined;
    var content = (React__default.createElement(Button, __assign({ ref: ref, variant: variant, size: size, color: color, disabled: disabled, className: classNames(className, 'PdgButton'), sx: variant === 'contained'
            ? __assign(__assign({}, initSx), { color: '#fff', backgroundColor: color ? undefined : initColor, '&:hover': {
                    color: '#fff',
                    backgroundColor: color ? undefined : initColor ? darken(initColor, 0.2) : undefined,
                } }) : __assign(__assign({}, initSx), { color: color ? undefined : initColor, borderColor: color ? undefined : initColor, '&:hover': {
                borderColor: color ? undefined : initColor ? darken(initColor, 0.2) : undefined,
            } }) }, props),
        React__default.createElement(PdgFlexRowBox, { center: true, inline: true, nowrap: true },
            startIcon && (React__default.createElement(PdgIcon$1, __assign({ className: 'PdgButton-StartIcon', size: size, style: __assign({ marginLeft: ifUndefined(startIconMarginLeft, variant !== 'text' && children ? '-0.15em' : undefined), marginRight: ifUndefined(startIconMarginRight, children ? '0.2em' : undefined) }, startIconProps === null || startIconProps === void 0 ? void 0 : startIconProps.style) }, startIconProps), startIcon)),
            React__default.createElement("div", { style: {
                    fontSize: size === 'small' ? '0.7rem' : size === 'medium' ? undefined : size === 'large' ? '1.0rem' : undefined,
                } }, children),
            endIcon && (React__default.createElement(PdgIcon$1, __assign({ className: 'PdgButton-EndIcon', size: size, style: __assign({ marginLeft: ifUndefined(endIconMarginLeft, children ? '0.2em' : undefined), marginRight: ifUndefined(endIconMarginRight, variant !== 'text' && children ? '-0.15em' : undefined) }, endIconProps === null || endIconProps === void 0 ? void 0 : endIconProps.style) }, endIconProps), endIcon)))));
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return tooltip ? (React__default.createElement(Tooltip, __assign({ title: tooltip, placement: ifUndefined(tooltipPlacement, 'top'), arrow: true }, tooltipProps), content)) : (content);
});
var PdgButton$1 = React__default.memo(PdgButton);var PdgIconButton = React__default.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/
    var children = _a.children, className = _a.className, initSx = _a.sx, size = _a.size, initColor = _a.color, iconSize = _a.iconSize, iconProps = _a.iconProps, tooltip = _a.tooltip, tooltipPlacement = _a.tooltipPlacement, tooltipProps = _a.tooltipProps, fullWidth = _a.fullWidth, props = __rest(_a, ["children", "className", "sx", "size", "color", "iconSize", "iconProps", "tooltip", "tooltipPlacement", "tooltipProps", "fullWidth"]);
    var color = contains(['inherit', 'primary', 'secondary', 'error', 'info', 'success', 'warning'], initColor)
        ? initColor
        : undefined;
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    var content = (React__default.createElement(IconButton, __assign({ ref: ref, color: color, className: classNames('PdgIconButton', className), size: size, sx: __assign({ color: color ? undefined : initColor, width: fullWidth ? '100%' : undefined }, initSx) }, props),
        React__default.createElement(PdgIcon$1, __assign({}, iconProps, { size: ifUndefined(iconSize, size), className: classNames('PdgIconButton-Icon', iconProps === null || iconProps === void 0 ? void 0 : iconProps.className) }), children)));
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return tooltip ? (React__default.createElement(Tooltip, __assign({ title: tooltip, placement: ifUndefined(tooltipPlacement, 'top'), arrow: true }, tooltipProps), content)) : (content);
});
React__default.memo(PdgIconButton);/********************************************************************************************************************
 * Styled Component
 * ******************************************************************************************************************/
styled(Box)(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  margin-top: 20px;\n  font-size: 13px;\n  border: 1px solid black;\n  background-color: black;\n  color: #fff;\n  padding: 10px 13px;\n  opacity: 0.7;\n"], ["\n  margin-top: 20px;\n  font-size: 13px;\n  border: 1px solid black;\n  background-color: black;\n  color: #fff;\n  padding: 10px 13px;\n  opacity: 0.7;\n"])));
var templateObject_1$2;React__default.forwardRef(function (_a, ref) {
    var className = _a.className, _b = _a.row, row = _b === void 0 ? false : _b, spacing = _a.spacing, alignCenter = _a.alignCenter, justifyCenter = _a.justifyCenter, alignItems = _a.alignItems, justifyContent = _a.justifyContent, gap = _a.gap, props = __rest(_a, ["className", "row", "spacing", "alignCenter", "justifyCenter", "alignItems", "justifyContent", "gap"]);
    return (React__default.createElement(PdgBox, __assign({ ref: ref, className: classNames('PdgFlex', className), component: 'div', display: 'flex', flexDirection: row ? 'row' : 'column', alignItems: ifUndefined(alignItems, alignCenter ? 'center' : undefined), justifyContent: ifUndefined(justifyContent, justifyCenter ? 'center' : undefined), gap: ifUndefined(gap, spacing) }, props)));
});React__default.forwardRef(function (_a, ref) {
    var className = _a.className, spacing = _a.spacing, center = _a.center, centerVertical = _a.centerVertical, alignItems = _a.alignItems, justifyContent = _a.justifyContent, gap = _a.gap, props = __rest(_a, ["className", "spacing", "center", "centerVertical", "alignItems", "justifyContent", "gap"]);
    return (React__default.createElement(PdgBox, __assign({ ref: ref, className: classNames('PdgFlexColumnBox', className), component: 'div', display: 'flex', flexDirection: 'column', alignItems: ifUndefined(alignItems, center ? 'center' : undefined), justifyContent: ifUndefined(justifyContent, centerVertical ? 'center' : undefined), gap: ifUndefined(gap, spacing) }, props)));
});React__default.forwardRef(function (_a, ref) {
    var className = _a.className, row = _a.row, span = _a.span, inline = _a.inline, center = _a.center, centerJustifyContent = _a.centerJustifyContent, gap = _a.gap, spacing = _a.spacing, flexWrap = _a.flexWrap, wrap = _a.wrap, alignItems = _a.alignItems, justifyContent = _a.justifyContent, props = __rest(_a, ["className", "row", "span", "inline", "center", "centerJustifyContent", "gap", "spacing", "flexWrap", "wrap", "alignItems", "justifyContent"]);
    return (React__default.createElement(PdgBox, __assign({ ref: ref, className: classNames('PdgStack', className), component: span ? 'span' : 'div', display: inline ? 'inline-flex' : 'flex', flexDirection: row ? 'row' : 'column', alignItems: ifUndefined(alignItems, center ? 'center' : undefined), justifyContent: ifUndefined(justifyContent, centerJustifyContent ? 'center' : undefined), gap: ifUndefined(gap, spacing), flexWrap: ifUndefined(flexWrap, wrap ? 'wrap' : 'nowrap') }, props)));
});var PdgCopyToClipboard = function (_a) {
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var text = _a.text, options = _a.options, children = _a.children, onCopy = _a.onCopy, props = __rest(_a, ["text", "options", "children", "onCopy"]);
    var handleClick = useCallback(function (event) {
        var elem = React__default.Children.only(children);
        var result = copy(text, options);
        if (onCopy) {
            onCopy(text, result);
        }
        // Bypass onClick
        if (elem && elem.props && typeof elem.props.onClick === 'function') {
            elem.props.onClick(event);
        }
    }, [children, onCopy, options, text]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    var elem = React__default.Children.only(children);
    return React__default.cloneElement(elem, __assign(__assign({}, props), { onClick: handleClick }));
};var TableButton = React__default.forwardRef(function (_a, ref) {
    var children = _a.children, className = _a.className, initSx = _a.sx, _b = _a.variant, variant = _b === void 0 ? 'outlined' : _b, _c = _a.color, color = _c === void 0 ? 'primary' : _c, startIcon = _a.startIcon, endIcon = _a.endIcon, onClick = _a.onClick, props = __rest$2(_a, ["children", "className", "sx", "variant", "color", "startIcon", "endIcon", "onClick"]);
    return (React__default.createElement(PdgButton$1, __assign$3({ ref: ref, className: classNames(className, 'TableButton'), variant: variant, type: 'button', size: 'small', sx: __assign$3({ minWidth: 0, px: empty(startIcon) && empty(endIcon)
                ? '7px !important'
                : empty(children)
                    ? '5px !important'
                    : '7px !important' }, initSx), color: color, startIcon: startIcon, endIcon: endIcon, onClick: onClick }, props), children));
});
var TableButton$1 = React__default.memo(TableButton);var TableMenuButton = React__default.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    var children = _a.children, className = _a.className, initSx = _a.sx, _b = _a.color, color = _b === void 0 ? 'primary' : _b, _c = _a.variant, variant = _c === void 0 ? 'text' : _c, startIcon = _a.startIcon, _d = _a.placement, placement = _d === void 0 ? 'bottom' : _d, inModal = _a.inModal, zIndex = _a.zIndex, menuList = _a.menuList, props = __rest$2(_a, ["children", "className", "sx", "color", "variant", "startIcon", "placement", "inModal", "zIndex", "menuList"]);
    var buttonId = useId$1();
    var menuId = useId$1();
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/
    var _e = useTableState(), menuOpen = _e.menuOpen, openMenuId = _e.openMenuId, setMenuOpen = _e.setMenuOpen;
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var anchorRef = useRef(null);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _f = useState(false), open = _f[0], setOpen = _f[1];
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    useEffect(function () {
        if (open && menuOpen && openMenuId !== menuId) {
            setOpen(false);
        }
    }, [menuId, menuOpen, open, openMenuId]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
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
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var finalMenuList = useMemo(function () {
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
    var icon = !startIcon && !children ? 'MoreVert' : undefined;
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React__default.createElement("span", null,
        React__default.createElement(PdgButton$1, __assign$3({ ref: function (r) {
                if (ref) {
                    if (typeof ref === 'function') {
                        ref(r);
                    }
                    else {
                        ref.current = r;
                    }
                }
                anchorRef.current = r;
            }, id: buttonId, variant: variant, "aria-controls": open ? menuId : undefined, "aria-expanded": open ? 'true' : undefined, "aria-haspopup": 'true', className: classNames(className, 'TableMenuButton'), type: 'button', size: 'small', sx: __assign$3({ minWidth: 0, pl: !children ? 0.7 : icon || startIcon ? 0.7 : variant === 'text' ? 1.2 : 0.7 }, initSx), color: color, startIcon: icon, onClick: handleClick }, props), children),
        React__default.createElement(Popper, { className: 'TableMenuButton-Popper', open: open, anchorEl: anchorRef.current, role: undefined, placement: placement, transition: true, style: { zIndex: inModal ? (zIndex === undefined ? 1301 : zIndex) : zIndex } }, function (_a) {
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
            return (React__default.createElement(Grow, __assign$3({}, TransitionProps, { style: {
                    transformOrigin: transformOrigin,
                } }),
                React__default.createElement(Paper, null,
                    React__default.createElement(ClickAwayListener, { onClickAway: handleClose }, finalMenuList))));
        })));
});var Label = styled(Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject$1(["\n  font-size: 12px;\n  font-weight: bold;\n"], ["\n  font-size: 12px;\n  font-weight: bold;\n"])));
var ValueWrap = styled(Box)(templateObject_2 || (templateObject_2 = __makeTemplateObject$1(["\n  margin-top: 3px;\n  position: relative;\n  display: flex;\n  flex-direction: row;\n"], ["\n  margin-top: 3px;\n  position: relative;\n  display: flex;\n  flex-direction: row;\n"])));
var Value = styled('div')(templateObject_3 || (templateObject_3 = __makeTemplateObject$1(["\n  flex: 1;\n"], ["\n  flex: 1;\n"])));
var ValueEllipsis = styled('div')(templateObject_4 || (templateObject_4 = __makeTemplateObject$1(["\n  flex: 1;\n  position: relative;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"], ["\n  flex: 1;\n  position: relative;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"])));
var ValueClipboard = styled('div')(templateObject_5 || (templateObject_5 = __makeTemplateObject$1([""], [""])));
var ClipboardIconButton = styled(IconButton)(templateObject_6 || (templateObject_6 = __makeTemplateObject$1(["\n  margin-top: -10px;\n  margin-bottom: -10px;\n"], ["\n  margin-top: -10px;\n  margin-bottom: -10px;\n"])));
var Line = styled('div')(templateObject_7 || (templateObject_7 = __makeTemplateObject$1(["\n  border-top: 1px solid #efefef;\n  height: 1px;\n  flex: 1;\n"], ["\n  border-top: 1px solid #efefef;\n  height: 1px;\n  flex: 1;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;var InfoTable = function (_a) {
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var cols = _a.cols, _b = _a.spacing, spacing = _b === void 0 ? 2 : _b, columnSpacing = _a.columnSpacing, _c = _a.rowSpacing, rowSpacing = _c === void 0 ? 3 : _c, className = _a.className, style = _a.style, sx = _a.sx, labelClassName = _a.labelClassName, _d = _a.labelColor, labelColor = _d === void 0 ? 'primary' : _d, labelStyle = _a.labelStyle, labelSx = _a.labelSx, _e = _a.dividerColor, dividerColor = _e === void 0 ? 'gray' : _e, valueClassName = _a.valueClassName, valueStyle = _a.valueStyle, valueSx = _a.valueSx, ellipsis = _a.ellipsis, valueUnderline = _a.valueUnderline, info = _a.info, items = _a.items, onCopyToClipboard = _a.onCopyToClipboard;
    var renderItems = useMemo(function () {
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
            else if (notEmpty(data)) {
                switch (item.type) {
                    case 'number':
                        if (typeof data === 'string' || typeof data === 'number') {
                            data = numberFormat(data);
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
                            data = telNoAutoDash(data);
                        }
                        break;
                    case 'email':
                        if (typeof data === 'string') {
                            data = (React__default.createElement(React__default.Fragment, null,
                                React__default.createElement("a", { href: "mailto:".concat(data) }, data)));
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
                            data = businessNoAutoDash(data);
                        }
                        break;
                    case 'personal_no':
                        if (typeof data === 'string') {
                            data = personalNoAutoDash(data);
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
                            data = (React__default.createElement(React__default.Fragment, null,
                                React__default.createElement("span", null, dt.format('YYYY-MM-DD')),
                                item.dateTwoLine ? React__default.createElement("br", null) : ' ',
                                React__default.createElement("span", { style: { opacity: 0.5 } }, dt.format('HH:mm:ss'))));
                        }
                        break;
                    case 'date-hour':
                        if (typeof data === 'string' || typeof data === 'number') {
                            var dt = dayjs(data, item.dateFormat);
                            data = (React__default.createElement(React__default.Fragment, null,
                                React__default.createElement("span", null, dt.format('YYYY-MM-DD')),
                                item.dateTwoLine ? React__default.createElement("br", null) : ' ',
                                React__default.createElement("span", { style: { opacity: 0.5 } }, dt.format('HH시'))));
                        }
                        break;
                    case 'date-minute':
                        if (typeof data === 'string' || typeof data === 'number') {
                            var dt = dayjs(data, item.dateFormat);
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
    var content = useMemo(function () {
        return renderItems.map(function (_a, idx) {
            var item = _a.item, data = _a.data, copyToClipboardText = _a.copyToClipboardText, sizeProps = _a.sizeProps;
            var finalLabelColor = typographyColorToSxColor(item.type === 'divider' ? item.dividerColor || dividerColor : item.labelColor || labelColor);
            var finalLabelSx = combineSx(labelSx, item.labelSx, !!finalLabelColor && { color: finalLabelColor });
            var finalValueSx = combineSx(valueSx, item.valueSx);
            var valueUnderlineStyle = valueUnderline
                ? { borderBottom: '1px solid #efefef', paddingBottom: 5 }
                : undefined;
            return item.type === 'divider' ? (React__default.createElement(Grid, { key: idx, size: { xs: 12 } },
                React__default.createElement(Stack, { direction: 'row', spacing: 0.5, alignItems: 'center' },
                    item.icon && (React__default.createElement(PdgIcon$1, { sx: { color: item.dividerColor || dividerColor }, size: 'small' }, item.icon)),
                    item.label && (React__default.createElement(Label, { className: classNames(labelClassName, item.labelClassName), style: __assign$3(__assign$3({}, item.labelStyle), labelStyle), sx: finalLabelSx }, item.label)),
                    item.dividerLine && (React__default.createElement(React__default.Fragment, null, item.icon || item.label ? (React__default.createElement("div", { style: { flex: 1, paddingLeft: 5 } },
                        React__default.createElement(Line, null))) : (React__default.createElement(Line, null))))))) : (React__default.createElement(Grid, { key: idx, size: sizeProps, className: item.className, style: item.style, sx: item.sx },
                React__default.createElement(Stack, { direction: 'row', spacing: 0.5, alignItems: 'center' },
                    item.icon && (React__default.createElement(PdgIcon$1, { sx: { color: finalLabelColor }, size: 'small' }, "CalendarMonth")),
                    React__default.createElement(Label, { className: classNames(labelClassName, item.labelClassName), style: __assign$3(__assign$3({}, item.labelStyle), labelStyle), sx: finalLabelSx }, item.label)),
                React__default.createElement(ValueWrap, { className: classNames(valueClassName, item.valueClassName), style: __assign$3(__assign$3(__assign$3({}, valueStyle), item.valueStyle), valueUnderlineStyle), sx: finalValueSx },
                    item.ellipsis || ellipsis ? React__default.createElement(ValueEllipsis, null, data) : React__default.createElement(Value, null, data),
                    item.clipboard && notEmpty(copyToClipboardText) && (React__default.createElement(ValueClipboard, null,
                        React__default.createElement(PdgCopyToClipboard, { text: copyToClipboardText, onCopy: onCopyToClipboard ? function () { return onCopyToClipboard(item, copyToClipboardText); } : undefined },
                            React__default.createElement(ClipboardIconButton, __assign$3({ size: 'small', color: 'primary' }, item.clipboardProps),
                                React__default.createElement(PdgIcon$1, null, item.clipboardIcon || 'ContentPaste'))))))));
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
    return (React__default.createElement(Grid, { container: true, spacing: spacing, columnSpacing: columnSpacing, rowSpacing: rowSpacing, className: classNames('InfoTable', className), style: style, sx: sx }, content));
};export{InfoTable,SearchTable,Table,TableButton$1 as TableButton,TableMenuButton};