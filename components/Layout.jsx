import React from 'react';
import { useRouter } from 'next/router';
import { Header } from './';
import NewsLetter from './NewsLetter';
import Footer from './Footer';

const Layout = ({ children }) => {
  const router = useRouter();
  const is404 = router.pathname === '/404';

  return (
    <>
      <Header />
      {children}
      {!is404 && <Footer />}
    </>
  );
};

export default Layout;
