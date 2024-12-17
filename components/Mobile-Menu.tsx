'use client';
import { useState } from 'react';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className={`secondary-menu__mobile ${isOpen ? 'open' : ''}`}>
      <a className="secondary-menu__mobile-toggle" onClick={toggleMenu}>
        <svg
          width={32}
          height={22}
          viewBox="0 0 32 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.970947 1.12085H30.9709"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M0.970947 10.7417H30.9709"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M0.970947 20.3625H30.9709"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="visually-hidden">Menu</span>
      </a>
      <a
        href="/location-search"
        className="secondary-menu__mobile-item"
        title="Find a Branch"
        aria-label="Find a Branch"
      >
        <svg
          width={36}
          height={52}
          viewBox="0 0 36 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.5178 2.83398C9.08579 2.83398 2.24976 9.66992 2.24976 18.1021C2.24976 30.959 17.5178 47.834 17.5178 47.834C17.5178 47.834 32.7858 30.959 32.7858 18.1021C32.7858 9.66992 25.9498 2.83398 17.5178 2.83398Z"
            fill="#F9CE64"
          />
          <path
            d="M17.5178 2.83398C9.08579 2.83398 2.24976 9.66992 2.24976 18.1021C2.24976 30.959 17.5178 47.834 17.5178 47.834C17.5178 47.834 32.7858 30.959 32.7858 18.1021C32.7858 9.66992 25.9498 2.83398 17.5178 2.83398Z"
            stroke="white"
            strokeWidth="4.5"
          />
          <path
            d="M17.5178 2.83398C9.08579 2.83398 2.24976 9.66992 2.24976 18.1021C2.24976 30.959 17.5178 47.834 17.5178 47.834C17.5178 47.834 32.7858 30.959 32.7858 18.1021C32.7858 9.66992 25.9498 2.83398 17.5178 2.83398Z"
            stroke="#000000"
            strokeWidth="1.5"
          />
          <path
            d="M21.9536 13.8642C26.8926 20.35 19.5556 27.6742 13.0816 22.734C8.1456 16.2592 15.4676 8.92714 21.9536 13.8642Z"
            fill="black"
          />
        </svg>
        Find a Branch
      </a>
    </div>
  );
};

export default MobileMenu;
