import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import faviconImg from '../assets/sanchari-favicon.png';

export function Root() {
  const { pathname } = useLocation();

  // Set favicon
  useEffect(() => {
    const link = document.querySelector<HTMLLinkElement>("link[rel~='icon']") || document.createElement('link');
    link.rel = 'icon';
    link.href = faviconImg;
    document.head.appendChild(link);
  }, []);

  // Scroll to top on page navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        html { scroll-behavior: smooth; }
        * { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
        ::selection { background: #4F46E5; color: white; }
      ` }} />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
