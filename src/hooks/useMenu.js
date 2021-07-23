import { useState } from 'react';

const useMenu = () => {
  const [isOpen, setIsOpen] = useState();
  const [anchorEl, setAnchorEl] = useState();

  const openMenu = (anchorEl) => {
    setAnchorEl(anchorEl);
    setIsOpen(true);
  };

  const closeMenu = () => {
    setAnchorEl(null);
    setIsOpen(false);
  };

  const menuProps = {
    getContentAnchorEl: null,
    anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
    transformOrigin: { vertical: 'top', horizontal: 'center' },
  };

  return { closeMenu, openMenu, isOpen, anchorEl, menuProps };
};

export default useMenu;
