import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import StyledComponentsRegistry from '@/lib/registry';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StyledComponentsRegistry>
        <Navbar />
        <main>{children}</main>
        <div id="modal-root"></div>
        <Footer />
      </StyledComponentsRegistry>
    </>
  );
}
