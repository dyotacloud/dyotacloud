import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  server: {
    headers: {
      // Prevent clickjacking — site can't be embedded in iframes on other domains
      'X-Frame-Options': 'SAMEORIGIN',

      // Block MIME-type sniffing attacks
      'X-Content-Type-Options': 'nosniff',

      // Enable browser XSS filter (legacy browsers)
      'X-XSS-Protection': '1; mode=block',

      // Control referrer info sent to other sites
      'Referrer-Policy': 'strict-origin-when-cross-origin',

      // Restrict browser features/APIs
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=()',

      // Content Security Policy — whitelist trusted sources only
      'Content-Security-Policy': [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        "font-src 'self' https://fonts.gstatic.com",
        "img-src 'self' data: blob: https://images.unsplash.com https://randomuser.me https://lh3.googleusercontent.com https://www.google.com https://www.googletagmanager.com",
        "frame-src https://www.google.com https://www.googletagmanager.com",
        "connect-src 'self' https://dummyjson.com https://www.google-analytics.com https://www.googletagmanager.com",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
        "upgrade-insecure-requests",
      ].join('; '),
    },
  },

  // Same headers for preview build
  preview: {
    headers: {
      'X-Frame-Options': 'SAMEORIGIN',
      'X-Content-Type-Options': 'nosniff',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=()',
      'Content-Security-Policy': [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        "font-src 'self' https://fonts.gstatic.com",
        "img-src 'self' data: blob: https://images.unsplash.com https://randomuser.me https://lh3.googleusercontent.com https://www.google.com https://www.googletagmanager.com",
        "frame-src https://www.google.com https://www.googletagmanager.com",
        "connect-src 'self' https://dummyjson.com https://www.google-analytics.com https://www.googletagmanager.com",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
        "upgrade-insecure-requests",
      ].join('; '),
    },
  },
})
