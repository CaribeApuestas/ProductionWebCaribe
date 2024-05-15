'use client'
import React, { useState, useEffect } from 'react';
import { MobileNavigationMenu } from './components/MobileNavigationMenu';
import { NavigationMenu } from './components/NavigationMenu';

export const Menu = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 990); // Ajusta el valor según tus necesidades
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Llama a la función al cargar la página

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={isMobile ? 'mobile_menu' : 'desktop_menu'}>
      {isMobile ? <MobileNavigationMenu /> : <NavigationMenu />}
    </div>
  );
}

export default Menu;