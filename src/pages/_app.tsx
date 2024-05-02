import '@/styles/global.css';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';

const DynamicRootLayout = dynamic(
  () => import('@/layouts/layout').then((mod) => mod.default),
  {
    ssr: false,
  }
);

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DynamicRootLayout>
      <Component {...pageProps} />
    </DynamicRootLayout>
  );
}
