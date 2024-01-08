import Link from 'next/link';
import style from './Navbar.module.css';

const Navbar = () => {
  return (
    <header>
      <nav className={style.nav}>
        <ul className={style.ul}>
          <li>
            <Link href='google.com'>Home</Link>
          </li>
          <li>
            <Link href='google.com'>Blog</Link>
          </li>
          <li>
            <Link href='google.com'>Tutorials</Link>
          </li>
          <li>
            <Link href='google.com'>Portfolio Projects</Link>
          </li>
          <li>
            <Link href='google.com'>Digital Paintings</Link>
          </li>
          <li>
            <Link href='google.com'>Contact Me</Link>
          </li>
        </ul>
        <p>Search bar</p>
      </nav>
    </header>
  );
};

export default Navbar;
