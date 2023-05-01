import React from 'react';
import 'tailwindcss/tailwind.css'
import '../style/index.scss';
import { Layout } from '../components';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
       <Analytics/>
    </Layout>
  );
}

export default  MyApp