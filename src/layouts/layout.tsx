import ErrorBoundary from '@/components/error';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import StyledComponentsRegistry from '@/lib/registry';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ErrorBoundary>
      <StyledComponentsRegistry>
        <Navbar />
        <main>{children}</main>
        <div id="modal-root"></div>
        <Footer />
      </StyledComponentsRegistry>
    </ErrorBoundary>
  );
}
