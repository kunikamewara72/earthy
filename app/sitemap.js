import data from '../data/content.json';
export default function sitemap() { return data.nav.map(([, h]) => ({ url: data.site.url + (h === '/' ? '' : h), lastModified: new Date(), priority: h === '/' ? 1 : 0.8 })); }
