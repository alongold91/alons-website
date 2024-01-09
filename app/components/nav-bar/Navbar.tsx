'use client';
import Link from 'next/link';
import style from './Navbar.module.css';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'Home', href: '/' },
  {name: 'Blog', href: '/blog' },
  { name: 'Tutorials', href: '/tutorials' },
  { name: 'Portfolio Projects', href: '/portfolio-projects' },
  { name: 'Digital Paintings', href: '/digital-paintings' },
  { name: 'Contact Me', href: '/contact-me' }
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <header>
      <nav className={style.nav}>
        <ul className={style.ul}>
          {links.map((link) => {
            return (
              <li key={`li-${link.name}`}>
                <Link
                  key={`link-${link.name}`}
                  href={link.href}
                  className={clsx({
                    [style['active-link']]: pathname === link.href
                  })}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <p>Search bar</p>
      </nav>
    </header>
  );
};

export default Navbar;
