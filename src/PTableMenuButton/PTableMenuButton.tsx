import React, { useCallback, useEffect, useEffectEvent, useId, useMemo, useState } from 'react';
import classNames from 'classnames';
import { ClickAwayListener, Grow, Paper, Popper } from '@mui/material';
import { PTableMenuButtonProps as Props } from './PTableMenuButton.types';
import useTableState from '../PTableContext/useTableState';
import { PButton } from '@pdg/react-component';

const PTableMenuButton = ({
  ref,
  children,
  className,
  sx: initSx,
  color = 'primary',
  variant = 'text',
  startIcon,
  placement = 'bottom',
  inModal,
  zIndex,
  menuList,
  ...props
}: Props) => {
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
   * State
   * ******************************************************************************************************************/

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>();
  const [open, setOpen] = useState(false);

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  {
    const effectEvent = useEffectEvent(() => {
      if (open && menuOpen && openMenuId !== menuId) {
        setOpen(false);
      }
    });
    useEffect(() => {
      effectEvent();
    }, [menuId, menuOpen, open, openMenuId]);
  }

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
   * Variable
   * ******************************************************************************************************************/

  const icon = !startIcon && !children ? 'MoreVert' : undefined;

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <span>
      <PButton
        ref={(r) => {
          if (ref) {
            if (typeof ref === 'function') {
              ref(r);
            } else {
              ref.current = r;
            }
          }
          setAnchorEl(r);
        }}
        id={buttonId}
        variant={variant}
        aria-controls={open ? menuId : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup='true'
        className={classNames(className, 'PTableMenuButton')}
        type='button'
        size='small'
        sx={{
          minWidth: 0,
          pl: !children ? 0.7 : icon || startIcon ? 0.7 : variant === 'text' ? 1.2 : 0.7,
          ...initSx,
        }}
        color={color}
        startIcon={icon}
        onClick={handleClick}
        {...props}
      >
        {children}
      </PButton>
      <Popper
        className='PTableMenuButton-Popper'
        open={open}
        anchorEl={anchorEl}
        role={undefined}
        placement={placement}
        transition
        style={{ zIndex: inModal ? (zIndex === undefined ? 1301 : zIndex) : zIndex }}
      >
        {({ TransitionProps, placement }) => {
          const placements = placement.split('-');
          let transformOrigin;
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
};

export default PTableMenuButton;
