"use client";
// src/app/page.js
import Image from 'next/image';
import './globals.css';
import { useEffect, useState } from 'react';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg" style={{ minHeight: '100vh', height: 'auto' }}>
      <div
        className="splash-logo"
        style={{
          opacity: showSplash ? 1 : 0,
          visibility: showSplash ? 'visible' : 'hidden',
          transition: 'opacity 1s ease-in-out, visibility 1s ease-in-out',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 10,
        }}
      >
        <Image
          src="/logo.png"
          alt="Slide Social Logo"
          width={160}
          height={160}
          priority
        />
      </div>

      {!showSplash && (
        <main
          className="container fade-in"
          style={{
            height: 'auto',
            maxHeight: '100vh',
            overflowY: 'auto',
            width: '100%',
          }}
        >
          <div className="letter-card">
            <Image
              src="/logo.png"
              alt="Slide Social Logo"
              width={120}
              height={120}
              className="logo"
              priority
            />
            <div className="letter">
              <p>To the ones looking for something real,</p>
              <p>
                In a world overflowing with notifications, filters, and quick reactions,
                something essential has been lost—real connection.
                <br /><br />
                At Slide Social, we’ve been building quietly—something different.
                Something that doesn’t fight for your attention but instead
                respects your time. A platform built with psychology, design,
                and intention at its core.
                <br /><br />
                Slide Social isn’t about keeping you online. It’s about helping
                you meet someone—down the street, across the hall, or around
                the corner. Whether you’re solo or with a group, Slide connects
                you with others in the moment—then gives you a place to meet in real life.
                <br /><br />
                We’ll be launching late 2025. Until then, we’re building the right way:
                intentionally, quietly, and with real people in mind.
                <br /><br />
                No big announcements yet. Just a quiet reminder that something
                more meaningful is on the way.
                <br /><br />
                Stay close.
              </p>
              <div className="signature">– Team at Slide Social</div>
            </div>

            <div
              className="social-links"
              style={{
                marginTop: '2rem',
                display: 'flex',
                gap: '1.5rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <a href="https://www.instagram.com/slidesocial1/" target="_blank" rel="noopener noreferrer">
                <Image src="/instagram.svg" alt="Instagram" width={48} height={48} />
              </a>
              <a href="https://www.linkedin.com/company/slidesocialapp/" target="_blank" rel="noopener noreferrer">
                <Image src="/linkedin.svg" alt="LinkedIn" width={48} height={48} />
              </a>
              <a href="https://www.tiktok.com/@slidesocial1?_t=ZP-8y5o0eoyM6J&_r=1" target="_blank" rel="noopener noreferrer">
                <Image src="/tiktok.svg" alt="TikTok" width={48} height={48} />
              </a>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}
