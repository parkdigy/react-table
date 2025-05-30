import React,{createContext,useContext,useMemo,useCallback,useState,useEffect,useRef,useLayoutEffect,useId}from'react';import classNames from'classnames';import {styled,TableRow,lighten,TableCell,Stack,Pagination,Checkbox,useTheme,TableHead,Box,Tooltip,TableBody,Icon,TableFooter,Paper,Table as Table$1,Grid,Popper,Grow,ClickAwayListener,IconButton}from'@mui/material';import {useResizeDetector}from'react-resize-detector';import {useAutoUpdateLayoutState}from'@pdg/react-hook';import {useSensors,useSensor,MouseSensor,TouchSensor,KeyboardSensor,DndContext,closestCenter}from'@dnd-kit/core';import {useSortable,SortableContext,verticalListSortingStrategy,sortableKeyboardCoordinates,arrayMove}from'@dnd-kit/sortable';import SimpleBar from'simplebar-react';import'simplebar-react/dist/simplebar.min.css';import {v4}from'uuid';import dayjs from'dayjs';import {personalNoAutoDash,companyNoAutoDash,telNoAutoDash,numberFormat,ifUndefined,notEmpty,equal,empty}from'@pdg/util';import {useInView}from'react-intersection-observer';import {Search,SearchGroup,FormHidden}from'@pdg/react-form';import {PdgButton,PdgIcon,PdgCopyToClipboard}from'@pdg/react-component';function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (typeof document === 'undefined') { return; }

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
}var css_248z = ".simplebar-track.simplebar-vertical {\n  width: 8px !important;\n}\n.simplebar-track.simplebar-vertical .simplebar-scrollbar.simplebar-visible:before {\n  opacity: 0.3 !important;\n}\n\n.Table .TableHead .TableHeadRow th {\n  position: relative;\n  transform: translateY(-100%);\n}\n.Table.sticky-header .TableHead .TableHeadRow th {\n  position: sticky;\n  transform: none;\n}";
styleInject(css_248z);/******************************************************************************
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
var templateObject_1$4;function getTableColumnAlign(column, defaultAlign) {
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
}var StyledTableCell = styled(TableCell)(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  &.ellipsis {\n    position: relative;\n    max-width: 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n"], ["\n  &.ellipsis {\n    position: relative;\n    max-width: 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n"])));
var TableCommonCell = React.forwardRef(function (_a, ref) {
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
    return (React.createElement(StyledTableCell, { ref: ref, align: align, className: classNames(className, 'TableCommonCell', ellipsis && 'ellipsis', column.type ? "column-type-".concat(column.type) : false), style: style, sx: sx, onClick: type === 'body' ? handleClick : undefined }, children));
});
var templateObject_1$3;var TableFooterCell = function (_a) {
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
                        return React.createElement("div", { dangerouslySetInnerHTML: { __html: column.label } });
                    }
                    else {
                        return column.label;
                    }
                }
            }
            else {
                return (React.createElement(Checkbox, { checked: checked, disabled: checkDisabled, onChange: function (e, newChecked) {
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
    return (React.createElement(TableCommonCell, { type: 'head', className: 'TableHeadCell', style: top !== undefined ? { top: top } : undefined, column: column, defaultAlign: defaultAlign }, data));
};var BottomLine = styled('div')(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  height: 1px;\n  position: absolute;\n  left: 3px;\n  right: 3px;\n  bottom: 0;\n"], ["\n  height: 1px;\n  position: absolute;\n  left: 3px;\n  right: 3px;\n  bottom: 0;\n"])));
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
        return (React.createElement(TableRow, null, columns.map(function (column, idx) { return (React.createElement(TableHeadCell, { key: idx, column: column, items: items, defaultAlign: defaultAlign, top: top, onCheckChange: onCheckChange })); })));
    }, [captionHeight, columns, defaultAlign, items, onCheckChange, row1Height, row2Height, row3Height]);
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/
    var captionRow = !!caption && (React.createElement(TableTopHeadCaptionRow, { ref: captionRef, className: 'TableTopHeadCaptionRow' },
        React.createElement(TableCell, { colSpan: columns.length }, caption)));
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
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
var templateObject_1$2;var makeSortableItems = function (items) {
    return items === null || items === void 0 ? void 0 : items.map(function (_a, index) {
        var id = _a.id, item = __rest(_a, ["id"]);
        return __assign({ id: id == null ? "".concat(v4(), "_").concat(index) : id }, item);
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
});var StyledButtonsBox = styled(Box)(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n"])));
var TableBodyCell = React.forwardRef(function (_a, ref) {
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
                    data = telNoAutoDash(data);
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
    return (React.createElement(TableCommonCell, { ref: ref, type: 'body', className: classNames('TableBodyCell', className), style: style, sx: sx, column: column, defaultAlign: defaultAlign, defaultEllipsis: defaultEllipsis, item: item, index: index, onClick: column.onClick || onClick ? handleClick : undefined }, !isHidden && data));
});
var templateObject_1$1;var StyledBodyRow = styled(TableRow)(function (_a) {
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
    var className = _a.className, style = _a.style, id = _a.id, index = _a.index, defaultAlign = _a.defaultAlign, defaultEllipsis = _a.defaultEllipsis, sortable = _a.sortable, columns = _a.columns, item = _a.item, onClick = _a.onClick, onCheckChange = _a.onCheckChange, onGetColumnClassName = _a.onGetColumnClassName, onGetColumnStyle = _a.onGetColumnStyle, onGetColumnSx = _a.onGetColumnSx, props = __rest(_a, ["className", "style", "id", "index", "defaultAlign", "defaultEllipsis", "sortable", "columns", "item", "onClick", "onCheckChange", "onGetColumnClassName", "onGetColumnStyle", "onGetColumnSx"]);
    var _b = useSortable({ id: id }), attributes = _b.attributes, listeners = _b.listeners, setNodeRef = _b.setNodeRef, transform = _b.transform, transition = _b.transition;
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/
    var sortableProps = sortable
        ? __assign(__assign({ ref: setNodeRef }, attributes), listeners) : {};
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(React.Fragment, null,
        React.createElement(StyledBodyRow, __assign({ className: classNames('TableBodyRow', className), style: sortable
                ? __assign(__assign({}, style), { transform: CSS.Transform.toString(transform), transition: transition }) : style }, props, sortableProps), columns.map(function (column, columnIdx) { return (React.createElement(TableBodyCell, { className: onGetColumnClassName ? onGetColumnClassName(column, item, index) : undefined, sx: onGetColumnSx ? onGetColumnSx(column, item, index) : undefined, style: onGetColumnStyle ? onGetColumnStyle(column, item, index) : undefined, key: columnIdx, index: index, item: item, defaultAlign: defaultAlign, defaultEllipsis: defaultEllipsis, column: column, onClick: onClick, onCheckChange: onCheckChange })); }))));
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
        return !progressiveVisible || inView ? (items.map(function (item, idx) { return (React.createElement(TableBodyRow, { key: item.id, id: item.id, index: baseIndex + idx, className: classNames(showOddColor && 'odd-color', showEvenColor && 'even-color', onGetBodyRowClassName ? onGetBodyRowClassName(item, baseIndex + idx) : undefined), style: onGetBodyRowStyle ? onGetBodyRowStyle(item, baseIndex + idx) : undefined, sx: onGetBodyRowSx ? onGetBodyRowSx(item, baseIndex + idx) : undefined, hover: true, onGetColumnClassName: onGetBodyColumnClassName, onGetColumnStyle: onGetBodyColumnStyle, onGetColumnSx: onGetBodyColumnSx, defaultAlign: defaultAlign, defaultEllipsis: defaultEllipsis, sortable: sortable, columns: columns, item: item, onClick: onClick, onCheckChange: onCheckChange })); })) : (React.createElement(TableRow, { ref: canInView ? ref : undefined },
            React.createElement(TableCell, { colSpan: columns.length, style: { height: progressiveVisible.rowHeight * items.length, border: 'none' } })));
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
            return (React.createElement(React.Fragment, null, chunkArray(items, ifUndefined(progressiveVisible.blockSize, 20)).map(function (bItems, index) { return (React.createElement(TableSortableBodyBlock, { key: index, items: bItems, baseIndex: index, columns: columns, showOddColor: showOddColor, showEvenColor: showEvenColor, onGetBodyRowStyle: onGetBodyRowStyle, onGetBodyRowSx: onGetBodyRowSx, onGetBodyRowClassName: onGetBodyRowClassName, onGetBodyColumnClassName: onGetBodyColumnClassName, onGetBodyColumnStyle: onGetBodyColumnStyle, onGetBodyColumnSx: onGetBodyColumnSx, defaultAlign: defaultAlign, defaultEllipsis: defaultEllipsis, sortable: sortable, onClick: onClick, onCheckChange: onCheckChange })); })));
        }
        else {
            return (React.createElement(TableSortableBodyBlock, { items: items, baseIndex: 0, columns: columns, showOddColor: showOddColor, showEvenColor: showEvenColor, onGetBodyRowStyle: onGetBodyRowStyle, onGetBodyRowSx: onGetBodyRowSx, onGetBodyRowClassName: onGetBodyRowClassName, onGetBodyColumnClassName: onGetBodyColumnClassName, onGetBodyColumnStyle: onGetBodyColumnStyle, onGetBodyColumnSx: onGetBodyColumnSx, defaultAlign: defaultAlign, defaultEllipsis: defaultEllipsis, sortable: sortable, onClick: onClick, onCheckChange: onCheckChange }));
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
    return sortable ? (React.createElement(SortableContext, { items: items, strategy: verticalListSortingStrategy }, renderBlock)) : (renderBlock);
};function columnFilter(v) {
    return v !== undefined && v !== null && v !== false;
}
var _columnId = 0;
var Table = React.forwardRef(function (_a, ref) {
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
            ? __assign(__assign({ width: '100%' }, initStyle), { flex: 1, justifyContent: 'flex-end', height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }) : __assign({ width: '100%' }, initStyle);
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
        return finalColumns && (React.createElement(TableTopHead, { caption: caption, rows: topHeadRows, columns: finalColumns, items: items, defaultAlign: defaultAlign, onCheckChange: handleHeadCheckChange }));
    }, [caption, defaultAlign, finalColumns, handleHeadCheckChange, items, topHeadRows]);
    var tableBody = useMemo(function () {
        return finalColumns && (React.createElement(TableBody, null, sortableItems ? (sortableItems.length > 0 ? (React.createElement(TableSortableBody, { items: sortableItems, columns: finalColumns, showOddColor: showOddColor, showEvenColor: showEvenColor, defaultAlign: defaultAlign, defaultEllipsis: defaultEllipsis, sortable: sortable, onClick: onClick, onCheckChange: handleBodyCheckChange, onGetBodyRowClassName: onGetBodyRowClassName, onGetBodyRowStyle: onGetBodyRowStyle, onGetBodyRowSx: onGetBodyRowSx, onGetBodyColumnClassName: onGetBodyColumnClassName, onGetBodyColumnSx: onGetBodyColumnSx, onGetBodyColumnStyle: onGetBodyColumnStyle })) : (React.createElement(StyledBodyRow$1, null,
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
            React.createElement(TableRow, null, finalColumns.map(function (column, idx) { return (React.createElement(TableFooterCell, { key: idx, column: column, items: items, defaultAlign: defaultAlign })); }))));
    }, [defaultAlign, finalColumns, footer, isNoData, items]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return finalColumns ? (React.createElement(TableContextProvider, { value: {
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
        React.createElement(Paper, { ref: fullHeight ? containerHeightDetector : undefined, className: classNames('Table', className, !!stickyHeader && 'sticky-header', !!fullHeight && 'full-height', !!showOddColor && 'odd-color', !!showEvenColor && 'even-color', !!sortable && 'sortable'), variant: 'outlined', style: style, sx: sx },
            fullHeight ? (React.createElement(SimpleBar, { ref: simpleBarRef, style: contentContainerStyle },
                React.createElement(DndContext, { sensors: sensors, collisionDetection: closestCenter, onDragEnd: handleDragEnd },
                    React.createElement(Table$1, { stickyHeader: stickyHeader, sx: tableSx, style: tableStyle },
                        tableTopHead,
                        tableBody,
                        tableFooter)))) : (React.createElement(Box, { style: contentContainerStyle },
                React.createElement(DndContext, { sensors: sensors, collisionDetection: closestCenter, onDragEnd: handleDragEnd },
                    React.createElement(Table$1, { stickyHeader: stickyHeader, sx: tableSx, style: tableStyle },
                        tableTopHead,
                        tableBody,
                        tableFooter)))),
            finalColumns && paging && paging.total > 0 && (React.createElement(Stack, { ref: fullHeight ? pagingHeightResizeDetector : undefined, alignItems: pagingAlign, style: pagingStyle },
                React.createElement(TablePagination, { className: pagination === null || pagination === void 0 ? void 0 : pagination.className, style: pagination === null || pagination === void 0 ? void 0 : pagination.style, sx: pagination === null || pagination === void 0 ? void 0 : pagination.sx, paging: paging, align: pagingAlign, onChange: handlePageChange })))))) : null;
});var getSearchInfo = function (search) {
    var searchInfo = {};
    if (search) {
        var ref = search.ref, searchGroups = search.searchGroups, props = __rest(search, ["ref", "searchGroups"]);
        searchInfo.ref = ref;
        searchInfo.searchGroups = searchGroups;
        searchInfo.props = props;
    }
    return searchInfo;
};
var getTableInfo = function (table) {
    var tableInfo = {};
    if (table) {
        var ref = table.ref, props = __rest(table, ["ref"]);
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
};var SearchTable = React.forwardRef(function (_a, ref) {
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
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    var searchView = useMemo(function () { return (React.createElement(Grid, { sx: { display: searchInfo.searchGroups ? undefined : 'none' } },
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
            searchInfo.searchGroups))); }, [color, handleSearchSubmit, searchInfo]);
    var tableView = useMemo(function () {
        var _a, _b;
        return (React.createElement(Grid, { style: fullHeight ? { flex: 1, display: 'flex', flexDirection: 'column' } : undefined },
            React.createElement(Table, __assign({}, tableInfo.props, { stickyHeader: stickyHeader || ((_a = tableInfo.props) === null || _a === void 0 ? void 0 : _a.stickyHeader), fullHeight: fullHeight || ((_b = tableInfo.props) === null || _b === void 0 ? void 0 : _b.fullHeight), ref: function (commands) {
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
    return (React.createElement(Grid, { container: true, direction: 'column', spacing: 1, className: classNames('SearchTable', className), style: fullHeight ? __assign(__assign({}, initStyle), { flex: 1, display: 'flex' }) : initStyle, sx: sx },
        searchView,
        betweenSearchTableComponent && React.createElement(Grid, null, betweenSearchTableComponent),
        tableView));
});var TableButton = React.forwardRef(function (_a, ref) {
    var children = _a.children, className = _a.className, initSx = _a.sx, _b = _a.variant, variant = _b === void 0 ? 'outlined' : _b, _c = _a.color, color = _c === void 0 ? 'primary' : _c, startIcon = _a.startIcon, endIcon = _a.endIcon, onClick = _a.onClick, props = __rest(_a, ["children", "className", "sx", "variant", "color", "startIcon", "endIcon", "onClick"]);
    return (React.createElement(PdgButton, __assign({ ref: ref, className: classNames(className, 'TableButton'), variant: variant, type: 'button', size: 'small', sx: __assign({ minWidth: 0, px: empty(startIcon) && empty(endIcon)
                ? '7px !important'
                : empty(children)
                    ? '5px !important'
                    : '7px !important' }, initSx), color: color, startIcon: startIcon, endIcon: endIcon, onClick: onClick }, props), children));
});
var TableButton$1 = React.memo(TableButton);var TableMenuButton = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    var children = _a.children, className = _a.className, initSx = _a.sx, _b = _a.color, color = _b === void 0 ? 'primary' : _b, _c = _a.variant, variant = _c === void 0 ? 'text' : _c, startIcon = _a.startIcon, _d = _a.placement, placement = _d === void 0 ? 'bottom' : _d, inModal = _a.inModal, zIndex = _a.zIndex, menuList = _a.menuList, props = __rest(_a, ["children", "className", "sx", "color", "variant", "startIcon", "placement", "inModal", "zIndex", "menuList"]);
    var buttonId = useId();
    var menuId = useId();
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
        React.createElement(PdgButton, __assign({ ref: function (r) {
                if (ref) {
                    if (typeof ref === 'function') {
                        ref(r);
                    }
                    else {
                        ref.current = r;
                    }
                }
                anchorRef.current = r;
            }, id: buttonId, variant: variant, "aria-controls": open ? menuId : undefined, "aria-expanded": open ? 'true' : undefined, "aria-haspopup": 'true', className: classNames(className, 'TableMenuButton'), type: 'button', size: 'small', sx: __assign({ minWidth: 0, pl: !children ? 0.7 : icon || startIcon ? 0.7 : variant === 'text' ? 1.2 : 0.7 }, initSx), color: color, startIcon: icon, onClick: handleClick }, props), children),
        React.createElement(Popper, { className: 'TableMenuButton-Popper', open: open, anchorEl: anchorRef.current, role: undefined, placement: placement, transition: true, style: { zIndex: inModal ? (zIndex === undefined ? 1301 : zIndex) : zIndex } }, function (_a) {
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
            return (React.createElement(Grow, __assign({}, TransitionProps, { style: {
                    transformOrigin: transformOrigin,
                } }),
                React.createElement(Paper, null,
                    React.createElement(ClickAwayListener, { onClickAway: handleClose }, finalMenuList))));
        })));
});var Label = styled(Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 12px;\n  font-weight: bold;\n"], ["\n  font-size: 12px;\n  font-weight: bold;\n"])));
var ValueWrap = styled(Box)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-top: 3px;\n  position: relative;\n  display: flex;\n  flex-direction: row;\n"], ["\n  margin-top: 3px;\n  position: relative;\n  display: flex;\n  flex-direction: row;\n"])));
var Value = styled('div')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  flex: 1;\n"], ["\n  flex: 1;\n"])));
var ValueEllipsis = styled('div')(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  flex: 1;\n  position: relative;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"], ["\n  flex: 1;\n  position: relative;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"])));
var ValueClipboard = styled('div')(templateObject_5 || (templateObject_5 = __makeTemplateObject([""], [""])));
var ClipboardIconButton = styled(IconButton)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  margin-top: -10px;\n  margin-bottom: -10px;\n"], ["\n  margin-top: -10px;\n  margin-bottom: -10px;\n"])));
var Line = styled('div')(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  border-top: 1px solid #efefef;\n  height: 1px;\n  flex: 1;\n"], ["\n  border-top: 1px solid #efefef;\n  height: 1px;\n  flex: 1;\n"])));
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
                            data = telNoAutoDash(data);
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
            return item.type === 'divider' ? (React.createElement(Grid, { key: idx, size: { xs: 12 } },
                React.createElement(Stack, { direction: 'row', spacing: 0.5, alignItems: 'center' },
                    item.icon && (React.createElement(PdgIcon, { sx: { color: item.dividerColor || dividerColor }, size: 'small' }, item.icon)),
                    item.label && (React.createElement(Label, { className: classNames(labelClassName, item.labelClassName), style: __assign(__assign({}, item.labelStyle), labelStyle), sx: finalLabelSx }, item.label)),
                    item.dividerLine && (React.createElement(React.Fragment, null, item.icon || item.label ? (React.createElement("div", { style: { flex: 1, paddingLeft: 5 } },
                        React.createElement(Line, null))) : (React.createElement(Line, null))))))) : (React.createElement(Grid, { key: idx, size: sizeProps, className: item.className, style: item.style, sx: item.sx },
                React.createElement(Stack, { direction: 'row', spacing: 0.5, alignItems: 'center' },
                    item.icon && (React.createElement(PdgIcon, { sx: { color: finalLabelColor }, size: 'small' }, "CalendarMonth")),
                    React.createElement(Label, { className: classNames(labelClassName, item.labelClassName), style: __assign(__assign({}, item.labelStyle), labelStyle), sx: finalLabelSx }, item.label)),
                React.createElement(ValueWrap, { className: classNames(valueClassName, item.valueClassName), style: __assign(__assign(__assign({}, valueStyle), item.valueStyle), valueUnderlineStyle), sx: finalValueSx },
                    item.ellipsis || ellipsis ? React.createElement(ValueEllipsis, null, data) : React.createElement(Value, null, data),
                    item.clipboard && notEmpty(copyToClipboardText) && (React.createElement(ValueClipboard, null,
                        React.createElement(PdgCopyToClipboard, { text: copyToClipboardText, onCopy: onCopyToClipboard ? function () { return onCopyToClipboard(item, copyToClipboardText); } : undefined },
                            React.createElement(ClipboardIconButton, __assign({ size: 'small', color: 'primary' }, item.clipboardProps),
                                React.createElement(PdgIcon, null, item.clipboardIcon || 'ContentPaste'))))))));
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
    return (React.createElement(Grid, { container: true, spacing: spacing, columnSpacing: columnSpacing, rowSpacing: rowSpacing, className: classNames('InfoTable', className), style: style, sx: sx }, content));
};export{InfoTable,SearchTable,Table,TableButton$1 as TableButton,TableMenuButton};