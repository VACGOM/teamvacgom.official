import type { AppProps } from 'next/app';
import Script from 'next/script';
import '../app/globals.css';
import Layout from '../app/layout';
import 'react-tooltip/dist/react-tooltip.css';
import { useRouter } from 'next/navigation';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
