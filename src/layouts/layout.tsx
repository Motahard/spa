import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import StyledComponentsRegistry from '@/lib/registry';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <StyledComponentsRegistry>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
