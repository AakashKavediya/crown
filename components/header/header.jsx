"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import './header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Helper to check if a link is active
  const isActive = (href) => pathname === href;

  return (
    <div>
      <header className="header-container">
        <div className="logo-section">
          <Link href="/" passHref legacyBehavior>
            <a>
              <img className="logo-image" src="/publicImage/crown_logo.jpg" alt="Logo" />
            </a>
          </Link>
        </div>

        <div className="main-content">
          <h2 className="site-title">CROWN</h2>

          <div className="nav-links desktop-only">
            <nav>
              <Link href="/" className={isActive('/') ? 'active' : ''}>Home</Link>
              <Link href="/about" className={isActive('/about') ? 'active' : ''}>About</Link>

              <div className="menu-dropdown">
                <button className="menu-button">HAM</button>
                <div className="dropdown-items">
                  <Link href="/ham/aboutham" className={isActive('/ham/aboutham') ? 'active' : ''}>About HAM</Link>
                  <Link href="/ham/arsi" className={isActive('/ham/arsi') ? 'active' : ''}>ARSI</Link>
                  <Link href="/ham/iaru" className={isActive('/ham/iaru') ? 'active' : ''}>IARU</Link>
                  <Link href="/ham/swl" className={isActive('/ham/swl') ? 'active' : ''}>SWL</Link>
                  <Link href="/ham/ourhams" className={isActive('/ham/ourhams') ? 'active' : ''}>Our HAMS</Link>
                  <Link href="/ham/wannabeham" className={isActive('/ham/wannabeham') ? 'active' : ''}>Wanna be HAM</Link>
                </div>
              </div>

              <Link href="/contact" className={isActive('/contact') ? 'active' : ''}>Contact Us</Link>
            </nav>
          </div>

          <button className="menu-toggle" onClick={() => setMenuOpen(true)} aria-label="Open navigation">
            <svg width="32" height="32" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="#111" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </header>

      <div className={`overlay${menuOpen ? ' show' : ''}`} onClick={() => setMenuOpen(false)}></div>

      <div className={`side-panel${menuOpen ? ' show' : ''}`}>
        <button className="close-toggle" onClick={() => setMenuOpen(false)} aria-label="Close navigation">
          <svg width="32" height="32" viewBox="0 0 24 24">
            <path d="M6 6l12 12M6 18L18 6" stroke="#111" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        <nav className="panel-links">
          <Link href="/" className={isActive('/') ? 'active' : ''} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" className={isActive('/about') ? 'active' : ''} onClick={() => setMenuOpen(false)}>About</Link>

          <div className="menu-dropdown">
            <button className="menu-button">HAM</button>
            <div className="dropdown-items">
              <Link href="/ham/aboutham" className={isActive('/ham/aboutham') ? 'active' : ''} onClick={() => setMenuOpen(false)}>About HAM</Link>
              <Link href="/ham/arsi" className={isActive('/ham/arsi') ? 'active' : ''} onClick={() => setMenuOpen(false)}>ARSI</Link>
              <Link href="/ham/iaru" className={isActive('/ham/iaru') ? 'active' : ''} onClick={() => setMenuOpen(false)}>IARU</Link>
              <Link href="/ham/swl" className={isActive('/ham/swl') ? 'active' : ''} onClick={() => setMenuOpen(false)}>SWL</Link>
              <Link href="/ham/ourhams" className={isActive('/ham/ourhams') ? 'active' : ''} onClick={() => setMenuOpen(false)}>Our HAMS</Link>
              <Link href="/ham/wannabeham" className={isActive('/ham/wannabeham') ? 'active' : ''} onClick={() => setMenuOpen(false)}>Wanna be HAM</Link>
            </div>
          </div>

          <Link href="/contact" className={isActive('/contact') ? 'active' : ''} onClick={() => setMenuOpen(false)}>Contact Us</Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
