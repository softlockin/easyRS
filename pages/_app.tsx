import type { AppProps } from 'next/app';
import '../lib/common/styles/design_tokens.css';
import '../lib/common/styles/globals.css';
import '../lib/common/styles/utilities.css';

import { Roboto } from '@next/font/google';

const roboto = Roboto({ subsets: ['latin'], weight: '400' });

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
