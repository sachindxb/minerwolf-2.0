'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    window.location.href = '/landing/landing/page.html';
  }, []);

  return null;
}