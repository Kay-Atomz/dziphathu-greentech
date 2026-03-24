import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo/logo.png';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/hasha-mulilo', label: 'Hasha Mulilo' },
  { to: '/book', label: 'Our Book' },
  { to: '/donations', label: 'Donate' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const transparent = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent
          ? 'bg-transparent border-transparent'
          : 'bg-[#F7F6F2] border-b border-[#DEDAD3]'
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <img
              src={logo}
              alt="Dziphathu GreenTech"
              className="h-8 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `text-sm transition-colors ${
                    transparent
                      ? isActive
                        ? 'text-white font-medium'
                        : 'text-white/70 hover:text-white'
                      : isActive
                        ? 'text-[#111110] font-medium'
                        : 'text-[#6B6A65] hover:text-[#111110]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex">
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors ${
                transparent
                  ? 'text-white/80 hover:text-white'
                  : 'text-[#2A5C45] hover:text-[#1E4433]'
              }`}
            >
              Get in touch →
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-1.5 transition-colors ${
              transparent ? 'text-white' : 'text-[#111110]'
            }`}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#F7F6F2] border-t border-[#DEDAD3]">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `py-2.5 text-sm border-b border-[#DEDAD3] last:border-0 ${
                    isActive ? 'text-[#111110] font-medium' : 'text-[#6B6A65]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="mt-2 py-2.5 text-sm font-medium text-[#2A5C45]"
            >
              Get in touch →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
