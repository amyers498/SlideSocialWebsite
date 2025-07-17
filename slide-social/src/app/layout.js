// src/app/layout.js
export const metadata = {
  title: "Slide Social",
  description: "Slide Social – Connecting people in real life.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
