import React from 'react';

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <div id='modal-root'></div>
      <Footer />
    </>
  );
}
