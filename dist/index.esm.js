import React,{createContext,useContext,useMemo,useCallback,useState,useEffect,useRef,useLayoutEffect,useId}from'react';import classNames from'classnames';import {styled,TableRow,lighten,TableCell,Box,Tooltip,Checkbox,Stack,Pagination,useTheme,TableHead,TableBody,Icon,TableFooter,Paper,Table as Table$1,Grid,Button,Popper,Grow,ClickAwayListener,IconButton}from'@mui/material';import SimpleBar from'simplebar-react';import {useResizeDetector}from'react-resize-detector';import {useSortable,sortableKeyboardCoordinates,arrayMove,SortableContext,verticalListSortingStrategy}from'@dnd-kit/sortable';import dayjs from'dayjs';import {personalNoAutoDash,companyNoAutoDash,telAutoDash,numberFormat,notEmpty,equal,empty}from'@pdg/util';import {useAutoUpdateLayoutState}from'@pdg/react-hook';import {useSensors,useSensor,MouseSensor,TouchSensor,KeyboardSensor,DndContext,closestCenter}from'@dnd-kit/core';import'simplebar-react/dist/simplebar.min.css';import {v4}from'uuid';import {Search,SearchGroup,FormHidden,FormIcon}from'@pdg/react-form';import {PdgIcon}from'@pdg/react-component';import {CopyToClipboard}from'react-copy-to-clipboard';/******************************************************************************
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
            (column.ellipsis ||
                (column.type !== 'img' &&
                    column.type !== 'button' &&
                    column.type !== 'buttons' &&
                    (column.ellipsis == null ? !!initDefaultEllipsis : false)));
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
        return __assign(__assign(__assign(__assign({}, initStyle), { width: column.width, minWidth: column.minWidth, cursor: type === 'body' && (column.onClick || onClick) ? 'pointer' : undefined, paddingLeft: column.paddingLeft, paddingRight: column.paddingRight }), style), getStyle);
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
                        res = __assign(__assign({}, res), sx);
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
    return (React.createElement(StyledTableCell, { align: align, className: classNames(className, 'TableCommonCell', ellipsis && 'ellipsis', column.type ? "column-type-".concat(column.type) : false), style: style, sx: sx, onClick: type === 'body' ? handleClick : undefined }, children));
};
var templateObject_1$3;var StyledButtonsBox = styled(Box)(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n"])));
var TableBodyCell = function (_a) {
    // Use ---------------------------------------------------------------------------------------------------------------
    var className = _a.className, style = _a.style, sx = _a.sx, item = _a.item, index = _a.index, column = _a.column, defaultAlign = _a.defaultAlign, defaultEllipsis = _a.defaultEllipsis, onClick = _a.onClick, onCheckChange = _a.onCheckChange;
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
                    data = numberFormat(data);
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
                    data = telAutoDash(data);
                }
                break;
            case 'company_no':
                if (typeof data === 'string') {
                    data = companyNoAutoDash(data);
                }
                break;
            case 'personal_no':
                if (typeof data === 'string') {
                    data = personalNoAutoDash(data);
                }
                break;
            case 'check':
                data = (React.createElement(Box, { className: 'TableBoxyCell-check-box', onClick: menuOpen ? undefined : function (e) { return e.stopPropagation(); } },
                    React.createElement(Checkbox, { checked: checked, disabled: checkDisabled, onChange: function (e, newChecked) {
                            setChecked(newChecked);
                            column.onCheckChange && column.onCheckChange(item, newChecked);
                            onCheckChange && onCheckChange(item, column, newChecked);
                        } })));
                break;
            case 'button':
                data = (React.createElement(Box, { className: 'TableBoxyCell-button-box', onClick: menuOpen ? undefined : function (e) { return e.stopPropagation(); } }, data));
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
                        React.createElement(Tooltip, __assign({ className: 'TableBodyCell-tooltip', title: React.createElement("div", { style: { paddingTop: 3, paddingBottom: 3 } }, img) }, column.tooltipProps, { placement: placement }), img)));
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
                data = (React.createElement(Tooltip, __assign({ className: 'TableBodyCell-tooltip', title: tooltip }, column.tooltipProps), React.isValidElement(data) ? (data.type === React.Fragment ? (React.createElement("span", null, data)) : (data)) : (React.createElement("span", null, data))));
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
    return (React.createElement(TableCommonCell, { type: 'body', className: classNames('TableBodyCell', className), style: style, sx: sx, column: column, defaultAlign: defaultAlign, defaultEllipsis: defaultEllipsis, item: item, index: index, onClick: column.onClick || onClick ? handleClick : undefined }, !isHidden && data));
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
    id = _a.id, index = _a.index, defaultAlign = _a.defaultAlign, defaultEllipsis = _a.defaultEllipsis, sortable = _a.sortable, columns = _a.columns, item = _a.item, onClick = _a.onClick, onCheckChange = _a.onCheckChange, onGetColumnClassName = _a.onGetColumnClassName, onGetColumnStyle = _a.onGetColumnStyle, onGetColumnSx = _a.onGetColumnSx, 
    // -------------------------------------------------------------------------------------------------------------------
    props = __rest(_a, ["className", "style", "id", "index", "defaultAlign", "defaultEllipsis", "sortable", "columns", "item", "onClick", "onCheckChange", "onGetColumnClassName", "onGetColumnStyle", "onGetColumnSx"]);
    var _b = useSortable({ id: id }), attributes = _b.attributes, listeners = _b.listeners, setNodeRef = _b.setNodeRef, transform = _b.transform, transition = _b.transition;
    var finalStyle = useMemo(function () {
        return sortable
            ? __assign(__assign({}, style), { transform: CSS.Transform.toString(transform), transition: transition }) : style;
    }, [sortable, style, transform, transition]);
    var sortableProps = useMemo(function () {
        return sortable
            ? __assign(__assign({ ref: setNodeRef }, attributes), listeners) : {};
    }, [attributes, listeners, setNodeRef, sortable]);
    return (React.createElement(StyledBodyRow, __assign({ className: classNames('TableBodyRow', className), style: finalStyle }, props, sortableProps), columns.map(function (column, columnIdx) { return (React.createElement(TableBodyCell, { className: onGetColumnClassName ? onGetColumnClassName(column, item, index) : undefined, sx: onGetColumnSx ? onGetColumnSx(column, item, index) : undefined, style: onGetColumnStyle ? onGetColumnStyle(column, item, index) : undefined, key: columnIdx, index: index, item: item, defaultAlign: defaultAlign, defaultEllipsis: defaultEllipsis, column: column, onClick: onClick, onCheckChange: onCheckChange })); })));
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
    return (React.createElement(TableCommonCell, { type: 'head', className: 'TableFooterCell', column: column, defaultAlign: defaultAlign }, data));
};var TablePagination = function (_a) {
    var className = _a.className, style = _a.style, sx = _a.sx, paging = _a.paging, align = _a.align, onChange = _a.onChange;
    return (React.createElement(Stack, { alignItems: align },
        React.createElement(Pagination, { count: paging.last_page, page: paging.current_page, color: 'primary', className: classNames('TablePagination', className), style: style, sx: sx, onChange: function (e, page) {
                if (onChange)
                    onChange(page);
            } })));
};var TableContextProvider = function (_a) {
    var children = _a.children, value = _a.value;
    return React.createElement(TableContext.Provider, { value: value }, children);
};var TableTopHeadDefaultProps = {};var TableTopHeadCaptionRow = styled(TableRow)(function (_a) {
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
            return column.hideAllCheck ? null : (React.createElement(Checkbox, { checked: checked, disabled: checkDisabled, onChange: function (e, newChecked) {
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
    // Render ------------------------------------------------------------------------------------------------------------
    return (React.createElement(TableCommonCell, { type: 'head', className: 'TableHeadCell', style: style, column: column, defaultAlign: defaultAlign }, data));
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
        return !!caption && (React.createElement(TableTopHeadCaptionRow, { ref: captionRef, className: 'TableTopHeadCaptionRow' },
            React.createElement(TableCell, { colSpan: columns.length }, caption)));
    }, [caption, columns]);
    var makeRowCells = useCallback(function (row, top) {
        var totalColumns = 0;
        var cells = row
            .map(function (info, idx) {
            if (info) {
                totalColumns += info.colSpan || 1;
                return (React.createElement(TableCell, { key: idx, colSpan: info.colSpan, align: info.align, style: {
                        top: top,
                        borderBottom: 0,
                    } },
                    info.label,
                    info.label != null && React.createElement(BottomLine, { style: { backgroundColor: theme.palette.divider } })));
            }
        })
            .filter(function (cell) { return !!cell; });
        if (totalColumns < columns.length) {
            cells.push(React.createElement(TableCell, { key: columns.length, colSpan: columns.length - cells.length, style: { top: top, borderBottom: 0 } }));
        }
        return cells;
    }, [columns, theme.palette.divider]);
    var columnRow = useMemo(function () {
        var top = (captionHeight || 0) + (row1Height || 0) + (row2Height || 0) + (row3Height || 0);
        return (React.createElement(TableRow, null, columns.map(function (column, idx) { return (React.createElement(TableHeadCell, { key: idx, column: column, defaultAlign: defaultAlign, top: top, onCheckChange: onCheckChange })); })));
    }, [captionHeight, columns, defaultAlign, onCheckChange, row1Height, row2Height, row3Height]);
    // Render ------------------------------------------------------------------------------------------------------------
    if (rows) {
        if (Array.isArray(rows[0])) {
            return (React.createElement(TableHead, { className: 'TableHead' },
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
                    return (React.createElement(TableRow, { key: idx, ref: ref, className: 'TableHeadRow' }, makeRowCells(row, top)));
                })));
        }
        else {
            return (React.createElement(TableHead, { className: 'TableHead' },
                captionRow,
                React.createElement(TableRow, { ref: row1Ref, className: 'TableHeadRow' }, makeRowCells(rows, captionHeight)),
                columnRow));
        }
    }
    else {
        return (React.createElement(TableHead, { className: 'TableHead' },
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
    // Ref ---------------------------------------------------------------------------------------------------------------
    var caption = _a.caption, topHeadRows = _a.topHeadRows, initColumns = _a.columns, initItems = _a.items, initPaging = _a.paging, pagingAlign = _a.pagingAlign, defaultAlign = _a.defaultAlign, defaultEllipsis = _a.defaultEllipsis, initStickyHeader = _a.stickyHeader, height = _a.height, minHeight = _a.minHeight, maxHeight = _a.maxHeight, fullHeight = _a.fullHeight, showOddColor = _a.showOddColor, showEvenColor = _a.showEvenColor, cellPadding = _a.cellPadding, footer = _a.footer, noData = _a.noData, pagination = _a.pagination, sortable = _a.sortable, onClick = _a.onClick, onGetBodyRowClassName = _a.onGetBodyRowClassName, onGetBodyRowStyle = _a.onGetBodyRowStyle, onGetBodyRowSx = _a.onGetBodyRowSx, onGetBodyColumnClassName = _a.onGetBodyColumnClassName, onGetBodyColumnStyle = _a.onGetBodyColumnStyle, onGetBodyColumnSx = _a.onGetBodyColumnSx, onPageChange = _a.onPageChange, onSortChange = _a.onSortChange, onCheckChange = _a.onCheckChange, 
    // ---------------------------------------------------------------------------------------------------------------
    className = _a.className, initStyle = _a.style, sx = _a.sx;
    var localHeaderDataRef = useRef({});
    var localBodyDataRef = useRef({});
    var updateHeadCheckTimer = useRef();
    var fireOnCheckChangeTimer = useRef({});
    var simpleBarRef = useRef(null);
    var finalColumnsIdRef = useRef([]);
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
            var id = _a.id, item = __rest(_a, ["id"]);
            return __assign({ id: id == null ? "".concat(v4(), "_").concat(index) : id }, item);
        });
    }, []);
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
            return __assign(__assign({ width: '100%' }, initStyle), { flex: 1, justifyContent: 'flex-end', height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' });
        }
        else {
            return __assign({ width: '100%' }, initStyle);
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
            return __assign({ position: 'sticky' }, style);
        }
        return style;
    }, [fullHeight]);
    var tableTopHead = useMemo(function () {
        return finalColumns && (React.createElement(TableTopHead, { caption: caption, rows: topHeadRows, columns: finalColumns, defaultAlign: defaultAlign, onCheckChange: handleHeadCheckChange }));
    }, [caption, defaultAlign, finalColumns, handleHeadCheckChange, topHeadRows]);
    var tableBody = useMemo(function () {
        return finalColumns && (React.createElement(TableBody, null, sortableItems ? (sortableItems.length > 0 ? (React.createElement(SortableContext, { items: sortableItems, strategy: verticalListSortingStrategy }, sortableItems.map(function (item, idx) { return (React.createElement(TableBodyRow, { key: item.id, className: classNames(!!showOddColor && 'odd-color', !!showEvenColor && 'even-color', onGetBodyRowClassName ? onGetBodyRowClassName(item, idx) : undefined), style: onGetBodyRowStyle ? onGetBodyRowStyle(item, idx) : undefined, sx: onGetBodyRowSx ? onGetBodyRowSx(item, idx) : undefined, onGetColumnClassName: onGetBodyColumnClassName, onGetColumnStyle: onGetBodyColumnStyle, onGetColumnSx: onGetBodyColumnSx, hover: true, id: item.id, index: idx, defaultAlign: defaultAlign, defaultEllipsis: defaultEllipsis, sortable: sortable, columns: finalColumns, item: item, onClick: onClick, onCheckChange: handleBodyCheckChange })); }))) : (React.createElement(StyledBodyRow$1, null,
            React.createElement(TableCell, { colSpan: finalColumns.length, style: { flex: 1 } }, noData ? (noData) : (React.createElement(StyledNoDataDiv, null,
                React.createElement("div", null,
                    React.createElement(Icon, null, "error")),
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
        sortable,
        sortableItems,
    ]);
    var tableFooter = useMemo(function () {
        return finalColumns &&
            !isNoData &&
            footer && (React.createElement(TableFooter, null,
            React.createElement(TableRow, null, finalColumns.map(function (column, idx) { return (React.createElement(TableFooterCell, { key: idx, column: column, defaultAlign: defaultAlign })); }))));
    }, [defaultAlign, finalColumns, footer, isNoData]);
    var tablePaging = useMemo(function () {
        return finalColumns &&
            paging &&
            paging.total > 0 && (React.createElement(Stack, { ref: fullHeight ? pagingHeightResizeDetector : undefined, alignItems: pagingAlign, style: pagingStyle },
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
    // Render ----------------------------------------------------------------------------------------------------------
    return finalColumns ? (React.createElement(TableContextProvider, { value: tableContextValue },
        React.createElement(Paper, { ref: fullHeight ? containerHeightDetector : undefined, className: classNames('Table', className, !!stickyHeader && 'sticky-header', !!fullHeight && 'full-height', !!showOddColor && 'odd-color', !!showEvenColor && 'even-color', !!sortable && 'sortable'), variant: 'outlined', style: style, sx: sx },
            React.createElement(SimpleBar, { ref: simpleBarRef, style: simpleBarStyle },
                React.createElement(DndContext, { sensors: sensors, collisionDetection: closestCenter, onDragEnd: handleDragEnd },
                    React.createElement(Table$1, { stickyHeader: stickyHeader, sx: tableSx, style: tableStyle },
                        tableTopHead,
                        tableBody,
                        tableFooter))),
            tablePaging))) : null;
});
Table.displayName = 'Table';
Table.defaultProps = TableDefaultProps;var SearchTableDefaultProps = {};var SearchTable = React.forwardRef(function (_a, ref) {
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
            var ref_1 = search.ref, searchGroups = search.searchGroups, props = __rest(search, ["ref", "searchGroups"]);
            searchInfo.ref = ref_1;
            searchInfo.searchGroups = searchGroups;
            searchInfo.props = props;
        }
        return searchInfo;
    }, []);
    var getTableInfo = useCallback(function (table) {
        var tableInfo = {};
        if (table) {
            var ref_2 = table.ref, props = __rest(table, ["ref"]);
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
    //------------------------------------------------------------------------------------------------------------------
    var handlePageChange = useCallback(function (page) {
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
            var finalData = __assign(__assign({}, data), { page: 1 });
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
            return __assign(__assign({}, initStyle), { flex: 1, display: 'flex' });
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
    return (React.createElement(Grid, { container: true, direction: 'column', spacing: 1, className: classNames('SearchTable', className), style: style, sx: sx },
        React.createElement(Grid, { item: true, sx: { display: searchInfo.searchGroups ? undefined : 'none' } },
            React.createElement(Search, __assign({ color: color }, searchInfo.props, { ref: function (commands) {
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
                React.createElement(SearchGroup, { hidden: true },
                    React.createElement(FormHidden, { name: 'page', value: 1 })),
                searchInfo.searchGroups)),
        betweenSearchTableComponent && React.createElement(Grid, { item: true }, betweenSearchTableComponent),
        React.createElement(Grid, { item: true, style: tableContainerStyle },
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
    var children = _a.children, className = _a.className, initSx = _a.sx, color = _a.color, icon = _a.icon, startIcon = _a.startIcon, endIcon = _a.endIcon, onClick = _a.onClick, props = __rest(_a, ["children", "className", "sx", "color", "icon", "startIcon", "endIcon", "onClick"]);
    var sx = useMemo(function () { return (__assign({ minWidth: 0, px: !startIcon && !endIcon ? 0.7 : 1.7 }, initSx)); }, [endIcon, initSx, startIcon]);
    // Render ----------------------------------------------------------------------------------------------------------
    return (React.createElement(Button, __assign({ ref: ref, className: classNames(className, 'TableButton'), type: 'button', size: 'small', sx: sx, color: color, onClick: onClick, startIcon: startIcon ? (React.createElement(PdgIcon, { fontSize: 'small', sx: { mr: -0.5 } }, startIcon)) : undefined, endIcon: endIcon ? (React.createElement(PdgIcon, { fontSize: 'small', sx: { ml: -0.5 } }, endIcon)) : undefined }, props),
        icon && (React.createElement(PdgIcon, { fontSize: 'small', color: color }, icon)),
        children));
});
TableButton.displayName = 'TableButton';
TableButton.defaultProps = TableButtonDefaultProps;var TableMenuButtonDefaultProps = {
    variant: 'outlined',
    color: 'primary',
    placement: 'bottom',
};var TableMenuButton = React.forwardRef(function (_a, ref) {
    // ID ----------------------------------------------------------------------------------------------------------------
    var children = _a.children, className = _a.className, initSx = _a.sx, color = _a.color, icon = _a.icon, startIcon = _a.startIcon, endIcon = _a.endIcon, placement = _a.placement, inModal = _a.inModal, zIndex = _a.zIndex, menuList = _a.menuList, props = __rest(_a, ["children", "className", "sx", "color", "icon", "startIcon", "endIcon", "placement", "inModal", "zIndex", "menuList"]);
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
    var sx = useMemo(function () { return (__assign({ minWidth: 0, px: !startIcon && !endIcon ? 0.7 : 1.7 }, initSx)); }, [endIcon, initSx, startIcon]);
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
        return React.cloneElement(menuList, {
            autoFocusItem: open,
            id: menuId,
            'aria-labelledby': buttonId,
            onKeyDown: handleListKeyDown,
            onClick: handleClose,
        });
    }, [buttonId, handleClose, handleListKeyDown, menuId, menuList, open]);
    // Render ----------------------------------------------------------------------------------------------------------
    return (React.createElement("span", null,
        React.createElement(Button, __assign({ ref: function (r) {
                if (ref) {
                    if (typeof ref === 'function') {
                        ref(r);
                    }
                    else {
                        ref.current = r;
                    }
                }
                anchorRef.current = r;
            }, id: buttonId, "aria-controls": open ? menuId : undefined, "aria-expanded": open ? 'true' : undefined, "aria-haspopup": 'true', className: classNames(className, 'TableMenuButton'), type: 'button', size: 'small', sx: sx, color: color, onClick: handleClick, startIcon: startIcon ? (React.createElement(PdgIcon, { fontSize: 'small', sx: { mr: -0.5 } }, startIcon)) : undefined, endIcon: endIcon ? (React.createElement(PdgIcon, { fontSize: 'small', sx: { ml: -0.5 } }, endIcon)) : undefined }, props),
            icon && (React.createElement(PdgIcon, { fontSize: 'small', color: color }, icon)),
            children),
        React.createElement(Popper, { className: 'TableMenuButton-Popper', open: open, anchorEl: anchorRef.current, role: undefined, placement: placement, transition: true, style: { zIndex: inModal ? (zIndex === undefined ? 1301 : zIndex) : zIndex } }, function (_a) {
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
            return (React.createElement(Grow, __assign({}, TransitionProps, { style: {
                    transformOrigin: transformOrigin,
                } }),
                React.createElement(Paper, null,
                    React.createElement(ClickAwayListener, { onClickAway: handleClose }, finalMenuList))));
        })));
});
TableMenuButton.displayName = 'TableMenuButton';
TableMenuButton.defaultProps = TableMenuButtonDefaultProps;var InfoTableDefaultProps = {
    spacing: 2,
    rowSpacing: 3,
    labelColor: 'primary',
    dividerColor: 'gray',
};var Label = styled(Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 12px;\n  font-weight: bold;\n"], ["\n  font-size: 12px;\n  font-weight: bold;\n"])));
var ValueWrap = styled(Box)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-top: 3px;\n  position: relative;\n  display: flex;\n  flex-direction: row;\n"], ["\n  margin-top: 3px;\n  position: relative;\n  display: flex;\n  flex-direction: row;\n"])));
var Value = styled('div')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  flex: 1;\n"], ["\n  flex: 1;\n"])));
var ValueEllipsis = styled('div')(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  flex: 1;\n  position: relative;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"], ["\n  flex: 1;\n  position: relative;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"])));
var ValueClipboard = styled('div')(templateObject_5 || (templateObject_5 = __makeTemplateObject([""], [""])));
var ClipboardIconButton = styled(IconButton)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  margin-top: -10px;\n  margin-bottom: -10px;\n"], ["\n  margin-top: -10px;\n  margin-bottom: -10px;\n"])));
var Line = styled('div')(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  border-top: 1px solid #efefef;\n  height: 1px;\n  flex: 1;\n"], ["\n  border-top: 1px solid #efefef;\n  height: 1px;\n  flex: 1;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;var InfoTable = function (_a) {
    var cols = _a.cols, spacing = _a.spacing, columnSpacing = _a.columnSpacing, rowSpacing = _a.rowSpacing, className = _a.className, style = _a.style, sx = _a.sx, labelClassName = _a.labelClassName, labelColor = _a.labelColor, labelStyle = _a.labelStyle, labelSx = _a.labelSx, dividerColor = _a.dividerColor, valueClassName = _a.valueClassName, valueStyle = _a.valueStyle, valueSx = _a.valueSx, ellipsis = _a.ellipsis, valueUnderline = _a.valueUnderline, info = _a.info, items = _a.items, onCopyToClipboard = _a.onCopyToClipboard;
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
    return (React.createElement(Grid, { container: true, spacing: spacing, columnSpacing: columnSpacing, rowSpacing: rowSpacing, className: classNames('InfoTable', className), style: style, sx: sx }, items.map(function (item, idx) {
        if (item) {
            var finalLabelColor = typographyColorToSxColor(item.type === 'divider' ? item.dividerColor || dividerColor : item.labelColor || labelColor);
            var finalLabelSx = combineSx(labelSx, item.labelSx, !!finalLabelColor && { color: finalLabelColor });
            var finalValueSx = combineSx(valueSx, item.valueSx);
            var valueUnderlineStyle = valueUnderline
                ? { borderBottom: '1px solid #efefef', paddingBottom: 5 }
                : undefined;
            var finalSizeProps = __assign({}, sizeProps);
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
                            data = telAutoDash(data);
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
                            data = companyNoAutoDash(data);
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
            if (empty(data))
                data = item.onRenderEmpty ? item.onRenderEmpty(info) : React.createElement(React.Fragment, null, "\u00A0");
            var copyToClipboardText_1 = item.clipboardText || (typeof data === 'string' ? data : typeof data === 'number' ? data.toString() : '');
            return item.type === 'divider' ? (React.createElement(Grid, { key: idx, item: true, xs: 12 },
                React.createElement(Stack, { direction: 'row', spacing: 0.5, alignItems: 'center' },
                    item.icon && (React.createElement(FormIcon, { sx: { color: item.dividerColor || dividerColor }, fontSize: 'small' }, item.icon)),
                    item.label && (React.createElement(Label, { className: classNames(labelClassName, item.labelClassName), style: __assign(__assign({}, item.labelStyle), labelStyle), sx: finalLabelSx }, item.label)),
                    item.dividerLine && (React.createElement(React.Fragment, null, item.icon || item.label ? (React.createElement("div", { style: { flex: 1, paddingLeft: 5 } },
                        React.createElement(Line, null))) : (React.createElement(Line, null))))))) : (React.createElement(Grid, __assign({ key: idx, item: true }, finalSizeProps, { className: item.className, style: item.style, sx: item.sx }),
                React.createElement(Stack, { direction: 'row', spacing: 0.5, alignItems: 'center' },
                    item.icon && (React.createElement(FormIcon, { sx: { color: finalLabelColor }, fontSize: 'small' }, "CalendarMonth")),
                    React.createElement(Label, { className: classNames(labelClassName, item.labelClassName), style: __assign(__assign({}, item.labelStyle), labelStyle), sx: finalLabelSx }, item.label)),
                React.createElement(ValueWrap, { className: classNames(valueClassName, item.valueClassName), style: __assign(__assign(__assign({}, valueStyle), item.valueStyle), valueUnderlineStyle), sx: finalValueSx },
                    item.ellipsis || ellipsis ? React.createElement(ValueEllipsis, null, data) : React.createElement(Value, null, data),
                    item.clipboard && notEmpty(copyToClipboardText_1) && (React.createElement(ValueClipboard, null,
                        React.createElement(CopyToClipboard, { text: copyToClipboardText_1, onCopy: onCopyToClipboard ? function () { return onCopyToClipboard(item, copyToClipboardText_1); } : undefined },
                            React.createElement(ClipboardIconButton, __assign({ size: 'small', color: 'primary' }, item.clipboardProps),
                                React.createElement(PdgIcon, null, item.clipboardIcon || 'ContentPaste'))))))));
        }
    })));
};
InfoTable.displayName = 'InfoTable';
InfoTable.defaultProps = InfoTableDefaultProps;export{InfoTable,InfoTableDefaultProps,SearchTable,SearchTableDefaultProps,Table,TableButton,TableButtonDefaultProps,TableDefaultProps,TableMenuButton,TableMenuButtonDefaultProps};