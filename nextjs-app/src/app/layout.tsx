import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wahid Hammami — IT Advisor & CTO",
  description:
    "Portfolio of Wahid Hammami — IT Advisor & CTO at the Ministry of Energy, Saudi Arabia. Over 40 years of IT leadership in the energy and government sectors.",
  openGraph: {
    title: "Wahid Hammami — IT Advisor & CTO",
    description: "40+ years of IT leadership in energy and government.",
    type: "profile",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <Script
          id="suppress-ext-errors"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (typeof window === 'undefined') return;
                var isExtError = function(msg, src, err) {
                  var str = (msg || '') + ' ' + (src || '') + ' ' + (err && err.stack ? err.stack : '');
                  return str.indexOf('chrome-extension:') !== -1 || 
                         str.indexOf('Minified React error #299') !== -1 ||
                         str.indexOf('invariant=299') !== -1 ||
                         str.indexOf('oihbmmeelledioenpfcfehdjhdnlfibj') !== -1;
                };

                window.addEventListener('error', function(e) {
                  if (isExtError(e.message, e.filename, e.error)) {
                    e.stopImmediatePropagation();
                    e.preventDefault();
                    return true;
                  }
                }, true);

                window.addEventListener('unhandledrejection', function(e) {
                  var reason = e.reason;
                  var str = reason && reason.stack ? reason.stack : String(reason);
                  if (isExtError(str, '', reason)) {
                    e.stopImmediatePropagation();
                    e.preventDefault();
                  }
                }, true);

                var origConsoleError = console.error;
                console.error = function() {
                  var argsStr = Array.prototype.slice.call(arguments).map(function(a) {
                    return a && a.stack ? a.stack : String(a);
                  }).join(' ');
                  if (isExtError(argsStr)) return;
                  origConsoleError.apply(console, arguments);
                };
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
