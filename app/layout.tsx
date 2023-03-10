'use client';

import { useState } from 'react';
import { Header, Sidebar } from './components';
import { Raleway } from 'next/font/google';
import './globals.css';

export const metadata = {
  title: 'EasyCopy — AI powered Grammar Checker',
  description: 'Copywriting with the power of AI',
};

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <html lang="en">
      <body className={`${raleway.className} ${darkMode ? 'dark' : ''}`}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="flex dark:bg-slate-800 dark:text-white min-h-screen">
          <Sidebar />
          <section className="flex-1">{children}</section>
        </main>
      </body>
    </html>
  );
}
