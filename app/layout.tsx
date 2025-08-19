import type { Metadata } from 'next';
import { DesktopSidebar, MobileSidebar } from '@/components/Sidebar';
import Providers from './providers';
import Header from '@/components/Header';
import './globals.css';

export const metadata: Metadata = {
  title: 'GitHub Dashboard',
  description: 'Simple GitHub users dashboard with Next.js + Tailwind',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="min-h-screen flex bg-gray-100 text-gray-900">
        <Providers>
          <DesktopSidebar />
          <MobileSidebar />
          <div className="flex-1 flex flex-col">
            <Header />
            <main className="flex-1 p-6 mt-10 md:mt-20 ml-0 md:ml-64">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
