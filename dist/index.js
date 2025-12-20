'use strict';var compilerRuntime=require('react/compiler-runtime'),React=require('react'),classNames=require('classnames'),material=require('@mui/material'),dayjs=require('dayjs'),compare=require('@pdg/compare'),formatting=require('@pdg/formatting'),reactComponent=require('@pdg/react-component'),reactForm=require('@pdg/react-form'),core=require('@dnd-kit/core'),sortable=require('@dnd-kit/sortable'),SimpleBar=require('simplebar-react'),uuid=require('uuid'),reactHook=require('@pdg/react-hook'),reactIntersectionObserver=require('react-intersection-observer'),reactRouter=require('react-router');function _interopNamespaceDefault(e){var n=Object.create(null);if(e){Object.keys(e).forEach(function(k){if(k!=='default'){var d=Object.getOwnPropertyDescriptor(e,k);Object.defineProperty(n,k,d.get?d:{enumerable:true,get:function(){return e[k]}});}})}n.default=e;return Object.freeze(n)}var React__namespace=/*#__PURE__*/_interopNamespaceDefault(React);function insertStyle(css) {
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
  var $ = compilerRuntime.c(44);
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
  if ($[9] !== dividerColor || $[10] !== ellipsis || $[11] !== labelClassName || $[12] !== labelColor || $[13] !== labelStyle || $[14] !== labelSx || $[15] !== onCopyToClipboard || $[16] !== renderItems || $[17] !== valueClassName || $[18] !== valueStyle || $[19] !== valueSx || $[20] !== valueUnderline) {
    var _t3;
    if ($[22] !== dividerColor || $[23] !== ellipsis || $[24] !== labelClassName || $[25] !== labelColor || $[26] !== labelStyle || $[27] !== labelSx || $[28] !== onCopyToClipboard || $[29] !== valueClassName || $[30] !== valueStyle || $[31] !== valueSx || $[32] !== valueUnderline) {
      _t3 = function _t3(t8, idx) {
        var item_1 = t8.item,
          data_0 = t8.data,
          copyToClipboardText_0 = t8.copyToClipboardText,
          sizeProps_0 = t8.sizeProps;
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
          onCopy: onCopyToClipboard ? function () {
            return onCopyToClipboard(item_1, copyToClipboardText_0);
          } : undefined
        }, /*#__PURE__*/React.createElement(ClipboardIconButton, _extends({
          size: "small",
          color: "primary"
        }, item_1.clipboardProps), /*#__PURE__*/React.createElement(reactComponent.PIcon, null, item_1.clipboardIcon || "ContentPaste"))))));
      };
      $[22] = dividerColor;
      $[23] = ellipsis;
      $[24] = labelClassName;
      $[25] = labelColor;
      $[26] = labelStyle;
      $[27] = labelSx;
      $[28] = onCopyToClipboard;
      $[29] = valueClassName;
      $[30] = valueStyle;
      $[31] = valueSx;
      $[32] = valueUnderline;
      $[33] = _t3;
    } else {
      _t3 = $[33];
    }
    t6 = renderItems.map(_t3);
    $[9] = dividerColor;
    $[10] = ellipsis;
    $[11] = labelClassName;
    $[12] = labelColor;
    $[13] = labelStyle;
    $[14] = labelSx;
    $[15] = onCopyToClipboard;
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
  if ($[34] !== className) {
    t7 = classNames("PInfoTable", className);
    $[34] = className;
    $[35] = t7;
  } else {
    t7 = $[35];
  }
  var t8;
  if ($[36] !== columnSpacing || $[37] !== content || $[38] !== rowSpacing || $[39] !== spacing || $[40] !== style || $[41] !== sx || $[42] !== t7) {
    t8 = /*#__PURE__*/React.createElement(material.Grid, {
      container: true,
      spacing: spacing,
      columnSpacing: columnSpacing,
      rowSpacing: rowSpacing,
      className: t7,
      style: style,
      sx: sx
    }, content);
    $[36] = columnSpacing;
    $[37] = content;
    $[38] = rowSpacing;
    $[39] = spacing;
    $[40] = style;
    $[41] = sx;
    $[42] = t7;
    $[43] = t8;
  } else {
    t8 = $[43];
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
  var $ = compilerRuntime.c(33);
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
  var t2;
  if ($[0] !== checked || $[1] !== column || $[2] !== setHeadColumnChecked) {
    t1 = function t1() {
      if (column.type === "check") {
        setHeadColumnChecked(column, checked);
      }
    };
    t2 = [column, checked, setHeadColumnChecked];
    $[0] = checked;
    $[1] = column;
    $[2] = setHeadColumnChecked;
    $[3] = t1;
    $[4] = t2;
  } else {
    t1 = $[3];
    t2 = $[4];
  }
  React.useEffect(t1, t2);
  var t3;
  var t4;
  if ($[5] !== column || $[6] !== setHeadColumnCommands) {
    t3 = function t3() {
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
    t4 = [setHeadColumnCommands, column];
    $[5] = column;
    $[6] = setHeadColumnCommands;
    $[7] = t3;
    $[8] = t4;
  } else {
    t3 = $[7];
    t4 = $[8];
  }
  React.useEffect(t3, t4);
  var t5;
  if (column.type === "check") {
    if (column.hideAllCheck) {
      var _column$head;
      if ((_column$head = column.head) !== null && _column$head !== void 0 && _column$head.onRender) {
        var _t;
        if ($[9] !== column.head || $[10] !== items) {
          var _column$head2;
          _t = (_column$head2 = column.head) === null || _column$head2 === void 0 ? void 0 : _column$head2.onRender(items);
          $[9] = column.head;
          $[10] = items;
          $[11] = _t;
        } else {
          _t = $[11];
        }
        t5 = _t;
      } else {
        if (typeof column.label === "string") {
          var _t2;
          if ($[12] !== column.label) {
            _t2 = /*#__PURE__*/React.createElement("div", {
              dangerouslySetInnerHTML: {
                __html: column.label
              }
            });
            $[12] = column.label;
            $[13] = _t2;
          } else {
            _t2 = $[13];
          }
          t5 = _t2;
        } else {
          t5 = column.label;
        }
      }
    } else {
      var _t3;
      if ($[14] !== column || $[15] !== onCheckChange) {
        _t3 = function _t3(e, newChecked) {
          _setChecked(newChecked);
          onCheckChange && onCheckChange(column, newChecked);
        };
        $[14] = column;
        $[15] = onCheckChange;
        $[16] = _t3;
      } else {
        _t3 = $[16];
      }
      var _t4;
      if ($[17] !== checkDisabled || $[18] !== checked || $[19] !== _t3) {
        _t4 = /*#__PURE__*/React.createElement(material.Checkbox, {
          checked: checked,
          disabled: checkDisabled,
          onChange: _t3
        });
        $[17] = checkDisabled;
        $[18] = checked;
        $[19] = _t3;
        $[20] = _t4;
      } else {
        _t4 = $[20];
      }
      t5 = _t4;
    }
  } else {
    var _column$head3;
    if ((_column$head3 = column.head) !== null && _column$head3 !== void 0 && _column$head3.onRender) {
      var _t5;
      if ($[21] !== column.head || $[22] !== items) {
        var _column$head4;
        _t5 = (_column$head4 = column.head) === null || _column$head4 === void 0 ? void 0 : _column$head4.onRender(items);
        $[21] = column.head;
        $[22] = items;
        $[23] = _t5;
      } else {
        _t5 = $[23];
      }
      t5 = _t5;
    } else {
      if (typeof column.label === "string") {
        var _t6;
        if ($[24] !== column.label) {
          _t6 = /*#__PURE__*/React.createElement("div", {
            dangerouslySetInnerHTML: {
              __html: column.label
            }
          });
          $[24] = column.label;
          $[25] = _t6;
        } else {
          _t6 = $[25];
        }
        t5 = _t6;
      } else {
        t5 = column.label;
      }
    }
  }
  var data = t5;
  var t6;
  if ($[26] !== top) {
    t6 = top !== undefined ? {
      top: top
    } : undefined;
    $[26] = top;
    $[27] = t6;
  } else {
    t6 = $[27];
  }
  var t7;
  if ($[28] !== column || $[29] !== data || $[30] !== defaultAlign || $[31] !== t6) {
    t7 = /*#__PURE__*/React.createElement(PTableCommonCell, {
      type: "head",
      className: "PTableHeadCell",
      style: t6,
      column: column,
      defaultAlign: defaultAlign
    }, data);
    $[28] = column;
    $[29] = data;
    $[30] = defaultAlign;
    $[31] = t6;
    $[32] = t7;
  } else {
    t7 = $[32];
  }
  return t7;
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
  if (rows) {
    if (Array.isArray(rows[0])) {
      var t9;
      if ($[23] !== captionHeight || $[24] !== makeRowCells || $[25] !== row1Height || $[26] !== row2Height || $[27] !== row3Height || $[28] !== rows) {
        t9 = rows.map(function (row_0, idx_1) {
          var ref = undefined;
          var top_1 = undefined;
          bb48: switch (idx_1) {
            case 0:
              {
                ref = row1Ref;
                top_1 = captionHeight;
                break bb48;
              }
            case 1:
              {
                ref = row2Ref;
                top_1 = (captionHeight || 0) + (row1Height || 0);
                break bb48;
              }
            case 2:
              {
                ref = row3Ref;
                top_1 = (captionHeight || 0) + (row1Height || 0) + (row2Height || 0);
                break bb48;
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
      var t10;
      if ($[30] !== captionRow || $[31] !== t9) {
        t10 = /*#__PURE__*/React.createElement(material.TableHead, {
          className: "PTableHead"
        }, captionRow, t9);
        $[30] = captionRow;
        $[31] = t9;
        $[32] = t10;
      } else {
        t10 = $[32];
      }
      return t10;
    } else {
      var _t2 = rows;
      var _t3;
      if ($[33] !== captionHeight || $[34] !== makeRowCells || $[35] !== _t2) {
        _t3 = makeRowCells(_t2, captionHeight);
        $[33] = captionHeight;
        $[34] = makeRowCells;
        $[35] = _t2;
        $[36] = _t3;
      } else {
        _t3 = $[36];
      }
      var t11;
      if ($[37] !== _t3) {
        t11 = /*#__PURE__*/React.createElement(material.TableRow, {
          ref: row1Ref,
          className: "PTableHeadRow"
        }, _t3);
        $[37] = _t3;
        $[38] = t11;
      } else {
        t11 = $[38];
      }
      var t12;
      if ($[39] !== captionRow || $[40] !== columnRow || $[41] !== t11) {
        t12 = /*#__PURE__*/React.createElement(material.TableHead, {
          className: "PTableHead"
        }, captionRow, t11, columnRow);
        $[39] = captionRow;
        $[40] = columnRow;
        $[41] = t11;
        $[42] = t12;
      } else {
        t12 = $[42];
      }
      return t12;
    }
  } else {
    var _t4;
    if ($[43] !== captionRow || $[44] !== columnRow) {
      _t4 = /*#__PURE__*/React.createElement(material.TableHead, {
        className: "PTableHead"
      }, captionRow, columnRow);
      $[43] = captionRow;
      $[44] = columnRow;
      $[45] = _t4;
    } else {
      _t4 = $[45];
    }
    return _t4;
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
  var $ = compilerRuntime.c(79);
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
  var isColumnChanged = reactHook.useChanged(column, true);
  var isItemChanged = reactHook.useChanged(item, true);
  var isSetItemColumnCommandsChanged = reactHook.useChanged(setItemColumnCommands, true);
  if (isColumnChanged || isItemChanged || isSetItemColumnCommandsChanged) {
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
  }
  if (reactHook.useChanged(checked, true)) {
    if (column.type === "check") {
      setItemColumnChecked(item, column, checked);
    }
  }
  if (reactHook.useChanged(checkDisabled, true)) {
    if (column.type === "check") {
      setItemColumnCheckDisabled(item, column, checkDisabled);
      column.onCheckDisabledChange && column.onCheckDisabledChange(item, checkDisabled);
    }
  }
  var t1;
  if ($[0] !== column || $[1] !== index || $[2] !== item) {
    t1 = column.onHide ? column.onHide(item, index) : false;
    $[0] = column;
    $[1] = index;
    $[2] = item;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  var isHidden = t1;
  var t2;
  bb0: switch (getTableColumnAlign(column, defaultAlign)) {
    case "center":
      {
        t2 = "center";
        break bb0;
      }
    case "right":
      {
        t2 = "end";
        break bb0;
      }
    default:
      {
        t2 = "start";
      }
  }
  var buttonsBoxJustifyContent = t2;
  var newData;
  if ($[4] !== buttonsBoxJustifyContent || $[5] !== checkDisabled || $[6] !== checked || $[7] !== column || $[8] !== index || $[9] !== item || $[10] !== menuOpen || $[11] !== onCheckChange) {
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
            if ($[13] === Symbol["for"]("react.memo_cache_sentinel")) {
              _t = {
                opacity: 0.5,
                marginRight: 2
              };
              $[13] = _t;
            } else {
              _t = $[13];
            }
            var _t2;
            if ($[14] !== column.numberPrefix) {
              _t2 = /*#__PURE__*/React.createElement("span", {
                style: _t
              }, column.numberPrefix);
              $[14] = column.numberPrefix;
              $[15] = _t2;
            } else {
              _t2 = $[15];
            }
            newData = /*#__PURE__*/React.createElement(React.Fragment, null, _t2, newData);
          }
          if (column.numberSuffix) {
            var _t3;
            if ($[16] === Symbol["for"]("react.memo_cache_sentinel")) {
              _t3 = {
                opacity: 0.5,
                marginLeft: 2
              };
              $[16] = _t3;
            } else {
              _t3 = $[16];
            }
            var _t4;
            if ($[17] !== column.numberSuffix) {
              _t4 = /*#__PURE__*/React.createElement("span", {
                style: _t3
              }, column.numberSuffix);
              $[17] = column.numberSuffix;
              $[18] = _t4;
            } else {
              _t4 = $[18];
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
          if ($[19] !== column || $[20] !== item || $[21] !== onCheckChange) {
            _t6 = function _t6(e_3, newChecked) {
              var _column$onCheckChange;
              _setChecked(newChecked);
              (_column$onCheckChange = column.onCheckChange) === null || _column$onCheckChange === void 0 || _column$onCheckChange.call(column, item, newChecked);
              onCheckChange(item, column, newChecked);
            };
            $[19] = column;
            $[20] = item;
            $[21] = onCheckChange;
            $[22] = _t6;
          } else {
            _t6 = $[22];
          }
          var _t7;
          if ($[23] !== checkDisabled || $[24] !== checked || $[25] !== _t6) {
            _t7 = /*#__PURE__*/React.createElement(material.Checkbox, {
              checked: checked,
              disabled: checkDisabled,
              onChange: _t6
            });
            $[23] = checkDisabled;
            $[24] = checked;
            $[25] = _t6;
            $[26] = _t7;
          } else {
            _t7 = $[26];
          }
          var _t8;
          if ($[27] !== _t5 || $[28] !== _t7) {
            _t8 = /*#__PURE__*/React.createElement(material.Box, {
              className: "PTableBoxyCell-check-box",
              onClick: _t5
            }, _t7);
            $[27] = _t5;
            $[28] = _t7;
            $[29] = _t8;
          } else {
            _t8 = $[29];
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
          if ($[30] === Symbol["for"]("react.memo_cache_sentinel")) {
            _t9 = {
              maxWidth: "100%",
              verticalAlign: "middle"
            };
            $[30] = _t9;
          } else {
            _t9 = $[30];
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
          if ($[31] === Symbol["for"]("react.memo_cache_sentinel")) {
            _t10 = {
              paddingTop: 3,
              paddingBottom: 3
            };
            $[31] = _t10;
          } else {
            _t10 = $[31];
          }
          var _t11;
          if ($[32] !== img) {
            _t11 = /*#__PURE__*/React.createElement("div", {
              style: _t10
            }, img);
            $[32] = img;
            $[33] = _t11;
          } else {
            _t11 = $[33];
          }
          var t8;
          if ($[34] !== column.tooltipProps || $[35] !== img || $[36] !== placement || $[37] !== _t11) {
            t8 = /*#__PURE__*/React.createElement(material.Tooltip, _extends({
              className: "PTableBodyCell-tooltip",
              title: _t11
            }, column.tooltipProps, {
              placement: placement
            }), img);
            $[34] = column.tooltipProps;
            $[35] = img;
            $[36] = placement;
            $[37] = _t11;
            $[38] = t8;
          } else {
            t8 = $[38];
          }
          var t9;
          if ($[39] !== _t0 || $[40] !== _t1 || $[41] !== t8) {
            t9 = /*#__PURE__*/React.createElement("a", {
              href: _t0,
              target: "_blank",
              rel: "noreferrer",
              onClick: _t1
            }, t8);
            $[39] = _t0;
            $[40] = _t1;
            $[41] = t8;
            $[42] = t9;
          } else {
            t9 = $[42];
          }
          newData = t9;
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
            if ($[43] !== column.dateTwoLine) {
              _t12 = column.dateTwoLine ? /*#__PURE__*/React.createElement("br", null) : " ";
              $[43] = column.dateTwoLine;
              $[44] = _t12;
            } else {
              _t12 = $[44];
            }
            var _t13;
            if ($[45] === Symbol["for"]("react.memo_cache_sentinel")) {
              _t13 = {
                opacity: 0.5
              };
              $[45] = _t13;
            } else {
              _t13 = $[45];
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
            if ($[46] !== column.dateTwoLine) {
              _t14 = column.dateTwoLine ? /*#__PURE__*/React.createElement("br", null) : " ";
              $[46] = column.dateTwoLine;
              $[47] = _t14;
            } else {
              _t14 = $[47];
            }
            var _t15;
            if ($[48] === Symbol["for"]("react.memo_cache_sentinel")) {
              _t15 = {
                opacity: 0.5
              };
              $[48] = _t15;
            } else {
              _t15 = $[48];
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
            if ($[49] !== column.dateTwoLine) {
              _t16 = column.dateTwoLine ? /*#__PURE__*/React.createElement("br", null) : " ";
              $[49] = column.dateTwoLine;
              $[50] = _t16;
            } else {
              _t16 = $[50];
            }
            var _t17;
            if ($[51] === Symbol["for"]("react.memo_cache_sentinel")) {
              _t17 = {
                opacity: 0.5
              };
              $[51] = _t17;
            } else {
              _t17 = $[51];
            }
            newData = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, dt.format("YYYY-MM-DD")), _t16, /*#__PURE__*/React.createElement("span", {
              style: _t17
            }, dt.format("HH\uC2DC MM\uBD84")));
          }
        }
    }
    $[4] = buttonsBoxJustifyContent;
    $[5] = checkDisabled;
    $[6] = checked;
    $[7] = column;
    $[8] = index;
    $[9] = item;
    $[10] = menuOpen;
    $[11] = onCheckChange;
    $[12] = newData;
  } else {
    newData = $[12];
  }
  if (column.type !== "img") {
    var tooltip;
    if (column.onGetTooltip) {
      var _t18;
      if ($[52] !== column || $[53] !== index || $[54] !== item) {
        _t18 = column.onGetTooltip(item, index);
        $[52] = column;
        $[53] = index;
        $[54] = item;
        $[55] = _t18;
      } else {
        _t18 = $[55];
      }
      tooltip = _t18;
    }
    if (tooltip) {
      var _t19;
      if ($[56] !== newData) {
        _t19 = /*#__PURE__*/React.isValidElement(newData) ? newData.type === React.Fragment ? /*#__PURE__*/React.createElement("span", null, newData) : newData : /*#__PURE__*/React.createElement("span", null, newData);
        $[56] = newData;
        $[57] = _t19;
      } else {
        _t19 = $[57];
      }
      var _t20;
      if ($[58] !== column.tooltipProps || $[59] !== _t19 || $[60] !== tooltip) {
        _t20 = /*#__PURE__*/React.createElement(material.Tooltip, _extends({
          className: "PTableBodyCell-tooltip",
          title: tooltip
        }, column.tooltipProps), _t19);
        $[58] = column.tooltipProps;
        $[59] = _t19;
        $[60] = tooltip;
        $[61] = _t20;
      } else {
        _t20 = $[61];
      }
      newData = _t20;
    }
  }
  var data = newData;
  var t3;
  if ($[62] !== column || $[63] !== onClick) {
    t3 = function t3(item_0, index_0) {
      if (column.onClick) {
        column.onClick(item_0, index_0);
      } else {
        if (onClick) {
          onClick(item_0, index_0);
        }
      }
    };
    $[62] = column;
    $[63] = onClick;
    $[64] = t3;
  } else {
    t3 = $[64];
  }
  var handleClick = t3;
  var t4;
  if ($[65] !== className) {
    t4 = classNames("PTableBodyCell", className);
    $[65] = className;
    $[66] = t4;
  } else {
    t4 = $[66];
  }
  var t5 = column.onClick || onClick ? handleClick : undefined;
  var t6 = !isHidden && data;
  var t7;
  if ($[67] !== column || $[68] !== defaultAlign || $[69] !== defaultEllipsis || $[70] !== index || $[71] !== item || $[72] !== ref || $[73] !== style || $[74] !== sx || $[75] !== t4 || $[76] !== t5 || $[77] !== t6) {
    t7 = /*#__PURE__*/React.createElement(PTableCommonCell, {
      ref: ref,
      type: "body",
      className: t4,
      style: style,
      sx: sx,
      column: column,
      defaultAlign: defaultAlign,
      defaultEllipsis: defaultEllipsis,
      item: item,
      index: index,
      onClick: t5
    }, t6);
    $[67] = column;
    $[68] = defaultAlign;
    $[69] = defaultEllipsis;
    $[70] = index;
    $[71] = item;
    $[72] = ref;
    $[73] = style;
    $[74] = sx;
    $[75] = t4;
    $[76] = t5;
    $[77] = t6;
    $[78] = t7;
  } else {
    t7 = $[78];
  }
  return t7;
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
  var item;
  var onCheckChange;
  var onClick;
  var onGetColumnClassName;
  var onGetColumnStyle;
  var onGetColumnSx;
  var props;
  var sortable$1;
  var style;
  if ($[0] !== t0) {
    var _t = t0;
    className = _t.className;
    style = _t.style;
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
    $[7] = item;
    $[8] = onCheckChange;
    $[9] = onClick;
    $[10] = onGetColumnClassName;
    $[11] = onGetColumnStyle;
    $[12] = onGetColumnSx;
    $[13] = props;
    $[14] = sortable$1;
    $[15] = style;
  } else {
    className = $[1];
    columns = $[2];
    defaultAlign = $[3];
    defaultEllipsis = $[4];
    id = $[5];
    index = $[6];
    item = $[7];
    onCheckChange = $[8];
    onClick = $[9];
    onGetColumnClassName = $[10];
    onGetColumnStyle = $[11];
    onGetColumnSx = $[12];
    props = $[13];
    sortable$1 = $[14];
    style = $[15];
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
  if ($[23] !== className) {
    t3 = classNames("PTableBodyRow", className);
    $[23] = className;
    $[24] = t3;
  } else {
    t3 = $[24];
  }
  var t4;
  if ($[25] !== sortable$1 || $[26] !== style || $[27] !== transform || $[28] !== transition) {
    t4 = sortable$1 ? _objectSpread2(_objectSpread2({}, style), {}, {
      transform: CSS.Transform.toString(transform),
      transition: transition
    }) : style;
    $[25] = sortable$1;
    $[26] = style;
    $[27] = transform;
    $[28] = transition;
    $[29] = t4;
  } else {
    t4 = $[29];
  }
  var t5;
  if ($[30] !== columns || $[31] !== defaultAlign || $[32] !== defaultEllipsis || $[33] !== index || $[34] !== item || $[35] !== onCheckChange || $[36] !== onClick || $[37] !== onGetColumnClassName || $[38] !== onGetColumnStyle || $[39] !== onGetColumnSx) {
    var _t2;
    if ($[41] !== defaultAlign || $[42] !== defaultEllipsis || $[43] !== index || $[44] !== item || $[45] !== onCheckChange || $[46] !== onClick || $[47] !== onGetColumnClassName || $[48] !== onGetColumnStyle || $[49] !== onGetColumnSx) {
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
      $[41] = defaultAlign;
      $[42] = defaultEllipsis;
      $[43] = index;
      $[44] = item;
      $[45] = onCheckChange;
      $[46] = onClick;
      $[47] = onGetColumnClassName;
      $[48] = onGetColumnStyle;
      $[49] = onGetColumnSx;
      $[50] = _t2;
    } else {
      _t2 = $[50];
    }
    t5 = columns.map(_t2);
    $[30] = columns;
    $[31] = defaultAlign;
    $[32] = defaultEllipsis;
    $[33] = index;
    $[34] = item;
    $[35] = onCheckChange;
    $[36] = onClick;
    $[37] = onGetColumnClassName;
    $[38] = onGetColumnStyle;
    $[39] = onGetColumnSx;
    $[40] = t5;
  } else {
    t5 = $[40];
  }
  var t6;
  if ($[51] !== props || $[52] !== sortableProps || $[53] !== t3 || $[54] !== t4 || $[55] !== t5) {
    t6 = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PStyledBodyRow, _extends({
      className: t3,
      style: t4
    }, props, sortableProps), t5));
    $[51] = props;
    $[52] = sortableProps;
    $[53] = t3;
    $[54] = t4;
    $[55] = t5;
    $[56] = t6;
  } else {
    t6 = $[56];
  }
  return t6;
}function PTableSortableBodyBlock(t0) {
  var $ = compilerRuntime.c(24);
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
  if (reactHook.useChanged(progressiveVisible, true)) {
    if (progressiveVisible && baseIndex > 0) {
      setTimeout(function () {
        setCanInView(true);
      }, baseIndex * compare.ifUndefined(progressiveVisible.delay, 300));
    }
  }
  var t2;
  if ($[1] !== baseIndex || $[2] !== canInView || $[3] !== columns || $[4] !== defaultAlign || $[5] !== defaultEllipsis || $[6] !== inView || $[7] !== items || $[8] !== onCheckChange || $[9] !== onClick || $[10] !== onGetBodyColumnClassName || $[11] !== onGetBodyColumnStyle || $[12] !== onGetBodyColumnSx || $[13] !== onGetBodyRowClassName || $[14] !== onGetBodyRowStyle || $[15] !== onGetBodyRowSx || $[16] !== progressiveVisible || $[17] !== ref || $[18] !== showEvenColor || $[19] !== showOddColor || $[20] !== sortable) {
    t2 = !progressiveVisible || inView ? items.map(function (item, idx) {
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
    $[1] = baseIndex;
    $[2] = canInView;
    $[3] = columns;
    $[4] = defaultAlign;
    $[5] = defaultEllipsis;
    $[6] = inView;
    $[7] = items;
    $[8] = onCheckChange;
    $[9] = onClick;
    $[10] = onGetBodyColumnClassName;
    $[11] = onGetBodyColumnStyle;
    $[12] = onGetBodyColumnSx;
    $[13] = onGetBodyRowClassName;
    $[14] = onGetBodyRowStyle;
    $[15] = onGetBodyRowSx;
    $[16] = progressiveVisible;
    $[17] = ref;
    $[18] = showEvenColor;
    $[19] = showOddColor;
    $[20] = sortable;
    $[21] = t2;
  } else {
    t2 = $[21];
  }
  var renderItems = t2;
  var t3;
  if ($[22] !== renderItems) {
    t3 = /*#__PURE__*/React.createElement(React.Fragment, null, renderItems);
    $[22] = renderItems;
    $[23] = t3;
  } else {
    t3 = $[23];
  }
  return t3;
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
}function columnFilter(v) {
  return v !== undefined && v !== null && v !== false;
}
var _columnId = 0;
var getNewColumnId = function getNewColumnId() {
  _columnId += 1;
  return "$c$".concat(_columnId, "$");
};
function PTable(t0) {
  var $ = compilerRuntime.c(175);
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
  var _useState = React.useState(initColumns),
    _useState2 = _slicedToArray(_useState, 2),
    columns = _useState2[0],
    setColumns = _useState2[1];
  reactHook.useChanged(initColumns) && setColumns(initColumns);
  var columnsRef = reactHook.useAutoUpdateRef(columns);
  var _useState3 = React.useState(),
    _useState4 = _slicedToArray(_useState3, 2),
    finalColumns = _useState4[0],
    setFinalColumns = _useState4[1];
  var _useState5 = React.useState(undefined),
    _useState6 = _slicedToArray(_useState5, 2),
    finalColumnsId = _useState6[0],
    setFinalColumnsId = _useState6[1];
  var _useState7 = React.useState(initItems),
    _useState8 = _slicedToArray(_useState7, 2),
    items = _useState8[0],
    setItems = _useState8[1];
  reactHook.useChanged(initItems) && setItems(initItems);
  var itemsRef = reactHook.useAutoUpdateRef(items);
  var _useState9 = React.useState(),
    _useState0 = _slicedToArray(_useState9, 2),
    sortableItems = _useState0[0],
    setSortableItems = _useState0[1];
  if (reactHook.useChanged(items, true)) {
    setSortableItems(makeSortableItems(items));
  }
  var _useState1 = React.useState(initPaging),
    _useState10 = _slicedToArray(_useState1, 2),
    paging = _useState10[0],
    setPaging = _useState10[1];
  reactHook.useChanged(initPaging) && setPaging(initPaging);
  var pagingRef = reactHook.useAutoUpdateRef(paging);
  var _useState11 = React.useState(false),
    _useState12 = _slicedToArray(_useState11, 2),
    menuOpen = _useState12[0],
    setMenuOpen = _useState12[1];
  var _useState13 = React.useState(undefined),
    _useState14 = _slicedToArray(_useState13, 2),
    openMenuId = _useState14[0],
    setOpenMenuId = _useState14[1];
  var _useState15 = React.useState(),
    _useState16 = _slicedToArray(_useState15, 2),
    containerHeight = _useState16[0],
    setContainerHeight = _useState16[1];
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
    t10 = _useResizeDetector.ref;
  var containerHeightDetector = t10;
  var _useState17 = React.useState(),
    _useState18 = _slicedToArray(_useState17, 2),
    pagingHeight = _useState18[0],
    setPagingHeight = _useState18[1];
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
    t11 = _useResizeDetector2.ref;
  var pagingHeightResizeDetector = t11;
  var t12;
  if ($[6] !== finalColumns || $[7] !== finalColumnsId) {
    t12 = function t12(column) {
      if (finalColumns && finalColumnsId) {
        var idx = finalColumns.indexOf(column);
        return finalColumnsId[idx];
      } else {
        return "";
      }
    };
    $[6] = finalColumns;
    $[7] = finalColumnsId;
    $[8] = t12;
  } else {
    t12 = $[8];
  }
  var getFinalColumnId = t12;
  var t13;
  if ($[9] !== getFinalColumnId) {
    t13 = function t13(column_0) {
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
    $[9] = getFinalColumnId;
    $[10] = t13;
  } else {
    t13 = $[10];
  }
  var updateHeadCheck = t13;
  var t14;
  if ($[11] === Symbol["for"]("react.memo_cache_sentinel")) {
    t14 = function t14(itemKey, itemValue, columnId_0) {
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
    $[11] = t14;
  } else {
    t14 = $[11];
  }
  var getChecked = t14;
  var t15;
  if ($[12] !== updateHeadCheck) {
    t15 = function t15(itemKey_0, itemValue_0, columnId_1, checked_0) {
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
    $[12] = updateHeadCheck;
    $[13] = t15;
  } else {
    t15 = $[13];
  }
  var setChecked = t15;
  var t16;
  if ($[14] !== updateHeadCheck) {
    t16 = function t16(itemKey_1, itemValue_1, columnId_2) {
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
    $[14] = updateHeadCheck;
    $[15] = t16;
  } else {
    t16 = $[15];
  }
  var toggleChecked = t16;
  var t17;
  if ($[16] === Symbol["for"]("react.memo_cache_sentinel")) {
    t17 = function t17(columnId_3, checked_1) {
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
    $[16] = t17;
  } else {
    t17 = $[16];
  }
  var setCheckedAll = t17;
  var t18;
  if ($[17] === Symbol["for"]("react.memo_cache_sentinel")) {
    t18 = function t18(columnId_4) {
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
    $[17] = t18;
  } else {
    t18 = $[17];
  }
  var getCheckedItems = t18;
  var t19;
  if ($[18] === Symbol["for"]("react.memo_cache_sentinel")) {
    t19 = function t19() {
      if (updateHeadCheckTimer.current) {
        clearTimeout(updateHeadCheckTimer.current);
        updateHeadCheckTimer.current = undefined;
      }
    };
    $[18] = t19;
  } else {
    t19 = $[18];
  }
  var stopHeadCheckTimer = t19;
  var t20;
  if ($[19] === Symbol["for"]("react.memo_cache_sentinel")) {
    t20 = function t20() {
      Object.keys(fireOnCheckChangeTimer.current).forEach(function (key_6) {
        if (fireOnCheckChangeTimer.current[key_6]) {
          clearTimeout(fireOnCheckChangeTimer.current[key_6]);
        }
      });
      fireOnCheckChangeTimer.current = {};
    };
    $[19] = t20;
  } else {
    t20 = $[19];
  }
  var clearFireOnCheckChangeTimer = t20;
  var t21;
  if ($[20] !== onCheckChange) {
    t21 = function t21(columnId_5) {
      if (fireOnCheckChangeTimer.current[columnId_5]) {
        clearTimeout(fireOnCheckChangeTimer.current[columnId_5]);
        fireOnCheckChangeTimer.current[columnId_5] = undefined;
      }
      if (onCheckChange) {
        fireOnCheckChangeTimer.current[columnId_5] = setTimeout(function () {
          fireOnCheckChangeTimer.current[columnId_5] = undefined;
          onCheckChange && onCheckChange(columnId_5, getCheckedItems(columnId_5));
        }, 100);
      }
    };
    $[20] = onCheckChange;
    $[21] = t21;
  } else {
    t21 = $[21];
  }
  var fireOnCheckChange = t21;
  var t22;
  if ($[22] === Symbol["for"]("react.memo_cache_sentinel")) {
    t22 = function t22() {
      var _simpleBarRef$current;
      (_simpleBarRef$current = simpleBarRef.current) === null || _simpleBarRef$current === void 0 || (_simpleBarRef$current = _simpleBarRef$current.getScrollElement()) === null || _simpleBarRef$current === void 0 || _simpleBarRef$current.scrollTo({
        top: 0
      });
    };
    $[22] = t22;
  } else {
    t22 = $[22];
  }
  var simpleBarScrollToTop = t22;
  var t23;
  var t24;
  if ($[23] === Symbol["for"]("react.memo_cache_sentinel")) {
    t23 = function t23() {
      return function () {
        stopHeadCheckTimer();
        clearFireOnCheckChangeTimer();
      };
    };
    t24 = [clearFireOnCheckChangeTimer, stopHeadCheckTimer];
    $[23] = t23;
    $[24] = t24;
  } else {
    t23 = $[23];
    t24 = $[24];
  }
  React.useEffect(t23, t24);
  var t25;
  if ($[25] === Symbol["for"]("react.memo_cache_sentinel")) {
    t25 = function t25() {
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
    };
    $[25] = t25;
  } else {
    t25 = $[25];
  }
  var t26;
  if ($[26] !== items) {
    t26 = [items, clearFireOnCheckChangeTimer, stopHeadCheckTimer];
    $[26] = items;
    $[27] = t26;
  } else {
    t26 = $[27];
  }
  React.useEffect(t25, t26);
  if (reactHook.useChanged(columns, true)) {
    var newFinalColumns = columns === null || columns === void 0 ? void 0 : columns.filter(columnFilter);
    var newFinalColumnsId = newFinalColumns === null || newFinalColumns === void 0 ? void 0 : newFinalColumns.map(_temp$1);
    setFinalColumns(newFinalColumns);
    setFinalColumnsId(newFinalColumnsId);
  }
  var t27;
  if ($[28] === Symbol["for"]("react.memo_cache_sentinel")) {
    t27 = function t27() {
      stopHeadCheckTimer();
      clearFireOnCheckChangeTimer();
    };
    $[28] = t27;
  } else {
    t27 = $[28];
  }
  var t28;
  if ($[29] !== columns) {
    t28 = [columns, clearFireOnCheckChangeTimer, stopHeadCheckTimer];
    $[29] = columns;
    $[30] = t28;
  } else {
    t28 = $[30];
  }
  React.useEffect(t27, t28);
  var t29;
  var t30;
  if ($[31] !== finalColumns || $[32] !== getFinalColumnId || $[33] !== sortableItems) {
    t29 = function t29() {
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
    t30 = [sortableItems, finalColumns, clearFireOnCheckChangeTimer, getFinalColumnId];
    $[31] = finalColumns;
    $[32] = getFinalColumnId;
    $[33] = sortableItems;
    $[34] = t29;
    $[35] = t30;
  } else {
    t29 = $[34];
    t30 = $[35];
  }
  React.useLayoutEffect(t29, t30);
  var t31;
  var t32;
  if ($[36] !== finalColumns || $[37] !== getFinalColumnId) {
    t31 = function t31() {
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
    t32 = [finalColumns, getFinalColumnId];
    $[36] = finalColumns;
    $[37] = getFinalColumnId;
    $[38] = t31;
    $[39] = t32;
  } else {
    t31 = $[38];
    t32 = $[39];
  }
  React.useLayoutEffect(t31, t32);
  var t33;
  var t34;
  if ($[40] !== columnsRef) {
    t33 = function t33() {
      return columnsRef.current;
    };
    t34 = function t34(columns_0) {
      columnsRef.current = columns_0;
      setColumns(columns_0);
    };
    $[40] = columnsRef;
    $[41] = t33;
    $[42] = t34;
  } else {
    t33 = $[41];
    t34 = $[42];
  }
  var t35;
  var t36;
  if ($[43] !== itemsRef) {
    t35 = function t35() {
      return itemsRef.current;
    };
    t36 = function t36(items_0) {
      itemsRef.current = items_0;
      setItems(items_0);
    };
    $[43] = itemsRef;
    $[44] = t35;
    $[45] = t36;
  } else {
    t35 = $[44];
    t36 = $[45];
  }
  var t37;
  if ($[46] !== pagingRef) {
    t37 = function t37() {
      return pagingRef.current;
    };
    $[46] = pagingRef;
    $[47] = t37;
  } else {
    t37 = $[47];
  }
  var t38;
  if ($[48] !== itemsRef || $[49] !== pagingRef) {
    t38 = function t38(items_1, paging_0) {
      itemsRef.current = items_1;
      pagingRef.current = paging_0;
      setItems(items_1);
      setPaging(paging_0);
    };
    $[48] = itemsRef;
    $[49] = pagingRef;
    $[50] = t38;
  } else {
    t38 = $[50];
  }
  var t39;
  if ($[51] !== itemsRef || $[52] !== setChecked || $[53] !== t33 || $[54] !== t34 || $[55] !== t35 || $[56] !== t36 || $[57] !== t37 || $[58] !== t38 || $[59] !== toggleChecked) {
    t39 = {
      getColumns: t33,
      setColumns: t34,
      getItems: t35,
      setItems: t36,
      getPaging: t37,
      setItemsPaging: t38,
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
    $[51] = itemsRef;
    $[52] = setChecked;
    $[53] = t33;
    $[54] = t34;
    $[55] = t35;
    $[56] = t36;
    $[57] = t37;
    $[58] = t38;
    $[59] = toggleChecked;
    $[60] = t39;
  } else {
    t39 = $[60];
  }
  reactHook.useForwardRef(ref, t39);
  var t40;
  if ($[61] !== onSortChange) {
    t40 = function t40(event) {
      var active = event.active,
        over = event.over;
      if (active && over) {
        setSortableItems(function (items_2) {
          if (items_2) {
            var oldIndex = null;
            var newIndex = null;
            items_2.find(function (item_0, idx_0) {
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
              var finalItems = sortable.arrayMove(items_2, oldIndex, newIndex);
              onSortChange && onSortChange(finalItems);
              return finalItems;
            } else {
              return items_2;
            }
          } else {
            return items_2;
          }
        });
      }
    };
    $[61] = onSortChange;
    $[62] = t40;
  } else {
    t40 = $[62];
  }
  var handleDragEnd = t40;
  var t41;
  if ($[63] !== getFinalColumnId) {
    t41 = function t41(column_1, checked_2) {
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
    $[63] = getFinalColumnId;
    $[64] = t41;
  } else {
    t41 = $[64];
  }
  var handleHeadCheckChange = t41;
  var t42;
  if ($[65] !== updateHeadCheck) {
    t42 = function t42(item_1, column_2) {
      updateHeadCheck(column_2);
    };
    $[65] = updateHeadCheck;
    $[66] = t42;
  } else {
    t42 = $[66];
  }
  var handleBodyCheckChange = t42;
  var t43;
  if ($[67] !== onPageChange) {
    t43 = function t43(page) {
      simpleBarScrollToTop();
      onPageChange && onPageChange(page);
    };
    $[67] = onPageChange;
    $[68] = t43;
  } else {
    t43 = $[68];
  }
  var handlePageChange = t43;
  var t44;
  if ($[69] !== openMenuId) {
    t44 = function t44(newMenuOpen, newOpenMenuId) {
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
    $[69] = openMenuId;
    $[70] = t44;
  } else {
    t44 = $[70];
  }
  var TableContextSetMenuOpen = t44;
  var t45;
  if ($[71] !== fireOnCheckChange || $[72] !== getFinalColumnId) {
    t45 = function t45(item_2, column_3, checked_3) {
      var columnId_7 = getFinalColumnId(column_3);
      if (localBodyDataRef.current) {
        var bodyData = localBodyDataRef.current[item_2.id];
        if (bodyData) {
          var columns_1 = bodyData.columns;
          var data_0 = columns_1[columnId_7];
          if (data_0) {
            data_0.checked = checked_3;
            fireOnCheckChange(columnId_7);
          }
        }
      }
    };
    $[71] = fireOnCheckChange;
    $[72] = getFinalColumnId;
    $[73] = t45;
  } else {
    t45 = $[73];
  }
  var TableContextSetItemColumnChecked = t45;
  var t46;
  if ($[74] !== getFinalColumnId || $[75] !== updateHeadCheck) {
    t46 = function t46(item_3, column_4, disabled) {
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
    $[74] = getFinalColumnId;
    $[75] = updateHeadCheck;
    $[76] = t46;
  } else {
    t46 = $[76];
  }
  var TableContextSetItemColumnCheckDisabled = t46;
  var t47;
  if ($[77] !== getFinalColumnId) {
    t47 = function t47(item_4, column_5, commands) {
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
    $[77] = getFinalColumnId;
    $[78] = t47;
  } else {
    t47 = $[78];
  }
  var TableContextSetItemColumnCommands = t47;
  var t48;
  if ($[79] !== getFinalColumnId) {
    t48 = function t48(column_6, checked_4) {
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
    $[79] = getFinalColumnId;
    $[80] = t48;
  } else {
    t48 = $[80];
  }
  var TableContextSetHeadColumnChecked = t48;
  var t49;
  if ($[81] !== getFinalColumnId) {
    t49 = function t49(column_7, commands_0) {
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
    $[81] = getFinalColumnId;
    $[82] = t49;
  } else {
    t49 = $[82];
  }
  var TableContextSetHeadColumnCommands = t49;
  var isNoData = !!sortableItems && sortableItems.length <= 0;
  var finalPagingHeight = paging && paging.total > 0 ? pagingHeight || 0 : 0;
  var stickyHeader = !isNoData && initStickyHeader;
  var t50;
  if ($[83] !== fullHeight || $[84] !== initStyle) {
    t50 = fullHeight ? _objectSpread2(_objectSpread2({
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
    $[83] = fullHeight;
    $[84] = initStyle;
    $[85] = t50;
  } else {
    t50 = $[85];
  }
  var style = t50;
  var t51 = typeof cellPadding === "number" ? "".concat(cellPadding, "px") : cellPadding;
  var t52;
  if ($[86] !== t51) {
    var sx_0 = {
      padding: t51
    };
    t52 = {
      "> .MuiTableHead-root > .MuiTableRow-root > .MuiTableCell-root ": sx_0,
      "> .MuiTableBody-root > .MuiTableRow-root > .MuiTableCell-root ": sx_0,
      "> .MuiTableFooter-root > .MuiTableRow-root > .MuiTableCell-root ": sx_0
    };
    $[86] = t51;
    $[87] = t52;
  } else {
    t52 = $[87];
  }
  var tableSx = t52;
  var pagingStyle;
  if ($[88] !== fullHeight) {
    pagingStyle = {
      padding: "13px 0",
      borderTop: "1px solid rgba(224, 224, 224, 1)"
    };
    if (fullHeight) {
      pagingStyle.position = "sticky";
    }
    $[88] = fullHeight;
    $[89] = pagingStyle;
  } else {
    pagingStyle = $[89];
  }
  var t53;
  if ($[90] !== pagingStyle || $[91] !== style || $[92] !== tableSx) {
    t53 = {
      style: style,
      tableSx: tableSx,
      pagingStyle: pagingStyle
    };
    $[90] = pagingStyle;
    $[91] = style;
    $[92] = tableSx;
    $[93] = t53;
  } else {
    t53 = $[93];
  }
  var _t = t53,
    style_0 = _t.style,
    tableSx_0 = _t.tableSx,
    pagingStyle_0 = _t.pagingStyle;
  var t54;
  if ($[94] !== containerHeight || $[95] !== finalPagingHeight || $[96] !== fullHeight || $[97] !== height || $[98] !== maxHeight || $[99] !== minHeight) {
    t54 = fullHeight ? {
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
    $[94] = containerHeight;
    $[95] = finalPagingHeight;
    $[96] = fullHeight;
    $[97] = height;
    $[98] = maxHeight;
    $[99] = minHeight;
    $[100] = t54;
  } else {
    t54 = $[100];
  }
  var contentContainerStyle = t54;
  var t55;
  if ($[101] !== containerHeight || $[102] !== finalPagingHeight || $[103] !== fullHeight || $[104] !== isNoData) {
    t55 = fullHeight && isNoData ? {
      flex: 1,
      height: (containerHeight || 0) - finalPagingHeight - 2
    } : undefined;
    $[101] = containerHeight;
    $[102] = finalPagingHeight;
    $[103] = fullHeight;
    $[104] = isNoData;
    $[105] = t55;
  } else {
    t55 = $[105];
  }
  var tableStyle = t55;
  var t56;
  if ($[106] !== contentContainerStyle || $[107] !== tableStyle) {
    t56 = {
      contentContainerStyle: contentContainerStyle,
      tableStyle: tableStyle
    };
    $[106] = contentContainerStyle;
    $[107] = tableStyle;
    $[108] = t56;
  } else {
    t56 = $[108];
  }
  var _t2 = t56,
    contentContainerStyle_0 = _t2.contentContainerStyle,
    tableStyle_0 = _t2.tableStyle;
  var t57;
  if ($[109] !== caption || $[110] !== defaultAlign || $[111] !== finalColumns || $[112] !== handleHeadCheckChange || $[113] !== items || $[114] !== topHeadRows) {
    t57 = finalColumns && /*#__PURE__*/React.createElement(PTableTopHead, {
      caption: caption,
      rows: topHeadRows,
      columns: finalColumns,
      items: items,
      defaultAlign: defaultAlign,
      onCheckChange: handleHeadCheckChange
    });
    $[109] = caption;
    $[110] = defaultAlign;
    $[111] = finalColumns;
    $[112] = handleHeadCheckChange;
    $[113] = items;
    $[114] = topHeadRows;
    $[115] = t57;
  } else {
    t57 = $[115];
  }
  var tableTopHead = t57;
  var t58;
  if ($[116] !== defaultAlign || $[117] !== defaultEllipsis || $[118] !== finalColumns || $[119] !== handleBodyCheckChange || $[120] !== noData || $[121] !== onClick || $[122] !== onGetBodyColumnClassName || $[123] !== onGetBodyColumnStyle || $[124] !== onGetBodyColumnSx || $[125] !== onGetBodyRowClassName || $[126] !== onGetBodyRowStyle || $[127] !== onGetBodyRowSx || $[128] !== showEvenColor || $[129] !== showOddColor || $[130] !== sortable$1 || $[131] !== sortableItems) {
    t58 = finalColumns && /*#__PURE__*/React.createElement(material.TableBody, null, sortableItems ? sortableItems.length > 0 ? /*#__PURE__*/React.createElement(PTableSortableBody, {
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
    $[116] = defaultAlign;
    $[117] = defaultEllipsis;
    $[118] = finalColumns;
    $[119] = handleBodyCheckChange;
    $[120] = noData;
    $[121] = onClick;
    $[122] = onGetBodyColumnClassName;
    $[123] = onGetBodyColumnStyle;
    $[124] = onGetBodyColumnSx;
    $[125] = onGetBodyRowClassName;
    $[126] = onGetBodyRowStyle;
    $[127] = onGetBodyRowSx;
    $[128] = showEvenColor;
    $[129] = showOddColor;
    $[130] = sortable$1;
    $[131] = sortableItems;
    $[132] = t58;
  } else {
    t58 = $[132];
  }
  var tableBody = t58;
  var t59;
  if ($[133] !== defaultAlign || $[134] !== finalColumns || $[135] !== footer || $[136] !== isNoData || $[137] !== items) {
    t59 = finalColumns && !isNoData && footer && /*#__PURE__*/React.createElement(material.TableFooter, null, /*#__PURE__*/React.createElement(material.TableRow, null, finalColumns.map(function (column_8, idx_1) {
      return /*#__PURE__*/React.createElement(PTableFooterCell, {
        key: idx_1,
        column: column_8,
        items: items,
        defaultAlign: defaultAlign
      });
    })));
    $[133] = defaultAlign;
    $[134] = finalColumns;
    $[135] = footer;
    $[136] = isNoData;
    $[137] = items;
    $[138] = t59;
  } else {
    t59 = $[138];
  }
  var tableFooter = t59;
  var t60;
  if ($[139] !== TableContextSetHeadColumnChecked || $[140] !== TableContextSetHeadColumnCommands || $[141] !== TableContextSetItemColumnCheckDisabled || $[142] !== TableContextSetItemColumnChecked || $[143] !== TableContextSetItemColumnCommands || $[144] !== TableContextSetMenuOpen || $[145] !== className || $[146] !== containerHeightDetector || $[147] !== contentContainerStyle_0 || $[148] !== finalColumns || $[149] !== fullHeight || $[150] !== handleDragEnd || $[151] !== handlePageChange || $[152] !== menuOpen || $[153] !== openMenuId || $[154] !== (pagination === null || pagination === void 0 ? void 0 : pagination.className) || $[155] !== (pagination === null || pagination === void 0 ? void 0 : pagination.style) || $[156] !== (pagination === null || pagination === void 0 ? void 0 : pagination.sx) || $[157] !== paging || $[158] !== pagingAlign || $[159] !== pagingHeightResizeDetector || $[160] !== pagingStyle_0 || $[161] !== progressiveVisible || $[162] !== sensors || $[163] !== showEvenColor || $[164] !== showOddColor || $[165] !== sortable$1 || $[166] !== stickyHeader || $[167] !== style_0 || $[168] !== sx || $[169] !== tableBody || $[170] !== tableFooter || $[171] !== tableStyle_0 || $[172] !== tableSx_0 || $[173] !== tableTopHead) {
    t60 = finalColumns ? /*#__PURE__*/React.createElement(PTableContextProvider, {
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
    $[139] = TableContextSetHeadColumnChecked;
    $[140] = TableContextSetHeadColumnCommands;
    $[141] = TableContextSetItemColumnCheckDisabled;
    $[142] = TableContextSetItemColumnChecked;
    $[143] = TableContextSetItemColumnCommands;
    $[144] = TableContextSetMenuOpen;
    $[145] = className;
    $[146] = containerHeightDetector;
    $[147] = contentContainerStyle_0;
    $[148] = finalColumns;
    $[149] = fullHeight;
    $[150] = handleDragEnd;
    $[151] = handlePageChange;
    $[152] = menuOpen;
    $[153] = openMenuId;
    $[154] = pagination === null || pagination === void 0 ? void 0 : pagination.className;
    $[155] = pagination === null || pagination === void 0 ? void 0 : pagination.style;
    $[156] = pagination === null || pagination === void 0 ? void 0 : pagination.sx;
    $[157] = paging;
    $[158] = pagingAlign;
    $[159] = pagingHeightResizeDetector;
    $[160] = pagingStyle_0;
    $[161] = progressiveVisible;
    $[162] = sensors;
    $[163] = showEvenColor;
    $[164] = showOddColor;
    $[165] = sortable$1;
    $[166] = stickyHeader;
    $[167] = style_0;
    $[168] = sx;
    $[169] = tableBody;
    $[170] = tableFooter;
    $[171] = tableStyle_0;
    $[172] = tableSx_0;
    $[173] = tableTopHead;
    $[174] = t60;
  } else {
    t60 = $[174];
  }
  return t60;
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
  if ($[5] !== onGetData) {
    t4 = function t4(data) {
      lastGetDataDataRef.current = data;
      if (onGetData) {
        onGetData(data).then(setTableData);
      }
    };
    $[5] = onGetData;
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
  var t12;
  if ($[21] !== getDataRef || $[22] !== hash || $[23] !== hashToSearchValueRef || $[24] !== location.hash || $[25] !== location.pathname) {
    t12 = [location.pathname, location.hash, hash, hashToSearchValueRef, getDataRef];
    $[21] = getDataRef;
    $[22] = hash;
    $[23] = hashToSearchValueRef;
    $[24] = location.hash;
    $[25] = location.pathname;
    $[26] = t12;
  } else {
    t12 = $[26];
  }
  React.useEffect(t11, t12);
  var t13;
  if ($[27] !== getData || $[28] !== onRequestHashChange) {
    t13 = function t13(params) {
      if (onRequestHashChange) {
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
                bb225: switch (itemCommands_0.getType()) {
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
                      break bb225;
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
                      break bb225;
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
                      break bb225;
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
          onRequestHashChange(hashes.join("&"));
        }
      }
    };
    $[27] = getData;
    $[28] = onRequestHashChange;
    $[29] = t13;
  } else {
    t13 = $[29];
  }
  var hashChange = t13;
  var t14;
  if ($[30] !== getData || $[31] !== hash || $[32] !== hashChange) {
    t14 = function t14(page_0) {
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
    $[33] = t14;
  } else {
    t14 = $[33];
  }
  var handlePageChange = t14;
  var t15;
  if ($[34] !== getData || $[35] !== hash || $[36] !== hashChange || $[37] !== isFirstSearchSubmit) {
    t15 = function t15(data_1) {
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
    $[38] = t15;
  } else {
    t15 = $[38];
  }
  var handleSearchSubmit = t15;
  var t16 = searchInfo.searchGroups ? undefined : "none";
  var t17;
  if ($[39] !== t16) {
    t17 = {
      display: t16
    };
    $[39] = t16;
    $[40] = t17;
  } else {
    t17 = $[40];
  }
  var t18;
  if ($[41] !== searchInfo) {
    t18 = function t18(commands_3) {
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
    $[42] = t18;
  } else {
    t18 = $[42];
  }
  var t19;
  if ($[43] === Symbol["for"]("react.memo_cache_sentinel")) {
    t19 = /*#__PURE__*/React.createElement(reactForm.PSearchGroup, {
      hidden: true
    }, /*#__PURE__*/React.createElement(reactForm.PFormHidden, {
      name: "page",
      value: 1
    }));
    $[43] = t19;
  } else {
    t19 = $[43];
  }
  var t20;
  if ($[44] !== color || $[45] !== handleSearchSubmit || $[46] !== searchInfo.props || $[47] !== searchInfo.searchGroups || $[48] !== t18) {
    t20 = /*#__PURE__*/React.createElement(reactForm.PSearch, _extends({
      color: color
    }, searchInfo.props, {
      ref: t18,
      autoSubmit: true,
      onSubmit: handleSearchSubmit
    }), t19, searchInfo.searchGroups);
    $[44] = color;
    $[45] = handleSearchSubmit;
    $[46] = searchInfo.props;
    $[47] = searchInfo.searchGroups;
    $[48] = t18;
    $[49] = t20;
  } else {
    t20 = $[49];
  }
  var t21;
  if ($[50] !== t17 || $[51] !== t20) {
    t21 = /*#__PURE__*/React.createElement(material.Grid, {
      sx: t17
    }, t20);
    $[50] = t17;
    $[51] = t20;
    $[52] = t21;
  } else {
    t21 = $[52];
  }
  var searchView = t21;
  var t22;
  if ($[53] !== fullHeight || $[54] !== handlePageChange || $[55] !== stickyHeader || $[56] !== (tableData === null || tableData === void 0 ? void 0 : tableData.items) || $[57] !== (tableData === null || tableData === void 0 ? void 0 : tableData.paging) || $[58] !== tableInfo) {
    tableData === null || tableData === void 0 || tableData.items;
    tableData === null || tableData === void 0 || tableData.paging;
    t22 = function (_tableInfo$props, _tableInfo$props2) {
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
    $[59] = t22;
  } else {
    t22 = $[59];
  }
  var tableView = t22;
  var t23;
  if ($[60] !== className) {
    t23 = classNames("PSearchTable", className);
    $[60] = className;
    $[61] = t23;
  } else {
    t23 = $[61];
  }
  var t24;
  if ($[62] !== fullHeight || $[63] !== initStyle) {
    t24 = fullHeight ? _objectSpread2(_objectSpread2({}, initStyle), {}, {
      flex: 1,
      display: "flex"
    }) : initStyle;
    $[62] = fullHeight;
    $[63] = initStyle;
    $[64] = t24;
  } else {
    t24 = $[64];
  }
  var t25;
  if ($[65] !== betweenSearchTableComponent) {
    t25 = betweenSearchTableComponent && /*#__PURE__*/React.createElement(material.Grid, null, betweenSearchTableComponent);
    $[65] = betweenSearchTableComponent;
    $[66] = t25;
  } else {
    t25 = $[66];
  }
  var t26;
  if ($[67] !== searchView || $[68] !== sx || $[69] !== t23 || $[70] !== t24 || $[71] !== t25 || $[72] !== tableView) {
    t26 = /*#__PURE__*/React.createElement(material.Grid, {
      container: true,
      direction: "column",
      spacing: 1,
      className: t23,
      style: t24,
      sx: sx
    }, searchView, t25, tableView);
    $[67] = searchView;
    $[68] = sx;
    $[69] = t23;
    $[70] = t24;
    $[71] = t25;
    $[72] = tableView;
    $[73] = t26;
  } else {
    t26 = $[73];
  }
  return t26;
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
};
var PTableButton$1 = /*#__PURE__*/React.memo(PTableButton);var _excluded = ["ref", "children", "className", "sx", "color", "variant", "startIcon", "placement", "inModal", "zIndex", "menuList"];
var PTableMenuButton = function PTableMenuButton(t0) {
  var $ = compilerRuntime.c(72);
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
  var isMenuIdChanged = reactHook.useChanged(menuId, true);
  var isMenuOpenChanged = reactHook.useChanged(menuOpen, true);
  var isOpenChanged = reactHook.useChanged(open, true);
  var isOpenMenuIdChanged = reactHook.useChanged(openMenuId, true);
  if (isMenuIdChanged || isMenuOpenChanged || isOpenChanged || isOpenMenuIdChanged) {
    if (open && menuOpen && openMenuId !== menuId) {
      setOpen(false);
    }
  }
  var t4;
  if ($[13] !== menuId || $[14] !== open || $[15] !== setMenuOpen) {
    t4 = function t4() {
      setOpen(_temp);
      if (!open) {
        setMenuOpen(true, menuId);
      } else {
        setMenuOpen(false, menuId);
      }
    };
    $[13] = menuId;
    $[14] = open;
    $[15] = setMenuOpen;
    $[16] = t4;
  } else {
    t4 = $[16];
  }
  var handleClick = t4;
  var t5;
  if ($[17] !== menuId || $[18] !== open || $[19] !== setMenuOpen) {
    t5 = function t5() {
      if (open) {
        setOpen(false);
        setMenuOpen(false, menuId);
      }
    };
    $[17] = menuId;
    $[18] = open;
    $[19] = setMenuOpen;
    $[20] = t5;
  } else {
    t5 = $[20];
  }
  var handleClose = t5;
  var t6;
  if ($[21] !== menuId || $[22] !== open || $[23] !== setMenuOpen) {
    t6 = function t6(event) {
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
    $[21] = menuId;
    $[22] = open;
    $[23] = setMenuOpen;
    $[24] = t6;
  } else {
    t6 = $[24];
  }
  var handleListKeyDown = t6;
  var t7;
  if ($[25] !== buttonId || $[26] !== handleClose || $[27] !== handleListKeyDown || $[28] !== menuId || $[29] !== menuList || $[30] !== open) {
    var _t2;
    if ($[32] !== buttonId || $[33] !== handleClose || $[34] !== handleListKeyDown || $[35] !== menuId || $[36] !== open) {
      _t2 = {
        autoFocusItem: open,
        id: menuId,
        "aria-labelledby": buttonId,
        onKeyDown: handleListKeyDown,
        onClick: handleClose
      };
      $[32] = buttonId;
      $[33] = handleClose;
      $[34] = handleListKeyDown;
      $[35] = menuId;
      $[36] = open;
      $[37] = _t2;
    } else {
      _t2 = $[37];
    }
    t7 = /*#__PURE__*/React.cloneElement(menuList, _t2);
    $[25] = buttonId;
    $[26] = handleClose;
    $[27] = handleListKeyDown;
    $[28] = menuId;
    $[29] = menuList;
    $[30] = open;
    $[31] = t7;
  } else {
    t7 = $[31];
  }
  var finalMenuList = t7;
  var icon = !startIcon && !children ? "MoreVert" : undefined;
  var t8;
  if ($[38] !== ref) {
    t8 = function t8(r) {
      if (ref) {
        if (typeof ref === "function") {
          ref(r);
        } else {
          ref.current = r;
        }
      }
      setAnchorEl(r);
    };
    $[38] = ref;
    $[39] = t8;
  } else {
    t8 = $[39];
  }
  var t9 = open ? menuId : undefined;
  var t10 = open ? "true" : undefined;
  var t11;
  if ($[40] !== className) {
    t11 = classNames(className, "PTableMenuButton");
    $[40] = className;
    $[41] = t11;
  } else {
    t11 = $[41];
  }
  var t12 = !children ? 0.7 : icon || startIcon ? 0.7 : variant === "text" ? 1.2 : 0.7;
  var t13;
  if ($[42] !== initSx || $[43] !== t12) {
    t13 = _objectSpread2({
      minWidth: 0,
      pl: t12
    }, initSx);
    $[42] = initSx;
    $[43] = t12;
    $[44] = t13;
  } else {
    t13 = $[44];
  }
  var t14;
  if ($[45] !== buttonId || $[46] !== children || $[47] !== color || $[48] !== handleClick || $[49] !== icon || $[50] !== props || $[51] !== t10 || $[52] !== t11 || $[53] !== t13 || $[54] !== t8 || $[55] !== t9 || $[56] !== variant) {
    t14 = /*#__PURE__*/React.createElement(reactComponent.PButton, _extends({
      ref: t8,
      id: buttonId,
      variant: variant,
      "aria-controls": t9,
      "aria-expanded": t10,
      "aria-haspopup": "true",
      className: t11,
      type: "button",
      size: "small",
      sx: t13,
      color: color,
      startIcon: icon,
      onClick: handleClick
    }, props), children);
    $[45] = buttonId;
    $[46] = children;
    $[47] = color;
    $[48] = handleClick;
    $[49] = icon;
    $[50] = props;
    $[51] = t10;
    $[52] = t11;
    $[53] = t13;
    $[54] = t8;
    $[55] = t9;
    $[56] = variant;
    $[57] = t14;
  } else {
    t14 = $[57];
  }
  var t15 = inModal ? zIndex === undefined ? 1301 : zIndex : zIndex;
  var t16;
  if ($[58] !== t15) {
    t16 = {
      zIndex: t15
    };
    $[58] = t15;
    $[59] = t16;
  } else {
    t16 = $[59];
  }
  var t17;
  if ($[60] !== finalMenuList || $[61] !== handleClose) {
    t17 = function t17(t18) {
      var TransitionProps = t18.TransitionProps,
        placement_0 = t18.placement;
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
    $[60] = finalMenuList;
    $[61] = handleClose;
    $[62] = t17;
  } else {
    t17 = $[62];
  }
  var t18;
  if ($[63] !== anchorEl || $[64] !== open || $[65] !== placement || $[66] !== t16 || $[67] !== t17) {
    t18 = /*#__PURE__*/React.createElement(material.Popper, {
      className: "PTableMenuButton-Popper",
      open: open,
      anchorEl: anchorEl,
      role: undefined,
      placement: placement,
      transition: true,
      style: t16
    }, t17);
    $[63] = anchorEl;
    $[64] = open;
    $[65] = placement;
    $[66] = t16;
    $[67] = t17;
    $[68] = t18;
  } else {
    t18 = $[68];
  }
  var t19;
  if ($[69] !== t14 || $[70] !== t18) {
    t19 = /*#__PURE__*/React.createElement("span", null, t14, t18);
    $[69] = t14;
    $[70] = t18;
    $[71] = t19;
  } else {
    t19 = $[71];
  }
  return t19;
};
function _temp(old) {
  return !old;
}exports.PInfoTable=PInfoTable;exports.PSearchTable=PSearchTable;exports.PTable=PTable;exports.PTableBodyCell=PTableBodyCell;exports.PTableBodyRow=PTableBodyRow;exports.PTableButton=PTableButton$1;exports.PTableCommonCell=PTableCommonCell;exports.PTableFooterCell=PTableFooterCell;exports.PTableHeadCell=PTableHeadCell;exports.PTableMenuButton=PTableMenuButton;exports.PTablePagination=PTablePagination;exports.PTableSortableBody=PTableSortableBody;exports.PTableSortableBodyBlock=PTableSortableBodyBlock;exports.PTableTopHead=PTableTopHead;