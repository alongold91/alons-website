import type { Metadata } from 'next';
import './globals.css';
import style from './page.module.css';
import Navbar from './ui/Navbar';

export const metadata: Metadata = {
  title: 'Alon`s website',
  description:
    'Alon`s personal website to show his projects, write his blog articles and have his tutorials'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={style['body-default-style']}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
