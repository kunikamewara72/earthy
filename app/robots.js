import data from '../data/content.json';
export default function robots() { return { rules: { userAgent: '*', allow: '/' }, sitemap: data.site.url + '/sitemap.xml' }; }
