import React, { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import { Button, ClickAwayListener, Grow, Paper, Popper } from '@mui/material';
import { TableMenuButtonProps as Props, TableMenuButtonDefaultProps } from './TableMenuButton.types';
import TableIcon from '../TableIcon';
import useTableState from '../TableContext/useTableState';

const TableMenuButton = React.forwardRef<HTMLButtonElement, Props>(
  ({ children, className, sx: initSx, color, icon, startIcon, endIcon, placement, menuList, ...props }, ref) => {
    // ID ----------------------------------------------------------------------------------------------------------------

    const buttonId = useId();
    const menuId = useId();

    // Use ---------------------------------------------------------------------------------------------------------------

    const { menuOpen, openMenuId, setMenuOpen } = useTableState();

    // Ref ---------------------------------------------------------------------------------------------------------------

    const anchorRef = useRef<HTMLButtonElement | null>();

    // State -------------------------------------------------------------------------------------------------------------

    const [open, setOpen] = useState(false);

    // Effect ------------------------------------------------------------------------------------------------------------

    useEffect(() => {
      if (open && menuOpen && openMenuId !== menuId) {
        setOpen(false);
      }
    }, [menuId, menuOpen, open, openMenuId]);

    // Memo --------------------------------------------------------------------------------------------------------------

    const sx = useMemo(
      () => ({ minWidth: 0, px: !startIcon && !endIcon ? 0.7 : 1.7, ...initSx }),
      [endIcon, initSx, startIcon]
    );

    // Event Handler -----------------------------------------------------------------------------------------------------

    const handleClick = useCallback(() => {
      setOpen((old) => !old);
      if (!open) {
        setMenuOpen(true, menuId);
      } else {
        setMenuOpen(false, menuId);
      }
    }, [menuId, open, setMenuOpen]);

    const handleClose = useCallback(() => {
      if (open) {
        setOpen(false);
        setMenuOpen(false, menuId);
      }
    }, [menuId, open, setMenuOpen]);

    const handleListKeyDown = useCallback(
      (event: React.KeyboardEvent) => {
        if (event.key === 'Tab') {
          event.preventDefault();
          if (open) {
            setOpen(false);
            setMenuOpen(false, menuId);
          }
        } else if (event.key === 'Escape') {
          if (open) {
            setOpen(false);
            setMenuOpen(false, menuId);
          }
        }
      },
      [menuId, open, setMenuOpen]
    );

    // Memo --------------------------------------------------------------------------------------------------------------

    const finalMenuList = useMemo(() => {
      return React.cloneElement(menuList, {
        autoFocusItem: open,
        id: menuId,
        'aria-labelledby': buttonId,
        onKeyDown: handleListKeyDown,
        onClick: handleClose,
      });
    }, [buttonId, handleClose, handleListKeyDown, menuId, menuList, open]);

    // Render ----------------------------------------------------------------------------------------------------------

    return (
      <span>
        <Button
          ref={(r) => {
            if (ref) {
              if (typeof ref === 'function') {
                ref(r);
              } else {
                ref.current = r;
              }
            }
            anchorRef.current = r;
          }}
          id={buttonId}
          aria-controls={open ? menuId : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup='true'
          className={classNames(className, 'TableMenuButton')}
          type='button'
          size='small'
          sx={sx}
          color={color}
          onClick={handleClick}
          startIcon={
            startIcon ? (
              <TableIcon fontSize='small' sx={{ mr: -0.5 }}>
                {startIcon}
              </TableIcon>
            ) : undefined
          }
          endIcon={
            endIcon ? (
              <TableIcon fontSize='small' sx={{ ml: -0.5 }}>
                {endIcon}
              </TableIcon>
            ) : undefined
          }
          {...props}
        >
          {icon && (
            <TableIcon fontSize='small' color={color}>
              {icon}
            </TableIcon>
          )}
          {children}
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} placement={placement} transition>
          {({ TransitionProps, placement }) => {
            return (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom',
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>{finalMenuList}</ClickAwayListener>
                </Paper>
              </Grow>
            );
          }}
        </Popper>
      </span>
    );
  }
);

TableMenuButton.displayName = 'TableMenuButton';
TableMenuButton.defaultProps = TableMenuButtonDefaultProps;

export default TableMenuButton;
