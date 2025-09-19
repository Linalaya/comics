import React from 'react';
import Navbar from './ui/navbar/Navbar';

export default function App({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
