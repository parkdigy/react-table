import React, { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import { Button, ClickAwayListener, Grow, Paper, Popper } from '@mui/material';
import { TableMenuButtonProps as Props, TableMenuButtonDefaultProps } from './TableMenuButton.types';
import useTableState from '../TableContext/useTableState';
import { PdgIcon } from '@pdg/react-component';

const TableMenuButton = React.forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      className,
      sx: initSx,
      color,
      icon,
      startIcon,
      endIcon,
      placement,
      inModal,
      zIndex,
      menuList,
      ...props
    },
    ref
  ) => {
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
              <PdgIcon fontSize='small' sx={{ mr: -0.5 }}>
                {startIcon}
              </PdgIcon>
            ) : undefined
          }
          endIcon={
            endIcon ? (
              <PdgIcon fontSize='small' sx={{ ml: -0.5 }}>
                {endIcon}
              </PdgIcon>
            ) : undefined
          }
          {...props}
        >
          {icon && (
            <PdgIcon fontSize='small' color={color}>
              {icon}
            </PdgIcon>
          )}
          {children}
        </Button>
        <Popper
          className='TableMenuButton-Popper'
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement={placement}
          transition
          style={{ zIndex: inModal ? (zIndex === undefined ? 1301 : zIndex) : zIndex }}
        >
          {({ TransitionProps, placement }) => {
            const placements = placement.split('-');
            let transformOrigin = '';
            if (placements[0] === 'left') {
              transformOrigin = 'right';
              // if (placements.length > 1) {
              //   if (placements[1] === 'start') {
              //     transformOrigin += ' top';
              //   } else if (placements[1] === 'end') {
              //     transformOrigin += ' bottom';
              //   }
              // }
            } else if (placements[0] === 'right') {
              transformOrigin = 'left';
              // if (placements.length > 1) {
              //   if (placements[1] === 'start') {
              //     transformOrigin += ' top';
              //   } else if (placements[1] === 'end') {
              //     transformOrigin += ' bottom';
              //   }
              // }
            } else if (placements[0] === 'top') {
              transformOrigin = 'bottom';
              // if (placements.length > 1) {
              //   if (placements[1] === 'start') {
              //     transformOrigin += ' left';
              //   } else if (placements[1] === 'end') {
              //     transformOrigin += ' right';
              //   }
              // }
            } else if (placements[0] === 'bottom') {
              transformOrigin = 'top';
              // if (placements.length > 1) {
              //   if (placements[1] === 'start') {
              //     transformOrigin += ' left';
              //   } else if (placements[1] === 'end') {
              //     transformOrigin += ' right';
              //   }
              // }
            } else {
              transformOrigin = 'top';
            }

            return (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin,
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
