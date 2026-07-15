import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { useReveal } from '../hooks/useReveal';

export const Layout: React.FC = () => {
  const location = useLocation();

  // Initialize scroll-reveal hook
  useReveal();

  // Auto scroll to top on routing changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
