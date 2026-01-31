export const dynamic = 'force-static';

export default function sitemap() {
  const baseUrl = 'https://providenceanglican.id';
  
  const routes = [
    '',
    '/about',
    '/statement-of-faith',
    '/leadership',
    '/gallery',
    '/blog',
    '/get-involved',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  return [...routes];
}
