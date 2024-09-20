import type { Metadata } from 'next';
import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import './globalicon.css';
import Head from 'next/head';
import 'react-tooltip/dist/react-tooltip.css';

const inter = Inter({ subsets: ['latin'] });
export const metadata = {
  title: "Vacgom Official",
  description: "Team Vacgom의 공식 홈페이지입니다.",
  image: "https://private-user-images.githubusercontent.com/53892427/317091000-c89039ca-a866-452c-b372-79537abbc4d0.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjY4MjY1OTMsIm5iZiI6MTcyNjgyNjI5MywicGF0aCI6Ii81Mzg5MjQyNy8zMTcwOTEwMDAtYzg5MDM5Y2EtYTg2Ni00NTJjLWIzNzItNzk1MzdhYmJjNGQwLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA5MjAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwOTIwVDA5NTgxM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTExOTU2ZjFhODUxNmU1NGFjNGEwMjdlZTQ1OGM5MTYwYzUyNTkwMzYxYjEyMjI2MjVkODVlMmMyMDgwYjFhNDQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.JMZ0_Qpyg0C6DCcon-nrIFP7TcLHYFJlOPs3MjKdrig",
  url: "https://about.vacgom.co.kr/"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
      <meta name="description" content="Generated by create next app" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
