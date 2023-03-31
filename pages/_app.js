import React from 'react';
import 'tailwindcss/tailwind.css'
import '../style/index.scss';
import { Layout } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default  MyApp