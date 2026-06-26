import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { siteConfig } from './src/config/site'

/**
 * Injects SEO meta tags and (optionally) Google Analytics into index.html at
 * build time, sourced entirely from `src/config/site.ts`. Update values there;
 * never edit the generated markup by hand.
 */
function htmlSeoMeta() {
  const { seo, themeColor, url, name, analytics } = siteConfig
  return {
    name: 'html-seo-meta',
    transformIndexHtml() {
      const tags: any[] = [
        { tag: 'title', children: seo.title, injectTo: 'head' },
        { tag: 'meta', attrs: { name: 'description', content: seo.description }, injectTo: 'head' },
        { tag: 'meta', attrs: { name: 'keywords', content: seo.keywords.join(', ') }, injectTo: 'head' },
        { tag: 'meta', attrs: { name: 'theme-color', content: themeColor }, injectTo: 'head' },
        { tag: 'link', attrs: { rel: 'canonical', href: url }, injectTo: 'head' },
        { tag: 'meta', attrs: { property: 'og:type', content: 'website' }, injectTo: 'head' },
        { tag: 'meta', attrs: { property: 'og:site_name', content: name }, injectTo: 'head' },
        { tag: 'meta', attrs: { property: 'og:title', content: seo.title }, injectTo: 'head' },
        { tag: 'meta', attrs: { property: 'og:description', content: seo.description }, injectTo: 'head' },
        { tag: 'meta', attrs: { property: 'og:url', content: url }, injectTo: 'head' },
        { tag: 'meta', attrs: { property: 'og:locale', content: seo.locale }, injectTo: 'head' },
        { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' }, injectTo: 'head' },
        { tag: 'meta', attrs: { name: 'twitter:title', content: seo.title }, injectTo: 'head' },
        { tag: 'meta', attrs: { name: 'twitter:description', content: seo.description }, injectTo: 'head' },
      ]
      if (seo.ogImage) {
        tags.push(
          { tag: 'meta', attrs: { property: 'og:image', content: seo.ogImage }, injectTo: 'head' },
          { tag: 'meta', attrs: { name: 'twitter:image', content: seo.ogImage }, injectTo: 'head' },
        )
      }
      if (seo.twitterHandle) {
        tags.push({ tag: 'meta', attrs: { name: 'twitter:site', content: seo.twitterHandle }, injectTo: 'head' })
      }
      if (analytics.googleAnalyticsId) {
        tags.push(
          {
            tag: 'script',
            attrs: { async: true, src: `https://www.googletagmanager.com/gtag/js?id=${analytics.googleAnalyticsId}` },
            injectTo: 'head',
          },
          {
            tag: 'script',
            children: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${analytics.googleAnalyticsId}');`,
            injectTo: 'head',
          },
        )
      }
      return tags
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), htmlSeoMeta()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.webp', '**/*.gif'],
})
