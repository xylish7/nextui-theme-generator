import Navbar from "./navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 my-12">{children}</main>
    </>
  );
}
