'use strict';var React=require('react'),classNames=require('classnames'),material=require('@mui/material'),reactResizeDetector=require('react-resize-detector'),sortable=require('@dnd-kit/sortable'),dayjs=require('dayjs'),util=require('@pdg/util'),reactHook=require('@pdg/react-hook'),core=require('@dnd-kit/core'),uuid=require('uuid'),SimpleBar=require('simplebar-react');require('simplebar-react/dist/simplebar.min.css');var reactForm=require('@pdg/react-form'),reactComponent=require('@pdg/react-component'),reactCopyToClipboard=require('react-copy-to-clipboard');/******************************************************************************
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
};var TableDefaultProps = {
    defaultAlign: 'left',
    pagingAlign: 'center',
    cellPadding: 13,
};var StyledBodyRow$1 = material.styled(material.TableRow)(function (_a) {
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
var StyledNoDataDiv = material.styled('div')(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  text-align: center;\n  padding: 30px 0;\n  font-weight: 500;\n  font-size: 13px;\n  color: #94a0b2;\n  opacity: 0.8;\n\n  .material-icons {\n    font-size: 40px;\n    margin-bottom: 5px;\n  }\n"], ["\n  text-align: center;\n  padding: 30px 0;\n  font-weight: 500;\n  font-size: 13px;\n  color: #94a0b2;\n  opacity: 0.8;\n\n  .material-icons {\n    font-size: 40px;\n    margin-bottom: 5px;\n  }\n"])));
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
});function getTableColumnAlign(column, defaultAlign) {
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
};var TableContext = React.createContext(TableContextDefaultValue);function useTableState() {
    var value = React.useContext(TableContext);
    if (value === undefined) {
        throw new Error('useFormState should be used within TableContext.Provider');
    }
    return value;
}var StyledTableCell = material.styled(material.TableCell)(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  &.ellipsis {\n    position: relative;\n    max-width: 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n"], ["\n  &.ellipsis {\n    position: relative;\n    max-width: 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n"])));
var TableCommonCell = function (_a) {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/
    var children = _a.children, initClassName = _a.className, initStyle = _a.style, initSx = _a.sx, type = _a.type, column = _a.column, defaultAlign = _a.defaultAlign, initDefaultEllipsis = _a.defaultEllipsis, index = _a.index, item = _a.item, onClick = _a.onClick;
    var menuOpen = useTableState().menuOpen;
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var align = React.useMemo(function () { return getTableColumnAlign(column, defaultAlign); }, [column, defaultAlign]);
    var ellipsis = React.useMemo(function () {
        return type !== 'head' &&
            (column.ellipsis ||
                (column.type !== 'img' &&
                    column.type !== 'button' &&
                    column.type !== 'buttons' &&
                    (column.ellipsis == null ? !!initDefaultEllipsis : false)));
    }, [type, column, initDefaultEllipsis]);
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
                    ? __assign(__assign({}, (_b = column.head) === null || _b === void 0 ? void 0 : _b.style), { backgroundColor: column.head.backgroundColor }) : (_c = column.head) === null || _c === void 0 ? void 0 : _c.style;
                getStyle = ((_d = column.head) === null || _d === void 0 ? void 0 : _d.onGetStyle) ? (_e = column.head) === null || _e === void 0 ? void 0 : _e.onGetStyle() : undefined;
                break;
            case 'body':
                style = column.backgroundColor ? __assign(__assign({}, column.style), { backgroundColor: column.backgroundColor }) : column.style;
                if (item != null && index != null) {
                    getStyle = column.onGetStyle ? column.onGetStyle(item, index) : undefined;
                }
                break;
            case 'footer':
                style = ((_f = column.footer) === null || _f === void 0 ? void 0 : _f.backgroundColor)
                    ? __assign(__assign({}, (_g = column.footer) === null || _g === void 0 ? void 0 : _g.style), { backgroundColor: column.footer.backgroundColor }) : (_h = column.footer) === null || _h === void 0 ? void 0 : _h.style;
                getStyle = ((_j = column.footer) === null || _j === void 0 ? void 0 : _j.onGetStyle) ? (_k = column.footer) === null || _k === void 0 ? void 0 : _k.onGetStyle() : undefined;
                break;
        }
        return __assign(__assign(__assign(__assign({}, initStyle), { width: column.width, minWidth: column.minWidth, cursor: type === 'body' && (column.onClick || onClick) ? 'pointer' : undefined, paddingLeft: column.paddingLeft, paddingRight: column.paddingRight }), style), getStyle);
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
                        res = __assign(__assign({}, res), sx);
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
    return (React.createElement(StyledTableCell, { align: align, className: classNames(className, 'TableCommonCell', ellipsis && 'ellipsis', column.type ? "column-type-".concat(column.type) : false), style: style, sx: sx, onClick: type === 'body' ? handleClick : undefined }, children));
};
var templateObject_1$3;var StyledButtonsBox = material.styled(material.Box)(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n"])));
var TableBodyCell = function (_a) {
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
                    data = util.numberFormat(data);
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
                    data = util.telNoAutoDash(data);
                }
                break;
            case 'company_no':
                if (typeof data === 'string') {
                    data = util.companyNoAutoDash(data);
                }
                break;
            case 'personal_no':
                if (typeof data === 'string') {
                    data = util.personalNoAutoDash(data);
                }
                break;
            case 'check':
                data = (React.createElement(material.Box, { className: 'TableBoxyCell-check-box', onClick: menuOpen ? undefined : function (e) { return e.stopPropagation(); } },
                    React.createElement(material.Checkbox, { checked: checked, disabled: checkDisabled, onChange: function (e, newChecked) {
                            setChecked(newChecked);
                            column.onCheckChange && column.onCheckChange(item, newChecked);
                            onCheckChange && onCheckChange(item, column, newChecked);
                        } })));
                break;
            case 'button':
                data = (React.createElement(material.Box, { className: 'TableBoxyCell-button-box', onClick: menuOpen ? undefined : function (e) { return e.stopPropagation(); } }, data));
                break;
            case 'buttons':
                data = (React.createElement(StyledButtonsBox, { className: 'TableBodyCell-buttons-box', justifyContent: buttonsBoxJustifyContent, onClick: menuOpen ? undefined : function (e) { return e.stopPropagation(); } }, data));
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
                        React.createElement(material.Tooltip, __assign({ className: 'TableBodyCell-tooltip', title: React.createElement("div", { style: { paddingTop: 3, paddingBottom: 3 } }, img) }, column.tooltipProps, { placement: placement }), img)));
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
                data = (React.createElement(material.Tooltip, __assign({ className: 'TableBodyCell-tooltip', title: tooltip }, column.tooltipProps), React.isValidElement(data) ? (data.type === React.Fragment ? (React.createElement("span", null, data)) : (data)) : (React.createElement("span", null, data))));
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
    return (React.createElement(TableCommonCell, { type: 'body', className: classNames('TableBodyCell', className), style: style, sx: sx, column: column, defaultAlign: defaultAlign, defaultEllipsis: defaultEllipsis, item: item, index: index, onClick: column.onClick || onClick ? handleClick : undefined }, !isHidden && data));
};
var templateObject_1$2;var StyledBodyRow = material.styled(material.TableRow)(function (_a) {
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
var TableBodyRow = function (_a) {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/
    var className = _a.className, style = _a.style, id = _a.id, index = _a.index, defaultAlign = _a.defaultAlign, defaultEllipsis = _a.defaultEllipsis, sortable$1 = _a.sortable, columns = _a.columns, item = _a.item, onClick = _a.onClick, onCheckChange = _a.onCheckChange, onGetColumnClassName = _a.onGetColumnClassName, onGetColumnStyle = _a.onGetColumnStyle, onGetColumnSx = _a.onGetColumnSx, props = __rest(_a, ["className", "style", "id", "index", "defaultAlign", "defaultEllipsis", "sortable", "columns", "item", "onClick", "onCheckChange", "onGetColumnClassName", "onGetColumnStyle", "onGetColumnSx"]);
    var _b = sortable.useSortable({ id: id }), attributes = _b.attributes, listeners = _b.listeners, setNodeRef = _b.setNodeRef, transform = _b.transform, transition = _b.transition;
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var finalStyle = React.useMemo(function () {
        return sortable$1
            ? __assign(__assign({}, style), { transform: CSS.Transform.toString(transform), transition: transition }) : style;
    }, [sortable$1, style, transform, transition]);
    var sortableProps = React.useMemo(function () {
        return sortable$1
            ? __assign(__assign({ ref: setNodeRef }, attributes), listeners) : {};
    }, [attributes, listeners, setNodeRef, sortable$1]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(StyledBodyRow, __assign({ className: classNames('TableBodyRow', className), style: finalStyle }, props, sortableProps), columns.map(function (column, columnIdx) { return (React.createElement(TableBodyCell, { className: onGetColumnClassName ? onGetColumnClassName(column, item, index) : undefined, sx: onGetColumnSx ? onGetColumnSx(column, item, index) : undefined, style: onGetColumnStyle ? onGetColumnStyle(column, item, index) : undefined, key: columnIdx, index: index, item: item, defaultAlign: defaultAlign, defaultEllipsis: defaultEllipsis, column: column, onClick: onClick, onCheckChange: onCheckChange })); })));
};
TableBodyRow.displayName = 'TableBodyRow';
TableBodyRow.defaultProps = TableBodyRowDefaultProps;var TableFooterCell = function (_a) {
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var column = _a.column, defaultAlign = _a.defaultAlign;
    var data = React.useMemo(function () {
        var _a, _b, _c;
        if ((_a = column.footer) === null || _a === void 0 ? void 0 : _a.onRender) {
            return (_b = column.footer) === null || _b === void 0 ? void 0 : _b.onRender();
        }
        else {
            return (_c = column.footer) === null || _c === void 0 ? void 0 : _c.value;
        }
    }, [column]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(TableCommonCell, { type: 'head', className: 'TableFooterCell', column: column, defaultAlign: defaultAlign }, data));
};var TablePagination = function (_a) {
    var className = _a.className, style = _a.style, sx = _a.sx, paging = _a.paging, align = _a.align, onChange = _a.onChange;
    return (React.createElement(material.Stack, { alignItems: align },
        React.createElement(material.Pagination, { count: paging.last_page, page: paging.current_page, color: 'primary', className: classNames('TablePagination', className), style: style, sx: sx, onChange: function (e, page) {
                if (onChange)
                    onChange(page);
            } })));
};var TableContextProvider = function (_a) {
    var children = _a.children, value = _a.value;
    return React.createElement(TableContext.Provider, { value: value }, children);
};var TableTopHeadDefaultProps = {};var TableTopHeadCaptionRow = material.styled(material.TableRow)(function (_a) {
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
    var column = _a.column, defaultAlign = _a.defaultAlign, top = _a.top, onCheckChange = _a.onCheckChange;
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
    var style = React.useMemo(function () { return (top !== undefined ? { top: top } : undefined); }, [top]);
    var data = React.useMemo(function () {
        var _a, _b;
        if (column.type === 'check') {
            return column.hideAllCheck ? null : (React.createElement(material.Checkbox, { checked: checked, disabled: checkDisabled, onChange: function (e, newChecked) {
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
                    return React.createElement("div", { dangerouslySetInnerHTML: { __html: column.label } });
                }
                else {
                    return column.label;
                }
            }
        }
    }, [checkDisabled, checked, column, onCheckChange]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(TableCommonCell, { type: 'head', className: 'TableHeadCell', style: style, column: column, defaultAlign: defaultAlign }, data));
};var BottomLine = material.styled('div')(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  height: 1px;\n  position: absolute;\n  left: 3px;\n  right: 3px;\n  bottom: 0;\n"], ["\n  height: 1px;\n  position: absolute;\n  left: 3px;\n  right: 3px;\n  bottom: 0;\n"])));
var TableTopHead = function (_a) {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/
    var columns = _a.columns, rows = _a.rows, caption = _a.caption, defaultAlign = _a.defaultAlign, onCheckChange = _a.onCheckChange;
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
    var captionHeight = reactResizeDetector.useResizeDetector({
        targetRef: captionRef,
        handleWidth: false,
        handleHeight: true,
    }).height;
    var row1Height = reactResizeDetector.useResizeDetector({ targetRef: row1Ref, handleWidth: false, handleHeight: true }).height;
    var row2Height = reactResizeDetector.useResizeDetector({ targetRef: row2Ref, handleWidth: false, handleHeight: true }).height;
    var row3Height = reactResizeDetector.useResizeDetector({ targetRef: row3Ref, handleWidth: false, handleHeight: true }).height;
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    var captionRow = React.useMemo(function () {
        return !!caption && (React.createElement(TableTopHeadCaptionRow, { ref: captionRef, className: 'TableTopHeadCaptionRow' },
            React.createElement(material.TableCell, { colSpan: columns.length }, caption)));
    }, [caption, columns]);
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
        return (React.createElement(material.TableRow, null, columns.map(function (column, idx) { return (React.createElement(TableHeadCell, { key: idx, column: column, defaultAlign: defaultAlign, top: top, onCheckChange: onCheckChange })); })));
    }, [captionHeight, columns, defaultAlign, onCheckChange, row1Height, row2Height, row3Height]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    if (rows) {
        if (Array.isArray(rows[0])) {
            return (React.createElement(material.TableHead, { className: 'TableHead' },
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
                    return (React.createElement(material.TableRow, { key: idx, ref: ref, className: 'TableHeadRow' }, makeRowCells(row, top)));
                })));
        }
        else {
            return (React.createElement(material.TableHead, { className: 'TableHead' },
                captionRow,
                React.createElement(material.TableRow, { ref: row1Ref, className: 'TableHeadRow' }, makeRowCells(rows, captionHeight)),
                columnRow));
        }
    }
    else {
        return (React.createElement(material.TableHead, { className: 'TableHead' },
            captionRow,
            columnRow));
    }
};
TableTopHead.displayName = 'TableTopHead';
TableTopHead.defaultProps = TableTopHeadDefaultProps;
var templateObject_1$1;function columnFilter(v) {
    return v !== undefined && v !== null && v !== false;
}
var _columnId = 0;
var Table = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var className = _a.className, initStyle = _a.style, sx = _a.sx, caption = _a.caption, topHeadRows = _a.topHeadRows, initColumns = _a.columns, initItems = _a.items, initPaging = _a.paging, pagingAlign = _a.pagingAlign, defaultAlign = _a.defaultAlign, defaultEllipsis = _a.defaultEllipsis, initStickyHeader = _a.stickyHeader, height = _a.height, minHeight = _a.minHeight, maxHeight = _a.maxHeight, fullHeight = _a.fullHeight, showOddColor = _a.showOddColor, showEvenColor = _a.showEvenColor, cellPadding = _a.cellPadding, footer = _a.footer, noData = _a.noData, pagination = _a.pagination, sortable$1 = _a.sortable, onClick = _a.onClick, onGetBodyRowClassName = _a.onGetBodyRowClassName, onGetBodyRowStyle = _a.onGetBodyRowStyle, onGetBodyRowSx = _a.onGetBodyRowSx, onGetBodyColumnClassName = _a.onGetBodyColumnClassName, onGetBodyColumnStyle = _a.onGetBodyColumnStyle, onGetBodyColumnSx = _a.onGetBodyColumnSx, onPageChange = _a.onPageChange, onSortChange = _a.onSortChange, onCheckChange = _a.onCheckChange;
    var localHeaderDataRef = React.useRef({});
    var localBodyDataRef = React.useRef({});
    var updateHeadCheckTimer = React.useRef();
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
    var _b = React.useState(false), menuOpen = _b[0], setMenuOpen = _b[1];
    var _c = React.useState(undefined), openMenuId = _c[0], setOpenMenuId = _c[1];
    var _d = reactHook.useAutoUpdateLayoutState(initColumns), columns = _d[0], setColumns = _d[1];
    var _e = React.useState(), finalColumns = _e[0], setFinalColumns = _e[1];
    var _f = reactHook.useAutoUpdateLayoutState(initItems), items = _f[0], setItems = _f[1];
    var _g = React.useState(), sortableItems = _g[0], setSortableItems = _g[1];
    var _h = reactHook.useAutoUpdateLayoutState(initPaging), paging = _h[0], setPaging = _h[1];
    /********************************************************************************************************************
     * containerHeight
     * ******************************************************************************************************************/
    var _j = React.useState(), containerHeight = _j[0], setContainerHeight = _j[1];
    var containerHeightDetector = reactResizeDetector.useResizeDetector({
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
    var _k = React.useState(), pagingHeight = _k[0], setPagingHeight = _k[1];
    var pagingHeightResizeDetector = reactResizeDetector.useResizeDetector({
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
     * Memo
     * ******************************************************************************************************************/
    var tableSx = React.useMemo(function () {
        var sx = {
            padding: typeof cellPadding === 'number' ? "".concat(cellPadding, "px") : cellPadding,
        };
        return {
            '> .MuiTableHead-root > .MuiTableRow-root > .MuiTableCell-root ': sx,
            '> .MuiTableBody-root > .MuiTableRow-root > .MuiTableCell-root ': sx,
            '> .MuiTableFooter-root > .MuiTableRow-root > .MuiTableCell-root ': sx,
        };
    }, [cellPadding]);
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    var makeSortableItems = React.useCallback(function (items) {
        return items === null || items === void 0 ? void 0 : items.map(function (_a, index) {
            var id = _a.id, item = __rest(_a, ["id"]);
            return __assign({ id: id == null ? "".concat(uuid.v4(), "_").concat(index) : id }, item);
        });
    }, []);
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
    React.useLayoutEffect(function () {
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
    var tableContextValue = React.useMemo(function () { return ({
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
    var isNoData = React.useMemo(function () { return !!sortableItems && sortableItems.length <= 0; }, [sortableItems]);
    var finalPagingHeight = React.useMemo(function () { return (paging && paging.total > 0 ? pagingHeight || 0 : 0); }, [paging, pagingHeight]);
    var stickyHeader = React.useMemo(function () { return !isNoData && initStickyHeader; }, [initStickyHeader, isNoData]);
    var style = React.useMemo(function () {
        if (fullHeight) {
            return __assign(__assign({ width: '100%' }, initStyle), { flex: 1, justifyContent: 'flex-end', height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' });
        }
        else {
            return __assign({ width: '100%' }, initStyle);
        }
    }, [initStyle, fullHeight]);
    var simpleBarStyle = React.useMemo(function () {
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
    var tableStyle = React.useMemo(function () {
        if (fullHeight && isNoData) {
            return { flex: 1, height: (containerHeight || 0) - finalPagingHeight - 2 };
        }
    }, [fullHeight, isNoData, containerHeight, finalPagingHeight]);
    var pagingStyle = React.useMemo(function () {
        var style = { padding: '13px 0', borderTop: '1px solid rgba(224, 224, 224, 1)' };
        if (fullHeight) {
            return __assign({ position: 'sticky' }, style);
        }
        return style;
    }, [fullHeight]);
    var tableTopHead = React.useMemo(function () {
        return finalColumns && (React.createElement(TableTopHead, { caption: caption, rows: topHeadRows, columns: finalColumns, defaultAlign: defaultAlign, onCheckChange: handleHeadCheckChange }));
    }, [caption, defaultAlign, finalColumns, handleHeadCheckChange, topHeadRows]);
    var tableBody = React.useMemo(function () {
        return finalColumns && (React.createElement(material.TableBody, null, sortableItems ? (sortableItems.length > 0 ? (React.createElement(sortable.SortableContext, { items: sortableItems, strategy: sortable.verticalListSortingStrategy }, sortableItems.map(function (item, idx) { return (React.createElement(TableBodyRow, { key: item.id, className: classNames(!!showOddColor && 'odd-color', !!showEvenColor && 'even-color', onGetBodyRowClassName ? onGetBodyRowClassName(item, idx) : undefined), style: onGetBodyRowStyle ? onGetBodyRowStyle(item, idx) : undefined, sx: onGetBodyRowSx ? onGetBodyRowSx(item, idx) : undefined, onGetColumnClassName: onGetBodyColumnClassName, onGetColumnStyle: onGetBodyColumnStyle, onGetColumnSx: onGetBodyColumnSx, hover: true, id: item.id, index: idx, defaultAlign: defaultAlign, defaultEllipsis: defaultEllipsis, sortable: sortable$1, columns: finalColumns, item: item, onClick: onClick, onCheckChange: handleBodyCheckChange })); }))) : (React.createElement(StyledBodyRow$1, null,
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
            React.createElement(material.TableRow, null, finalColumns.map(function (column, idx) { return (React.createElement(TableFooterCell, { key: idx, column: column, defaultAlign: defaultAlign })); }))));
    }, [defaultAlign, finalColumns, footer, isNoData]);
    var tablePaging = React.useMemo(function () {
        return finalColumns &&
            paging &&
            paging.total > 0 && (React.createElement(material.Stack, { ref: fullHeight ? pagingHeightResizeDetector : undefined, alignItems: pagingAlign, style: pagingStyle },
            React.createElement(TablePagination, { className: pagination === null || pagination === void 0 ? void 0 : pagination.className, style: pagination === null || pagination === void 0 ? void 0 : pagination.style, sx: pagination === null || pagination === void 0 ? void 0 : pagination.sx, paging: paging, align: pagingAlign, onChange: handlePageChange })));
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
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return finalColumns ? (React.createElement(TableContextProvider, { value: tableContextValue },
        React.createElement(material.Paper, { ref: fullHeight ? containerHeightDetector : undefined, className: classNames('Table', className, !!stickyHeader && 'sticky-header', !!fullHeight && 'full-height', !!showOddColor && 'odd-color', !!showEvenColor && 'even-color', !!sortable$1 && 'sortable'), variant: 'outlined', style: style, sx: sx },
            React.createElement(SimpleBar, { ref: simpleBarRef, style: simpleBarStyle },
                React.createElement(core.DndContext, { sensors: sensors, collisionDetection: core.closestCenter, onDragEnd: handleDragEnd },
                    React.createElement(material.Table, { stickyHeader: stickyHeader, sx: tableSx, style: tableStyle },
                        tableTopHead,
                        tableBody,
                        tableFooter))),
            tablePaging))) : null;
});
Table.displayName = 'Table';
Table.defaultProps = TableDefaultProps;var SearchTableDefaultProps = {};var SearchTable = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var _b, _c;
    var className = _a.className, initStyle = _a.style, sx = _a.sx, color = _a.color, hash = _a.hash, stickyHeader = _a.stickyHeader, fullHeight = _a.fullHeight, search = _a.search, table = _a.table, betweenSearchTableComponent = _a.betweenSearchTableComponent, onGetData = _a.onGetData, onRequestHashChange = _a.onRequestHashChange;
    var searchRef = React.useRef();
    var tableRef = React.useRef();
    var lastGetDataDataRef = React.useRef({});
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    var getSearchInfo = React.useCallback(function (search) {
        var searchInfo = {};
        if (search) {
            var ref_1 = search.ref, searchGroups = search.searchGroups, props = __rest(search, ["ref", "searchGroups"]);
            searchInfo.ref = ref_1;
            searchInfo.searchGroups = searchGroups;
            searchInfo.props = props;
        }
        return searchInfo;
    }, []);
    var getTableInfo = React.useCallback(function (table) {
        var tableInfo = {};
        if (table) {
            var ref_2 = table.ref, props = __rest(table, ["ref"]);
            tableInfo.ref = ref_2;
            tableInfo.props = props;
        }
        return tableInfo;
    }, []);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _d = React.useState(true), isFirstSearchSubmit = _d[0], setIsFirstSearchSubmit = _d[1];
    var _e = React.useState(), tableData = _e[0], setTableData = _e[1];
    /********************************************************************************************************************
     * searchInfo
     * ******************************************************************************************************************/
    var searchInfoFirstUseEffect = React.useRef(true);
    var _f = React.useState(function () { return getSearchInfo(search); }), searchInfo = _f[0], setSearchInfo = _f[1];
    React.useEffect(function () {
        if (searchInfoFirstUseEffect.current) {
            searchInfoFirstUseEffect.current = false;
        }
        else {
            setSearchInfo(getSearchInfo(search));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);
    /********************************************************************************************************************
     * tableInfo
     * ******************************************************************************************************************/
    var tableInfoFirstUseEffect = React.useRef(true);
    var _g = React.useState(function () { return getTableInfo(table); }), tableInfo = _g[0], setTableInfo = _g[1];
    React.useEffect(function () {
        if (tableInfoFirstUseEffect.current) {
            tableInfoFirstUseEffect.current = false;
        }
        else {
            setTableInfo(getTableInfo(table));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
    var deHash = React.useCallback(function () {
        var values = {};
        var hash = window.location.hash.substring(1);
        hash.replace(/([^=&]+)=([^&]*)/g, function (substring, key, value) {
            values[decodeURIComponent(key)] = decodeURIComponent(value);
            return substring;
        });
        return values;
    }, []);
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
                            case 'FormCheckbox':
                                if (util.notEmpty(value)) {
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
                                    if (util.notEmpty(value)) {
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
                                        if (util.notEmpty(value)) {
                                            var startValue = dayjs(value, format);
                                            dateRangePickerCommands.setFromValue(startValue.isValid() ? startValue : null);
                                        }
                                        else {
                                            dateRangePickerCommands.setFromValue(null);
                                        }
                                    }
                                    else if (name === toName) {
                                        if (util.notEmpty(value)) {
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
                                        dateRangePickerCommands.setFromValue(util.notEmpty(value) ? Number(value) : null);
                                    }
                                    else if (name === toName) {
                                        dateRangePickerCommands.setToValue(util.notEmpty(value) ? Number(value) : null);
                                    }
                                }
                                break;
                            case 'FormMonthPicker':
                                {
                                    var monthCommands = itemCommands;
                                    var yearName = monthCommands.getFormValueYearName();
                                    var monthName = monthCommands.getFormValueMonthName();
                                    if (name === yearName) {
                                        monthCommands.setYear(util.notEmpty(value) ? Number(value) : null);
                                    }
                                    else if (name === monthName) {
                                        monthCommands.setMonth(util.notEmpty(value) ? Number(value) : null);
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
                                        monthRangeCommands.setFromYear(util.notEmpty(value) ? Number(value) : null);
                                    }
                                    else if (name === fromMonthName) {
                                        monthRangeCommands.setFromMonth(util.notEmpty(value) ? Number(value) : null);
                                    }
                                    else if (name === toYearName) {
                                        monthRangeCommands.setToYear(util.notEmpty(value) ? Number(value) : null);
                                    }
                                    else if (name === toMonthName) {
                                        monthRangeCommands.setToMonth(util.notEmpty(value) ? Number(value) : null);
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
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    React.useLayoutEffect(function () {
        if (ref) {
            var commands = {
                reload: function (page) {
                    var _a, _b, _c, _d;
                    if (page != null) {
                        (_a = tableRef.current) === null || _a === void 0 ? void 0 : _a.scrollToTop();
                    }
                    var finalData;
                    if (lastGetDataDataRef.current) {
                        finalData = __assign({}, lastGetDataDataRef.current);
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
    React.useEffect(function () {
        if (hash) {
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
                            if (resetValue != null && !util.equal(resetValue, value) && typeof value !== 'object') {
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
            finalData = __assign({}, lastGetDataDataRef.current);
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
            var finalData = __assign(__assign({}, data), { page: 1 });
            if (hash) {
                hashChange(finalData);
            }
            else {
                getData(finalData);
            }
        }
    }, [searchRef, hash, hashChange, getData, isFirstSearchSubmit]);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var styles = React.useMemo(function () {
        return fullHeight
            ? {
                containerStyle: __assign(__assign({}, initStyle), { flex: 1, display: 'flex' }),
                tableContainerStyle: { flex: 1, display: 'flex', flexDirection: 'column' },
            }
            : { containerStyle: initStyle };
    }, [initStyle, fullHeight]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(material.Grid, { container: true, direction: 'column', spacing: 1, className: classNames('SearchTable', className), style: styles.containerStyle, sx: sx },
        React.createElement(material.Grid, { item: true, sx: { display: searchInfo.searchGroups ? undefined : 'none' } },
            React.createElement(reactForm.Search, __assign({ color: color }, searchInfo.props, { ref: function (commands) {
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
                React.createElement(reactForm.SearchGroup, { hidden: true },
                    React.createElement(reactForm.FormHidden, { name: 'page', value: 1 })),
                searchInfo.searchGroups)),
        betweenSearchTableComponent && React.createElement(material.Grid, { item: true }, betweenSearchTableComponent),
        React.createElement(material.Grid, { item: true, style: styles.tableContainerStyle },
            React.createElement(Table, __assign({}, tableInfo.props, { stickyHeader: stickyHeader || ((_b = tableInfo.props) === null || _b === void 0 ? void 0 : _b.stickyHeader), fullHeight: fullHeight || ((_c = tableInfo.props) === null || _c === void 0 ? void 0 : _c.fullHeight), ref: function (commands) {
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
};var TableButton = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var children = _a.children, className = _a.className, initSx = _a.sx, color = _a.color, icon = _a.icon, startIcon = _a.startIcon, endIcon = _a.endIcon, onClick = _a.onClick, props = __rest(_a, ["children", "className", "sx", "color", "icon", "startIcon", "endIcon", "onClick"]);
    var sx = React.useMemo(function () { return (__assign({ minWidth: 0, px: 0.7 }, initSx)); }, [initSx]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(reactComponent.PdgButton, __assign({ ref: ref, className: classNames(className, 'TableButton'), type: 'button', size: 'small', sx: sx, color: color, icon: icon, startIcon: startIcon, endIcon: endIcon, onClick: onClick }, props), children));
});
TableButton.displayName = 'TableButton';
TableButton.defaultProps = TableButtonDefaultProps;var TableMenuButtonDefaultProps = {
    variant: 'text',
    color: 'primary',
    placement: 'bottom',
};var TableMenuButton = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    var children = _a.children, className = _a.className, initSx = _a.sx, color = _a.color, variant = _a.variant, initIcon = _a.icon, startIcon = _a.startIcon, endIcon = _a.endIcon, placement = _a.placement, inModal = _a.inModal, zIndex = _a.zIndex, menuList = _a.menuList, props = __rest(_a, ["children", "className", "sx", "color", "variant", "icon", "startIcon", "endIcon", "placement", "inModal", "zIndex", "menuList"]);
    var buttonId = React.useId();
    var menuId = React.useId();
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/
    var _b = useTableState(), menuOpen = _b.menuOpen, openMenuId = _b.openMenuId, setMenuOpen = _b.setMenuOpen;
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var anchorRef = React.useRef();
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _c = React.useState(false), open = _c[0], setOpen = _c[1];
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var icon = React.useMemo(function () { return (!initIcon && !startIcon && !endIcon && !children ? 'MoreVert' : initIcon); }, [initIcon, startIcon, endIcon, children]);
    var sx = React.useMemo(function () { return (__assign({ minWidth: 0, pl: !children ? 0.7 : icon || startIcon ? 0.7 : variant === 'text' ? 1.2 : 0.7, pr: !children ? 0.7 : endIcon ? 0.7 : variant === 'text' ? 1.2 : 0.7 }, initSx)); }, [children, endIcon, icon, initSx, startIcon, variant]);
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
     * Render
     * ******************************************************************************************************************/
    return (React.createElement("span", null,
        React.createElement(reactComponent.PdgButton, __assign({ ref: function (r) {
                if (ref) {
                    if (typeof ref === 'function') {
                        ref(r);
                    }
                    else {
                        ref.current = r;
                    }
                }
                anchorRef.current = r;
            }, id: buttonId, variant: variant, "aria-controls": open ? menuId : undefined, "aria-expanded": open ? 'true' : undefined, "aria-haspopup": 'true', className: classNames(className, 'TableMenuButton'), type: 'button', size: 'small', sx: sx, color: color, icon: icon, startIcon: startIcon, endIcon: endIcon, onClick: handleClick }, props), children),
        React.createElement(material.Popper, { className: 'TableMenuButton-Popper', open: open, anchorEl: anchorRef.current, role: undefined, placement: placement, transition: true, style: { zIndex: inModal ? (zIndex === undefined ? 1301 : zIndex) : zIndex } }, function (_a) {
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
            return (React.createElement(material.Grow, __assign({}, TransitionProps, { style: {
                    transformOrigin: transformOrigin,
                } }),
                React.createElement(material.Paper, null,
                    React.createElement(material.ClickAwayListener, { onClickAway: handleClose }, finalMenuList))));
        })));
});
TableMenuButton.displayName = 'TableMenuButton';
TableMenuButton.defaultProps = TableMenuButtonDefaultProps;var InfoTableDefaultProps = {
    spacing: 2,
    rowSpacing: 3,
    labelColor: 'primary',
    dividerColor: 'gray',
};var Label = material.styled(material.Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 12px;\n  font-weight: bold;\n"], ["\n  font-size: 12px;\n  font-weight: bold;\n"])));
var ValueWrap = material.styled(material.Box)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-top: 3px;\n  position: relative;\n  display: flex;\n  flex-direction: row;\n"], ["\n  margin-top: 3px;\n  position: relative;\n  display: flex;\n  flex-direction: row;\n"])));
var Value = material.styled('div')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  flex: 1;\n"], ["\n  flex: 1;\n"])));
var ValueEllipsis = material.styled('div')(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  flex: 1;\n  position: relative;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"], ["\n  flex: 1;\n  position: relative;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"])));
var ValueClipboard = material.styled('div')(templateObject_5 || (templateObject_5 = __makeTemplateObject([""], [""])));
var ClipboardIconButton = material.styled(material.IconButton)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  margin-top: -10px;\n  margin-bottom: -10px;\n"], ["\n  margin-top: -10px;\n  margin-bottom: -10px;\n"])));
var Line = material.styled('div')(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  border-top: 1px solid #efefef;\n  height: 1px;\n  flex: 1;\n"], ["\n  border-top: 1px solid #efefef;\n  height: 1px;\n  flex: 1;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;var InfoTable = function (_a) {
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var cols = _a.cols, spacing = _a.spacing, columnSpacing = _a.columnSpacing, rowSpacing = _a.rowSpacing, className = _a.className, style = _a.style, sx = _a.sx, labelClassName = _a.labelClassName, labelColor = _a.labelColor, labelStyle = _a.labelStyle, labelSx = _a.labelSx, dividerColor = _a.dividerColor, valueClassName = _a.valueClassName, valueStyle = _a.valueStyle, valueSx = _a.valueSx, ellipsis = _a.ellipsis, valueUnderline = _a.valueUnderline, info = _a.info, items = _a.items, onCopyToClipboard = _a.onCopyToClipboard;
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
            else if (util.notEmpty(data)) {
                switch (item.type) {
                    case 'number':
                        if (typeof data === 'string' || typeof data === 'number') {
                            data = util.numberFormat(data);
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
                            data = util.telNoAutoDash(data);
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
                    case 'company_no':
                        if (typeof data === 'string') {
                            data = util.companyNoAutoDash(data);
                        }
                        break;
                    case 'personal_no':
                        if (typeof data === 'string') {
                            data = util.personalNoAutoDash(data);
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
            if (util.empty(data))
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
            return item.type === 'divider' ? (React.createElement(material.Grid, { key: idx, item: true, xs: 12 },
                React.createElement(material.Stack, { direction: 'row', spacing: 0.5, alignItems: 'center' },
                    item.icon && (React.createElement(reactComponent.PdgIcon, { sx: { color: item.dividerColor || dividerColor }, size: 'small' }, item.icon)),
                    item.label && (React.createElement(Label, { className: classNames(labelClassName, item.labelClassName), style: __assign(__assign({}, item.labelStyle), labelStyle), sx: finalLabelSx }, item.label)),
                    item.dividerLine && (React.createElement(React.Fragment, null, item.icon || item.label ? (React.createElement("div", { style: { flex: 1, paddingLeft: 5 } },
                        React.createElement(Line, null))) : (React.createElement(Line, null))))))) : (React.createElement(material.Grid, __assign({ key: idx, item: true }, sizeProps, { className: item.className, style: item.style, sx: item.sx }),
                React.createElement(material.Stack, { direction: 'row', spacing: 0.5, alignItems: 'center' },
                    item.icon && (React.createElement(reactComponent.PdgIcon, { sx: { color: finalLabelColor }, size: 'small' }, "CalendarMonth")),
                    React.createElement(Label, { className: classNames(labelClassName, item.labelClassName), style: __assign(__assign({}, item.labelStyle), labelStyle), sx: finalLabelSx }, item.label)),
                React.createElement(ValueWrap, { className: classNames(valueClassName, item.valueClassName), style: __assign(__assign(__assign({}, valueStyle), item.valueStyle), valueUnderlineStyle), sx: finalValueSx },
                    item.ellipsis || ellipsis ? React.createElement(ValueEllipsis, null, data) : React.createElement(Value, null, data),
                    item.clipboard && util.notEmpty(copyToClipboardText) && (React.createElement(ValueClipboard, null,
                        React.createElement(reactCopyToClipboard.CopyToClipboard, { text: copyToClipboardText, onCopy: onCopyToClipboard ? function () { return onCopyToClipboard(item, copyToClipboardText); } : undefined },
                            React.createElement(ClipboardIconButton, __assign({ size: 'small', color: 'primary' }, item.clipboardProps),
                                React.createElement(reactComponent.PdgIcon, null, item.clipboardIcon || 'ContentPaste'))))))));
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
    return (React.createElement(material.Grid, { container: true, spacing: spacing, columnSpacing: columnSpacing, rowSpacing: rowSpacing, className: classNames('InfoTable', className), style: style, sx: sx }, content));
};
InfoTable.displayName = 'InfoTable';
InfoTable.defaultProps = InfoTableDefaultProps;exports.InfoTable=InfoTable;exports.InfoTableDefaultProps=InfoTableDefaultProps;exports.SearchTable=SearchTable;exports.SearchTableDefaultProps=SearchTableDefaultProps;exports.Table=Table;exports.TableButton=TableButton;exports.TableButtonDefaultProps=TableButtonDefaultProps;exports.TableDefaultProps=TableDefaultProps;exports.TableMenuButton=TableMenuButton;exports.TableMenuButtonDefaultProps=TableMenuButtonDefaultProps;