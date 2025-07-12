"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import './header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <header className="header-container">
        <div className="logo-section">
          <img className="logo-image" src="/publicImage/crown_logo.jpg" alt="Logo" />
        </div>

        <div className="main-content">
          <h2 className="site-title">CROWN</h2>

          <div className="nav-links desktop-only">
            <nav>
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>

              <div className="menu-dropdown">
                <button className="menu-button">HAM</button>
                <div className="dropdown-items">
                  <Link href="/ham/aboutham">About HAM</Link>
                  <Link href="/ham/arsi">ARSI</Link>
                  <Link href="/ham/iaru">IARU</Link>
                  <Link href="/ham/ourhams">Our HAMS</Link>
                  <Link href="/ham/wannabeham">Wanna be HAM</Link>
                </div>
              </div>

              <Link href="/contact">Contact Us</Link>
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
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>

          <div className="menu-dropdown">
            <button className="menu-button">HAM</button>
            <div className="dropdown-items">
              <Link href="/ham/aboutham" onClick={() => setMenuOpen(false)}>About HAM</Link>
              <Link href="/ham/arsi" onClick={() => setMenuOpen(false)}>ARSI</Link>
              <Link href="/ham/iaru" onClick={() => setMenuOpen(false)}>IARU</Link>
              <Link href="/ham/swl" onClick={() => setMenuOpen(false)}>SWL</Link>
              <Link href="/ham/ourhams" onClick={() => setMenuOpen(false)}>Our HAMS</Link>
              <Link href="/ham/wannabeham" onClick={() => setMenuOpen(false)}>Wanna be HAM</Link>
            </div>
          </div>

          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
