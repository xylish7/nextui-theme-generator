import Footer from "./Footer";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 my-12">{children}</main>
      <Footer />
    </>
  );
}
