'use client';

import { useState } from 'react';
import { Header, Sidebar } from './components';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <html lang="en" className={`${darkMode ? 'dark' : ''}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&family=Tilt+Neon&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-black dark:bg-slate-800 dark:text-white">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="flex dark:bg-slate-800 dark:text-white">
          <Sidebar />
          <section className="flex-1">{children}</section>
        </main>
      </body>
    </html>
  );
}
