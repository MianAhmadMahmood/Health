'use client';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user) {
      setIsLoggedIn(true);
      if (user.role === 'admin') {
        setIsAdmin(true);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setIsLoggedIn(false);
    setIsAdmin(false);
    window.location.href = '/login';
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/booking', label: 'Booking' },
  ];

  return (
    <nav className="bg-emerald-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
        <h1 className="text-2xl font-bold tracking-wide">
          Hope <span className="text-sky-200">Health Care</span>
        </h1>
        <div className="md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg font-medium items-center">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="hover:text-sky-200 transition duration-200">
                {label}
              </Link>
            </li>
          ))}

          {isAdmin && (
            <li>
              <Link href="/admin" className="hover:text-yellow-300 font-semibold transition">
                Admin
              </Link>
            </li>
          )}

          <li>
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="hover:text-sky-200 transition duration-200"
              >
                Logout
              </button>
            ) : (
              <Link href="/login" className="hover:text-sky-200 transition">
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-emerald-600 px-4 py-2 space-y-2">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setOpen(false)}
                className="block py-2 hover:text-sky-200"
              >
                {label}
              </Link>
            </li>
          ))}

          {isAdmin && (
            <li>
              <Link
                href="/admin"
                onClick={() => setOpen(false)}
                className="block py-2 text-yellow-300 font-semibold"
              >
                Admin
              </Link>
            </li>
          )}

          <li>
            {isLoggedIn ? (
              <button
                onClick={() => {
                  setOpen(false);
                  handleLogout();
                }}
                className="block w-full text-left py-2 hover:text-sky-200"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="block py-2 hover:text-sky-200"
              >
                Login
              </Link>
            )}
          </li>
        </ul>
      )}
    </nav>
  );
}
