# Nova UI Performance Optimization

This project was optimized for performance using Vite, lazy loading, image compression, build splitting, and a service worker for caching.

## Optimizations applied

- Added lazy loading to images with `loading="lazy"` and `decoding="async"`
- Replaced remote image URLs with local WebP assets
- Added eager loading and preloading for the critical logo and hero image
- Enabled code splitting with `React.lazy()` and `Suspense`
- Minified the production build with Vite and enabled gzip compression
- Added a service worker for offline and repeat-visit caching
- Reduced render-blocking resources by keeping critical assets small and using efficient asset loading

## Build and run

```bash
npm install
npm run build
npm run dev
```

## Lighthouse checklist

1. Run the app locally.
2. Open the preview or dev server.
3. Run Lighthouse in the browser.
4. Compare the results before and after the optimizations.

## Expected improvements

- Faster initial render
- Smaller JavaScript payloads
- Lower image transfer size
- Better caching on repeat visits
- Improved Lighthouse performance score
