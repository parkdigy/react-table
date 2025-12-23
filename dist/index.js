'use strict';var compilerRuntime=require('react/compiler-runtime'),React=require('react'),classNames=require('classnames'),material=require('@mui/material'),dayjs=require('dayjs'),compare=require('@pdg/compare'),formatting=require('@pdg/formatting'),reactComponent=require('@pdg/react-component'),reactHook=require('@pdg/react-hook'),reactForm=require('@pdg/react-form'),core=require('@dnd-kit/core'),sortable=require('@dnd-kit/sortable'),SimpleBar=require('simplebar-react'),uuid=require('uuid'),reactIntersectionObserver=require('react-intersection-observer'),reactRouter=require('react-router');function _interopNamespaceDefault(e){var n=Object.create(null);if(e){Object.keys(e).forEach(function(k){if(k!=='default'){var d=Object.getOwnPropertyDescriptor(e,k);Object.defineProperty(n,k,d.get?d:{enumerable:true,get:function(){return e[k]}});}})}n.default=e;return Object.freeze(n)}var React__namespace=/*#__PURE__*/_interopNamespaceDefault(React);function insertStyle(css) {
    if (typeof window === 'undefined')
        return;
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}insertStyle(".simplebar-track.simplebar-vertical{width:8px !important}.simplebar-track.simplebar-vertical .simplebar-scrollbar.simplebar-visible:before{opacity:.3 !important}.PTable .PTableHead .PTableHeadRow th{position:relative;transform:translateY(-100%)}.PTable.sticky-header .PTableHead .PTableHeadRow th{position:sticky;transform:none}");function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = true,
      o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = true, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _taggedTemplateLiteral(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  }));
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}var _templateObject$4, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
var Label = material.styled(material.Box)(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteral(["\n  font-size: 12px;\n  font-weight: bold;\n"])));
var ValueWrap = material.styled(material.Box)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin-top: 3px;\n  position: relative;\n  display: flex;\n  flex-direction: row;\n"])));
var Value = material.styled('div')(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  flex: 1;\n"])));
var ValueEllipsis = material.styled('div')(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  flex: 1;\n  position: relative;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"])));
var ValueClipboard = material.styled('div')(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral([""])));
var ClipboardIconButton = material.styled(material.IconButton)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  margin-top: -10px;\n  margin-bottom: -10px;\n"])));
var Line = material.styled('div')(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  border-top: 1px solid #efefef;\n  height: 1px;\n  flex: 1;\n"])));function getTableColumnAlign(column, defaultAlign) {
  switch (column.type) {
    case 'number':
      return column.align ? column.align : 'right';
    default:
      return column.align || defaultAlign;
  }
}
function combineSx() {
  var finalSx = [];
  if (Array.isArray(finalSx)) {
    for (var _len = arguments.length, sx = new Array(_len), _key = 0; _key < _len; _key++) {
      sx[_key] = arguments[_key];
    }
    sx.forEach(function (v) {
      return v && finalSx.push.apply(finalSx, _toConsumableArray(Array.isArray(v) ? v : [v]));
    });
  }
  return finalSx;
}
function typographyColorToSxColor(color) {
  if (typeof color === 'string') {
    if (['primary', 'secondary', 'info', 'warning', 'error'].includes(color)) {
      return "".concat(color, ".main");
    } else if (color === 'text') {
      return 'text.primary';
    } else {
      return color;
    }
  } else {
    return color;
  }
}function PInfoTable(t0) {
  var $ = compilerRuntime.c(32);
  var cols = t0.cols,
    t1 = t0.spacing,
    columnSpacing = t0.columnSpacing,
    t2 = t0.rowSpacing,
    className = t0.className,
    style = t0.style,
    sx = t0.sx,
    labelClassName = t0.labelClassName,
    t3 = t0.labelColor,
    labelStyle = t0.labelStyle,
    labelSx = t0.labelSx,
    t4 = t0.dividerColor,
    valueClassName = t0.valueClassName,
    valueStyle = t0.valueStyle,
    valueSx = t0.valueSx,
    ellipsis = t0.ellipsis,
    valueUnderline = t0.valueUnderline,
    info = t0.info,
    items = t0.items,
    onCopyToClipboard = t0.onCopyToClipboard;
  var spacing = t1 === undefined ? 2 : t1;
  var rowSpacing = t2 === undefined ? 3 : t2;
  var labelColor = t3 === undefined ? "primary" : t3;
  var dividerColor = t4 === undefined ? "gray" : t4;
  var onCopyToClipboardRef = reactHook.useAutoUpdateRef(onCopyToClipboard);
  var t5;
  if ($[0] !== cols || $[1] !== info || $[2] !== items) {
    var _t;
    if ($[4] !== info) {
      _t = function _t(item) {
        return !!item && (!item.onHide || !item.onHide(info));
      };
      $[4] = info;
      $[5] = _t;
    } else {
      _t = $[5];
    }
    var _t2;
    if ($[6] !== cols || $[7] !== info) {
      _t2 = function _t2(item_0) {
        var data = undefined;
        if (item_0.name !== undefined) {
          if (info[item_0.name] !== undefined) {
            if (info[item_0.name] instanceof Date) {
              data = dayjs(info[item_0.name]).format("YYYY-MM-DD HH:mm:ss");
            } else {
              if (info[item_0.name] instanceof dayjs) {
                data = info[item_0.name].format("YYYY-MM-DD HH:mm:ss");
              } else {
                data = info[item_0.name];
              }
            }
          }
        }
        if (item_0.onRender) {
          data = item_0.onRender(info);
        } else {
          if (compare.notEmpty(data)) {
            bb45: switch (item_0.type) {
              case "number":
                {
                  if (typeof data === "string" || typeof data === "number") {
                    data = formatting.formatNumber(data);
                    if (item_0.numberPrefix) {
                      data = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
                        style: {
                          opacity: 0.5,
                          marginRight: 2
                        }
                      }, item_0.numberPrefix), data);
                    }
                    if (item_0.numberSuffix) {
                      data = /*#__PURE__*/React.createElement(React.Fragment, null, data, /*#__PURE__*/React.createElement("span", {
                        style: {
                          opacity: 0.5,
                          marginLeft: 2
                        }
                      }, item_0.numberSuffix));
                    }
                  }
                  break bb45;
                }
              case "tel":
                {
                  if (typeof data === "string") {
                    data = formatting.formatTelNo(data);
                  }
                  break bb45;
                }
              case "email":
                {
                  if (typeof data === "string") {
                    data = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("a", {
                      href: "mailto:".concat(data)
                    }, data));
                  }
                  break bb45;
                }
              case "url":
                {
                  if (typeof data === "string" && data.toLowerCase().startsWith("http")) {
                    data = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("a", {
                      href: data,
                      target: "_blank",
                      rel: "noreferrer"
                    }, data));
                  }
                  break bb45;
                }
              case "business_no":
                {
                  if (typeof data === "string") {
                    data = formatting.formatBusinessNo(data);
                  }
                  break bb45;
                }
              case "personal_no":
                {
                  if (typeof data === "string") {
                    data = formatting.formatPersonalNo(data);
                  }
                  break bb45;
                }
              case "date":
                {
                  if (typeof data === "string" || typeof data === "number") {
                    data = dayjs(data, item_0.dateFormat).format("YYYY-MM-DD");
                  }
                  break bb45;
                }
              case "datetime":
                {
                  if (typeof data === "string" || typeof data === "number") {
                    var dt_1 = dayjs(data, item_0.dateFormat);
                    data = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, dt_1.format("YYYY-MM-DD")), item_0.dateTwoLine ? /*#__PURE__*/React.createElement("br", null) : " ", /*#__PURE__*/React.createElement("span", {
                      style: {
                        opacity: 0.5
                      }
                    }, dt_1.format("HH:mm:ss")));
                  }
                  break bb45;
                }
              case "date-hour":
                {
                  if (typeof data === "string" || typeof data === "number") {
                    var dt_0 = dayjs(data, item_0.dateFormat);
                    data = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, dt_0.format("YYYY-MM-DD")), item_0.dateTwoLine ? /*#__PURE__*/React.createElement("br", null) : " ", /*#__PURE__*/React.createElement("span", {
                      style: {
                        opacity: 0.5
                      }
                    }, dt_0.format("HH\uC2DC")));
                  }
                  break bb45;
                }
              case "date-minute":
                {
                  if (typeof data === "string" || typeof data === "number") {
                    var dt = dayjs(data, item_0.dateFormat);
                    data = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, dt.format("YYYY-MM-DD")), item_0.dateTwoLine ? /*#__PURE__*/React.createElement("br", null) : " ", /*#__PURE__*/React.createElement("span", {
                      style: {
                        opacity: 0.5
                      }
                    }, dt.format("HH\uC2DC MM\uBD84")));
                  }
                }
            }
          }
        }
        if (compare.empty(data)) {
          data = item_0.onRenderEmpty ? item_0.onRenderEmpty(info) : /*#__PURE__*/React.createElement(React.Fragment, null, "\xA0");
        }
        var copyToClipboardText = item_0.clipboardText || (typeof data === "string" ? data : typeof data === "number" ? data.toString() : "");
        var sizeProps = {};
        if (typeof cols === "number") {
          sizeProps.xs = 12 / cols;
        } else {
          if (cols.xs) {
            sizeProps.xs = 12 / cols.xs;
          }
          if (cols.sm) {
            sizeProps.sm = 12 / cols.sm;
          }
          if (cols.md) {
            sizeProps.md = 12 / cols.md;
          }
          if (cols.lg) {
            sizeProps.lg = 12 / cols.lg;
          }
          if (cols.xl) {
            sizeProps.xl = 12 / cols.xl;
          }
        }
        if (item_0.xs) {
          sizeProps.xs = item_0.xs;
        }
        if (item_0.sm) {
          sizeProps.sm = item_0.sm;
        }
        if (item_0.md) {
          sizeProps.md = item_0.md;
        }
        if (item_0.lg) {
          sizeProps.lg = item_0.lg;
        }
        if (item_0.xl) {
          sizeProps.xl = item_0.xl;
        }
        if (item_0.onXs) {
          sizeProps.xs = item_0.onXs(info);
        }
        if (item_0.onSm) {
          sizeProps.sm = item_0.onSm(info);
        }
        if (item_0.onMd) {
          sizeProps.md = item_0.onMd(info);
        }
        if (item_0.onLg) {
          sizeProps.lg = item_0.onLg(info);
        }
        if (item_0.onXl) {
          sizeProps.xl = item_0.onXl(info);
        }
        return {
          item: item_0,
          data: data,
          copyToClipboardText: copyToClipboardText,
          sizeProps: sizeProps
        };
      };
      $[6] = cols;
      $[7] = info;
      $[8] = _t2;
    } else {
      _t2 = $[8];
    }
    t5 = items.filter(_t).map(_t2);
    $[0] = cols;
    $[1] = info;
    $[2] = items;
    $[3] = t5;
  } else {
    t5 = $[3];
  }
  var renderItems = t5;
  var t6;
  if ($[9] !== dividerColor || $[10] !== ellipsis || $[11] !== labelClassName || $[12] !== labelColor || $[13] !== labelStyle || $[14] !== labelSx || $[15] !== onCopyToClipboardRef || $[16] !== renderItems || $[17] !== valueClassName || $[18] !== valueStyle || $[19] !== valueSx || $[20] !== valueUnderline) {
    t6 = renderItems.map(function (t7, idx) {
      var item_1 = t7.item,
        data_0 = t7.data,
        copyToClipboardText_0 = t7.copyToClipboardText,
        sizeProps_0 = t7.sizeProps;
      var finalLabelColor = typographyColorToSxColor(item_1.type === "divider" ? item_1.dividerColor || dividerColor : item_1.labelColor || labelColor);
      var finalLabelSx = combineSx(labelSx, item_1.labelSx, !!finalLabelColor && {
        color: finalLabelColor
      });
      var finalValueSx = combineSx(valueSx, item_1.valueSx);
      var valueUnderlineStyle = valueUnderline ? {
        borderBottom: "1px solid #efefef",
        paddingBottom: 5
      } : undefined;
      return item_1.type === "divider" ? /*#__PURE__*/React.createElement(material.Grid, {
        key: idx,
        size: {
          xs: 12
        }
      }, /*#__PURE__*/React.createElement(material.Stack, {
        direction: "row",
        spacing: 0.5,
        alignItems: "center"
      }, item_1.icon && /*#__PURE__*/React.createElement(reactComponent.PIcon, {
        sx: {
          color: item_1.dividerColor || dividerColor
        },
        size: "small"
      }, item_1.icon), item_1.label && /*#__PURE__*/React.createElement(Label, {
        className: classNames(labelClassName, item_1.labelClassName),
        style: _objectSpread2(_objectSpread2({}, item_1.labelStyle), labelStyle),
        sx: finalLabelSx
      }, item_1.label), item_1.dividerLine && /*#__PURE__*/React.createElement(React.Fragment, null, item_1.icon || item_1.label ? /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1,
          paddingLeft: 5
        }
      }, /*#__PURE__*/React.createElement(Line, null)) : /*#__PURE__*/React.createElement(Line, null)))) : /*#__PURE__*/React.createElement(material.Grid, {
        key: idx,
        size: sizeProps_0,
        className: item_1.className,
        style: item_1.style,
        sx: item_1.sx
      }, /*#__PURE__*/React.createElement(material.Stack, {
        direction: "row",
        spacing: 0.5,
        alignItems: "center"
      }, item_1.icon && /*#__PURE__*/React.createElement(reactComponent.PIcon, {
        sx: {
          color: finalLabelColor
        },
        size: "small"
      }, "CalendarMonth"), /*#__PURE__*/React.createElement(Label, {
        className: classNames(labelClassName, item_1.labelClassName),
        style: _objectSpread2(_objectSpread2({}, item_1.labelStyle), labelStyle),
        sx: finalLabelSx
      }, item_1.label)), /*#__PURE__*/React.createElement(ValueWrap, {
        className: classNames(valueClassName, item_1.valueClassName),
        style: _objectSpread2(_objectSpread2(_objectSpread2({}, valueStyle), item_1.valueStyle), valueUnderlineStyle),
        sx: finalValueSx
      }, item_1.ellipsis || ellipsis ? /*#__PURE__*/React.createElement(ValueEllipsis, null, data_0) : /*#__PURE__*/React.createElement(Value, null, data_0), item_1.clipboard && compare.notEmpty(copyToClipboardText_0) && /*#__PURE__*/React.createElement(ValueClipboard, null, /*#__PURE__*/React.createElement(reactComponent.PCopyToClipboard, {
        text: copyToClipboardText_0,
        onCopy: function onCopy() {
          var _onCopyToClipboardRef;
          return (_onCopyToClipboardRef = onCopyToClipboardRef.current) === null || _onCopyToClipboardRef === void 0 ? void 0 : _onCopyToClipboardRef.call(onCopyToClipboardRef, item_1, copyToClipboardText_0);
        }
      }, /*#__PURE__*/React.createElement(ClipboardIconButton, _extends({
        size: "small",
        color: "primary"
      }, item_1.clipboardProps), /*#__PURE__*/React.createElement(reactComponent.PIcon, null, item_1.clipboardIcon || "ContentPaste"))))));
    });
    $[9] = dividerColor;
    $[10] = ellipsis;
    $[11] = labelClassName;
    $[12] = labelColor;
    $[13] = labelStyle;
    $[14] = labelSx;
    $[15] = onCopyToClipboardRef;
    $[16] = renderItems;
    $[17] = valueClassName;
    $[18] = valueStyle;
    $[19] = valueSx;
    $[20] = valueUnderline;
    $[21] = t6;
  } else {
    t6 = $[21];
  }
  var content = t6;
  var t7;
  if ($[22] !== className) {
    t7 = classNames("PInfoTable", className);
    $[22] = className;
    $[23] = t7;
  } else {
    t7 = $[23];
  }
  var t8;
  if ($[24] !== columnSpacing || $[25] !== content || $[26] !== rowSpacing || $[27] !== spacing || $[28] !== style || $[29] !== sx || $[30] !== t7) {
    t8 = /*#__PURE__*/React.createElement(material.Grid, {
      container: true,
      spacing: spacing,
      columnSpacing: columnSpacing,
      rowSpacing: rowSpacing,
      className: t7,
      style: style,
      sx: sx
    }, content);
    $[24] = columnSpacing;
    $[25] = content;
    $[26] = rowSpacing;
    $[27] = spacing;
    $[28] = style;
    $[29] = sx;
    $[30] = t7;
    $[31] = t8;
  } else {
    t8 = $[31];
  }
  return t8;
}function debounce$1(func, debounceMs, { signal, edges } = {}) {
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
}function debounce(func, debounceMs = 0, options = {}) {
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
    const _debounced = debounce$1(function (...args) {
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
}function throttle(func, throttleMs = 0, options = {}) {
    const { leading = true, trailing = true } = options;
    return debounce(func, throttleMs, {
        leading,
        maxWait: throttleMs,
        trailing,
    });
}/**
 * Wraps the resize callback with a es-toolkit debounce / throttle based on the refresh mode
 */
var patchResizeCallback = function patchResizeCallback(resizeCallback, refreshMode, refreshRate, refreshOptions) {
  switch (refreshMode) {
    case 'debounce':
      return debounce(resizeCallback, refreshRate, refreshOptions);
    case 'throttle':
      return throttle(resizeCallback, refreshRate, refreshOptions);
    default:
      return resizeCallback;
  }
};
/**
 * A custom hook that converts a callback to a ref to avoid triggering re-renders when passed as a
 * prop or avoid re-executing effects when passed as a dependency
 */
var useCallbackRef =
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useCallbackRef(callback) {
  var callbackRef = React__namespace.useRef(callback);
  React__namespace.useEffect(function () {
    callbackRef.current = callback;
  });
  return React__namespace.useMemo(function () {
    return function () {
      var _a2;
      var _a;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return (_a = callbackRef.current) === null || _a === void 0 ? void 0 : (_a2 = _a).call.apply(_a2, [callbackRef].concat(args));
    };
  }, []);
};
/** `useRef` hook doesn't handle conditional rendering or dynamic ref changes.
 * This hook creates a proxy that ensures that `refElement` is updated whenever the ref is changed. */
var useRefProxy =
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useRefProxy(targetRef) {
  // we are going to use this ref to store the last element that was passed to the hook
  var _React$useState = React__namespace.useState((targetRef === null || targetRef === void 0 ? void 0 : targetRef.current) || null),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    refElement = _React$useState2[0],
    setRefElement = _React$useState2[1];
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
  // this is a memo that will be called every time the ref is changed
  // This proxy will properly call setState either when the ref is called as a function or when `.current` is set
  // we call setState inside to trigger rerender
  var refProxy = React__namespace.useMemo(function () {
    return new Proxy(function (node) {
      if (node !== refElement) {
        setRefElement(node);
      }
    }, {
      get: function get(target, prop) {
        if (prop === 'current') {
          return refElement;
        }
        return target[prop];
      },
      set: function set(target, prop, value) {
        if (prop === 'current') {
          setRefElement(value);
        } else {
          target[prop] = value;
        }
        return true;
      }
    });
  }, [refElement]);
  return {
    refProxy: refProxy,
    refElement: refElement,
    setRefElement: setRefElement
  };
};
/** Calculates the dimensions of the element based on the current box model.
 * @see https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model
 */
var getDimensions = function getDimensions(entry, box) {
  // Value	          Border	  Padding	  Inner Content
  // ---------------------------------------------------
  // 'border-box'	    Yes	      Yes	      Yes
  // 'content-box'	  No	      No	      Yes
  //  undefined       No	      No?	      Yes
  var _a, _b;
  var borderBox = (_a = entry.borderBoxSize) === null || _a === void 0 ? void 0 : _a[0];
  var contentBox = (_b = entry.contentBoxSize) === null || _b === void 0 ? void 0 : _b[0];
  if (box === 'border-box' && borderBox) {
    return {
      width: borderBox.inlineSize,
      height: borderBox.blockSize
    };
  }
  if (box === 'content-box' && contentBox) {
    return {
      width: contentBox.inlineSize,
      height: contentBox.blockSize
    };
  }
  return {
    width: entry.contentRect.width,
    height: entry.contentRect.height
  };
};// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useResizeDetector() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$skipOnMount = _ref.skipOnMount,
    skipOnMount = _ref$skipOnMount === void 0 ? false : _ref$skipOnMount,
    refreshMode = _ref.refreshMode,
    _ref$refreshRate = _ref.refreshRate,
    refreshRate = _ref$refreshRate === void 0 ? 1000 : _ref$refreshRate,
    refreshOptions = _ref.refreshOptions,
    _ref$handleWidth = _ref.handleWidth,
    handleWidth = _ref$handleWidth === void 0 ? true : _ref$handleWidth,
    _ref$handleHeight = _ref.handleHeight,
    handleHeight = _ref$handleHeight === void 0 ? true : _ref$handleHeight,
    targetRef = _ref.targetRef,
    observerOptions = _ref.observerOptions,
    onResize = _ref.onResize,
    _ref$disableRerender = _ref.disableRerender,
    disableRerender = _ref$disableRerender === void 0 ? false : _ref$disableRerender;
  // If `skipOnMount` is enabled, skip the first resize event
  var skipResize = React.useRef(skipOnMount);
  // Wrap the `onResize` callback with a ref to avoid re-renders
  var onResizeRef = useCallbackRef(onResize);
  var _useState = React.useState({
      width: undefined,
      height: undefined
    }),
    _useState2 = _slicedToArray(_useState, 2),
    size = _useState2[0],
    setSize = _useState2[1];
  var sizeRef = React.useRef({
    width: undefined,
    height: undefined
  });
  // Create a proxy ref to handle conditional rendering and dynamic ref changes of the target element
  var _useRefProxy = useRefProxy(targetRef),
    refProxy = _useRefProxy.refProxy,
    refElement = _useRefProxy.refElement;
  var _ref2 = observerOptions || {},
    box = _ref2.box;
  var resizeCallback = React.useCallback(function (entries) {
    if (!handleWidth && !handleHeight) return;
    if (skipResize.current) {
      skipResize.current = false;
      return;
    }
    // Only update the size if one of the observed dimensions has changed
    var shouldSetSize = function shouldSetSize(prevSize, nextSize) {
      return handleWidth && prevSize.width !== nextSize.width || handleHeight && prevSize.height !== nextSize.height;
    };
    entries.forEach(function (entry) {
      var dimensions = getDimensions(entry, box);
      if (disableRerender) {
        if (shouldSetSize(sizeRef.current, dimensions)) {
          sizeRef.current.width = dimensions.width;
          sizeRef.current.height = dimensions.height;
          onResizeRef === null || onResizeRef === void 0 ? void 0 : onResizeRef({
            width: dimensions.width,
            height: dimensions.height,
            entry: entry
          });
        }
      } else {
        setSize(function (prevSize) {
          if (!shouldSetSize(prevSize, dimensions)) return prevSize;
          onResizeRef === null || onResizeRef === void 0 ? void 0 : onResizeRef({
            width: dimensions.width,
            height: dimensions.height,
            entry: entry
          });
          return dimensions;
        });
      }
    });
  }, [handleWidth, handleHeight, skipResize, box, disableRerender]);
  // Throttle/Debounce the resize event if refreshMode is configured
  var resizeHandler = React.useCallback(patchResizeCallback(resizeCallback, refreshMode, refreshRate, refreshOptions), [resizeCallback, refreshMode, refreshRate, refreshOptions]);
  // Attach ResizeObserver to the element
  React.useEffect(function () {
    var resizeObserver;
    if (refElement) {
      try {
        resizeObserver = new window.ResizeObserver(resizeHandler);
        resizeObserver.observe(refElement, observerOptions);
      } catch (error) {
        console.warn('ResizeObserver not supported or failed to initialize:', error);
      }
    }
    // If refElement is not available, reset the size
    else if (size.width || size.height) {
      onResizeRef === null || onResizeRef === void 0 ? void 0 : onResizeRef({
        width: null,
        height: null,
        entry: null
      });
      sizeRef.current.width = undefined;
      sizeRef.current.height = undefined;
      if (!disableRerender) {
        setSize({
          width: undefined,
          height: undefined
        });
      }
    }
    // Disconnect the ResizeObserver when the component is unmounted
    return function () {
      var _a, _b, _c;
      (_a = resizeObserver === null || resizeObserver === void 0 ? void 0 : resizeObserver.disconnect) === null || _a === void 0 ? void 0 : _a.call(resizeObserver);
      (_c = (_b = resizeHandler).cancel) === null || _c === void 0 ? void 0 : _c.call(_b);
    };
  }, [resizeHandler, refElement]);
  return Object.assign({
    ref: refProxy
  }, disableRerender ? sizeRef.current : size);
}var _templateObject$3;
var StyledBodyRow = material.styled(material.TableRow)(function (_ref) {
  var theme = _ref.theme;
  return {
    '&.odd-color:nth-of-type(odd):not(:hover)': {
      backgroundColor: material.lighten(theme.palette.action.hover, 0.4)
    },
    '&.even-color:nth-of-type(even):not(:hover)': {
      backgroundColor: material.lighten(theme.palette.action.hover, 0.4)
    }
  };
});
var StyledNoDataDiv = material.styled('div')(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteral(["\n  text-align: center;\n  padding: 30px 0;\n  font-weight: 500;\n  font-size: 13px;\n  color: #94a0b2;\n  opacity: 0.8;\n\n  .material-icons {\n    font-size: 40px;\n    margin-bottom: 5px;\n  }\n"])));var PTableContext = /*#__PURE__*/React.createContext({});function useTableState() {
  var value = React.useContext(PTableContext);
  if (compare.empty(value)) {
    throw new Error("useTableState should be used within TableContext.Provider");
  }
  return value;
}var _templateObject$2;
var StyledTableCell = material.styled(material.TableCell)(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral(["\n  &.ellipsis {\n    position: relative;\n    max-width: 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n"])));
function PTableCommonCell(t0) {
  var $ = compilerRuntime.c(69);
  var ref = t0.ref,
    children = t0.children,
    initClassName = t0.className,
    initStyle = t0.style,
    initSx = t0.sx,
    type = t0.type,
    column = t0.column,
    defaultAlign = t0.defaultAlign,
    initDefaultEllipsis = t0.defaultEllipsis,
    index = t0.index,
    item = t0.item,
    onClick = t0.onClick;
  var _useTableState = useTableState(),
    menuOpen = _useTableState.menuOpen;
  var t1;
  if ($[0] !== column || $[1] !== defaultAlign) {
    t1 = getTableColumnAlign(column, defaultAlign);
    $[0] = column;
    $[1] = defaultAlign;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  var align = t1;
  var ellipsis = type !== "head" && (column.ellipsis || column.type !== "img" && column.type !== "button" && column.type !== "buttons" && (column.ellipsis == null ? !!initDefaultEllipsis : false));
  var t2;
  if ($[3] !== align || $[4] !== ellipsis) {
    t2 = {
      align: align,
      ellipsis: ellipsis
    };
    $[3] = align;
    $[4] = ellipsis;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  var _t = t2,
    align_0 = _t.align,
    ellipsis_0 = _t.ellipsis;
  var t3;
  if ($[6] !== column || $[7] !== index || $[8] !== initClassName || $[9] !== item || $[10] !== type) {
    var className;
    var getClassName;
    bb0: switch (type) {
      case "head":
        {
          var _column$head, _column$head2, _column$head3;
          className = (_column$head = column.head) === null || _column$head === void 0 ? void 0 : _column$head.className;
          getClassName = (_column$head2 = column.head) !== null && _column$head2 !== void 0 && _column$head2.onGetClassName ? (_column$head3 = column.head) === null || _column$head3 === void 0 ? void 0 : _column$head3.onGetClassName() : undefined;
          break bb0;
        }
      case "body":
        {
          className = column.className;
          if (item != null && index != null) {
            var _t2;
            if ($[12] !== column || $[13] !== index || $[14] !== item) {
              _t2 = column.onGetClassName ? column.onGetClassName(item, index) : undefined;
              $[12] = column;
              $[13] = index;
              $[14] = item;
              $[15] = _t2;
            } else {
              _t2 = $[15];
            }
            getClassName = _t2;
          }
          break bb0;
        }
      case "footer":
        {
          var _column$footer, _column$footer2, _column$footer3;
          className = (_column$footer = column.footer) === null || _column$footer === void 0 ? void 0 : _column$footer.className;
          getClassName = (_column$footer2 = column.footer) !== null && _column$footer2 !== void 0 && _column$footer2.onGetClassName ? (_column$footer3 = column.footer) === null || _column$footer3 === void 0 ? void 0 : _column$footer3.onGetClassName() : undefined;
        }
    }
    if (className || getClassName) {
      t3 = classNames(initClassName, className, getClassName);
    } else {
      t3 = initClassName;
    }
    $[6] = column;
    $[7] = index;
    $[8] = initClassName;
    $[9] = item;
    $[10] = type;
    $[11] = t3;
  } else {
    t3 = $[11];
  }
  var className_0 = t3;
  var style;
  var getStyle;
  bb1: switch (type) {
    case "head":
      {
        var _t3;
        if ($[16] !== column.head) {
          var _column$head4, _column$head5, _column$head6;
          _t3 = (_column$head4 = column.head) !== null && _column$head4 !== void 0 && _column$head4.backgroundColor ? _objectSpread2(_objectSpread2({}, (_column$head5 = column.head) === null || _column$head5 === void 0 ? void 0 : _column$head5.style), {}, {
            backgroundColor: column.head.backgroundColor
          }) : (_column$head6 = column.head) === null || _column$head6 === void 0 ? void 0 : _column$head6.style;
          $[16] = column.head;
          $[17] = _t3;
        } else {
          _t3 = $[17];
        }
        style = _t3;
        var _t4;
        if ($[18] !== column.head) {
          var _column$head7, _column$head8;
          _t4 = (_column$head7 = column.head) !== null && _column$head7 !== void 0 && _column$head7.onGetStyle ? (_column$head8 = column.head) === null || _column$head8 === void 0 ? void 0 : _column$head8.onGetStyle() : undefined;
          $[18] = column.head;
          $[19] = _t4;
        } else {
          _t4 = $[19];
        }
        getStyle = _t4;
        break bb1;
      }
    case "body":
      {
        var _t5;
        if ($[20] !== column.backgroundColor || $[21] !== column.style) {
          _t5 = column.backgroundColor ? _objectSpread2(_objectSpread2({}, column.style), {}, {
            backgroundColor: column.backgroundColor
          }) : column.style;
          $[20] = column.backgroundColor;
          $[21] = column.style;
          $[22] = _t5;
        } else {
          _t5 = $[22];
        }
        style = _t5;
        if (item != null && index != null) {
          var _t6;
          if ($[23] !== column || $[24] !== index || $[25] !== item) {
            _t6 = column.onGetStyle ? column.onGetStyle(item, index) : undefined;
            $[23] = column;
            $[24] = index;
            $[25] = item;
            $[26] = _t6;
          } else {
            _t6 = $[26];
          }
          getStyle = _t6;
        }
        break bb1;
      }
    case "footer":
      {
        var _t7;
        if ($[27] !== column.footer) {
          var _column$footer4, _column$footer5, _column$footer6;
          _t7 = (_column$footer4 = column.footer) !== null && _column$footer4 !== void 0 && _column$footer4.backgroundColor ? _objectSpread2(_objectSpread2({}, (_column$footer5 = column.footer) === null || _column$footer5 === void 0 ? void 0 : _column$footer5.style), {}, {
            backgroundColor: column.footer.backgroundColor
          }) : (_column$footer6 = column.footer) === null || _column$footer6 === void 0 ? void 0 : _column$footer6.style;
          $[27] = column.footer;
          $[28] = _t7;
        } else {
          _t7 = $[28];
        }
        style = _t7;
        var _t8;
        if ($[29] !== column.footer) {
          var _column$footer7, _column$footer8;
          _t8 = (_column$footer7 = column.footer) !== null && _column$footer7 !== void 0 && _column$footer7.onGetStyle ? (_column$footer8 = column.footer) === null || _column$footer8 === void 0 ? void 0 : _column$footer8.onGetStyle() : undefined;
          $[29] = column.footer;
          $[30] = _t8;
        } else {
          _t8 = $[30];
        }
        getStyle = _t8;
      }
  }
  var t4 = type === "body" && (column.onClick || onClick) ? "pointer" : undefined;
  var t5;
  if ($[31] !== column.minWidth || $[32] !== column.paddingLeft || $[33] !== column.paddingRight || $[34] !== column.width || $[35] !== getStyle || $[36] !== initStyle || $[37] !== style || $[38] !== t4) {
    t5 = _objectSpread2(_objectSpread2(_objectSpread2({}, initStyle), {}, {
      width: column.width,
      minWidth: column.minWidth,
      cursor: t4,
      paddingLeft: column.paddingLeft,
      paddingRight: column.paddingRight
    }, style), getStyle);
    $[31] = column.minWidth;
    $[32] = column.paddingLeft;
    $[33] = column.paddingRight;
    $[34] = column.width;
    $[35] = getStyle;
    $[36] = initStyle;
    $[37] = style;
    $[38] = t4;
    $[39] = t5;
  } else {
    t5 = $[39];
  }
  var style_0 = t5;
  var t6;
  if ($[40] !== column || $[41] !== index || $[42] !== initSx || $[43] !== item || $[44] !== type) {
    bb2: {
      var sx;
      var getSx;
      var displaySx;
      bb3: switch (type) {
        case "head":
          {
            var _column$head9, _column$head0, _column$head1;
            sx = (_column$head9 = column.head) === null || _column$head9 === void 0 ? void 0 : _column$head9.sx;
            getSx = (_column$head0 = column.head) !== null && _column$head0 !== void 0 && _column$head0.onGetSx ? (_column$head1 = column.head) === null || _column$head1 === void 0 ? void 0 : _column$head1.onGetSx() : undefined;
            break bb3;
          }
        case "body":
          {
            sx = column.sx;
            if (item != null && index != null) {
              var _t9;
              if ($[46] !== column || $[47] !== index || $[48] !== item) {
                _t9 = column.onGetSx ? column.onGetSx(item, index) : undefined;
                $[46] = column;
                $[47] = index;
                $[48] = item;
                $[49] = _t9;
              } else {
                _t9 = $[49];
              }
              getSx = _t9;
            }
            break bb3;
          }
        case "footer":
          {
            var _column$footer9, _column$footer0, _column$footer1;
            sx = (_column$footer9 = column.footer) === null || _column$footer9 === void 0 ? void 0 : _column$footer9.sx;
            getSx = (_column$footer0 = column.footer) !== null && _column$footer0 !== void 0 && _column$footer0.onGetSx ? (_column$footer1 = column.footer) === null || _column$footer1 === void 0 ? void 0 : _column$footer1.onGetSx() : undefined;
          }
      }
      if (column.display) {
        var display = {};
        if (column.display.xs !== undefined) {
          display.xs = column.display.xs ? "table-cell" : "none";
        }
        if (column.display.sm !== undefined) {
          display.sm = column.display.sm ? "table-cell" : "none";
        }
        if (column.display.md !== undefined) {
          display.md = column.display.md ? "table-cell" : "none";
        }
        if (column.display.lg !== undefined) {
          display.lg = column.display.lg ? "table-cell" : "none";
        }
        if (column.display.xl !== undefined) {
          display.xl = column.display.xl ? "table-cell" : "none";
        }
        displaySx = {
          display: display
        };
      }
      var sxList = [];
      if (getSx) {
        sxList.push(getSx);
      }
      if (sx) {
        sxList.push(sx);
      }
      if (initSx) {
        sxList.push(initSx);
      }
      if (displaySx) {
        sxList.push(displaySx);
      }
      if (sxList.length > 0) {
        if (sxList.length === 1) {
          t6 = sxList[0];
          break bb2;
        } else {
          if (!sxList.find(_temp$4)) {
            t6 = sxList.reduce(_temp2$1, {});
            break bb2;
          }
        }
      }
      t6 = undefined;
    }
    $[40] = column;
    $[41] = index;
    $[42] = initSx;
    $[43] = item;
    $[44] = type;
    $[45] = t6;
  } else {
    t6 = $[45];
  }
  var sx_2 = t6;
  var t7;
  if ($[50] !== column || $[51] !== index || $[52] !== item || $[53] !== menuOpen || $[54] !== onClick || $[55] !== type) {
    t7 = function t7(e) {
      if (!menuOpen && column.type !== "check" && column.type !== "button" && column.type !== "buttons" && column.type !== "img") {
        e.stopPropagation();
        if (type === "body") {
          if (item != null && index != null) {
            if (column.onClick) {
              column.onClick(item, index);
            } else {
              if (onClick) {
                onClick(item, index);
              }
            }
          }
        }
      }
    };
    $[50] = column;
    $[51] = index;
    $[52] = item;
    $[53] = menuOpen;
    $[54] = onClick;
    $[55] = type;
    $[56] = t7;
  } else {
    t7 = $[56];
  }
  var handleClick = t7;
  var t8 = ellipsis_0 && "ellipsis";
  var t9 = column.type ? "column-type-".concat(column.type) : false;
  var t10;
  if ($[57] !== className_0 || $[58] !== t8 || $[59] !== t9) {
    t10 = classNames(className_0, "PTableCommonCell", t8, t9);
    $[57] = className_0;
    $[58] = t8;
    $[59] = t9;
    $[60] = t10;
  } else {
    t10 = $[60];
  }
  var t11 = type === "body" ? handleClick : undefined;
  var t12;
  if ($[61] !== align_0 || $[62] !== children || $[63] !== ref || $[64] !== style_0 || $[65] !== sx_2 || $[66] !== t10 || $[67] !== t11) {
    t12 = /*#__PURE__*/React.createElement(StyledTableCell, {
      ref: ref,
      align: align_0,
      className: t10,
      style: style_0,
      sx: sx_2,
      onClick: t11
    }, children);
    $[61] = align_0;
    $[62] = children;
    $[63] = ref;
    $[64] = style_0;
    $[65] = sx_2;
    $[66] = t10;
    $[67] = t11;
    $[68] = t12;
  } else {
    t12 = $[68];
  }
  return t12;
}
function _temp2$1(res, sx_0) {
  res = _objectSpread2(_objectSpread2({}, res), sx_0);
  return res;
}
function _temp$4(sx_1) {
  return _typeof(sx_1) !== "object";
}function PTableFooterCell(t0) {
  var _column$footer;
  var $ = compilerRuntime.c(7);
  var column = t0.column,
    items = t0.items,
    defaultAlign = t0.defaultAlign;
  var t1;
  if ((_column$footer = column.footer) !== null && _column$footer !== void 0 && _column$footer.onRender) {
    var _t;
    if ($[0] !== column.footer || $[1] !== items) {
      var _column$footer2;
      _t = (_column$footer2 = column.footer) === null || _column$footer2 === void 0 ? void 0 : _column$footer2.onRender(items);
      $[0] = column.footer;
      $[1] = items;
      $[2] = _t;
    } else {
      _t = $[2];
    }
    t1 = _t;
  } else {
    var _column$footer3;
    t1 = (_column$footer3 = column.footer) === null || _column$footer3 === void 0 ? void 0 : _column$footer3.value;
  }
  var data = t1;
  var t2;
  if ($[3] !== column || $[4] !== data || $[5] !== defaultAlign) {
    t2 = /*#__PURE__*/React.createElement(PTableCommonCell, {
      type: "head",
      className: "PTableFooterCell",
      column: column,
      defaultAlign: defaultAlign
    }, data);
    $[3] = column;
    $[4] = data;
    $[5] = defaultAlign;
    $[6] = t2;
  } else {
    t2 = $[6];
  }
  return t2;
}var PTablePagination = function PTablePagination(t0) {
  var $ = compilerRuntime.c(14);
  var className = t0.className,
    style = t0.style,
    sx = t0.sx,
    paging = t0.paging,
    align = t0.align,
    onChange = t0.onChange;
  var t1 = paging.last_page;
  var t2 = paging.current_page;
  var t3;
  if ($[0] !== className) {
    t3 = classNames("PTablePagination", className);
    $[0] = className;
    $[1] = t3;
  } else {
    t3 = $[1];
  }
  var t4;
  if ($[2] !== onChange) {
    t4 = function t4(e, page) {
      if (onChange) {
        onChange(page);
      }
    };
    $[2] = onChange;
    $[3] = t4;
  } else {
    t4 = $[3];
  }
  var t5;
  if ($[4] !== paging.current_page || $[5] !== paging.last_page || $[6] !== style || $[7] !== sx || $[8] !== t3 || $[9] !== t4) {
    t5 = /*#__PURE__*/React.createElement(material.Pagination, {
      count: t1,
      page: t2,
      color: "primary",
      className: t3,
      style: style,
      sx: sx,
      onChange: t4
    });
    $[4] = paging.current_page;
    $[5] = paging.last_page;
    $[6] = style;
    $[7] = sx;
    $[8] = t3;
    $[9] = t4;
    $[10] = t5;
  } else {
    t5 = $[10];
  }
  var t6;
  if ($[11] !== align || $[12] !== t5) {
    t6 = /*#__PURE__*/React.createElement(material.Stack, {
      alignItems: align
    }, t5);
    $[11] = align;
    $[12] = t5;
    $[13] = t6;
  } else {
    t6 = $[13];
  }
  return t6;
};function PTableContextProvider(t0) {
  var $ = compilerRuntime.c(3);
  var children = t0.children,
    value = t0.value;
  var t1 = value;
  var t2;
  if ($[0] !== children || $[1] !== t1) {
    t2 = /*#__PURE__*/React.createElement(PTableContext.Provider, {
      value: t1
    }, children);
    $[0] = children;
    $[1] = t1;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  return t2;
}var PTableTopHeadCaptionRow = material.styled(material.TableRow)(function (_ref) {
  var theme = _ref.theme;
  return {
    '> th': {
      backgroundColor: theme.palette.grey.A100,
      textAlign: 'center',
      fontWeight: 700
    }
  };
});function PTableHeadCell(t0) {
  var $ = compilerRuntime.c(40);
  var column = t0.column,
    items = t0.items,
    defaultAlign = t0.defaultAlign,
    top = t0.top,
    onCheckChange = t0.onCheckChange;
  var _useTableState = useTableState(),
    setHeadColumnChecked = _useTableState.setHeadColumnChecked,
    setHeadColumnCommands = _useTableState.setHeadColumnCommands;
  var _useState = React.useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    checked = _useState2[0],
    _setChecked = _useState2[1];
  var _useState3 = React.useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    checkDisabled = _useState4[0],
    _setCheckDisabled = _useState4[1];
  var t1;
  if ($[0] !== checked || $[1] !== column || $[2] !== setHeadColumnChecked) {
    t1 = function t1() {
      if (column.type === "check") {
        setHeadColumnChecked(column, checked);
      }
    };
    $[0] = checked;
    $[1] = column;
    $[2] = setHeadColumnChecked;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  var effectEvent = React.useEffectEvent(t1);
  var t2;
  if ($[4] !== effectEvent) {
    t2 = function t2() {
      effectEvent();
    };
    $[4] = effectEvent;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  var t3;
  if ($[6] !== checked || $[7] !== column) {
    t3 = [column, checked];
    $[6] = checked;
    $[7] = column;
    $[8] = t3;
  } else {
    t3 = $[8];
  }
  React.useEffect(t2, t3);
  var t4;
  if ($[9] !== column || $[10] !== setHeadColumnCommands) {
    t4 = function t4() {
      setHeadColumnCommands(column, {
        setChecked: function setChecked(checked_0) {
          if (column.type === "check") {
            _setChecked(checked_0);
          }
        },
        setCheckDisabled: function setCheckDisabled(checkDisabled_0) {
          if (column.type === "check") {
            _setCheckDisabled(checkDisabled_0);
          }
        }
      });
    };
    $[9] = column;
    $[10] = setHeadColumnCommands;
    $[11] = t4;
  } else {
    t4 = $[11];
  }
  var effectEvent_0 = React.useEffectEvent(t4);
  var t5;
  if ($[12] !== effectEvent_0) {
    t5 = function t5() {
      effectEvent_0();
    };
    $[12] = effectEvent_0;
    $[13] = t5;
  } else {
    t5 = $[13];
  }
  var t6;
  if ($[14] !== column) {
    t6 = [column];
    $[14] = column;
    $[15] = t6;
  } else {
    t6 = $[15];
  }
  React.useEffect(t5, t6);
  var t7;
  if (column.type === "check") {
    if (column.hideAllCheck) {
      var _column$head;
      if ((_column$head = column.head) !== null && _column$head !== void 0 && _column$head.onRender) {
        var _t;
        if ($[16] !== column.head || $[17] !== items) {
          var _column$head2;
          _t = (_column$head2 = column.head) === null || _column$head2 === void 0 ? void 0 : _column$head2.onRender(items);
          $[16] = column.head;
          $[17] = items;
          $[18] = _t;
        } else {
          _t = $[18];
        }
        t7 = _t;
      } else {
        if (typeof column.label === "string") {
          var _t2;
          if ($[19] !== column.label) {
            _t2 = /*#__PURE__*/React.createElement("div", {
              dangerouslySetInnerHTML: {
                __html: column.label
              }
            });
            $[19] = column.label;
            $[20] = _t2;
          } else {
            _t2 = $[20];
          }
          t7 = _t2;
        } else {
          t7 = column.label;
        }
      }
    } else {
      var _t3;
      if ($[21] !== column || $[22] !== onCheckChange) {
        _t3 = function _t3(e, newChecked) {
          _setChecked(newChecked);
          onCheckChange && onCheckChange(column, newChecked);
        };
        $[21] = column;
        $[22] = onCheckChange;
        $[23] = _t3;
      } else {
        _t3 = $[23];
      }
      var _t4;
      if ($[24] !== checkDisabled || $[25] !== checked || $[26] !== _t3) {
        _t4 = /*#__PURE__*/React.createElement(material.Checkbox, {
          checked: checked,
          disabled: checkDisabled,
          onChange: _t3
        });
        $[24] = checkDisabled;
        $[25] = checked;
        $[26] = _t3;
        $[27] = _t4;
      } else {
        _t4 = $[27];
      }
      t7 = _t4;
    }
  } else {
    var _column$head3;
    if ((_column$head3 = column.head) !== null && _column$head3 !== void 0 && _column$head3.onRender) {
      var _t5;
      if ($[28] !== column.head || $[29] !== items) {
        var _column$head4;
        _t5 = (_column$head4 = column.head) === null || _column$head4 === void 0 ? void 0 : _column$head4.onRender(items);
        $[28] = column.head;
        $[29] = items;
        $[30] = _t5;
      } else {
        _t5 = $[30];
      }
      t7 = _t5;
    } else {
      if (typeof column.label === "string") {
        var _t6;
        if ($[31] !== column.label) {
          _t6 = /*#__PURE__*/React.createElement("div", {
            dangerouslySetInnerHTML: {
              __html: column.label
            }
          });
          $[31] = column.label;
          $[32] = _t6;
        } else {
          _t6 = $[32];
        }
        t7 = _t6;
      } else {
        t7 = column.label;
      }
    }
  }
  var data = t7;
  var t8;
  if ($[33] !== top) {
    t8 = top !== undefined ? {
      top: top
    } : undefined;
    $[33] = top;
    $[34] = t8;
  } else {
    t8 = $[34];
  }
  var t9;
  if ($[35] !== column || $[36] !== data || $[37] !== defaultAlign || $[38] !== t8) {
    t9 = /*#__PURE__*/React.createElement(PTableCommonCell, {
      type: "head",
      className: "PTableHeadCell",
      style: t8,
      column: column,
      defaultAlign: defaultAlign
    }, data);
    $[35] = column;
    $[36] = data;
    $[37] = defaultAlign;
    $[38] = t8;
    $[39] = t9;
  } else {
    t9 = $[39];
  }
  return t9;
}var _templateObject$1;
var BottomLine = material.styled('div')(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n  height: 1px;\n  position: absolute;\n  left: 3px;\n  right: 3px;\n  bottom: 0;\n"])));
function PTableTopHead(t0) {
  var $ = compilerRuntime.c(46);
  var columns = t0.columns,
    items = t0.items,
    rows = t0.rows,
    caption = t0.caption,
    defaultAlign = t0.defaultAlign,
    onCheckChange = t0.onCheckChange;
  var theme = material.useTheme();
  var captionRef = React.useRef(null);
  var row1Ref = React.useRef(null);
  var row2Ref = React.useRef(null);
  var row3Ref = React.useRef(null);
  var t1;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t1 = {
      targetRef: captionRef,
      handleWidth: false,
      handleHeight: true
    };
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  var _useResizeDetector = useResizeDetector(t1),
    captionHeight = _useResizeDetector.height;
  var t2;
  if ($[1] === Symbol["for"]("react.memo_cache_sentinel")) {
    t2 = {
      targetRef: row1Ref,
      handleWidth: false,
      handleHeight: true
    };
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  var _useResizeDetector2 = useResizeDetector(t2),
    row1Height = _useResizeDetector2.height;
  var t3;
  if ($[2] === Symbol["for"]("react.memo_cache_sentinel")) {
    t3 = {
      targetRef: row2Ref,
      handleWidth: false,
      handleHeight: true
    };
    $[2] = t3;
  } else {
    t3 = $[2];
  }
  var _useResizeDetector3 = useResizeDetector(t3),
    row2Height = _useResizeDetector3.height;
  var t4;
  if ($[3] === Symbol["for"]("react.memo_cache_sentinel")) {
    t4 = {
      targetRef: row3Ref,
      handleWidth: false,
      handleHeight: true
    };
    $[3] = t4;
  } else {
    t4 = $[3];
  }
  var _useResizeDetector4 = useResizeDetector(t4),
    row3Height = _useResizeDetector4.height;
  var t5;
  if ($[4] !== columns.length || $[5] !== theme.palette.divider) {
    t5 = function t5(row, top) {
      var totalColumns = 0;
      var cells = row.map(function (info, idx) {
        if (info) {
          totalColumns = totalColumns + (info.colSpan || 1);
          return /*#__PURE__*/React.createElement(material.TableCell, {
            key: idx,
            colSpan: info.colSpan,
            align: info.align,
            style: {
              top: top,
              borderBottom: 0
            }
          }, info.label, info.label != null && /*#__PURE__*/React.createElement(BottomLine, {
            style: {
              backgroundColor: theme.palette.divider
            }
          }));
        }
      }).filter(_temp$3);
      if (totalColumns < columns.length) {
        cells.push(/*#__PURE__*/React.createElement(material.TableCell, {
          key: columns.length,
          colSpan: columns.length - cells.length,
          style: {
            top: top,
            borderBottom: 0
          }
        }));
      }
      return cells;
    };
    $[4] = columns.length;
    $[5] = theme.palette.divider;
    $[6] = t5;
  } else {
    t5 = $[6];
  }
  var makeRowCells = t5;
  var top_0 = (captionHeight || 0) + (row1Height || 0) + (row2Height || 0) + (row3Height || 0);
  var t6;
  if ($[7] !== columns || $[8] !== defaultAlign || $[9] !== items || $[10] !== onCheckChange || $[11] !== top_0) {
    var _t;
    if ($[13] !== defaultAlign || $[14] !== items || $[15] !== onCheckChange || $[16] !== top_0) {
      _t = function _t(column, idx_0) {
        return /*#__PURE__*/React.createElement(PTableHeadCell, {
          key: idx_0,
          column: column,
          items: items,
          defaultAlign: defaultAlign,
          top: top_0,
          onCheckChange: onCheckChange
        });
      };
      $[13] = defaultAlign;
      $[14] = items;
      $[15] = onCheckChange;
      $[16] = top_0;
      $[17] = _t;
    } else {
      _t = $[17];
    }
    t6 = columns.map(_t);
    $[7] = columns;
    $[8] = defaultAlign;
    $[9] = items;
    $[10] = onCheckChange;
    $[11] = top_0;
    $[12] = t6;
  } else {
    t6 = $[12];
  }
  var t7;
  if ($[18] !== t6) {
    t7 = /*#__PURE__*/React.createElement(material.TableRow, null, t6);
    $[18] = t6;
    $[19] = t7;
  } else {
    t7 = $[19];
  }
  var columnRow = t7;
  var t8;
  if ($[20] !== caption || $[21] !== columns.length) {
    t8 = !!caption && /*#__PURE__*/React.createElement(PTableTopHeadCaptionRow, {
      ref: captionRef,
      className: "PTableTopHeadCaptionRow"
    }, /*#__PURE__*/React.createElement(material.TableCell, {
      colSpan: columns.length
    }, caption));
    $[20] = caption;
    $[21] = columns.length;
    $[22] = t8;
  } else {
    t8 = $[22];
  }
  var captionRow = t8;
  var t9;
  if ($[23] !== captionHeight || $[24] !== makeRowCells || $[25] !== row1Height || $[26] !== row2Height || $[27] !== row3Height || $[28] !== rows) {
    t9 = rows && Array.isArray(rows[0]) && rows.map(function (row_0, idx_1) {
      var ref = undefined;
      var top_1 = undefined;
      bb52: switch (idx_1) {
        case 0:
          {
            ref = row1Ref;
            top_1 = captionHeight;
            break bb52;
          }
        case 1:
          {
            ref = row2Ref;
            top_1 = (captionHeight || 0) + (row1Height || 0);
            break bb52;
          }
        case 2:
          {
            ref = row3Ref;
            top_1 = (captionHeight || 0) + (row1Height || 0) + (row2Height || 0);
            break bb52;
          }
        case 3:
          {
            top_1 = (captionHeight || 0) + (row1Height || 0) + (row2Height || 0) + (row3Height || 0);
          }
      }
      return /*#__PURE__*/React.createElement(material.TableRow, {
        key: idx_1,
        ref: ref,
        className: "PTableHeadRow"
      }, makeRowCells(row_0, top_1));
    });
    $[23] = captionHeight;
    $[24] = makeRowCells;
    $[25] = row1Height;
    $[26] = row2Height;
    $[27] = row3Height;
    $[28] = rows;
    $[29] = t9;
  } else {
    t9 = $[29];
  }
  var tableRows = t9;
  if (rows) {
    if (Array.isArray(rows[0])) {
      var t10;
      if ($[30] !== captionRow || $[31] !== tableRows) {
        t10 = /*#__PURE__*/React.createElement(material.TableHead, {
          className: "PTableHead"
        }, captionRow, tableRows);
        $[30] = captionRow;
        $[31] = tableRows;
        $[32] = t10;
      } else {
        t10 = $[32];
      }
      return t10;
    } else {
      var _t2 = rows;
      var t11;
      if ($[33] !== captionHeight || $[34] !== makeRowCells || $[35] !== _t2) {
        t11 = makeRowCells(_t2, captionHeight);
        $[33] = captionHeight;
        $[34] = makeRowCells;
        $[35] = _t2;
        $[36] = t11;
      } else {
        t11 = $[36];
      }
      var t12;
      if ($[37] !== t11) {
        t12 = /*#__PURE__*/React.createElement(material.TableRow, {
          ref: row1Ref,
          className: "PTableHeadRow"
        }, t11);
        $[37] = t11;
        $[38] = t12;
      } else {
        t12 = $[38];
      }
      var t13;
      if ($[39] !== captionRow || $[40] !== columnRow || $[41] !== t12) {
        t13 = /*#__PURE__*/React.createElement(material.TableHead, {
          className: "PTableHead"
        }, captionRow, t12, columnRow);
        $[39] = captionRow;
        $[40] = columnRow;
        $[41] = t12;
        $[42] = t13;
      } else {
        t13 = $[42];
      }
      return t13;
    }
  } else {
    var _t3;
    if ($[43] !== captionRow || $[44] !== columnRow) {
      _t3 = /*#__PURE__*/React.createElement(material.TableHead, {
        className: "PTableHead"
      }, captionRow, columnRow);
      $[43] = captionRow;
      $[44] = columnRow;
      $[45] = _t3;
    } else {
      _t3 = $[45];
    }
    return _t3;
  }
}
function _temp$3(cell) {
  return !!cell;
}function makeSortableItems(items) {
  return items === null || items === void 0 ? void 0 : items.map(function (item, index) {
    return _objectSpread2({
      id: item.id == null ? "".concat(uuid.v4(), "_").concat(index) : item.id
    }, item);
  });
}var CSS = /*#__PURE__*/Object.freeze({
  Translate: {
    toString: function toString(transform) {
      if (!transform) {
        return;
      }
      var x = transform.x,
        y = transform.y;
      return "translate3d(" + (x ? Math.round(x) : 0) + "px, " + (y ? Math.round(y) : 0) + "px, 0)";
    }
  },
  Scale: {
    toString: function toString(transform) {
      if (!transform) {
        return;
      }
      var scaleX = transform.scaleX,
        scaleY = transform.scaleY;
      return "scaleX(" + scaleX + ") scaleY(" + scaleY + ")";
    }
  },
  Transform: {
    toString: function toString(transform) {
      if (!transform) {
        return;
      }
      return [CSS.Translate.toString(transform), CSS.Scale.toString(transform)].join(' ');
    }
  },
  Transition: {
    toString: function toString(_ref) {
      var property = _ref.property,
        duration = _ref.duration,
        easing = _ref.easing;
      return property + " " + duration + "ms " + easing;
    }
  }
});var _templateObject;
var StyledButtonsBox = material.styled(material.Box)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n"])));
function PTableBodyCell(t0) {
  var $ = compilerRuntime.c(107);
  var ref = t0.ref,
    className = t0.className,
    style = t0.style,
    sx = t0.sx,
    item = t0.item,
    index = t0.index,
    column = t0.column,
    defaultAlign = t0.defaultAlign,
    defaultEllipsis = t0.defaultEllipsis,
    onClick = t0.onClick,
    onCheckChange = t0.onCheckChange;
  var _useTableState = useTableState(),
    menuOpen = _useTableState.menuOpen,
    setItemColumnChecked = _useTableState.setItemColumnChecked,
    setItemColumnCheckDisabled = _useTableState.setItemColumnCheckDisabled,
    setItemColumnCommands = _useTableState.setItemColumnCommands;
  var _useState = React.useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    checked = _useState2[0],
    _setChecked = _useState2[1];
  var _useState3 = React.useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    checkDisabled = _useState4[0],
    _setCheckDisabled = _useState4[1];
  var t1;
  if ($[0] !== column || $[1] !== item || $[2] !== setItemColumnCommands) {
    t1 = function t1() {
      if (column.type === "check") {
        _setChecked(column.onInitChecked ? column.onInitChecked(item) : false);
        _setCheckDisabled(column.onCheckDisabled ? column.onCheckDisabled(item) : false);
      }
      setItemColumnCommands(item, column, {
        setChecked: function setChecked(checked_0) {
          if (column.type === "check") {
            _setChecked(checked_0);
          }
        },
        setCheckDisabled: function setCheckDisabled(disabled) {
          if (column.type === "check") {
            _setCheckDisabled(disabled);
          }
        }
      });
    };
    $[0] = column;
    $[1] = item;
    $[2] = setItemColumnCommands;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  var effectEvent = React.useEffectEvent(t1);
  var t2;
  if ($[4] !== effectEvent) {
    t2 = function t2() {
      effectEvent();
    };
    $[4] = effectEvent;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  var t3;
  if ($[6] !== column || $[7] !== item || $[8] !== setItemColumnCommands) {
    t3 = [column, item, setItemColumnCommands];
    $[6] = column;
    $[7] = item;
    $[8] = setItemColumnCommands;
    $[9] = t3;
  } else {
    t3 = $[9];
  }
  React.useEffect(t2, t3);
  var t4;
  if ($[10] !== checked || $[11] !== column || $[12] !== item || $[13] !== setItemColumnChecked) {
    t4 = function t4() {
      if (column.type === "check") {
        setItemColumnChecked(item, column, checked);
      }
    };
    $[10] = checked;
    $[11] = column;
    $[12] = item;
    $[13] = setItemColumnChecked;
    $[14] = t4;
  } else {
    t4 = $[14];
  }
  var effectEvent_0 = React.useEffectEvent(t4);
  var t5;
  if ($[15] !== effectEvent_0) {
    t5 = function t5() {
      effectEvent_0();
    };
    $[15] = effectEvent_0;
    $[16] = t5;
  } else {
    t5 = $[16];
  }
  var t6;
  if ($[17] !== checked) {
    t6 = [checked];
    $[17] = checked;
    $[18] = t6;
  } else {
    t6 = $[18];
  }
  React.useEffect(t5, t6);
  var t7;
  if ($[19] !== checkDisabled || $[20] !== column || $[21] !== item || $[22] !== setItemColumnCheckDisabled) {
    t7 = function t7() {
      if (column.type === "check") {
        setItemColumnCheckDisabled(item, column, checkDisabled);
        column.onCheckDisabledChange && column.onCheckDisabledChange(item, checkDisabled);
      }
    };
    $[19] = checkDisabled;
    $[20] = column;
    $[21] = item;
    $[22] = setItemColumnCheckDisabled;
    $[23] = t7;
  } else {
    t7 = $[23];
  }
  var effectEvent_1 = React.useEffectEvent(t7);
  var t8;
  if ($[24] !== effectEvent_1) {
    t8 = function t8() {
      effectEvent_1();
    };
    $[24] = effectEvent_1;
    $[25] = t8;
  } else {
    t8 = $[25];
  }
  var t9;
  if ($[26] !== checkDisabled) {
    t9 = [checkDisabled];
    $[26] = checkDisabled;
    $[27] = t9;
  } else {
    t9 = $[27];
  }
  React.useEffect(t8, t9);
  var t10;
  if ($[28] !== column || $[29] !== index || $[30] !== item) {
    t10 = column.onHide ? column.onHide(item, index) : false;
    $[28] = column;
    $[29] = index;
    $[30] = item;
    $[31] = t10;
  } else {
    t10 = $[31];
  }
  var isHidden = t10;
  var t11;
  bb0: switch (getTableColumnAlign(column, defaultAlign)) {
    case "center":
      {
        t11 = "center";
        break bb0;
      }
    case "right":
      {
        t11 = "end";
        break bb0;
      }
    default:
      {
        t11 = "start";
      }
  }
  var buttonsBoxJustifyContent = t11;
  var newData;
  if ($[32] !== buttonsBoxJustifyContent || $[33] !== checkDisabled || $[34] !== checked || $[35] !== column || $[36] !== index || $[37] !== item || $[38] !== menuOpen || $[39] !== onCheckChange) {
    if (column.type !== "check") {
      if (column.onRender) {
        newData = column.onRender(item, index);
      } else {
        if (column.name) {
          newData = item[column.name];
        } else {
          newData = undefined;
        }
      }
    }
    bb1: switch (column.type) {
      case "number":
        {
          if (typeof newData === "string" || typeof newData === "number") {
            newData = formatting.formatNumber(newData);
          }
          if (column.numberPrefix) {
            var _t;
            if ($[41] === Symbol["for"]("react.memo_cache_sentinel")) {
              _t = {
                opacity: 0.5,
                marginRight: 2
              };
              $[41] = _t;
            } else {
              _t = $[41];
            }
            var _t2;
            if ($[42] !== column.numberPrefix) {
              _t2 = /*#__PURE__*/React.createElement("span", {
                style: _t
              }, column.numberPrefix);
              $[42] = column.numberPrefix;
              $[43] = _t2;
            } else {
              _t2 = $[43];
            }
            newData = /*#__PURE__*/React.createElement(React.Fragment, null, _t2, newData);
          }
          if (column.numberSuffix) {
            var _t3;
            if ($[44] === Symbol["for"]("react.memo_cache_sentinel")) {
              _t3 = {
                opacity: 0.5,
                marginLeft: 2
              };
              $[44] = _t3;
            } else {
              _t3 = $[44];
            }
            var _t4;
            if ($[45] !== column.numberSuffix) {
              _t4 = /*#__PURE__*/React.createElement("span", {
                style: _t3
              }, column.numberSuffix);
              $[45] = column.numberSuffix;
              $[46] = _t4;
            } else {
              _t4 = $[46];
            }
            newData = /*#__PURE__*/React.createElement(React.Fragment, null, newData, _t4);
          }
          break bb1;
        }
      case "tel":
        {
          if (typeof newData === "string") {
            newData = formatting.formatTelNo(newData);
          }
          break bb1;
        }
      case "business_no":
        {
          if (typeof newData === "string") {
            newData = formatting.formatBusinessNo(newData);
          }
          break bb1;
        }
      case "personal_no":
        {
          if (typeof newData === "string") {
            newData = formatting.formatPersonalNo(newData);
          }
          break bb1;
        }
      case "check":
        {
          var _t5 = menuOpen ? undefined : _temp$2;
          var _t6;
          if ($[47] !== column || $[48] !== item || $[49] !== onCheckChange) {
            _t6 = function _t6(e_3, newChecked) {
              var _column$onCheckChange;
              _setChecked(newChecked);
              (_column$onCheckChange = column.onCheckChange) === null || _column$onCheckChange === void 0 || _column$onCheckChange.call(column, item, newChecked);
              onCheckChange(item, column, newChecked);
            };
            $[47] = column;
            $[48] = item;
            $[49] = onCheckChange;
            $[50] = _t6;
          } else {
            _t6 = $[50];
          }
          var _t7;
          if ($[51] !== checkDisabled || $[52] !== checked || $[53] !== _t6) {
            _t7 = /*#__PURE__*/React.createElement(material.Checkbox, {
              checked: checked,
              disabled: checkDisabled,
              onChange: _t6
            });
            $[51] = checkDisabled;
            $[52] = checked;
            $[53] = _t6;
            $[54] = _t7;
          } else {
            _t7 = $[54];
          }
          var _t8;
          if ($[55] !== _t5 || $[56] !== _t7) {
            _t8 = /*#__PURE__*/React.createElement(material.Box, {
              className: "PTableBoxyCell-check-box",
              onClick: _t5
            }, _t7);
            $[55] = _t5;
            $[56] = _t7;
            $[57] = _t8;
          } else {
            _t8 = $[57];
          }
          newData = _t8;
          break bb1;
        }
      case "button":
        {
          newData = /*#__PURE__*/React.createElement(material.Box, {
            className: "PTableBoxyCell-button-box",
            onClick: menuOpen ? undefined : _temp2
          }, newData);
          break bb1;
        }
      case "buttons":
        {
          newData = /*#__PURE__*/React.createElement(StyledButtonsBox, {
            className: "PTableBodyCell-buttons-box",
            justifyContent: buttonsBoxJustifyContent,
            onClick: menuOpen ? undefined : _temp3
          }, newData);
          break bb1;
        }
      case "img":
        {
          var _column$tooltipProps, _column$tooltipProps2;
          var _t9;
          if ($[58] === Symbol["for"]("react.memo_cache_sentinel")) {
            _t9 = {
              maxWidth: "100%",
              verticalAlign: "middle"
            };
            $[58] = _t9;
          } else {
            _t9 = $[58];
          }
          var img = /*#__PURE__*/React.createElement("img", {
            src: newData,
            style: _t9,
            alt: ""
          });
          var placement = (_column$tooltipProps = column.tooltipProps) !== null && _column$tooltipProps !== void 0 && _column$tooltipProps.placement ? (_column$tooltipProps2 = column.tooltipProps) === null || _column$tooltipProps2 === void 0 ? void 0 : _column$tooltipProps2.placement : "left";
          var _t0 = newData;
          var _t1 = menuOpen ? undefined : _temp4;
          var _t10;
          if ($[59] === Symbol["for"]("react.memo_cache_sentinel")) {
            _t10 = {
              paddingTop: 3,
              paddingBottom: 3
            };
            $[59] = _t10;
          } else {
            _t10 = $[59];
          }
          var _t11;
          if ($[60] !== img) {
            _t11 = /*#__PURE__*/React.createElement("div", {
              style: _t10
            }, img);
            $[60] = img;
            $[61] = _t11;
          } else {
            _t11 = $[61];
          }
          var t17;
          if ($[62] !== column.tooltipProps || $[63] !== img || $[64] !== placement || $[65] !== _t11) {
            t17 = /*#__PURE__*/React.createElement(material.Tooltip, _extends({
              className: "PTableBodyCell-tooltip",
              title: _t11
            }, column.tooltipProps, {
              placement: placement
            }), img);
            $[62] = column.tooltipProps;
            $[63] = img;
            $[64] = placement;
            $[65] = _t11;
            $[66] = t17;
          } else {
            t17 = $[66];
          }
          var t18;
          if ($[67] !== _t0 || $[68] !== _t1 || $[69] !== t17) {
            t18 = /*#__PURE__*/React.createElement("a", {
              href: _t0,
              target: "_blank",
              rel: "noreferrer",
              onClick: _t1
            }, t17);
            $[67] = _t0;
            $[68] = _t1;
            $[69] = t17;
            $[70] = t18;
          } else {
            t18 = $[70];
          }
          newData = t18;
          break bb1;
        }
      case "date":
        {
          if (newData) {
            newData = dayjs(newData, column.dateFormat).format("YYYY-MM-DD");
          }
          break bb1;
        }
      case "datetime":
        {
          if (newData) {
            var dt_1 = dayjs(newData, column.dateFormat);
            var _t12;
            if ($[71] !== column.dateTwoLine) {
              _t12 = column.dateTwoLine ? /*#__PURE__*/React.createElement("br", null) : " ";
              $[71] = column.dateTwoLine;
              $[72] = _t12;
            } else {
              _t12 = $[72];
            }
            var _t13;
            if ($[73] === Symbol["for"]("react.memo_cache_sentinel")) {
              _t13 = {
                opacity: 0.5
              };
              $[73] = _t13;
            } else {
              _t13 = $[73];
            }
            newData = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, dt_1.format("YYYY-MM-DD")), _t12, /*#__PURE__*/React.createElement("span", {
              style: _t13
            }, dt_1.format("HH:mm:ss")));
          }
          break bb1;
        }
      case "date-hour":
        {
          if (newData) {
            var dt_0 = dayjs(newData, column.dateFormat);
            var _t14;
            if ($[74] !== column.dateTwoLine) {
              _t14 = column.dateTwoLine ? /*#__PURE__*/React.createElement("br", null) : " ";
              $[74] = column.dateTwoLine;
              $[75] = _t14;
            } else {
              _t14 = $[75];
            }
            var _t15;
            if ($[76] === Symbol["for"]("react.memo_cache_sentinel")) {
              _t15 = {
                opacity: 0.5
              };
              $[76] = _t15;
            } else {
              _t15 = $[76];
            }
            newData = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, dt_0.format("YYYY-MM-DD")), _t14, /*#__PURE__*/React.createElement("span", {
              style: _t15
            }, dt_0.format("HH\uC2DC")));
          }
          break bb1;
        }
      case "date-minute":
        {
          if (newData) {
            var dt = dayjs(newData, column.dateFormat);
            var _t16;
            if ($[77] !== column.dateTwoLine) {
              _t16 = column.dateTwoLine ? /*#__PURE__*/React.createElement("br", null) : " ";
              $[77] = column.dateTwoLine;
              $[78] = _t16;
            } else {
              _t16 = $[78];
            }
            var _t17;
            if ($[79] === Symbol["for"]("react.memo_cache_sentinel")) {
              _t17 = {
                opacity: 0.5
              };
              $[79] = _t17;
            } else {
              _t17 = $[79];
            }
            newData = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, dt.format("YYYY-MM-DD")), _t16, /*#__PURE__*/React.createElement("span", {
              style: _t17
            }, dt.format("HH\uC2DC MM\uBD84")));
          }
        }
    }
    $[32] = buttonsBoxJustifyContent;
    $[33] = checkDisabled;
    $[34] = checked;
    $[35] = column;
    $[36] = index;
    $[37] = item;
    $[38] = menuOpen;
    $[39] = onCheckChange;
    $[40] = newData;
  } else {
    newData = $[40];
  }
  if (column.type !== "img") {
    var tooltip;
    if (column.onGetTooltip) {
      var _t18;
      if ($[80] !== column || $[81] !== index || $[82] !== item) {
        _t18 = column.onGetTooltip(item, index);
        $[80] = column;
        $[81] = index;
        $[82] = item;
        $[83] = _t18;
      } else {
        _t18 = $[83];
      }
      tooltip = _t18;
    }
    if (tooltip) {
      var _t19;
      if ($[84] !== newData) {
        _t19 = /*#__PURE__*/React.isValidElement(newData) ? newData.type === React.Fragment ? /*#__PURE__*/React.createElement("span", null, newData) : newData : /*#__PURE__*/React.createElement("span", null, newData);
        $[84] = newData;
        $[85] = _t19;
      } else {
        _t19 = $[85];
      }
      var _t20;
      if ($[86] !== column.tooltipProps || $[87] !== _t19 || $[88] !== tooltip) {
        _t20 = /*#__PURE__*/React.createElement(material.Tooltip, _extends({
          className: "PTableBodyCell-tooltip",
          title: tooltip
        }, column.tooltipProps), _t19);
        $[86] = column.tooltipProps;
        $[87] = _t19;
        $[88] = tooltip;
        $[89] = _t20;
      } else {
        _t20 = $[89];
      }
      newData = _t20;
    }
  }
  var data = newData;
  var t12;
  if ($[90] !== column || $[91] !== onClick) {
    t12 = function t12(item_0, index_0) {
      if (column.onClick) {
        column.onClick(item_0, index_0);
      } else {
        if (onClick) {
          onClick(item_0, index_0);
        }
      }
    };
    $[90] = column;
    $[91] = onClick;
    $[92] = t12;
  } else {
    t12 = $[92];
  }
  var handleClick = t12;
  var t13;
  if ($[93] !== className) {
    t13 = classNames("PTableBodyCell", className);
    $[93] = className;
    $[94] = t13;
  } else {
    t13 = $[94];
  }
  var t14 = column.onClick || onClick ? handleClick : undefined;
  var t15 = !isHidden && data;
  var t16;
  if ($[95] !== column || $[96] !== defaultAlign || $[97] !== defaultEllipsis || $[98] !== index || $[99] !== item || $[100] !== ref || $[101] !== style || $[102] !== sx || $[103] !== t13 || $[104] !== t14 || $[105] !== t15) {
    t16 = /*#__PURE__*/React.createElement(PTableCommonCell, {
      ref: ref,
      type: "body",
      className: t13,
      style: style,
      sx: sx,
      column: column,
      defaultAlign: defaultAlign,
      defaultEllipsis: defaultEllipsis,
      item: item,
      index: index,
      onClick: t14
    }, t15);
    $[95] = column;
    $[96] = defaultAlign;
    $[97] = defaultEllipsis;
    $[98] = index;
    $[99] = item;
    $[100] = ref;
    $[101] = style;
    $[102] = sx;
    $[103] = t13;
    $[104] = t14;
    $[105] = t15;
    $[106] = t16;
  } else {
    t16 = $[106];
  }
  return t16;
}
function _temp4(e) {
  e.stopPropagation();
}
function _temp3(e_0) {
  return e_0.stopPropagation();
}
function _temp2(e_1) {
  return e_1.stopPropagation();
}
function _temp$2(e_2) {
  return e_2.stopPropagation();
}var _excluded$3 = ["className", "style", "id", "index", "defaultAlign", "defaultEllipsis", "sortable", "columns", "item", "onClick", "onCheckChange", "onGetColumnClassName", "onGetColumnStyle", "onGetColumnSx"];
var PStyledBodyRow = material.styled(material.TableRow)(function (_ref) {
  var theme = _ref.theme;
  return {
    '&.odd-color:nth-of-type(odd):not(:hover)': {
      backgroundColor: material.lighten(theme.palette.action.hover, 0.4)
    },
    '&.even-color:nth-of-type(even):not(:hover)': {
      backgroundColor: material.lighten(theme.palette.action.hover, 0.4)
    }
  };
});
function PTableBodyRow(t0) {
  var $ = compilerRuntime.c(57);
  var className;
  var columns;
  var defaultAlign;
  var defaultEllipsis;
  var id;
  var index;
  var initStyle;
  var item;
  var onCheckChange;
  var onClick;
  var onGetColumnClassName;
  var onGetColumnStyle;
  var onGetColumnSx;
  var props;
  var sortable$1;
  if ($[0] !== t0) {
    var _t = t0;
    className = _t.className;
    initStyle = _t.style;
    id = _t.id;
    index = _t.index;
    defaultAlign = _t.defaultAlign;
    defaultEllipsis = _t.defaultEllipsis;
    sortable$1 = _t.sortable;
    columns = _t.columns;
    item = _t.item;
    onClick = _t.onClick;
    onCheckChange = _t.onCheckChange;
    onGetColumnClassName = _t.onGetColumnClassName;
    onGetColumnStyle = _t.onGetColumnStyle;
    onGetColumnSx = _t.onGetColumnSx;
    props = _objectWithoutProperties(_t, _excluded$3);
    $[0] = t0;
    $[1] = className;
    $[2] = columns;
    $[3] = defaultAlign;
    $[4] = defaultEllipsis;
    $[5] = id;
    $[6] = index;
    $[7] = initStyle;
    $[8] = item;
    $[9] = onCheckChange;
    $[10] = onClick;
    $[11] = onGetColumnClassName;
    $[12] = onGetColumnStyle;
    $[13] = onGetColumnSx;
    $[14] = props;
    $[15] = sortable$1;
  } else {
    className = $[1];
    columns = $[2];
    defaultAlign = $[3];
    defaultEllipsis = $[4];
    id = $[5];
    index = $[6];
    initStyle = $[7];
    item = $[8];
    onCheckChange = $[9];
    onClick = $[10];
    onGetColumnClassName = $[11];
    onGetColumnStyle = $[12];
    onGetColumnSx = $[13];
    props = $[14];
    sortable$1 = $[15];
  }
  var t1;
  if ($[16] !== id) {
    t1 = {
      id: id
    };
    $[16] = id;
    $[17] = t1;
  } else {
    t1 = $[17];
  }
  var _useSortable = sortable.useSortable(t1),
    attributes = _useSortable.attributes,
    listeners = _useSortable.listeners,
    setNodeRef = _useSortable.setNodeRef,
    transform = _useSortable.transform,
    transition = _useSortable.transition;
  var t2;
  if ($[18] !== attributes || $[19] !== listeners || $[20] !== setNodeRef || $[21] !== sortable$1) {
    t2 = sortable$1 ? _objectSpread2(_objectSpread2({
      ref: setNodeRef
    }, attributes), listeners) : {};
    $[18] = attributes;
    $[19] = listeners;
    $[20] = setNodeRef;
    $[21] = sortable$1;
    $[22] = t2;
  } else {
    t2 = $[22];
  }
  var sortableProps = t2;
  var t3;
  if ($[23] !== initStyle || $[24] !== sortable$1 || $[25] !== transform || $[26] !== transition) {
    t3 = sortable$1 ? _objectSpread2(_objectSpread2({}, initStyle), {}, {
      transform: CSS.Transform.toString(transform),
      transition: transition
    }) : initStyle;
    $[23] = initStyle;
    $[24] = sortable$1;
    $[25] = transform;
    $[26] = transition;
    $[27] = t3;
  } else {
    t3 = $[27];
  }
  var style = t3;
  var t4;
  if ($[28] !== columns || $[29] !== defaultAlign || $[30] !== defaultEllipsis || $[31] !== index || $[32] !== item || $[33] !== onCheckChange || $[34] !== onClick || $[35] !== onGetColumnClassName || $[36] !== onGetColumnStyle || $[37] !== onGetColumnSx) {
    var _t2;
    if ($[39] !== defaultAlign || $[40] !== defaultEllipsis || $[41] !== index || $[42] !== item || $[43] !== onCheckChange || $[44] !== onClick || $[45] !== onGetColumnClassName || $[46] !== onGetColumnStyle || $[47] !== onGetColumnSx) {
      _t2 = function _t2(column, columnIdx) {
        return /*#__PURE__*/React.createElement(PTableBodyCell, {
          className: onGetColumnClassName ? onGetColumnClassName(column, item, index) : undefined,
          sx: onGetColumnSx ? onGetColumnSx(column, item, index) : undefined,
          style: onGetColumnStyle ? onGetColumnStyle(column, item, index) : undefined,
          key: columnIdx,
          index: index,
          item: item,
          defaultAlign: defaultAlign,
          defaultEllipsis: defaultEllipsis,
          column: column,
          onClick: onClick,
          onCheckChange: onCheckChange
        });
      };
      $[39] = defaultAlign;
      $[40] = defaultEllipsis;
      $[41] = index;
      $[42] = item;
      $[43] = onCheckChange;
      $[44] = onClick;
      $[45] = onGetColumnClassName;
      $[46] = onGetColumnStyle;
      $[47] = onGetColumnSx;
      $[48] = _t2;
    } else {
      _t2 = $[48];
    }
    t4 = columns.map(_t2);
    $[28] = columns;
    $[29] = defaultAlign;
    $[30] = defaultEllipsis;
    $[31] = index;
    $[32] = item;
    $[33] = onCheckChange;
    $[34] = onClick;
    $[35] = onGetColumnClassName;
    $[36] = onGetColumnStyle;
    $[37] = onGetColumnSx;
    $[38] = t4;
  } else {
    t4 = $[38];
  }
  var cellList = t4;
  var t5;
  if ($[49] !== className) {
    t5 = classNames("PTableBodyRow", className);
    $[49] = className;
    $[50] = t5;
  } else {
    t5 = $[50];
  }
  var t6;
  if ($[51] !== cellList || $[52] !== props || $[53] !== sortableProps || $[54] !== style || $[55] !== t5) {
    t6 = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PStyledBodyRow, _extends({
      className: t5,
      style: style
    }, props, sortableProps), cellList));
    $[51] = cellList;
    $[52] = props;
    $[53] = sortableProps;
    $[54] = style;
    $[55] = t5;
    $[56] = t6;
  } else {
    t6 = $[56];
  }
  return t6;
}function PTableSortableBodyBlock(t0) {
  var $ = compilerRuntime.c(31);
  var items = t0.items,
    baseIndex = t0.baseIndex,
    columns = t0.columns,
    showOddColor = t0.showOddColor,
    showEvenColor = t0.showEvenColor,
    onGetBodyRowStyle = t0.onGetBodyRowStyle,
    onGetBodyRowSx = t0.onGetBodyRowSx,
    onGetBodyRowClassName = t0.onGetBodyRowClassName,
    onGetBodyColumnClassName = t0.onGetBodyColumnClassName,
    onGetBodyColumnStyle = t0.onGetBodyColumnStyle,
    onGetBodyColumnSx = t0.onGetBodyColumnSx,
    defaultAlign = t0.defaultAlign,
    defaultEllipsis = t0.defaultEllipsis,
    sortable = t0.sortable,
    onClick = t0.onClick,
    onCheckChange = t0.onCheckChange;
  var _useTableState = useTableState(),
    progressiveVisible = _useTableState.progressiveVisible;
  var t1;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t1 = {
      threshold: 0,
      triggerOnce: true
    };
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  var _useInView = reactIntersectionObserver.useInView(t1),
    ref = _useInView.ref,
    inView = _useInView.inView;
  var _useState = React.useState(baseIndex === 0),
    _useState2 = _slicedToArray(_useState, 2),
    canInView = _useState2[0],
    setCanInView = _useState2[1];
  var t2;
  if ($[1] !== baseIndex || $[2] !== progressiveVisible) {
    t2 = function t2() {
      if (progressiveVisible && baseIndex > 0) {
        setTimeout(function () {
          setCanInView(true);
        }, baseIndex * compare.ifUndefined(progressiveVisible.delay, 300));
      }
    };
    $[1] = baseIndex;
    $[2] = progressiveVisible;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  var effectEvent = React.useEffectEvent(t2);
  var t3;
  if ($[4] !== effectEvent) {
    t3 = function t3() {
      effectEvent();
    };
    $[4] = effectEvent;
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  var t4;
  if ($[6] !== progressiveVisible) {
    t4 = [progressiveVisible];
    $[6] = progressiveVisible;
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  React.useEffect(t3, t4);
  var t5;
  if ($[8] !== baseIndex || $[9] !== canInView || $[10] !== columns || $[11] !== defaultAlign || $[12] !== defaultEllipsis || $[13] !== inView || $[14] !== items || $[15] !== onCheckChange || $[16] !== onClick || $[17] !== onGetBodyColumnClassName || $[18] !== onGetBodyColumnStyle || $[19] !== onGetBodyColumnSx || $[20] !== onGetBodyRowClassName || $[21] !== onGetBodyRowStyle || $[22] !== onGetBodyRowSx || $[23] !== progressiveVisible || $[24] !== ref || $[25] !== showEvenColor || $[26] !== showOddColor || $[27] !== sortable) {
    t5 = !progressiveVisible || inView ? items.map(function (item, idx) {
      return /*#__PURE__*/React.createElement(PTableBodyRow, {
        key: item.id,
        id: item.id,
        index: baseIndex + idx,
        className: classNames(showOddColor && "odd-color", showEvenColor && "even-color", onGetBodyRowClassName ? onGetBodyRowClassName(item, baseIndex + idx) : undefined),
        style: onGetBodyRowStyle ? onGetBodyRowStyle(item, baseIndex + idx) : undefined,
        sx: onGetBodyRowSx ? onGetBodyRowSx(item, baseIndex + idx) : undefined,
        hover: true,
        onGetColumnClassName: onGetBodyColumnClassName,
        onGetColumnStyle: onGetBodyColumnStyle,
        onGetColumnSx: onGetBodyColumnSx,
        defaultAlign: defaultAlign,
        defaultEllipsis: defaultEllipsis,
        sortable: sortable,
        columns: columns,
        item: item,
        onClick: onClick,
        onCheckChange: onCheckChange
      });
    }) : /*#__PURE__*/React.createElement(material.TableRow, {
      ref: canInView ? ref : undefined
    }, /*#__PURE__*/React.createElement(material.TableCell, {
      colSpan: columns.length,
      style: {
        height: progressiveVisible.rowHeight * items.length,
        border: "none"
      }
    }));
    $[8] = baseIndex;
    $[9] = canInView;
    $[10] = columns;
    $[11] = defaultAlign;
    $[12] = defaultEllipsis;
    $[13] = inView;
    $[14] = items;
    $[15] = onCheckChange;
    $[16] = onClick;
    $[17] = onGetBodyColumnClassName;
    $[18] = onGetBodyColumnStyle;
    $[19] = onGetBodyColumnSx;
    $[20] = onGetBodyRowClassName;
    $[21] = onGetBodyRowStyle;
    $[22] = onGetBodyRowSx;
    $[23] = progressiveVisible;
    $[24] = ref;
    $[25] = showEvenColor;
    $[26] = showOddColor;
    $[27] = sortable;
    $[28] = t5;
  } else {
    t5 = $[28];
  }
  var renderItems = t5;
  var t6;
  if ($[29] !== renderItems) {
    t6 = /*#__PURE__*/React.createElement(React.Fragment, null, renderItems);
    $[29] = renderItems;
    $[30] = t6;
  } else {
    t6 = $[30];
  }
  return t6;
}var chunkArray = function chunkArray(array, size) {
  var result = [];
  for (var i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};function PTableSortableBody(t0) {
  var $ = compilerRuntime.c(54);
  var items = t0.items,
    columns = t0.columns,
    showOddColor = t0.showOddColor,
    showEvenColor = t0.showEvenColor,
    onGetBodyRowStyle = t0.onGetBodyRowStyle,
    onGetBodyRowSx = t0.onGetBodyRowSx,
    onGetBodyRowClassName = t0.onGetBodyRowClassName,
    onGetBodyColumnClassName = t0.onGetBodyColumnClassName,
    onGetBodyColumnStyle = t0.onGetBodyColumnStyle,
    onGetBodyColumnSx = t0.onGetBodyColumnSx,
    defaultAlign = t0.defaultAlign,
    defaultEllipsis = t0.defaultEllipsis,
    sortable$1 = t0.sortable,
    onClick = t0.onClick,
    onCheckChange = t0.onCheckChange;
  var _useTableState = useTableState(),
    progressiveVisible = _useTableState.progressiveVisible;
  var t1;
  if (progressiveVisible) {
    var _t;
    if ($[0] !== columns || $[1] !== defaultAlign || $[2] !== defaultEllipsis || $[3] !== items || $[4] !== onCheckChange || $[5] !== onClick || $[6] !== onGetBodyColumnClassName || $[7] !== onGetBodyColumnStyle || $[8] !== onGetBodyColumnSx || $[9] !== onGetBodyRowClassName || $[10] !== onGetBodyRowStyle || $[11] !== onGetBodyRowSx || $[12] !== progressiveVisible.blockSize || $[13] !== showEvenColor || $[14] !== showOddColor || $[15] !== sortable$1) {
      var _t2;
      if ($[17] !== columns || $[18] !== defaultAlign || $[19] !== defaultEllipsis || $[20] !== onCheckChange || $[21] !== onClick || $[22] !== onGetBodyColumnClassName || $[23] !== onGetBodyColumnStyle || $[24] !== onGetBodyColumnSx || $[25] !== onGetBodyRowClassName || $[26] !== onGetBodyRowStyle || $[27] !== onGetBodyRowSx || $[28] !== showEvenColor || $[29] !== showOddColor || $[30] !== sortable$1) {
        _t2 = function _t2(bItems, index) {
          return /*#__PURE__*/React.createElement(PTableSortableBodyBlock, {
            key: index,
            items: bItems,
            baseIndex: index,
            columns: columns,
            showOddColor: showOddColor,
            showEvenColor: showEvenColor,
            onGetBodyRowStyle: onGetBodyRowStyle,
            onGetBodyRowSx: onGetBodyRowSx,
            onGetBodyRowClassName: onGetBodyRowClassName,
            onGetBodyColumnClassName: onGetBodyColumnClassName,
            onGetBodyColumnStyle: onGetBodyColumnStyle,
            onGetBodyColumnSx: onGetBodyColumnSx,
            defaultAlign: defaultAlign,
            defaultEllipsis: defaultEllipsis,
            sortable: sortable$1,
            onClick: onClick,
            onCheckChange: onCheckChange
          });
        };
        $[17] = columns;
        $[18] = defaultAlign;
        $[19] = defaultEllipsis;
        $[20] = onCheckChange;
        $[21] = onClick;
        $[22] = onGetBodyColumnClassName;
        $[23] = onGetBodyColumnStyle;
        $[24] = onGetBodyColumnSx;
        $[25] = onGetBodyRowClassName;
        $[26] = onGetBodyRowStyle;
        $[27] = onGetBodyRowSx;
        $[28] = showEvenColor;
        $[29] = showOddColor;
        $[30] = sortable$1;
        $[31] = _t2;
      } else {
        _t2 = $[31];
      }
      _t = chunkArray(items, compare.ifUndefined(progressiveVisible.blockSize, 20)).map(_t2);
      $[0] = columns;
      $[1] = defaultAlign;
      $[2] = defaultEllipsis;
      $[3] = items;
      $[4] = onCheckChange;
      $[5] = onClick;
      $[6] = onGetBodyColumnClassName;
      $[7] = onGetBodyColumnStyle;
      $[8] = onGetBodyColumnSx;
      $[9] = onGetBodyRowClassName;
      $[10] = onGetBodyRowStyle;
      $[11] = onGetBodyRowSx;
      $[12] = progressiveVisible.blockSize;
      $[13] = showEvenColor;
      $[14] = showOddColor;
      $[15] = sortable$1;
      $[16] = _t;
    } else {
      _t = $[16];
    }
    var t3;
    if ($[32] !== _t) {
      t3 = /*#__PURE__*/React.createElement(React.Fragment, null, _t);
      $[32] = _t;
      $[33] = t3;
    } else {
      t3 = $[33];
    }
    t1 = t3;
  } else {
    var _t3;
    if ($[34] !== columns || $[35] !== defaultAlign || $[36] !== defaultEllipsis || $[37] !== items || $[38] !== onCheckChange || $[39] !== onClick || $[40] !== onGetBodyColumnClassName || $[41] !== onGetBodyColumnStyle || $[42] !== onGetBodyColumnSx || $[43] !== onGetBodyRowClassName || $[44] !== onGetBodyRowStyle || $[45] !== onGetBodyRowSx || $[46] !== showEvenColor || $[47] !== showOddColor || $[48] !== sortable$1) {
      _t3 = /*#__PURE__*/React.createElement(PTableSortableBodyBlock, {
        items: items,
        baseIndex: 0,
        columns: columns,
        showOddColor: showOddColor,
        showEvenColor: showEvenColor,
        onGetBodyRowStyle: onGetBodyRowStyle,
        onGetBodyRowSx: onGetBodyRowSx,
        onGetBodyRowClassName: onGetBodyRowClassName,
        onGetBodyColumnClassName: onGetBodyColumnClassName,
        onGetBodyColumnStyle: onGetBodyColumnStyle,
        onGetBodyColumnSx: onGetBodyColumnSx,
        defaultAlign: defaultAlign,
        defaultEllipsis: defaultEllipsis,
        sortable: sortable$1,
        onClick: onClick,
        onCheckChange: onCheckChange
      });
      $[34] = columns;
      $[35] = defaultAlign;
      $[36] = defaultEllipsis;
      $[37] = items;
      $[38] = onCheckChange;
      $[39] = onClick;
      $[40] = onGetBodyColumnClassName;
      $[41] = onGetBodyColumnStyle;
      $[42] = onGetBodyColumnSx;
      $[43] = onGetBodyRowClassName;
      $[44] = onGetBodyRowStyle;
      $[45] = onGetBodyRowSx;
      $[46] = showEvenColor;
      $[47] = showOddColor;
      $[48] = sortable$1;
      $[49] = _t3;
    } else {
      _t3 = $[49];
    }
    t1 = _t3;
  }
  var renderBlock = t1;
  var t2;
  if ($[50] !== items || $[51] !== renderBlock || $[52] !== sortable$1) {
    t2 = sortable$1 ? /*#__PURE__*/React.createElement(sortable.SortableContext, {
      items: items,
      strategy: sortable.verticalListSortingStrategy
    }, renderBlock) : renderBlock;
    $[50] = items;
    $[51] = renderBlock;
    $[52] = sortable$1;
    $[53] = t2;
  } else {
    t2 = $[53];
  }
  return t2;
}/********************************************************************************************************************
 * columnFilter
 * ******************************************************************************************************************/

function columnFilter(v) {
  return v !== undefined && v !== null && v !== false;
}

/********************************************************************************************************************
 * getNewColumnId
 * ******************************************************************************************************************/
var _columnId = 0;
var getNewColumnId = function getNewColumnId() {
  _columnId += 1;
  return "$c$".concat(_columnId, "$");
};

/********************************************************************************************************************
 * TLocalBodyData
 * ******************************************************************************************************************/

/********************************************************************************************************************
 * TLocalHeaderData
 * ******************************************************************************************************************/

/********************************************************************************************************************
 * PTable
 * ******************************************************************************************************************/

function PTable(t0) {
  var $ = compilerRuntime.c(200);
  var ref = t0.ref,
    className = t0.className,
    initStyle = t0.style,
    sx = t0.sx,
    caption = t0.caption,
    topHeadRows = t0.topHeadRows,
    initColumns = t0.columns,
    initItems = t0.items,
    initPaging = t0.paging,
    t1 = t0.pagingAlign,
    t2 = t0.defaultAlign,
    defaultEllipsis = t0.defaultEllipsis,
    initStickyHeader = t0.stickyHeader,
    height = t0.height,
    minHeight = t0.minHeight,
    maxHeight = t0.maxHeight,
    fullHeight = t0.fullHeight,
    showOddColor = t0.showOddColor,
    showEvenColor = t0.showEvenColor,
    t3 = t0.cellPadding,
    footer = t0.footer,
    noData = t0.noData,
    pagination = t0.pagination,
    sortable$1 = t0.sortable,
    progressiveVisible = t0.progressiveVisible,
    onClick = t0.onClick,
    onGetBodyRowClassName = t0.onGetBodyRowClassName,
    onGetBodyRowStyle = t0.onGetBodyRowStyle,
    onGetBodyRowSx = t0.onGetBodyRowSx,
    onGetBodyColumnClassName = t0.onGetBodyColumnClassName,
    onGetBodyColumnStyle = t0.onGetBodyColumnStyle,
    onGetBodyColumnSx = t0.onGetBodyColumnSx,
    onPageChange = t0.onPageChange,
    onSortChange = t0.onSortChange,
    onCheckChange = t0.onCheckChange;
  var pagingAlign = t1 === undefined ? "center" : t1;
  var defaultAlign = t2 === undefined ? "left" : t2;
  var cellPadding = t3 === undefined ? 13 : t3;
  var t4;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t4 = {};
    $[0] = t4;
  } else {
    t4 = $[0];
  }
  var localHeaderDataRef = React.useRef(t4);
  var t5;
  if ($[1] === Symbol["for"]("react.memo_cache_sentinel")) {
    t5 = {};
    $[1] = t5;
  } else {
    t5 = $[1];
  }
  var localBodyDataRef = React.useRef(t5);
  var updateHeadCheckTimer = React.useRef(undefined);
  var t6;
  if ($[2] === Symbol["for"]("react.memo_cache_sentinel")) {
    t6 = {};
    $[2] = t6;
  } else {
    t6 = $[2];
  }
  var fireOnCheckChangeTimer = React.useRef(t6);
  var simpleBarRef = React.useRef(null);
  var onPageChangeRef = reactHook.useAutoUpdateRef(onPageChange);
  var onSortChangeRef = reactHook.useAutoUpdateRef(onSortChange);
  var onCheckChangeRef = reactHook.useAutoUpdateRef(onCheckChange);
  var t7;
  if ($[3] === Symbol["for"]("react.memo_cache_sentinel")) {
    t7 = {
      activationConstraint: {
        distance: 10
      }
    };
    $[3] = t7;
  } else {
    t7 = $[3];
  }
  var t8;
  if ($[4] === Symbol["for"]("react.memo_cache_sentinel")) {
    t8 = {
      activationConstraint: {
        delay: 250,
        tolerance: 5
      }
    };
    $[4] = t8;
  } else {
    t8 = $[4];
  }
  var t9;
  if ($[5] === Symbol["for"]("react.memo_cache_sentinel")) {
    t9 = {
      coordinateGetter: sortable.sortableKeyboardCoordinates
    };
    $[5] = t9;
  } else {
    t9 = $[5];
  }
  var sensors = core.useSensors(core.useSensor(core.MouseSensor, t7), core.useSensor(core.TouchSensor, t8), core.useSensor(core.KeyboardSensor, t9));
  var _useState = React.useState(),
    _useState2 = _slicedToArray(_useState, 2),
    sortableItems = _useState2[0],
    setSortableItems = _useState2[1];
  var _useState3 = React.useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    menuOpen = _useState4[0],
    setMenuOpen = _useState4[1];
  var _useState5 = React.useState(undefined),
    _useState6 = _slicedToArray(_useState5, 2),
    openMenuId = _useState6[0],
    setOpenMenuId = _useState6[1];
  var _useState7 = React.useState(),
    _useState8 = _slicedToArray(_useState7, 2),
    containerHeight = _useState8[0],
    setContainerHeight = _useState8[1];
  var _useState9 = React.useState(),
    _useState0 = _slicedToArray(_useState9, 2),
    pagingHeight = _useState0[0],
    setPagingHeight = _useState0[1];
  var _useState1 = React.useState(),
    _useState10 = _slicedToArray(_useState1, 2),
    finalColumns = _useState10[0],
    _setFinalColumns = _useState10[1];
  var finalColumnsRef = reactHook.useAutoUpdateRef(finalColumns);
  var t10;
  if ($[6] !== finalColumnsRef) {
    t10 = function t10(value) {
      _setFinalColumns(function (prev) {
        var finalValue = typeof value === "function" ? value(prev) : value;
        finalColumnsRef.current = finalValue;
        return finalValue;
      });
    };
    $[6] = finalColumnsRef;
    $[7] = t10;
  } else {
    t10 = $[7];
  }
  var setFinalColumns = t10;
  var _useState11 = React.useState(undefined),
    _useState12 = _slicedToArray(_useState11, 2),
    finalColumnsId = _useState12[0],
    _setFinalColumnsId = _useState12[1];
  var finalColumnsIdRef = reactHook.useAutoUpdateRef(finalColumnsId);
  var t11;
  if ($[8] !== finalColumnsIdRef) {
    t11 = function t11(value_0) {
      _setFinalColumnsId(function (prev_0) {
        var finalValue_0 = typeof value_0 === "function" ? value_0(prev_0) : value_0;
        finalColumnsIdRef.current = finalValue_0;
        return finalValue_0;
      });
    };
    $[8] = finalColumnsIdRef;
    $[9] = t11;
  } else {
    t11 = $[9];
  }
  var setFinalColumnsId = t11;
  var _useState13 = React.useState(initColumns),
    _useState14 = _slicedToArray(_useState13, 2),
    columns = _useState14[0],
    _setColumns = _useState14[1];
  reactHook.useChanged(initColumns) && _setColumns(initColumns);
  var columnsRef = reactHook.useAutoUpdateRef(columns);
  var t12;
  if ($[10] !== columnsRef) {
    t12 = function t12(value_1) {
      _setColumns(function (prev_1) {
        var finalValue_1 = typeof value_1 === "function" ? value_1(prev_1) : value_1;
        columnsRef.current = finalValue_1;
        return finalValue_1;
      });
    };
    $[10] = columnsRef;
    $[11] = t12;
  } else {
    t12 = $[11];
  }
  var setColumns = t12;
  var _useState15 = React.useState(initItems),
    _useState16 = _slicedToArray(_useState15, 2),
    items = _useState16[0],
    _setItems = _useState16[1];
  reactHook.useChanged(initItems) && _setItems(initItems);
  var itemsRef = reactHook.useAutoUpdateRef(items);
  var t13;
  if ($[12] !== itemsRef) {
    t13 = function t13(value_2) {
      _setItems(function (prev_2) {
        var finalValue_2 = typeof value_2 === "function" ? value_2(prev_2) : value_2;
        itemsRef.current = finalValue_2;
        return finalValue_2;
      });
    };
    $[12] = itemsRef;
    $[13] = t13;
  } else {
    t13 = $[13];
  }
  var setItems = t13;
  var _useState17 = React.useState(initPaging),
    _useState18 = _slicedToArray(_useState17, 2),
    paging = _useState18[0],
    _setPaging = _useState18[1];
  reactHook.useChanged(initPaging) && _setPaging(initPaging);
  var pagingRef = reactHook.useAutoUpdateRef(paging);
  var t14;
  if ($[14] !== pagingRef) {
    t14 = function t14(value_3) {
      _setPaging(function (prev_3) {
        var finalValue_3 = typeof value_3 === "function" ? value_3(prev_3) : value_3;
        pagingRef.current = finalValue_3;
        return finalValue_3;
      });
    };
    $[14] = pagingRef;
    $[15] = t14;
  } else {
    t14 = $[15];
  }
  var setPaging = t14;
  var _useResizeDetector = useResizeDetector({
      handleHeight: true,
      handleWidth: false,
      onResize: function onResize() {
        if (containerHeightDetector.current) {
          setContainerHeight(containerHeightDetector.current.getBoundingClientRect().height);
        } else {
          setContainerHeight(undefined);
        }
      }
    }),
    t15 = _useResizeDetector.ref;
  var containerHeightDetector = t15;
  var _useResizeDetector2 = useResizeDetector({
      handleHeight: true,
      handleWidth: false,
      onResize: function onResize() {
        if (pagingHeightResizeDetector.current) {
          setPagingHeight(pagingHeightResizeDetector.current.getBoundingClientRect().height);
        } else {
          setPagingHeight(undefined);
        }
      }
    }),
    t16 = _useResizeDetector2.ref;
  var pagingHeightResizeDetector = t16;
  var t17;
  if ($[16] !== finalColumnsIdRef || $[17] !== finalColumnsRef) {
    t17 = function t17(column) {
      if (finalColumnsRef.current && finalColumnsIdRef.current) {
        var idx = finalColumnsRef.current.indexOf(column);
        return finalColumnsIdRef.current[idx];
      } else {
        return "";
      }
    };
    $[16] = finalColumnsIdRef;
    $[17] = finalColumnsRef;
    $[18] = t17;
  } else {
    t17 = $[18];
  }
  var getFinalColumnId = t17;
  var t18;
  if ($[19] !== getFinalColumnId) {
    t18 = function t18(column_0) {
      if (updateHeadCheckTimer.current) {
        clearTimeout(updateHeadCheckTimer.current);
        updateHeadCheckTimer.current = undefined;
      }
      var columnId = getFinalColumnId(column_0);
      var headColumnData = localHeaderDataRef.current[columnId];
      if (headColumnData) {
        updateHeadCheckTimer.current = setTimeout(function () {
          var _headColumnData$comma, _headColumnData$comma2;
          updateHeadCheckTimer.current = undefined;
          var enabledCheckExists = !!Object.keys(localBodyDataRef.current).find(function (key) {
            var columnData = localBodyDataRef.current[key].columns[columnId];
            if (columnData) {
              if (!columnData.checkDisabled) {
                return true;
              }
            }
          });
          var allChecked = enabledCheckExists && !Object.keys(localBodyDataRef.current).find(function (key_0) {
            var columnData_0 = localBodyDataRef.current[key_0].columns[columnId];
            if (columnData_0) {
              if (!columnData_0.checkDisabled) {
                return !columnData_0.checked;
              }
            }
          });
          (_headColumnData$comma = headColumnData.commands) === null || _headColumnData$comma === void 0 || _headColumnData$comma.setCheckDisabled(!enabledCheckExists);
          (_headColumnData$comma2 = headColumnData.commands) === null || _headColumnData$comma2 === void 0 || _headColumnData$comma2.setChecked(allChecked);
        }, 100);
      }
    };
    $[19] = getFinalColumnId;
    $[20] = t18;
  } else {
    t18 = $[20];
  }
  var updateHeadCheck = t18;
  var t19;
  if ($[21] === Symbol["for"]("react.memo_cache_sentinel")) {
    t19 = function t19(itemKey, itemValue, columnId_0) {
      var checked = false;
      Object.keys(localBodyDataRef.current).find(function (key_1) {
        var itemData = localBodyDataRef.current[key_1];
        if (itemData.item[itemKey] === itemValue) {
          var columnData_1 = itemData.columns[columnId_0];
          checked = !!(columnData_1 !== null && columnData_1 !== void 0 && columnData_1.checked);
          return true;
        }
      });
      return checked;
    };
    $[21] = t19;
  } else {
    t19 = $[21];
  }
  var getChecked = t19;
  var t20;
  if ($[22] !== updateHeadCheck) {
    t20 = function t20(itemKey_0, itemValue_0, columnId_1, checked_0) {
      Object.keys(localBodyDataRef.current).find(function (key_2) {
        var itemData_0 = localBodyDataRef.current[key_2];
        if (itemData_0.item[itemKey_0] === itemValue_0) {
          var columnData_2 = itemData_0.columns[columnId_1];
          if (columnData_2) {
            var _columnData_2$command;
            (_columnData_2$command = columnData_2.commands) === null || _columnData_2$command === void 0 || _columnData_2$command.setChecked(checked_0);
            updateHeadCheck(columnData_2.column);
          }
          return true;
        }
      });
    };
    $[22] = updateHeadCheck;
    $[23] = t20;
  } else {
    t20 = $[23];
  }
  var setChecked = t20;
  var t21;
  if ($[24] !== updateHeadCheck) {
    t21 = function t21(itemKey_1, itemValue_1, columnId_2) {
      Object.keys(localBodyDataRef.current).forEach(function (key_3) {
        var itemData_1 = localBodyDataRef.current[key_3];
        if (itemData_1.item[itemKey_1] === itemValue_1) {
          var columnData_3 = itemData_1.columns[columnId_2];
          if (columnData_3) {
            var _columnData_3$command;
            (_columnData_3$command = columnData_3.commands) === null || _columnData_3$command === void 0 || _columnData_3$command.setChecked(!columnData_3.checked);
            updateHeadCheck(columnData_3.column);
          }
          return true;
        }
      });
    };
    $[24] = updateHeadCheck;
    $[25] = t21;
  } else {
    t21 = $[25];
  }
  var toggleChecked = t21;
  var t22;
  if ($[26] === Symbol["for"]("react.memo_cache_sentinel")) {
    t22 = function t22(columnId_3, checked_1) {
      var _localHeaderDataRef$c;
      Object.keys(localBodyDataRef.current).forEach(function (key_4) {
        var itemData_2 = localBodyDataRef.current[key_4];
        var columnData_4 = itemData_2.columns[columnId_3];
        if (columnData_4) {
          var _columnData_4$command;
          (_columnData_4$command = columnData_4.commands) === null || _columnData_4$command === void 0 || _columnData_4$command.setChecked(checked_1);
        }
      });
      (_localHeaderDataRef$c = localHeaderDataRef.current[columnId_3]) === null || _localHeaderDataRef$c === void 0 || (_localHeaderDataRef$c = _localHeaderDataRef$c.commands) === null || _localHeaderDataRef$c === void 0 || _localHeaderDataRef$c.setChecked(checked_1);
    };
    $[26] = t22;
  } else {
    t22 = $[26];
  }
  var setCheckedAll = t22;
  var t23;
  if ($[27] === Symbol["for"]("react.memo_cache_sentinel")) {
    t23 = function t23(columnId_4) {
      var checkedItems = [];
      Object.keys(localBodyDataRef.current).forEach(function (key_5) {
        var itemData_3 = localBodyDataRef.current[key_5];
        var columnData_5 = itemData_3.columns[columnId_4];
        if (columnData_5) {
          if (columnData_5.checked) {
            checkedItems.push(itemData_3.item);
          }
        }
      });
      return checkedItems;
    };
    $[27] = t23;
  } else {
    t23 = $[27];
  }
  var getCheckedItems = t23;
  var t24;
  if ($[28] === Symbol["for"]("react.memo_cache_sentinel")) {
    t24 = function t24() {
      if (updateHeadCheckTimer.current) {
        clearTimeout(updateHeadCheckTimer.current);
        updateHeadCheckTimer.current = undefined;
      }
    };
    $[28] = t24;
  } else {
    t24 = $[28];
  }
  var stopHeadCheckTimer = t24;
  var t25;
  if ($[29] === Symbol["for"]("react.memo_cache_sentinel")) {
    t25 = function t25() {
      Object.keys(fireOnCheckChangeTimer.current).forEach(function (key_6) {
        if (fireOnCheckChangeTimer.current[key_6]) {
          clearTimeout(fireOnCheckChangeTimer.current[key_6]);
        }
      });
      fireOnCheckChangeTimer.current = {};
    };
    $[29] = t25;
  } else {
    t25 = $[29];
  }
  var clearFireOnCheckChangeTimer = t25;
  var t26;
  if ($[30] !== onCheckChangeRef) {
    t26 = function t26(columnId_5) {
      if (fireOnCheckChangeTimer.current[columnId_5]) {
        clearTimeout(fireOnCheckChangeTimer.current[columnId_5]);
        fireOnCheckChangeTimer.current[columnId_5] = undefined;
      }
      if (onCheckChangeRef.current) {
        fireOnCheckChangeTimer.current[columnId_5] = setTimeout(function () {
          var _onCheckChangeRef$cur;
          fireOnCheckChangeTimer.current[columnId_5] = undefined;
          (_onCheckChangeRef$cur = onCheckChangeRef.current) === null || _onCheckChangeRef$cur === void 0 || _onCheckChangeRef$cur.call(onCheckChangeRef, columnId_5, getCheckedItems(columnId_5));
        }, 100);
      }
    };
    $[30] = onCheckChangeRef;
    $[31] = t26;
  } else {
    t26 = $[31];
  }
  var fireOnCheckChange = t26;
  var t27;
  if ($[32] === Symbol["for"]("react.memo_cache_sentinel")) {
    t27 = function t27() {
      var _simpleBarRef$current;
      (_simpleBarRef$current = simpleBarRef.current) === null || _simpleBarRef$current === void 0 || (_simpleBarRef$current = _simpleBarRef$current.getScrollElement()) === null || _simpleBarRef$current === void 0 || _simpleBarRef$current.scrollTo({
        top: 0
      });
    };
    $[32] = t27;
  } else {
    t27 = $[32];
  }
  var simpleBarScrollToTop = t27;
  var t28;
  if ($[33] !== items) {
    t28 = function t28() {
      stopHeadCheckTimer();
      clearFireOnCheckChangeTimer();
      Object.keys(localHeaderDataRef.current).forEach(function (key_7) {
        if (localHeaderDataRef.current[key_7].column.type === "check") {
          var _localHeaderDataRef$c2;
          (_localHeaderDataRef$c2 = localHeaderDataRef.current[key_7].commands) === null || _localHeaderDataRef$c2 === void 0 || _localHeaderDataRef$c2.setChecked(false);
        }
      });
      Object.keys(localBodyDataRef.current).forEach(function (key_8) {
        Object.keys(localBodyDataRef.current[key_8].columns).forEach(function (cKey) {
          var _localBodyDataRef$cur;
          (_localBodyDataRef$cur = localBodyDataRef.current[key_8].columns[cKey].commands) === null || _localBodyDataRef$cur === void 0 || _localBodyDataRef$cur.setChecked(false);
        });
      });
      setSortableItems(makeSortableItems(items));
    };
    $[33] = items;
    $[34] = t28;
  } else {
    t28 = $[34];
  }
  var effectEvent = React.useEffectEvent(t28);
  var t29;
  if ($[35] !== effectEvent) {
    t29 = function t29() {
      effectEvent();
    };
    $[35] = effectEvent;
    $[36] = t29;
  } else {
    t29 = $[36];
  }
  var t30;
  if ($[37] !== items) {
    t30 = [items];
    $[37] = items;
    $[38] = t30;
  } else {
    t30 = $[38];
  }
  React.useEffect(t29, t30);
  var t31;
  if ($[39] === Symbol["for"]("react.memo_cache_sentinel")) {
    t31 = function t31() {
      return function () {
        stopHeadCheckTimer();
        clearFireOnCheckChangeTimer();
      };
    };
    $[39] = t31;
  } else {
    t31 = $[39];
  }
  var effectEvent_0 = React.useEffectEvent(t31);
  var t32;
  if ($[40] !== effectEvent_0) {
    t32 = function t32() {
      return effectEvent_0();
    };
    $[40] = effectEvent_0;
    $[41] = t32;
  } else {
    t32 = $[41];
  }
  var t33;
  if ($[42] === Symbol["for"]("react.memo_cache_sentinel")) {
    t33 = [];
    $[42] = t33;
  } else {
    t33 = $[42];
  }
  React.useEffect(t32, t33);
  var t34;
  if ($[43] !== columns || $[44] !== setFinalColumns || $[45] !== setFinalColumnsId) {
    t34 = function t34() {
      stopHeadCheckTimer();
      clearFireOnCheckChangeTimer();
      var newFinalColumns = columns === null || columns === void 0 ? void 0 : columns.filter(columnFilter);
      setFinalColumns(newFinalColumns);
      setFinalColumnsId(newFinalColumns === null || newFinalColumns === void 0 ? void 0 : newFinalColumns.map(_temp$1));
    };
    $[43] = columns;
    $[44] = setFinalColumns;
    $[45] = setFinalColumnsId;
    $[46] = t34;
  } else {
    t34 = $[46];
  }
  var effectEvent_1 = React.useEffectEvent(t34);
  var t35;
  if ($[47] !== effectEvent_1) {
    t35 = function t35() {
      effectEvent_1();
    };
    $[47] = effectEvent_1;
    $[48] = t35;
  } else {
    t35 = $[48];
  }
  var t36;
  if ($[49] !== columns) {
    t36 = [columns];
    $[49] = columns;
    $[50] = t36;
  } else {
    t36 = $[50];
  }
  React.useEffect(t35, t36);
  var t37;
  if ($[51] !== finalColumns || $[52] !== getFinalColumnId || $[53] !== sortableItems) {
    t37 = function t37() {
      clearFireOnCheckChangeTimer();
      if (sortableItems) {
        localBodyDataRef.current = sortableItems.reduce(function (res, item) {
          res[item.id] = {
            item: item,
            columns: {}
          };
          if (finalColumns) {
            finalColumns.forEach(function (c) {
              var _localBodyDataRef$cur2;
              var columnId_6 = getFinalColumnId(c);
              if ((_localBodyDataRef$cur2 = localBodyDataRef.current[item.id]) !== null && _localBodyDataRef$cur2 !== void 0 && _localBodyDataRef$cur2.columns[columnId_6]) {
                res[item.id].columns[columnId_6] = localBodyDataRef.current[item.id].columns[columnId_6];
              } else {
                res[item.id].columns[columnId_6] = {
                  column: c,
                  checked: false,
                  checkDisabled: false
                };
              }
            });
          }
          return res;
        }, {});
      } else {
        localBodyDataRef.current = {};
      }
    };
    $[51] = finalColumns;
    $[52] = getFinalColumnId;
    $[53] = sortableItems;
    $[54] = t37;
  } else {
    t37 = $[54];
  }
  var effectEvent_2 = React.useEffectEvent(t37);
  var t38;
  if ($[55] !== effectEvent_2) {
    t38 = function t38() {
      effectEvent_2();
    };
    $[55] = effectEvent_2;
    $[56] = t38;
  } else {
    t38 = $[56];
  }
  var t39;
  if ($[57] !== finalColumns || $[58] !== sortableItems) {
    t39 = [sortableItems, finalColumns];
    $[57] = finalColumns;
    $[58] = sortableItems;
    $[59] = t39;
  } else {
    t39 = $[59];
  }
  React.useLayoutEffect(t38, t39);
  var t40;
  if ($[60] !== finalColumns || $[61] !== getFinalColumnId) {
    t40 = function t40() {
      if (finalColumns) {
        localHeaderDataRef.current = finalColumns.reduce(function (res_0, c_0) {
          res_0[getFinalColumnId(c_0)] = {
            column: c_0,
            checked: false
          };
          return res_0;
        }, {});
      } else {
        localHeaderDataRef.current = {};
      }
    };
    $[60] = finalColumns;
    $[61] = getFinalColumnId;
    $[62] = t40;
  } else {
    t40 = $[62];
  }
  var effectEvent_3 = React.useEffectEvent(t40);
  var t41;
  if ($[63] !== effectEvent_3) {
    t41 = function t41() {
      effectEvent_3();
    };
    $[63] = effectEvent_3;
    $[64] = t41;
  } else {
    t41 = $[64];
  }
  var t42;
  if ($[65] !== finalColumns) {
    t42 = [finalColumns];
    $[65] = finalColumns;
    $[66] = t42;
  } else {
    t42 = $[66];
  }
  React.useLayoutEffect(t41, t42);
  var t43;
  if ($[67] !== columnsRef) {
    t43 = function t43() {
      return columnsRef.current;
    };
    $[67] = columnsRef;
    $[68] = t43;
  } else {
    t43 = $[68];
  }
  var t44;
  if ($[69] !== itemsRef) {
    t44 = function t44() {
      return itemsRef.current;
    };
    $[69] = itemsRef;
    $[70] = t44;
  } else {
    t44 = $[70];
  }
  var t45;
  if ($[71] !== pagingRef) {
    t45 = function t45() {
      return pagingRef.current;
    };
    $[71] = pagingRef;
    $[72] = t45;
  } else {
    t45 = $[72];
  }
  var t46;
  if ($[73] !== setItems || $[74] !== setPaging) {
    t46 = function t46(items_0, paging_0) {
      setItems(items_0);
      setPaging(paging_0);
    };
    $[73] = setItems;
    $[74] = setPaging;
    $[75] = t46;
  } else {
    t46 = $[75];
  }
  var t47;
  if ($[76] !== itemsRef || $[77] !== setChecked || $[78] !== setColumns || $[79] !== setItems || $[80] !== t43 || $[81] !== t44 || $[82] !== t45 || $[83] !== t46 || $[84] !== toggleChecked) {
    t47 = {
      getColumns: t43,
      setColumns: setColumns,
      getItems: t44,
      setItems: setItems,
      getPaging: t45,
      setItemsPaging: t46,
      resetSort: function resetSort() {
        setSortableItems(makeSortableItems(itemsRef.current));
      },
      getCheckedItems: getCheckedItems,
      getChecked: getChecked,
      setChecked: setChecked,
      toggleChecked: toggleChecked,
      setCheckedAll: setCheckedAll,
      scrollToTop: simpleBarScrollToTop
    };
    $[76] = itemsRef;
    $[77] = setChecked;
    $[78] = setColumns;
    $[79] = setItems;
    $[80] = t43;
    $[81] = t44;
    $[82] = t45;
    $[83] = t46;
    $[84] = toggleChecked;
    $[85] = t47;
  } else {
    t47 = $[85];
  }
  reactHook.useForwardRef(ref, t47);
  var t48;
  if ($[86] !== onSortChangeRef) {
    t48 = function t48(event) {
      var active = event.active,
        over = event.over;
      if (active && over) {
        setSortableItems(function (items_1) {
          if (items_1) {
            var oldIndex = null;
            var newIndex = null;
            items_1.find(function (item_0, idx_0) {
              if (item_0.id === active.id) {
                oldIndex = idx_0;
              } else {
                if (item_0.id === over.id) {
                  newIndex = idx_0;
                }
              }
              return oldIndex != null && newIndex != null;
            });
            if (oldIndex != null && newIndex != null) {
              var _onSortChangeRef$curr;
              var finalItems = sortable.arrayMove(items_1, oldIndex, newIndex);
              (_onSortChangeRef$curr = onSortChangeRef.current) === null || _onSortChangeRef$curr === void 0 || _onSortChangeRef$curr.call(onSortChangeRef, finalItems);
              return finalItems;
            } else {
              return items_1;
            }
          } else {
            return items_1;
          }
        });
      }
    };
    $[86] = onSortChangeRef;
    $[87] = t48;
  } else {
    t48 = $[87];
  }
  var handleDragEnd = t48;
  var t49;
  if ($[88] !== getFinalColumnId) {
    t49 = function t49(column_1, checked_2) {
      Object.keys(localBodyDataRef.current).forEach(function (key_9) {
        var data = localBodyDataRef.current[key_9].columns[getFinalColumnId(column_1)];
        if (data) {
          if (!data.checkDisabled) {
            var _data$commands;
            (_data$commands = data.commands) === null || _data$commands === void 0 || _data$commands.setChecked(checked_2);
          }
        }
      });
    };
    $[88] = getFinalColumnId;
    $[89] = t49;
  } else {
    t49 = $[89];
  }
  var handleHeadCheckChange = t49;
  var t50;
  if ($[90] !== updateHeadCheck) {
    t50 = function t50(item_1, column_2) {
      updateHeadCheck(column_2);
    };
    $[90] = updateHeadCheck;
    $[91] = t50;
  } else {
    t50 = $[91];
  }
  var handleBodyCheckChange = t50;
  var t51;
  if ($[92] !== onPageChangeRef) {
    t51 = function t51(page) {
      var _onPageChangeRef$curr;
      simpleBarScrollToTop();
      (_onPageChangeRef$curr = onPageChangeRef.current) === null || _onPageChangeRef$curr === void 0 || _onPageChangeRef$curr.call(onPageChangeRef, page);
    };
    $[92] = onPageChangeRef;
    $[93] = t51;
  } else {
    t51 = $[93];
  }
  var handlePageChange = t51;
  var t52;
  if ($[94] !== openMenuId) {
    t52 = function t52(newMenuOpen, newOpenMenuId) {
      if (newMenuOpen) {
        setMenuOpen(newMenuOpen);
        setOpenMenuId(newOpenMenuId);
      } else {
        if (openMenuId === newOpenMenuId) {
          setMenuOpen(false);
          setOpenMenuId(undefined);
        }
      }
    };
    $[94] = openMenuId;
    $[95] = t52;
  } else {
    t52 = $[95];
  }
  var TableContextSetMenuOpen = t52;
  var t53;
  if ($[96] !== fireOnCheckChange || $[97] !== getFinalColumnId) {
    t53 = function t53(item_2, column_3, checked_3) {
      var columnId_7 = getFinalColumnId(column_3);
      if (localBodyDataRef.current) {
        var bodyData = localBodyDataRef.current[item_2.id];
        if (bodyData) {
          var columns_0 = bodyData.columns;
          var data_0 = columns_0[columnId_7];
          if (data_0) {
            data_0.checked = checked_3;
            fireOnCheckChange(columnId_7);
          }
        }
      }
    };
    $[96] = fireOnCheckChange;
    $[97] = getFinalColumnId;
    $[98] = t53;
  } else {
    t53 = $[98];
  }
  var TableContextSetItemColumnChecked = t53;
  var t54;
  if ($[99] !== getFinalColumnId || $[100] !== updateHeadCheck) {
    t54 = function t54(item_3, column_4, disabled) {
      var _localBodyDataRef$cur3;
      var columnId_8 = getFinalColumnId(column_4);
      if (columnId_8 && (_localBodyDataRef$cur3 = localBodyDataRef.current[item_3.id]) !== null && _localBodyDataRef$cur3 !== void 0 && _localBodyDataRef$cur3.columns[columnId_8]) {
        localBodyDataRef.current[item_3.id].columns[columnId_8].checkDisabled = disabled;
        updateHeadCheck(column_4);
      } else {
        var runCount = 0;
        var _run = function run() {
          var _localBodyDataRef$cur4;
          runCount = runCount + 1;
          if (runCount > 10) {
            return;
          }
          var columnId_9 = getFinalColumnId(column_4);
          if (!((_localBodyDataRef$cur4 = localBodyDataRef.current[item_3.id]) !== null && _localBodyDataRef$cur4 !== void 0 && _localBodyDataRef$cur4.columns[columnId_9])) {
            setTimeout(_run);
            return;
          }
          localBodyDataRef.current[item_3.id].columns[columnId_9].checkDisabled = disabled;
          updateHeadCheck(column_4);
        };
        _run();
      }
    };
    $[99] = getFinalColumnId;
    $[100] = updateHeadCheck;
    $[101] = t54;
  } else {
    t54 = $[101];
  }
  var TableContextSetItemColumnCheckDisabled = t54;
  var t55;
  if ($[102] !== getFinalColumnId) {
    t55 = function t55(item_4, column_5, commands) {
      var _localBodyDataRef$cur5;
      var columnId_10 = getFinalColumnId(column_5);
      if (columnId_10 && (_localBodyDataRef$cur5 = localBodyDataRef.current[item_4.id]) !== null && _localBodyDataRef$cur5 !== void 0 && _localBodyDataRef$cur5.columns[columnId_10]) {
        localBodyDataRef.current[item_4.id].columns[columnId_10].commands = commands;
      } else {
        var runCount_0 = 0;
        var _run_ = function run_0() {
          var _localBodyDataRef$cur6;
          runCount_0 = runCount_0 + 1;
          if (runCount_0 > 10) {
            return;
          }
          var columnId_11 = getFinalColumnId(column_5);
          if (!((_localBodyDataRef$cur6 = localBodyDataRef.current[item_4.id]) !== null && _localBodyDataRef$cur6 !== void 0 && _localBodyDataRef$cur6.columns[columnId_11])) {
            setTimeout(_run_);
            return;
          }
          localBodyDataRef.current[item_4.id].columns[columnId_11].commands = commands;
        };
        _run_();
      }
    };
    $[102] = getFinalColumnId;
    $[103] = t55;
  } else {
    t55 = $[103];
  }
  var TableContextSetItemColumnCommands = t55;
  var t56;
  if ($[104] !== getFinalColumnId) {
    t56 = function t56(column_6, checked_4) {
      var columnId_12 = getFinalColumnId(column_6);
      if (columnId_12 && localHeaderDataRef.current[columnId_12]) {
        localHeaderDataRef.current[columnId_12].checked = checked_4;
      } else {
        var runCount_1 = 0;
        var _run_2 = function run_1() {
          runCount_1 = runCount_1 + 1;
          if (runCount_1 > 10) {
            return;
          }
          var columnId_13 = getFinalColumnId(column_6);
          if (!localHeaderDataRef.current[columnId_13]) {
            setTimeout(_run_2);
            return;
          }
          localHeaderDataRef.current[columnId_13].checked = checked_4;
        };
        _run_2();
      }
    };
    $[104] = getFinalColumnId;
    $[105] = t56;
  } else {
    t56 = $[105];
  }
  var TableContextSetHeadColumnChecked = t56;
  var t57;
  if ($[106] !== getFinalColumnId) {
    t57 = function t57(column_7, commands_0) {
      var columnId_14 = getFinalColumnId(column_7);
      if (columnId_14 && localHeaderDataRef.current[columnId_14]) {
        localHeaderDataRef.current[columnId_14].commands = commands_0;
      } else {
        var runCount_2 = 0;
        var _run_3 = function run_2() {
          runCount_2 = runCount_2 + 1;
          if (runCount_2 > 10) {
            return;
          }
          var columnId_15 = getFinalColumnId(column_7);
          if (!localHeaderDataRef.current[columnId_15]) {
            setTimeout(_run_3);
            return;
          }
          localHeaderDataRef.current[columnId_15].commands = commands_0;
        };
        _run_3();
      }
    };
    $[106] = getFinalColumnId;
    $[107] = t57;
  } else {
    t57 = $[107];
  }
  var TableContextSetHeadColumnCommands = t57;
  var isNoData = !!sortableItems && sortableItems.length <= 0;
  var finalPagingHeight = paging && paging.total > 0 ? pagingHeight || 0 : 0;
  var stickyHeader = !isNoData && initStickyHeader;
  var t58;
  if ($[108] !== fullHeight || $[109] !== initStyle) {
    t58 = fullHeight ? _objectSpread2(_objectSpread2({
      width: "100%"
    }, initStyle), {}, {
      flex: 1,
      justifyContent: "flex-end",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      position: "relative"
    }) : _objectSpread2({
      width: "100%"
    }, initStyle);
    $[108] = fullHeight;
    $[109] = initStyle;
    $[110] = t58;
  } else {
    t58 = $[110];
  }
  var style = t58;
  var t59 = typeof cellPadding === "number" ? "".concat(cellPadding, "px") : cellPadding;
  var t60;
  if ($[111] !== t59) {
    var sx_0 = {
      padding: t59
    };
    t60 = {
      "> .MuiTableHead-root > .MuiTableRow-root > .MuiTableCell-root ": sx_0,
      "> .MuiTableBody-root > .MuiTableRow-root > .MuiTableCell-root ": sx_0,
      "> .MuiTableFooter-root > .MuiTableRow-root > .MuiTableCell-root ": sx_0
    };
    $[111] = t59;
    $[112] = t60;
  } else {
    t60 = $[112];
  }
  var tableSx = t60;
  var pagingStyle;
  if ($[113] !== fullHeight) {
    pagingStyle = {
      padding: "13px 0",
      borderTop: "1px solid rgba(224, 224, 224, 1)"
    };
    if (fullHeight) {
      pagingStyle.position = "sticky";
    }
    $[113] = fullHeight;
    $[114] = pagingStyle;
  } else {
    pagingStyle = $[114];
  }
  var t61;
  if ($[115] !== pagingStyle || $[116] !== style || $[117] !== tableSx) {
    t61 = {
      style: style,
      tableSx: tableSx,
      pagingStyle: pagingStyle
    };
    $[115] = pagingStyle;
    $[116] = style;
    $[117] = tableSx;
    $[118] = t61;
  } else {
    t61 = $[118];
  }
  var _t = t61,
    style_0 = _t.style,
    tableSx_0 = _t.tableSx,
    pagingStyle_0 = _t.pagingStyle;
  var t62;
  if ($[119] !== containerHeight || $[120] !== finalPagingHeight || $[121] !== fullHeight || $[122] !== height || $[123] !== maxHeight || $[124] !== minHeight) {
    t62 = fullHeight ? {
      height: (containerHeight || 0) - (finalPagingHeight || 0) - 1,
      flex: 1,
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      marginBottom: finalPagingHeight || 0
    } : {
      height: height,
      minHeight: minHeight,
      maxHeight: maxHeight,
      marginBottom: -1
    };
    $[119] = containerHeight;
    $[120] = finalPagingHeight;
    $[121] = fullHeight;
    $[122] = height;
    $[123] = maxHeight;
    $[124] = minHeight;
    $[125] = t62;
  } else {
    t62 = $[125];
  }
  var contentContainerStyle = t62;
  var t63;
  if ($[126] !== containerHeight || $[127] !== finalPagingHeight || $[128] !== fullHeight || $[129] !== isNoData) {
    t63 = fullHeight && isNoData ? {
      flex: 1,
      height: (containerHeight || 0) - finalPagingHeight - 2
    } : undefined;
    $[126] = containerHeight;
    $[127] = finalPagingHeight;
    $[128] = fullHeight;
    $[129] = isNoData;
    $[130] = t63;
  } else {
    t63 = $[130];
  }
  var tableStyle = t63;
  var t64;
  if ($[131] !== contentContainerStyle || $[132] !== tableStyle) {
    t64 = {
      contentContainerStyle: contentContainerStyle,
      tableStyle: tableStyle
    };
    $[131] = contentContainerStyle;
    $[132] = tableStyle;
    $[133] = t64;
  } else {
    t64 = $[133];
  }
  var _t2 = t64,
    contentContainerStyle_0 = _t2.contentContainerStyle,
    tableStyle_0 = _t2.tableStyle;
  var t65;
  if ($[134] !== caption || $[135] !== defaultAlign || $[136] !== finalColumns || $[137] !== handleHeadCheckChange || $[138] !== items || $[139] !== topHeadRows) {
    t65 = finalColumns && /*#__PURE__*/React.createElement(PTableTopHead, {
      caption: caption,
      rows: topHeadRows,
      columns: finalColumns,
      items: items,
      defaultAlign: defaultAlign,
      onCheckChange: handleHeadCheckChange
    });
    $[134] = caption;
    $[135] = defaultAlign;
    $[136] = finalColumns;
    $[137] = handleHeadCheckChange;
    $[138] = items;
    $[139] = topHeadRows;
    $[140] = t65;
  } else {
    t65 = $[140];
  }
  var tableTopHead = t65;
  var t66;
  if ($[141] !== defaultAlign || $[142] !== defaultEllipsis || $[143] !== finalColumns || $[144] !== handleBodyCheckChange || $[145] !== noData || $[146] !== onClick || $[147] !== onGetBodyColumnClassName || $[148] !== onGetBodyColumnStyle || $[149] !== onGetBodyColumnSx || $[150] !== onGetBodyRowClassName || $[151] !== onGetBodyRowStyle || $[152] !== onGetBodyRowSx || $[153] !== showEvenColor || $[154] !== showOddColor || $[155] !== sortable$1 || $[156] !== sortableItems) {
    t66 = finalColumns && /*#__PURE__*/React.createElement(material.TableBody, null, sortableItems ? sortableItems.length > 0 ? /*#__PURE__*/React.createElement(PTableSortableBody, {
      items: sortableItems,
      columns: finalColumns,
      showOddColor: showOddColor,
      showEvenColor: showEvenColor,
      defaultAlign: defaultAlign,
      defaultEllipsis: defaultEllipsis,
      sortable: sortable$1,
      onClick: onClick,
      onCheckChange: handleBodyCheckChange,
      onGetBodyRowClassName: onGetBodyRowClassName,
      onGetBodyRowStyle: onGetBodyRowStyle,
      onGetBodyRowSx: onGetBodyRowSx,
      onGetBodyColumnClassName: onGetBodyColumnClassName,
      onGetBodyColumnSx: onGetBodyColumnSx,
      onGetBodyColumnStyle: onGetBodyColumnStyle
    }) : /*#__PURE__*/React.createElement(StyledBodyRow, null, /*#__PURE__*/React.createElement(material.TableCell, {
      colSpan: finalColumns.length,
      style: {
        flex: 1
      }
    }, noData ? noData : /*#__PURE__*/React.createElement(StyledNoDataDiv, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(material.Icon, null, "error")), /*#__PURE__*/React.createElement("div", null, "\uAC80\uC0C9\uB41C \uC815\uBCF4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.")))) : undefined);
    $[141] = defaultAlign;
    $[142] = defaultEllipsis;
    $[143] = finalColumns;
    $[144] = handleBodyCheckChange;
    $[145] = noData;
    $[146] = onClick;
    $[147] = onGetBodyColumnClassName;
    $[148] = onGetBodyColumnStyle;
    $[149] = onGetBodyColumnSx;
    $[150] = onGetBodyRowClassName;
    $[151] = onGetBodyRowStyle;
    $[152] = onGetBodyRowSx;
    $[153] = showEvenColor;
    $[154] = showOddColor;
    $[155] = sortable$1;
    $[156] = sortableItems;
    $[157] = t66;
  } else {
    t66 = $[157];
  }
  var tableBody = t66;
  var t67;
  if ($[158] !== defaultAlign || $[159] !== finalColumns || $[160] !== footer || $[161] !== isNoData || $[162] !== items) {
    t67 = finalColumns && !isNoData && footer && /*#__PURE__*/React.createElement(material.TableFooter, null, /*#__PURE__*/React.createElement(material.TableRow, null, finalColumns.map(function (column_8, idx_1) {
      return /*#__PURE__*/React.createElement(PTableFooterCell, {
        key: idx_1,
        column: column_8,
        items: items,
        defaultAlign: defaultAlign
      });
    })));
    $[158] = defaultAlign;
    $[159] = finalColumns;
    $[160] = footer;
    $[161] = isNoData;
    $[162] = items;
    $[163] = t67;
  } else {
    t67 = $[163];
  }
  var tableFooter = t67;
  var t68;
  if ($[164] !== TableContextSetHeadColumnChecked || $[165] !== TableContextSetHeadColumnCommands || $[166] !== TableContextSetItemColumnCheckDisabled || $[167] !== TableContextSetItemColumnChecked || $[168] !== TableContextSetItemColumnCommands || $[169] !== TableContextSetMenuOpen || $[170] !== className || $[171] !== containerHeightDetector || $[172] !== contentContainerStyle_0 || $[173] !== finalColumns || $[174] !== fullHeight || $[175] !== handleDragEnd || $[176] !== handlePageChange || $[177] !== menuOpen || $[178] !== openMenuId || $[179] !== (pagination === null || pagination === void 0 ? void 0 : pagination.className) || $[180] !== (pagination === null || pagination === void 0 ? void 0 : pagination.style) || $[181] !== (pagination === null || pagination === void 0 ? void 0 : pagination.sx) || $[182] !== paging || $[183] !== pagingAlign || $[184] !== pagingHeightResizeDetector || $[185] !== pagingStyle_0 || $[186] !== progressiveVisible || $[187] !== sensors || $[188] !== showEvenColor || $[189] !== showOddColor || $[190] !== sortable$1 || $[191] !== stickyHeader || $[192] !== style_0 || $[193] !== sx || $[194] !== tableBody || $[195] !== tableFooter || $[196] !== tableStyle_0 || $[197] !== tableSx_0 || $[198] !== tableTopHead) {
    t68 = finalColumns ? /*#__PURE__*/React.createElement(PTableContextProvider, {
      value: {
        menuOpen: menuOpen,
        openMenuId: openMenuId,
        progressiveVisible: progressiveVisible,
        setMenuOpen: TableContextSetMenuOpen,
        setItemColumnChecked: TableContextSetItemColumnChecked,
        setItemColumnCheckDisabled: TableContextSetItemColumnCheckDisabled,
        setItemColumnCommands: TableContextSetItemColumnCommands,
        setHeadColumnChecked: TableContextSetHeadColumnChecked,
        setHeadColumnCommands: TableContextSetHeadColumnCommands
      }
    }, /*#__PURE__*/React.createElement(material.Paper, {
      ref: fullHeight ? containerHeightDetector : undefined,
      className: classNames("PTable", className, !!stickyHeader && "sticky-header", !!fullHeight && "full-height", !!showOddColor && "odd-color", !!showEvenColor && "even-color", !!sortable$1 && "sortable"),
      variant: "outlined",
      style: style_0,
      sx: sx
    }, fullHeight ? /*#__PURE__*/React.createElement(SimpleBar, {
      ref: simpleBarRef,
      style: contentContainerStyle_0
    }, /*#__PURE__*/React.createElement(core.DndContext, {
      sensors: sensors,
      collisionDetection: core.closestCenter,
      onDragEnd: handleDragEnd
    }, /*#__PURE__*/React.createElement(material.Table, {
      stickyHeader: stickyHeader,
      sx: tableSx_0,
      style: tableStyle_0
    }, tableTopHead, tableBody, tableFooter))) : /*#__PURE__*/React.createElement(material.Box, {
      style: contentContainerStyle_0
    }, /*#__PURE__*/React.createElement(core.DndContext, {
      sensors: sensors,
      collisionDetection: core.closestCenter,
      onDragEnd: handleDragEnd
    }, /*#__PURE__*/React.createElement(material.Table, {
      stickyHeader: stickyHeader,
      sx: tableSx_0,
      style: tableStyle_0
    }, tableTopHead, tableBody, tableFooter))), finalColumns && paging && paging.total > 0 && /*#__PURE__*/React.createElement(material.Stack, {
      ref: fullHeight ? pagingHeightResizeDetector : undefined,
      alignItems: pagingAlign,
      style: pagingStyle_0
    }, /*#__PURE__*/React.createElement(PTablePagination, {
      className: pagination === null || pagination === void 0 ? void 0 : pagination.className,
      style: pagination === null || pagination === void 0 ? void 0 : pagination.style,
      sx: pagination === null || pagination === void 0 ? void 0 : pagination.sx,
      paging: paging,
      align: pagingAlign,
      onChange: handlePageChange
    })))) : null;
    $[164] = TableContextSetHeadColumnChecked;
    $[165] = TableContextSetHeadColumnCommands;
    $[166] = TableContextSetItemColumnCheckDisabled;
    $[167] = TableContextSetItemColumnChecked;
    $[168] = TableContextSetItemColumnCommands;
    $[169] = TableContextSetMenuOpen;
    $[170] = className;
    $[171] = containerHeightDetector;
    $[172] = contentContainerStyle_0;
    $[173] = finalColumns;
    $[174] = fullHeight;
    $[175] = handleDragEnd;
    $[176] = handlePageChange;
    $[177] = menuOpen;
    $[178] = openMenuId;
    $[179] = pagination === null || pagination === void 0 ? void 0 : pagination.className;
    $[180] = pagination === null || pagination === void 0 ? void 0 : pagination.style;
    $[181] = pagination === null || pagination === void 0 ? void 0 : pagination.sx;
    $[182] = paging;
    $[183] = pagingAlign;
    $[184] = pagingHeightResizeDetector;
    $[185] = pagingStyle_0;
    $[186] = progressiveVisible;
    $[187] = sensors;
    $[188] = showEvenColor;
    $[189] = showOddColor;
    $[190] = sortable$1;
    $[191] = stickyHeader;
    $[192] = style_0;
    $[193] = sx;
    $[194] = tableBody;
    $[195] = tableFooter;
    $[196] = tableStyle_0;
    $[197] = tableSx_0;
    $[198] = tableTopHead;
    $[199] = t68;
  } else {
    t68 = $[199];
  }
  return t68;
}
function _temp$1(col) {
  if (col.id) {
    return col.id;
  } else {
    return getNewColumnId();
  }
}var _excluded$2 = ["ref", "searchGroups"],
  _excluded2 = ["ref"];
var getSearchInfo = function getSearchInfo(search) {
  var searchInfo = {};
  if (search) {
    var ref = search.ref,
      searchGroups = search.searchGroups,
      props = _objectWithoutProperties(search, _excluded$2);
    searchInfo.ref = ref;
    searchInfo.searchGroups = searchGroups;
    searchInfo.props = props;
  }
  return searchInfo;
};
var getTableInfo = function getTableInfo(table) {
  if (table) {
    var ref = table.ref,
      props = _objectWithoutProperties(table, _excluded2);
    return {
      ref: ref,
      props: props
    };
  } else {
    return {};
  }
};
var deHash = function deHash() {
  var values = {};
  var hash = window.location.hash.substring(1);
  hash.replace(/([^=&]+)=([^&]*)/g, function (substring, key, value) {
    values[decodeURIComponent(key)] = decodeURIComponent(value);
    return substring;
  });
  return values;
};function PSearchTable(t0) {
  var $ = compilerRuntime.c(74);
  var ref = t0.ref,
    className = t0.className,
    initStyle = t0.style,
    sx = t0.sx,
    color = t0.color,
    hash = t0.hash,
    stickyHeader = t0.stickyHeader,
    fullHeight = t0.fullHeight,
    search = t0.search,
    table = t0.table,
    betweenSearchTableComponent = t0.betweenSearchTableComponent,
    onGetData = t0.onGetData,
    onRequestHashChange = t0.onRequestHashChange;
  var location = reactRouter.useLocation();
  var initPathRef = React.useRef(location.pathname);
  var searchRef = React.useRef(undefined);
  var tableRef = React.useRef(undefined);
  var t1;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t1 = {};
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  var lastGetDataDataRef = React.useRef(t1);
  var onGetDataRef = reactHook.useAutoUpdateRef(onGetData);
  var onRequestHashChangeRef = reactHook.useAutoUpdateRef(onRequestHashChange);
  var _useState = React.useState(true),
    _useState2 = _slicedToArray(_useState, 2),
    isFirstSearchSubmit = _useState2[0],
    setIsFirstSearchSubmit = _useState2[1];
  var _useState3 = React.useState(),
    _useState4 = _slicedToArray(_useState3, 2),
    tableData = _useState4[0],
    setTableData = _useState4[1];
  var t2;
  if ($[1] !== search) {
    t2 = function t2() {
      return getSearchInfo(search);
    };
    $[1] = search;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  var _useState5 = React.useState(t2),
    _useState6 = _slicedToArray(_useState5, 2),
    searchInfo = _useState6[0],
    setSearchInfo = _useState6[1];
  reactHook.useChanged(search) && setSearchInfo(getSearchInfo(search));
  var t3;
  if ($[3] !== table) {
    t3 = function t3() {
      return getTableInfo(table);
    };
    $[3] = table;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  var _useState7 = React.useState(t3),
    _useState8 = _slicedToArray(_useState7, 2),
    tableInfo = _useState8[0],
    setTableInfo = _useState8[1];
  reactHook.useChanged(table) && setTableInfo(getTableInfo(table));
  var t4;
  if ($[5] !== onGetDataRef) {
    t4 = function t4(data) {
      lastGetDataDataRef.current = data;
      if (onGetDataRef.current) {
        onGetDataRef.current(data).then(setTableData);
      }
    };
    $[5] = onGetDataRef;
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  var getData = t4;
  var getDataRef = reactHook.useAutoUpdateRef(getData);
  var t5;
  if ($[7] === Symbol["for"]("react.memo_cache_sentinel")) {
    t5 = function t5() {
      var commands = searchRef.current;
      if (commands) {
        commands.resetAll();
        var hashValues = deHash();
        Object.keys(hashValues).forEach(function (name) {
          var value = hashValues[name];
          if (name === "page") {
            commands.setValue(name, Number(value) || 1);
          } else {
            var itemCommands = commands.getItem(name);
            if (itemCommands) {
              bb29: switch (itemCommands.getType()) {
                case "PFormCheckbox":
                  {
                    if (compare.notEmpty(value)) {
                      var _itemCommands$getValu;
                      var checkCommands = itemCommands;
                      if (value.toString() === ((_itemCommands$getValu = itemCommands.getValue()) === null || _itemCommands$getValu === void 0 ? void 0 : _itemCommands$getValu.toString())) {
                        checkCommands.setChecked(true);
                      } else {
                        var _checkCommands$getUnc;
                        if (value.toString() === ((_checkCommands$getUnc = checkCommands.getUncheckedValue()) === null || _checkCommands$getUnc === void 0 ? void 0 : _checkCommands$getUnc.toString())) {
                          checkCommands.setChecked(false);
                        }
                      }
                    }
                    break bb29;
                  }
                case "PFormDatePicker":
                case "PFormDateTimePicker":
                case "PFormTimePicker":
                  {
                    if (compare.notEmpty(value)) {
                      var dateCommands = itemCommands;
                      var format_0 = dateCommands.getFormValueFormat();
                      var itemValue = dayjs(value, format_0);
                      itemCommands.setValue(itemValue.isValid() ? itemValue : null);
                    } else {
                      itemCommands.setValue(null);
                    }
                    break bb29;
                  }
                case "PFormDateRangePicker":
                  {
                    var dateRangePickerCommands_0 = itemCommands;
                    var fromName_0 = dateRangePickerCommands_0.getFormValueFromName();
                    var toName_0 = dateRangePickerCommands_0.getFormValueToName();
                    var format = dateRangePickerCommands_0.getFormValueFormat();
                    if (name === fromName_0) {
                      if (compare.notEmpty(value)) {
                        var startValue = dayjs(value, format);
                        dateRangePickerCommands_0.setFromValue(startValue.isValid() ? startValue : null);
                      } else {
                        dateRangePickerCommands_0.setFromValue(null);
                      }
                    } else {
                      if (name === toName_0) {
                        if (compare.notEmpty(value)) {
                          var endValue = dayjs(value, format);
                          dateRangePickerCommands_0.setToValue(endValue.isValid() ? endValue : null);
                        } else {
                          dateRangePickerCommands_0.setToValue(null);
                        }
                      }
                    }
                    break bb29;
                  }
                case "PFormYearRangePicker":
                  {
                    var dateRangePickerCommands = itemCommands;
                    var fromName = dateRangePickerCommands.getFormValueFromName();
                    var toName = dateRangePickerCommands.getFormValueToName();
                    if (name === fromName) {
                      dateRangePickerCommands.setFromValue(compare.notEmpty(value) ? Number(value) : null);
                    } else {
                      if (name === toName) {
                        dateRangePickerCommands.setToValue(compare.notEmpty(value) ? Number(value) : null);
                      }
                    }
                    break bb29;
                  }
                case "PFormMonthPicker":
                  {
                    var monthCommands = itemCommands;
                    var yearName = monthCommands.getFormValueYearName();
                    var monthName = monthCommands.getFormValueMonthName();
                    if (name === yearName) {
                      monthCommands.setYear(compare.notEmpty(value) ? Number(value) : null);
                    } else {
                      if (name === monthName) {
                        monthCommands.setMonth(compare.notEmpty(value) ? Number(value) : null);
                      }
                    }
                    break bb29;
                  }
                case "PFormMonthRangePicker":
                  {
                    var monthRangeCommands = itemCommands;
                    var fromYearName = monthRangeCommands.getFormValueFromYearName();
                    var fromMonthName = monthRangeCommands.getFormValueFromMonthName();
                    var toYearName = monthRangeCommands.getFormValueToYearName();
                    var toMonthName = monthRangeCommands.getFormValueToMonthName();
                    if (name === fromYearName) {
                      monthRangeCommands.setFromYear(compare.notEmpty(value) ? Number(value) : null);
                    } else {
                      if (name === fromMonthName) {
                        monthRangeCommands.setFromMonth(compare.notEmpty(value) ? Number(value) : null);
                      } else {
                        if (name === toYearName) {
                          monthRangeCommands.setToYear(compare.notEmpty(value) ? Number(value) : null);
                        } else {
                          if (name === toMonthName) {
                            monthRangeCommands.setToMonth(compare.notEmpty(value) ? Number(value) : null);
                          }
                        }
                      }
                    }
                    break bb29;
                  }
                default:
                  {
                    commands.setValue(name, value);
                  }
              }
            }
          }
        });
        return commands.getAllFormValue();
      }
    };
    $[7] = t5;
  } else {
    t5 = $[7];
  }
  var hashToSearchValue = t5;
  var hashToSearchValueRef = reactHook.useAutoUpdateRef(hashToSearchValue);
  var t6;
  if ($[8] !== getData || $[9] !== hash) {
    t6 = function t6(page) {
      if (page != null) {
        var _tableRef$current;
        (_tableRef$current = tableRef.current) === null || _tableRef$current === void 0 || _tableRef$current.scrollToTop();
      }
      var finalData;
      if (lastGetDataDataRef.current) {
        finalData = _objectSpread2({}, lastGetDataDataRef.current);
        if (page != null) {
          var _searchRef$current;
          (_searchRef$current = searchRef.current) === null || _searchRef$current === void 0 || _searchRef$current.setValue("page", page);
          finalData.page = page;
        }
      } else {
        var _searchRef$current3;
        if (hash) {
          hashToSearchValue();
        }
        if (page != null) {
          var _searchRef$current2;
          (_searchRef$current2 = searchRef.current) === null || _searchRef$current2 === void 0 || _searchRef$current2.setValue("page", page);
        }
        finalData = ((_searchRef$current3 = searchRef.current) === null || _searchRef$current3 === void 0 ? void 0 : _searchRef$current3.getAllFormValue()) || {};
      }
      getData(finalData);
    };
    $[8] = getData;
    $[9] = hash;
    $[10] = t6;
  } else {
    t6 = $[10];
  }
  var t7;
  var t8;
  var t9;
  if ($[11] === Symbol["for"]("react.memo_cache_sentinel")) {
    t7 = function t7() {
      return lastGetDataDataRef.current || {};
    };
    t8 = function t8() {
      return searchRef.current;
    };
    t9 = function t9() {
      return tableRef.current;
    };
    $[11] = t7;
    $[12] = t8;
    $[13] = t9;
  } else {
    t7 = $[11];
    t8 = $[12];
    t9 = $[13];
  }
  var t10;
  if ($[14] !== t6) {
    t10 = {
      reload: t6,
      getLastLoadData: t7,
      getSearch: t8,
      getTable: t9
    };
    $[14] = t6;
    $[15] = t10;
  } else {
    t10 = $[15];
  }
  reactHook.useForwardRef(ref, t10);
  var t11;
  if ($[16] !== getDataRef || $[17] !== hash || $[18] !== hashToSearchValueRef || $[19] !== location.pathname) {
    t11 = function t11() {
      if (hash && location.pathname === initPathRef.current) {
        var data_0 = hashToSearchValueRef.current();
        if (data_0) {
          getDataRef.current(data_0);
        }
      }
    };
    $[16] = getDataRef;
    $[17] = hash;
    $[18] = hashToSearchValueRef;
    $[19] = location.pathname;
    $[20] = t11;
  } else {
    t11 = $[20];
  }
  var effectEvent = React.useEffectEvent(t11);
  var t12;
  if ($[21] !== effectEvent) {
    t12 = function t12() {
      effectEvent();
    };
    $[21] = effectEvent;
    $[22] = t12;
  } else {
    t12 = $[22];
  }
  var t13;
  if ($[23] !== hash || $[24] !== location.hash || $[25] !== location.pathname) {
    t13 = [hash, location.pathname, location.hash];
    $[23] = hash;
    $[24] = location.hash;
    $[25] = location.pathname;
    $[26] = t13;
  } else {
    t13 = $[26];
  }
  React.useEffect(t12, t13);
  var t14;
  if ($[27] !== getData || $[28] !== onRequestHashChangeRef) {
    t14 = function t14(params) {
      if (onRequestHashChangeRef.current) {
        var hashes = [];
        Object.keys(params).forEach(function (name_0) {
          var value_0 = params[name_0];
          if (name_0 === "page") {
            if (Number(value_0) > 1) {
              hashes.push("".concat(name_0, "=").concat(value_0));
            }
          } else {
            if (searchRef.current) {
              var itemCommands_0 = searchRef.current.getItem(name_0);
              if (itemCommands_0) {
                var resetValue = null;
                bb226: switch (itemCommands_0.getType()) {
                  case "PFormDateRangePicker":
                  case "PFormYearRangePicker":
                    {
                      var commands_2 = itemCommands_0;
                      var itemName_1 = itemCommands_0.getName();
                      var fromName_1 = commands_2.getFormValueFromName();
                      var fromSuffix = commands_2.getFormValueFromNameSuffix();
                      var toName_1 = commands_2.getFormValueToName();
                      var toSuffix = commands_2.getFormValueToNameSuffix();
                      if (name_0 === fromName_1) {
                        resetValue = searchRef.current.getFormReset(itemName_1, fromSuffix);
                      } else {
                        if (name_0 === toName_1) {
                          resetValue = searchRef.current.getFormReset(itemName_1, toSuffix);
                        }
                      }
                      break bb226;
                    }
                  case "PFormMonthPicker":
                    {
                      var commands_1 = itemCommands_0;
                      var itemName_0 = commands_1.getName();
                      var yearName_0 = commands_1.getFormValueYearName();
                      var yearSuffix = commands_1.getFormValueYearNameSuffix();
                      var monthName_0 = commands_1.getFormValueMonthName();
                      var monthSuffix = commands_1.getFormValueMonthNameSuffix();
                      if (name_0 === yearName_0) {
                        resetValue = searchRef.current.getFormReset(itemName_0, yearSuffix);
                      } else {
                        if (name_0 === monthName_0) {
                          resetValue = searchRef.current.getFormReset(itemName_0, monthSuffix);
                        }
                      }
                      break bb226;
                    }
                  case "PFormMonthRangePicker":
                    {
                      var commands_0 = itemCommands_0;
                      var itemName = commands_0.getName();
                      var fromYearName_0 = commands_0.getFormValueFromYearName();
                      var fromYearSuffix = commands_0.getFormValueFromYearNameSuffix();
                      var fromMonthName_0 = commands_0.getFormValueFromMonthName();
                      var fromMonthSuffix = commands_0.getFormValueFromMonthNameSuffix();
                      var toYearName_0 = commands_0.getFormValueToYearName();
                      var toYearSuffix = commands_0.getFormValueToYearNameSuffix();
                      var toMonthName_0 = commands_0.getFormValueToMonthName();
                      var toMonthSuffix = commands_0.getFormValueToMonthNameSuffix();
                      if (name_0 === fromYearName_0) {
                        resetValue = searchRef.current.getFormReset(itemName, fromYearSuffix);
                      } else {
                        if (name_0 === fromMonthName_0) {
                          resetValue = searchRef.current.getFormReset(itemName, fromMonthSuffix);
                        } else {
                          if (name_0 === toYearName_0) {
                            resetValue = searchRef.current.getFormReset(itemName, toYearSuffix);
                          } else {
                            if (name_0 === toMonthName_0) {
                              resetValue = searchRef.current.getFormReset(itemName, toMonthSuffix);
                            }
                          }
                        }
                      }
                      break bb226;
                    }
                  default:
                    {
                      resetValue = searchRef.current.getFormReset(name_0);
                    }
                }
                if (resetValue != null && !compare.equal(resetValue, value_0) && _typeof(value_0) !== "object") {
                  hashes.push("".concat(name_0, "=").concat(encodeURIComponent(value_0)));
                }
              }
            }
          }
        });
        var finalHash = hashes.join("&");
        if (window.location.hash.substring(1) === finalHash) {
          getData(params);
        } else {
          onRequestHashChangeRef.current(hashes.join("&"));
        }
      }
    };
    $[27] = getData;
    $[28] = onRequestHashChangeRef;
    $[29] = t14;
  } else {
    t14 = $[29];
  }
  var hashChange = t14;
  var t15;
  if ($[30] !== getData || $[31] !== hash || $[32] !== hashChange) {
    t15 = function t15(page_0) {
      var _searchRef$current4;
      (_searchRef$current4 = searchRef.current) === null || _searchRef$current4 === void 0 || _searchRef$current4.setValue("page", page_0);
      var finalData_0;
      if (lastGetDataDataRef.current) {
        finalData_0 = _objectSpread2({}, lastGetDataDataRef.current);
        finalData_0.page = page_0;
      } else {
        var _searchRef$current5;
        finalData_0 = (_searchRef$current5 = searchRef.current) === null || _searchRef$current5 === void 0 ? void 0 : _searchRef$current5.getAllFormValue();
      }
      if (hash) {
        hashChange(finalData_0 || {});
      } else {
        getData(finalData_0 || {});
      }
    };
    $[30] = getData;
    $[31] = hash;
    $[32] = hashChange;
    $[33] = t15;
  } else {
    t15 = $[33];
  }
  var handlePageChange = t15;
  var t16;
  if ($[34] !== getData || $[35] !== hash || $[36] !== hashChange || $[37] !== isFirstSearchSubmit) {
    t16 = function t16(data_1) {
      var _tableRef$current2;
      (_tableRef$current2 = tableRef.current) === null || _tableRef$current2 === void 0 || _tableRef$current2.scrollToTop();
      if (isFirstSearchSubmit) {
        setIsFirstSearchSubmit(false);
        if (!hash) {
          getData(data_1);
        }
      } else {
        var _searchRef$current6;
        (_searchRef$current6 = searchRef.current) === null || _searchRef$current6 === void 0 || _searchRef$current6.setValue("page", 1);
        var finalData_1 = _objectSpread2(_objectSpread2({}, data_1), {}, {
          page: 1
        });
        if (hash) {
          hashChange(finalData_1);
        } else {
          getData(finalData_1);
        }
      }
    };
    $[34] = getData;
    $[35] = hash;
    $[36] = hashChange;
    $[37] = isFirstSearchSubmit;
    $[38] = t16;
  } else {
    t16 = $[38];
  }
  var handleSearchSubmit = t16;
  var t17 = searchInfo.searchGroups ? undefined : "none";
  var t18;
  if ($[39] !== t17) {
    t18 = {
      display: t17
    };
    $[39] = t17;
    $[40] = t18;
  } else {
    t18 = $[40];
  }
  var t19;
  if ($[41] !== searchInfo) {
    t19 = function t19(commands_3) {
      if (searchInfo.ref) {
        if (typeof searchInfo.ref === "function") {
          searchInfo.ref(commands_3);
        } else {
          setSearchInfo(function (prev) {
            return _objectSpread2(_objectSpread2({}, prev), {}, {
              ref: {
                current: commands_3
              }
            });
          });
        }
      }
      searchRef.current = commands_3 || undefined;
    };
    $[41] = searchInfo;
    $[42] = t19;
  } else {
    t19 = $[42];
  }
  var t20;
  if ($[43] === Symbol["for"]("react.memo_cache_sentinel")) {
    t20 = /*#__PURE__*/React.createElement(reactForm.PSearchGroup, {
      hidden: true
    }, /*#__PURE__*/React.createElement(reactForm.PFormHidden, {
      name: "page",
      value: 1
    }));
    $[43] = t20;
  } else {
    t20 = $[43];
  }
  var t21;
  if ($[44] !== color || $[45] !== handleSearchSubmit || $[46] !== searchInfo.props || $[47] !== searchInfo.searchGroups || $[48] !== t19) {
    t21 = /*#__PURE__*/React.createElement(reactForm.PSearch, _extends({
      color: color
    }, searchInfo.props, {
      ref: t19,
      autoSubmit: true,
      onSubmit: handleSearchSubmit
    }), t20, searchInfo.searchGroups);
    $[44] = color;
    $[45] = handleSearchSubmit;
    $[46] = searchInfo.props;
    $[47] = searchInfo.searchGroups;
    $[48] = t19;
    $[49] = t21;
  } else {
    t21 = $[49];
  }
  var t22;
  if ($[50] !== t18 || $[51] !== t21) {
    t22 = /*#__PURE__*/React.createElement(material.Grid, {
      sx: t18
    }, t21);
    $[50] = t18;
    $[51] = t21;
    $[52] = t22;
  } else {
    t22 = $[52];
  }
  var searchView = t22;
  var t23;
  if ($[53] !== fullHeight || $[54] !== handlePageChange || $[55] !== stickyHeader || $[56] !== (tableData === null || tableData === void 0 ? void 0 : tableData.items) || $[57] !== (tableData === null || tableData === void 0 ? void 0 : tableData.paging) || $[58] !== tableInfo) {
    tableData === null || tableData === void 0 || tableData.items;
    tableData === null || tableData === void 0 || tableData.paging;
    t23 = function (_tableInfo$props, _tableInfo$props2) {
      return /*#__PURE__*/React.createElement(material.Grid, {
        style: fullHeight ? {
          flex: 1,
          display: "flex",
          flexDirection: "column"
        } : undefined
      }, /*#__PURE__*/React.createElement(PTable, _extends({}, tableInfo.props, {
        stickyHeader: stickyHeader || ((_tableInfo$props = tableInfo.props) === null || _tableInfo$props === void 0 ? void 0 : _tableInfo$props.stickyHeader),
        fullHeight: fullHeight || ((_tableInfo$props2 = tableInfo.props) === null || _tableInfo$props2 === void 0 ? void 0 : _tableInfo$props2.fullHeight),
        ref: function ref(commands_4) {
          if (tableInfo.ref) {
            if (typeof tableInfo.ref === "function") {
              tableInfo.ref(commands_4);
            } else {
              tableInfo.ref.current = commands_4;
            }
          }
          tableRef.current = commands_4 || undefined;
        },
        items: tableData === null || tableData === void 0 ? void 0 : tableData.items,
        paging: tableData === null || tableData === void 0 ? void 0 : tableData.paging,
        onPageChange: handlePageChange
      })));
    }();
    $[53] = fullHeight;
    $[54] = handlePageChange;
    $[55] = stickyHeader;
    $[56] = tableData === null || tableData === void 0 ? void 0 : tableData.items;
    $[57] = tableData === null || tableData === void 0 ? void 0 : tableData.paging;
    $[58] = tableInfo;
    $[59] = t23;
  } else {
    t23 = $[59];
  }
  var tableView = t23;
  var t24;
  if ($[60] !== className) {
    t24 = classNames("PSearchTable", className);
    $[60] = className;
    $[61] = t24;
  } else {
    t24 = $[61];
  }
  var t25;
  if ($[62] !== fullHeight || $[63] !== initStyle) {
    t25 = fullHeight ? _objectSpread2(_objectSpread2({}, initStyle), {}, {
      flex: 1,
      display: "flex"
    }) : initStyle;
    $[62] = fullHeight;
    $[63] = initStyle;
    $[64] = t25;
  } else {
    t25 = $[64];
  }
  var t26;
  if ($[65] !== betweenSearchTableComponent) {
    t26 = betweenSearchTableComponent && /*#__PURE__*/React.createElement(material.Grid, null, betweenSearchTableComponent);
    $[65] = betweenSearchTableComponent;
    $[66] = t26;
  } else {
    t26 = $[66];
  }
  var t27;
  if ($[67] !== searchView || $[68] !== sx || $[69] !== t24 || $[70] !== t25 || $[71] !== t26 || $[72] !== tableView) {
    t27 = /*#__PURE__*/React.createElement(material.Grid, {
      container: true,
      direction: "column",
      spacing: 1,
      className: t24,
      style: t25,
      sx: sx
    }, searchView, t26, tableView);
    $[67] = searchView;
    $[68] = sx;
    $[69] = t24;
    $[70] = t25;
    $[71] = t26;
    $[72] = tableView;
    $[73] = t27;
  } else {
    t27 = $[73];
  }
  return t27;
}var _excluded$1 = ["children", "className", "sx", "variant", "color", "startIcon", "endIcon", "onClick"];
var PTableButton = function PTableButton(t0) {
  var $ = compilerRuntime.c(25);
  var children;
  var className;
  var endIcon;
  var initSx;
  var onClick;
  var props;
  var startIcon;
  var t1;
  var t2;
  if ($[0] !== t0) {
    var _t = t0;
    children = _t.children;
    className = _t.className;
    initSx = _t.sx;
    t1 = _t.variant;
    t2 = _t.color;
    startIcon = _t.startIcon;
    endIcon = _t.endIcon;
    onClick = _t.onClick;
    props = _objectWithoutProperties(_t, _excluded$1);
    $[0] = t0;
    $[1] = children;
    $[2] = className;
    $[3] = endIcon;
    $[4] = initSx;
    $[5] = onClick;
    $[6] = props;
    $[7] = startIcon;
    $[8] = t1;
    $[9] = t2;
  } else {
    children = $[1];
    className = $[2];
    endIcon = $[3];
    initSx = $[4];
    onClick = $[5];
    props = $[6];
    startIcon = $[7];
    t1 = $[8];
    t2 = $[9];
  }
  var variant = t1 === undefined ? "outlined" : t1;
  var color = t2 === undefined ? "primary" : t2;
  var t3;
  if ($[10] !== className) {
    t3 = classNames(className, "PTableButton");
    $[10] = className;
    $[11] = t3;
  } else {
    t3 = $[11];
  }
  var t4 = compare.empty(startIcon) && compare.empty(endIcon) ? "7px !important" : compare.empty(children) ? "5px !important" : "7px !important";
  var t5;
  if ($[12] !== initSx || $[13] !== t4) {
    t5 = _objectSpread2({
      minWidth: 0,
      px: t4
    }, initSx);
    $[12] = initSx;
    $[13] = t4;
    $[14] = t5;
  } else {
    t5 = $[14];
  }
  var t6;
  if ($[15] !== children || $[16] !== color || $[17] !== endIcon || $[18] !== onClick || $[19] !== props || $[20] !== startIcon || $[21] !== t3 || $[22] !== t5 || $[23] !== variant) {
    t6 = /*#__PURE__*/React.createElement(reactComponent.PButton, _extends({
      className: t3,
      variant: variant,
      type: "button",
      size: "small",
      sx: t5,
      color: color,
      startIcon: startIcon,
      endIcon: endIcon,
      onClick: onClick
    }, props), children);
    $[15] = children;
    $[16] = color;
    $[17] = endIcon;
    $[18] = onClick;
    $[19] = props;
    $[20] = startIcon;
    $[21] = t3;
    $[22] = t5;
    $[23] = variant;
    $[24] = t6;
  } else {
    t6 = $[24];
  }
  return t6;
};var _excluded = ["ref", "children", "className", "sx", "color", "variant", "startIcon", "placement", "inModal", "zIndex", "menuList"];
var PTableMenuButton = function PTableMenuButton(t0) {
  var $ = compilerRuntime.c(84);
  var children;
  var className;
  var inModal;
  var initSx;
  var menuList;
  var props;
  var ref;
  var startIcon;
  var t1;
  var t2;
  var t3;
  var zIndex;
  if ($[0] !== t0) {
    var _t = t0;
    ref = _t.ref;
    children = _t.children;
    className = _t.className;
    initSx = _t.sx;
    t1 = _t.color;
    t2 = _t.variant;
    startIcon = _t.startIcon;
    t3 = _t.placement;
    inModal = _t.inModal;
    zIndex = _t.zIndex;
    menuList = _t.menuList;
    props = _objectWithoutProperties(_t, _excluded);
    $[0] = t0;
    $[1] = children;
    $[2] = className;
    $[3] = inModal;
    $[4] = initSx;
    $[5] = menuList;
    $[6] = props;
    $[7] = ref;
    $[8] = startIcon;
    $[9] = t1;
    $[10] = t2;
    $[11] = t3;
    $[12] = zIndex;
  } else {
    children = $[1];
    className = $[2];
    inModal = $[3];
    initSx = $[4];
    menuList = $[5];
    props = $[6];
    ref = $[7];
    startIcon = $[8];
    t1 = $[9];
    t2 = $[10];
    t3 = $[11];
    zIndex = $[12];
  }
  var color = t1 === undefined ? "primary" : t1;
  var variant = t2 === undefined ? "text" : t2;
  var placement = t3 === undefined ? "bottom" : t3;
  var buttonId = React.useId();
  var menuId = React.useId();
  var _useTableState = useTableState(),
    menuOpen = _useTableState.menuOpen,
    openMenuId = _useTableState.openMenuId,
    setMenuOpen = _useTableState.setMenuOpen;
  var _useState = React.useState(),
    _useState2 = _slicedToArray(_useState, 2),
    anchorEl = _useState2[0],
    setAnchorEl = _useState2[1];
  var _useState3 = React.useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    open = _useState4[0],
    setOpen = _useState4[1];
  var t4;
  if ($[13] !== menuId || $[14] !== menuOpen || $[15] !== open || $[16] !== openMenuId) {
    t4 = function t4() {
      if (open && menuOpen && openMenuId !== menuId) {
        setOpen(false);
      }
    };
    $[13] = menuId;
    $[14] = menuOpen;
    $[15] = open;
    $[16] = openMenuId;
    $[17] = t4;
  } else {
    t4 = $[17];
  }
  var effectEvent = React.useEffectEvent(t4);
  var t5;
  if ($[18] !== effectEvent) {
    t5 = function t5() {
      effectEvent();
    };
    $[18] = effectEvent;
    $[19] = t5;
  } else {
    t5 = $[19];
  }
  var t6;
  if ($[20] !== menuId || $[21] !== menuOpen || $[22] !== open || $[23] !== openMenuId) {
    t6 = [menuId, menuOpen, open, openMenuId];
    $[20] = menuId;
    $[21] = menuOpen;
    $[22] = open;
    $[23] = openMenuId;
    $[24] = t6;
  } else {
    t6 = $[24];
  }
  React.useEffect(t5, t6);
  var t7;
  if ($[25] !== menuId || $[26] !== open || $[27] !== setMenuOpen) {
    t7 = function t7() {
      setOpen(_temp);
      if (!open) {
        setMenuOpen(true, menuId);
      } else {
        setMenuOpen(false, menuId);
      }
    };
    $[25] = menuId;
    $[26] = open;
    $[27] = setMenuOpen;
    $[28] = t7;
  } else {
    t7 = $[28];
  }
  var handleClick = t7;
  var t8;
  if ($[29] !== menuId || $[30] !== open || $[31] !== setMenuOpen) {
    t8 = function t8() {
      if (open) {
        setOpen(false);
        setMenuOpen(false, menuId);
      }
    };
    $[29] = menuId;
    $[30] = open;
    $[31] = setMenuOpen;
    $[32] = t8;
  } else {
    t8 = $[32];
  }
  var handleClose = t8;
  var t9;
  if ($[33] !== menuId || $[34] !== open || $[35] !== setMenuOpen) {
    t9 = function t9(event) {
      if (event.key === "Tab") {
        event.preventDefault();
        if (open) {
          setOpen(false);
          setMenuOpen(false, menuId);
        }
      } else {
        if (event.key === "Escape") {
          if (open) {
            setOpen(false);
            setMenuOpen(false, menuId);
          }
        }
      }
    };
    $[33] = menuId;
    $[34] = open;
    $[35] = setMenuOpen;
    $[36] = t9;
  } else {
    t9 = $[36];
  }
  var handleListKeyDown = t9;
  var t10;
  if ($[37] !== buttonId || $[38] !== handleClose || $[39] !== handleListKeyDown || $[40] !== menuId || $[41] !== menuList || $[42] !== open) {
    var _t2;
    if ($[44] !== buttonId || $[45] !== handleClose || $[46] !== handleListKeyDown || $[47] !== menuId || $[48] !== open) {
      _t2 = {
        autoFocusItem: open,
        id: menuId,
        "aria-labelledby": buttonId,
        onKeyDown: handleListKeyDown,
        onClick: handleClose
      };
      $[44] = buttonId;
      $[45] = handleClose;
      $[46] = handleListKeyDown;
      $[47] = menuId;
      $[48] = open;
      $[49] = _t2;
    } else {
      _t2 = $[49];
    }
    t10 = /*#__PURE__*/React.cloneElement(menuList, _t2);
    $[37] = buttonId;
    $[38] = handleClose;
    $[39] = handleListKeyDown;
    $[40] = menuId;
    $[41] = menuList;
    $[42] = open;
    $[43] = t10;
  } else {
    t10 = $[43];
  }
  var finalMenuList = t10;
  var icon = !startIcon && !children ? "MoreVert" : undefined;
  var t11;
  if ($[50] !== ref) {
    t11 = function t11(r) {
      if (ref) {
        if (typeof ref === "function") {
          ref(r);
        } else {
          ref.current = r;
        }
      }
      setAnchorEl(r);
    };
    $[50] = ref;
    $[51] = t11;
  } else {
    t11 = $[51];
  }
  var t12 = open ? menuId : undefined;
  var t13 = open ? "true" : undefined;
  var t14;
  if ($[52] !== className) {
    t14 = classNames(className, "PTableMenuButton");
    $[52] = className;
    $[53] = t14;
  } else {
    t14 = $[53];
  }
  var t15 = !children ? 0.7 : icon || startIcon ? 0.7 : variant === "text" ? 1.2 : 0.7;
  var t16;
  if ($[54] !== initSx || $[55] !== t15) {
    t16 = _objectSpread2({
      minWidth: 0,
      pl: t15
    }, initSx);
    $[54] = initSx;
    $[55] = t15;
    $[56] = t16;
  } else {
    t16 = $[56];
  }
  var t17;
  if ($[57] !== buttonId || $[58] !== children || $[59] !== color || $[60] !== handleClick || $[61] !== icon || $[62] !== props || $[63] !== t11 || $[64] !== t12 || $[65] !== t13 || $[66] !== t14 || $[67] !== t16 || $[68] !== variant) {
    t17 = /*#__PURE__*/React.createElement(reactComponent.PButton, _extends({
      ref: t11,
      id: buttonId,
      variant: variant,
      "aria-controls": t12,
      "aria-expanded": t13,
      "aria-haspopup": "true",
      className: t14,
      type: "button",
      size: "small",
      sx: t16,
      color: color,
      startIcon: icon,
      onClick: handleClick
    }, props), children);
    $[57] = buttonId;
    $[58] = children;
    $[59] = color;
    $[60] = handleClick;
    $[61] = icon;
    $[62] = props;
    $[63] = t11;
    $[64] = t12;
    $[65] = t13;
    $[66] = t14;
    $[67] = t16;
    $[68] = variant;
    $[69] = t17;
  } else {
    t17 = $[69];
  }
  var t18 = inModal ? zIndex === undefined ? 1301 : zIndex : zIndex;
  var t19;
  if ($[70] !== t18) {
    t19 = {
      zIndex: t18
    };
    $[70] = t18;
    $[71] = t19;
  } else {
    t19 = $[71];
  }
  var t20;
  if ($[72] !== finalMenuList || $[73] !== handleClose) {
    t20 = function t20(t21) {
      var TransitionProps = t21.TransitionProps,
        placement_0 = t21.placement;
      var placements = placement_0.split("-");
      var transformOrigin;
      if (placements[0] === "left") {
        transformOrigin = "right";
      } else {
        if (placements[0] === "right") {
          transformOrigin = "left";
        } else {
          if (placements[0] === "top") {
            transformOrigin = "bottom";
          } else {
            if (placements[0] === "bottom") {
              transformOrigin = "top";
            } else {
              transformOrigin = "top";
            }
          }
        }
      }
      return /*#__PURE__*/React.createElement(material.Grow, _extends({}, TransitionProps, {
        style: {
          transformOrigin: transformOrigin
        }
      }), /*#__PURE__*/React.createElement(material.Paper, null, /*#__PURE__*/React.createElement(material.ClickAwayListener, {
        onClickAway: handleClose
      }, finalMenuList)));
    };
    $[72] = finalMenuList;
    $[73] = handleClose;
    $[74] = t20;
  } else {
    t20 = $[74];
  }
  var t21;
  if ($[75] !== anchorEl || $[76] !== open || $[77] !== placement || $[78] !== t19 || $[79] !== t20) {
    t21 = /*#__PURE__*/React.createElement(material.Popper, {
      className: "PTableMenuButton-Popper",
      open: open,
      anchorEl: anchorEl,
      role: undefined,
      placement: placement,
      transition: true,
      style: t19
    }, t20);
    $[75] = anchorEl;
    $[76] = open;
    $[77] = placement;
    $[78] = t19;
    $[79] = t20;
    $[80] = t21;
  } else {
    t21 = $[80];
  }
  var t22;
  if ($[81] !== t17 || $[82] !== t21) {
    t22 = /*#__PURE__*/React.createElement("span", null, t17, t21);
    $[81] = t17;
    $[82] = t21;
    $[83] = t22;
  } else {
    t22 = $[83];
  }
  return t22;
};
function _temp(old) {
  return !old;
}exports.PInfoTable=PInfoTable;exports.PSearchTable=PSearchTable;exports.PTable=PTable;exports.PTableBodyCell=PTableBodyCell;exports.PTableBodyRow=PTableBodyRow;exports.PTableButton=PTableButton;exports.PTableCommonCell=PTableCommonCell;exports.PTableFooterCell=PTableFooterCell;exports.PTableHeadCell=PTableHeadCell;exports.PTableMenuButton=PTableMenuButton;exports.PTablePagination=PTablePagination;exports.PTableSortableBody=PTableSortableBody;exports.PTableSortableBodyBlock=PTableSortableBodyBlock;exports.PTableTopHead=PTableTopHead;