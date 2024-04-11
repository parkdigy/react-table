import React, { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import { ClickAwayListener, Grow, Paper, Popper } from '@mui/material';
import { TableMenuButtonProps as Props, TableMenuButtonDefaultProps } from './TableMenuButton.types';
import useTableState from '../TableContext/useTableState';
import { PdgButton } from '@pdg/react-component';

const TableMenuButton = React.forwardRef<HTMLButtonElement, Props>(
  (
    { children, className, sx: initSx, color, variant, startIcon, placement, inModal, zIndex, menuList, ...props },
    ref
  ) => {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/

    const buttonId = useId();
    const menuId = useId();

    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/

    const { menuOpen, openMenuId, setMenuOpen } = useTableState();

    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/

    const anchorRef = useRef<HTMLButtonElement | null>();

    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/

    const [open, setOpen] = useState(false);

    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/

    const icon = useMemo(() => (!startIcon && !children ? 'MoreVert' : undefined), [startIcon, children]);

    const sx = useMemo(
      () => ({
        minWidth: 0,
        pl: !children ? 0.7 : icon || startIcon ? 0.7 : variant === 'text' ? 1.2 : 0.7,
        ...initSx,
      }),
      [children, icon, initSx, startIcon, variant]
    );

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

    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/

    const finalMenuList = useMemo(() => {
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

    return (
      <span>
        <PdgButton
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
          variant={variant}
          aria-controls={open ? menuId : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup='true'
          className={classNames(className, 'TableMenuButton')}
          type='button'
          size='small'
          sx={sx}
          color={color}
          startIcon={icon}
          onClick={handleClick}
          {...props}
        >
          {children}
        </PdgButton>
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
